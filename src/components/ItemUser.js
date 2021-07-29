import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

export function ItemUser(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: props.avatar }} />
            <Text style={styles.nickname}>{props.name}</Text>

            <View style={styles.separador}></View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                    <Icon name="eye" size={25} color={'#fff'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}