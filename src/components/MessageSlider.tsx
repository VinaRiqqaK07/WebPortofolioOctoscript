import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getMessages } from "../services/messageService"; // Import fungsi getMessages

// Tipe data pesan
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
}

const MessageSlider: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  // Konfigurasi slider
  const settings = {
    dots: true, // Menampilkan indikator navigasi
    infinite: messages.length > 1, // Slide bisa berputar terus
    speed: 500, // Kecepatan transisi
    slidesToShow: 1, // Menampilkan 1 pesan per slide
    slidesToScroll: 1, // Geser 1 per 1
    arrows: true, // Menampilkan tombol panah kiri/kanan
  };

  return (
    <section
      id="messageCard"
      className="min-w-full h-fit bg-blue-400 px-12 lg:px-56 py-14"
    >
      <h2 className="text-4xl font-semibold text-white mb-4">Messages</h2>
      <Slider {...settings}>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="py-8 px-4 max-h-fit md:h-[230px] bg-white border rounded-md flex flex-col items-center justify-center"
            >
              <div className="items-center justify-center flex mt-8">
                <p className="text-lg font-semibold">
                  "
                  {msg.message.length > 100
                    ? msg.message.slice(0, 100) + "..."
                    : msg.message}
                  "
                </p>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="text-md font-medium mt-4">{msg.name}</h3>
                <p className="text-sm text-gray-600">{msg.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages available</p>
        )}
      </Slider>
    </section>
  );
};

export default MessageSlider;
