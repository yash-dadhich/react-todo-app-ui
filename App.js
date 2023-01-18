import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Task from "./components/task"

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go */}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  items: {
    marginTop: 20,
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
})
