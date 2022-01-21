from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    Post1 = Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'I love All Might!', description = 'Wow! In this episode, All Might was amazing as he used his fists to smash enemies. He really raised the bar on what it means to be a superhero! ', image = "https://www.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg"
    )
    Post2 = Post(
        userId = '3', upvoteCount = '50', downvoteCount = '25', name = 'Shingeki no Kyojin', description = "Attack on Titan is the face of anime. It exploded onto the scene in 2013 with popularity unmatched by any other anime. No other anime has left as titanic of an impact as this one. It's the anime that introduces many newcomers into the medium. Many with no exposure to anime whatsoever have still heard of or even watched Attack on Titan. So it's only appropriate that it w", image = "https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&size=1200x630&format=jpeg"
    )
    Post3= Post(
        userId = '2', upvoteCount = '50', downvoteCount = '25', name = 'Shigatsu wa Kimi no Uso(Your Lie in April)', description = "This show is about a piano prodigy, Kousei, who is unable to play anymore because of childhood trauma. He meets a girl one day who will change not only his life but his outlook on it as well. ", image ="https://c.tenor.com/bcvK_rU5voEAAAAC/anime-piano.gif"
    )
    Post4= Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'Cory in the House', description = "Does anyone know when new episodes of Cory in the House are coming out??? ", image ="https://insidethemagic.net/wp-content/uploads/2021/02/Untitled-design-54-800x400.jpg"
    )
    Post5 = Post(
        userId = '2', upvoteCount = '50', downvoteCount = '25', name = 'Hunter x Hunter Ep 131', description = "This episode was one I had been waiting to see for a long time as it involved a very anticapted fight versus Gon and Pitou. The episode overall had my at the edge of my seat the entire time and will go down as one of the best scenes I have seen. ", image ="https://i.pinimg.com/originals/2a/49/62/2a49626bfb6544103d15685a0d9471e2.jpg"
    )
    Post6= Post(
        userId = '1', upvoteCount = '50', downvoteCount = '25', name = 'My Hero Academia', description = "Me waiting for My Hero Academia season 6 to come out", image ="https://c.tenor.com/gpOUboethA0AAAAM/my-hero-academia-boku-no-hero-academia.gif"
    )




    db.session.add(Post1)
    db.session.add(Post2)
    db.session.add(Post3)
    db.session.add(Post4)
    db.session.add(Post5)
    db.session.add(Post6)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
