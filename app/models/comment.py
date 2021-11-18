from .db import db
from .post import Post


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"))
    
    post = db.relationship("Post", back_populates="comments")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'description': self.description,
        }
