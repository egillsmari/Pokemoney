import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  svgCurve: {
    marginTop:200,
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  logo:{
    marginTop:100,
    marginLeft:15,
    width:410,
    height:60
  },
  title:{
    fontWeight: "600",
    position: "absolute",
    left: 25,
    top: 410,
    fontSize: 34,
    color: "white",
  },
  infoText:{
    position: "absolute",
    fontWeight: "600",
    left: 60,
    width: 320,
    top: 500,
    fontSize: 25,
    color: "white",
  },
  infoTextSecond:{
    position: "absolute",
    fontWeight: "600",
    left: 40,
    width: 370,
    top: 530,
    fontSize: 25,
    color: "white",
  },

  image: {
    position:'absolute',
    top: 150,
    width: 300,
    height: 200,
    right: 40
  },
  text: {
    fontSize: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ffffff',
    marginTop: 50,
  },
  textContainer:{
    backgroundColor: '#ffd654',
    width: '100%',
    height: 240,
  },
  nextButton:{
    color:"white",
    fontSize: 34,
    marginLeft:48,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer:{
    top:270,
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
    backgroundColor: "#F4DE7B",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#d9b257",
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  extraWrapper: {
    justifyContent: 'center',
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#d9b257",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#d9b257",
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});
