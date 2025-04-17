import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface BackButtonProps {
    color?: string;
    size?: number;
    customOnPress?: () => void;
}

export const BackButton = ({ color = '#717FF0', size = 24, customOnPress }: BackButtonProps) => {
    const router = useRouter();

    const handleBack = () => {
        if (customOnPress) {
            customOnPress();
        } else {
            router.back();
        }
    };

    return (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={size} color={color} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 40,
        left: 20,
        zIndex: 10,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 50,
    },
});
