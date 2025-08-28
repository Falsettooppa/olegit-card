import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl hover:scale-110 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://wa.me/2348012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-2xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 text-2xl hover:scale-110 transition"
      >
        <FaTwitter />
      </a>
    </div>
  );
}
