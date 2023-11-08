const getToken = () => {
  return localStorage.getItem("@token");
};

const setToken = (token: string) => {
  localStorage.setItem("@token", token);
};

const removeToken = () => {
  localStorage.removeItem("@token");
};

const accessToken = {
  getToken,
  setToken,
  removeToken,
};

export default accessToken;
