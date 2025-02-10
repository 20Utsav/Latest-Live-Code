import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image paths from the public folder
const ValeriaImage = "/img/ui.jpg";
const JohnImage = "/img/ui.jpg";
const JaneImage = "/img/ui.jpg";

// StarRating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center mb-4">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="gold"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gold"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          fill="gold"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gold"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"
          />
          <path
            fill="gold"
            d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2z"
          />
        </svg>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gold"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonial: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true, // Show arrows by default
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on small screens
        },
      },
    ],
  };
  

  // Generate random ratings for each testimonial
  const getRandomRating = () => {
    const ratings = [3, 3.5, 4, 4.5, 5]; // Possible ratings
    return ratings[Math.floor(Math.random() * ratings.length)]; // Randomly pick a rating
  };

  return (
    <div className="bg-[#121212] py-16">
      {/* Custom container with max-width of 1280px */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white" style={{ maxWidth: "1280px" }}>
        <h2 className="text-center text-3xl font-bold mb-4">
          TESTIMONIALS
        </h2>
        <p className="text-center mb-8">
        Real stories from our satisfied clients, showcasing the impact of our solutions on their success
        </p>

        {/* Slider for Testimonials */}
        <div className="slider-container">
          <Slider {...settings}>
            {/* Testimonial 1 - Valeria Miller */}
            <div key="valeria" className="px-4">
              <div className="bg-[#202020] text-white p-8 rounded-lg shadow-md text-center">
                <img
                  src={ValeriaImage}
                  alt="Valeria Miller"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                {/* Random Rating */}
                <StarRating rating={getRandomRating()} />
                <h3 className="text-xl font-semibold mb-4">
                  Valeria Miller
                </h3>
                <p className=" ">
                CodeXCrafter Solution exceeded our expectations! Their team delivered a sleek, high-performing website and boosted our online presence. Professional, responsive, and highly skilled—highly recommend!
                </p>
              </div>
            </div>

            {/* Testimonial 2 - John Doe */}
            <div key="john" className="px-4">
              <div className="bg-[#202020] text-white p-8 rounded-lg shadow-md text-center">
                <img
                  src={JohnImage}
                  alt="John Doe"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                {/* Random Rating */}
                <StarRating rating={getRandomRating()} />
                <h3 className="text-xl font-semibold   mb-4">
                  John Doe
                </h3>
                <p className=" ">
                Working with CodeXCrafter Solution was a breeze! They took our ideas and turned them into a sleek, fast, and user-friendly website. The team was super responsive and made the whole process smooth. If you need a website that truly stands out, these are the people to call!
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Jane Smith */}
            <div key="jane" className="px-4">
              <div className="bg-[#202020] text-white p-8 rounded-lg shadow-md text-center">
                <img
                  src={JaneImage}
                  alt="Jane Smith"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                {/* Random Rating */}
                <StarRating rating={getRandomRating()} />
                <h3 className="text-xl font-semibold   mb-4">
                  Jane Smith
                </h3>
                <p className=" ">
                Working with CodeXCrafter Solution felt like having a dedicated game development partner. They took our vision, added their magic, and built a game that’s both visually stunning and incredibly fun to play. The team was super communicative, creative, and genuinely passionate about bringing ideas to life. Can’t wait to work with them again!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;