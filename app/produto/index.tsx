import React from "react";

import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Container from "../style";
import {
  Button,
  Description,
  Devider,
  Header,
  ImageContainer,
  InfoHeader,
  Infos,
  Label,
  OrangeDevider,
  Price,
  PriceSection,
  ProductName,
  Title,
} from "./styles";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Palette } from "@/public/Palette";
import SelectAmount from "@/components/SelectAmount";
import MainButton from "@/components/buttons/mainButton";


export default function ProductPage() {
  return (
    <ScrollView>
      <ImageContainer>
        <Header>
          <Button>
            <Ionicons
              name="arrow-back"
              size={24}
              color={Palette.white}
            />
          </Button>
          <ProductName>Produto</ProductName>
          <Button>
            <Ionicons
              name="heart-outline"
              size={24}
              color={Palette.white}
            />
          </Button>
        </Header>
      </ImageContainer>

      <Infos>
        <InfoHeader>
          <Label>Tradicional</Label>
          <Title>Golden Burger</Title>
        </InfoHeader>
        <Devider>
          <OrangeDevider/>
        </Devider>
        <Description>
          2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal.
        </Description>
        <Label>Quantidade</Label>
        <PriceSection>
          <SelectAmount/>
          <Price>R$ 25.50</Price>
        </PriceSection>
        <MainButton
          titulo="Adicionar ao carrinho"
          onPress={()=>{}}
          type="filled"
        />
      </Infos>
    </ScrollView>
  )
}