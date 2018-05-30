export default (history, route) => {
  if (history.location.pathname === route) {
    return false;
  }

  return history.push(route);
};
