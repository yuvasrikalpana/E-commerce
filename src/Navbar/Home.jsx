





import React, { useRef } from 'react';
import Footer from '../Footer/Footer';
import Slider from 'react-slick';
const Home = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="m-5 p-8 pt-10 bg-gray-100 mt-8">
        <h1 className="text-black font-bold text-4xl text-center pb-10">
          A Perfect Bite of Tradition and Flavor
        </h1>

        <div className="h-auto max-w-full min-w-auto text-red-800 font-bold font-serif text-center p-2 text-5xl">
          <h1>Buy1 Get1-Off</h1> <br />
          <h2>Starting Combo - 55Rs$</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10">
          <p className="text-black-800 font-semibold leading-relaxed mb-6 text-center text-2xl w-full md:w-1/2 px-4">
            Samosas with a healthy twist! Enjoy the perfect blend of flavor and nutrition—whether it’s the lean chicken,
            <br /> fiber-packed veggies, or wholesome paneer, our samosas are made to satisfy your cravings without compromising on health!
          </p>

          <div className="w-full md:w-1/2 px-4">
            <Slider ref={sliderRef} {...settings}>
              <div>
                <img
                  src="https://wallpapers.com/images/hd/delicious-samosason-plate-yd2c9dkwy0opqsei-yd2c9dkwy0opqsei.jpg"
                  alt="Samosa 1"
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
                <div className="text-center mt-4">
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl"
                  >
                    • • •
                  </button>
                </div>
              </div>

              <div>
                <img
                  src="https://wallpapers.com/images/hd/samosaswith-chutneys-61vnlhkcnwcjjyr6-61vnlhkcnwcjjyr6.png"
                  alt="Samosa 2"
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
                <div className="text-center mt-4">
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl"
                  >
                    • • •
                  </button>
                </div>
              </div>

              <div>
                <img
                  src="https://img.freepik.com/premium-psd/beaf-samosa-png-transparent_955012-16573.jpg?w=360"
                  alt="Samosa 3"
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
                <div className="text-center mt-4">
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl"
                  >
                    • • •
                  </button>
                </div>
              </div>

              <div>
                <img
                  src="https://cdn.uengage.io/uploads/31763/image-UY4BRV-1697027501.png"
                  alt="Samosa 4"
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
                <div className="text-center mt-4">
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl"
                  >
                    • • •
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 mt-8 mb-6"></div>


      </div>
      <Footer />
    </div>
  );
};

export default Home;
