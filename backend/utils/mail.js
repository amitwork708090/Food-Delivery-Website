import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// OTP mail
export const sendOtpMail = async (to, otp) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: "Reset Your Password",
      html: `<p>Your OTP is <b>${otp}</b>. It expires in 5 minutes.</p>`,
    });

    console.log("OTP Email sent");
  } catch (error) {
    console.log("Resend Error:", error);
    throw new Error("Email not sent");
  }
};

// Delivery OTP
export const sendDeliveryOtpMail = async (user, otp) => {
  await resend.sendMail({
    from: process.env.EMAIL,
    to: user.email,
    subject: "Delivery OTP",
    html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`,
  });
};


