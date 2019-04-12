import React, { Component } from "react";
import { 
    StyleSheet,
    Image
} from "react-native";
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Input,InputGroup } from 'native-base';
class MyPage extends Component {
    render() {
        return (
            <Container style={{backgroundColor:'#f5f6f8'}}>
                <Header>

                </Header>
                        <View style={{shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                            marginTop:30  }}>
                            <Image
                            style={{marginLeft:120,width:125,height:125,borderRadius:125/2}}
                            source = {Pics[0].uri}/>                            
                        </View>
                        <View style={{marginTop:30}}>
                            <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',fontFamily: 'HiraginoSans-W3'}}>河野勇輝</Text>
                            <Text note style={{textAlign:'center',fontSize:16,fontFamily: 'HiraginoSans-W3'}}>カワノユウキ</Text>
                        </View>
                    <View>
                        <View style={styles.element}>
                        <Text note>年齢</Text>
                        <Text>21歳</Text>
                        </View>
                        <View style={styles.element}>
                        <Text note>メールアドレス</Text>
                        <Text>yukijukisfc@gmail.com</Text>
                        </View>
                        <View style={styles.element}>
                        <Text note>パスワード</Text>
                        <Text>8101919senpai</Text>
                        </View>
                        <View style={styles.element}>
                        <Text note>プッシュ通知</Text>
                        </View>
                    </View>
            </Container>
        );
    }
}
export default MyPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    element:{
        marginLeft:20,
        marginTop:20
    }
});