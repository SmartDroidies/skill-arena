import React from 'react';
import { View, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.Header}>
            <View>
                <Text style={styles.headerText}>CourseScreen</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: '20',
        color: '#333',
        letterSpacing: '1',

    }

});