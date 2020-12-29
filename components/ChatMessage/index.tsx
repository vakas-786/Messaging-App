import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import moment from "moment";
import styles from '../ChatMessage/styles';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return(
        <View style={styles.container}>
            <View style={[
                styles.messageBox,{
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white'
                    }  
                ]}>
                <Text>{message.user.name}</Text>
                <Text>{message.content}</Text>
                <Text>{moment((message.createdAt)).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage

