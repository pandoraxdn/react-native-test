import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/*
 * Un hook en React es una función de JavaScript/TypeScript 
 * que permite acceder al estado y a los ciclos de vida de React, 
 * desde dentro de los componentes.
*/

export const VIContadorScreen = () => {

    const initialValor:number = 10;
    
    const [ valor, setValor ] = useState(initialValor);

    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.title }
            >
                Contador: { valor }
            </Text>
            <Button 
                title='+1'
                onPress={ () => setValor( valor +1 ) }
            />
            <Button 
                title='-1'
                onPress={ () => setValor( valor -1 ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center"
    },
    title:{
        textAlign: "center",
        fontSize: 40
    }
});

