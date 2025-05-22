import { useState } from "react";
import Toast from "react-native-toast-message";
import { login } from "@/src/firebase/auth.service";
import { useAuthStore } from "@/src/store/auth";

type LoginFormValues = {
    email: string;
    password: string;
};

const LoginViewModel = (onSuccess?: () => void) => {
    const [values, setValues] = useState<LoginFormValues>({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const onChange = (prop: keyof LoginFormValues, value: string) => {
        setValues({
            ...values,
            [prop]: value,
        });
    };

    const onSubmit = async () => {
        const valid = isValidForm();

        if (!valid) {
            Toast.show({
                type: 'error',
                text1: 'Error de inicio de sesión',
                text2: getErrorMessage(values),
            });
            return;
        }

        try {
            const userCredential = await login(values.email, values.password);
            useAuthStore.getState().setUser(userCredential.user);
            Toast.show({
                type: 'success',
                text1: 'Bienvenido',
                text2: values.email,
            });

            onSuccess?.();

        } catch (err: any) {
            console.error('Error de login:', err);
            Toast.show({
                type: 'error',
                text1: 'Error de inicio de sesión',
                text2: err.message || 'Credenciales incorrectas',
            });
        }
    };

    const isValidForm = (): boolean => {
        const message = getErrorMessage(values);

        if (message) {
            setError(message);
            return false;
        }

        setError('');
        return true;
    };

    const getErrorMessage = (formValues: LoginFormValues): string => {
        const { email, password } = formValues;

        if (!email || !password) {
            return 'Por favor, complete todos los campos.';
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return 'Por favor, ingrese un correo electrónico válido.';
        }

        return '';
    };

    return {
        ...values,
        onChange,
        onSubmit,
        error,
    };
};

export default LoginViewModel;
