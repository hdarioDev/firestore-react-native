import { useState } from "react";
import Toast from "react-native-toast-message";
import { register } from "@/src/firebase/auth.service";
import { useAuthStore } from "@/src/store/auth";

type RegisterFormValues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const RegisterViewModel = (onSuccess?: () => void) => {
    const [values, setValues] = useState<RegisterFormValues>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const onChange = (prop: keyof RegisterFormValues, value: string) => {
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
                text1: 'Error de registro',
                text2: getErrorMessage(values),
            });
            return;
        }

        try {
            const userCredential = await register(values.email, values.password);
            useAuthStore.getState().setUser(userCredential.user);

            Toast.show({
                type: 'success',
                text1: 'Registro exitoso',
                text2: `Bienvenido, ${values.name}`,
            });

            onSuccess?.();

        } catch (error: any) {
            console.error('Error al registrar:', error);
            Toast.show({
                type: 'error',
                text1: 'Error al registrar',
                text2: error.message || 'Ocurrió un error',
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

    const getErrorMessage = (formValues: RegisterFormValues): string => {
        const { name, email, password, confirmPassword } = formValues;

        if (!name || !email || !password || !confirmPassword) {
            return 'Por favor, completa todos los campos.';
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return 'Por favor, ingresa un correo electrónico válido.';
        }

        if (password.length < 6) {
            return 'La contraseña debe tener al menos 6 caracteres.';
        }

        if (password !== confirmPassword) {
            return 'Las contraseñas no coinciden.';
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

export default RegisterViewModel;
