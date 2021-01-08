import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import moment from "moment";
import styles from '../ChatMessage/styles';

export type ChatMessageProps = {
    message: Message;
    myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message, myId} = props;
    console.log(props)

    const isMyMessage = () => {
        return message.userID === myId;
    }

    return(
        <View style={styles.container}>
            <View style={[
                styles.messageBox,{
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                    }  
                ]}>
                {!isMyMessage() && <Text style={styles.name}></Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment((message.createdAt)).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage

