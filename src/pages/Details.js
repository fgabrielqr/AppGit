import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import api from '../services/api';
import Theme from '../styles/Theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Details({ route }) {
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
                <TouchableOpacity style={styles.btn1} >
                    <Text style={styles.btnTitle}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    perfil: {
        alignItems: 'center',
    },
    perfil1: {
        marginLeft: 15,
    },
    icon: {
        marginBottom: 7
    },
    btn: {
        marginTop: 50,
        backgroundColor: '#8257E5',
        borderRadius: 30,
        width: 200,
        height: 50,

    },
    btnTitle: {
        marginTop: 6,
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
    },
    info: {
        marginTop: 100,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    userLogo: {
        width: 145,
        height: 145,
        borderRadius: 90,

    },
    title: {
        fontSize: 35,
        color: Theme.colors.gray
    },
    textSmall: {
        fontSize: 14,
        color: Theme.colors.gray

    },
    textRegular: {

        fontSize: 20,
        marginTop: 20,
        color: Theme.colors.gray,


    },
    titleInfo: {

        fontSize: 20,
    },
    infoCount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textCount: {
        fontSize: 20,
        color: Theme.colors.black
    },
})
