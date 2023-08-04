import { ScrollView, StyleSheet, View } from "react-native"
import themes from "../../config/themes";
import exercises from "../../config/exercises"
import ListExercises from "../../components/ListExercises";
import Exercises from "../../components/Exercises";

const colors = themes.first.colors

const EditWorkouts = () => {
  return <View style={styles.container}>
    <View style={{ gap: 10, marginBottom: 10 }}>
      <ListExercises items={exercises.upperBody.breast} muscleGroup="Грудь" />
      <ListExercises items={exercises.upperBody.back} muscleGroup="Спина" />
      <ListExercises items={exercises.upperBody.biceps} muscleGroup="Бицепс" />
      <ListExercises items={exercises.upperBody.triceps} muscleGroup="Трицепс" />
    </View>
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