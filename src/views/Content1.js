import React from "react";
import hero from "../img/hero.png";
import react from "../img/react.png";
import js from "../img/js.png";
import ml from "../img/ml.png";

export const Content1 = () => {
  return (
    <>
      <div className="mt-40 flex flex-col items-center justify-center">
        <p className="text-center text-xl ks:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold animate__animated animate__fadeIn">
          Frontend Developer
        </p>
        <p className="text-center px-5 text-sm ks:text-base sm:text-lg lg:text-xl mt-3 animate__animated animate__fadeIn animate__delay-1s">
          I code to automate the things around me, and I love what I do{" "}
        </p>
        <div className="animate__animated animate__fadeIn animate__delay-2s">
        </div>
        <img src={hero} className="mt-10" />
        <div className="bg-primary text-black flex flex-col items-center w-full pt-20">
          <p className="text-xl sm:text-3xl md:text-4xl font-semibold">
            Hi, I’m Shekhar. Nice to meet you.
          </p>
          <p className="text-xl sm:text-3xl md:text-4xl mt-10 mb-2 font-semibold">
           My Expertise
          </p>
          <p className="opacity-70 text-center text-sm xs:text-base px-3 ks:px-8 xs:px-16 sm:px-28 md:px-40 mt-5 mb-56">
          Sophomore at NIT KKR
          </p>
        </div>
        {/* <div className="bg-primary text-black flex flex-col items-center w-full pt-20">
          <p className="text-xl sm:text-3xl md:text-4xl font-semibold">
           My Expertise
          </p>
          <p className="opacity-70 text-center text-sm xs:text-base px-3 ks:px-8 xs:px-16 sm:px-28 md:px-40 mt-5 mb-56">
          ........................................
          </p>
        </div> */}
        <div className="px-5 sm:px-10 md:px-20 -mt-40 w-full">
          <div className="flex flex-col lg:flex-row items-center border rounded-md bg-white">
            <Card
              img={react}
              alt="React"
              title="Front-end Developer"
              skills={[
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "Typescript",
                "Reactjs",
                "Redux",
                "Nextjs",
                "Github",
                "VS Code",
              ]}
              borderR={true}
              style=""
            />
            {/* <Card
              img={js}
              alt="node"
              title="Back-end Developer"
              skills={[
                "Nodejs",
                "Expressjs",
                "Pub",
                "JavaScript",
                "Typescript",
                "Postman",
                "Mongoose",
                "MongoDb",
                "Github",
                "VS Code",
              ]}
              borderR={true}
              style=""
            /> */}
            {/* <Card
              img={ml}
              alt="ml"
              title="Machine Learning and Computer Vision"
              skills={[
                "Python",
                "Numpy",
                "Pandas",
                "Matplotlib",
                "Scikit-learn",
                "Opencv",
              ]}
              borderR={false}
              style="-mt-32"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ img, alt, title, skills, borderR, style }) => {
  return (
    <div
      className={`w-full py-2 text-black flex flex-col items-center  ${
        borderR ? "lg:border-r" : ""
      } border-b lg:border-b-0 mt-0 lg:${style}  `}
    >
      <img src={img} alt={alt} className="mt-2 mb-1 w-32" />
      <p className="font-bold text-xl text-center h-10">{title}</p>
      {/* <p className="lg:mt-5 text-center text-fadedBlack">
      </p> */}
      <p className="font-semibold text-center text-lg text-primary mt-2 lg:mt-10">
        Tools and Technology
      </p>
      <div className="flex flex-col items-center">
        {skills?.map((e, key) => {
          return (
            <p key={key} className="text-fadedBlack font-medium leading-8">
              {e}
            </p>
          );
        })}
      </div>
    </div>
  );
};
