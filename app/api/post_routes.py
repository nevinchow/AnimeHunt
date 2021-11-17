from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db,Post
from app.forms.post_form import PostForm

post_routes = Blueprint('posts', __name__)

@post_routes.route('')
def posts():
    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}


@post_routes.route('/add_post', methods=['POST'])
def add_post():

    if request.method == 'POST':

        form = PostForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = Post()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
        return data.to_dict()
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
