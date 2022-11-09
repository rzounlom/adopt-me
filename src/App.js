import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { StrictMode, useState } from "react";

import Details from "./Details";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import ThemContext from "./ThemeContext";
import { render } from "react-dom";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
