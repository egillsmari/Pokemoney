import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  svgCurve: {
    marginTop:200,
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  image: {
    position:'absolute',
    top: 150,
    width: 242,
    height: 200,
    right: 80
  },
  imageVector:{
    position:'absolute',
    top: 470,
    width: 212,
    height: 210,
    right: 130
  },
  title:{
    fontWeight: "600",
    position: "absolute",
    left: 95,
    top: 400,
    fontSize: 34,
    color: "white",
  },
  text: {
    fontSize: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ffffff',
    top: 150,
  },
  textContainer:{
    backgroundColor: '#92e8d3',
    width: '100%',
    height: 300,
  },
  nextButton:{
    color:"white",
    fontSize: 34,
    marginLeft:48,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer:{
    top:224,
    marginLeft: 164,
    marginRight: 44,
    width: 185,
    height: 150
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: "#92D1B3",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#7cb298",
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  extraWrapper: {
    justifyContent: 'center',
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#a8f0ce",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#a8f0ce",
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});
