import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
export default function PrimaryButtons({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: "#72063e",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  viewContainer: {
    borderRadius: 20,
    width: 100,
    padding: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
