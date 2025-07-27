import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    }),
  };

  return (
    <section className="p-8 space-y-6">
      <motion.h2
        className="text-3xl font-bold text-center text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "What We Do",
            content: `Our core mission involves rescuing neglected, abandoned, and abused dogs, providing them with immediate medical care, rehabilitation, and a safe haven. We run comprehensive adoption programs, meticulously matching each dog with a loving, permanent home. Beyond rescue, we are proactive in community outreach, offering educational resources on responsible pet ownership, advocating for stronger animal welfare laws, and providing support services to pet owners facing hardship.`,
          },
          {
            title: "Why We Do It",
            content: `Our passion stems from a profound love for dogs and a deep understanding of their capacity for unconditional love and companionship. We recognize the vulnerability of animals and feel a strong ethical obligation to protect those who cannot protect themselves. We believe that by alleviating suffering and promoting responsible pet ownership, we contribute to a healthier, more humane society for all.`,
          },
          {
            title: "Who We Are",
            content: `We are a passionate team of dedicated volunteers, experienced animal welfare professionals, and compassionate community members united by a shared vision: a world where every dog is safe, cherished, and thriving. Our work is fueled by tireless effort, generous donations, and the unwavering support of individuals like you who believe in our cause. We are Animal welfare society, and we are here for the dogs.`,
          },
          {
            title: "Our Impact",
            content: `The wagging tails and happy barks of hundreds of dogs finding their forever families are a testament to our impact. We've significantly reduced the number of stray and suffering animals in our collage, and through our educational initiatives, we're fostering a more compassionate and informed community of pet owners. Our work not only saves lives but also enriches the lives of the families who open their hearts and homes to our rescued dogs.`,
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
            <p className="text-para text-gray-700">{item.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default AboutUs;
