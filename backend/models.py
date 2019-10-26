from . import db

class Fellow(db.Model):
    """Model for fellow accounts."""

    __tablename__ = 'fellows'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    first_name = db.Column(db.String(64),
                      index=False,
                      unique=False,
                      nullable=False)
    last_name = db.Column(db.String(64),
                        index=False,
                        unique=False,
                        nullable=False)

class Manager(db.model):
    """Model for manager accounts."""

    __tablename__ = 'manager'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    first_name = db.Column(db.String(64),
                      index=False,
                      unique=False,
                      nullable=False)
    last_name = db.Column(db.String(64),
                        index=False,
                        unique=False,
                        nullable=False)

class Pupil(db.model):
    """Model for pupil objects."""

    __tablename__ = 'manager'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    first_name = db.Column(db.String(64),
                      index=False,
                      unique=False,
                      nullable=False)
    last_name = db.Column(db.String(64),
                        index=False,
                        unique=False,
                        nullable=False)
