import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import themes from "../config/themes"
import Approache from "./Approache"
import { useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import FontAwIcon from "react-native-vector-icons/FontAwesome"
import { Button } from "@rneui/themed"
import { Context } from "../screens/MainScreen/MainScreen"
import Cancelcon from "react-native-vector-icons/MaterialIcons"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import ModalApproache from "./ModalApproache"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Approaches = ({ exercise, approaches }) => {
  const { data } = useContext(Context)
  const [visible, setVisible] = useState(false)

  async function removeApproache() {
    let dateNow = new Date().toISOString().slice(0, 10)
    await AsyncStorage.getItem(dateNow)
      .then(async (res) => {
        let newApproaches = [], currObj = {}
        currObj = JSON.parse(JSON.stringify(JSON.parse(res)))
        newApproaches = currObj[exercise]

        if (data.selectedApproaches[exercise]) {
          data.selectedApproaches[exercise].map(index => newApproaches.splice(index, 1))
          currObj[exercise] = newApproaches
          await AsyncStorage.setItem(dateNow, JSON.stringify(currObj))
        }
      })
  }

  return <View style={styles.container}>
    <Text style={styles.title}>{exercise}</Text>
    {data.getIsFormatting(exercise) && <TouchableOpacity
      style={styles.menu}
      onPress={() => data.setIsFormatting(exercise, false)}>
      <Cancelcon
        name="cancel"
        size={35}
        color={themes.first.colors.rare} />
    </TouchableOpacity>}
    {approaches && approaches.map((appr, ind) =>
      <Approache
        key={JSON.stringify(appr) + ind}
        exercise={exercise}
        appr={appr}
        ind={ind} />)}
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <Button
        containerStyle={{ width: '100%' }}
        buttonStyle={{ backgroundColor: themes.first.colors.veryDark }}
        icon={data.getIsFormatting(exercise) ? <FontAwIcon
          name="trash-o"
          color={themes.first.colors.rare}
          size={26}
          style={{ textAlign: 'center', height: 26 }} />
          : <AntDesignIcon
            name="pluscircle"
            color={themes.first.colors.rare}
            size={26}
            style={{ textAlign: 'center', height: 26 }} />}
        onPress={() => data.getIsFormatting(exercise) ? removeApproache() : setVisible(true)} />
    </View>
    <ModalApproache visible={visible} toggle={() => setVisible(!visible)} exercise={exercise} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.first.colors.light,
    borderRadius: 10,
    marginBottom: 10
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