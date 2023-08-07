import { ScrollView, StyleSheet, View, ActivityIndicator } from "react-native"
import themes from "../../config/themes";
import Exercises from "../../components/Exercises";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListGroups from "../../components/ListGroups";

const colors = themes.first.colors

const EditWorkouts = () => {
  const [tree, setTree] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async function () {
      await AsyncStorage.getItem('initExercises')
        .then((data) => setTree(JSON.parse(data)))
        .finally(() => setIsLoading(true))
    }())
  }, [])

  return <View style={styles.container}>
    {isLoading ? <View style={{ gap: 10, marginBottom: 10 }}>
      {tree && Object.keys(tree).map(highgroup =>
        <ListGroups
          key={highgroup}
          groups={Object.entries(tree[highgroup])}
          highgroupname={highgroup} />
      )}
    </View> : <ActivityIndicator
      size="large"
      style={{ margin: 50 }}
      color={themes.first.colors.rare} />}
    <ScrollView>
      <Exercises />
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%'
  },
  text: {
    fontSize: 30,
  },
  btn: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: colors.light
  },
  date: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  title: {
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
    color: colors.light,
    fontSize: 34,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
});

export default EditWorkouts