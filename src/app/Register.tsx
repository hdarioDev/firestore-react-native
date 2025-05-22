import Svg, { Path } from "react-native-svg";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { DefaultButton } from "@/src/presentation/components/default-button";
import { useRouter } from "expo-router";
import { BackButton } from "@/src/presentation/components/back-button";
import RegisterViewModel from "@/src/domain/models/RegisterViewModel";

export default function Register() {
    const router = useRouter();

    const {
        name, email, password, confirmPassword,
        onChange, onSubmit
    } = RegisterViewModel(() => {
        router.replace('/(app)/home');
    });


    return (
        <View style={styles.container}>
            <BackButton />
            <Svg
                viewBox="0 0 1440 320"
                height={220}
                width={'100%'}
                style={{ position: 'absolute', top: -70 }}
            >
                <Path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,288L48,256C96,224,192,160,288,122.7C384,85,480,75,576,106.7C672,139,768,213,864,208C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </Svg>
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
                <View style={styles.form}>
                    <Text style={styles.title}>Crear cuenta</Text>

                    <TextInput
                        placeholder="Nombre completo"
                        style={styles.textInput}
                        value={name}
                        onChangeText={(text) => onChange('name', text)}
                    />
                    <TextInput
                        placeholder="Correo electrónico"
                        style={styles.textInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => onChange('email', text)}
                    />
                    <TextInput
                        placeholder="Contraseña"
                        style={styles.textInput}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => onChange('password', text)}
                    />
                    <TextInput
                        placeholder="Confirmar contraseña"
                        style={styles.textInput}
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={(text) => onChange('confirmPassword', text)}
                    />

                    <DefaultButton
                        title="Registrarse"
                        onPress={onSubmit}
                    />

                    <TouchableOpacity onPress={() => router.push('/Login')}>
                        <Text style={styles.login}>¿Ya tienes cuenta? Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scroll: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    form: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
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
    login: {
        marginTop: 20,
        color: '#717FF0',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
