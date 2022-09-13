const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //* 1) create a transporter
  const transporter = nodemailer.createTransport({
    //* outlook
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_SECRET,
    },
  });
  //* 2) define the email options
  const mailOptions = {
    from: "hoteltastic@outlook.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };
  //* 3) actually send the email
  const result = await transporter.sendMail(mailOptions);
};
module.exports.emailhandler = async (req, res) => {
  const userEmail = req.body.email;
  const room = req.body.room;
  const name = req.body.username;
  try {
    await sendEmail({
      email: userEmail,
      subject: "Your booking confirmation",
      message: " ",
      html: `<b>hello ${name}, how are you today?? we are happy to say that your request for the reservation on room no:${room} is successfully completed. we are awaiting for your arrival</b><br> This is the room that you booked.<br /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhh-2Jy0QFHOU2HPjPIe6QSp4bzuhizTNhHlHjBrgdQ&s" alt="mailtrap" />`,
    });

    res.send({ status: true });
  } catch (error) {
    console.log(error);
  }
};
