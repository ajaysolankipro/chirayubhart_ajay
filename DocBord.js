import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
//import { Theme } from "../../../constants/";
import DocProfile from "./DocProfile";


export default function DocBord({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={Theme.colors.primary}
				hidden={false}
				translucent={false}
			/>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("DocProStack");
				}}
			>
				<DocProfile />
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	profileCard: {},
});
