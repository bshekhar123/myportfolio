import React from "react";

export const Experiences = () => {
  return (
    <>
      <div className="bg-primary text-white flex flex-col items-center mt-5">
        <p className="mt-20 text-4xl font-bold mb-32">My Experiences</p>
        {/* <p className="mt-8 mb-32 px-3 xs:px-10 sm:px-20 md:px-40 nd:px-56 text-center opacity-70 text-sm xs:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit in
          quam veritatis harum animi quidem sequi numquam quia quod.
        </p> */}
      </div>
      <div className="w-full md:px-5 mb-5 -mt-20">
        <div className="text-black flex flex-wrap items-center justify-center">
          {/* <Card
            img="https://media-exp1.licdn.com/dms/image/C4E0BAQFHE1_hQm5wOA/company-logo_200_200/0/1628619744658?e=1646870400&v=beta&t=eXH1XB7vxQw6yAn0r1WBIn6qNU0GM8p6HIFNbcAAXAU"
            title="GDSC Web Dev and CP"
            desc="Member of Google Developer Student Club-NIT, Kurukshetra in Web Dev and Competitive Programming."
            href="https://www.linkedin.com/company/gdscnitkkr/mycompany/"
            date="Aug'21 - Present"
          /> */}
          {/* <Card
            img="https://media-exp1.licdn.com/dms/image/C4D0BAQFSPEfu2AmDKA/company-logo_200_200/0/1608798926138?e=1646870400&v=beta&t=xM5zU8XRbd_b1u0rUhRgVE3NFxt41huIGFGiHR4U6Xw"
            title="AioFmes"
            desc={`Frontend Developer at AioFmes. Designed and Developed the responsive UI's. Implemented various Libraries like Recharts, Chartjs.`}
            href="https://www.linkedin.com/company/aiofmes/"
            date="Sep'21 - Oct'21"
          /> */}
          {/* <Card
            img="https://media-exp1.licdn.com/dms/image/C4D0BAQFi4GG2XwFHqQ/company-logo_200_200/0/1627026016891?e=1646870400&v=beta&t=pUZDxKLCHM7rxHDuT1OJvvZGNuRnF5OTPgWVnXe0xhY"
            title="Internshala - Trainee"
            desc="Awaring people about Internshala trainings and programs"
            href="https://www.linkedin.com/company/internshala/"
            date="Apr'21 - May'21"
          /> */}
        </div>
      </div>
    </>
  );
};
const Card = ({ img, title, desc, href, date }) => {
  return (
    <div class="flex justify-center relative top-1/3 m-2 max-w-sm ks:max-w-lg md:max-w-2xl nd:max-w-3xl lg:max-w-lg xl:max-w-sm h-56 ">
      <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div class="relative flex gap-4">
            <img
              src={img}
              class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            />
          <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between">
              <a href={href} target="_blank">
                <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  {title}
                </p>
              </a>
              <a class="text-gray-500 text-xl" href="#">
                <i class="fa-solid fa-trash"></i>
              </a>
            </div>
            <p class="text-gray-400 text-sm">{date}</p>
          </div>
        </div>
        <p class="-mt-4 text-gray-500">{desc}</p>
      </div>
    </div>
  );
};
