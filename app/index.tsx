import React from "react";
import { Link, Slot } from "expo-router"
import Container from "./style";
export default function App() {

  return (
    <>
    <Container>
      <Link href={"/cadastro"}>Link</Link>
    </Container>
    </>
  );
}
