import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import themes from "../config/themes"
import { useContext, useState } from "react"
import SelectIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { observer } from "mobx-react-lite"
import { Context } from "../screens/MainScreen/MainScreen"

const unselectedIcon = 'checkbox-blank-circle-outline',
  selectedIcon = 'checkbox-marked-circle'

const Approache = ({ appr, ind }) => {
  const { data } = useContext(Context)
  const [nameIcon, setNameIcon] = useState(unselectedIcon)

  function selectApproache() {
    if (data.isFormatting) {
      nameIcon === unselectedIcon ? setNameIcon(selectedIcon) : setNameIcon(unselectedIcon)
    }
  }

  return <TouchableOpacity
    onLongPress={() => data.setIsFormatting(true)}
    activeOpacity={0.5}
    onPress={selectApproache}
  >
    <View key={appr + ind} style={styles.approacheContainer}>
      {!data.isFormatting ? <Text style={styles.otherText}>{ind + 1}-й.</Text>
        : <SelectIcon name={nameIcon} size={25} color={themes.first.colors.rare} />}
      <Text style={styles.textItem}>{appr.times} раз</Text>
      <Text style={styles.otherText}>-</Text>
      <Text style={styles.textItem} key={appr}>{appr.weight} кг</Text>
    </View>
  </TouchableOpacity >
}

const styles = StyleSheet.create({
  approacheContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  otherText: {
    alignSelf: 'center',
    fontSize: 20,
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textItem: {
    textAlign: 'center',
    fontSize: 16,
    width: 80,
    backgroundColor: themes.first.colors.medium,
    borderRadius: 50,
    padding: 10,
    color: '#fff'
  }
})

export default observer(Approache)