import React from "react";

import { Card, Image, ImageContainer, Infos, Label, Price, Title } from "./style";
import { Pressable } from "react-native";

export default function BurgerCard (
  props: {
    title: string,
    price: string,
    image: string
  }
) {
  return (
    <Pressable
      onPress={() => {/* GO TO ITEM PAGE */}}
    >
      <Card>
        <ImageContainer>
          <Image
            source={require("@/public/img.png")}
          />
        </ImageContainer>
        <Infos>
          <Label>Tradicional</Label>
          <Title>{props.title}</Title>
          <Price>R$ {props.price}</Price>
        </Infos>
      </Card>
    </Pressable>
  )
}