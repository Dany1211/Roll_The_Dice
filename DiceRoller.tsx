import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DiceRoller = () => {

  const [diceFace, setDiceFace] = useState(require('./assets/dice_faces/one.png'));

  const rollDice = () => {
    
    const faces = [
      require('./assets/dice_faces/one.png'),
      require('./assets/dice_faces/two.png'),
      require('./assets/dice_faces/three.png'),
      require('./assets/dice_faces/four.png'),
      require('./assets/dice_faces/five.png'),
      require('./assets/dice_faces/six.png'),
    ];


    const randomFace = faces[Math.floor(Math.random() * faces.length)];
    setDiceFace(randomFace); 
  };

  return (
    <View style={styles.container}>
   
      <Image source={diceFace} style={styles.diceImage} />
      
     
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll the Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  diceImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DiceRoller;
