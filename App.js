import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
			<View style={styles.container}>
				<Text>test앱 생성</Text>
			</View>
		);
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})