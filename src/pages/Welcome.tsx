import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        if (!visible) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.img} />
            }

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title='Imagem' onPress={handleVisibility} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        color: colors.heading,
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 38,
        textAlign: 'center',
    },
    subtitle: {
        color: colors.heading,
        fontSize: 18,
        paddingHorizontal: 28,
        textAlign: 'center'
    },
    img: {
        height: 284,
        width: 292
    },
})