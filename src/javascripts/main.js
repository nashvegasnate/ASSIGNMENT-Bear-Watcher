import '../styles/main.scss';

const bears = [
  {
    name: 'Flash',
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

const bearForm = () => {
  const domString = `<div class="jumbotron jumbotron-fluid">
    <div class="container" div id="jumboTron">
    <h1 class="display-4">Bear Watcher</h1>
    <p class="lead">Keep track of your favorite bears in Katmai National Park!</p>
    <form>
      <h3>ENTER NEW BEAR INFORMATION BELOW</h3>
      <div class="form-label" div id="bearForm">
        <label for="name">Name of New Bear</label>
        <input type="text" class="form-control form-control-lg" placeholder="enter name of new bear" id="name" required>
        <input type="url" class="form-control form-control" id="imageUrl" placeholder="enter image URL" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <div class="container mt-3 text-center">
    <div id="bearList"> 
  </div>
</div>`;
  printToDom('body', domString);
};

const river = () => {
  let domString = '';
  bears.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;" id="${i}">
                    <img class="card-img-top" img src="${item.imageUrl}"></img>
                    <div class="card-body">
                      <p class="card-text">${item.name}</p>
                    </div>
                  </div>`;
  });
  printToDom('#bearList', domString);
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

  river(bears);

  document.querySelector('form').reset();
};

const domEvents = () => {
  document.querySelector('form').addEventListener('submit', getFormInfo);
};

const init = () => {
  bearForm();
  river(bears);
  domEvents();
};

init();
