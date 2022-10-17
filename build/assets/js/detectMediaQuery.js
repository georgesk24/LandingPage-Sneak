var isMediaQueryLG = false;
var isMediaQueryMD

const mediaMD = window.matchMedia("(max-width: 991.98px)");

try {
    // Chrome & Firefox
    mediaMD.addEventListener('change', (e) => {
        isMediaQueryLG = e.matches;
        console.log("hola");
    });
} catch (e1) {
    try {
        // Safari, no probado
        mediaMD.addListener((e) => {
            isMediaQueryLG = e.matches;
        });
    } catch (e2) {
        console.error(e2);
    }
}

export const reset = () => {
    return isMediaQueryLG;
}