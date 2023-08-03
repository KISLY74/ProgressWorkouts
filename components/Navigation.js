import { StyleSheet, View } from 'react-native';
import StatisticIcon from 'react-native-vector-icons/Ionicons';
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import themes from "../config/themes"

const Navigation = ({ navigation, route }) => {
  const setColor = (routeM) => route === routeM ? themes.first.colors.rare : "#fff"
  const setStyle = (routeM) => route === routeM ? styles.selectedRoute : styles.icon
  return (
    <View style={styles.container}>
      <View style={styles.navs}>
        <View style={styles.containerNav}>
          <StatisticIcon
            name="stats-chart-outline"
            size={35}
            color={setColor('StatisticScreen')}
            style={setStyle("StatisticScreen")}
            onPress={() => navigation.navigate('StatisticScreen')} />
        </View>
        <View style={styles.containerNav}>
          <MaterialCIcon
            name="home-outline"
            size={35}
            color={setColor('MainScreen')}
            style={setStyle("MainScreen")}
            onPress={() => navigation.navigate('MainScreen')} />
        </View>
        <View style={styles.containerNav}>
          <MaterialCIcon
            name="clipboard-edit-outline"
            size={35}
            color={setColor('EditScreen')}
            style={setStyle("EditScreen")}
            onPress={() => navigation.navigate('EditScreen')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 10,
  },
  navs: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    textAlign: 'center',
  },
  selectedRoute: {
    textAlign: 'center',
    borderRadius: 50,
    padding: 10,
  },
  containerNav: {
    flexBasis: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Navigation