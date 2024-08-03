import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type AdminScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Admin'>;

interface Props {
  navigation: AdminScreenNavigationProp;
}

const Admin: React.FC<Props> = ({ navigation }) => {
  const [monto, setMonto] = React.useState('');
  const [matricula, setMatricula] = React.useState('');

  const handleRecargar = () => {
    console.log('Monto:', monto);
    console.log('Matrícula:', matricula);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image source={{ uri: '' }} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{ uri: '' }} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PerfilAdmin')}>
            <Image source={{ uri: 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png' }} style={styles.profilePicture} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>Administrador</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Monto a recargar</Text>
        <TextInput 
          placeholder="Ingresa el monto" 
          style={styles.input} 
          keyboardType="numeric"
          value={monto}
          onChangeText={setMonto}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Seleccionar alumno</Text>
        <TextInput 
          placeholder="Número de Matrícula" 
          style={styles.input} 
          value={matricula}
          onChangeText={setMatricula}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRecargar}>
        <Text style={styles.buttonText}>Recargar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={() => navigation.navigate('GestionBoletos')}>
        <Text style={styles.buttonText}>Gestión de Boletos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    paddingRight: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  adminButton: {
    backgroundColor: '#28a745',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Admin;
