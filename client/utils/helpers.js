export const isAuth = () => {
  console.log(sessionStorage.getItem("isLoggedIn"));
  return sessionStorage.getItem("isLoggedIn") === "true" ? true : false;
};

//sign out
export const handleLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.href = "/login";
  window.location.reload();
};
