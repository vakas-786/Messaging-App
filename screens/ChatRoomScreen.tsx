import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import  ChatroomData from '../data/Chats'
import  ChatMessage  from '../components/ChatMessage/index'
import InputBox from '../components/InputBox'

const ChatRoomScreen = () => {

    const route = useRoute();
    return (
        <>
            <FlatList data={ChatroomData.messages} inverted renderItem={({ item }) => <ChatMessage message={item}/>}/>
            <InputBox />
        </>

    )
}

export default ChatRoomScreen;
