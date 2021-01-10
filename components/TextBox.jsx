import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function TextBox(props) {
  const { label, onChange, required, email, value, password } = props;
  let { placeholder, name } = props;
  if (!placeholder) placeholder = label;
  if (!name) name = label;
  let textContentType = "name";
  if (email) textContentType = "emailAddress";
  if (password) textContentType = "password";
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>{label}</Text>
        <Text style={styles.required}>{required ? " *" : ""}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        clearButtonMode={"while-editing"}
        onChangeText={onChange}
        name={name}
        textContentType={textContentType}
        value={value}
        secureTextEntry={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: 5,
    marginVertical: 5,
  },
  text: {
    display: "flex",
    flexDirection: "row",
  },
  required: {
    color: "red",
  },
  input: {
    padding: 5,
    paddingLeft: 0,
  },
});

export default TextBox;
