import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        width:"100%",

    },
    upStyle: {
        flex: 1, // Takes 50% of the screen
        justifyContent: "center",
        backgroundColor:'#FB9400',
        alignItems: "center",
        paddingHorizontal: 10,
      },
      downStyle: {
        flex: 1, // Takes 50% of the screen
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      },
      textTituloStyle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color:"#FFFFFF"
      },
    imageStyle:{
        width:"80%",
        height:"80%"
    },
    textDescriptionStyle:{
        textAlign:"justify",
        fontSize:21,
        fontWeight:"900",
        marginVertical:"10%",
    },
    textMainStyle:{
        fontWeight:"500"
    }
   
})