const getToken = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${getToken !== null ? getToken.token : ""}`,
    Accept: "application/json",
  },
};

export default config;
