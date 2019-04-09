import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {Button,
Container,
Content,Title,
List, ListItem,Separator,
Accordion} from 'native-base';
class SideBar extends Component {
    stationState(){

    }
    render() {
        return (
            <Container>
            <Content>
            <View style={styles.container}>
                <View style={{marginTop:60}}>
                    {/*
                    <Title>お悩みタグ</Title>
                    <Button info style={styles.button}>
                        <Text style={{color:'white',fontSize:16}}>くせ毛</Text>
                    </Button>
                    <Button info style={styles.button}>
                        <Text style={{color:'white',fontSize:16}}>ボリューム</Text>
                    </Button>
                    <Button info style={styles.button}>
                        <Text style={{color:'white',fontSize:16}}>直毛</Text>
                    </Button>
                    */}
                    {/*
                    <List>
                        <ListItem itemDivider>
                            <Text style={styles.text}>お悩みタグ</Text>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>くせ毛</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>ボリューム</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>ダメージ</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>髪質</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>チン毛</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <View style = {{minHeight:40,minWidth:80,
            padding:5,backgroundColor:'white',
            borderColor:'#dddddd',borderWidth:1,
            borderRadius:2,marginRight:5}}>
                <Text style={{fontWeight:'700',fontSize:10}}>くせ毛</Text>
            </View>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.text}>場所を指定</Text>
                        </ListItem>
                    </List>
                    */}
                    <Separator bordered>
                        <Text>お悩みタグ</Text>
                    </Separator>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.profileStyle}>
                        <Text style={styles.tagText}>カラー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle}>
                        <Text style={styles.tagText}>くせ毛</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle}>
                        <Text style={styles.tagText}>ボリューム</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle}>
                        <Text style={styles.tagText}>ダメージ</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.profileStyle}>
                        <Text style={styles.tagText}>パサつき</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle}>
                        <Text style={styles.tagText}>チンゲ</Text>
                    </TouchableOpacity>
                    </View>
                    {/*
                    <Separator bordered style={{marginTop:20}}>
                        <Text>県指定</Text>
                    </Separator>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.profileStyle} onPress = {()=>this.stationState(0)}>
                        <Text style={styles.tagText}>東京</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle} onPress = {()=>this.stationState(1)}>
                        <Text style={styles.tagText}>神奈川</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle} onPress ={()=>this.stationState(2)}>
                        <Text style={styles.tagText}>千葉</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle} onPress ={()=>this.stationState(3)}>
                        <Text style={styles.tagText}>茨城</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileStyle} onPress={()=>this.stationState(4)}>
                        <Text style={styles.tagText}>埼玉</Text>
                    </TouchableOpacity>
                    </View>
                    <Separator bordered style={{marginTop:20}}>
                        <Text>駅選択</Text>
                    </Separator>
                    */}
                </View>
            </View>
            </Content>
            </Container>
        );
    }
}
export default SideBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*alignItems: 'center',
        justifyContent: 'center',*/
        backgroundColor:'#FFF'
    },
    button:{
        marginLeft:20,
        paddingLeft:30,
        paddingRight:30,
        marginTop:5
    },
    text:{
        fontSize:20
    },
    text2:{
        fontSize:18
    },
    profileStyle:{
        marginTop:15,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#000000',
        height:25,
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3,
        flexDirection:'row'
    },
    tagText:{
        paddingTop:8,
        paddingRight:10,
        paddingLeft:10,
        textAlign:'center',
        fontSize:12
    }
});