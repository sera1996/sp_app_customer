import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class Menu extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style = {{marginTop:10,height:30,borderBottomWidth:0.3,marginLeft:50,marginRight:50}}>
                        <Text style={{textAlign:'center',fontSize:16}}>{this.props.menu}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});