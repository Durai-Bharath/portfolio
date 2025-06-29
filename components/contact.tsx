"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import { toast } from "react-hot-toast";
import { FiMail, FiLinkedin, FiGithub, FiCalendar } from "react-icons/fi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully! I'll get back to you soon.");
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement;
        if (form) form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: "Email",
      description: "Get in touch for collaborations",
      value: "duraibharath2002@gmail.com",
      href: "mailto:duraibharath2002@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      description: "Professional network",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/bharath-durai/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: FiGithub,
      title: "GitHub",
      description: "View my code repositories",
      value: "Durai-Bharath",
      href: "https://github.com/Durai-Bharath",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-28 max-w-[75rem] text-center"
    >
      <SectionHeading>Let's Collaborate</SectionHeading>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Open to collaborations on research, product development, or innovative tech initiatives.  
        I’m always eager to connect, exchange ideas, and build impactful solutions together.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Whether you're interested in research collaboration, discussing AI/ML projects, 
              or exploring opportunities in intelligent systems, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {React.createElement(method.icon, { className: "w-6 h-6" })}
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    {method.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {method.value}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Currently Available
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Open to new opportunities, research collaborations, and interesting AI/ML projects.
              Typically respond within 24-48 hours.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have a specific project or collaboration in mind? Drop me a detailed message.
              </p>
            </div>

            <form
              className="space-y-6"
              action={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="senderName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="senderEmail"
                    required
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Collaboration opportunity, project discussion..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  maxLength={5000}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project, research idea, or collaboration opportunity..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <SubmitButton isSubmitting={isSubmitting} />
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Ready to Build Something Amazing?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Let's combine our expertise to create intelligent solutions that make a real difference. 
          From research breakthroughs to production systems, every great project starts with a conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:duraibharath2002@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="w-4 h-4" />
            Start a Conversation
          </motion.a>
          <motion.a
            href="bharath-resume-june-2025.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCalendar className="w-4 h-4" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
