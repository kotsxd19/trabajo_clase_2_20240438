import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import styles from "../styles/globalStyles.js"


const CustomInput = ({value, onChangeText, placeholder = "Buscar cliente... "}) => {
    return(
        <View>
            <TextInput
            placeholder={placeholder}
            placeholderTextColor="#999"
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    )
}

export default CustomInput