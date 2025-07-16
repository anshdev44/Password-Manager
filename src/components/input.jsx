import React from "react";
import { FaEye } from "react-icons/fa";
import '../App.css'
import { useState } from "react";
import myGif from '../assets/tick.gif'

export default function Inputs(props) {

  const [visiblity, setVisiblity] = useState(true);

  function handleclick() {
    if(props.Edit===true){
      props.setEdit(false);
        const newEntry = {
        url: props.url,
        Username: props.Username,
        password: props.password
      };
      props.setpass(prev => [...prev, newEntry]);
      localStorage.setItem("passwords", JSON.stringify([...props.pass, newEntry]));
    }
    else{
      const newEntry = {
        url: props.url,
        Username: props.Username,
        password: props.password
      };
      props.setpass(prev => [...prev, newEntry]);
      localStorage.setItem("passwords", JSON.stringify([...props.pass, newEntry]));
    }
  }

  function removeedit() {
    props.setEdit(false);
    props.seturl('')
    props.setPassword('')
    props.setUsername('')
  }

  function clearup() {
    props.seturl('')
    props.setPassword('')
    props.setUsername('')
  }

  function changevisiblity() {
    setVisiblity(prev => !prev);
  }

  return (
    <div className="my-[0px] flex flex-col items-center mt-8 sm:mt-12 text-center text-gray-800 bg-gradient-to-br from-green-50 via-white to-green-100 min-h-[0vh] px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black drop-shadow-md">
        &lt;Pass<span className="text-green-500">OP</span>/&gt;
      </h1>
      <p className="text-sm sm:text-base lg:text-lg mt-2 mb-8 sm:mb-10 text-gray-500 max-w-md">
        Your own <span className="text-green-700 font-semibold">Password Manager</span>
      </p>

      {props.Edit && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 px-4 sm:px-6 py-3 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-xl shadow-md w-full max-w-5xl">
          <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
            <span className="text-lg sm:text-xl font-semibold">✏️  </span>
            <span className="text-xs sm:text-sm text-yellow-700">(You're now modifying an existing entry)</span>
          </div>

          <span onClick={() => { removeedit() }} className="cursor-pointer bg-yellow-300 text-yellow-900 text-xs font-bold px-3 sm:px-4 py-1 rounded-full shadow-inner self-start sm:self-auto">
            ACTIVE
          </span>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="🌐 Enter website URL"
            className="url border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 px-4 sm:px-6 py-3 rounded-full w-full transition-all shadow-sm text-sm sm:text-base"
            value={props.url}
            onChange={(e) => props.seturl(e.target.value)}
          />
          <input
            type="text"
            placeholder="👤 Enter Username"
            className="username border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 px-4 sm:px-6 py-3 rounded-full w-full transition-all shadow-sm text-sm sm:text-base"
            value={props.Username}
            onChange={(e) => props.setUsername(e.target.value)}
          />
          <div className="relative w-full md:col-span-2 lg:col-span-1">
            <input
              type={visiblity ? "password" : "text"}
              placeholder="🔒 Enter Password"
              className="password border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 px-4 sm:px-6 py-3 rounded-full w-full pr-12 transition-all shadow-sm text-sm sm:text-base"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
            />
            <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer text-base sm:text-lg">
              <FaEye onClick={changevisiblity} />
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => { handleclick(), clearup() }}
            className="cursor-pointer flex gap-2 items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto max-w-xs"
          >
            <img src={myGif} alt="" className="w-[24px] sm:w-[30px]" />
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
}