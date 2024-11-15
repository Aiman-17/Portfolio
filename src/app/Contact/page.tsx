"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      {message}
      <button onClick={onClose} className="ml-4">
        Close
      </button>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);

      setToast({
        message: "Message sent! We'll get back to you as soon as possible.",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setToast({
        message: "There was a problem sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
