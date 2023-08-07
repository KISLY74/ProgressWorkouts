import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import SelectIcon from "react-native-vector-icons/AntDesign"
import themes from "../config/themes"
import { useState } from "react"
import ModalApproache from "./ModalApproache"

const ItemExercise = ({ item, has }) => {
  const [isSelected, setIsSelected] = useState(has)
  const [visible, setVisible] = useState(false)

  function addExercise() {
    setIsSelected(true)
    setVisible(true)
  }

  return <TouchableOpacity onPress={addExercise}>
    <View
      style={[styles.container, isSelected ? styles.selectedContainer : styles.unSelectedContainer]}>
      <Text
        style={[styles.text, isSelected && styles.selectedText]}>{item}</Text>
      <SelectIcon
        name={!isSelected ? "pluscircleo" : "checkcircle"}
        size={30}
        color={isSelected ? themes.first.colors.rare : '#000'} />
    </View>
    <ModalApproache visible={visible} toggle={() => setVisible(!visible)} exercise={item} />
  </TouchableOpacity >
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  selectedContainer: {
    backgroundColor: themes.first.colors.veryDark,
  },
  unSelectedContainer: {
    backgroundColor: themes.first.colors.light
  },
  selectedText: {
    color: themes.first.colors.rare
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    maxWidth: '90%'
  }
})

export default ItemExercise