import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 32,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },
});

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    IIIIIAAAAEEEE PORRRAAA, ola mundo
                </Text>
            </View>
        </>
    );
}
