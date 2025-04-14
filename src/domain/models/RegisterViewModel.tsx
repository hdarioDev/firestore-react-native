import { useState } from "react";
import Toast from "react-native-toast-message";

type RegisterFormValues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const RegisterViewModel = () => {
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

    const onSubmit = () => {
        const valid = isValidForm();

        if (!valid) {
            Toast.show({
                type: 'error',
                text1: 'Error de registro',
                text2: getErrorMessage(values),
            });
            return;
        }

        console.log('Registro exitoso', JSON.stringify(values, null, 2));
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
