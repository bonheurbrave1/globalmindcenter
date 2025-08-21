import React, { useState, useEffect } from "react";
import afr from "../assets/partners/afr.png";
import agaciro from "../assets/partners/agaciro.png";
import bdf from "../assets/partners/bdf.png";
import bk from "../assets/partners/bk.png";
import bpr from "../assets/partners/bpr.jpg";
import cimerwa from "../assets/partners/cimerwa.png";
import cogebanque from "../assets/partners/cogebanque.png";
import crystal from "../assets/partners/crystal.jpg";
import equity from "../assets/partners/equity.png";
import hope from "../assets/partners/hope.jpg";
import im from "../assets/partners/im.jpg";
import mastercard from "../assets/partners/mastercard.jpg";
import mod from "../assets/partners/mod.jpg";
import mtn from "../assets/partners/mtn.jpg";
import ngali from "../assets/partners/ngali.jpg";
import npd from "../assets/partners/npd.jpg";
import rba from "../assets/partners/rba.jpg";
import risa from "../assets/partners/risa.png";
import rura from "../assets/partners/rura.png";
import smartafrica from "../assets/partners/smartafrica.png";
import xtrade from "../assets/partners/xtrade.png";
import zigama from "../assets/partners/zigama.jpg";
const PartnershipCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array of partner logo images (replace with your actual images)
  const partnerLogos = [
    afr,
    agaciro,
    bdf,
    bk,
    bpr,
    cimerwa,
    cogebanque,
    crystal,
    equity,
    hope,
    im,
    mastercard,
    mod,
    mtn,
    ngali,
    npd,
    rba,
    risa,
    rura,
    smartafrica,
    xtrade,
    zigama,
  ];

  // Number of slides needed (showing 6 partners per slide)
  const totalSlides = Math.ceil(partnerLogos.length / 6);

  // Auto-advance the carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Split partners into groups of 6 for each slide
  const partnerGroups = [];
  for (let i = 0; i < partnerLogos.length; i += 6) {
    partnerGroups.push(partnerLogos.slice(i, i + 6));
  }

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Our Training Participants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Some of our open training sessions have drawn participants from the
            following institutions:
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors focus:outline-none"
            aria-label="Previous partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 极速赛车开奖直播 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick极速赛车开奖直播={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors focus:outline-none"
            aria-label="Next partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partnerGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {group.map((logo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <img
                          src={logo}
                          alt={`Partner institution ${groupIndex * 6 + index + 1}`}
                          className="max-h-12 max-w-full object-contain filter grayscale-0 hover:grayscale transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 w-8" : "bg-blue-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in our training programs for your institution?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCarousel;
