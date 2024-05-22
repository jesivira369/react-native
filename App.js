import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoal] = useState([])
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const addGoalHandler = () => {
    if (enteredGoalText === '') {
      return
    }
    setGoal(currentGoals => [...currentGoals, enteredGoalText])
    setEnteredGoalText('')
    setOpenModal(false)
  }

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const removeGoalHandler = (goalIndex) => {
    setGoal(currentGoals => {
      return currentGoals.filter((goal, index) => index !== goalIndex);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setOpenModal(true)}
        />
        <GoalInput
          goalInputHandler={goalInputHandler}
          enteredGoalText={enteredGoalText}
          addGoalHandler={addGoalHandler}
          openModal={openModal}
          onClose={() => setOpenModal(false)}
        />
        <View style={styles.goalsContainer}>
          <Text style={styles.text} >Course Goals List</Text>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item}
                  index={itemData.index}
                  onDelete={removeGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 5,
    flex: 3,
    margin: 5
  },
  goalsContainer: {
    flex: 4,
  },
  goalsContainer: {
    flex: 4,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  }
});
