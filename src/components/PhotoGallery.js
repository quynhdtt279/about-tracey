import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const photos = [
  {
    url: process.env.PUBLIC_URL + '/images/htsc_2.jpg',
    caption: 'Product Owner at HTSC',
    alt: 'Leading strategic product initiatives at HTSC',
    size: 'large'
  },
  {
    url: process.env.PUBLIC_URL + '/images/vibotic.jpg',
    caption: 'Innovation at Vibotic',
    alt: 'Contributing to innovative solutions at Vibotic',
    size: 'medium'
  },
  {
    url: process.env.PUBLIC_URL + '/images/htsc_3.jpg',
    caption: 'Team Leadership at HTSC',
    alt: 'Guiding and collaborating with the development team',
    size: 'large'
  },
  {
    url: process.env.PUBLIC_URL + '/images/portrait.jpg',
    caption: 'Instructor at Aptech',
    alt: 'Teaching and mentoring students',
    size: 'medium'
  },
  {
    url: process.env.PUBLIC_URL + '/images/trekking.jpg',
    caption: 'Adventure & Growth',
    alt: 'Exploring new horizons through trekking',
    size: 'large'
  },
  {
    url: process.env.PUBLIC_URL + '/images/travel.jpg',
    caption: 'Travel & Exploration',
    alt: 'Exploring new horizons through travel',
    size: 'medium'
  }
];

const breakpointColumns = {
  default: 3,
  1280: 3,
  1024: 2,
  640: 1
};

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cosmic mb-2 sm:mb-3">
              My Journey
            </h2>
            <p className="text-cosmic/70 text-base sm:text-lg max-w-2xl mx-auto">
              Moments that shape my professional and personal growth
            </p>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-3 sm:-ml-4 w-auto"
          columnClassName="pl-3 sm:pl-4 bg-clip-padding"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`mb-3 sm:mb-4 group relative ${
                photo.size === 'large' ? 'col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-cosmic/5 shadow-sm hover:shadow-lg transform transition-all duration-700 hover:-rotate-1">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-cosmic/5 to-coral/10 mix-blend-overlay opacity-50" />
                
                {/* Image */}
                <div className={`relative ${
                  photo.size === 'large' ? 'aspect-[16/9]' : 'aspect-square'
                }`}>
                  <motion.img
                    src={photo.url}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover filter saturate-[0.95] brightness-[1.02]"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.4 }
                    }}
                  />
                </div>

                {/* Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-cosmic/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-pearl text-sm sm:text-base font-medium">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default PhotoGallery;
