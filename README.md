M3 - README.md Example

Quick Compo

Description
This is an app to manage unofficial Barber Appoitments. The app helps the user, manage and choose what he want to do in the barber.

User Stories
404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
Signup: As an anon I can sign up in the platform
Login: As a user I can login to the platform so that I can choose services and do appoitments
Logout: As a user I can logout from the platform so no one else can use it
Add Appoitments As a user I can add a appoitments
Edit Appoitments As a user I can edit a tournament
View your Appoitments As a user I want to see your appoitments table
Backlog

User profile:
Choose services

Client / Frontend
React Router Routes (React App)
Path	Component	Permissions	Behavior
/	SplashPage	public <Route>	Home page
/signup	SignupPage	anon only <AnonRoute>	Signup form, link to login, navigate to homepage after signup
/login	LoginPage	anon only <AnonRoute>	Login form, link to signup, navigate to homepage after login
/barber	barberListPage	user only <PrivateRoute>	Shows all barbers in a list
/barber/:id	usersServicesPage	user only <PrivateRoute>	List of services
/user/Schecdule/add	Service	user only <PrivateRoute>	Choose the service

Components:
Homepage
LoginPage
SignupPage
Navbar
Barber List
Services List
Schedule list
Schedule page



Services
Auth Service

auth.login(user)
auth.signup(user)
auth.logout()
auth.me()
auth.getUser() // synchronous
Service List

service.list()

service.detail(id)

service.add(id)

service.delete(id)

User Service

user.detail(id)
user.add(id)
user.delete(id)

Server / Backend
Models
User model

{
  firstname: {type: String, required: true, unique: true},
  lastname: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
 
}
Services model

{
  serviceid: {type: String, required: true},
  type: {type: String},
  date/time: {type: String}
}

Links

Figma
https://www.figma.com/file/AltVhaULcOTvbHDs2TSd6n/Untitled?node-id=0%3A1

Git
The url to your repository and to your deployed project

Client repository Link

Server repository Link

Deployed App Link

Slides

https://docs.google.com/presentation/d/1PPLRGqjaWCC0VUx1HoFCGgCPzgoNoeITsANl67Q5l94/edit#slide=id.ga9ab361c13_1_1

Slides Link