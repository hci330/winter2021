// query the data from the server:
const initScreen = () => {
    fetch('https://www.apitutor.org/flickr/simple/?tags=dogs')
        .then((response) => {
            return response.json();
        })
        .then(loadCards); // invokes a function to process the data
};

const loadCards = (photos) => {
    console.log(photos)
    document.querySelector('.cards').innerHTML = '';
    for (photo of photos) {
        const template = `
            <div class="card" style="background-image:url('${photo.img_url}')"></div>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

//initialize on page load:
initScreen();
    
