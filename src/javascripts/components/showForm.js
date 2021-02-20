import renderToDOM from '../helpers/renderToDom';

const showForm = () => {
  document.querySelector("#get-tracking").innerHTML = '';
  const content = `<form>
                    <div class="mb-3">
                      <label for="bearInput" class="form-label">name of bear</label>
                      <input type="text" class="form-control" id="bearName" placeholder="please enter name of bear" required>
                    </div>
                    <div class="mb-3">
                      <label for="bearImg" class="form-label">Image URL of bear</label>
                      <input type="url" class="form-control" id="bearImg">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>`;
            
  renderToDOM("trackingForm", domString);
  
};

export default showForm;
