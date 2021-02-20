import showForm from '../components/showForm';

const domEvents = () => {
  document.querySelector("#get-tracking").addEventListener("click", showForm);
};

export default domEvents;
