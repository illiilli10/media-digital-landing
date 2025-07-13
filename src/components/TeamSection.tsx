import React from 'react';

const team = [
  {
    name: "Abderrazak Yousfi",
    role: "Chief Executive Officer",
    img: "/10.jpg",
  },
  {
    name: "Mohamed Youssef Had",
    role: "Head of IMPACT++",
    img: "/11.jpg",
  },
  {
    name: "Saad Maadi",
    role: "Head of X-Programs",
    img: "/13.jpg",
  },
];

const TeamSection = () => (
  <section className="py-16 bg-white relative">
    <div className="container mx-auto px-6">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-black uppercase tracking-wide mb-12">
        THE MANAGEMENT TEAM: IGNITING VISION AND GROWTH
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg flex flex-col items-center overflow-hidden w-full md:w-1/3"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-72 object-cover"
            />
            <div className="w-full text-center p-6 bg-white">
              <div className="font-bold text-lg text-gray-900 mb-1">{member.name}</div>
              <div className="text-blue-900 italic text-sm">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection; 