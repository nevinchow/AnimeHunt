from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer)
    upvoteCount = db.Column(db.Integer)
    downvoteCount = db.Column(db.Integer)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    image = db.Column(db.String(255))

    comments = db.relationship("Comment", back_populates="post")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'upvoteCount': self.upvoteCount,
            'downvoteCount': self.downvoteCount,
            'name': self.name,
            'description': self.description,
            'image': self.image
        }
