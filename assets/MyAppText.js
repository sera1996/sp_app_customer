import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MyAppText extends Component {
    render() {
        return (
            <Text style={{marginTop:10,marginLeft:30,marginRight:30,marginBottom:10,fontFamily: 'HiraginoSans-W3'}}>{this.props.children}</Text>
        );
    }
}
export default MyAppText;