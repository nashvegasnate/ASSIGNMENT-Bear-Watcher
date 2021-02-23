import printToDom from '../helpers/printToDom';

import bears from '../helpers/data/bears';

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

export default river;
