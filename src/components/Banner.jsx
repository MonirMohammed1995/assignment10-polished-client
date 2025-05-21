import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="mt-0">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={700}
        showArrows={true}
      >
        {/* Slide 1 */}
        <div className="hero-overlay bg-[url('https://i.postimg.cc/kXCCR8tj/slider1.jpg')] bg-cover bg-center h-[300px] md:h-[450px] flex items-center justify-center">
          <div className=" text-white p-6 rounded max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Welcome to PlantCare</h2>
            <p className="text-sm md:text-base">
              Manage your indoor and outdoor plants with ease. Log care tasks, monitor health, and grow happy plants.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-overlay bg-[url('https://i.postimg.cc/zvjcgy9M/slider2.jpg')] bg-cover bg-center h-[300px] md:h-[450px] flex items-center justify-center">
          <div className="text-white p-6 rounded max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Track Watering Routines</h2>
            <p className="text-sm md:text-base">
              Set reminders and get notified when it’s time to water your plants — no more over or under-watering!
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-overlay bg-[url('https://i.postimg.cc/nVP7HFjc/slider3.jpg')] bg-cover bg-center h-[300px] md:h-[450px] flex items-center justify-center">
          <div className="text-white p-6 rounded max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Discover Plant Tips</h2>
            <p className="text-sm md:text-base">
              Learn essential plant care tips — from lighting to humidity control, designed for every plant lover.
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="hero-overlay bg-[url('https://i.postimg.cc/TPNgNgbG/slider4.jpg')] bg-cover bg-center h-[300px] md:h-[450px] flex items-center justify-center">
          <div className=" text-white p-6 rounded max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Monitor Plant Health</h2>
            <p className="text-sm md:text-base">
              Keep a close eye on plant health. Log symptoms and track recovery to grow thriving greenery.
            </p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="hero-overlay bg-[url('https://i.postimg.cc/1Xrz21d6/slider5.jpg')] bg-cover bg-center h-[300px] md:h-[450px] flex items-center justify-center">
          <div className="text-white p-6 rounded max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Built for Every Plant Parent</h2>
            <p className="text-sm md:text-base">
              Whether you’re a beginner or a pro, PlantCare helps you give the best care possible to your green friends.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
