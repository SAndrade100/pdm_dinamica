import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Modal, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MainButton from '@/components/buttons/mainButton';
import FormInput from '@/components/Form';
import styles from './styles';

export default function Perfil() {
  const router = useRouter();

  const handleEditarPerfil = () => {
    console.log('clicado');
  };


  const handleLogout = async () => {
    console.log('saindo...');
  };

  const escolherFoto = async () => {
    console.log('escolher foto');
    
};

const handleBack = () => {
  try {
    router.back();
  } catch (error) {
    router.push('/'); 
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack} style={{ padding: 8 }}>
          <Ionicons name="arrow-back" size={24} color="#FF6347" />
        </TouchableOpacity>
        </View>
        <View style={styles.profileHeader}>
          <Text style={styles.profileName}>{'Perfil'}</Text>
          <TouchableOpacity onPress={handleEditarPerfil}>  
            <Ionicons name="person-outline" size={50} color="#FF6347"/>
          </TouchableOpacity>
        </View>
      
        <View style={styles.profileContent}>

          <TouchableOpacity style={styles.profileOption}>
            <Ionicons name="person-outline" size={24} color="#FF6347" style={styles.optionIcon} />
            <Text style={styles.profileOptionText}>Nome</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileOption}>
            <Ionicons name="mail-outline" size={24} color="#FF6347" style={styles.optionIcon} />
            <Text style={styles.profileOptionText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileOption} onPress={handleLogout}>
                <Ionicons name="finger-print-outline" size={24} color="#FF6347" style={styles.optionIcon} />
                <Text style={styles.profileOptionText}>Senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileOption} onPress={escolherFoto}>
                <Ionicons name="image-outline" size={24} color="#FF6347" style={styles.optionIcon} />
                <Text style={styles.profileOptionText}>Upload da imagem</Text>
          </TouchableOpacity>
          {/* <FormInput name='Fabio' placeholder='name' control={}  /> */}
            <MainButton titulo='Editar' type='filled' onPress={handleEditarPerfil} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

