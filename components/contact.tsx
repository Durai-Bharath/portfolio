"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at {"  "}
        <a className="underline" href="mailto:duraibharath2002@gmail.com">
          duraibharath2002@gmail.com
        </a>{" "}
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="px-4 h-14 rounded-lg borderBlack"
          placeholder="your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="your message"
          required
          maxLength={1000}
        />
        <button
          className="group flex items-center justify-center h-[3rem] w-[8rem] gap-[0.3rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}


