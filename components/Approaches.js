import { StyleSheet, Text, View } from "react-native"
import themes from "../config/themes"
import Approache from "./Approache"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
// import AntIcon from "react-native-vector-icons/AntDesign"
import FontAwIcon from "react-native-vector-icons/FontAwesome"
import { Button } from "@rneui/themed"
import { Context } from "../screens/MainScreen/MainScreen"
import EntypoIcon from "react-native-vector-icons/Entypo"

const Approaches = ({ exercise, approaches }) => {
  const { data } = useContext(Context)

  return <View style={styles.container}>
    <Text style={styles.title}>{exercise}</Text>
    <EntypoIcon
      style={styles.menu}
      name="dots-three-vertical"
      size={25}
      color={themes.first.colors.rare} />
    {
      approaches && approaches.map((appr, ind) =>
        <Approache
          key={JSON.stringify(appr) + ind}
          appr={appr}
          ind={ind} />)
    }
    <View style={{ flexDirection: 'row', width: '100%' }}>
      {/* <Button
        containerStyle={{ width: '50%' }}
        buttonStyle={{ backgroundColor: themes.first.colors.veryDark }}
        icon={<AntIcon
          name="edit"
          color={themes.first.colors.rare}
          size={25}
          style={{ textAlign: 'center', height: 25 }} />} /> */}
      {data.isFormatting && <Button
        containerStyle={{ width: '100%' }}
        buttonStyle={{ backgroundColor: themes.first.colors.veryDark }}
        icon={<FontAwIcon
          name="trash-o"
          color={themes.first.colors.rare}
          size={25}
          style={{ textAlign: 'center', height: 25 }} />} />} 
    </View>
  </View >
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
    right: 4,
    top: 10
  }
})

export default observer(Approaches)