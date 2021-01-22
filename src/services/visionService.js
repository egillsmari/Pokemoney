import Environment from '../../config/enviroment';
export const visionGateway = async image => {
  let body = JSON.stringify({
    requests: [
      {
        image: {
          content: image
        },
        features: [
          { type: 'LABEL_DETECTION', maxResults: 10 },
          { type: 'LOGO_DETECTION', maxResults: 20 },
          { type: 'TEXT_DETECTION', maxResults: 2 },
          { type: 'DOCUMENT_TEXT_DETECTION', maxResults: 10 },
          { type: 'IMAGE_PROPERTIES', maxResults: 2 },
          { type: 'WEB_DETECTION', maxResults: 2 }
        ],
      }
    ]
  });
let response = await fetch(
  'https://vision.googleapis.com/v1/images:annotate?key=' +
    Environment['GOOGLE_CLOUD_VISION_API_KEY'],
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: body
  }
);
let responseJson = await response.json();
return responseJson;
}
