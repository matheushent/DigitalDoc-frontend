import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/styles";
import Theme from "../theme";

import HowItWorksSection from "../components/Section/HowItWorks";
import ContactSection from "../components/Section/Contact";
import TryOutSection from "../components/Section/TryOut";
import HeroSection from "../components/Section/Hero";
import AppBar from "../components/AppBar";

// i18n Imports
import LanguageProvider from "../../src/providers/LanguageProvider";
import { translationMessages } from "../../src/providers/i18n";

function App() {
  const [files, setFiles] = useState([]);
  return (
    <LanguageProvider messages={translationMessages}>
      <ThemeProvider theme={Theme}>
        <HeroSection />
        <HowItWorksSection />
        <TryOutSection files={files} setFiles={setFiles} />
        <ContactSection />
        <AppBar />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
