
import React from 'react';

const testimonials = [
  {
    text: `Media Digital Invest's X Programs, FundXcelerate and ExpansionX, have been a game-changer for my startup. Thanks to their support, we've experienced remarkable growth and success. The expert guidance provided by Media Digital Invest in fundraising strategies and scaling our operations has positively impacted our journey.`,
    logo: '/public/guichet.png',
    name: 'CEO of Guichet.com',
    person: 'Marouane TAFFAH',
    company: 'Guichet.com',
  },
  {
    text: `Partnering with Media Digital Invest has been a pivotal moment for YouCan. Their Knowledge Space has empowered our event planning, while networking with their diverse startup portfolio has opened exciting collaboration opportunities. Highly recommended for knowledge-driven events and networking with like-minded startups.`,
    logo: '/public/youcan.jpg',
    name: 'CEO of YouCan.shop',
    person: 'Youssef ZAROUALI',
    company: 'YouCan.shop',
  },
  {
    text: `MomentumX program has fueled my growth, which, in turn, catalyzed the growth of our company, StayHere. The invaluable resources, and networking opportunities surpassed our expectations. Yousfi's expert advice and mentorship have been pivotal in this achievement. Highly recommended for startups seeking to fast-track their expansion.`,
    logo: '/public/stayhere.jpg',
    name: 'CMO of StayHere.ma',
    person: 'Salim CHEMLAL, Ph.D.',
    company: 'StayHere.ma',
  },
  {
    text: `Joining the FundXcelerate program was a strategic decision that has significantly propelled our fundraising initiatives at NsaybliK. The workshops and resources provided were not only of high quality but also perfectly aligned with our needs in the venture capital landscape. The program's focus on actionable outcomes and its mentorship have been vital in positioning us more favorably in the eyes of potential investors.`,
    logo: '/public/nsayblik.png',
    name: 'CEO of NsaybliK.com',
    person: 'Marouane TAFFAH',
    company: 'NsaybliK.com',
  },
  {
    text: `Participating in FundXcelerate program has been an incredibly rewarding experience for MyTeam. The program's exceptional add value has provided me with a deep understanding of the fundraising mechanism and invaluable insights on how to navigate the process. I am truly grateful to Media Digital Invest for their support and highly recommend the program to any entrepreneur seeking to master the art of fundraising.`,
    logo: '/public/logo-myteam-1.png',
    name: 'CEO of MyTeam.ma',
    person: 'Youssef ZAROUALI',
    company: 'MyTeam.ma',
  },
  {
    text: `Partnering with Media Digital Invest has been an incredibly valuable experience for Morocco.AI. The collaboration has provided us with tremendous opportunities to connect and network with the new generation of startups. We are highly satisfied with the immense value that Media Digital Invest has added to our partnership. Their expertise and support have been instrumental in driving our mission forward.`,
    logo: '/public/moroccoai.png',
    name: 'Co-Founder of Morocco.AI',
    person: 'Salim CHEMLAL, Ph.D.',
    company: 'Morocco.AI',
  },
];

const cardStyles = [
  { bg: 'bg-black text-white', rotate: '-rotate-2' },
  { bg: 'bg-violet-300 text-black', rotate: 'rotate-1' },
  { bg: 'bg-gray-100 text-black', rotate: '-rotate-1' },
  { bg: 'bg-white text-black', rotate: 'rotate-2' },
  { bg: 'bg-lime-200 text-black', rotate: '-rotate-1' },
  { bg: 'bg-gray-50 text-black', rotate: 'rotate-1' },
];

const StarRow = ({ color = 'text-blue-300' }) => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${color} inline-block`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
    ))}
  </div>
);

const About = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: 'var(--text-100)' }}>
          SUCCESSFUL STARTUPS WE'VE BACKED ... AND COUNTING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => {
            let starColor = 'text-blue-300';
            if (idx === 1) starColor = 'text-white'; // purple card
            if (idx === 4) starColor = 'text-black'; // lime card
            return (
              <div
                key={idx}
                className={`rounded-2xl shadow-lg p-7 flex flex-col items-center justify-between min-h-[240px] ${cardStyles[idx].bg} ${cardStyles[idx].rotate}`}
                style={{ transition: 'transform 0.2s' }}
              >
                <StarRow color={starColor} />
                <p className="text-center mb-6 flex-1 text-sm">{t.text}</p>
                <div className="flex flex-col items-center mt-2">
                  <img src={t.logo} alt={t.company} className="w-8 h-8 object-contain rounded-full mb-1 border bg-white p-1" />
                  <div className="font-semibold text-xs">{t.person}</div>
                  <div className="text-xs opacity-70">{t.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
