from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    Post1 = Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'I love All Might!', description = 'Wow! In this episode, All Might was amazing as he used his fists to smash enemies. He really ', image = "https://www.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg"
    )
    db.session.add(Post1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
