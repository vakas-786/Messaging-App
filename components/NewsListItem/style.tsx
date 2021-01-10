import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
  },
  midContainer: {
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  description: {
    fontStyle: 'italic',
    fontSize: 14,
    fontWeight: '200',
  },
});

export default styles;
