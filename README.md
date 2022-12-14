# The Connections Keeper
- We make so many connections but how do we keep up with those connections? How do we remember where we know them from? What if they reach out to us and we don't remember where we know them from? A virtual rolodex could help with that. Everyone has a journey and makes connections along the way but we need a way to professionally maintain those connections. With the connections application we offer a platform with all the benefits of a contact form in addition to how that connection was made.

# Site Map

![Screenshot 2022-12-13 at 9 20 37 PM](https://user-images.githubusercontent.com/114895439/207490970-1b82bd43-517f-4a5c-b30e-58d693dddcc4.png)
![Screenshot 2022-12-13 at 9 23 23 PM](https://user-images.githubusercontent.com/114895439/207491295-55767cc8-c920-4b14-acbf-41a7a30b40a6.png)
![Screenshot 2022-12-13 at 9 18 46 PM](https://user-images.githubusercontent.com/114895439/207491368-89d7c38a-2e72-4be9-b351-e7eb27038c1e.png)



# Project Links
- [Github FrontEnd Repo](https://github.com/shamzaali7/connection-frontend-api)
- [Github BackEnd Repo](https://github.com/shamzaali7/connection-backend-api)
- [Vercel Deploy](https://connection-frontend-api.vercel.app/main)
- [Heroku Depoy](https://github.com/shamzaali7/connection-backend-api)

# Wireframes & React Component Hierarchy
![Screenshot 2022-12-13 at 8 46 51 PM](https://user-images.githubusercontent.com/114895439/207485548-2fd2177e-4289-4ec1-b320-7cbe51e4f439.png)
![Screenshot 2022-12-13 at 8 48 53 PM](https://user-images.githubusercontent.com/114895439/207485781-69cae0ee-2fd3-4610-a219-0cd139ef6ec4.png)


### MVP
- A frontend and backend that are in unison.
### Backend
- Making components [index, connections, seed.js, seed.json., contactModel, contactController].
- Contract model contain a schema which has 5 main key value pairs. 
- contact controller consist of route to find all, create new, delete, and update.
- index requires cors & contains .env file with URL connecting to MongoDb database.

### Frontend
- An app page that connects all components.
- Contains Routes for all routing within the App. 
- Consist of compments for creating, getting, updating, and deleting the contacts.
- Sending request to the deployed backend to to receive a desirable output that will be displayed. 
- A css file that allows the app to be used on all screen displays.
- A friendly Ui experience with interactive components
- An About link for users to receive an intro on the Application.
- Header and Footer. 

### Post MVP
- Implement User Auth.
- Implement a Nav Bar 

### User Stories
- As a User I want to see a layout of connections.
- As a User I want to be able to add more connections.
- As a User I want to be able to update my social links.
- As a User I want to experience a user-friendly application.
- As a User I want to be able to click on ‘Intro’ button to learn and know how to operate site. 

# Components

| Components   | Description                                                                                 |
|------------- |:-------------------------------------------------------------------------------------------:|
| App          | Contains the main Routing componets with and imported links.|
| Intro        | The intro / how-to of the App.                                           |
| Main         | Renders the main page setup with the create new and update Contacts.                     |
| Login        | set up for Google sign in with Firebase along with the layout of the container                                            |
| CreateContact| Contains the operations to do a fetch call on built api. To create | post a new contact                            |
| UpdateContact| Contains the operations to do a fetch call on built api. To update | delete a new contact                              |
| Header       | Contains the Title of the application & have it renders in a banner across the top of app.
| Footer       | Contains the dev names with links to Github and Linkedin & it renders in a banner across the bottom of app.

# Time Frames

Component | Priority | Estimated Time | Time Invested | Actual Time
---- | ---- | ---- | ---- | ----
Creating Components | H | 2hr | 3hrs | 3hrs   
Setting up + Initializing API | H | 8hrs | 10hrs | 10hrs
Making links and lining routes- | M | 4hr | 5hrs | 5hrs
Adding Form and passing its changes/Connecting fronend to backend | M | 6hrs | 7hrs | 7hrs
Passing states/ propts and updating component | H | 6hrs | 7hrs | 7hrs
Retrieving and implementing new API with separate url | H | 6hrs | 7hrs | 7hrs
Total | N/A | 32hrs | 39hrs | 39hrs

# Additional Libraries
- Axios was used to assist the import of API's onto the code.

# Issues and Resolutions

#### Error: Access-Control-Allow-Origin-header missing-also blocked by cors 
#### Resolution: Issue was receiving the api call from frontend due to use params being used but not funtional.

#### Error: Creating a contact
#### Resolution: we were creating it but the data wasnt rendering on the screen. We had to do another get request (axios)

<!-- #### Error: 
#### Resolution:  -->


