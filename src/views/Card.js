import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";

export const Card = ({ img, title, desc, date, href, github, style }) => {
  return (
    <div className={`mx-auto m-3 ${style} max-w-xs ks:max-w-sm xs:max-w-lg md:max-w-2xl xl:max-w-lg 2xl:max-w-sm`}>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <a href={href} target="_blank">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href={href} target="_blank">
            <h5 className="text-gray-900 font-bold text-xl xs:text-2xl tracking-tight mb-2 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 text-sm xs:text-base ">
            {desc}
          </p>
          <div className="flex items-center space-x-3">
            <a href={href} target="_blank">
              <GoLinkExternal className="text-2xl text-gray-700" />
            </a>
            <a href={github} target="_blank">
              <AiFillGithub className="text-2xl text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
