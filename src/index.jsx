import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TelaInicio from "../src/pages/telaInicial";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

root.render(
  <StrictMode>
    <TelaInicio />
  </StrictMode>
);
