import React from "react";
import { Link, router } from "expo-router"
import Container, { styles } from "./style";
import { Image, StyleSheet, Text, View } from "react-native";
import MainButton from "@/components/buttons/mainButton";


export default function RootLayout() {

  function loginRedirect() {
    router.replace("/login")
  }

  function cardapioRedirect() {
    router.replace("/cardapio")
  }

  return (
    <>
      <View style={styles.conteiner}>

        <View style={styles.upStyle}>
          <View>
            <Text style={styles.textTituloStyle}>IFPB - DELIVERY</Text>
            </View>
            <Image style={styles.imageStyle} source={require("../../public/hg01.png")} resizeMode="contain"/>
        </View>
        <View style={styles.downStyle}>

            <Text style={styles.textDescriptionStyle}>O Hamburguer mais delicioso da sua Cidade</Text>

            <Text style={styles.textMainStyle}>Logou   ->   Pediu   ->   Chegou</Text>

            <MainButton titulo="Fazer Login" type="filled" onPress={loginRedirect}/>
            <MainButton titulo="Ver cardápio" type="empty" onPress={cardapioRedirect}/>
        </View>
      </View>

    </>
  );
}
