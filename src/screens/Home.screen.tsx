import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodPicker from '../components/MoodPicker';
import { MoodOptionType, MoodOptionTypeWithTimestamp } from '../types';

const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionTypeWithTimestamp[]>([]);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList((current: any) => [
      ...current,
      { mood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map((item: MoodOptionTypeWithTimestamp) => (
        <Text key={item.timestamp}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
