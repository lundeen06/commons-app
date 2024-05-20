import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { DiningCapacity } from "../components/DiningCapacity";
import { MenuPreview } from "../components/MenuPreview";
import { WalkingDistance } from "../components/WalkingDistance";
import { ViewMenu } from "../components/ViewMenu";
import { Images, Colors, auth } from "../config";



export const HomeScreen = ({ navigation }) => { // Destructure navigation from props
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const user = {
    firstName: "Max",
    recommendedDiningHall: "Bartlett Dining Commons",
  };

  return (
    <>
      <View style={styles.main}>
        {/* <Button title="Sign Out" onPress={handleLogout} /> */}
        {/* <Text> home </Text> */}
        <View style={styles.greeting}>
          <Text style={styles.h1}>Hello, {user.firstName}!</Text>
          <Text style={styles.subtitle}>See your dining options today!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.imageContainer}>
          <Image source={require('../assets/map.png')} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.h5}>Suggested: {user.recommendedDiningHall} </Text>
          <View style={styles.infoContainer}>
            <MenuPreview />
            <DiningCapacity user={user} />
            <WalkingDistance />
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <ViewMenu />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer navigation={navigation} currentScreen={'Home'} style={styles.footer}/>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
    justifySelf: 'flex-start',
  },
  greeting: {
    width: '100%',
    // marginLeft: 50,
  },
  h1: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.font,
  },
  h5: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.subtitle,
  },
  info: {
    height: 300,
    // height: '100%',
    // width: '100%',
    // marginLeft: 25,
    // marginRight: 25,
  },
  infoContainer: {
    flex: 2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: 20,
    marginTop: 10,
  },
  subtitle: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
  image: {
    // paddingLeft: 10,
    height: 256,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  imageContainer: {
    width: 'calc(100% - 40px)',
    // marginLeft: 20,
    // marginRight: 20,
  }
});
