import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ViewStyle, TextStyle} from 'react-native';


interface DefaultButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

export const DefaultButton  = (
    { title, onPress, style = {}, textStyle = {}, disabled = false } : DefaultButtonProps
) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton, style]}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
        >
            <Text style={[styles.textButton, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#717FF0',
        padding: 12,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#B0B0B0',
    },
});
