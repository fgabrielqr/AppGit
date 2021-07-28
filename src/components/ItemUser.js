import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../Styles/Theme';
import styles from '../Styles/styles';

export function ItemUser({ name, onPress }) {
    return (
        <View style={styles.container}>

            <Text style={styles.nickname}>{name}</Text>


            <View style={styles.separador}></View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Icon name="eye" size={25} color={Theme.colors.gray} />
                </TouchableOpacity>
            </View>
        </View>
    )
}