export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return {
    email: payload.sub,
    name: payload.sub.split("@")[0],
    role: payload.role,
  };
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  navigate("/login");
};
