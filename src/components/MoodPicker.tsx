import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Mood {
  emoji: string;
  description: string;
}

const moodOptions: Mood[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

const MoodPicker = () => {
  return (
    <View style={styles.moodList}>
      {moodOptions.map((option) => (
        <Text key={option.description} style={styles.moodText}>
          {option.emoji}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  moodText: {
    fontSize: 24,
  },
});

export default MoodPicker;
