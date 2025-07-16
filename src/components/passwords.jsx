import React from "react";
import { useState } from "react";
import mycopy from '../assets/copy.svg'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Password(props) {
  const [passwordVisibility, setPasswordVisibility] = useState({});

  function remove(index) {
    const updatedPass = props.pass.filter((_, i) => i !== index);
    props.setpass(updatedPass);
    props.setold(updatedPass);
    localStorage.setItem("passwords", JSON.stringify(updatedPass));
  }

  function Edit(item, index) {
    props.setEdit(true);
    props.setEdits(item);
    props.seturl(item.url);
    props.setUsername(item.Username);
    props.setPassword(item.password);
    const updatedPass = props.pass.filter((_, i) => i !== index);
    props.setpass(updatedPass);
  }

  async function copy(item) {
    try {
      await navigator.clipboard.writeText(item);
    } catch (err) {
      console.log(err);
    }
  }

  function togglePasswordVisibility(index) {
    setPasswordVisibility(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-white/70 backdrop-blur-md shadow-xl border border-green-100 rounded-2xl p-6 sm:p-8 max-w-4xl w-full text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2">
          Your <span className="text-green-600">All Passwords</span> At Just One Place
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
          Secure, simple, and synced across all your devices.
        </p>
      </div>

      {props.pass.length > 0 && (
        <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-10 space-y-3 sm:space-y-4">
          {/* Desktop Header - Hidden on mobile and tablet */}
          <div className="hidden xl:grid grid-cols-4 bg-green-800 text-white px-6 py-3 rounded-md text-sm font-semibold">
            <span>Site</span>
            <span>Username</span>
            <span>Password</span>
            <span className="text-center">Actions</span>
          </div>

          {props.pass.map((item, index) => (
            <div key={index} className="bg-green-50 border border-green-200 rounded-lg shadow-sm">
              
              {/* Mobile and Tablet Layout */}
              <div className="block xl:hidden p-4 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="font-semibold text-gray-600 text-sm whitespace-nowrap">Site:</span>
                    <span className="text-sm break-all">{item.url}</span>
                  </div>
                  <img src={mycopy} width={20} className="cursor-pointer hover:opacity-70 transition-opacity self-start sm:self-auto" onClick={() => { copy(item.url) }} />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="font-semibold text-gray-600 text-sm whitespace-nowrap">Username:</span>
                    <span className="text-sm break-all">{item.Username}</span>
                  </div>
                  <img src={mycopy} width={20} className="cursor-pointer hover:opacity-70 transition-opacity self-start sm:self-auto" onClick={() => { copy(item.Username) }} />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="font-bold text-gray-600 text-sm whitespace-nowrap">Password:</span>
                    <span className="text-sm break-all">
                      {passwordVisibility[index] ? item.password : '•'.repeat(item.password.length)}
                    </span>
                  </div>
                  <div className="flex gap-2 self-start sm:self-auto">
                    <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => togglePasswordVisibility(index)}>
                      {passwordVisibility[index] ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                    </div>
                    <img src={mycopy} width={20} className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => { copy(item.password) }} />
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 pt-3 border-t border-green-200">
                  <button 
                    onClick={() => { Edit(item, index) }}
                    className="flex items-center gap-2 bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span className="text-base">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                  <button 
                    onClick={() => { remove(index) }}
                    className="flex items-center gap-2 bg-red-200 hover:bg-red-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span className="text-base">🗑️</span>
                    <span className="hidden sm:inline">Delete</span>
                  </button>
                </div>
              </div>

              {/* Desktop Layout - Hidden on mobile and tablet */}
              <div className="hidden xl:grid grid-cols-4 gap-4 items-center text-sm p-4">
                <div className="flex items-center gap-2">
                  <span className="truncate">{item.url}</span>
                  <img src={mycopy} width={16} className="cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0" onClick={() => { copy(item.url) }} />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="truncate">{item.Username}</span>
                  <img src={mycopy} width={16} className="cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0" onClick={() => { copy(item.Username) }} />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="truncate">
                    {passwordVisibility[index] ? item.password : '•'.repeat(item.password.length)}
                  </span>
                  <div className="cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0" onClick={() => togglePasswordVisibility(index)}>
                    {passwordVisibility[index] ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                  </div>
                </div>
                
                <div className="flex justify-center gap-3 text-lg">
                  <div className="cursor-pointer hover:scale-110 transition-transform" onClick={() => { Edit(item, index) }}>✏️</div>
                  <div className="cursor-pointer hover:scale-110 transition-transform" onClick={() => { remove(index) }}>🗑️</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}