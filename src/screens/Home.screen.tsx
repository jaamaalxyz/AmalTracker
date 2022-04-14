import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';
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
        <MoodItemRow key={item.timestamp} item={item} />
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
