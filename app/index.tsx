import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';


export default function LoginScreen() {
    
    
    return (
        <View style={styles.container}> 
        <Text>Login Screen</Text>

        <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
        />
        
        <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    tittle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
    },

    input: {
        width: "80%",
        height: 40,
        borderColor: "white",
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 16,
        color: "white"
    },

    button: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: "80%",
        alignItems: "center"
    },

    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    }




})
