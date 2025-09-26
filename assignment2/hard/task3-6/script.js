const video=document.getElementById('video')
const playPause=document.getElementById('playPause')
const volume=document.getElementById('volume')

playPause.addEventListener('click', ()=>{
    if (video.paused){
        video.play();
        playPause.textContent='Pause'
    }else{
        video.pause();
        playPause.textContent='Play'
    }
    
})
volume.addEventListener('input', ()=>{
    video.volume=volume.value
})