import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const soundMap = {
  'a': require('../assets/sounds/a.mp3'),
  'b': require('../assets/sounds/b.mp3'),
  'c': require('../assets/sounds/c.mp3'),
  'd': require('../assets/sounds/d.mp3'),
  'e': require('../assets/sounds/e.mp3'),
  'f': require('../assets/sounds/f.mp3'),
  'g': require('../assets/sounds/g.mp3'),
  'h': require('../assets/sounds/h.mp3'),
  'i': require('../assets/sounds/i.mp3'),
  'j': require('../assets/sounds/j.mp3'),
  'k': require('../assets/sounds/k.mp3'),
  'l': require('../assets/sounds/l.mp3'),
  'm': require('../assets/sounds/m.mp3'),
  'n': require('../assets/sounds/n.mp3'),
  'o': require('../assets/sounds/o.mp3'),
  'p': require('../assets/sounds/p.mp3'),
  'q': require('../assets/sounds/q.mp3'),
  'r': require('../assets/sounds/r.mp3'),
  's': require('../assets/sounds/s.mp3'),
  't': require('../assets/sounds/t.mp3'),
  'u': require('../assets/sounds/u.mp3'),
  'v': require('../assets/sounds/v.mp3'),
  'w': require('../assets/sounds/w.mp3'),
  'x': require('../assets/sounds/x.mp3'),
  'y': require('../assets/sounds/y.mp3'),
  'z': require('../assets/sounds/z.mp3'),
};

export default function PhonicSoundButton({ chunk, letter }) {
  const playSound = async () => {
    try {
      const asset = soundMap[letter];
      if (!asset) {
        console.warn('No sound for letter:', letter);
        return;
      }
      const { sound } = await Audio.Sound.createAsync(asset, { shouldPlay: true });
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.chunkButton} onPress={playSound}>
      <Text style={styles.displayText}>{chunk}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chunkButton: {
    backgroundColor: "orange",
    margin: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3
  },
  displayText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});
