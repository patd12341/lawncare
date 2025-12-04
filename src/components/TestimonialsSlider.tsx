import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Top Google Reviews with Review Schema markup
const testimonials = [
  {
    name: "Michelle T.",
    text: "Patrick is great to work with! He responds to texts quickly and completes the job to perfection.",
    rating: 5,
    date: "2024-08-15",
    source: "Google"
  },
  {
    name: "Russell O.",
    text: "Patrick came in and saved the day when my work schedule changed. Great job maintaining almost an acre.",
    rating: 5,
    date: "2024-07-22",
    source: "Google"
  },
  {
    name: "Andy L.",
    text: "Patrick does an amazing job. He is very punctual and very affordable. He takes a lot of pride in his work.",
    rating: 5,
    date: "2024-06-10",
    source: "Google"
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <>
      {/* Review Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pat's Lawn Care",
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5"
              },
              "reviewBody": testimonial.text,
              "datePublished": testimonial.date,
              "publisher": {
                "@type": "Organization",
                "name": testimonial.source
              }
            }))
          })
        }}
      />

      <div className="mt-20">
        {/* Display all testimonials in a grid layout like the original */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4">
                "{testimonial.text}"
              </blockquote>
              
              <div>
                <cite className="font-semibold text-gray-900 not-italic">
                  {testimonial.name}
                </cite>
                <p className="text-sm text-gray-500">
                  {testimonial.source} Review
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden structured data for SEO */}
        <div className="sr-only">
          {testimonials.map((testimonial, index) => (
            <article key={index} itemScope itemType="https://schema.org/Review">
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
              </div>
              <blockquote itemProp="reviewBody">{testimonial.text}</blockquote>
              <cite itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{testimonial.name}</span>
              </cite>
              <time itemProp="datePublished" dateTime={testimonial.date}>{testimonial.date}</time>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;