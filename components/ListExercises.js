import { useEffect, useState } from "react";
import { ListItem } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import ItemExercise from "./ItemExercise";
import themes from "../config/themes";
import ArrowIcon from "react-native-vector-icons/AntDesign"
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListExercises = ({ items, muscleGroup }) => {
  const [expanded, setExpanded] = useState(false)
  const [haveExercises, setHaveExercises] = useState([])

  useEffect(() => {
    (async function () {
      await AsyncStorage.getItem(new Date().toISOString().slice(0, 10))
        .then((data) => data && setHaveExercises(Object.keys(JSON.parse(data))))
    }())
  }, [])

  return (
    <ListItem.Accordion
      key={JSON.stringify(items)}
      animation={{ duration: 200 }}
      containerStyle={styles.mainList}
      content={
        <ListItem.Content>
          <ListItem.Title style={styles.mainList}>{muscleGroup}</ListItem.Title>
        </ListItem.Content>
      }
      icon={<ArrowIcon name="downcircle" size={30} color={themes.first.colors.rare} />}
      isExpanded={expanded}
      onPress={() => setExpanded(!expanded)}>
      <View style={styles.containerList}>
        {items.map(item =>
          <ItemExercise
            item={item}
            key={item}
            has={haveExercises.includes(item) ? true : false}
          />)}
      </View>
    </ListItem.Accordion >);
}

const styles = StyleSheet.create({
  containerList: {
    gap: 10,
    paddingHorizontal: 5
  },
  mainList: {
    borderRadius: 20,
    padding: 7,
    backgroundColor: themes.first.colors.veryDark,
    color: themes.first.colors.rare,
    fontWeight: 'bold',
    fontSize: 18
  },
})

export default ListExercises