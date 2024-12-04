import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 7,
  },

  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
