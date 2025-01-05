"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
//5:25:40
export const sendEmail = async (formData: FormData) => {
  resend.emails.send({
    from: formData.get("senderEmail") as string,
    to: "duraibharath2002@gmail.com",
    subject: "New message from contact form",
    text: formData.get("message") as string,
  });
};
