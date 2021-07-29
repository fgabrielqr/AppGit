import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/styles';

export function Input(props) {
    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText} />

            <TouchableOpacity style={styles.btn1} onPress={props.onPress}>
                <AntDesign name="right" size={25} color={'#B2B2B2'} />
            </TouchableOpacity>
        </View>
    )
}