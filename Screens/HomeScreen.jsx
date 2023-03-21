import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
import transferMoney from "../Constants/transferMoney"
import axios from 'axios';

const HomeScreen = () => {

useEffect(() => {
    
    apiList()
}, []);
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
// function apiList(){
//     axios.get('http://www.boredapi.com/api/activity/').then((res) => {
//         console.log(res.data);
//         setData(res.data)
//         setLoading(false)
//     })
//     console.log("hey");
// }

    async function apiList() {
     await   axios.get('http://www.boredapi.com/api/activity/').then((res) => {
            //console.log(res.data);
            setData(res.data)
            setLoading(false)
        })
console.log("hey");

        // const resp = await fetch("http://www.boredapi.com/api/activity/");
        // const datas = await resp.json();
        // setData("datas")
          setLoading(false)
        // console.log(data.activity);
    }

    const movieList = ({ item }) => {
        

        return (
            <View style={{marginLeft:23,margin:10}}>
                <View>
                    <Image source={{ uri: item.image }}

                        style={{ width: 50, height: 50,borderRadius:8 }}
                    />
                    <Text style={{ fontSize:13,justifyContent: 'center',alignItems: 'center',textAlign: 'center',marginTop:5}}>{item.text}</Text>

                    
                </View>
            </View>
        )
    }
    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
            {/* TopComponent */}
            <View style={styles.header}>

                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7KCiuLntSoShgbwbfX--k137Qiod7VRATDOP9HRvfMoL955pvVUbE-kM_DerIQlZe7E&usqp=CAU' }} style={styles.img} />

                <View style={styles.prb}>
                    <Text style={{ fontSize: 13, fontWeight: '500' }}>Prabash Ediga</Text>
                    <Text style={{ fontSize: 10, fontWeight: '300', marginRight: 18 }}>Our Rebel Star</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: '28%', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons style={{ marginRight: 15 }} name="qr-code-scanner" size={24} color="black" />
                    <Ionicons style={{ marginRight: 15 }} name="notifications" size={24} color="black" />
                    <Entypo style={{ marginRight: 15 }} name="help-with-circle" size={24} color="black" />
                </View>


            </View>

            {/* Banner  */}
            <View style={{ position: 'relative', width: "95%", height: 150, margin: 10 }}>
                <Swiper autoplay={true}>
                    <View>
                        <Image
                            source={{
                                uri: 'https://s3.ap-south-1.amazonaws.com/media.filmyfocus.com/wp-content/uploads/2022/04/When-will-Prabhas-get-back-to-work.jpg'
                            }} style={{ width: '100%', height: '100%', borderRadius: 20 }}
                            resizeMode="contain"
                        />
                    </View>

                    <View>
                        <Image
                            source={{
                                uri: 'https://i.ndtvimg.com/i/2018-05/baahubali-2-instagram_650x400_71525590082.jpg'
                            }} style={{ width: '100%', height: '100%', borderRadius: 20 }}
                            resizeMode="contain"
                        />
                    </View>

                    <View>
                        <Image
                            source={{
                                uri: 'https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/1/5/2/1223152_Baahubali-The-Beginning.jpg'
                            }} style={{ width: '100%', height: '100%', borderRadius: 20 }}
                            resizeMode="contain"
                        />
                    </View>

                    <View>
                        <Image
                            source={{
                                uri: 'https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Bahubali-The-Beginning-banner.jpg'
                            }} style={{ width: '100%', height: '100%', borderRadius: 20 }}
                            resizeMode="contain"
                        />
                    </View>
                </Swiper>
            </View>

            {/* Movie list */}

            <View style={styles.card}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal:10 }}>Top Movies</Text>


                <View>
                    <FlatList
                        horizontal={true}
                        data={transferMoney}
                        renderItem={movieList}
                        keyExtractor={item => item.id}

                    />

                    <View style={{width: '100%',backgroundColor:'#ADD8E6',padding:10,borderRadius:10,marginBottom:-20}}>
                    <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
                            <Text style={{ fontSize: 15 }}>Book my Show</Text>

                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </View>
                       
                    </View>
                </View>
            </View>


{/* loading */}

<View>
                {loading ?<View>
                    <Text>Loading</Text>
                </View>:<View>
                <Text>
                            {data?.activity}
                </Text>
                       
                </View> }
</View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        backgroundColor: '#008FA1',
        flexDirection: 'row',

        padding: 7,
        paddingTop: 10,
        paddingLeft: 15,
        position: 'relative'
    },
    img: {
        width: 40,
        height: 45,
        borderRadius: 10
    },
    prb: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
       // paddingHorizontal: 10,

        width: '95%',
        margin: 10,
        shadowOffset: { width: 5, height: 4 },
        shadowColor: '#52006A',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 50
    }
})

export default HomeScreen;