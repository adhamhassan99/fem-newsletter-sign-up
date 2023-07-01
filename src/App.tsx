import "./App.css";
import React from "react";

import { ReactComponent as CardImg } from "../frontendMentor/assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as Check } from "../frontendMentor/assets/images/icon-list.svg";
function App() {
  return (
    <div className=" bg-CharcoalGrey h-screen items-center justify-center flex">
      <div className="mobile:hidden flex bg-White w-[900px] h-[630px] rounded-3xl">
        <div className="flex-1 ps-12 pt-28">
          <div className="flex-col h-full">
            <div className="text-5xl font-bold text-DarkSlateGrey">
              Stay Updated!
            </div>
            <div className="text-[16px] max-w-sm mt-7 text-DarkSlateGrey">
              Join 60,000+ product managers receiving monthly updates on:
            </div>

            <ul className="space-y-3 mt-5 text-DarkSlateGrey text-[16px]">
              <li className="flex gap-3 items-center">
                <Check />
                <span>Product discovery and building what matters</span>
              </li>
              <li className="flex gap-3 items-center">
                <Check />
                <span>Measuring to ensure updates are a success</span>
              </li>{" "}
              <li className="flex gap-3 items-center">
                <Check />
                <span>And much more!</span>
              </li>
            </ul>

            <div className="flex-col mt-10 space-y-2">
              <span className="font-medium text-[16px]">Email address</span>
              <div className="group max-w-xs">
                <div className="relative rounded-md border py-3 px-5 group-focus-within:border-DarkSlateGrey border-Grey">
                  <input
                    type="email"
                    className="peer outline-none text-[16px] text-Grey focus:text-DarkSlateGrey"
                  />
                  {/* <div className="peer-invalid:bg-red-500 absolute w-[99%] h-full left-0 top-0">
                    a
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-5 hover:cursor-pointer hover:bg-gradient-to-r to-Tomato via-10%   from-Pink bg-DarkSlateGrey max-w-xs py-4 rounded-md flex justify-center items-center">
              <span className="text-White font-bold">
                Subscribe to monthly newsletter
              </span>
            </div>
          </div>
        </div>
        <div className="mr-5 items-center justify-center flex">
          <CardImg />
        </div>
      </div>
      <div className="mobileEnd:hidden">mobile</div>
    </div>
  );
}

export default App;
