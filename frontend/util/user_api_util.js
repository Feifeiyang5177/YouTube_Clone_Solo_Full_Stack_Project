

export const apiFetchAllUsers = () => {
  return $.ajax({
    url: "/api/users",
  });
};
