import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Linking,
    TouchableOpacity
} from 'react-native';
// import { Icon } from 'react-native-vector-icons/Feather';
// Importar icones, com npm i react-native-vector-icons
// e depois usar esse: react-native link react-native-vector-icons
// <Icon name="github" />
// mas com o expo já temos essa lib
import { Feather } from '@expo/vector-icons';

import photo from './assets/img/profilePhoto.jpg';

export default function App() {
    return (
        <View style={styles.page}>
            <View style={styles.headerContainer}>
                <Image source={photo} style={styles.photo} />
                <Text style={styles.name}>Matheus Marinho</Text>
                <Text style={styles.job}>Desenvolvedor Mobile</Text>
                <View style={styles.socialMedias}>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('https://github.com/marinhoo')
                        }
                    >
                        <Feather name="github" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL(
                                'https://www.linkedin.com/in/matheusmarinho04/'
                            )
                        }
                    >
                        <Feather name="linkedin" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('https://twitter.com/omarinhou')
                        }
                    >
                        <Feather name="twitter" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderText}>
                            Experiência Profissional
                        </Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.cardContentTitle}>
                                Estagiário na Oi
                            </Text>
                            <Text style={styles.cardContentText}>
                                {' '}
                                - Automatização de processos
                            </Text>
                            <Text style={styles.cardContentText}>
                                {' '}
                                - Gerenciamento de banco de dados
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderText}>
                            Formação Academica
                        </Text>
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardContentTitle}>
                            Universidade Estácio de Sá
                        </Text>
                        <Text style={styles.cardContentText}>
                            - Sistemas de Informação
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        paddingTop: 50
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    photo: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
    job: {
        fontSize: 16,
        color: '#939393',
        marginBottom: 20
    },
    socialMedias: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        marginTop: 20,
        marginBottom: 20
    },
    cardsContainer: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        width: '60%',
        borderWidth: 1,
        borderColor: '#939393',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#fff'
    },
    cardHeader: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    cardHeaderText: {
        fontSize: 15
    },
    cardContentTitle: {
        color: '#939393',
        fontSize: 14.6,
        borderBottomWidth: 1,
        borderColor: '#939393',
        paddingBottom: 2,
        marginBottom: 5
    },
    cardContentText: {
        color: '#939393',
        fontSize: 14
    }
});
