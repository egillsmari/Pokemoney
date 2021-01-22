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
  text: {
    fontSize: 23,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ffffff',
    top: 240,
  },
  title:{
    fontWeight: "600",
    position: "absolute",
    left: 75,
    top: 400,
    fontSize: 34,
    color: "white",
  },
  textContainer:{
    backgroundColor: '#fccb6f',
    width: '100%',
    height: 200,
  },
  nextButton:{
    color:"white",
    fontSize: 34,
    marginLeft:48,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer:{
    top:287,
    marginLeft: 64,
    marginRight: 74,
    width: 185,
    height: 150
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: "#FAAA6D",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#d5915d",
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  extraWrapper: {
    justifyContent: 'center',
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#ffc47d",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#ffc47d",
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});
