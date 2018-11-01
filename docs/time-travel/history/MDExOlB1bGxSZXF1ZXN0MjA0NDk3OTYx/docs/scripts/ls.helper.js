let debug = false;

const setDebug = function(val) {
  debug = val;
  console.log("LS DEBUG: ", val);
};

const setItem = function(key, item) {
  if (window.localStorage) {
    localStorage.setItem(key, item);
    if (debug) {
      console.log("ls.setItem", item);
    }
  }
};

const getItem = function(key) {
  if (window.localStorage) {
    const item = localStorage.getItem(key);
    if (debug) {
      console.log("ls.getItem", item);
    }
    return item;
  }
  return undefined;
};

const clear = function(key) {
  if (window.localStorage) {
    localStorage.clear(key);
    if (debug) {
      console.log("ls.getItem", item);
    }
  }
};

const removeItem = function(key) {
  if (window.localStorage) {
    localStorage.removeItem(key);
    if (debug) {
      console.log("ls.removeItem", key);
    }
  }
};

window.ls = {
  setItem,
  getItem,
  clear,
  removeItem,
  setDebug
};
