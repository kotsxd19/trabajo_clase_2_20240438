import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
//importamos el componente CustomCard que se encargará de mostrar la información de cada empleado
import CustomCard from "../components/CustomCard";
import CustomInput from "../components/CustomInput.jsx";
//importamos el hook useCustomData que se encargará de obtener la información de los empleados desde la API
import useCustomData from "../hooks/useCustomData";
import styles from "../styles/globalStyles.js"


const WorkersScreen = () => {
  //utilizamos el hook useCustomData para obtener la información de los empleados y el estado de loading
  const { workerData, loading } = useCustomData();
  const { search, setSearch} = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de empleados</Text>

      <Text style={styles.description}>
        En esta pantalla estamos mostrando la lista de empleados utilizando el
        componente FlatList de RReact Native. Cada empleado se representa
        mediante un CustomCard que muestra su nombre, trabajo y fecha de inicio.
      </Text>
        <CustomInput
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar empelado"
        />
      <FlatList
        data={workerData}
        renderItem={({ item }) => <CustomCard worker={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default WorkersScreen;

