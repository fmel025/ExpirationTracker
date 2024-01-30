import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default Home
