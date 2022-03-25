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
const main_profile = document.querySelector('.cards');


function card_profile(string){

  const
      card1 = document.createElement('div'),
      image_card = document.createElement('img'),
      info_card = document.createElement('div'),
      user_name= document.createElement('h3'),
      usersUserName = document.createElement('p'),
      location = document.createElement('p'),
      profile = document.createElement('p'),
      gitAddress = document.createElement('a'),
      followers = document.createElement('p'),
      following = document.createElement('p'),
      bio = document.createElement('p');

      

      card1.classList.add('card');
      info_card.classList.add('card-info');
      user_name.classList.add('name');
      usersUserName.classList.add('username');

      
      card1.appendChild(image_card);
      card1.appendChild(info_card);
      info_card.appendChild(user_name);
      info_card.appendChild(usersUserName);
      info_card.appendChild(location);
      info_card.appendChild(profile);
      profile.appendChild(gitAddress);
      info_card.appendChild(followers);
      info_card.appendChild(following);
      info_card.appendChild(bio);


      image_card.setAttribute('src', string.avatar_url );
      user_name.textContent = `name: ${string.login}`;
      location.textContent = `location: ${string.location}`;
      followers.textContent = `followers: ${string.followers}`;
      following.textContent = `following: ${string.following}`;
      bio.textContent = `bio: ${string.bio}`;
      gitAddress.textContent =`profile ${string.gitAddress}`

      
      return card1;
}


axios.get(`https://api.github.com/users/RimshaSaleem`)
           .then(response =>{
            console.log(response.data);
            main_profile.appendChild(card_profile(response.data));
    })
        .catch(res => console.log('no data found in system: ', res));

    // axios.get(`https://api.github.com/users/RimshaSaleem/following`)
    axios.get(`https://api.github.com/users/RimshaSaleem/following`)
           .then(response =>{
            console.log(response.data);
            response.data.forEach(login => {
              
              const result = card_profile(login);
              main_profile.appendChild(result);
            });
            
          })

        .catch(res => {
          console.log('no data in system: ', res)

        });
    