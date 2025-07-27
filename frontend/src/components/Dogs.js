import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Dogs() {
  const dogs = [
    {
      id: "1",
      name: "Bruno",
      age: "2 years",
      breed: "Labrador",
      image: "https://placedog.net/400/300?id=1",
    },
    {
      id: "2",
      name: "Lucy",
      age: "3 years",
      breed: "German Shepherd",
      image: "https://placedog.net/400/300?id=2",
    },
    {
      id: "3",
      name: "Charlie",
      age: "1 year",
      breed: "Beagle",
      image: "https://placedog.net/400/300?id=3",
    },
    {
      id: "4",
      name: "Milo",
      age: "4 years",
      breed: "Golden Retriever",
      image: "https://placedog.net/400/300?id=4",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  return (
    <section className="p-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Dogs
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dogs.map((dog, i) => (
          <motion.div
            key={dog.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="block bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Link to={`/dog/${dog.id}`}>
              <img src={dog.image} alt={dog.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{dog.name}</h3>
                <p className="text-gray-600">{dog.breed}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Dogs;
