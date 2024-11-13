import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div>
      <div className="pt-28 pb-12 bg-no-repeat bg-[url(/banner.jpg)] bg-center bg-cover relative overflow-hidden z-0">
        <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>
        <div className="grid grid-rows-1 grid-cols-2 gap-4 m-auto block w-[95%]  justify-between">
          <div className="mt-20">
            <h1 className="text-[#044e83] text-7xl font-bold	">
              Governor Sindh
            </h1>
            <h4 className="text-[#044e83] text-5xl font-normal mb-5">
              Kamran Khan Tessori
            </h4>
            <h3 className="text-[#2eb6e8] text-5xl font-bold	mb-5">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </h3>
            <h5 className="text-[#044e83] text-3xl font-bold	mb-5">
              Earn up to $5,000 / month
            </h5>
            <h5 className="text-[#044e83] text-3xl font-bold mb-8">
              Now admissions are open in Hyderabad
            </h5>
            <div className="flex gap-16 ">
              <button className="text-white bg-[#044e83] py-3 px-12 text-lg font-bold rounded-lg transition ease-in-out delay-150 hover:-translate-y-[-5px]">
                APPLY NOW
              </button>
              <div className="text-[#044e83]">
                <h1 className=" text-3xl font-bold text-center">562,143</h1>
                <p className="">Accepted Applications</p>
              </div>
            </div>
          </div>
          <div className="ml-20 w-screen h-screen">
            <Image
              src="/man.png"
              width={900}
              height={1000}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div className="py-20 m-auto block w-[95%]  justify-between overflow-hidden relative">
        <div>
          <h1 className="text-[#044e83] text-[32px] font-extrabold text-center mb-10">
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billion-Dollar Valued Developers and
            Solopreneurs
          </h1>
          <p className="text-[1.2rem] text-justify text-[#525255] font-medium">
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses. This
            program has the objective to train this new breed of billion-dollar
            solopreneurs. These solopreneurs will adopt the ultra-lean business
            model and work independently and will not need to hire employees or
            other team members.
          </p>
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-4 mt-10">
          <div>
            <Image
              src="/sec2-01.jpg"
              width={400}
              height={400}
              alt="img"
              className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
            />
          </div>
          <div>
            <Image
              src="/sec2-02.jpg"
              width={400}
              height={400}
              alt="img"
              className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
            />
          </div>
          <div>
            <Image
              src="/sec2-03.jpg"
              width={400}
              height={400}
              alt="img"
              className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
            />
          </div>
        </div>
      </div>

      <div className="block w-[95%] m-auto overflow-hidden relative my-10">
        <h1 className="text-[#044e83] text-4xl font-extrabold mb-10">
          Core Courses Sequence
        </h1>
        <div className="grid grid-cols-4 gap-10 my-10 ml-2">
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg">
            <div>
              <Image
                src="/01.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Programming Fundamentals</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg">
            <div>
              <Image
                src="/02.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Web2 Using NextJS</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg">
            <div>
              <Image
                src="/03.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Earn as You Learn</text>
            </div>
          </div>
        </div>
      </div>

      <div className="block w-[95%] m-auto overflow-hidden relative mt-10">
        <h1 className="text-[#044e83] text-4xl font-extrabold mb-10">
        Advanced Courses
        </h1>
        <div className="grid grid-cols-4 gap-10 my-10 ml-2">
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg	">
            <div>
              <Image
                src="/04.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Artificial Intelligence</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg	">
            <div>
              <Image
                src="/05.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Web 3 and Metaverse</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg	">
            <div>
              <Image
                src="/06.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Cloud-Native Computing</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg	">
            <div>
              <Image
                src="/07.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Ambient Computing and IoT</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg	">
            <div>
              <Image
                src="/08.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Genomics and Bioinformatics</text>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 transition-all shadow-md rounded-lg flex flex-col overflow-hidden h-fit text-zinc-600 font-bold	text-lg	">
            <div>
              <Image
                src="/09.jpg"
                width={450}
                height={300}
                alt="img"
                className="w-full object-cover"
              />
            </div>
            <div className="h-[70px] text-center justify-center	content-center	">
              <text>Network Programmability and Automation</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
