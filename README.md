# TruStone Software Engineer Interview Takehome Activity

## Requirements
I would like you to build a simple web application that does the following:
- Presents a form to the user to enter in a County PIN (property identification number);
- On submission the form should initiate a query to the metro regional parcel API (see below);
- Once the data is returned from the metro regional parcel API, it should display the following to the user:
  - Owner Name
  - Address of the Property (including full street, city, state and zip)
  - County Name
  - Estimated Property Value


### Optional
- Allow the user to search by street number and street name
- Return a list when there are multiple responses with the ability to redirect to a page to display

## On Completion

Please create a GitHub repository and commit the project to that repository.  Email me the location of the repository.

## Additional Notes/Considerations

This activity is centered mainly around the ability to transform data and work with APIs.  As such I am looking more for functionality than flash.  No need to agonize over small details on the front end.

While I personally am most familiar with Javascript and Python, this is a framework and language agnostic activity - feel free to use what suits you best.



## Metro Regional Parcel API

API Base URL: https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0

API Metadata: https://resources.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metrogis/plan_regional_parcels/metadata/metadata.html

Base API endpoint (there is a GUI you can test queries with): https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query

API Technical Documentation: https://arcgis.metc.state.mn.us/server/sdk/rest/index.html#/Query_Feature_Service_Layer/02ss0000002r000000/

Sample query (where the street number is 1104 and the county is Hennepin): https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=ANUMBER%3D1104+AND+CO_NAME%3D%27Hennepin%27&outFields=*&returnGeometry=false&f=pjson

Sample property identification number (for testing):
- 1202924330056
- 323123440017
- 112823320034
