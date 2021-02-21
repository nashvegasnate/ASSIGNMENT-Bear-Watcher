import '../styles/main.scss';

const bears = [
  {
    name: 'Yogi',
    imageUrl: 'https://images.pexels.com/photos/35435/pexels-photo.jpg?cs=srgb&dl=pexels-rasmus-svinding-35435.jpg&fm=jpg',
  },
  {
    name: 'Mary',
    imageUrl: 'https://images.pexels.com/photos/34700/bear-animals-zoo-captivity.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Bill',
    imageUrl: 'https://i.pinimg.com/236x/90/d5/c2/90d5c2c2fdfbd3eab4c4e4a2190d0a88.jpg',
  },
  {
    name: 'Louise',
    imageUrl: 'https://www.publicdomainpictures.net/pictures/230000/velka/brown-bear-1504708649cqE.jpg',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearBuilder = () => {
  let domString = '';
  bears.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;" id=${i}>
                    <img class="card-img-top" img src="url('${item.imageUrl}');"></img>
                    <div class="card-body">
                      <p class="card-text">${item.name}</p>
                    </div>
                  </div>`;
  });
  printToDom('#bears', domString);
};

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const imageUrl = document.querySelector('#imageUrl').value;

  const obj = {
    name,
    imageUrl,
  };

  bears.push(obj);

  bearBuilder(bears);

  document.querySelector('form').reset();
};

const buttonEvents = () => {
  document.querySelector('form').addEventListener('submit', getFormInfo);
};

const init = () => {
  buttonEvents();
  bearBuilder(bears);
};

init();
