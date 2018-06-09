import { splashes } from "./splashes";

const splash = document.getElementsByClassName("logo__splash")[0];
splash.innerHTML = splashes[Math.floor(Math.random() * Math.floor(splashes.length))];