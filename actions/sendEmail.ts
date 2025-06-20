"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
const resend = new Resend(process.env.RESEND_API_KEY);
//5:25:40

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(message, 5000)) {
    return { error: "Message is required" };
  }

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      replyTo: senderEmail as string,
      to: "duraibharath2002@gmail.com",
      subject: "New message from contact form",
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
