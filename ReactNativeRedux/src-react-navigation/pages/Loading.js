import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 171.77 160.96" style={styles.ellipse}>
            <Ellipse
              strokeWidth={12}
              fill="rgba(230, 230, 230,0)"
              stroke="rgba(0,0,0,1)"
              cx={86}
              cy={80}
              rx={80}
              ry={74}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 91.45 91.45" style={styles.ellipse2}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(0,0,0,1)"
              cx={46}
              cy={46}
              rx={45}
              ry={45}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.rect}></View>
        <View style={styles.rect1}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,0,0,1)"
  },
  ellipse: {
    top: 0,
    width: 172,
    height: 161,
    position: "absolute",
    left: 0
  },
  ellipse2: {
    top: 35,
    width: 91,
    height: 91,
    position: "absolute",
    left: 40
  },
  ellipseStack: {
    width: 172,
    height: 161,
    marginTop: 93,
    marginLeft: 102
  },
  rect: {
    width: 277,
    height: 10,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 102,
    alignSelf: "center"
  },
  rect1: {
    width: 277,
    height: 10,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 112,
    alignSelf: "center"
  }
});
