import { Text, View } from "react-native"
import Navigation from "../../components/Navigation"
import { generalContainer } from "../../stylesheets/general"

const StatisticScreen = ({ navigation }) => {
  return <View style={generalContainer}>
    <Text>Statistic page</Text>
    <Navigation navigation={navigation} route="StatisticScreen" />
  </View>
}

export default StatisticScreen