import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
    button: {
      backgroundColor: "#FFCB05",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: "#3B4CCA",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      work: {
        fontSize: 16,
    
        marginBottom: 5,
      },
      work_since: {
        fontSize: 14,
        color: "#666",
      },

      container: {
        flex: 1,
        backgroundColor: "#791010",
        padding: 20,
      },
      title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
      },
      description: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 20,
        fontWeight: "semibold",
      },

  });

export default styles

