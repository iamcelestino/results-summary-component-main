const categoryContainer = document.querySelector(".category__container");

const getUserData = async() => {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
}

const updateUI = (data) => {
    const html = `
    <div class="category Reaction">
    <div>
      <img src="assets/images/icon-visual.svg" alt="">
      <h4>${data[0].category}</h4>
    </div>
    <p><span>${data[0].score}</span>/100</p>
  </div>

  <div class="category Memory">
    <div>
      <img src="assets/images/icon-visual.svg" alt="">
      <h4>${data[1].category}</h4>
    </div>
    <p><span>${data[1].score}</span>/100</p>
  </div>

  <div class="category Verbal">
    <div>
      <img src="assets/images/icon-visual.svg" alt="">
      <h4>${data[2].category}</h4>
    </div>
    <p><span>${data[2].score}</span>/100</p>
  </div>

  <div class="category visual ">
    <div>
      <img src="assets/images/icon-visual.svg" alt="">
      <h4>${data[3].category}</h4>
    </div>
    <p><span>${data[3].score}</span>/100</p>
  </div>
    `;
    categoryContainer.innerHTML = html;
}

getUserData()
    .then(data => updateUI(data))