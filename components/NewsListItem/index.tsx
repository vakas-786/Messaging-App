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

  const onPressArticle = () => {
    console.log('pressed article')
  }

  console.log(newsList.title)
    return (
    <TouchableWithoutFeedback onPress = {onPressArticle} >
      <View style={styles.container}>
        <View style={styles.leftContainer}>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{newsList.title}</Text>
            <Text>{newsList.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    )
}

export default NewsListItem