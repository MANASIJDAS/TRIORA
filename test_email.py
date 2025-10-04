import smtplib
from email.mime.text import MIMEText
import random

# ⿡ Email details
sender_email = "manasij22das@gmail.com"
receiver_email = "manasijdas2004@gmail.com"
app_password = "zcjdvnpgvxlyfcyo"  # Remove all spaces

# ⿢ Generate a 6-digit verification code
code = random.randint(100000, 999999)

# ⿣ Create the email content
subject = "Test: TRIORA Verification Code"
body = f"Hello! Your TRIORA test verification code is: {code}"
msg = MIMEText(body)
msg["Subject"] = subject
msg["From"] = sender_email
msg["To"] = receiver_email

# ⿤ Send the email
try:
    server = smtplib.SMTP("smtp.gmail.com", 587)  # Connect to Gmail SMTP
    server.starttls()  # Enable security
    server.login(sender_email, app_password)  # Login
    server.sendmail(sender_email, receiver_email, msg.as_string())  # Send email
    server.quit()
    print(f"✅ Email sent successfully to {receiver_email} with code {code}")
except Exception as e:
    print("❌ Failed to send email:",e)
