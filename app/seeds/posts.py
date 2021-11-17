from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    Post1 = Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'I love All Might!', description = 'Wow! In this episode, All Might was amazing as he used his fists to smash enemies. He really ', image = "https://www.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg"
    )
    Post2 = Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'Shingeki no Kyojin', description = "Attack on Titan is the face of anime. It exploded onto the scene in 2013 with popularity unmatched by any other anime. No other anime has left as titanic of an impact as this one. It's the anime that introduces many newcomers into the medium. Many with no exposure to anime whatsoever have still heard of or even watched Attack on Titan. So it's only appropriate that it w", image = "https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&size=1200x630&format=jpeg"
    )
    db.session.add(Post1)
    db.session.add(Post2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
