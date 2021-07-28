import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';



export function ItemUser({ name, onPress }) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} />
            <Text style={styles.nickname}>{name}</Text>

            <View style={styles.separador}></View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Icon name="eye" size={25} color={'#fff'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}