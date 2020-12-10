import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1);
  };

  const reset = () =>{
    setCount(0);
  };

  const decrement = () =>{
    setCount(count -1);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>Counter</Text>
      <Text style={{fontSize: 60}}>{count}</Text>
      <View style={[{width: 300, margin: 10}]}>
        <Button color="green" title="Increment" onPress={increment} />
      </View>
      <View style={[{width: 300, margin: 10}]}>
        <Button title="Reset" onPress={reset} />
      </View>
      <View style={[{width: 300, margin: 10}]}>
        <Button color="red" title="Decrement" onPress={decrement} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
