import { useState } from "react";
import { ListItem } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import ItemExercise from "./ItemExercise";
import themes from "../config/themes";
import ArrowIcon from "react-native-vector-icons/AntDesign"

const ListExercises = ({ items, muscleGroup }) => {
  // const { data } = useContext(Context)
  const [expanded, setExpanded] = useState(false)

  // useEffect(() => {
  //   if (!data.isExpanded)
  //     setTimeout(() => setExpanded(false), 400)
  // }, [data.isExpanded])

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
      icon={<ArrowIcon name="downcircle" size={30} color={themes.first.colors.light} />}
      isExpanded={expanded}
      onPress={() => setExpanded(!expanded)}>
      <View style={styles.containerList}>
        {items.map(item => <ItemExercise item={item} key={item} />)}
      </View>
    </ListItem.Accordion >);
}

const styles = StyleSheet.create({
  containerList: {
    gap: 10
  },
  mainList: {
    borderRadius: 50,
    backgroundColor: themes.first.colors.medium,
    color: themes.first.colors.light,
    fontWeight: 'bold',
    fontSize: 18
  },
})

export default ListExercises