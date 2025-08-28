import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="mt-4 space-y-2 text-gray-600">
      <p className="flex items-center justify-center">
        <FaPhone className="mr-2 text-indigo-500" /> +234 801 234 5678
      </p>
      <p className="flex items-center justify-center">
        <FaEnvelope className="mr-2 text-indigo-500" /> olegitng@gmail.com
      </p>
      <p className="flex items-center justify-center">
        <FaGlobe className="mr-2 text-indigo-500" /> <www className="olegit com ng"></www>
      </p>
    </div>
  );
}
