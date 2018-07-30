const setValue = function(prop, value) {
  document.documentElement.style.setProperty(prop, value);
};

const setTheme = function(options) {
  for (let option of Object.keys(options)) {
    const property = option;
    const value = options[option];

    setValue(property, value);
    localStorage.setItem(property, value);
  }
};

document.querySelector(".theme").onclick = function(e) {
  const rootElement = document.documentElement.classList;

  if (rootElement.contains("theme-dark")) {
    setTheme({
      "--app-background": "#FDFDFD",
      "--app-foreground": "#222",
      "--app-title-separator": "1px solid rgba(0, 0, 0, 0.2)"
    });
    rootElement.remove("theme-dark");
    rootElement.add("theme-light");
  } else if (rootElement.contains("theme-light")) {
    setTheme({
      "--app-background": "#121212",
      "--app-foreground": "#BBB",
      "--app-title-separator": "1px solid rgba(255, 255, 255, 0.2)"
    });
    rootElement.remove("theme-light");
    rootElement.add("theme-dark");
  }
};
