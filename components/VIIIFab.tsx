import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props{
    title: string;
    position: 'button_right' | 'button_left';
    onPress: () => void;
}

export const VIIIFab = ( { title, position, onPress }:Props ) => {

    const btnPosition = ( position == 'button_right' )
                        ? style.fabLocationBR
                        : style.fabLocationBL;

    return(
        <TouchableOpacity
            onPress={ onPress }
            style={ btnPosition }
        >
            <View
                style= { style.fab }
            >
                <Text
                    style={ style.fabText }
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    fabLocationBR:{
        botom: 25,
        right: 25,
        position: "absolute"
    },
    fabLocationBL:{
        botom: 25,
        left: 25,
        position: "absolute",
    },
    fab:{
        backgroundColor: "violet",
        borderRadius: 100,
        height: 60,
        justifyContent: "center",
        width: 60,
    },
    fabText:{
        alignSelf: "center",
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    }
});
