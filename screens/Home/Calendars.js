import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Calcomp from './component/Calcomp';
import Callabel from './component/Callabel';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


class Calendars extends Component {
    
    navigateToConfirm(){
        this.props.navigation.navigate('Confirm');
    }
   backToProfile(){
        this.props.navigation.navigate('Profile');
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'transparent'}}>
                    <Left>
                    <TouchableOpacity onPress={()=>this.backToProfile()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    </Left>
                </Header>
                <TouchableOpacity onPress={()=>this.navigateToConfirm()}>
                    <Text>Confirmation</Text>
                </TouchableOpacity>
                <View style={styles.profileStyle}>
                    <Text style={{color:'#fd7166',fontSize:14,marginTop:10,marginLeft:10}}>施術名:デジタルパーマ</Text>
                    <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
                    <Text style={{color:'#fd7166',fontSize:14}}>施術料金:5600円</Text>
                    <Text style={{color:'#fd7166',fontSize:14,marginLeft:20}}>施術時間:2時間</Text>
                    </View>
                </View>
        </Container>
        );
    }
}
export default Calendars;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calContent:{
        marginLeft:20,
        height:50,
        width:50,
        backgroundColor:'#fd7166',
        borderRadius:25,
        borderWidth:0.5
    },
    calLabel:{
        marginLeft:20,
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:0.5
    },
    profileStyle:{
        marginTop:30,
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:70,
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3,
    },
});