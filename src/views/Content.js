import React from "react";
import hero from "../img/hero.png";
import react from "../img/react.png";
import js from "../img/js.png";
import ml from "../img/ml.png";

export const Content = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <p className="text-center sm:text-4xl lg:text-5xl font-semibold animate__animated animate__backInLeft">
        Full Stack Developer
      </p>
      <p className="text-center sm:text-lg lg:text-xl mt-3 animate__animated animate__backInLeft animate__delay-1s">
        I code to automate the things around me, and I love what I do{" "}
      </p>
      <div className="w-60 h-60 bg-primary mt-10 rounded-full animate__animated animate__fadeIn animate__delay-2s"></div>
      <img src={hero} className="mt-10" />
      <div className="bg-primary text-white flex flex-col items-center w-full pt-20">
        <p className="text-4xl font-semibold">
          Hi, I’m Anubhav. Nice to meet you.
        </p>
        <p className="text-center px-40 mt-5 mb-24">
          lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet,
          consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit
          amet, tetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit
          amet, consectet
        </p>
        <div className="w-full md:px-16 nd:px-20">
          <div className="bg-white grid grid-cols-3 rounded-lg border border-b-0 rounded-bl-none rounded-br-none">
            <div className="p-2 border-r">
              <Card img={react} alt="React" />
            </div>
            <div className="p-2 border-r">
              <Card img={js} alt="node" />
            </div>
            <div className="p-2">
              <Card img={ml} alt="ml" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full md:px-16 nd:px-20">
          <div className="bg-white grid grid-cols-3 rounded-lg border border-t-0 rounded-tl-none rounded-tr-none">
            <div className="p-2 border-r">
              <Card1
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
              />
            </div>
            <div className="p-2 border-r">
              <Card1
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
              />
            </div>
            <div className="p-2">
              <Card1
                title="Machine Learning and Computer Vision"
                skills={[
                  "Python",
                  "Numpy",
                  "Pandas",
                  "Matplotlib",
                  "Scikit-learn",
                  "Opencv",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card1 = ({ title, skills }) => {
  return (
    <div className="w-full text-black flex flex-col items-center">
      <p className="font-bold text-xl text-center h-12 mb-5 nd:mb-0">{title}</p>
      <p className="mt-5 text-center text-fadedBlack">
        lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet,
        consectet
      </p>
      <p className="font-semibold text-center text-lg text-primary mt-10">
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

const Card = ({ img, alt}) => {
  return (
    <div className={`w-full text-black flex flex-col items-center`}>
      <img src={img} alt={alt} className="mt-2 mb-1" />
    </div>
  );
};
