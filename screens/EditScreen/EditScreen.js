import { Text, View } from "react-native"
import Navigation from "../../components/Navigation"
import { generalContainer, generalHeader } from "../../stylesheets/general"
import EditWorkouts from "./EditWorkouts"

const EditScreen = ({ navigation }) => {
  return <View style={generalContainer}>
    <Text style={generalHeader}>Тренировка</Text>
    <EditWorkouts />
    <Navigation navigation={navigation} route="EditScreen" />
  </View>
}


export default EditScreen