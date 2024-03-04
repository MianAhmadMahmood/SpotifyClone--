let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = document.getElementsByClassName('songItem');

let songs = [
    { songName: 'yadav brand 2', filePath: 'song/1.mp3', coverPath: 'cover/1.jpg' },
    { songName: 'Na Chedo Hume Hum Sataye Hue Hain  Nusrat Fateh Ali Khan', filePath: 'song/2.mp3', coverPath: 'cover/2.jpeg' },
    { songName: 'Bitch Im Back (Slowed and Reverbed) @SidhuMooseWalaOfficial  Lofi Cure', filePath: 'song/3.mp3', coverPath: 'cover/3.jpg' },
    { songName: 'Dil Meri Na Sune  Atif Aslam  Himesh Reshammiya  Evergreen Love Song', filePath: 'song/4.mp3', coverPath: 'cover/4.jpg' },
    { songName: 'Zindagi Ch Kade Koi Aaye Na Rabba  sad song   ', filePath: 'song/5.mp3', coverPath: 'cover/5.jpg' },
    { songName: 'Saari Duniya Jalaa Denge(Extended Full Song) Ranbir ', filePath: 'song/6.mp3', coverPath: 'cover/6.jpg' },
    { songName: 'Top Class Desi  Jimmy Kaler  Gurlez Akhtar  Mista Baaz ', filePath: 'song/7.mp3', coverPath: 'cover/7.jpeg' },
    { songName: 'Ehd e Wafa  Full OST  Rahat Fateh Ali Khan ', filePath: 'song/8.mp3', coverPath: 'cover/8.jpg' },
    { songName: 'Shubh - Cheques (Official Music Video)', filePath: 'song/9.mp3', coverPath: 'cover/9.jpg' },
    { songName: 'Badshah X Karan Aujla - Players ', filePath: 'song/10.mp3', coverPath: 'cover/10.jpg' },
];

Array.from(songItems).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
