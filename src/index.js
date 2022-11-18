// Import our custom CSS
import './scss/styles.scss';
// alerts from BS
import Alert from 'bootstrap/js/dist/alert';
// Import all of Bootstrap's JS
import { Toast, Popover } from 'bootstrap';

const helloDiv = document.createElement("div");
helloDiv.innerHTML = "Hello from Javascript!";
document.body.append(helloDiv);
