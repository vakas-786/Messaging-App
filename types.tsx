export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUrl: String;
}

export type Message = {
  id: String;
  content: string;
  createdAt: number;
}
export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
}
