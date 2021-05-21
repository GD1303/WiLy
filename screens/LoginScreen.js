import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView style = {{ alignItems: 'center', marginTop: 20 }}>
                <View>
                    <Image
                        source = { require("../assets/booklogo.jpg") }
                        style = {{ width: 200, height: 200 }} />
                    <Text style = {{ textAlign: 'center', fontSize: 30 }}>
                        Wily
                    </Text>
                </View>
                <View>
                    <TextInput
                        style = { styles.loginBox }
                        placeholder = 'abc@example.com'
                        keyboardType = 'email-address'
                        onChangeText = {(text) => {
                            this.setState({
                                emailId: text
                            })
                        }} />
                    <TextInput 
                        style = { styles.loginBox }
                        secureTextEntry = { true }
                        placeholder = '****'
                        onChangeText = {(text) => {
                            this.setState({
                                password: text
                            })
                        }} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: 250,
        height: 50,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 15,
        paddingLeft: 15,
    },
});