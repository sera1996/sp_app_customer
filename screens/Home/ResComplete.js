import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Container, Header, View, DeckSwiper, Card, 
    CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


class Confirm extends Component {
    backToHome(){
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <Container style={{backgroundColor:'#fd7166'}}>
            <Header style={{backgroundColor:'#fd7166'}}>
            <Left>
                <TouchableOpacity onPress={()=>this.backToHome()}>
                        <Text style={{color:'white'}}>ホームへ</Text>
                </TouchableOpacity>
                </Left>
            </Header>
                <View style={{flex:1,marginTop:250}}>
                <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:42}}>Monsi</Text>
                <Text note style={{textAlign:'center',color:'white'}}>Reservation Complete!</Text>
                </View>
            </Container>
        );
    }
}
export default Confirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});