import React, { useEffect, useState } from "react";

const [dark, setDark] = useState(
  () => localStorage.getItem("theme") === "dark"
);
useEffect(() => {
  document.body.classList.toggle("bg-dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);

// JSX switch
<div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    checked={dark}
    onChange={() => setDark(!dark)}
    id="themeSwitch"
  />
  <label className="form-check-label" htmlFor="themeSwitch">
    {dark ? "Dark" : "Light"} Mode
  </label>
</div>;
