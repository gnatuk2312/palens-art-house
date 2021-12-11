import './sass/main.scss';

import consoles from './modules/console'
import modals from "./modules/modals"

window.addEventListener('DOMContentLoaded', () => {
	"use strict"
	consoles();
	modals();
});
