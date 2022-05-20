import { Link } from "react-router-dom";

const ProfilePanel = () => {
  let name = localStorage.getItem("name");
  let username = localStorage.getItem("username");
  let status = localStorage.getItem("status");
  return (
    <>
      <div className="w-[75vw] text-center mx-auto">
        <h1 className="text-white font-semibold text-2xl mt-4">
          {name ? name : "John Doe"}
        </h1>
        <h2 className="text-gray-400 text-md">
          {username ? username : "Trash4Cash User"}
        </h2>
        <p className="text-gray-300 text-sm mt-1 italic mx-auto max-w-[12rem]">
          {status ? (
            `"${status}"`
          ) : (
            <Link to="/settings">Currently using Trash4Cash!</Link>
          )}
        </p>
      </div>
    </>
  );
};

export default ProfilePanel;
