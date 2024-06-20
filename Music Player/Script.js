
const musicData = [
    { title: "Kokkarakko", artist: "Vidyasagar", favorite: true, src:"./songs/Kokkarakko.mp3", url: "url(./images/ghilli.jpg)"},
    { title: "Pookal Pookum", artist: "G.V.Prakash Kumar", favorite: true, src:"./songs/Pookal-Pookum.mp3",  url:"url(./images/madrasapattinam.jpg)" },
    { title: "Vaarayo Vaarayo", artist: "Harris Jayaraj", favorite: true, src:"./songs/Vaarayo-Vaarayo.mp3", url:"url(./images/aadhavan.jpg)" },
    { title: "Ennodu Nee Irundhal", artist: "A.R.Rahman", favorite: false, src:"./songs/Ennodu-Nee-Irundhal.mp3", url:"url(./images/i-movie.jpg)" },
    { title: "Yeppadi Irundha", artist: "Devi Sri Prasad", favorite: false, src:"./songs/Yeppadi-Irruntha.mp3", url:"url(./images/santhosh-subramaniyam.jpg)" },
    { title: "Roja Kadale", artist: "Harris Jayaraj", favorite: false, src:"./songs/Roja-Kadale.mp3", url:"url(./images/anegan.jpg)" },
    { title: "Appadi Podu", artist: "Vidyasagar", favorite: false, src:"./songs/Appadi Podu.mp3", url:"url(./images/ghilli.jpg)" },
    { title: "Poongatre Poongatre", artist: "Yuvan Shankar Raja", favorite: false, src:"./songs/Poongatre Poongatre.mp3", url:"url(./images/paiya.jpg)" },
    { title: "Aasai Aasai", artist: "Vidyasagar", favorite: false, src:"./songs/Aasai-Aasai.mp3", url:"url(./images/dhool.jpg)" },
    { title: "Mannarkudi Kalakalakka", artist: "Vidyasagar", favorite: false, src:"./songs/Mannarkudi-Kalakalakka.mp3", url:"url(./images/sivapathikaaram.jpg)" },
    { title: "Thuli Thuli Mazhaiyaai", artist: "Yuvan Shankar Raja", favorite: false, src:"./songs/Thuli-Thuli-Mazhaiyaai.mp3", url:"url(./images/paiya.jpg)" },
    { title: "Othaiyadi Pathayila", artist: "Dhibu Ninan Thomas", favorite: false, src:"./songs/Othaiyadi-Pathayila.mp3", url:"url(./images/kanaa.jpg)" },
    { title: "Two Two Two", artist: "Anirudh Ravichander", favorite: false, src:"./songs/Two-Two-Two.mp3", url:"url(./images/kaathuvaakula-rendu-kaadhal.jpg)" },
    { title: "Vilambara Idaiveli", artist: "Hiphop Tamizha", favorite: false, src:"./songs/Vilambara-Idaiveli.mp3", url:"url(./images/imaikkaa-nodigal.jpg)" }
    
]; 

const musicList = document.querySelector('.music-list');
const musicDetails=document.querySelector('.music-details');
const favoritesList = document.getElementById('favorites-list');


function createMusicCards() {
    musicList.innerHTML = '';
    musicData.forEach(song => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.style.backgroundImage=song.url;
        card.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;
        card.addEventListener('click', () => {
            openMusicDetails(song);
        });

        const favoriteContainer=document.createElement("div");
        favoriteContainer.classList.add("favorite-container");
        favoriteContainer.innerHTML = `
             <button onclick="toggleFavorite(${musicData.indexOf(song)})">${song.favorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        `;

        const cardHolder=document.createElement("div");
        cardHolder.classList.add("card-favorite-holder");
        cardHolder.append(card, favoriteContainer);
        musicList.appendChild(cardHolder);
    });
}

function openMusicDetails(song) {
    musicList.style.display="none";
    const musicDetails = document.getElementById('musicDetails');
    const musicDetailsContent = document.getElementById('musicDetailsContent');

    musicDetailsContent.innerHTML = `
        <div class="image-holder"></div>
        <h2>${song.title}</h2>
        <p>${song.artist}</p>
        <audio controls>
            <source src="${song.src}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;
    const imageHolder = musicDetailsContent.querySelector('.image-holder');
    imageHolder.style.backgroundImage = `${song.url}`;

    musicDetails.style.display = 'flex';
}

function closeMusicDetails() {
    const musicDetails = document.getElementById('musicDetails');
    musicDetails.style.display = 'none';
    musicList.style.display="grid";
}

function toggleFavorite(index) {
    musicData[index].favorite = !musicData[index].favorite;
    createMusicCards();
    displayFavorites();
}

function displayFavorites() {
    favoritesList.innerHTML = '';
    const favorites = musicData.filter(song => song.favorite);
    favorites.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        favoritesList.appendChild(listItem);
    });
}


function createPlaylist() {
    const playlistName = document.getElementById('playlist-name').value;
    alert(`Playlist "${playlistName}" created!`);
}

createMusicCards();
displayFavorites();
