import React from "react";
import { Link, Slot } from "expo-router"
import Container from "./style";
export default function App() {

  return (
    <>
    <Container>
      <Link href={"/home"}>Link</Link>

      <Link href={'/perfil'}>Perfil</Link>

    </Container>
    </>
  );
}
