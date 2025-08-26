import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'react-feather';
import jdedieu from "../assets/jdedieu.jpeg"
import noimage from "../assets/noimage.png"
import mugabe from "../assets/partners/mugabe.jpg"
import emanuel from "../assets/emanuel.jpeg"
import ineza from "../assets/ineza.jpeg"
const testimonials = [
  {
    id: 1,
    name: "Mr. Jean de Dieu Ndacyayisenga",
    role: "Project Manager, Kigali UN Women",
    content:
      "I, Mr. Jean de Dieu Ndacyayisenga, would like to extend my heartfelt appreciation to Global Mind Center for facilitating an outstanding PMP Training session. Your team's professionalism, dedication, and engaging approach truly elevated the learning experience. The trainers showcased deep expertise, breaking down complex concepts into clear, practical insights. Through interactive learning, real-world examples, and hands-on exercises, they created a dynamic environment that boosted our confidence in PMP methodologies. From the well-structured content to the warm and supportive atmosphere, it was evident that delivering a superior learning experience is at the core of your mission.Thank you once again for your commitment to excellence!",
    rating: 5,
    image: jdedieu
  },
  {
    id: 2,
    name: "Stéphane Mugabe",
    role: "PMP Candidate | Project Manager & Development Professional at European union delagation to Republic of Rwanda",
    content:
      "Studying for the PMP certification has been a transformative and empowering experience.  It gave me a structured understanding of project management, from planning to delivery. Tools like WBS, stakeholder mapping, and risk analysis now guide my daily practice. The course helped me shift from intuition to globally recognized standards. I highly recommend studying at the Global Mind Center for a focused and supportive learning journey",
    rating: 5,
    image: mugabe
  },
 
  {
    id:4,
    name:"Aurolie Ineza",
    role: "Project Manager - ICT chamber",
    content : "My PMP journey with Global Mind Center was transformative. They turned complex concepts into actionable tools I use every day, like WBS and stakeholder mapping. I moved from working on instinct to leading with globally recognized standards and passed my exam with confidence. Highly recommended",
    image:ineza
  },
  {
    id:5,
    name : "Bugingo Emmanuel",
    role: "Director of Local Economic Development at Ministry of Local Government",
    content:"I successfully earned my PMI certification thanks to my training. The consistent follow-up and readily available support were crucial to my progress. The comprehensive materials and real-world scenarios made the concepts easy to understand and prepared me perfectly for the exam, which I passed on my first attempt. I highly recommend this learning platform.",
    image:emanuel
  }
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
