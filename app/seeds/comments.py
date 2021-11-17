from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    Comment1 = Comment(
        userId = '1', postId = '1', description = 'I hate to disagree, but I thought he was lame!'
    )
    Comment2 = Comment(
        userId = '1', postId = '1', description = 'I hate to disagree, but I thought he was lame!'
    )
    Comment3 = Comment(
        userId = '2', postId = '1', description = 'I hate to disagree, but I thought he was lame!'
    )
    Comment4 = Comment(
        userId = '2', postId = '2', description = 'I hate to disagree, but I thought he was lame!'
    )
    db.session.add(Comment1)
    db.session.add(Comment2)
    db.session.add(Comment3)
    db.session.add(Comment4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
