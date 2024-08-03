
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

// navegación para la pantalla de inicio de sesión
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// 
interface Props {
  navigation: LoginScreenNavigationProp;
}

const App: React.FC<Props> = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // submit
    console.log('Usuario:', usuario);
    console.log('Password:', password);
  };

  const handleAdmin = () => {
    // Navegar 
    navigation.navigate('Admin');
  };

  return (
    <View style={styles.app}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>RUTNA</Text>
        <View style={styles.contactInfo}>
          {/* Info de contacto */}
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput 
            placeholder="Nombre de Usuario" 
            style={styles.input} 
            value={usuario}
            onChangeText={setUsuario}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput 
            placeholder="*******" 
            style={styles.input} 
            secureTextEntry 
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={handleAdmin}>
            <Text style={styles.buttonText}>Ir a Administrador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dff1f0',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    maxWidth: 400,
    width: '100%',
  },
  heading: {
    marginTop: 0,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 24,
  },
  form: {
    flexDirection: 'column',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  adminButton: {
    backgroundColor: '#007BFF', // botón admi
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
