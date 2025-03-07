import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#fff',
    },
    
    profileHeader: {
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    profileName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    profileEmail: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5,
    },
    profileInfo: {
      fontSize: 14,
      color: '#666',
      marginBottom: 3,
    },
    profileBio: {
      fontSize: 14,
      color: '#666',
      marginTop: 10,
      textAlign: 'center',
    },
    profileContent: {
      padding: 20,
    },
    profileOption: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    profileOptionText: {
      fontSize: 18,
      marginLeft: 10,
    },
    optionIcon: {
      width: 24,
    },
    petsSection: {
      padding: 20,
    },
    petsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    petCard: {
      marginRight: 10,
      alignItems: 'center',
    },
    petImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 5,
    },
    petNome: {
      fontSize: 14,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '90%',
    },
    closeButton: {
      backgroundColor: '#2196F3',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 15,
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles;