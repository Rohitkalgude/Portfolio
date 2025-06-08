function Card({ icon: Icon, title, value, description }) {
  return (
    <div className="w-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] bg-gradient-to-br from-[#1e1e2f] to-[#111119] sm:w-[450px] px-12 py-6 rounded-2xl shadow-md border border-white/10 text-white">
      <div className="flex items-center justify-between -ml-6">
        <Icon className="text-4xl" />
        <p className="text-3xl font-bold">{value}</p>
      </div>

      <div className="text-left mt-10 break-normal -ml-6">
        <h4 className="text-sm uppercase tracking-wide text-white">
          {title}
        </h4>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export default Card;
