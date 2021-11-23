from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    Comment1 = Comment(
        userId = '1', postId = '1', description = 'I hate to disagree, but I thought he was lame!', username = 'Demo'
    )
    Comment2 = Comment(
        userId = '2', postId = '1', description = "You're lame!", username = 'marnie'
    )
    Comment3 = Comment(
        userId = '1', postId = '1', description = 'No you!', username = 'Demo'
    )
    Comment4 = Comment(
        userId = '4', postId = '2', description = 'My favorite character is Levi', username = 'lakshmi'
    )
    Comment5 = Comment(
        userId = '4', postId = '2', description = 'What a handsome young man' , username = 'Demo'
    )
    Comment6 = Comment(
        userId = '3', postId = '3', description = 'This was one of the saddest shows ever!', username = 'bobbie'
    )
    Comment7 = Comment(
        userId = '3', postId = '3', description = 'No lie this was as sad as me losing to the Warriors!', username = 'bobbie'
    )
    Comment8 = Comment(
        userId = '2', postId = '3', description = 'Hi', username = 'marnie'
    )
    Comment9 = Comment(
        userId = '3', postId = '4', description = 'I used to watch this all the time growing up', username = 'bobbie'
    )
    Comment10 = Comment(
        userId = '2', postId = '4', description = 'Me too!!', username = 'marnie'
    )
    Comment11 = Comment(
        userId = '3', postId = '5', description = 'This was one of the most brutal beatdowns I have ever witnessed!!!!! And I led my Cavs back from being down 3-1!!!', username = 'bobbie'
    )
    Comment12 = Comment(
        userId = '1', postId = '5', description = '10/10 fight. The only scene comparable would be when I fought vs Lord Farquad for Fiona. ', username = 'demo'
    )
    Comment13 = Comment(
        userId = '2', postId = '6', description = 'What else are you watching in the meantime? ', username = 'marnie'
    )
    Comment14 = Comment(
        userId = '3', postId = '6', description = 'Space Jam ', username = 'bobbie'
    )








    db.session.add(Comment1)
    db.session.add(Comment2)
    db.session.add(Comment3)
    db.session.add(Comment4)
    db.session.add(Comment5)
    db.session.add(Comment6)
    db.session.add(Comment7)
    db.session.add(Comment8)
    db.session.add(Comment9)
    db.session.add(Comment10)
    db.session.add(Comment11)
    db.session.add(Comment12)
    db.session.add(Comment13)
    db.session.add(Comment14)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
