import { View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import themes from '../../config/themes';

const Statistic = ({ days, values }) => {
  return <SafeAreaView style={styles.container}>
    <View>
      <LineChart
        data={{
          labels: days,
          datasets: [
            {
              data: values
            }
          ]
        }}
        width={Dimensions.get("window").width * 0.95}
        height={220}
        yAxisLabel=""
        yAxisSuffix="кг"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: themes.first.colors.medium,
          backgroundGradientTo: themes.first.colors.medium2,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: '#999'
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
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