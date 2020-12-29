import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import  ChatroomData from '../data/Chats'
import  ChatMessage  from '../components/ChatMessage/index'

const ChatRoomScreen = () => {

    const route = useRoute();
    return (
        <FlatList data={ChatroomData.messages} renderItem={({ item }) => <ChatMessage message={item}/>}/>
    )
}

export default ChatRoomScreen;
