import Navbar from "../components/Navbar";
import placeholder from "../img/placeholder.jpg";
import { Link } from "react-router-dom";
import ProfilePanel from "../components/Profile/ProfilePanel";
import Footer from "../components/Footer/Footer";

const Profile = () => {
  let userimg = localStorage.getItem("pfp")
    ? localStorage.getItem("pfp")
    : placeholder;
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 h-[70vh] w-full flex flex-col items-center font-[Inter] pt-8">
        <h1 className="text-white font-bold text-4xl mb-4 lg:text-5xl">Profile</h1>
        <Link to="/settings" className="text-gray-400 text-xs text-center">
          <div
            className="w-28 h-28 lg:w-48 lg:h-48 rounded-full cursor-pointer transition-[3s] bg-cover bg-center"
            style={{
              backgroundImage: `url(${userimg ? userimg : placeholder})`,
            }}
            id="userimg"
          ></div>
          <p className="mt-1 lg:text-xl">Edit your profile</p>
        </Link>
        <ProfilePanel />
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
