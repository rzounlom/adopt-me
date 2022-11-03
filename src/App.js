import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Details from "./Details";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        ;
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
      ;
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
