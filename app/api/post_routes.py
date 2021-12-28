import boto3
import botocore
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Post
from app.forms.post_form import PostForm
from app.config import Config
from app.aws_s3 import *

post_routes = Blueprint('posts', __name__)

@post_routes.route('')
def posts():
    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}


@post_routes.route('/add_post', methods=['POST'])
@login_required
def add_post():

    print (request.form.get('name'))
    if "file" not in request.files:
        return "No user_file key in request.files"

    postFile = request.files["file"]

    if postFile:

        file_url = upload_file_to_s3(postFile, Config.S3_BUCKET)
        # create an instance of <Your_Model>

    post = Post(
        name= request.form.get('name'),
        image= file_url,
        description= request.form.get('description'),
        userId = request.form.get('userId')
    )
    db.session.add(post)
    db.session.commit()
    return post.to_dict()
# @post_routes.route('/<int:id>')
# def posts(id):
#     posts = Post.query.filter(Post.userId == id).all()
#     return {'posts': [post.to_dict() for post in posts]}


@post_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()

    return post.to_dict()


@post_routes.route('/<int:id>/edit', methods=['POST'])
# @login_required
def edit_post(id):

    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        post = Post.query.get(id)
        post.name = data['name']
        post.description = data['description']
        post.image = data['image']
        db.session.commit()
        return post.to_dict()


@post_routes.route('/<int:id>/upCount', methods=['POST'])
def edit_postUpCount(id):
    post = Post.query.get(id)
    post.upvoteCount += 1
    db.session.commit()

    return post.to_dict()

@post_routes.route('/<int:id>/downCount', methods=['POST'])
def edit_postDownCount(id):
    post = Post.query.get(id)
    post.upvoteCount -= 1
    db.session.commit()

    return post.to_dict()
