"""empty message

Revision ID: 5a439d59b955
Revises: 2b6b60366196
Create Date: 2021-11-27 11:17:21.176180

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5a439d59b955'
down_revision = '2b6b60366196'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('profilePic', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('comments', 'profilePic')
    # ### end Alembic commands ###
