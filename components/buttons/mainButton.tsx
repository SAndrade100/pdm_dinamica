import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


interface BotaoProps {
    titulo: string;
    onPress: () => void;
    type: 'filled' | 'empty'
  }

const MainButton = ({titulo, onPress, type}:BotaoProps) => {

  return (
    <TouchableOpacity style = { type == 'filled' ? styles.botaoFilled : styles.botaoEmpty} onPress={onPress}>
    <Text style={type == 'filled' ? styles.textoBotaoFilled : styles.textoBotaoEmpty}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  botaoFilled: {
    padding: 17,
    borderRadius: 5,
    backgroundColor: '#FB9400',
  },
  botaoEmpty: {
    padding: 17,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderColor:'#FB9400',
    borderWidth:2,
  },
  textoBotaoFilled: {
    textAlign:'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  textoBotaoEmpty: {
    textAlign:'center',
    color: '#FB9400',
    fontSize: 16,
  },
});

export default MainButton;
