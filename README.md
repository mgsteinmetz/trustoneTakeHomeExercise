## My App Introduction

This is an app created using React. Designed for the company Trustone Financial Credit Union in part of an interview. 

This app presents a user with a simple form where they are able to enter either a County PIN (property identification number), street number, or street name. 

The app will then return the user with multiple responses, in which align with the users search criteria. These responses will return various output fields including: Owner name, Property address, County name, and Estimated property value.

# Metro Regional Parcel API

This app generates properties that are being pulled from the Metro Regional Parcel API.

Reference Metro Parcel API below:

## API Base URL: 
https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0

## API Metadata: 
https://resources.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metrogis/plan_regional_parcels/metadata/metadata.html

## API Technical Documentation: 
https://arcgis.metc.state.mn.us/server/sdk/rest/index.html#/Query_Feature_Service_Layer/02ss0000002r000000/

# My App in Action

Below I have included a few screen captures to show the UI of the application and how it functions.

Here you can see the static state of my application:

![Screen Shot 2022-08-13 at 12 13 03 AM](https://user-images.githubusercontent.com/77464741/184470042-57f6629d-8c41-478c-8b7f-772a5c562fb5.png)

Here you can see when a user searched with a County PIN, the app will return desired property:

![Screen Shot 2022-08-13 at 12 16 49 AM](https://user-images.githubusercontent.com/77464741/184470070-e3b85940-28a1-4ad1-bb7d-794c846bcb92.png)


Here is showing my app when a user searches using a street number, and returning all properties in the Metro area with that exact street number:

![Screen Shot 2022-08-13 at 12 18 05 AM](https://user-images.githubusercontent.com/77464741/184470109-504f41f6-163e-43cd-89b0-0eecf8454aed.png)

Finally this is showing all the outputs when a user searches using a street name:

![Screen Shot 2022-08-13 at 12 21 00 AM](https://user-images.githubusercontent.com/77464741/184470132-c9db0956-9539-4195-ba8f-d48232155750.png)
