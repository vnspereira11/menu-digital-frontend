import { Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}
