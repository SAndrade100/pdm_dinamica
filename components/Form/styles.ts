import { TextInput, View } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

export const InputLogin = styled(TextInput).attrs<{
    isFocused?: boolean;
    hasError?: boolean;
    isValid?: boolean;
}>((props) => ({

})) <{
    isFocused?: boolean;
    hasError?: boolean;
    isValid?: boolean;
}>`
  width: 100%;
  height: 40px;
  padding: 10px;
  padding-left: 40px; 
  border-bottom-width: 1px;
  color: ${(props) => (props.isFocused ? "white" : "gray")};
  font-size: ${props => props.theme.fontSizes.h3}
`;