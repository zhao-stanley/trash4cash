const readImage = (file, dataimg) => {
  
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      dataimg = reader.result;
      if (dataimg.length > 5200000) return;
      document.getElementById(
        "userimg"
      ).style.backgroundImage = `url(${dataimg})`;
      document.getElementById(
        "navbarpfp"
      ).style.backgroundImage = `url(${dataimg})`;
      localStorage.setItem("pfp", dataimg);
    },
    false
  );

  reader.readAsDataURL(file);
};

export default readImage;
