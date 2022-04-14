import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppContext } from '../App.provider';
import MoodPicker from '../components/MoodPicker';

const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <MoodPicker onSelect={appContext.handleSelectMood} />
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
