const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioPlayer = AudioPlayer();

const search = (ev) => {
    const term = document.querySelector('#search').value;
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    const elem = document.querySelector('#tracks');
    elem.innerHTML = "";
    fetch(baseURL + '?type=track&q=' + term)
        .then(response => response.json())
        .then((data) => {
            const firstFive = data.slice(0, 5);
            for (const item of firstFive) {
                elem.innerHTML += getTrackHTML(item);
            }
        })
        .then(() => {
            attachEventListeners();
        });
};

const getAlbums = (term) => {
    const elem = document.querySelector('#albums');
    elem.innerHTML = "";
    fetch(baseURL + '?type=album&q=' + term)
        .then(response => response.json())
        .then((data) => {
            for (const item of data) {
                elem.innerHTML += getAlbumHTML(item);
            }
        });
};

const getArtist = (term) => {
    const elem = document.querySelector('#artist');
    elem.innerHTML = "";
    fetch(baseURL + '?type=artist&q=' + term)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.length > 0) {
                const firstArtist = data[0];
                elem.innerHTML += getArtistHTML(firstArtist);
            }
        });
};


const getAlbumHTML = (data) => {
    if (!data.image_url) {
        data.image_url = 'https://www.pngkit.com/png/full/943-9439413_blue-butterfly-free-png-image-dark-blue-to.png';
    }
    return `<section class="album-card" id="${data.id}">
        <div>
            <img src="${data.image_url}" />
            <h3>${data.name}</h3>
            <div class="footer">
                <a href="${data.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
};

const getTrackHTML = (data) => {
    if (!data.preview_url) {
        return `
            <section class="track-item">
                <img src="${data.album.image_url}">
                <div class="label">
                    <h3>${data.name}</h3>
                    <p>
                        ${data.artist.name} (no preview available)
                    </p>
                </div>
            </section>`;
    }
    return `
        <section class="track-item preview" data-preview-track="${data.preview_url}">
            <img src="${data.album.image_url}">
            <i class="fas fa-play play-track"></i>
            <div class="label">
                <h3>${data.name}</h3>
                <p>
                    ${data.artist.name}
                </p>
            </div>
        </section>`;
};

const getArtistHTML = (data) => {
    if (!data.image_url) {
        data.image_url = 'https://www.pngkit.com/png/full/943-9439413_blue-butterfly-free-png-image-dark-blue-to.png';
    }
    return `<section class="artist-card" id="${data.id}">
        <div>
            <img src="${data.image_url}" />
            <h3>${data.name}</h3>
            <div class="footer">
                <a href="${data.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
};

const attachEventListeners = () => {
    for (const elem of document.querySelectorAll('.track-item.preview')) {
        elem.onclick = handleTrackClick;
    }
};

const handleTrackClick = (ev) => {
    const preview_url = ev.currentTarget.getAttribute('data-preview-track')
    audioPlayer.setAudioFile(preview_url);
    audioPlayer.play();
    // and update the thumbnail:
    document.querySelector('footer .track-item').innerHTML = ev.currentTarget.innerHTML;
}; 


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

//optional
setTimeout(search, 500);