import Navbar from "../components/Navbar";
import ChangeImage from "../components/Settings/ChangeImage";
import SettingsPanel from "../components/Settings/SettingsPanel";

const Settings = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 h-screen w-full flex flex-col items-center font-[Inter] pt-8">
        <h1 className="text-white font-bold text-4xl mb-4">Settings</h1>
        <ChangeImage />
        <SettingsPanel/>
      </div>
    </>
  );
};

export default Settings;
