import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import logo from '../../assets/logo.png';
import style from "./style";

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo}/>
                <Text style={style.headerText}>
                    Total de <Text style={style.bold}>0 casos</Text>
                </Text>
            </View>

            <Text style={style.title}>Bem vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={style.incidentList}
                data={[1,2,3,4,5]}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View style={style.incident}>
                        <Text style={style.incidentProperty}>Ong:</Text>
                        <Text style={style.incidentValue}>AFFAS</Text>

                        <Text style={style.incidentProperty}>Caso:</Text>
                        <Text style={style.incidentValue}>Teste</Text>

                        <Text style={style.incidentProperty}>Valor:</Text>
                        <Text style={style.incidentValue}>R$120,00</Text>

                        <TouchableOpacity style={style.detailsButton} onPress={navigateToDetail}>
                            <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}