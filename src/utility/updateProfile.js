const updateProfile = () => {
  let name = document.getElementById("name");
  let username = document.getElementById("username");
  let status = document.getElementById("status");

  if (!name.value || !username.value || !status.value) return false;

  localStorage.setItem("name", name.value);
  localStorage.setItem("username", username.value);
  localStorage.setItem("status", status.value);
  return true;
};

export default updateProfile;
