/**
 * Created by Greg on 23/01/2017.
 */
// constantes
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// get video from webcam
function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error('Error', err);
        })
}

// painting on canvas with webcam
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take pixels out
        let pixels = ctx.getImageData(0, 0, width, height);

        // create effect with pixels
        pixels = redEffect(pixels);

        // putting pixels back
        ctx.putImageData(pixels, 0, 0);
        // console.log(pixels);
    }, 16);
}

// taking photo and playing sound accordingly
function takePhoto() {
    // play sound
    snap.currentTime = 0;
    snap.play();

    // take data from canva
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    // link.textContent = 'Dowload Image';
    link.innerHTML = `<img src="${data}" alt="handsome man" />`
    strip.insertBefore(link, strip.firstChild);

    // console.log(data);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] = pixels.data[i + 0] + 100;        // R
        pixels.data[i + 1] = pixels.data[i + 1] - 50;    // G
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;   // B
    }
    return pixels
}
getVideo();

// webcam video is displayed into canvas when canplay event is send by getVideo()
video.addEventListener('canplay', paintToCanvas);