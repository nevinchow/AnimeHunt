from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profilePic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', profilePic='https://www.desktopbackground.org/p/2015/09/30/1019185_jake-the-dog-by-spacepirate04-on-deviantart_900x579_h.png')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profilePic='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png')
    lakshmi = User(
    username='lakshmi', email='lakshmi@aa.io', password='password', profilePic='https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(lakshmi)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
