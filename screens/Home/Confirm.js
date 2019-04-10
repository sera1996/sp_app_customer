import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Container, Header, View, DeckSwiper, Card, 
    CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


class Confirm extends Component {
    backToCalendar(){
        this.props.navigation.navigate('Calendars');
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'transparent'}}>
                    <Left>
                    <TouchableOpacity onPress={()=>this.backToCalendar()}>
                        <Text>戻る</Text>
                    </TouchableOpacity>
                    </Left>
                </Header>
                <View>
                <Text style={{color:'#fd7166',fontSize:22,marginTop:30,marginLeft:20}}>予約確認</Text>
                <View style={{flexDirection:'row',borderBottomWidth:0.5,marginTop:60,marginLeft:30,marginRight:30}}>
                    <Text style={{fontSize:12}}>氏名</Text>
                    <Text style={{marginLeft:120,fontSize:18}}>河野 勇輝</Text>
                </View>
                <View style={{flexDirection:'row',borderBottomWidth:0.5,marginTop:50,marginLeft:30,marginRight:30}}>
                    <Text style={{fontSize:12}}>電話番号</Text>
                    <Text style={{marginLeft:80,fontSize:18}}>072-114-514</Text>
                </View>
                <View style={{marginLeft:30,marginTop:40}}>
                    <Text style={{color:'#fd7166',fontSize:26}}>¥5000</Text>
                    <Text style={{fontSize:12}}>ヘアートリートメント</Text>
                </View>
                <View style={{marginLeft:30,marginRight:30,marginTop:40,backgroundColor:'#f2f2f2'}}>
                    <Text style={{textAlign:'center',color:'#fd7166',paddingTop:10}}>注意事項</Text>
                    <Text style={{marginTop:20,fontSize:12,paddingLeft:10,paddingRight:10,paddingBottom:10}}>ご都合によるキャンセルの場合は、必ず事前にご連絡ください。当日のキャンセル
                        はカット代金の100%料金が発生します。ご都合によるキャンセルの場合は、必ず
                        OneTWO!!!!
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={{marginTop:40,marginLeft:120,marginRight:120,borderRadius:15,backgroundColor:'#59D494'}}>
                        <Text style={{textAlign:'center',color:'white',marginTop:10,marginBottom:10}}>
                            予約
                        </Text>
                    </TouchableOpacity>
                </View>
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