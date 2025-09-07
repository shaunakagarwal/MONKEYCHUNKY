import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';
import PhonicSoundButton from './components/PhonicSoundButton';

export default function App() {
  const [word, setWord] = useState('');

  // split word into individual letters
  const letters = word.split('').filter((ch) => /^[a-zA-Z]$/.test(ch));

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a word (like cat)"
        onChangeText={setWord}
        value={word}
        autoCapitalize="none"
      />
      <View style={styles.letters}>
        {letters.map((letter, index) => (
          <PhonicSoundButton
            key={index}
            chunk={letter.toUpperCase()}
            letter={letter.toLowerCase()}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  letters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
});
