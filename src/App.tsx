import React from "react";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "../src/i18n"; // Import your i18n configuration
import SideBar from "./Components/SideBar";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {" "}
      {/* Provide i18n instance */}
      <div className="App">
        <SideBar />
      </div>
    </I18nextProvider>
  );
}

export default App;
