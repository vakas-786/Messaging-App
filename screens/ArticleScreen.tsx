import React from 'react'
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import styles from '../components/Article/style';
import moment from "moment";


const ArticleScreen = () => {

    const route = useRoute();

    return (
    <View style={styles.container}>
        <Text style={styles.title}>{route.params.article.title}</Text>
        <Text style={styles.date}>{moment((route.params.article.publishedAt)).fromNow()}</Text>
            <View style={styles.imageContainer}>
                <Image source={{ uri: route.params.article.urlToImage}} style={styles.image} />
            </View>
        <Text style={styles.content}>{route.params.article.content}</Text>
    </View>
    )
}

export default ArticleScreen