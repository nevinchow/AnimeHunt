from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
    userId = IntegerField('userId')
    postId = IntegerField('postId')
    username = StringField('username')
    profilePic= StringField('profilePic')
