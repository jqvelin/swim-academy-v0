export function vh(percent: number) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}
  
export function vw(percent: number) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}
  
export function vmin(percent: number) {
    return Math.min(vh(percent), vw(percent));
}
  
export function vmax(percent: number) {
    return Math.max(vh(percent), vw(percent));
}