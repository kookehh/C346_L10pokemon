import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

const datasource = [
    {
        data: [
            {
                name: 'Little Girl',
                card: '4/46/AdventureInTheFlowersPoster.jpg',
                description: 'A mysterious young girl who can support her teammates and teleport to other survivors.'
            },
            {
                name: 'Perfumer',
                card: '8/80/PotionWitchPoster.jpg',
                description: 'A graceful survivor who uses perfume to return to her previous position and condition.'
            },
            {
                name: 'Female Dancer',
                card: 'b/b1/BallofSweetDreamPoster.jpg',
                description: 'A talented dancer who uses music boxes to speed up her teammates or slow down hunters.'
            },
            {
                name: 'Mechanic',
                card: '2/2e/SESecretRealmCollectionCardMechanic.png',
                description: 'A skilled inventor who controls a robot to decode cipher machines and help her teammates.'
            },
            {
                name: 'Toy Merchant',
                card: 'c/cf/SESecretRealmCollectionCardToyMerchant.png',
                description: 'A creative survivor who uses a catapult and glider to move around and escape from hunters.'
            }
        ],
        title: "Survivors",
        bgColor: 'rebeccapurple',
        icon: 'person-running'
    },
    {
        data: [
            {
                name: 'Bloody Queen',
                card: '4/4a/SculptingInTimeNightTides.jpg',
                description: 'An elegant but dangerous hunter who uses mirrors to create a reflection that can attack survivors.'
            },
            {
                name: 'Photographer',
                card: '9/98/SESecretRealmCollectionCardPhotographer.jpg',
                description: 'A mysterious hunter who creates a camera world where he can attack survivors and affect the real world.'
            },
            {
                name: 'Sculptor',
                card: '3/3c/SESecretRealmCollectionCardSculptor.jpg',
                description: 'A powerful hunter who creates moving statues to trap and damage survivors.'
            },
            {
                name: 'Naiad',
                card: '4/43/PhantomOfTheOceanCard.png',
                description: 'A water-themed hunter who uses her harpoon to create areas of water that damage survivors.'
            },
            {
                name: 'GameKeeper',
                card: '8/8a/SESecretRealmCollectionCardGamekeeper.jpg',
                description: 'A fearsome hunter who uses a hook to catch survivors and pull them towards him.'
            }
        ],
        title: "Hunters",
        bgColor: 'brown',
        icon: 'masks-theater'
    }
];

const renderItem = ({item, index, section}, selectedCard, setSelectedCard) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                if (selectedCard === item.name) {
                    setSelectedCard(null);
                } else {
                    setSelectedCard(item.name);
                }
            }}
        >
            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/id5/images/' + item.card + '/revision/latest'
                }}
                style={styles.cardImage}
            />

            <View style={styles.nameContainer}>
                <Text style={styles.textStyle}>
                    {item.name}
                </Text>

                {selectedCard === item.name && (
                    <View style={styles.descriptionStyle}>
                        <Text style={{fontSize: 16, color: 'maroon', fontWeight: 'bold'}}>
                            ✦ Character Description ✦
                        </Text>

                        <Text style={{fontSize: 14, color: 'brown', marginTop: 10}}>
                            {item.description}
                        </Text>
                    </View>
                )}

            </View>
        </TouchableOpacity>
    );
};


export default function App() {

    const [selectedCard, setSelectedCard] = React.useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Identity V Card Collection</Text>
            <Text style={styles.subtitleStyle}>Sculpting in Time Trading Card Series</Text>
            <Text style={[styles.subtitleStyle, {fontSize: 15, color: 'maroon'}]}>Tap a character to discover their
                story!</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    Alert.alert('Add card')
                }}
            >
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white'}}>ADD CARD</Text>
            </TouchableOpacity>
            <SectionList sections={datasource}
                         contentContainerStyle={{padding: 10}}
                         renderItem={(info) => renderItem(info, selectedCard, setSelectedCard)}
                         renderSectionHeader={({section: {title, bgColor, icon}}) => (
                             <View style={[styles.headerText, {backgroundColor: bgColor}]}>
                                 <FontAwesome6
                                     name={icon}
                                     size={20}
                                     color="white"
                                     style={styles.iconStyle}
                                 />

                                 <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                                     {title}
                                 </Text>
                             </View>
                         )}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8e6db',
        marginTop: 20,
        marginBottom: 20,
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rosybrown',
        borderRadius: 10,
        backgroundColor: 'seashell',
        padding: 15,
        marginBottom: 10,
        marginTop: 5,
    },
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'maroon',
        marginLeft: 0,
        fontFamily: 'cursive',
        textAlign: 'center',
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rosybrown',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
    },
    buttonStyle: {
        padding: 10,
        margin: 10,
        backgroundColor: 'maroon',
        borderWidth: 1,
        borderColor: 'brown',
        borderRadius: 10,
    },
    iconStyle: {
        marginRight: 10,
    },
    cardImage: {
        width: 120,
        height: 170,
        borderWidth: 2,
        borderColor: 'maroon',
        borderRadius: 5,
    },
    titleStyle: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'maroon',
        marginTop: 15,
        marginBottom: 15,
        fontFamily: 'serif',
    },
    subtitleStyle: {
        fontSize: 14,
        textAlign: 'center',
        color: 'dimgray',
        marginBottom: 10,
    },
    descriptionStyle: {
        backgroundColor: 'linen',
        borderWidth: 1,
        borderColor: 'goldenrod',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    nameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
