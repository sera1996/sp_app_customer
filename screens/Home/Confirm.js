import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Confirm extends Component {
    render() {
        return (
            <View>
                <Text>予約確認</Text>
                <Text>性</Text>
                <Text>名</Text>
            </View>
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