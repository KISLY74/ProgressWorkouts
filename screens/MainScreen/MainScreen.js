import { Text, View } from "react-native"
import Navigation from "../../components/Navigation"
import { generalContainer, generalHeader } from "../../stylesheets/general"

const MainScreen = ({ navigation }) => {
  return <View style={generalContainer}>
    <Text style={generalHeader}>Добро пожаловать</Text>
    <Navigation navigation={navigation} route="MainScreen" />
  </View>
}

export default MainScreen