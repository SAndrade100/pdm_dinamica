import React from "react";

import { Amount, Container, PlusBtn, SubtractBtn } from "./style";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Palette } from "@/public/Palette";

export default function SelectAmount () {
  return (
    <Container>
      <SubtractBtn>
        <Ionicons
          name="remove-outline"
          size={24}
          color={Palette.gray}
        />
      </SubtractBtn>
      <Amount>
        01
      </Amount>
      <PlusBtn>
        <Ionicons
          name="add"
          size={24}
          color={Palette.white}
        />
      </PlusBtn>
    </Container>
  )
}