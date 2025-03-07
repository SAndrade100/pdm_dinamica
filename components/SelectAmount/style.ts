import { Palette } from "@/public/Palette";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  
  border-radius: 8px;

  background-color: ${Palette.white};

  overflow: hidden;
`;

export const PlusBtn = styled.TouchableOpacity`
  background-color: ${Palette.orange};
  padding: 14px;
`;

export const Amount = styled.Text`
  padding: 18px;
  font-weight: bold;
  color: ${Palette.orange};
`;

export const SubtractBtn = styled.TouchableOpacity`
  background-color: ${Palette.light_gray};
  padding: 14px;
`;