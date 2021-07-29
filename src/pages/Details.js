import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import api from '../services/api';
import styles from '../styles/details';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Details({ navigation, route }) {
    const keyAsyncStorage = "@gitnetwork:users";
    const [user, setUser] = useState({});
    async function carregarUser(nickname) {
        try {
            response = await api.get('/users/' + nickname);
            const { data } = response;
            const obj = {
                id: data.id,
                name: data.name,
                login: data.login,
                company: data.company,
                bio: data.bio,
                avatar_url: data.avatar_url,
                url: data.url,
                followers: data.followers,
                public_repos: data.public_repos
            }
            setUser(obj);
            console.log(obj);
        } catch {
            console.error(error);
        }
    }

    async function removeItem(id) {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const data = JSON.parse(retorno);
            const newData = data.filter(item => item.id != id);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));

            navigation.navigate('Home');

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const { user } = route.params;
        carregarUser(user);
    }, []);

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.perfil}>
                <Image style={styles.userLogo} source={{ uri: user.avatar_url }} />
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.textSmall}>{user.url}</Text>
            </View>

            <View style={styles.perfil1}>
                <Text style={styles.textRegular}>Empresa: {user.company}</Text>
                <Text style={styles.textRegular}>Bio: {user.bio}</Text>
            </View>

            <View style={styles.info}>
                <View>
                    <Text style={styles.titleInfo}>Repositórios</Text>
                    <View style={styles.infoCount}>
                        <MaterialCommunityIcons name="source-repository" size={50} color="black" />
                        <Text style={styles.textCount}>{user.public_repos}</Text>
                    </View>
                </View>

                <View style={styles.icon}>
                    <Text style={styles.titleInfo}>Seguidores</Text>
                    <View style={styles.infoCount}>
                        <FontAwesome5 name="users" size={40} color="black" />
                        <Text style={styles.textCount}>{user.followers}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn1} onPress={() => removeItem(user.id)}>
                    <Text style={styles.btnTitle}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}