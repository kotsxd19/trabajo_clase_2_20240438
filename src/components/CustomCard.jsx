//Custom card para mostrar la información

//los imports que traen los componentes nativos de react native
import { Text, View } from "react-native";
import styles from "../styles/globalStyles.js"


/**https://retoolapi.dev/GH2Ivb/dataMovil
 * 
 * 
 * "id": 1,
    "name": "Katerine Schirak",
    "work": "Building Materials",
    "work_since": "Apr 6, 2026 6:19 PM"
 */

//recibimos worker como props, el cual será el objeto que contiene la información del empleado que queremos mostrar en la tarjeta

const CustomCard = ({ worker }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{worker.name}</Text>
      <Text style={styles.work}>{worker.work}</Text>
      <Text style={styles.work_since}>{worker.work_since}</Text>
    </View>
  );
};

export default CustomCard;

