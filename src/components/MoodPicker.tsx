import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MoodOptionType } from '../types';

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  return (
    <View style={styles.moodList}>
      {moodOptions.map((option) => (
        <View>
          <Pressable
            key={option.description}
            onPress={() => setSelectedMood(option)}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === option.emoji ? option.description : ' '}
          </Text>
        </View>
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
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  moodText: {
    fontSize: 24,
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default MoodPicker;
