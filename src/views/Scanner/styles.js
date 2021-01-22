import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
container: {
  width: "100%",
  height: 600,
  backgroundColor: "#bfe6fd"
},
image:{
  marginLeft: 4,
  opacity: 0.2,
  width: 420,
  height: 240,
},
infoContainer: {
  backgroundColor: "#ffffff",
  width: "100%",
  height: 600,
  marginTop: 100,
  shadowOffset: { width: 2, height: 2 },
  shadowRadius: 2,
  shadowOpacity: 1,
  borderRadius: 60,
},
cardImport:{
  width: 100,
  height: 100,
  marginLeft: 120,
  marginTop: -100,
  padding: 10,
},
cardImportSecond:{
  width: 100,
  color: "#bfe6fd",
  height: 100,
  marginTop: 20,
  marginLeft: 250,
  padding: 10,
},
text: {
  color: "#bfe6fd",
  fontWeight: "600",
  marginTop: 20,
  fontSize: 25,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
},
scanText:{
  marginLeft: 52,
  fontSize: 46,
  top: 410,
  fontWeight: "600",
  color: "#ffffff",
  position: "absolute"
},
buttonText:{
  color: "white",
  fontWeight: "600",
  fontSize: 28,
},
buttonContainer:{
  top:-10,
  marginLeft: 135,
  width: 165,
  height: 290
},
wrapper: {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderRadius: 50,
  backgroundColor: "#bfe6fd",
  shadowOffset: { width: 2, height: 2 },
  shadowColor: "#bfe6fd",
  shadowRadius: 8,
  shadowOpacity: 1,
},
extraWrapper: {
  justifyContent: 'center',
  margin: 10,
  borderRadius: 50,
  backgroundColor: "#bfe6fd",
  shadowOffset: { width: 0, height: 0 },
  shadowColor: "#bfe6fd",
  shadowRadius: 5,
  shadowOpacity: 1,
}
});
