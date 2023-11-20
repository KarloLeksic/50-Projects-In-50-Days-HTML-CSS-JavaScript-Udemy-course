const API_URL = 'https://api.github.com/users/';

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');

/*
function getUser(username) {
  // Ovo je get request sa axios libraryjem
  axios(API_URL + username)
  .then(response => console.log(response.data))
  .catch(err => console.log(err));
}
*/

// Samo drugi nacin bez ovoga .then()
async function getUser(username) {
  // res je objekt koji ima u sebi objekt data
  // const res = await axios(API_URL + username);
  // Da nebi morali pisati res.data, mozemo koritsiti skracenicu

  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}

function createUserCard(user) {
  const cartHTML = `
  <div class="card">
    <div>
      <img src="${user.avatar_url}" class="${user.name}">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
        ${user.bio}
      </p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">

      </div>
    </div>
  </div>
  `;

  main.innerHTML = cartHTML;
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector('#repos');

  repos.slice(0, 10).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
});