import React, { useEffect } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGlobalData } from '../../redux/action/dataAction';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {global} = useSelector((state) => state.data);
    
    useEffect(() => {
        dispatch(fetchGlobalData())
    }, [dispatch]);
    
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftComponent={{ icon: 'menu', color:"#fff", size: 30, onPress: () => navigation.toggleDrawer()}}
                centerComponent={{ text: 'Covid-19', style: { color:"#fff", fontSize: 23 } }}
                rightComponent={{ icon: 'notifications', color: '#fff', size: 30 }}
                backgroundColor="#ff5e78"
            />
            <View style={{ flex:1 }}>
                <View style={{ backgroundColor: '#ff5e78', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: 'column', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', paddingLeft: 15, paddingTop: 15, fontSize: 30, fontWeight: 'bold' }}>Coronavirus Live Update</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 25, width: Dimensions.get('screen').width/3.8, height: 100 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20 }}>Total</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{global.TotalConfirmed}</Text>
                                <Text>+ {global.NewConfirmed}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 25, width: Dimensions.get('screen').width/3.8, height: 100 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20 }}>Recovered</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{global.TotalRecovered}</Text>
                                <Text>{global.NewRecovered}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 25, width: Dimensions.get('screen').width/3.8, height: 100 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20 }}>Deaths</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{global.TotalDeaths}</Text>
                                <Text>{global.NewDeaths}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 20, paddingBottom: 15, paddingTop: 30, paddingLeft: 25 }}>Health Tips</Text>
                    <Image source={{ uri: 'https://www.fda.gov/files/covid_foodretail_bestpractices_header.png' }} style={{ height: 210, width: 410 }}/>
                </View>
            </View>
        </View>
    );
}
 
export default HomeScreen;