import * as nodemailer from "nodemailer";

export const sendEmail = async (
  recipient: string,
  url: string,
  linkText: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "odk2d4laogjzirja@ethereal.email",
      pass: "YfWneNaBEsfEU47p2Q"
    }
  });

  // Message object
  const message = {
    from: "Sender Name <sender@example.com>",
    to: recipient,
    subject: "Confirm your airbnb_clone account ✔",
    text: "Confirm Email",
    html: `<p>Confirm airbnb_clone account</p><a href="${url}">${linkText}</a>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
    }

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
