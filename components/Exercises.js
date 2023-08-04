import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Approaches from "./Approaches"

const Exercises = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    (async function () {
      await AsyncStorage.getItem(new Date().toISOString().slice(0, 10))
        .then((data) => data && setExercises(Object.entries(JSON.parse(data))))
    }())
  }, [AsyncStorage])

  return <View>
    <Text style={styles.title}>Упражнения</Text>
    <View>
      {exercises && exercises.map(([name, items]) => {
        return <Approaches key={name} exercise={name} approaches={items} />
      })}
    </View>
  </View >
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10
  }
})

export default Exercises