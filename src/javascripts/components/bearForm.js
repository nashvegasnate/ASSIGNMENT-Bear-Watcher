import printToDom from '../helpers/printToDom';

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

export default bearForm;
