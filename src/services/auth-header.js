
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.user_info.token) {
    return { Authorization: `Bearer ${user.user_info.token}` };
  } else return {};
}
