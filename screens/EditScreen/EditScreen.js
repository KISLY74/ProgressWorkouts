import { Text, View } from "react-native"
import Navigation from "../../components/Navigation"
import { generalContainer } from "../../stylesheets/general"

const EditScreen = ({ navigation }) => {
  return <View style={generalContainer}>
    <Text>Edit page</Text>
    <Navigation navigation={navigation} route="EditScreen" />
  </View>
}


export default EditScreen