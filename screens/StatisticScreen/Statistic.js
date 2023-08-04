import { View, Dimensions, StyleSheet, Text, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import themes from '../../config/themes';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Statistic = () => {

  useEffect(() => {
    // (async function () {
    //   await AsyncStorage.multiGet('2023-08-03')
    //     .then((data) => console.log("data: ", data))
    // }())
  }, [])

  return <SafeAreaView style={styles.container}>
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width * 0.95}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: themes.first.colors.medium,
          backgroundGradientTo: themes.first.colors.medium2,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#999"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
  }
});

export default Statistic