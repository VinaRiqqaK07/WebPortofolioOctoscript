import React from "react";
import { useState } from "react";
import { addMessage } from "@/services/messageService";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await addMessage(
      formData.name,
      formData.email,
      formData.message
    );

    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // Scroll ke atas sebelum reload halaman
      window.scrollTo(0, 0);

      setTimeout(() => {
        window.location.reload();
      }, 2000); // Tambahkan sedikit delay agar efek terlihat
    } else {
      toast.error("Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white">
      <h2 className="text-md mb-4">Something you wanna say</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1">
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
