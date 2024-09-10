from models.base import Base



# email VARCHAR(50),
#     phone_number VARCHAR(20),
#     password VARCHAR()
class User(Base):
    def __init__(self, first_name, last_name, email, phone_number):
        super().__init__()
        self.firstname = first_name
        self.lastname = last_name
        self.email = email
        self.phonenumber = phone_number
    
    @classmethod
    def search(cls):
        """ search by id"""
