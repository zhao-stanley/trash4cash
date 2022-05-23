//just a simple way to "sign out" when there's no actual login validation

const clearData = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("username");
  localStorage.removeItem("status");
  localStorage.removeItem("pfp");
  localStorage.removeItem("balance");
};

export default clearData;
