import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("..."); // Mapbox needs this line, you don't need a mapbox token.

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  ".mapboxgl-ctrl-logo": {
    display: "none",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },

  absolute: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 10000,
    // height: '100%',
    // width: 20,
  },

  logo: {
    flex: 1,
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
});

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView
            styleURL="https://api.baato.io/api/v1/styles/breeze?key=YOU_BAATO_ACCESS_TOKEN_HERE"
            style={styles.map}
            logoEnabled={false}
            attributionEnabled={false}
          >
            <MapboxGL.Camera
              zoomLevel={12}
              centerCoordinate={[85.31853583740946, 27.701739466949107]}
            />
          </MapboxGL.MapView>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://baato.io");
            }}
            style={styles.absolute}
          >
            <Image
              source={require("./logo.png")}
              style={styles.logo}
              resizeMode="center"
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
