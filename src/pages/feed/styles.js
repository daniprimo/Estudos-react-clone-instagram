import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },
    Header: {
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    Avatar: {
        width: 32,
        height: 32,
        radius: 16,
        marginRight: 10,
    },
    Name: {
        fontWeight: '600',
    },
    Description: {
        padding: 15,
        lineHeight: 18,
    },
});
