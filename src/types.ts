export interface MoodOptionType {
  emoji: string;
  description: string;
}

export interface MoodOptionTypeWithTimestamp {
  mood: MoodOptionType;
  timestamp: number;
}
