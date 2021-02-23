import '../styles/main.scss';

import bearForm from './components/bearForm';

import domEvents from './helpers/domEvents';

import river from './components/river';

import bears from './helpers/data/bears';

const init = () => {
  bearForm();
  river(bears);
  domEvents();
};

init();
