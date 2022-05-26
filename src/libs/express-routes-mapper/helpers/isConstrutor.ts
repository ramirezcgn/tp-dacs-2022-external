const isConstructor = (func) => {
  try {
    // eslint-disable-next-line no-new, new-cap
    new func();
  } catch (err) {
    return false;
  }

  return true;
};

export default isConstructor;
