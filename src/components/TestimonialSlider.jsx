import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'react-feather';

const testimonials = [
  {
    id: 1,
    name: "Alice Uwase",
    role: "Project Manager, Kigali",
    content:
      "The PMP course at Global Mind Center transformed my career. The instructors were knowledgeable and the materials were comprehensive. I passed my exam on the first try!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg", // example image URL
  },
  {
    id: 2,
    name: "John Mugisha",
    role: "IT Manager, Nairobi",
    content:
      "Excellent training program! The practical examples helped me apply concepts directly to my work. Highly recommend for anyone serious about project management.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Marie Claire",
    role: "Construction PM, Kampala",
    content:
      "The blended learning approach worked perfectly for my schedule. The online resources were just as valuable as the in-person sessions.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          Student Success Stories
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
            />
            <div className="flex justify-center text-primary mb-4">
              <MessageSquare size={32} />
            </div>
            <p className="text-lg italic mb-6 text-center">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="text-center">
              <p className="font-bold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              <div className="flex justify-center mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className='text-black'/>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className='text-black'/>
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
