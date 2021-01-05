import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatList/index';
import ContactListItem from '../components/ContactListItem';
import NewMessageButton from '../components/NewMessageButton';
import { View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms'

export default function Contacts() {
  return (
    <>
    <View style={styles.container}>
      <FlatList 
      style ={{width: '100%'}}
      data={ChatRooms}
      renderItem={({ item }) => <ContactListItem user={item} />}
      keyExtractor={(item) => item.id}
      />
      <NewMessageButton/>
    </View>
    
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
