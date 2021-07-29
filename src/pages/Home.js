import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Keyboard, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { Input } from '../components/Input'
import { AntDesign } from '@expo/vector-icons';
import api from '../services/api';
import { ItemUser } from '../components/ItemUser';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home({ navigation }) {
  const keyAsyncStorage = "@appgit:users";
  const [nickname, setNickname] = useState('');
  const [users, setUsers] = useState([]);

  function navigationDetails(login) {
    navigation.navigate('Details', { user: login });
  }

  async function handleSearchUser() {
    try {
      response = await api.get('/users/' + nickname);
      const { data } = response;
      const obj = {
        id: data.id,
        nome: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
      }

      const vetData = [...users, obj];

      try {
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
      } catch (error) {
        Alert.alert("Erro na gravação de contatos");
      }

      Keyboard.dismiss();
      setNickname('');
      loadData();
      console.log(obj);

    } catch (error) {
      console.error(error);
    }
  }

  async function loadData() {
    try {
      const retorno = await AsyncStorage.getItem(keyAsyncStorage);
      const data = JSON.parse(retorno)
      console.log(data);
      setUsers(data || []);
    } catch (error) {
      Alert.alert("Erro na leitura dos dados");
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => loadData());
  }, [navigation]);

  return (
    <View style={GlobalStyles.container}>
      <AntDesign name="github" size={98} color={'#8257E5'} />
      <Text style={styles.title}>GIT.Networking</Text>
      <Input placeholder="Informe o nickname do usuário" onChangeText={setNickname}
        onPress={handleSearchUser} />

      <FlatList data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemUser name={item.login} avatar={item.avatar_url} onPress={() => navigationDetails(item.login)} />
        )} />
    </View>
  );
}