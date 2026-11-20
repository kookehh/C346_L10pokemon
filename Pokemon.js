import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity, Alert, Image, Button} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const datasource = [
    {
        data: [
            {name: 'Pikachu', card: '25'},
            {name: 'Raichu', card: '26'},
        ],
        title: "Electric",
        bgColor: 'yellow',
        icon: 'bolt-lightning'
    },
    {
        data: [
            {name: 'Vulprix', card: '37'},
            {name: 'NineTales', card: '38'},
        ],
        title: "Fire",
        bgColor: 'orange',
        icon: 'fire'
    }
];

const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}
                          onPress={() => {
                              Alert.alert(item.name + " selected!")
                          }}
        >
            <Text style={styles.textStyle}> {item.name} </Text>
            <Image
                source={{
                    uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png'
                }}
                style={{width: 200, height: 300}}
            />
        </TouchableOpacity>
    );
};


export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>L10 Pokemon List</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    Alert.alert('Add Pokemon')
                }}
            >
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>ADD POKEMON</Text>
            </TouchableOpacity>
            {/*<FlatList data={datasource} renderItem={renderItem}/>*/}
            <SectionList sections={datasource}
                         contentContainerStyle={{padding: 10}}
                         renderItem={renderItem}
                         renderSectionHeader={({section: {title, bgColor, icon}}) => (
                             <View style={[styles.headerText, {backgroundColor: bgColor}]}>
                                 <FontAwesome6
                                     name={icon}
                                     size={20}
                                     color="black"
                                     style={styles.iconStyle}
                                 />
                                 <Text style={{fontSize: 20, fontWeight: 'bold'}}>
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
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    opacityStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'lightblue',
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        padding: 5,
    },
    buttonStyle: {
        padding: 10,
        margin: 10,
        backgroundColor: 'lightblue',
    },
    iconStyle: {
        marginRight: 10,
    },
});
