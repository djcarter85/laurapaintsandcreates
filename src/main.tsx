import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource-variable/figtree";
import '@fontsource/caveat-brush';
import '@fontsource/quattrocento-sans';

// Supports weights 400-700
import '@fontsource-variable/caveat';

// Supports weights 200-900
import '@fontsource-variable/nunito';

import '@fontsource/quando';
import '@fontsource/alegreya-sans';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
