import React from 'react';
import { View, Text, Image } from 'react-native'
import { ChatRoom } from '../../types'
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const user = chatRoom.users[0]
    return (
        <View style ={styles.container}>
            <Image source={{ uri: user.imageUri }}
            style={{ width: 200, height: 100 }} 
             />
        <View>
            <Text>{user.name}</Text>
            <Text>{chatRoom.lastMessage.content}</Text>
            
        </View>
        <Text>{chatRoom.lastMessage.createdAt}</Text>
        </View>
    )
};

export default ChatListItem;