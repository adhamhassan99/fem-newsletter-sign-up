import "./App.css";
import { useState } from "react";

import { ReactComponent as CardImg } from "../frontendMentor/assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as Check } from "../frontendMentor/assets/images/icon-list.svg";
import { ReactComponent as SuccessIcon } from "../frontendMentor/assets/images/icon-success.svg";

import illustr1 from "../frontendMentor/assets/images/icon-success.svg";
import illustrMob from "../frontendMentor/assets/images/illustration-sign-up-mobile.svg";
function App() {
  const [email, setEmail] = useState("");
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const mailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const handleSubmit = () => {
    setError(!mailRegex.test(email));
    setSuccessSubmit(mailRegex.test(email));
  };

  const handleReset = () => {
    setEmail("");
    setSuccessSubmit(false);
  };
  return (
    <div className=" bg-CharcoalGrey h-screen items-center justify-center flex">
      {successSubmit ? (
        <div className="mobile:hidden space-y-5 w-[450px] h-[450px] bg-White rounded-3xl flex flex-col px-14 py-14">
          <div className="">
            <SuccessIcon />
          </div>
          <div className="text-5xl font-bold text-DarkSlateGrey">
            Thanks for Subscribing!
          </div>

          <div className="flex flex-col">
            <span className="text-DarkSlateGrey">
              A confirmation email has been sent to
            </span>
            <span className="text-DarkSlateGrey">
              <span className="text-DarkSlateGrey font-bold">{email}</span>.{" "}
              plese open it and click
            </span>
            <span className="text-DarkSlateGrey">
              the button inside to confirm subscription.
            </span>
          </div>
          <div
            onClick={handleReset}
            className="hover:bg-gradient-to-r to-Tomato via-10%   from-Pink hover:cursor-pointer flex items-center justify-center bg-DarkSlateGrey text-White py-4 rounded-xl font-semibold"
          >
            Dismiss message
          </div>
        </div>
      ) : (
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

              <div className="flex-col mt-10 space-y-1">
                <div className="flex justify-between max-w-xs text-[14px]">
                  <span className="font-medium ">Email address</span>
                  <span className="text-Tomato font-semibold">
                    {error ? "Valid email required" : null}
                  </span>
                </div>
                <div className="group max-w-xs">
                  <div
                    className={`${
                      error && "bg-Tomato bg-opacity-20 border-Tomato "
                    } relative rounded-md border py-3 px-5 group-focus-within:border-DarkSlateGrey border-Grey`}
                  >
                    <input
                      onChange={(event) => {
                        setEmail(event.target.value);

                        setError(false);
                      }}
                      placeholder="email@domain.xyz"
                      type="email"
                      className={`bg-transparent peer outline-none text-[16px] ${
                        error ? "text-Tomato" : "text-Grey"
                      } focus:text-DarkSlateGrey`}
                    />
                    {/* <div className="peer-invalid:bg-red-500 absolute w-[99%] h-full left-0 top-0">
                    a
                  </div> */}
                  </div>
                </div>
              </div>
              <div
                onClick={handleSubmit}
                className="mt-5 hover:cursor-pointer hover:bg-gradient-to-r to-Tomato via-10%   from-Pink bg-DarkSlateGrey max-w-xs py-3 rounded-md flex justify-center items-center"
              >
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
      )}
      {successSubmit ? (
        <div className="mobileEnd:hidden w-full h-full px-8 py-14 bg-White flex">
          {/* <div className="flex flex-col mt-36 bg-yellow-200"> */}
          <div className="flex flex-col flex-1 mt-36">
            <img className="w-fit h-fit" src={illustr1} alt="" />
            <div className="text-6xl font-bold text-DarkSlateGrey mt-14">
              Thanks for subscribing!
            </div>
            <div className="text-DarkSlateGrey mt-10">
              <span>A confirmation email has been sent to</span>
              <span>
                <span className="font-bold"> {email}</span>. Please open it and
              </span>{" "}
              <span>click the button inside to confirm your subscription</span>
            </div>
            <div
              onClick={handleReset}
              className="mt-auto hover:bg-gradient-to-r to-Tomato via-10%   from-Pink hover:cursor-pointer flex items-center justify-center bg-DarkSlateGrey text-White py-4 rounded-xl font-semibold"
            >
              Dismiss message
            </div>
          </div>
        </div>
      ) : (
        // </div>
        <div className="mobileEnd:hidden flex flex-col h-full bg-White">
          <img className="w-screen -translate-y-6" src={illustrMob} />
          <div className="px-7 mt-2 font-medium h-full flex flex-col pb-7">
            <div className="flex-1">
              <div className="text-5xl font-bold text-DarkSlateGrey">
                Stay updated!
              </div>
              <div className="text-[16px] max-w-sm mt-7 text-DarkSlateGrey ">
                Join 60,000+ product managers receiving monthly updates on:
              </div>
              <ul className="space-y-3 mt-5 text-DarkSlateGrey text-[18px] ">
                <li className="flex gap-3">
                  <Check />
                  <span className="max-w-xs">
                    Product discovery and building what matters
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check />
                  <span className="max-w-xs">
                    Measuring to ensure updates are a success
                  </span>
                </li>{" "}
                <li className="flex gap-3">
                  <Check />
                  <span className="max-w-xs">And much more!</span>
                </li>
              </ul>
            </div>
            {/* <div className=""> */}
            <div className="flex-col mt-8 space-y-1 ">
              <div className="flex justify-between text-[14px]">
                <span className="font-medium ">Email address</span>
                <span className="text-Tomato font-semibold">
                  {error ? "Valid email required" : null}
                </span>
              </div>
              <div className="group">
                <div
                  className={`${
                    error && "bg-Tomato bg-opacity-20 border-Tomato "
                  } relative rounded-md border py-4 px-5 group-focus-within:border-DarkSlateGrey border-Grey`}
                >
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);

                      setError(false);
                    }}
                    placeholder="email@domain.xyz"
                    type="email"
                    className={`bg-transparent peer outline-none text-[16px] ${
                      error ? "text-Tomato" : "text-Grey"
                    } focus:text-DarkSlateGrey`}
                  />
                  {/* <div className="peer-invalid:bg-red-500 absolute w-[99%] h-full left-0 top-0">
                    a
                  </div> */}
                </div>
              </div>
            </div>
            <div
              onClick={handleSubmit}
              className="mt-5 hover:cursor-pointer hover:bg-gradient-to-r to-Tomato via-10%   from-Pink bg-DarkSlateGrey  py-4 rounded-md flex justify-center items-center"
            >
              <span className="text-White font-bold">
                Subscribe to monthly newsletter
              </span>
            </div>
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
