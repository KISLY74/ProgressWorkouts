import { StyleSheet, Text, View } from "react-native"
import themes from "../config/themes"

const Approaches = ({ exercise, approaches }) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{exercise}</Text>
    {approaches && approaches.map((appr, ind) =>
      <View key={appr + ind} style={styles.approacheContainer}>
        <Text style={styles.otherText}>{ind + 1}-й.</Text>
        <Text style={styles.textItem}>{appr.times} раз</Text>
        <Text style={styles.otherText}>-</Text>
        <Text style={styles.textItem} key={appr}>{appr.weight} кг</Text>
      </View>)}
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.first.colors.light,
    borderRadius: 10,
    margin: 5,
  },
  otherText: {
    alignSelf: 'center',
    fontSize: 20,
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: themes.first.colors.veryDark,
    color: themes.first.colors.rare,
    padding: 10,
    fontSize: 20
  },
  approacheContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
    padding: 10,
  },
  textItem: {
    textAlign: 'center',
    fontSize: 16,
    width: 80,
    backgroundColor: themes.first.colors.medium,
    borderRadius: 50,
    padding: 10,
    color: '#fff'
  }
})

export default Approaches