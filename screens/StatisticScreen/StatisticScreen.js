import { Text, SafeAreaView, ActivityIndicator, View } from 'react-native';
import Navigation from '../../components/Navigation';
import Statistic from './Statistic';
import { generalContainer, generalHeader } from '../../stylesheets/general';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../MainScreen/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Select from '../../components/Select';

const StatisticScreen = ({ navigation }) => {
  const { data } = useContext(Context)
  const [muslceGroup, setMuscleGroup] = useState("Жим гантелей на скамье")
  const [vals, setVals] = useState(data.completeExercises)
  const [days, setDays] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isData, setIsData] = useState(false)

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
                  if (JSON.parse(dataRes).hasOwnProperty(muslceGroup)) {
                    setIsData(true)
                    if (ex === muslceGroup) {
                      data.setCompleteExercises(approaches.reduce((acc, it) => {
                        return acc + it.weight * it.times
                      }, 0))
                    }
                  }
                })
              })
            setVals(data.completeExercises)
          })

          if (keys && keys.every(async key => {
            await AsyncStorage.getItem(key).then((dataRes) => JSON.parse(dataRes).hasOwnProperty(muslceGroup))
          })) setIsData(false)

        }).finally(() => setIsLoading(true))
    }())
  }, [data, muslceGroup])

  return <SafeAreaView style={generalContainer}>
    <Text style={generalHeader}>Статистика</Text>
    <View style={{ width: '100%', alignItems: 'center', flexGrow: 1 }}>
      {isData && vals.length !== 0 ?
        <Statistic days={days} values={vals} /> :
        <Text style={{
          color: '#fff',
          margin: 40,
          marginVertical: 92,
          fontSize: 20,
          textAlign: 'center'
        }}>Нет данных по этому упражнению...</Text>}
      <Select nameMuscle={muslceGroup} setMuscleGroup={setMuscleGroup} />
    </View>
    <Navigation navigation={navigation} route="StatisticScreen" />
  </SafeAreaView >
}

export default observer(StatisticScreen)