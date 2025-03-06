import React, { useEffect, useRef } from "react";
import { Message, useChat } from "@ai-sdk/react";
import clsx from "clsx";
import { BsXCircle } from "react-icons/bs";
import { FaRobot } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Bot, SendHorizonal, Trash } from "lucide-react";
interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat(); // api call to the chatbot

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";
  return (
    <div
      className={clsx(
        "fixed bottom-40 right-5 z-50 w-full max-w-[400px] p-1 xl:right-36",
        open ? "block" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <BsXCircle className="rounded-full bg-background" />
      </button>
      <div className="flex h-[500px] flex-col rounded border bg-white dark:bg-black dark:border-white/10 shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "An error occurred. Please try again later.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex flex-col h-full text-center justify-center gap-3">
              <Bot size={28} className="self-center" />
              <p className="text-lg font-medium">
                Send a message to get started.
              </p>
              <p>
                You can ask the chatbot any questions about me and it will find
                the relevant information for you.
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <button
            type="button"
            title="Clear"
            onClick={() => setMessages([])}
            className="flex items-center justify-center w-10 flex-none"
          >
            <Trash size={24} />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="grow border rounded bg-background px-3 py-2"
            ref={inputRef}
          />
          <button
            className="flex items-center justify-center w-10 flex-none disabled:opacity-50"
            disabled={input.length === 0 || isLoading}
            type="submit"
            title="Send"
          >
            <SendHorizonal size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={clsx(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <FaRobot className="mr-2 flex-none" />}
      <div
        className={clsx(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-background text-background",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-blue-500 underline"
              />
            ),
            p: ({ ...props }) => <p {...props} className="mt-3 first:mt-0" />,
            ul: ({ ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),

            li: ({ ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
