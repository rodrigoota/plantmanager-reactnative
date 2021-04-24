import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
    return (
        <TouchableOpacity
            style={staaile.button}
            activeOpacity={0.7}
            {...rest}
            >

            <Text style={staaile.buttonText}>
                { title }
            </Text>

        </TouchableOpacity>
    )
}

const staaile = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }

})
