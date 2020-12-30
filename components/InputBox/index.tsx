import React, { useState } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {
    const [message, setMessage] = useState('');

    const onSend = () => {
        console.log(message)

        setMessage('')
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey'/>
                <TextInput multiline style={styles.textInput} value={message} onChangeText={setMessage} placeholder={"Type something"} />
            </View>
            <TouchableOpacity onPress={onSend}>
            <View style={styles.buttonContainer}>
                <MaterialIcons name='send' size={29} color='white'/>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;