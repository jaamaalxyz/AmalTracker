import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { MoodOptionTypeWithTimestamp } from '../types';

interface MoodItemRowProps {
  item: MoodOptionTypeWithTimestamp;
}

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' HH:mm:ss aaa")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: theme.fontFamilyRegular,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
    fontFamily: theme.fontFamilyRegular,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    fontFamily: theme.fontFamilyBold,
    color: theme.colorPurple,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
