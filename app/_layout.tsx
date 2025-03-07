import React = require("react");
import { Slot } from "expo-router"
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/themes/theme";
export default function Home() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Slot/>
      </ThemeProvider>
    </>
  );
}
