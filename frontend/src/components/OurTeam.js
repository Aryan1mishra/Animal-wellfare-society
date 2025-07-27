import React from 'react';
import { motion } from 'framer-motion';

function OurTeam() {
  const teamMembers = [
    {
      name: "Riya Sharma",
      role: "Founder & CEO",
      phone: "+91 98765 43210",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb51Yj-DS6kVL7MmwQlcDzpdeYRaHK3Hd__g&s",
    },
    {
      name: "Amit Mehra",
      role: "Head Volunteer",
      phone: "+91 99887 77665",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb51Yj-DS6kVL7MmwQlcDzpdeYRaHK3Hd__g&s",
    },
    {
      name: "Neha Raj",
      role: "Medical Coordinator",
      phone: "+91 91234 56789",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb51Yj-DS6kVL7MmwQlcDzpdeYRaHK3Hd__g&s",
    },
  ];

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="relative group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-secondary"
            />
            <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>

            <motion.div
              className="opacity-0 group-hover:opacity-100 mt-3 transition-opacity duration-300"
            >
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-600">{member.phone}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
