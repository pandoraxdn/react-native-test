import React from 'react';
import { View, Text } from 'react-native';

/*
 * La diferencia entre la exportación por defecto y la exportación 
 * con nombre en TypeScript y React Native es el número de exportaciones 
 * permitidas por módulo y la forma en que se importan:
 *
 * Exportación por defecto:
 *  Permite una sola exportación predeterminada por módulo. 
 *  Se puede importar con cualquier nombre que se elija.
 *
 * Exportación con nombre:
 *  Permite múltiples exportaciones con nombre por módulo. 
 *  Se importan utilizando sus nombres específicos entre llaves.
*/

interface Props{
    nombre: string
}

const NombreAlumno = ( {nombre}:Props ) => {
    return (
        <View>
            <Text>
                { nombre }
            </Text>
        </View>
    );
}

export const VComponenteBase = () => {

    const persona = {
        nombre:"Diana"
    }

    return(
        <View>
            <NombreAlumno 
                {...persona}
            />
            <NombreAlumno 
                nombre={persona.nombre}
            />
            <NombreAlumno 
                nombre='Diana'
            />
        </View>
    );
}
