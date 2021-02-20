import renderToDom from '../helpers/renderToDom';

const screenInit = () => {
  const domString = `
    <div class="jumbotron jumbotron-fluid">
      <h1 class="display-4">Welcome to the BEAR TRACKER!</h1>
      <p class="lead">This app allows you to track bears and submit information on new ones</p>
      <hr class="my-4">
      <p>Press the button below to get started </p>
      <div id="get-tracking">
        <button id="get-tracking" class="btn btn-primary btn-lg"  href="#" role="button">Get Tracking!
        </button>
      </div>
      <div id="trackingForm" class="trackingForm"></div>  
    </div>
    <div class="cards d-flex p-4">
      <div class="newBearCards" div id="newBearCards">
      </div>
    </div>
    `;

  renderToDom('body', domString);
};

export default screenInit;
