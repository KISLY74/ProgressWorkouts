import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import themes from "../config/themes"
import Approache from "./Approache"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import FontAwIcon from "react-native-vector-icons/FontAwesome"
import { Button } from "@rneui/themed"
import { Context } from "../screens/MainScreen/MainScreen"
import Cancelcon from "react-native-vector-icons/MaterialIcons"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import ModalApproache from "./ModalApproache"

const Approaches = ({ exercise, approaches }) => {
  const { data } = useContext(Context)
  const [visible, setVisible] = useState(false)

  return <View style={styles.container}>
    <Text style={styles.title}>{exercise}</Text>
    {data.isFormatting && <TouchableOpacity
      style={styles.menu}
      onPress={() => data.setIsFormatting(false)}>
      <Cancelcon
        name="cancel"
        size={35}
        color={themes.first.colors.rare} />
    </TouchableOpacity>}
    {approaches && approaches.map((appr, ind) =>
      <Approache
        key={JSON.stringify(appr) + ind}
        appr={appr}
        ind={ind} />)}
    <View style={{ flexDirection: 'row', width: '100%' }}>
      {data.isFormatting ?
        <Button
          containerStyle={{ width: '100%' }}
          buttonStyle={{ backgroundColor: themes.first.colors.veryDark }}
          icon={<FontAwIcon
            name="trash-o"
            color={themes.first.colors.rare}
            size={26}
            style={{ textAlign: 'center', height: 26 }} />} />
        : <Button
          containerStyle={{ width: '100%' }}
          buttonStyle={{ backgroundColor: themes.first.colors.veryDark }}
          onPress={() => setVisible(true)}
          icon={<AntDesignIcon
            name="pluscircle"
            color={themes.first.colors.rare}
            size={26}
            style={{ textAlign: 'center', height: 26 }} />} />}
    </View>
    <ModalApproache visible={visible} toggle={() => setVisible(!visible)} exercise={exercise} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.first.colors.light,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: themes.first.colors.veryDark,
    color: themes.first.colors.rare,
    padding: 10,
    fontSize: 20
  },
  menu: {
    position: 'absolute',
    right: 6,
    top: 5
  }
})

export default observer(Approaches)