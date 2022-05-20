const readImage = (file, dataimg) => {
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      dataimg = reader.result;
      document.getElementById("userimg").style.backgroundImage = `url(${dataimg})`;
      document.getElementById("navbarpfp").style.backgroundImage = `url(${dataimg})`;
      localStorage.setItem("pfp", dataimg);
    },
    false
  );

  reader.readAsDataURL(file);
};

export default readImage;