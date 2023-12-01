import smtplib
from email.mime.text import MIMEText

def send_email(to_email, subject, message):
  """Sends an email to the specified email address.

  Args:
    to_email: The email address to send the email to.
    subject: The subject of the email.
    message: The body of the email.

  Returns:
    None.
  """

  msg = MIMEText(message)
  msg['Subject'] = subject
  msg['From'] = 'cannedoranges@gmail.com'
  msg['To'] = to_email

  server = smtplib.SMTP('smtp.gmail.com', 587)
  server.starttls()
  server.login('your_email_address', 'your_password')
  server.sendmail('your_email_address', to_email, msg.as_string())
  server.quit()

if __name__ == '__main__':
  to_email = 'tliu5128@gmail.com'
  subject = 'This is a test email'
  message = 'This is the body of the email.'
  send_email(to_email, subject, message)