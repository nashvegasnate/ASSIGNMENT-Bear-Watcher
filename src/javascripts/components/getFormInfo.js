import bears from '../helpers/data/bears';
import river from './river';

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const imageUrl = document.querySelector('#imageUrl').value;

  const obj = {
    name,
    imageUrl,
  };

  bears.push(obj);

  river(bears);

  document.querySelector('form').reset();
};

export default getFormInfo;
