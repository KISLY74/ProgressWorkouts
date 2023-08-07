import { Text, SafeAreaView, ActivityIndicator } from 'react-native';
import Navigation from '../../components/Navigation';
import Statistic from './Statistic';
import { generalContainer, generalHeader } from '../../stylesheets/general';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../MainScreen/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themes from '../../config/themes';

const StatisticScreen = ({ navigation }) => {
  const { data } = useContext(Context)
  const [muslceGroup, setMuscleGroup] = useState("Жим гантелей на скамье")
  const [vals, setVals] = useState([])
  const [days, setDays] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async function () {
      await AsyncStorage.getAllKeys()
        .then((keys) => {
          keys = keys.filter(key => key[0] === '2')
          setDays(keys)

          data.clearCompleteExercises()

          keys && keys.map(async key => {
            await AsyncStorage.getItem(key)
              .then((dataRes) => {
                Object.entries(JSON.parse(dataRes)).map(([ex, approaches]) => {
                  if (ex === muslceGroup) {
                    data.setCompleteExercises(approaches.reduce((acc, it) => {
                      return acc + it.weight * it.times
                    }, 0))
                  }
                })
              })
            setVals(data.completeExercises)
          })
        })
        .finally(() => setIsLoading(true))
    }())
  }, [data])

  return <SafeAreaView style={generalContainer}>
    <Text style={generalHeader}>Статистика</Text>
    {isLoading && vals.length !== 0 ? <Statistic days={days} values={vals} />
      : <ActivityIndicator
        size="large"
        style={{ position: 'absolute', top: 230 }}
        color={themes.first.colors.rare} />}
    <Navigation navigation={navigation} route="StatisticScreen" />
  </SafeAreaView>
}

export default observer(StatisticScreen)