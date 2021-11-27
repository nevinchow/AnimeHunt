from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    Comment1 = Comment(
        userId = '1', postId = '1', description = 'I hate to disagree, but I thought he was lame!', username = 'Demo', profilePic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*'
    )
    Comment2 = Comment(
        userId = '2', postId = '1', description = "You're lame!", username = 'marnie', profilePic='https://www.desktopbackground.org/p/2015/09/30/1019185_jake-the-dog-by-spacepirate04-on-deviantart_900x579_h.png'
    )
    Comment3 = Comment(
        userId = '1', postId = '1', description = 'No you!', username = 'Demo', profilePic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*'
    )
    Comment4 = Comment(
        userId = '4', postId = '2', description = 'My favorite character is Levi', username = 'lakshmi', profilePic='https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg'
    )
    Comment5 = Comment(
        userId = '4', postId = '2', description = 'What a handsome young man' , username = 'lakshmi', profilePic='https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg'
    )
    Comment6 = Comment(
        userId = '3', postId = '3', description = 'This was one of the saddest shows ever!', username = 'bobbie', profilePic='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
    )
    Comment7 = Comment(
        userId = '3', postId = '3', description = 'No lie this was as sad as me losing to the Warriors!', username = 'bobbie', profilePic='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
    )
    Comment8 = Comment(
        userId = '2', postId = '3', description = 'Hi', username = 'marnie', profilePic='https://www.desktopbackground.org/p/2015/09/30/1019185_jake-the-dog-by-spacepirate04-on-deviantart_900x579_h.png'
    )
    Comment9 = Comment(
        userId = '3', postId = '4', description = 'I used to watch this all the time growing up', username = 'bobbie', profilePic='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
    )
    Comment10 = Comment(
        userId = '2', postId = '4', description = 'Me too!!', username = 'marnie', profilePic='https://www.desktopbackground.org/p/2015/09/30/1019185_jake-the-dog-by-spacepirate04-on-deviantart_900x579_h.png'
    )
    Comment11 = Comment(
        userId = '3', postId = '5', description = 'This was one of the most brutal beatdowns I have ever witnessed!!!!! And I led my Cavs back from being down 3-1!!!', username = 'bobbie', profilePic='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
    )
    Comment12 = Comment(
        userId = '1', postId = '5', description = '10/10 fight. The only scene comparable would be when I fought vs Lord Farquad for Fiona. ', username = 'demo', profilePic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*'
    )
    Comment13 = Comment(
        userId = '2', postId = '6', description = 'What else are you watching in the meantime? ', username = 'marnie', profilePic='https://www.desktopbackground.org/p/2015/09/30/1019185_jake-the-dog-by-spacepirate04-on-deviantart_900x579_h.png'
    )
    Comment14 = Comment(
        userId = '3', postId = '6', description = 'Space Jam ', username = 'bobbie', profilePic='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
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
