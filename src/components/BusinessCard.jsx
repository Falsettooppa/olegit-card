export default function BusinessCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-[350px] bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
          />
        </div>

        {/* Name & Title */}
        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          Olutoye Abiodun Theophilus
        </h2>
        <p className="text-sm text-gray-500">Founder, Olegit Digital Services</p>
      </div>
    </div>
  );
}
