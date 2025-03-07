import React from "react";

import { Card, Image, ImageContainer, Infos, Label, Price, Title, Rectangle, Details } from "./style";
import { Pressable } from "react-native";

export default function ComboCard (
  props: {
    name: string,
    price: string,
    details: string,
    image?: string
  }
) {
  return (
    <Pressable
      onPress={() => {/* GO TO ITEM PAGE */}}
    >
      <Card>
        <Infos>
          <Label>Promoção</Label>
          <Title>{props.name}</Title>
          <Details>{props.details}</Details>
          <Price>R$ {props.price}</Price>
        </Infos>
        <Rectangle/>
      </Card>
    </Pressable>
  )
}