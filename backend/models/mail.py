"""This module contains Email class and its methods """
import smtplib
import os


class Email:
  """ Email Setup"""
  MAIL_SERVER = os.environ.get('MAIL_SERVER')
  MAIL_PORT = os.getenv('MAIL_PORT')

  MAIL_USERNAME = os.getenv('MAIL_USERNAME')
  MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')

  def __init__(self) -> None:
    """ initialize email obj """        
    try:
      self.server = smtplib.SMTP(self.MAIL_SERVER, self.MAIL_PORT)
    except: #smtplib.SMTPConnectError:
      print('error connecting to mail server!')        
      exit()
    self.server.starttls()
    try:
      self.server.login(self.MAIL_USERNAME, self.MAIL_PASSWORD)
    except:
      print("error login in to email server")
      exit()


  def sendMail(self, subject, reciever, message):
      """ send email"""
      sender_name = 'Giro'
      # from_ = "giro@giro.com"
      body = f'From: {sender_name} <{self.MAIL_USERNAME}>\nSubject: {subject}\n\n{message}'    

      self.server.sendmail(self.MAIL_USERNAME, to_addrs=reciever, msg=body)
      print(f"email sent to {reciever} successfully")
