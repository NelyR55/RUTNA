
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type GestionBoletosNavigationProp = StackNavigationProp<RootStackParamList, 'GestionBoletos'>;

interface Props {
  navigation: GestionBoletosNavigationProp;
}

interface Boleto {
  id: string;
  alumno: string;
  destino: string;
  fecha: string;
}

const DATA: Boleto[] = [
  { id: '1', alumno: 'Alumno A', destino: 'Destino X', fecha: 'Fecha Y' },
  { id: '2', alumno: 'Alumno B', destino: 'Destino Z', fecha: 'Fecha W' },
  // Más datos aquí...
];

const GestionBoletos: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Boleto }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.alumno}, {item.destino}, {item.fecha}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Detalles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    backgroundColor: '#ebecf3',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default GestionBoletos;
