import printToDom from '../helpers/printToDom';

const bearForm = () => {
  const domString = `<div class="jumbotron jumbotron-fluid" style="background:transparent">
                      <div class="container" div id="jumboTron">
                        <h1 class="display-4">Bear Watcher</h1>
                        <h2 class="lead">Keep track of your favorite bears in Katmai National Park!</h2>
                        <form>
                            <p>ENTER NEW BEAR INFORMATION BELOW</p>
                          <div class="form-label" div id="bearForm">
                            <label for="name"></label>
                            <input type="text" class="form-control form-control-lg" placeholder="enter name of new bear" id="name" required>
                            <input type="url" class="form-control form-control" id="imageUrl" placeholder="enter image URL" required>
                          </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                      </div>
                      <div class="container mb-3 text-center">
                        <div id="bearList"> 
                      </div>
                    </div>`;
  printToDom('body', domString);
};

export default bearForm;
