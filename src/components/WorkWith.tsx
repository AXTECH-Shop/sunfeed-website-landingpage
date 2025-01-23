import React from "react";
import Image from "next/image";

const clients = [
  { name: "Client1", logo: "/Images/client1.png" },
  { name: "Client2", logo: "/Images/client2.png" },
  { name: "Client3", logo: "/Images/client3.png" },
  { name: "Client4", logo: "/Images/client4.png" },
  { name: "Client5", logo: "/Images/client5.png" },
];

function WorkWith() {
  return (
    <div className="space-y-4 text-center max-w-screen-lg mx-auto pt-6">
      <span className="text-[18px] text-[#36689E] font-medium ">
      Nous travaillons avec :
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {clients.map((client, index) => (
          <div key={index} className="p-4">
            <div className="relative h-16 w-full">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkWith;
