import './style.css';
import { initDarkLightMode, switchNavTab } from "./utils.js";

window.onload = (): void => {
    initDarkLightMode();
    switchNavTab();
};
