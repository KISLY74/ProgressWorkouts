import { Dialog } from "@rneui/themed"
import { StyleSheet, Text, TextInput, View } from "react-native"
import themes from "../config/themes"
import { useState } from "react"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ModalApproache = ({ visible, toggle, exercise }) => {
  const [weight, setWeight] = useState(0)
  const [times, setTimes] = useState(0)
  const [isShow, setIsShow] = useState(false)

  async function addApproache() {
    let dateStr = new Date().toISOString().slice(0, 10)

    await AsyncStorage.getItem(dateStr)
      .then(async data => {
        let approache = {
          weight,
          times
        }

        if (!data) {
          await AsyncStorage.setItem(dateStr, JSON.stringify({
            [exercise]: [approache]
          }))
        } else {
          await AsyncStorage.getItem(dateStr)
            .then(async data => {
              let exercises = {
                ...JSON.parse(data)
              }
              if (JSON.parse(data).hasOwnProperty(exercise)) {
                exercises[exercise].push(approache)
                await AsyncStorage.setItem(dateStr, JSON.stringify(exercises))
              } else {
                exercises[exercise] = [approache]
                await AsyncStorage.setItem(dateStr, JSON.stringify(exercises))
              }
            })
        }
      })

      setWeight(0)
      setTimes(0)
    setIsShow(true)

    setTimeout(() => {
      toggle()
      setIsShow(false)
    }, 600)
  }

  return <Dialog
    overlayStyle={styles.container}
    isVisible={visible}
    onBackdropPress={toggle}
  >
    <Dialog.Title title={exercise} titleStyle={{ fontSize: 22 }} />
    <View style={styles.approache}>
      <View style={styles.approacheContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(text) => setTimes(text)}
            style={styles.input} />
          <Text style={styles.subText} >раз</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(text) => setWeight(text)}
            style={styles.input} />
          <Text style={styles.subText}>кг</Text>
        </View>
      </View>
    </View>
    <Dialog.Button
      containerStyle={styles.containerBtn}
      style={styles.contentBtn}
      titleStyle={{ fontSize: 20 }}
      title={!isShow && 'Добавить'}
      icon={isShow && <AntDesignIcon
        name="checkcircle"
        size={30}
        color={themes.first.colors.rare} />}
      onPress={addApproache} />
  </Dialog >
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.first.colors.light
  },
  approache: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  approacheContent: {
    gap: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  input: {
    padding: 5,
    width: 50,
    textAlign: 'center',
    color: themes.first.colors.light,
    backgroundColor: themes.first.colors.medium,
    // backgroundColor: themes.first.colors.dark,
    fontSize: 20,
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
  },
  containerBtn: {
    backgroundColor: '#000',
  },
})

export default ModalApproache