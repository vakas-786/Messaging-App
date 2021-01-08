import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import  ChatMessage  from '../components/ChatMessage/index';
import InputBox from '../components/InputBox';
import {API,graphqlOperation,Auth,} from 'aws-amplify';
import { messagesByChatRoom } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions'



const ChatRoomScreen = () => {

  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(null);

  const route = useRoute();

  const fetchMessages = async () => {
    const messagesData = await API.graphql(
      graphqlOperation(
        messagesByChatRoom, {
          chatRoomID: route.params.id,
          sortDirection: "DESC",
        }
      )
    )

    console.log("FETCH MESSAGES")
    setMessages(messagesData.data.messagesByChatRoom.items);
  }

  useEffect(() => {
    fetchMessages();
  }, [])

  useEffect(() => {
    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyId(userInfo.attributes.sub);
    }
    getMyId();
  }, [])

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data) => {
        const newMessage = data.value.data.onCreateMessage;
        console.log(newMessage)

        if (newMessage.chatRoomID !== route.params.id) {
          console.log("Message is in another room!")
          return;
        }

        fetchMessages();
        // setMessages([newMessage, ...messages]);
      }
    });

    return () => subscription.unsubscribe();
  }, [])

  console.log(`messages in state: ${messages.length}`)

    return (
        <>
            <FlatList 
            data={messages}
             renderItem={({ item }) => <ChatMessage myId={myId} message={item}/>}
             inverted
             />
            <InputBox chatRoomID ={route.params.id} />
        </>

    )
}

export default ChatRoomScreen;
