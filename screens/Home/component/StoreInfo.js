import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class StoreInfo extends Component {
    render() {
        return (
            <View>
                <View style ={{flexDirection:'row',marginTop:15}}>
                        <Text style={{marginLeft:20}}>{this.props.category}</Text> 
                        <Text style={{ marginLeft:60,flex:1}}>{this.props.content}</Text>
                    </View>
                    <View
                        style={{
                            marginTop:15,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            }}
                    />
            </View>
        );
    }
}
export default StoreInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});