import { Palette } from "@/public/Palette";
import styled from "styled-components/native";

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  top: 10px;
`

export const Image = styled.Image`
  position: absolute;
  z-index: 9999;
  
  object-fit: contain;
  transform: scale(0.35);
`

export const Card = styled.View`
  position: relative;

  align-items: center;
  justify-content: flex-end;

  width: 158px;
  height: 178px;

  background-color: ${Palette.light_beige};

  border-radius: 8px;

  overflow: hidden;

`;

export const Infos = styled.View`
  gap: 2px;

  height: 89px;
  width: 100%;

  padding: 14px;

  background-color: ${Palette.white};
`

export const Label = styled.Text`
  font-family: "'Inter', sans-serif";
  font-weight: bold;
  font-size: 12px;
  color: ${Palette.black};
`

export const Title = styled.Text`
  font-family: "'Inter', sans-serif";
  font-weight: bold;
  font-size: 18px;
  color: ${Palette.black};
`

export const Price = styled.Text`
  font-family: "'Inter', sans-serif";
  font-weight: bold;
  font-size: 16px;
  color: ${Palette.orage};
`