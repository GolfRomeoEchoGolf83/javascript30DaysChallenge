/**
 * Created by Greg on 12/12/2016.
 */
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    /* getting seconds of now */
    const secondsDegrees = ((seconds / 60) * 360);
    /* transforming seconds into angles */


}
setInterval(setDate, 1000);