import React from "react";
import { Link } from "expo-router"
import Container from "./style";
export default function RootLayout() {

  return (
    <>
      <Container>
        <Link href={"/"}>App</Link>
      </Container>
    </>
  );
}
