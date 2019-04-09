import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class Calcomp extends Component {
    constructor(props){
        super(props);
        this.state={
            compDesign:{
                marginLeft:25,
                height:40,
                width:40,
                backgroundColor:'#fd7166',
                borderRadius:20,
                borderWidth:0.5,
                borderColor:'#ffffff'
            },
            compDesign2:{
                marginLeft:25,
                height:40,
                width:40,
                backgroundColor:'#33b661',
                borderRadius:20,
                borderWidth:0.5,
                borderColor:'#ffffff'
            },
        }
    }
    render() {
        return (
            <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label1}</Text>
                <TouchableOpacity style={this.state.compDesign}><Text>{this.props.color}</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label2}</Text>
                <TouchableOpacity style={this.state.compDesign2}></TouchableOpacity>
            </View>
            <View>
            <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label3}</Text>
            <TouchableOpacity style={styles.calContent}></TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label4}</Text>
                <TouchableOpacity style={styles.calContent}></TouchableOpacity>
            </View>
        </View>
        );
    }
}
export default Calcomp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calContent:{
        marginLeft:25,
        height:40,
        width:40,
        backgroundColor:'#fd7166',
        borderRadius:20,
        borderWidth:0.5,
        borderColor:'#ffffff'
    }
});