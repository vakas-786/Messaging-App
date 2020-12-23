import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatList/index'
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms'

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={ChatRooms[0]}></ChatListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
