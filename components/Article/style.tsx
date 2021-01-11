import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        padding: 20
    },
    image: {
        height: 200,
        width: 200,
        aspectRatio: 2.5, 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    content: {
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: 30,
        fontWeight: '400',
    },
    date: {
        fontSize: 14,
        fontStyle: 'italic'
    }
})

export default styles;