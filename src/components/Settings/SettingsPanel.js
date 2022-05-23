import SettingsInput from "./SettingsInput";
import updateProfile from "../../utility/updateProfile";
import { useState } from "react";


const SettingsPanel = () => {
  const [updated, setUpdated] = useState(null);
  return (
    <>
      <div
        className="flex flex-col gap-4 w-full justify-center items-center mt-4"
        id="settingspanel"
      >
        <SettingsInput type={"name"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
        </SettingsInput>
        <SettingsInput type={"username"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </SettingsInput>
        <SettingsInput type={"status"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </SettingsInput>
        <button
          type="submit"
          onClick={() => {
            updateProfile() ? setUpdated(true) : setUpdated(false);
          }}
          className="bg-[#60BF88] text-white text-xs p-2 sm:p-4 sm:text-2xl font-medium rounded-xl transition-[3s] hover:bg-[#3e7d58] shadow-sm shadow-black"
        >
          Update profile
        </button>
        {updated ? (
          <div className="flex flex-row gap-1 items-center justify-center bg-slate-700 p-1 rounded-lg text-[#e3e3e3]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-400 hover:text-red-500 transition-[5s] cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setUpdated(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <h1 className="font-medium">Profile has been updated</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SettingsPanel;
