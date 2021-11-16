from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post

post_routes = Blueprint('posts', __name__)

@post_routes.route('')
def posts():
    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}


# @post_routes.route('/<int:id>')
# def posts(id):
#     posts = Post.query.filter(Post.userId == id).all()
#     return {'posts': [post.to_dict() for post in posts]}
