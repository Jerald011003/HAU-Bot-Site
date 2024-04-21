import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import { ContextApp } from "../utils/Context";
function Mobile() {
  const { Mobile, setMobile, handleQuery } = useContext(ContextApp);
  return (
    <div className="absolute left-0 top-0 w-full z-50  bg-black/40 flex justify-between items-start">
      <div
        className={
          Mobile
            ? "h-screen bg-red-500/80 w-[300px]  flex items-center justify-between p-2 text-white flex-col translate-x-0"
            : "hidden"
        }

        // style={{
        //   backgroundImage: "url('/campus.jpg')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
         
        //   opacity: 0.9, // Increase the opacity of the text (0.9 is an example)
        // }}
      >
        <div className="flex items-start justify-between w-full">
          <span
            className="border border-gray-600 bg-gray-600  rounded w-full py-2 text-xs flex gap-1 items-center justify-center cursor-pointer "
            onClick={() => window.location.reload()}
          >
            <AiOutlinePlus fontSize={18} />
            New Chat
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
        <div className="w-full border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
   
          <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-600 transition-all duration-300">
            <span className="flex gap-2 items-center justify-center text-sm font-bold">
              <img
                src="/user.jpeg"
                alt="user"
                className="w-8 h-8 object-cover rounded-sm"
              />
              Guest
            </span>
            <span className="rounded-md  px-1.5 py-0.5 text-xs font-medium uppercase text-gray-500">
              <SlOptions />
            </span>
          </span>
        </div>
      </div>
      {Mobile && (
        <span
          className="border border-gray-600 text-white m-2 rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setMobile(!Mobile)}
        >
          <MdClose />
        </span>
      )}
    </div>
  );
}

export default Mobile;
