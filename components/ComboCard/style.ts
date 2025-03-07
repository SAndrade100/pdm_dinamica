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
  align-items: flex-end;

  width: 380px;
  height: 178px;

  background-color: ${Palette.white};

  border-radius: 8px;

  overflow: hidden;
`;

export const Rectangle = styled.View`
  position: absolute;
  
  border-radius: 8px;
  
  height: 100%;
  width: 132px;

  background-color: ${Palette.orage};
`;

export const Infos = styled.View`
  position: absolute;
  left: 0;

  align-items: start;
  justify-content: center;

  height: 100%;
  width: 248;

  padding: 14px;
`;

export const Label = styled.Text`
  font-family: "'Inter', sans-serif";
  font-weight: bold;
  font-size: 10px;
  color: ${Palette.white};

  padding: 8px;
  border-radius: 4px;

  width: fit-content;

  background-color: ${Palette.orage};
`

export const Title = styled.Text`
  font-family: "'Inter', sans-serif";
  font-weight: bold;
  font-size: 34px;
  color: ${Palette.black};
`

export const Details = styled.Text`
  font-family: "'Inter', sans-serif";
  font-size: 10px;
  color: ${Palette.gray};
`

export const Price = styled.Text`
  font-family: "'Inter', sans-serif";
  font-weight: bold;
  font-size: 32px;
  color: ${Palette.orage};
`