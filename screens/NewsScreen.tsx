import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import NewsListItem from '../components/NewsListItem/index';
import { Text, View } from '../components/Themed';
import { NEWS_API_KEY, NEWS_URL } from '../env'

export default function NewsScreen() {

  const [news, setNews] = useState([]);
  

  useEffect( () => {

    const url = NEWS_URL + NEWS_API_KEY;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const newsData = await response.json()
        setNews(newsData.articles)
      } catch (e) {
        console.log(e)
      }
    } 
    fetchNews()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
      style ={{width: '100%'}}
      data={news}
      renderItem={({ item }) => <NewsListItem newsList={item} />}
      keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
