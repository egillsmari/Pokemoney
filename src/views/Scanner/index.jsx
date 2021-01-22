import React from 'react';
import {
	ActivityIndicator,
	Button,
	Clipboard,
	FlatList,
	Image,
	Share,
	Text,
	ScrollView,
  StyleSheet,
	TouchableOpacity,
	View,
	Picker
} from 'react-native';
import styles from './styles';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { selectFromCameraRoll, takePhoto } from '../../services/imageService';
import { visionGateway } from '../../services/visionService';
import { visionServiceStub } from '../../services/visionServiceStub';
import { filterService } from '../../services/filterService';
import { pokemonColorService } from '../../services/pokemonColorService';
import * as ImageManipulator from 'expo-image-manipulator';
import uuid from 'uuid';
import ImgToBase64 from 'react-native-image-base64';
import Environment from '../../../config/enviroment';
import LogoText from '../../components/logoText';


export default class App extends React.Component {
	state = {
		image: null,
		uploading: false,
		googleResponse: null,
		condition: "",
		filteredResponse: null,
	};


	render() {
		let { image, condition } = this.state;
		return (
					<View style={styles.container}>

					{this.renderUploadingOverlay()}
					<LogoText/>
					<Image source={require("../../styles/assets/pokeyandmoney.png")} style={styles.image}/>
					<Text style={styles.scanText}> Start Scanning </Text>
					<View style={styles.infoContainer}>
					<Text style={styles.text}> Card Condition </Text>
					<Picker style={{marginTop: -60}}
					  selectedValue={this.state.condition}
					  onValueChange={(itemValue, itemIndex) =>
					  this.setState({ condition: itemValue })
					}
					 >
					 	<Picker.Item label="Mint" value="Mint" />
					 	<Picker.Item label="Near Mint" value="Near-Mint" />
					 	<Picker.Item label="Good" value="Good" />
					 	<Picker.Item label="Played" value="Played" />
					 	<Picker.Item label="Damaged" value="Damaged" />
					</Picker>
					<Text style={styles.text}> Card Image </Text>
					<TouchableOpacity style={styles.cardImportSecond}
						onPress={ () => this.takePhoto() }
					>
					<Entypo name="camera" size={54} color="#bfe6fd" />
					</TouchableOpacity>
						<TouchableOpacity style={styles.cardImport}
							onPress={ () => this.selectFromCameraRoll() }
						>
						<Entypo name="folder-images" size={54} color="#bfe6fd" />
						</TouchableOpacity>
						{this.seePrices()}
						</View>
					</View>
		);
	}

	renderUploadingOverlay = () => {
		if (this.state.uploading) {
			return (
				<View
					style={[
						StyleSheet.absoluteFill,
						{
							backgroundColor: 'rgba(0,0,0,0.4)',
							alignItems: 'center',
							justifyContent: 'center'
						}
					]}
				>
					<ActivityIndicator color="#fff" animating size="large" />
				</View>
			);
		}
	};

	seePrices = () => {
		if (this.state.image && this.state.googleResponse){
			return (
				<View>
				<TouchableOpacity
				onPress={() => { this.props.navigation.navigate('CardPrice', {pokemonInfoJson: this.state.filteredResponse, pokemonImage: this.state.image }); }}
				>
				<View style={styles.buttonContainer}>
				<View style={styles.extraWrapper}>
				<View style={styles.wrapper}>
				<Text style={styles.buttonText}>Card Value</Text>
				</View>
				</View>
				</View>
				</TouchableOpacity>
				</View>
			)
		}
	}

	renderImage = () => {
		let { image, googleResponse } = this.state;
		if (!image) {
			return;
		}

		return (
			<View
				style={{
					marginTop: 20,
					width: "100%",
					height: "100%",
					borderRadius: 3,
					elevation: 2
				}}
			>
				<View
					style={{
						borderTopRightRadius: 3,
						borderTopLeftRadius: 3,
						shadowColor: 'rgba(0,0,0,1)',
						shadowOpacity: 0.2,
						shadowOffset: { width: 4, height: 4 },
						shadowRadius: 5,
						overflow: 'hidden'
					}}
				>
        {console.log(image)}

				</View>
			</View>
		);
	};

	keyExtractor = (item, index) => item.id;


  async takePhoto() {
      const pickerResult = await takePhoto();
      if (pickerResult.length > 0) {
        this.setState({ image: pickerResult})
      }
    this.handleImagePicked(pickerResult);
    }


    async selectFromCameraRoll() {
      const pickerResult = await selectFromCameraRoll();
      if (pickerResult.length > 0) {
        this.setState({ image: pickerResult})
      }
      this.handleImagePicked(pickerResult);
  }

	handleImagePicked = async pickerResult => {
		this.setState({ uploading: true });
		const { image, filteredResponse } = this.state;
		const responsefirst = await ImageManipulator.manipulateAsync(pickerResult, [], { base64: true })
		const imageBase = responsefirst.base64;

    const responseJson = await visionGateway(imageBase);
		//console.log("FROM GATEWAY:", responseJson)
		const filteredJsonResponse = await filterService(responseJson);
		this.setState({
			googleResponse: responseJson,
			uploading: false,
			filteredResponse: filteredJsonResponse,
		});
	};

}

/*
Not working properly because of some firebase exepctions
*/
async function uploadImageAsync(uri) {
	const blob = await new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function() {
			resolve(xhr.response);
		};
		xhr.onerror = function(e) {
			console.log(e);
			reject(new TypeError('Network request failed'));
		};
		xhr.responseType = 'blob';
		xhr.open('GET', uri, true);
		xhr.send(null);
	});

	const ref = ""
		.storage()
		.ref()
		.child(uuid.v4());
	const snapshot = await ref.put(blob);

	blob.close();

	return await snapshot.ref.getDownloadURL();
}
