from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment, Post
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>')
def comments(id):
    comments = Comment.query.filter(Comment.postId == id)
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route('/add', methods=['POST'])
def add_comment():

    if request.method == 'POST':

        form = CommentForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = Comment()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
        return data.to_dict()

@comment_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return comment.to_dict()
