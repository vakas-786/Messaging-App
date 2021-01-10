import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';
import { NewsList } from '../../types';

export type NewsListItemProps = {
  newsList: NewsList;
}

const NewsListItem = (props: NewsListItemProps) => {

  const { newsList } = props;
  const navigation = useNavigation();


  const clickHandler = () => {
    navigation.navigate('Article', {
      article: newsList
    })
    console.log('pressed article', newsList)
  }
    return (
    <TouchableWithoutFeedback onPress = {clickHandler} >
      <View style={styles.container}>
          <View style={styles.midContainer}>
            <Text numberOfLines={2} style={styles.title}>{newsList.title}</Text>
            <Text numberOfLines={4} style={styles.description}>{newsList.description}</Text>
            <Text style={styles.name}>{newsList.source.name}</Text>
          </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default NewsListItem