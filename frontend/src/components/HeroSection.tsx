import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import apple_logo from "../assets/Apple_gray_logo.png";
import hero_frame1 from "../assets/hero_iphone.png";
import hero_frame2 from "../assets/hero_macbook.png";
import hero_frame3 from "../assets/hero_airpods.png";
import { Link, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../assets/assets";

const HeroSection = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: 1,
      logo: apple_logo,
      series: "iPhone 15 Series",
      title: "Up to 10% off Voucher",
      img: hero_frame1,
      link: "/products",
    },
    {
      id: 2,
      logo: apple_logo,
      series: "MacBook Pro 2024",
      title: "Power Meets Performance",
      img: hero_frame2,
      link: "/products/laptops",
    },
    {
      id: 3,
      logo: apple_logo,
      series: "Apple AirPods Pro 2",
      title: "Style Meets Smart",
      img: hero_frame3,
      link: "/products/watches",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Sidebar */}
        <ul className="w-full lg:w-64 space-y-3 py-4">
          {sidebarLinks.map((item, index) => (
            <Link
              key={index}
              to={`/products/${item.path}`}
              className="flex items-center justify-between px-2 hover:bg-gray-100 text-sm sm:text-base hover:text-gray-600 cursor-pointer transition-colors"
            >
              {item.catName}
            </Link>
          ))}
        </ul>

        {/* Divider */}
        <span className="w-4 hidden md:block border-r-2 border-gray-400"></span>

        {/* Hero Slider */}
        <div className="relative flex-1 bg-black text-white overflow-hidden rounded-lg min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]">
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16 transition-opacity duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              {/* Left Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4">
                  <img
                    src={slide.logo}
                    alt="logo"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-xs sm:text-sm md:text-base">
                    {slide.series}
                  </span>
                </div>

                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  {slide.title}
                </h2>

                <button
                  onClick={() => navigate(slide.link)}
                  className="flex items-center justify-center md:justify-start gap-2 group cursor-pointer"
                >
                  <span className="underline text-sm sm:text-base transition-all">
                    Shop Now
                  </span>
                  <FaArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
                <img
                  src={slide.img}
                  alt={slide.series}
                  className="w-[250px] sm:w-[350px] md:w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? heroSlides.length - 1 : prev - 1
              )
            }
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition z-20"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition z-20"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  i === currentSlide
                    ? "bg-white scale-110"
                    : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
