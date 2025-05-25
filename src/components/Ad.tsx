import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm ">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="More options" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="/codev6.png"
            alt="TunisieBooking Ad Image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/tunisiebooking-logo.png"
            alt="TunisieBooking Logo"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">TunisieBooking</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Easily book your hotels in Tunisia with TunisieBooking."
            : size === "md"
            ? "Take advantage of the best hotel deals and vacation packages in Tunisia with TunisieBooking. Book now!"
            : "Discover exclusive promotions on hotels and vacation packages across Tunisia with TunisieBooking. Book easily and enjoy the best prices for your holidays!"}
        </p>
        <button className="bg-blue-500 text-white p-2 text-xs rounded-lg">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Ad;
