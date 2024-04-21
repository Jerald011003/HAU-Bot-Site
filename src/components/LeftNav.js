import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { LuPanelLeftClose } from "react-icons/lu";
import {  FiMessageSquare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { ContextApp } from "../utils/Context";
function LeftNav() {
  const { setShowSlide, showSlide, handleQuery } = useContext(ContextApp);
  return (

    <div
      className={
        !showSlide
          ? "h-screen bg-red-800/80 w-[300px] border-r border-gray-500 hidden lg:flex items-center justify-between p-2 text-white flex-col translate-x-0"
          : "hidden"
      }

      style={{
        backgroundImage: "url('/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
       
        opacity: 0.9,
      }}
    >
      
      <div className="flex items-start justify-between w-full">
        <span
          className="border border-gray-600 bg-gray-600 transition-all duration-300 rounded w-[80%] py-2 text-xs flex gap-1 items-center justify-center cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <AiOutlinePlus fontSize={18} />
          New Chat
        </span>
        <span
          className="border border-gray-600 bg-gray-600  transition-all duration-300 rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setShowSlide(!showSlide)}
        >
          <LuPanelLeftClose />
        </span>
      </div>
      {/* middle section  */}
      <div className="h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
        {/* msg  */}
        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap"
          value={"What are Courses?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">What are the courses offered in SEA?</span>
          </span>
        </span>

        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap "
          value={"What is CpE?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">What is CpE Course?</span>
          </span>
        </span>

        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap "
          value={"What is CpE?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">SEA's History</span>
          </span>
        </span>

        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap "
          value={"What is CpE?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">SEA's Vision</span>
          </span>
        </span>

        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap "
          value={"What is CpE?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">SEA's Mission</span>
          </span>
        </span>

        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap "
          value={"What is CpE?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">SEA's Objective</span>
          </span>
        </span>

        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap "
          value={"What is CpE?"}
          onClick={handleQuery}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">Campus Map</span>
          </span>
        </span>

      </div>
      {/* bottom section  */}
      <div className="w-full  border-white-600 flex flex-col gap-2 items-center justify-center p-2">
     
        <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-600 transition-all duration-300">
          <span className="flex gap-2 items-center justify-center text-sm font-bold">
            <img
              src="/user.jpeg"
              alt="user"
              className="w-8 h-8 object-cover rounded-sm"
            />
            Guest
          </span>
          <span className="rounded-md  px-1.5 py-0.5 text-xs font-medium uppercase text-white-500">
            <SlOptions />
          </span>
        </span>
      </div>
    </div>
  );
}

export default LeftNav;
