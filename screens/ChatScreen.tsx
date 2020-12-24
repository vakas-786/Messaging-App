import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatList/index'
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms'

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      style ={{width: '100%'}}
      data={ChatRooms}
      renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      keyExtractor={(item) => item.id}
      />
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
