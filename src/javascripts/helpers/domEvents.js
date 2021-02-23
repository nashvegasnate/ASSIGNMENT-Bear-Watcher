import getFormInfo from '../components/getFormInfo';

const domEvents = () => {
  document.querySelector('form').addEventListener('submit', getFormInfo);
};

export default domEvents;
