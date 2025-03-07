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

export { Container, ContainerLogin }