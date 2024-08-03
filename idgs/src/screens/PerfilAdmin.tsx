
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type PerfilAdminNavigationProp = StackNavigationProp<RootStackParamList, 'PerfilAdmin'>;

interface Props {
  navigation: PerfilAdminNavigationProp;
}

const PerfilAdmin: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>Perfil del Administrador</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>Admin</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>admin@escuela.com</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={() => {/* Lógica para cerrar sesión */}}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e6',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  profileInfo: {
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
    marginBottom: 15,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonSecondary: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#FF4D4D',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PerfilAdmin;