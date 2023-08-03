import { Text, View } from "react-native"
import Navigation from "../../components/Navigation"
import { generalContainer } from "../../stylesheets/general"

const MainScreen = ({ navigation }) => {
  return <View style={generalContainer}>
    <Text>Main page</Text>
    <Navigation navigation={navigation} route="MainScreen" />
  </View>
}

export default MainScreen