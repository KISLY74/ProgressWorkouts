import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import themes from "../config/themes"

const SelectItem = ({ item, setMuscleGroup }) => {
  return <TouchableOpacity onPress={() => setMuscleGroup(item.split('->')[2])}>
    <View style={styles.container}>
      <Text style={{
        color: themes.first.colors.light,
        fontWeight: 'bold'
      }}>{item}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    paddingVertical: 15,
    backgroundColor: themes.first.colors.rare,
    width: '100%',
    borderWidth: 0.4,
    borderRightWidth: 0,
    borderLeftWidth: 0
  }
})

export default SelectItem