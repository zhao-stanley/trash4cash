import Navbar from "../components/Navbar";

const Profile = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center font-[Inter]">
                <h1 className="text-white">Profile</h1>
            </div>
        </>
    );
}

export default Profile;