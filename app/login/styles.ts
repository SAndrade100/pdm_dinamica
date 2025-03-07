import styled from "styled-components/native"
import {theme} from "@/themes/theme";

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.text};
    padding: 24px;
`

const ContainerLogin = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => theme.colors.text};
  justify-content: space-evenly;
  gap: 0px;
  align-items: center;
`

export const Footer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => theme.colors.text};
  justify-content: center;
  align-items: center;
    gap: 30px;
    
`

export const Title = styled.Text`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    text-align: center;
    color: black;
    font-size: 30px;
    font-weight: bold;
`

export const Subtitle = styled.Text`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    text-align: center;
    color: black;
    font-size: 15px;
`

export { Container, ContainerLogin }