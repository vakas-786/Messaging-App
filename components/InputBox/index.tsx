import React, { useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,} from "react-native";
import styles from './styles';
import { MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import {API,graphqlOperation,Auth,} from 'aws-amplify';
import {
    createMessage,
    updateChatRoom,
  } from '../../graphql/mutations';

const InputBox = (props) => {

    const { chatRoomID } = props;
  
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyUserId(userInfo.attributes.sub);
      }
      fetchUser();
    }, [])
  
  
    const updateChatRoomLastMessage = async (messageId: string) => {
      try {
        await API.graphql(
          graphqlOperation(
            updateChatRoom, {
              input: {
                id: chatRoomID,
                lastMessageID: messageId,
              }
            }
          )
        );
      } catch (e) {
        console.log(e);
      }
    }
  
    const onSendPress = async () => {
      try {
        const newMessageData = await API.graphql(
          graphqlOperation(
            createMessage, {
              input: {
                content: message,
                userID: myUserId,
                chatRoomID
              }
            }
          )
        )
  
        await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
      } catch (e) {
        console.log(e);
      }
  
      setMessage('');
    }
  
    return(
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={100}
    style={{width: '100%'}}
    >
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey'/>
                <TextInput multiline style={styles.textInput} value={message} onChangeText={setMessage} placeholder={"Type something"} />
            </View>
            <TouchableOpacity onPress={onSendPress}>
            <View style={styles.buttonContainer}>
                <MaterialIcons name='send' size={29} color='white'/>
            </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    )
}

export default InputBox;