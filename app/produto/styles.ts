import { Palette } from "@/public/Palette";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${Palette.white};
  height: 100%;
`

export const Infos = styled.View`
  padding: 14px;
  height: 100%;

  gap: 24px;
`

export const InfoHeader = styled.View`
`

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;

  color: ${Palette.black};
`
export const Description = styled.Text`
  font-size: 16px;

  color: ${Palette.gray};
`

export const Label = styled.Text`
  font-size: 16px;

  color: ${Palette.black};
`

export const ImageContainer = styled.View`
  height: 280px;

  background-color: ${Palette.orange};
`

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  border-radius: 8px;

  background-color: ${Palette.dark_orange};

  padding: 14px;
`

export const ProductName = styled.Text`
  font-size: 24px;
  font-weight: 600;

  color: ${Palette.white};
`

export const Devider = styled.View`
  height: 2px;
  background-color: ${Palette.light_gray};
`
export const OrangeDevider = styled.View`
  height: 2px;
  width: 75%;
  background-color: ${Palette.orange};
`

export const PriceSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Price = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${Palette.orange};
`