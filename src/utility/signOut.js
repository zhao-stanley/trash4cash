//just a simple way to "sign out" when there's no actual login validation

const signOut = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("username");
  localStorage.removeItem("status");
  localStorage.removeItem("pfp");
};

export default signOut;
