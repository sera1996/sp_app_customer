import React, { Component } from "react";
import { Rating, AirbnbRating } from 'react-native-elements';
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TouchableHighlight
} from "react-native";
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Input,InputGroup } from 'native-base';
import StoreInfo from './component/StoreInfo';
import MyAppText from './../../assets/MyAppText';
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
        this.menuContent(num);
    }
    backToHome(){
        this.props.navigation.navigate('Home');
    }
    navigateToProductList(){
        this.props.navigation.navigate('ProductList');
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
                <View style={{flex:1,marginTop:20}}>
                <View>
                <Text note style={{marginLeft:30}}>店舗住所</Text>
                </View>
                <View style={{marginTop:10,marginLeft:20,marginRight:70,flexDirection:'row'}}>
                        <Icon name="send" style={{color:'#fd7166'}}/>
                        <Text style={{mariginTop:5,marginLeft:10}}>神奈川県藤沢市湘南台西村ビル2階201</Text>
                </View>
                <View style={{marginTop:30}}>
                <Text note style={{marginLeft:30}}>店舗写真</Text>
                </View>
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
                    <View style={{marginTop:5,marginLeft:5}}>
                        <Text style={{fontSize:12,fontWeight:'bold'}}>星野　リサ</Text>
                    </View>
                    <Rating
                            style={{marginRight:180,marginTop:5}}
                            imageSize={12}
                            startingValue={3}
                            />
                    <View style={{marginTop:5,marginLeft:5}}>
                        <Text style={{fontSize:11}}>
                            初めて行ったサロンでしたがカラーの仕上がりが
                            とても良く、カットも希望通りにしていただけたので
                            とても満足しました。
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <View style={{marginTop:5,marginLeft:5}}>
                        <Text style={{fontSize:12,fontWeight:'bold'}}>星野　リサ</Text>
                    </View>
                    <Rating
                            style={{marginRight:180,marginTop:5}}
                            imageSize={12}
                            startingValue={3}
                            />
                    <View style={{marginTop:5,marginLeft:5}}>
                        <Text style={{fontSize:11}}>
                            初めて行ったサロンでしたがカラーの仕上がりが
                            とても良く、カットも希望通りにしていただけたので
                            とても満足しました。
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
            );
        }
        else if(num==4){
            return(
                <View>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{flex:2,marginLeft:20,fontSize:14}}>寺岡さんの利用している商品</Text>
                        <TouchableOpacity onPress={()=>this.navigateToProductList()}>
                            <Text style={{flex:1,fontSize:14,marginLeft:20,color:'#fd7166',textAlign:'center',marginRight:20}}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal='true' style={{flexDirection:'row',marginTop:20}}>
                    <View style = {{height:150,width:120,
                        marginLeft:20,borderWidth:0.5,borderColor:'#ffffff',borderRadius:5}}>
                        <View style = {{flex:2}}>
                            <Image source = {require('../../assets/dryer.jpg')}
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
                        <View style = {{height:150,width:120,
                        marginLeft:20,borderWidth:0.8,borderColor:'#ffffff'}}>
                        <View style = {{flex:2}}>
                            <Image source = {require('../../assets/spray.jpg')}
                            style = {{flex:1,width:90,height:90,marginLeft:15,resizeMode:'cover'}}/>
                        </View>
                    <View style = {{flex:1,textAlign:'center',paddingTop:10}}>
                        <Text note style={{textAlign:'center'}}>
                            ナプラN
                        </Text>
                        <Text style={{textAlign:'center',fontSize:12}}>
                            3600円
                        </Text>
                    </View>
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
                    </ScrollView>
                    <View>
                        <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{flex:2,marginLeft:20,fontSize:14}}>Xさんのお悩みにオススメの商品</Text>
                        <TouchableOpacity>
                            <Text style={{flex:1,fontSize:14,marginLeft:20,color:'#fd7166',textAlign:'center',marginRight:20}}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal='true' style={{flexDirection:'row',marginTop:20}}>
                    <View style = {{height:150,width:120,
                        marginLeft:20,borderWidth:0.5,borderColor:'#ffffff'}}>
                        <View style = {{flex:2}}>
                            <Image source = {require('../../assets/dryer.jpg')}
                            style = {{flex:1,width:90,height:90,marginLeft:15,resizeMode:'cover'}}/>
                        </View>
                    <View style = {{flex:1,textAlign:'center',paddingTop:10}}>
                        <Text note style={{textAlign:'center'}}>
                            LOUVREDO
                        </Text>
                        <Text style={{textAlign:'center'}}>
                            10000円
                        </Text>
                    </View>
                </View>
                        <View style = {{height:150,width:120,
                        marginLeft:20,borderWidth:0.8,borderColor:'#ffffff'}}>
                        <View style = {{flex:2}}>
                            <Image source = {require('../../assets/spray.jpg')}
                            style = {{flex:1,width:90,height:90,marginLeft:15,resizeMode:'cover'}}/>
                        </View>
                    <View style = {{flex:1,textAlign:'center',paddingTop:10}}>
                        <Text note style={{textAlign:'center'}}>
                            ナプラN
                        </Text>
                        <Text style={{textAlign:'center'}}>
                            3600円
                        </Text>
                    </View>
                    </View>
                        <View style = {{height:150,width:120,
                        marginLeft:20,borderColor:'#ffffff'}}>
                        <View style = {{flex:2}}>
                            <Image source = {require('../../assets/liquid.jpg')}
                            style = {{flex:1,width:90,height:90,marginLeft:15,resizeMode:'cover'}}/>
                        </View>
                    <View style = {{flex:1,textAlign:'center',paddingTop:10}}>
                        <Text note style={{textAlign:'center'}}>
                            LOUVREDO
                        </Text>
                        <Text style={{textAlign:'center'}}>
                            10000円
                        </Text>
                    </View>
                </View>
                    </ScrollView>
                    </View>
                </View>
            );
        }
        else if(num==5){
            return(
                <View>
                    <View style={{backgroundColor:'#ffffff',marginRight:40,marginLeft:40,borderRadius:15,marginTop:25,paddingTop:10}}>
                        <Text style={{marginLeft:30,marginRight:30,marginBottom:10,fontSize:14}}>
                            インスタグラムで人気のウルフカットです。襟足を重めに残して、切りっぱなし感を残してウルフボブ。
                            切りっぱなしボブに飽きた方オススメのウルフカット！
                        </Text>
                        <MyAppText style={{fontSize:14}}>
                            インスタグラムで人気のウルフカットです。襟足を重めに残して、切りっぱなし感を残してウルフボブ。
                            切りっぱなしボブに飽きた方オススメのウルフカット！
                        </MyAppText>
                    </View>
                    <View style={{marginTop:30,marginLeft:20,flexDirection:'row'}}>
                    <Text note style={{fontSize:18}}>仕事歴</Text>
                    <Text style={{marginLeft:20}}>16年</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30,marginLeft:20}}>
                        <Text note>お悩み解決スキル</Text>
                        <View style={styles.skillTag}>
                            <Text>パサつき</Text>
                        </View>
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
                        <Text>戻る</Text>
                    </TouchableOpacity>
                    </Left>
                </Header>
            <ScrollView>
            <View>
                <View style={{flexDirection:'row',height:150,marginTop:50}}>
                    <View style={{shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,  }}>
                    <Image
                    style={{marginLeft:120,width:125,height:125,borderRadius:125/2}}
                    source = {Pics[0].uri}/>
                    </View>

                </View>
            <View>
                <View>
                    <Text style={{flex:1,textAlign:'center',fontSize:24,fontWeight:'bold',fontFamily: 'HiraginoSans-W3'}}>寺岡悠馬</Text>
                    <Text style={{flex:1,textAlign:'center',fontSize:16,fontFamily: 'HiraginoSans-W3'}}>@teraokayum</Text>
                </View>
            </View>

                
                <ScrollView horizontal='true'style={{flexDirection:'row',marginTop:50,marginLeft:40}}>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(5)}>
                        <Text style={{textAlign:'center',fontSize:14}}>詳細</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(1)}>
                        <Text style={{textAlign:'center',fontSize:14}}>店舗情報</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(2)}>
                        <Text style={{textAlign:'center',fontSize:14}}>メニュー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(4)}>
                        <Text style={{textAlign:'center',fontSize:14}}>化粧品紹介</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(3)}>
                        <Text style={{textAlign:'center',fontSize:14}}>レビュー</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{marginTop:10}}>
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
        backgroundColor:'#f5f6f8'
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
        marginTop:20,
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#ffffff',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#ffffff',
        height:90
    },
    scrollMenu:{
        marginLeft:20,
        marginRight:20
    },
    skillTag:{
        marginTop:15,
        marginLeft:40,
        marginRight:200,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        height:25,
        shadowColor:"black",
        shadowOffset:{height:1},
        shadowOpacity:0.3,
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10
    }
});