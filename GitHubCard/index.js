import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const result = document.querySelector('.cards');
// creating function
function cardsProfile(string){
  const 
  card1 = document.createElement('div');
  card_image = document.createElement('img') 
  info_card = document.createElement('div')
  u_name = document.createElement('h3')
  u_name2 = document.createElement('p')
  bio = document.createElement('p')
  address = document.createElement('a')
  follower= document.createElement('p')
  following = document.createElement('p')
  git_location = document.createElement('p')
  git_profile = document.createElement('p')


  card1.classList.add('card')
  u_name.classList.add('name')
  u_name2.classList.add('username')
  info_card.classList.add('card-info')


  card1.appendChild('info_card')
  card1.appendChild('card_image')
  info_card.appendChild('u_name')
  info_card.appendChild('u_name2')
  info_card.appendChild('bio')
  info_card.appendChild('address')
  info_card.appendChild('follower')
  info_card.appendChild('following')
  info_card.appendChild('git_profile')
  info_card.appendChild('git_location')
  


}






axios.get(`https://api.github.com/users/RimshaSaleem`)
.then(response =>{
  console.log(response.data);
  
})
.catch(res =>{
  console.log('Error no data' ,res)
})