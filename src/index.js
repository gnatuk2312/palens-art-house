import './sass/main.scss';

import consoles from './modules/console';
import modals from "./modules/modals";
import uploadBtn from './modules/uploadBtn';
import showMoreStyles from './modules/showMoreStyles';
import portfolioTabs from './modules/portfolioTabs';

window.addEventListener('DOMContentLoaded', () => {
	"use strict"
	consoles();
	modals();
	uploadBtn();
	showMoreStyles('.styles__button', '.styles__row-2');
	portfolioTabs();
});
