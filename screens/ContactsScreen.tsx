import React, { useState, useEffect } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContactListItem from '../components/ContactListItem/index';
import { View } from '../components/Themed';
import { listUsers } from '../graphql/queries';

export default function Contacts() {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    const fetchUsers = async () => {
        try {
          const userInfo = await Auth.currentAuthenticatedUser();
          const usersData = await API.graphql(
            graphqlOperation(
              listUsers
              )
          )
          setUsers(usersData.data.listUsers.items.filter( users => users.name !== userInfo.username));
        } catch (e) {
          console.log(e)
        }
      }
      fetchUsers();
  }, [])


  return (
    <>
    <View style={styles.container}>
      <FlatList 
      style ={{width: '100%'}}
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      keyExtractor={(item) => item.id}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
