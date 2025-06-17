// function Card({ icon: Icon, title, value, description }) {
//   return (
//     <div className="w-full max-w-[95vw] sm:w-[320px] md:w-[400px] lg:w-[450px] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] bg-gradient-to-br from-[#1e1e2f] to-[#111119] px-6 md:px-8 py-6 rounded-2xl shadow-md border border-white/10 text-white">
      
//       <div className="flex items-center justify-between">
//         <Icon className="text-3xl sm:text-4xl" />
//         <p className="text-2xl sm:text-3xl font-bold">{value}</p>
//       </div>

//       <div className="text-left mt-8 break-words">
//         <h4 className="text-sm sm:text-base uppercase tracking-wide text-white">
//           {title}
//         </h4>
//         <p className="text-gray-400 text-sm sm:text-sm md:text-base mt-1">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Card;




function Card({ icon: Icon, title, value, description }) {
  return (
    <div className="w-full 
      max-w-[95vw] 
      sm:w-full 
      md:w-full 
      lg:w-full 
      xl:w-[440px] 
      transition-all duration-300 transform hover:scale-105 
      hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] 
      bg-gradient-to-br from-[#1e1e2f] to-[#111119] 
      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-6 
      py-6 
      rounded-2xl shadow-md border border-white/10 text-white"
    >
      <div className="flex items-center justify-between">
        <Icon className="text-2xl sm:text-3xl md:text-4xl" />
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">{value}</p>
      </div>

      <div className="text-left mt-6 md:mt-8">
        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-white whitespace-nowrap">
          {title}
        </h4>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1 leading-snug whitespace-normal md:text-nowrap">
          {description}
        </p>
      </div>
    </div>
  );
}


export default Card