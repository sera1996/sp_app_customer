import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Stylist extends Component {
    render() {
        return (
            <View style={{height:130,width:130,
            marginLeft:10}}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri}
                    style= {{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:25}}/>
                </View>
            </View>
        );
    }
}
export default Stylist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});