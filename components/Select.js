import { ListItem } from "@rneui/base"
import { useContext, useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Context } from "../screens/MainScreen/MainScreen"
import { observer } from "mobx-react-lite"
import SelectItem from "./SelectItem"
import ArrowIcon from "react-native-vector-icons/AntDesign"
import themes from "../config/themes"

const Select = ({ nameMuscle, setMuscleGroup }) => {
  const { data } = useContext(Context)
  const [tree, setTree] = useState(data.compositeEx)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    (async function () {
      data.clearCompositeEx()

      await AsyncStorage.getItem('initExercises')
        .then((dataRes) => {
          Object.entries(JSON.parse(dataRes)).map(([highgroup, muscleGroups]) => {
            Object.entries(muscleGroups).map(([muslceGroup, exercises]) => {
              exercises.map(ex => data.setCompositeEx(`${highgroup}->${muslceGroup}->${ex}`))
            })
          })
          setTree(data.compositeEx)
        })
    }())
  }, [])

  return <View style={styles.container}>
    <ListItem.Accordion
      key={JSON.stringify(tree)}
      containerStyle={{
        paddingVertical: 9,
        backgroundColor: themes.first.colors.veryDark,
      }}
      animation={{ duration: 200 }}
      content={
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{nameMuscle}</ListItem.Title>
        </ListItem.Content>
      }
      icon={<ArrowIcon name="downcircle" size={25} color={themes.first.colors.rare} />}
      isExpanded={expanded}
      onPress={() => setExpanded(!expanded)}>
      <View style={styles.containerList}>
        <ScrollView>
          {tree.map(item =>
            <SelectItem
              setMuscleGroup={setMuscleGroup}
              item={item}
              key={item}
            />)}
        </ScrollView>
      </View>
    </ListItem.Accordion >
  </View >
}

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    paddingHorizontal: 9,
    width: '100%',
  },
  title: {
    color: themes.first.colors.rare,
    fontWeight: 'bold',
    fontSize: 18
  },
  containerList: {
    maxHeight: 200,
    width: '100%',
    backgroundColor: themes.first.colors.light
  }
})

export default observer(Select)