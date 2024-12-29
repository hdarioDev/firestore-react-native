import {SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Iniciar sesión</Text>
                <Image source={require('../assets/images/img/controller.png')}
                    style={{ width: 200, height: 200, margin: 20 }}
                />
                <TextInput
                    placeholder='Usuario'
                    style={styles.textInput}
                />
                <TextInput
                    placeholder='Constraseña'
                    style={styles.textInput}
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Iniciar sesión</Text>
                </TouchableOpacity>
                <Text style={styles.register}>Registrarse</Text>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ''
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginTop: 20,
        padding: 12,
        borderRadius: 4,
    },
    button: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 4,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    register: {
        marginTop: 20,
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
