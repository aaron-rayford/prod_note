document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const coverArt = document.getElementById('cover-art');
        coverArt.style.backgroundImage = `url(${URL.createObjectURL(file)})`;

        const audio = new Audio(URL.createObjectURL(file));
        const playPauseButton = document.getElementById('play-pause');
        
        playPauseButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        });
    }
});
