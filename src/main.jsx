import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, createSystem } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import { system } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
