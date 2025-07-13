
import React from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Twitter, MapPin } from 'lucide-react';

const team = [
  {
    name: "Abderrazak Yousfi",
    role: "Chief Executive Officer",
    img: "/abderrazak-yousfi.jpg",
    description: "Abderrazak has over 15 years of experience in strategic, leadership and business development.",
    socials: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Mail, url: "mailto:contact@mediadigitalinvest.com" },
    ],
  },
  {
    name: "Mohamed Youssef Had",
    role: "Head of IMPACT++",
    img: "/mohamed-youssef-had.jpg",
    description: "Abderrazak has over 15 years of experience in strategic, leadership and business development.",
    socials: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Mail, url: "mailto:contact@mediadigitalinvest.com" },
    ],
  },
  {
    name: "Saad Maadi",
    role: "Head of X-Programs",
    img: "/saad-maadi.jpg",
    description: "Abderrazak has over 15 years of experience in strategic, leadership and business development.",
    socials: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Mail, url: "mailto:contact@mediadigitalinvest.com" },
    ],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-white pt-12 pb-0">
      {/* Team Section */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black uppercase tracking-wide mb-2 text-center">
            THE MANAGEMENT TEAM: IGNITING VISION AND GROWTH
            </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative flex-1 min-w-[260px] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 420 }}
            >
              {/* Image fills the top of the card */}
              <div className="relative w-full" style={{ height: 320 }}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
                {/* White overlay with info and socials on hover (for all cards) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-0 group-hover:bg-opacity-95 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="flex flex-col items-center justify-center px-4">
                    <div className="font-bold text-xl mb-1 text-black text-center">{member.name}</div>
                    <div className="text-sm opacity-80 mb-2 text-black text-center">{member.role}</div>
                    {member.description && (
                      <div className="text-xs opacity-80 mb-4 text-black text-center px-2" style={{ minHeight: 40 }}>{member.description}</div>
                    )}
                    {member.socials && (
                      <div className="flex items-center gap-4 mt-2">
                        {member.socials.map((s, i) => (
                          <a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 transition-colors text-black bg-white hover:bg-gray-200"
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <s.icon size={22} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Name/role box always visible at the bottom */}
              <div className="w-full text-center py-5 px-2 bg-white z-20" style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16, boxShadow: '0 -2px 8px rgba(0,0,0,0.03)' }}>
                <div className="font-bold text-lg text-gray-900 mb-1">{member.name}</div>
                <div className="text-blue-900 italic text-sm">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* REACH OUT TO US Section - Light Modern Layout */}
      <div className="w-full py-16 bg-[#f7f9fa] border-t border-gray-200">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-2xl font-semibold text-black mb-12">REACH OUT TO US</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            {/* Contact Info (Left) */}
            <div className="flex flex-col gap-8 bg-white rounded-2xl shadow p-8 h-full min-h-[480px] justify-between">
              {/* Center all contact info rows */}
              <div className="flex flex-col gap-8 items-center w-full">
                {/* Address */}
                <div className="flex flex-col items-center text-center w-full">
                  <MapPin size={40} className="text-[#27ae60] mb-2" />
                  <div className="font-semibold text-lg text-gray-900 mb-1">Address</div>
                  <div className="text-gray-700 text-sm leading-relaxed">
                    Mega Business Center, Florida Center Park, Boulevard Zoulikha Nasri, Lot. N#2, 4th Floor, Office #19, Sidi Maarouf<br />
                    Casablanca 20520, Morocco
                  </div>
                </div>
                {/* Email */}
                <div className="flex flex-col items-center text-center w-full">
                  <Mail size={40} className="text-[#27ae60] mb-2" />
                  <div className="font-semibold text-lg text-gray-900 mb-1">Email</div>
                  <div className="text-gray-700 text-sm">contact@mediadigitalinvest.com</div>
                </div>
                {/* Quick chat */}
                <div className="flex flex-col items-center text-center w-full">
                  <MessageCircle size={40} className="text-[#27ae60] mb-2" />
                  <div className="font-semibold text-lg text-gray-900 mb-1">Quick chat</div>
                  <div className="text-gray-700 text-sm">
                    By whatsapp : <a href="https://wa.me/212700013565" className="text-[#27ae60] underline" target="_blank" rel="noopener noreferrer">+212700013565</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form (Right) */}
            <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 h-full min-h-[480px] justify-between">
              <div className="text-xl font-semibold text-gray-900 mb-2">Your Detail</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Name *</label>
                  <input type="text" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27ae60]" placeholder="Your Name" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Email Address *</label>
                  <input type="email" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27ae60]" placeholder="Your Email" required />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Subject *</label>
                <input type="text" className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27ae60]" placeholder="Message Subject" required />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Comments / Questions *</label>
                <textarea className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27ae60] min-h-[80px]" placeholder="Your Message" required />
              </div>
              <button type="submit" className="mt-2 py-3 rounded-lg text-white font-semibold text-base bg-gradient-to-r from-[#27ae60] to-[#6ee7b7] shadow hover:from-[#219150] hover:to-[#34d399] transition-all">Send Message</button>
            </form>
          </div>
          {/* Map below */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow bg-white flex items-center justify-center min-h-[320px]">
            <iframe
              title="Media Digital Invest Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.726964274508!2d-7.603614684800001!3d33.54752798074309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdcfb2e2c6e1%3A0x7e2e2e2e2e2e2e2e!2sMega%20Business%20Center%2C%20Florida%20Center%20Park%2C%20Boulevard%20Zoulikha%20Nasri%2C%20Casablanca%2020520%2C%20Morocco!5e0!3m2!1sen!2sma!4v1680000000000!5m2!1sen!2sma"
              width="100%"
              height={320}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Footer Bar */}
    </section>
  );
};

export default Contact;
