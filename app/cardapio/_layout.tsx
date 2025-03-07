import React from "react"
import { ScrollView, Text, TextInput,View } from "react-native"
import BurgerCard from "@/components/BurgerCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Cardapio(){
    const hamburgers = [
        {
          title: "Cheeseburger",
          price: 10.99
        },
        {
          title: "Bacon",
          price: 12.99
        },
        {
          title: "Veggie Burger",
          price: 9.49
        },
        {
          title: "Classic Burger",
          price: 8.99
        },
        {
          title: "BBQ Burger",
          price: 13.49
        },
        {
            title: "Cheeseburger",
            price: 10.99
          },
          {
            title: "Bacon",
            price: 12.99
          },
          {
            title: "Veggie Burger",
            price: 9.49
          },
          {
            title: "Classic Burger",
            price: 8.99
          },
          {
            title: "BBQ Burger",
            price: 13.49
          }
      ];

    return <>
        <Text style={{ fontSize: 25, paddingTop: 30, paddingLeft: 30 }} >Seja Bem Vindo ✋</Text>
        <Text style={{ fontSize: 20, paddingLeft: 30,color: "gray"  }}>Oque deseja pra hoje?</Text>
        <View style={{ borderWidth: 1, borderColor: "black", marginHorizontal: 30, flexDirection: "row", marginVertical: 15}}>
            <Ionicons name="search" size={22} color={"black"} style={{ margin: 10}}/>
            <TextInput placeholder="Digite o nome do burger"/>
        </View>

        <ScrollView>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", gap: 40, marginHorizontal: 15 }}>
                {hamburgers.map((item) => {
                    return <BurgerCard title={item.title} price={parseFloat(item.price)}/>
                })}
            </View>
        </ScrollView>

    </>
}