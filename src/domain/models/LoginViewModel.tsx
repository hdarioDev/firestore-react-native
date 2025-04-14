import { useState } from "react";
import Toast from "react-native-toast-message";

type LoginFormValues = {
    email: string;
    password: string;
};

const LoginViewModel = () => {
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

    const onSubmit = () => {
        const valid = isValidForm();

        if (!valid) {
            Toast.show({
                type: 'error',
                text1: 'Error de inicio de sesión',
                text2: getErrorMessage(values),
            });
            return;
        }

        console.log('Login', JSON.stringify(values, null, 2));
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
