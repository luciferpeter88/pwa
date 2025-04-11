export function getLoggedInUser() {
  // get the data from local storage
  const data = localStorage.getItem("loggedInUser");
  const user = data ? JSON.parse(data) : null;
  const userID = user ? user.id : null;
  return {
    userID,
    user,
  };
}
