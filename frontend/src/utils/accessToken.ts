const getToken = () => {
  return localStorage.getItem("@token");
};

const setToken = (token: string) => {
  localStorage.setItem("@token", token);
};

const accessToken = {
  getToken,
  setToken,
};

export default accessToken;
