from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment, Post
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('')
def comments():
    comments = Comment.query.all()
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

@comment_routes.route('/<int:id>/edit', methods=['POST'])
# @login_required
def edit_comment(id):

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        comment = Comment.query.get(id)
        comment.description = data['description']
        db.session.commit()
        return comment.to_dict()


@comment_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return comment.to_dict()
