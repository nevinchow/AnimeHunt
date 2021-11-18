from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment, Post
from app.forms.post_form import PostForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>')
def comments(id):
    comments = Comment.query.filter(Comment.postId == id)
    return {'comments': [comment.to_dict() for comment in comments]}
