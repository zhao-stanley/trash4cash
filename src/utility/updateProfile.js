const updateProfile = () => {
  let name = document.getElementById("name");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let status = document.getElementById("status");

  if (!name.value || !username.value || !status.value || !email.value)
    return false;

  localStorage.setItem("name", name.value);
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("status", status.value);
  return true;
};

export default updateProfile;
