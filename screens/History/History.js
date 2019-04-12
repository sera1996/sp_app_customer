import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Input,InputGroup } from 'native-base';
class History extends Component {
    render() {
        return (
            <Container style={{backgroundColor:'#f5f6f8'}}>
                <Header></Header>
                <View style={{height:800}}>
                    <View style={{flexDirection:'row'}}>
                <Text style={styles.rireki}>施術履歴</Text>
                <TouchableOpacity>
                <Text style={{textDecorationLine:'underline',marginTop:20,marginRight:20}}>並び替え:</Text>
                </TouchableOpacity>
                </View>
                <ScrollView>
                <TouchableOpacity style={styles.profileStyle}>
                    <View>
                    <View style={{marginTop:18}}/>
                    <Image
                        style={{marginBottom:5,marginLeft:20,width:80,height:80,borderRadius:40,borderColor:'#f5f6f8',borderWidth:2,shadowOffset:{height:0.8},shadowOpacity:0.3}}
                        source = {Pics[0].uri}/>
                    </View>
                    <View style={{marginLeft:30,marginTop:15}}>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:18}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:10}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <View>
                    <View style={{marginTop:18}}/>
                    <Image
                        style={{marginBottom:5,marginLeft:20,width:80,height:80,borderRadius:40,borderColor:'#f5f6f8',borderWidth:2,shadowOffset:{height:0.8},shadowOpacity:0.3}}
                        source = {Pics[1].uri}/>
                    </View>
                    <View style={{marginLeft:30,marginTop:15}}>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:18}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:10}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <View>
                    <View style={{marginTop:18}}/>
                    <Image
                        style={{marginBottom:5,marginLeft:20,width:80,height:80,borderRadius:40,borderColor:'#f5f6f8',borderWidth:2,shadowOffset:{height:0.8},shadowOpacity:0.3}}
                        source = {Pics[2].uri}/>
                    </View>
                    <View style={{marginLeft:30,marginTop:15}}>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:18}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:10}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <View>
                    <View style={{marginTop:18}}/>
                    <Image
                        style={{marginBottom:5,marginLeft:20,width:80,height:80,borderRadius:40,borderColor:'#f5f6f8',borderWidth:2,shadowOffset:{height:0.8},shadowOpacity:0.3}}
                        source = {Pics[0].uri}/>
                    </View>
                    <View style={{marginLeft:30,marginTop:15}}>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:18}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:10}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity onPress={()=>this.navigateToProfile(Pics[0])}>
                <Text>Favorite</Text>
                </TouchableOpacity>
                </View>
            </Container>
        );
    }
}
export default History;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    rireki:{
        fontSize:22,
        color:'#FD7166',
        marginTop:20,
        marginLeft:20,
        flex:1
    },
    profileStyle:{
        marginTop:20,
        marginRight:30,
        marginLeft:30,
        backgroundColor:'#ffffff',
        borderRadius:25,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:120,
        flexDirection:'row'
    }
});