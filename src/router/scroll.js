const scrollBehavior = to => {
  return new Promise(resolve => setTimeout(() => resolve(scrollTo(to)), 300));
};

const scrollTo = to =>
  to.hash
    ? { el: to.hash, behavior: "smooth", top: 110 }
    : { top: 0, behavior: "smooth" };

export default scrollBehavior;
