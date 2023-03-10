import React from "react";

const Contact = () => {
  return (
    <div className="w-[98.9vw] no-scrollbar ">
      <header className="bg-[#3A98B9] text-left">
      </header>

      <div>
        <body>
          <div className="bg-[#FFF1DC] flex flex-col justify-center">
            <div className=" bg-[#D9D9D9] mx-8px my-8px p-40 flex flex-row gap-10">
              <p className="p-5 mt-20 font-bold text-2xl text-black-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="rounded-xl bg-[#272424] mx-10px my-10px">
                <p className="px-28 pr-10 pl-10 pt-5 pb-5 font-bold text-2xl mx-20 mt-0 my-20 text-white text-center">
                    CONTACT

                    <div className="mt-24 flex justify-between flex-col gap-8 items-center">
                      <input className="bg-[white] my-10px rounded-sm"></input>
                      <input className="bg-[white] my-10px rounded-sm"></input>
                    </div>
                    <div className="mt-10 ml-20 bg-[#0000FF] hover:bg-blue-500 text-white font-bold py-2 px-2 rounded-full w-40">
                      <button className="mx- items-center">SUBMIT</button>
                    </div>
                </p>
              </div>
            </div>
            <div className=" mx-16 my-10 p-8 flex flex-row gap-5 ">
              <p className="p-5 font-bold text-xl">
                General Inquiries:<br></br>
                AyushPhishingAttack@gmail.com
              </p>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Contact;
