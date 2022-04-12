import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomTabsNavigator from './screens/BottomTabs.navigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BottomTabsNavigator />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
});

export default App;
