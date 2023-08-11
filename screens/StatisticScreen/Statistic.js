import { View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import themes from '../../config/themes';

const Statistic = ({ days, values }) => {
  return <SafeAreaView style={styles.container}>
    <LineChart
      data={{
        labels: days,
        datasets: [
          {
            data: values
          }
        ]
      }}
      // withInnerLines={false}
      verticalLabelRotation={30}
      width={Dimensions.get("window").width * 0.95}
      height={320}
      yAxisSuffix="кг"
      chartConfig={{
        backgroundGradientFrom: themes.first.colors.medium,
        backgroundGradientTo: themes.first.colors.medium2,
        decimalPlaces: 2,
        propsForLabels: {
          fontWeight: 'bold'
        },
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
    />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontSize: 30,
  }
});

export default Statistic