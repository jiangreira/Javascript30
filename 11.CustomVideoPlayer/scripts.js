// const player = document.querySelector('.player')
// const video = player.querySelector('.viewer')
// const progress = player.querySelector('.progress')
// const progressBar = player.querySelector('.progress__filled')
// const toggle = player.querySelector('.toggle')
// const skipBtn = player.querySelectorAll('[data-skip]')
// const ranges = player.querySelectorAll('.player__slider')

// // function
// function toggleplay() {
//     const method = video.paused ? 'play' : 'pause'
//     video[method]()
// }
// function updateBtn() {
//     const icon = this.paused ? '►' : '❚ ❚';
//     toggle.textContent = icon
// }
// function rangeUpdate() {
//     video[this.name] = this.value
// }
// function progressUpdate() {
//     const percent = (video.currentTime / video.duration) * 100
//     progressBar.style.flexBasis = `${percent}%`
// }

// function progressBarUpdate(e) {
//     const videoTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = videoTime
// }
// function skip() {
//     video.currentTime += parseFloat(this.dataset.skip)
// }


// // EventListener
// video.addEventListener('click', toggleplay)
// video.addEventListener('play', updateBtn)
// video.addEventListener('pause', updateBtn)
// video.addEventListener('timeupdate', progressUpdate)

// toggle.addEventListener('click', toggleplay)

// ranges.forEach(range => range.addEventListener('change', rangeUpdate))
// ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate))

// skipBtn.forEach(skipbtn => skipbtn.addEventListener('click', skip))

// let mousedown = false;
// progress.addEventListener('click', progressBarUpdate)
// progress.addEventListener('mousemove', (e) => mousedown && progressBarUpdate(e))
// progress.addEventListener('mousedown', () => mousedown = true)
// progress.addEventListener('mouseup', () => mousedown = false)




// JQ
const video = $('.viewer')[0]

// function
function toggleplay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}
function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    $('.toggle').text(icon)
}
function rangeUpdate() {
    video[this.name] = this.value
}
function progressUpdate() {
    const percent = (video.currentTime / video.duration) * 100
    $('.progress__filled').css('flexBasis', `${percent}%`)
}

function progressBarUpdate(e) {
    const videoTime = (e.offsetX / $('.progress')[0].offsetWidth) * video.duration;
    video.currentTime=videoTime
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

// // EventListener
$(video).on('click', toggleplay)
$(video).on('play', updateBtn)
$(video).on('pause', updateBtn)
$(video).on('timeupdate', progressUpdate)

$('.toggle').on('click', toggleplay)

$('.player__slider').on('change', rangeUpdate)
$('.player__slider').on('mousemove', rangeUpdate)

$('.player__button').on('click', skip)

let mousedown = false;
$('.progress').on('click', progressBarUpdate)
$('.progress').on('mousemove', (e) => mousedown && progressBarUpdate(e))
$('.progress').on('mousedown', () => mousedown = true)
$('.progress').on('mouseup', () => mousedown = false)
