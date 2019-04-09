import React, { Component } from "react";
import { Rating, AirbnbRating } from 'react-native-elements';
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Input,InputGroup } from 'native-base';
import StoreInfo from './component/StoreInfo';
import Menu from './component/Menu';
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            menuNum:5
        }
    }
    navigateToReview(){
        this.props.navigation.navigate('Review');
    }
    navigateToCalendar(){
        this.props.navigation.navigate('Calendars');
    }
    checkLine(num){
        this.setState({menuNum:num});
        console.log(this.state.menuNum);
        this.menuContent(num);
    }
    backToHome(){
        this.props.navigation.navigate('Home');
    }
    menuContent(num){
        if(num==2){
            return(
                <View>
                <View style={{borderBottomWidth:0.3,marginLeft:50,marginRight:50,borderBottomColor:'black'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginTop:30}} onPress={()=>this.navigateToCalendar()}>
                    <Text style={{flex:1,textAlign:'center'}}>パンチパーマ</Text>
                    <Text style={{flex:1,textAlign:'center'}}>¥3000</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomWidth:0.3,marginLeft:50,marginRight:50,borderBottomColor:'black'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginTop:30}} onPress={()=>this.navigateToCalendar()}>
                    <Text style={{flex:1,textAlign:'center'}}>前髪ヘアーカット</Text>
                    <Text style={{flex:1,textAlign:'center'}}>¥2000</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomWidth:0.3,marginLeft:50,marginRight:50,borderBottomColor:'black'}}>
                    <TouchableOpacity style={{flexDirection:'row',marginTop:30}} onPress={()=> this.navigateToCalendar()}>
                    <Text style={{flex:1,textAlign:'center'}}>ハイトーンカラー</Text>
                    <Text style={{flex:1,textAlign:'center'}}>¥4000</Text>
                    </TouchableOpacity>
                </View>
                </View>
            );
        }
        else if(num==1){
            return(
                <View style={{flex:1}}>
                <Text note style={{marginTop:10,marginLeft:30}}>店舗住所</Text>
                <View style={{marginTop:10,marginLeft:20,marginRight:70,flexDirection:'row'}}>
                        <Icon name="send" style={{color:'#fd7166'}}/>
                        <Text style={{mariginTop:5,marginLeft:10}}>神奈川県藤沢市湘南台西村ビル2階201</Text>
                </View>
                <Text note style={{marginTop:30,marginLeft:30}}>店舗写真</Text>
                <View>
                    <Image style={{borderRadius:20,width:240,height:140,marginLeft:70,marginTop:10}} source={require('../../assets/biyoushitu.jpg')}/>
                </View>
                </View>
            );
        }
        else if(num==3){
            return(
                <View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginLeft:50,marginTop:10}}>
                        <Text style={{fontSize:28,textAlign:'center'}}>3.57</Text>
                        <Text style={{fontSize:12,textAlign:'center'}}>103 レビュー</Text>
                    </View>
                    <View>
                        <Rating
                            imageSize={28}
                            readonly
                            startingValue={3}
                            style={{marginLeft:80,marginTop:15}}
                            />
                        <TouchableOpacity>
                            <Text style={{textDecorationLine:'underline',marginLeft:160}}>並び替え:</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.profileStyle}>

                    <Text style={{marginTop:5,marginLeft:5}}>星野　リサ</Text>
                    <Text style={{marginTop:5,marginLeft:5,fontSize:11}}>
                        初めて行ったサロンでしたがカラーの仕上がりが
                        とても良く、カットも希望通りにしていただけたので
                        とても満足しました。
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>

                    <Text style={{marginTop:5,marginLeft:5}}>星野　リサ</Text>
                    <Text style={{marginTop:5,marginLeft:5,fontSize:11}}>
                        初めて行ったサロンでしたがカラーの仕上がりが
                        とても良く、カットも希望通りにしていただけたので
                        とても満足しました。
                    </Text>
                </TouchableOpacity>
                </View>
            );
        }
        else if(num==4){
            return(
                <View>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{flex:2,marginLeft:20,fontSiz:14}}>寺岡さんの利用している商品</Text>
                        <Text style={{flex:1,fontSize:14,marginLeft:20,color:'#fd7166',textAlign:'center',marginRight:20}}>SEE ALL</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image source = {require('../../assets/brory.jpg')} style={{width:90,height:90}}/>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image source = {require('../../assets/brory.jpg')} style={{width:90,height:90}}/>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Image source = {require('../../assets/brory.jpg')} style={{width:90,height:90}}/>
                        </View>
                    </View>
                </View>
            );
        }
        else if(num==5){
            return(
                <View>
                    <View style={{backgroundColor:'#f2f2f2',marginRight:40,marginLeft:40,borderRadius:15,marginTop:25}}>
                    <Text style={{marginTop:10,marginLeft:30,marginRight:30,marginBottom:10,fontSize:14}}>
                        インスタグラムで人気のウルフカットです。襟足を重めに残して、切りっぱなし感を残してウルフボブ。
                        切りっぱなしボブに飽きた方オススメのウルフカット！
                    </Text>
                    </View>
                </View>
            )
        }
        else{
            <View>
                <Text>no num selected</Text>
            </View>
        }
    }
    render() {
    const{navigation:{state:{params:{press}}}}=this.props;

        return (
            <Container>
                <Header style={{backgroundColor:'transparent'}}>
                    <Left>
                    <TouchableOpacity onPress={()=>this.backToHome()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    </Left>
                </Header>
            <ScrollView>
            <View>
                <View style={{flexDirection:'row',height:150,marginTop:20}}>
                    <View style={{shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,  }}>
                    <Image
                    style={{marginLeft:120,width:125,height:125,borderRadius:125/2}}
                    source = {Pics[0].uri}/>
                    </View>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{marginTop:110,fontSize:22,textAlign:'center'}}>
                        
                        </Text>
                        <Text style={{fontSize:12,textAlign:'center',textDecorationLine:'underline'}}></Text>
                    </TouchableOpacity>
                </View>
            <View>
                <View>
                    <Text style={{flex:1,textAlign:'center',fontSize:24,fontWeight:'bold'}}>寺岡悠馬</Text>
                    <Text style={{flex:1,textAlign:'center',fontSize:16}}>@teraokayum</Text>
                </View>
            </View>

                
                <ScrollView horizontal='true'style={{flexDirection:'row',marginTop:30}}>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(5)}>
                        <Text style={{textAlign:'center',fontSize:15}}>詳細</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(1)}>
                        <Text style={{textAlign:'center',fontSize:15}}>店舗情報</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(2)}>
                        <Text style={{textAlign:'center',fontSize:15}}>メニュー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(4)}>
                        <Text style={{textAlign:'center',fontSize:15}}>化粧品紹介</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(3)}>
                        <Text style={{textAlign:'center',fontSize:15}}>レビュー</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View>
                    {this.menuContent(this.state.menuNum)}
                </View>
            </View>
            </ScrollView>
            </Container>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle1:{
        flex:1,
        marginLeft:120,
        marginRight:120,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#FD7166',
        borderRadius:15,marginTop:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35 
    },
    buttonStyle2:{
        flex:1,
        marginTop:10,
        marginRight:40,
        marginBottom:10,
        backgroundColor:'#FD7166',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35 
    },
    buttonStyle3:{
        marginTop:10,
        marginRight:100,
        marginLeft:100,
        marginBottom:10,
        backgroundColor:'#FD7166',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35 
    },
    textStyle:{
        marginTop:5,
        paddingLeft:15,
        color:'#fff',
        fontSize:14
    },
    menuText:{
        fontSize:18,
        textDecorationLine:'underline',
        marginBottom:20,
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        backgroundColor:'#fbfafa',
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3
    },
    profileStyle:{
        marginTop:30,
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:90,
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3,
    },
    scrollMenu:{
        marginLeft:15,
        marginRight:15
    }
});