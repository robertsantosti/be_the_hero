import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import logo from '../../assets/logo.png';
import style from "./style";

export default function Detail() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    function sendMail() {

    }

    function sendWhatsapp() {

    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={[style.incidentProperty, {marginTop: 0}]}>Ong:</Text>
                <Text style={style.incidentValue}>AFFAS</Text>

                <Text style={style.incidentProperty}>Caso:</Text>
                <Text style={style.incidentValue}>Teste</Text>

                <Text style={style.incidentProperty}>Valor:</Text>
                <Text style={style.incidentValue}>R$120,00</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity onPress={() => {}} style={style.action}>
                        <Text style={style.actionText}>Whats-app</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={style.action}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}