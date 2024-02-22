import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        const dados = {
            email: email,
            password: password,
        }

        console.log(dados);
    }
    return (

        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../assets/images/user.png')} />


            <View style={styles.card}>
                <Text style={styles.tittle}>Login</Text>


                <TextInput style={styles.input} placeholder="E-mail"
                    placeholderTextColor="#151413"
                    onChangeText={(textEmail) => setEmail(textEmail)}
                    secureTextEntry />


                <TextInput style={styles.input} placeholder="Senha"
                    placeholderTextColor="#151413"
                    onChangeText={(textPassword) => setPassword(textPassword)}
                    secureTextEntry />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui cadastro? Cadastre-se!</Text>
                </TouchableOpacity>



            </View>
        </View>



    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222964'

    },

    logo: {

        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150

    },

    card: {
        backgroundColor: '#2C3582',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: '#181D46',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    tittle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10,
        textAlign: "center"
    },

    input: {
        backgroundColor: '#444BA7',
        height: 40,
        marginBottom: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000'
    },

    button: {
        backgroundColor: '#5382E1',
        height: 40,
        borderRadius: 8,
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },

    forgotPassword: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,

    }



});

export default LoginScreen;