import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from '../../components/Navigation';
import Statistic from './Statistic';
import themes from '../../config/themes';
import { generalContainer, generalHeader } from '../../stylesheets/general';

const StatisticScreen = ({ navigation }) => {
  return <SafeAreaView style={generalContainer}>
    <Text style={generalHeader}>Статистика</Text>
    <Statistic />
    <Navigation navigation={navigation} route="StatisticScreen" />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
  }
});

export default StatisticScreen