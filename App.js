import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Button
          onPress={() => {
            Alert.alert("You tapped the button!");
          }}
          title= "Push me!"
          color="red"
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
