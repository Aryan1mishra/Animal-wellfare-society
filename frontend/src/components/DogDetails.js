import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DogDetails() {
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

  const { id } = useParams();
  const navigate = useNavigate();
  const dog = dogs.find((d) => d.id === id);

  if (!dog) return <p className="p-8 text-center text-xl">Dog not found.</p>;

  return (
    <motion.section
      className="p-6 flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src={dog.image}
        alt={dog.name}
        className="w-full md:w-1/2 rounded-xl shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="space-y-4 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-primary">{dog.name}</h2>
        <p className="text-lg"><strong>Age:</strong> {dog.age}</p>
        <p className="text-lg"><strong>Breed:</strong> {dog.breed}</p>
        <p className="text-lg"><strong>Bio:</strong> {dog.bio}</p>

        <button
          onClick={() => navigate("/dogs")}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Go Back
        </button>
      </motion.div>
    </motion.section>
  );
}

export default DogDetails;
