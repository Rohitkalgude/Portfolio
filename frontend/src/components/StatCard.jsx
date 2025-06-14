function Card({ icon: Icon, title, value, description }) {
  return (
    <div className="w-full max-w-[95vw] sm:w-[320px] md:w-[400px] lg:w-[450px] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] bg-gradient-to-br from-[#1e1e2f] to-[#111119] px-6 md:px-8 py-6 rounded-2xl shadow-md border border-white/10 text-white">
      
      <div className="flex items-center justify-between">
        <Icon className="text-3xl sm:text-4xl" />
        <p className="text-2xl sm:text-3xl font-bold">{value}</p>
      </div>

      <div className="text-left mt-8 break-words">
        <h4 className="text-sm sm:text-base uppercase tracking-wide text-white">
          {title}
        </h4>
        <p className="text-gray-400 text-sm sm:text-sm md:text-base mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;





// function Card({ icon: Icon, title, value, description }) {
//   return (
//     <div className="w-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] bg-gradient-to-br from-[#1e1e2f] to-[#111119] px-8 md:px-8 py-6 rounded-2xl shadow-md border border-white/10 text-white">
//       <div className="flex items-center justify-between">
//         <Icon className="text-4xl" />
//         <p className="text-3xl font-bold">{value}</p>
//       </div>

//       <div className="text-left mt-8">
//         <h4 className="text-sm uppercase tracking-wide text-white">{title}</h4>
//         <p className="text-gray-400 text-sm mt-1">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;
