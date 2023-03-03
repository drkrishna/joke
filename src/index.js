import react from "react";
import { createRoot } from "react-dom/client";
import Ajoke from "./components/jokes";
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Ajoke punchLine="this is punch line" />
    <Ajoke question="this is question 2" punchLine="this is punch line" />
    <Ajoke question="this is question 3" />
    <Ajoke question="this is question 4" punchLine="this is punch line" />
    <Ajoke question="this is question 5" punchLine="this is punch line" />
  </div>
);
