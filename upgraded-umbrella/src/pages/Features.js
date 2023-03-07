import React from "react";
import ImageTwo from "../assets/image-2.jpg";

const Features = () => {
  return (
    <div className="w-[98.9vw] no-scrollbar ">
      <header className="bg-[#3A98B9] text-left">
        <h1 className=" text-white px-14 py-5 text-3xl font-semibold ">
          This is the feature Page !
        </h1>
      </header>

      <div>
        <body>
          <div className="bg-[#FFF1DC] flex flex-col justify-center">
            <div className=" bg-[#E8D5C4] mx-16 my-10 p-8 flex flex-row gap-5 ">
              <p className="p-5 font-bold text-xl text-blue-900">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <img
                src={ImageTwo}
                alt="Feature-1"
                className="bg-cover rounded-2xl max-h-64 w-auto mr-6"
              />
            </div>
            <div className=" mx-16 my-10 p-8 flex flex-row gap-5 ">
              <img
                src={ImageTwo}
                alt="Feature-1"
                className="bg-cover rounded-2xl max-h-64 w-auto "
              />
              <p className="p-5 font-bold text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className=" bg-[#E8D5C4] mx-16 my-10 p-8 flex flex-row gap-5 ">
              <p className="p-5 font-bold text-xl text-blue-900">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <img
                src={ImageTwo}
                alt="Feature-1"
                className="bg-cover rounded-2xl max-h-64 w-auto mr-6"
              />
            </div>
            <div className=" mx-16 my-10 p-8 flex flex-row gap-5 ">
              <img
                src={ImageTwo}
                alt="Feature-1"
                className="bg-cover rounded-2xl max-h-64 w-auto mr-6"
              />
              <p className="p-5 font-bold text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Features;
