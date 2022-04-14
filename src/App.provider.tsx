import React, { createContext, useCallback, useContext, useState } from 'react';
import { MoodOptionType, MoodOptionTypeWithTimestamp } from './types';

interface AppContextType {
  moodList: MoodOptionTypeWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
}

const defaultValue = {
  moodList: [],
  handleSelectMood: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC<any> = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionTypeWithTimestamp[]>([]);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList((current: any) => [
      ...current,
      { mood, timestamp: Date.now() },
    ]);
  }, []);
  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
