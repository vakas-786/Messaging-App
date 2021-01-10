import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import NewsListItem from '../components/NewsListItem/index';
import { Text, View } from '../components/Themed';
import { API_KEY } from '../env'



export default function NewsScreen() {

  const [news, setNews] = useState([]);
  

  useEffect( () => {

    let url = 'http://newsapi.org/v2/everything?q=bitcoin&' +
    `apiKey=${API_KEY}`;
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
      keyExtractor={(item, index) => index.id}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
