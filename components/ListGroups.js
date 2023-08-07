import { View, StyleSheet } from "react-native"
import { ListItem } from "@rneui/base";
import themes from "../config/themes"
import { useState } from "react";
import ArrowIcon from "react-native-vector-icons/AntDesign"
import ListExercises from "./ListExercises";

const ListGroups = ({ groups, highgroupname }) => {
  const [expanded, setExpanded] = useState(false)

  return (<ListItem.Accordion
    key={JSON.stringify(groups) + highgroupname}
    animation={{ duration: 200 }}
    containerStyle={styles.mainList}
    content={
      <ListItem.Content>
        <ListItem.Title style={styles.mainList}>{highgroupname}</ListItem.Title>
      </ListItem.Content>
    }
    icon={<ArrowIcon name="downcircle" size={30} color={themes.first.colors.light} />}
    isExpanded={expanded}
    onPress={() => setExpanded(!expanded)}>
    <View style={styles.containerList}>
      {groups && groups.map(item =>
        <ListExercises
          muscleGroup={item[0]}
          items={item[1]}
          key={item} />)}
    </View>
  </ListItem.Accordion >);
}

const styles = StyleSheet.create({
  containerList: {
    gap: 10,
    paddingHorizontal: 3
  },
  mainList: {
    borderRadius: 50,
    padding: 9,
    backgroundColor: themes.first.colors.medium,
    color: themes.first.colors.light,
    fontWeight: 'bold',
    fontSize: 20
  },
})

export default ListGroups