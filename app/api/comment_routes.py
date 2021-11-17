from flask import Blueprint, jsonify, request
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('')
def comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}
