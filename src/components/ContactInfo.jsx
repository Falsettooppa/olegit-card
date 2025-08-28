import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="mt-4 space-y-2 text-gray-600">
      <p className="flex items-center justify-center">
        <FaPhone className="mr-2 text-indigo-500" /> +2347068364743
      </p>
      <p className="flex items-center justify-center">
        <FaEnvelope className="mr-2 text-indigo-500" /> olegitng@gmail.com
      </p>
      <p className="flex items-center justify-center">
        <FaGlobe className="mr-2 text-indigo-500" />olegit.com.ng
      </p>
    </div>
  );
}
