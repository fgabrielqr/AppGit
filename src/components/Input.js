import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Theme from '../Styles/Theme';

export function Input({ placeholder, onPress, onChangeText }) {

    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText} />

            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <AntDesign name="right" size={25} color={'#B2B2B2'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    containerInput: {
        marginTop: 40,
        marginBottom: 100,
        width: 350,
        height: 60,
        marginLeft: -9,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },

    input: {
        flex: 1,
        height: '100%',
        paddingLeft: 20,
        color: Theme.colors.gray,
        fontSize: 17,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,


    },
    btn: {
        height: 55,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 0.5,
        borderLeftColor: 'gray',
    }

});