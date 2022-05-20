import placeholder from "../../img/placeholder.jpg";
import readImage from "../../utility/readImage";

const ChangeImage = () => {
  let dataimg = "";
  let userimg = localStorage.getItem("pfp")
    ? localStorage.getItem("pfp")
    : dataimg;
  return (
    <>
      <label>
        <div
          className="w-28 h-28 rounded-full hover:opacity-50 cursor-pointer transition-[3s] bg-cover bg-center"
          style={{ backgroundImage: `url(${userimg ? userimg : placeholder})` }}
          id="userimg"
        ></div>
        <h2 className="text-gray-400 text-xs mt-1 cursor-pointer text-center mx-auto">
          Upload an image
        </h2>
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          id="upload"
          onChange={(e) => {
            readImage(e.target.files[0], dataimg);
          }}
        />
      </label>
    </>
  );
};

export default ChangeImage;
