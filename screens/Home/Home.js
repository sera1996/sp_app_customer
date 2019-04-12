import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Dimensions,
    Animated,PanResponder
} from "react-native";
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Drawer,Button,Title,Right,
    InputGroup, Input, Item } from 'native-base';
import Stylist from './Tags/Stylist'
import SideBar from './SideBar';
const Pics =[
  {id:'1',uri: require('../../assets/photo1.jpg')},
  {id:'2',uri: require('../../assets/photo2.jpg')},
  {id:'3',uri: require('../../assets/photo3.jpg')},
  {id:'4',uri: require('../../assets/photo4.jpg')},
];
let cards = [
    {
        order:0,
        text:'寺岡悠馬',
        name:'yuma',
        image:require('../../assets/photo1.jpg'),
        image1:require('../../assets/photo1.jpg'),
        image2:require('../../assets/photo2.jpg')
    },
    {
        order:1,
        text:'河野勇輝',
        name:'yuma',
        image:require('../../assets/photo3.jpg'),
        image1:require('../../assets/photo3.jpg'),
        image2:require('../../assets/photo4.jpg')
    }
]
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
class Home extends Component {
    constructor(props){
        super(props);
        this.position = new Animated.ValueXY()
        this.state={
            bastate:0,
            currentCard:0,
            currentIndex:0
        }
        this.rotate = this.position.x.interpolate({
    inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
    outputRange:['-5deg','0deg','5deg'],
    extrapolate:'clamp'
  })
  this.rotateAndTranslate ={
    transform:[{
      rotate:this.rotate
    },
  ...this.position.getTranslateTransform()]
  }
this.likeOpacity = this.position.x.interpolate({
  inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  outputRange:[0,0,1],
  extrapolate:'clamp'
})
this.dislikeOpacity = this.position.x.interpolate({
  inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  outputRange:[1,0,0],
  extrapolate:'clamp'
})
this.nextCardOpacity = this.position.x.interpolate({
  inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  outputRange:[1,0,1],
  extrapolate:'clamp'
})
this.nextCardScale = this.position.x.interpolate({
  inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  outputRange:[1,0.8,1],
  extrapolate:'clamp'
})
}
componentWillMount(){
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder:(evt,gestureState) => true,
      onPanResponderMove:(evt,gestureState)=>{
        this.position.setValue({x:gestureState.dx,y:0})
      },
      onPanResponderRelease:(evt,gestureState)=>{
        if(gestureState.dx>120){
          Animated.spring(this.position,{
            toValue:{x:SCREEN_WIDTH+100,y:gestureState.dy}
          }).start(()=>{
            this.setState({currentIndex:this.state.currentIndex+1},()=>{
            this.position.setValue({x:0,y:0})
          })
          })
        }
        else if(gestureState.dx< -120){
          Animated.spring(this.position,{
            toValue:{x:-SCREEN_WIDTH-100,y:gestureState.dy}
          }).start(()=>{
            this.setState({currentIndex:this.state.currentIndex+1},()=>{
            this.position.setValue({x:0,y:0})
          })
          })
        }
        else{
          Animated.spring(this.position,{
            toValue:{x:0,y:0},
            friction:4
          }).start()
        }
      }
    })
  }
  renderPics = () =>{
    return Pics.map((item,i)=>{
      if(i<this.state.currentIndex)
      {
        return null
      }
      else if(i==this.state.currentIndex){
      return(
      <Animated.View 
      {...this.PanResponder.panHandlers}
      key={item.id} style={[this.rotateAndTranslate,
      {height:420,width:SCREEN_WIDTH-60,padding:7,marginLeft:30,position:'absolute',marginTop:20}]}>
            <View>
            <Image style={{height:300,width:300,borderBottomRightRadius:10}}
              source={item.uri}/>
              </View>
              <View style={{flexDirection:'row',backgroundColor:'#ffffff',height:80}}>
                  <Image style={{height:50,width:50,borderRadius:25,marginLeft:20,marginTop:15,marginBottom:10}} source={item.uri}/>
                  <View style={{marginTop:10}}/>
                    <View>
                        <Text style={{marginLeft:20,marginTop:20}}>河野勇輝</Text>
                        <Text note style={{marginLeft:20}}>@teraokayum</Text>
                    </View>
                  </View>
      </Animated.View>
      )}
      else if(i == this.state.currentIndex+1){
        return(
      <Animated.View 
      key={item.id} style={[
      {opacity:this.nextCardOpacity,transform:[{scale:this.nextCardScale}],
      height:420,width:SCREEN_WIDTH-60,marginLeft:30,padding:7,position:'absolute',marginTop:20}]}>
            <Image
              style={{flex:1,height:300,width:300,resizeMode:'cover',borderRadius:0,
              shadowColor:"black",
              shadowOffset:{height:2},
              shadowOpacity:0.3}}
              source={item.uri}/>
              <View style={{flexDirection:'row',backgroundColor:'#ffffff',height:80}}>
                  <Image style={{height:50,width:50,borderRadius:25,marginLeft:20,marginTop:15,marginBottom:10}} source={item.uri}/>
                  <View style={{marginTop:10}}/>
                  <View>
                  <Text style={{marginLeft:20,marginTop:20}}>河野勇輝</Text>
                  <Text note style={{marginLeft:20}}>@teraokayum</Text>
                  </View>
                  </View>
          </Animated.View>
      )
      }
    else{
      return null
    }
    }).reverse()
  }
    closeDrawer = () => {
        this._drawer._root.close();
    }
    openDrawer = () => {
        //alert('open');
        this._drawer._root.open();
    }
    navigateToProfile(press){
        this.props.navigation.navigate('Profile',{press});
    }
    incrementCardIndex(){
        if(this.state.currentCard+1 < cards.length){
            this.state.currentCard+= 1;
        }
        else{
            this.state.currentCard = 0;
        }
        console.log(this.state.currentCard);
    }
    decrementCardIndex(){
        if(this.state.currentCard -1 <0){
            this.state.currentCard = cards.length-1;
        }
        else{
            this.state.currentCard -= 1;
        }
        console.log(this.state.currentCard);
    }
    changeBAstate(){
        if(this.state.bastate==0){
            this.setState({bastate:1});
            cards[this.state.currentCard].image = cards[this.state.currentCard].image2;
            console.log('bastatechanged');
            //console.log(this.state.currentCard);
        }
        else if(this.state.bastate==1){
            this.setState({bastate:0});
            cards[this.state.currentCard].image=cards[this.state.currentCard].image1;
            console.log('bastatechanged back')
            //console.log(this.state.currentCard);
        }
    }
    render() {
        return (
           <Drawer 
                ref={(ref)=>{this._drawer=ref;}}
                        content={<SideBar/>}> 
        <Container style={{backgroundColor:'#f5f6f8'}}>
                <Header searchBar rounded style={{backgroundColor:'transparent'}}>
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon style={styles.icon} name='list' />
                        </Button> 
                        
                    </Left>
                    
                    {/*
                    <InputGroup borderType= 'underline'style={{marginTop:5,backgroundColor:'#fff',width:180,height:25}}>
                        <Icon name="ios-search" style={{color:'#fd7166'}}/>
                        <Input style={{color: '#00c497'}} placeholder="お悩みタグ"/>
                    </InputGroup>
                    */}
                    {/*
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="検索"/>
                    </Item>
                    */}
                </Header>
                <ScrollView>
                    {/*
                    <View>{this.renderPics()}</View>
                    */}
                <View style={{paddingLeft:20,paddingRight:20,paddingTop:15}}>
                <DeckSwiper
                onSwipeLeft={item=>this.incrementCardIndex()}
                onSwipeRight={item=>this.decrementCardIndex()}
                dataSource={cards}
                renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <View>
                <TouchableWithoutFeedback onPress={()=>this.changeBAstate()}>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image}/>
                </CardItem>
                </TouchableWithoutFeedback>
                </View>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <View style={{flexDirection:'row'}}>
                      <View>
                      <Text>{item.text}</Text>
                      <Text note>@teraokayum</Text>
                      </View>
                      </View>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            }
          />
          </View>
          
          
          
          <View style = {{marginTop:380}}>
                    {/*
                    <View style={{marginTop:30,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Rating
                            imageSize={28}
                            startingValue={3}
                            />
                            <Text style={{marginLeft:30,marginTop:10}}>神奈川県横浜市</Text>
                            <Text style={{marginLeft:30}}>キャリア4年</Text>
                        </View>
                        <View style={{flex:1,marginLeft:10}}>
                            <Text>103レビュー</Text>
                        </View>
                    </View>
                    */}
                    <View style={{marginTop:20}}>
                        <ScrollView horizontal='true'>
                            <Stylist imageUri={require('../../assets/photo1.jpg')} />
                            <Stylist imageUri={require('../../assets/photo2.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo3.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo4.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo1.jpg')} />
                            <Stylist imageUri={require('../../assets/photo2.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo3.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo4.jpg')}　/>
                        </ScrollView>
                    </View>
                    
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.navigateToProfile(Pics[0])}>
                        <Text 
                        style={styles.textStyle}>
                            詳細を見る
                        </Text>
                    </TouchableOpacity>
                    
                    {/*
                    <TouchableOpacity onPress={()=>console.log(this.state.currentCard)}>
                    <View style={styles.buttonStyle}>
                        <Text 
                        style={styles.textStyle}>
                            詳細を見る
                        </Text>
                    </View>
                    </TouchableOpacity>
                    */}
                </View>
                </ScrollView>
          </Container>
          </Drawer>
          
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle:{
        marginTop:20,
        marginLeft:130,
        marginRight:130,
        backgroundColor:'#fd7166',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35
    },
    textStyle:{
        marginTop:5,
        textAlign:'center',
        color:'#fff',
        fontSize:14,
    },
    icon:{
        color:'#fd7166',
        fontSize:40,
    }
});