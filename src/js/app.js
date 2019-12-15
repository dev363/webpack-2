import "jquery"
import '../scss/main.scss';
import '../AboutUs.html';
import '../css/input-elements.css';

import {secretButton, secretParagraph} from "./dom-loader"
var showSecret = false;

secretButton.click(toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.text('Hide');
    } else {
        secretButton.text('Show');
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.css("display","block");
    } else {
        secretParagraph.css('display','none');
    }
}