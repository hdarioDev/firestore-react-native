import Svg, {Path} from "react-native-svg";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import { DefaultButton } from "@/src/presentation/components/default-button";
import { useRouter } from "expo-router";


export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Svg
                viewBox="0 0 1440 320"
                height={220}
                width={'100%'}
                style={{position: 'absolute', top: -70}}
            >
                <Path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,288L48,256C96,224,192,160,288,122.7C384,85,480,75,576,106.7C672,139,768,213,864,208C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </Svg>
            <View style={styles.form}>
                <Text style={styles.title}>Iniciar sesión</Text>
                <Image
                    source={require('@/src/presentation/assets/images/img/controller.png')}
                    style={{width: 200, height: 200, margin: 20}}
                />
                <TextInput
                    placeholder='Usuario'
                    style={styles.textInput}
                />
                <TextInput
                    placeholder='Constraseña'
                    style={styles.textInput}
                />
                <DefaultButton
                    title="Iniciar sesión"
                    onPress={() => console.log("Login...")}
                />
                <TouchableOpacity onPress={() => router.push('/Register')}>
                    <Text style={styles.register}>Registrarse</Text>
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
    register: {
        marginTop: 20,
        color: '#717FF0',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
