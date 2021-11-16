from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    Post1 = Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'I love All Might!', description = 'Wow! In this episode, All Might was amazing as he used his fists to smash enemies.', image = "https://static.wikia.nocookie.net/bokunoheroacademia/images/1/18/It%27s_All_Right.png/revision/latest?cb=20170708155615"
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
