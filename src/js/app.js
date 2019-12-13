// import "../css/input-elements.css"
// import "../css/main.css"

import '../css/main.css';
import '../css/input-elements.css';

import {secretButton, secretParagraph} from "./dom-loader"
var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide';
    } else {
        secretButton.textContent = 'Show';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}