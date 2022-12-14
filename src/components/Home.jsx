import heroImage from "../assets/image/heroImage.png";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="h-fit min-h-screen w-full pt-[8rem] bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-y-10 px-4  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-6xl sm:text-8xl font-bold text-gray-100 text-home">I'm a Frontend Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 2 years of experience building software. Currently, I love to work on web application using technologies
            like React, Tailwind, Next JS and Styled Components.
          </p>
          <div>
            <Link to="portfolio" smooth duration={1000}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 gap-x-1 cursor-pointer">
                Portfolio{" "}
                <span className="group-hover:rotate-90 duration-500">
                  <TbArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Tunde_Olu" className="rounded-3xl mx-auto w-[90%] ss:w-2/3" />
        </div>
      </div>
    </section>
  );
};
export default Home;
