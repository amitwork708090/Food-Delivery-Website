import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, // App Password hona chahiye
  },
});

// 🔥 verify connection (important for debugging)
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});

// ✅ Common mail sender function
const sendMail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log("Email sent:", info.response);
    return true;
  } catch (error) {
    console.log("Mail Error:", error);
    throw new Error("Email not sent");
  }
};

// ✅ OTP mail
export const sendOtpMail = async (to, otp) => {
  return await sendMail({
    from: `"Food App" <${process.env.EMAIL}>`,
    to,
    subject: "Reset Your Password",
    html: `<p>Your OTP is <b>${otp}</b> (valid 5 min)</p>`,
  });
};

// ✅ Delivery OTP
export const sendDeliveryOtpMail = async (user, otp) => {
  return await sendMail({
    from: `"Food App" <${process.env.EMAIL}>`,
    to: user.email,
    subject: "Delivery OTP",
    html: `<p>Your Delivery OTP is <b>${otp}</b></p>`,
  });
};
