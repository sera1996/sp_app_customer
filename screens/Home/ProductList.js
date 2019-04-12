import React, { Component } from "react";
import { 
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Input,InputGroup } from 'native-base';

class ProductList extends Component {
    backToProfile(){
        this.props.navigation.navigate('Profile');
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#ffffff'}}>
                    <Left>
                        <TouchableOpacity onPress={()=>this.backToProfile()}>
                        <Text>戻る</Text>   
                        </TouchableOpacity> 
                    </Left>
                </Header>
                <View style={{flexDirection:'row',fontSize:20,marginTop:15}}>
                    <TouchableOpacity style={{flex:1}}>
                    <Text note style={{textAlign:'center'}}>保湿剤</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}}>
                    <Text note style={{textAlign:'center'}}>シャンプー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}}>
                    <Text note style={{textAlign:'center'}}>ワックス</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{height:150,width:120,
                        marginLeft:20,borderWidth:0.8,borderColor:'#ffffff'}}>
                        <View style = {{flex:2}}>
                            <Image source = {require('../../assets/liquid.jpg')}
                            style = {{flex:1,width:90,height:90,marginLeft:15,resizeMode:'cover'}}/>
                        </View>
                    <View style = {{flex:1,textAlign:'center',paddingTop:10}}>
                        <Text note style={{textAlign:'center'}}>
                            LOUVREDO
                        </Text>
                        <Text style={{textAlign:'center',fontSize:12}}>
                            10000円
                        </Text>
                    </View>
                </View>
            </Container>
        );
    }
}
export default ProductList;

const styles = StyleSheet.create({
    scrollMenu:{
        marginLeft:20,
        marginRight:20
    }
});