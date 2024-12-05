export class Ui {
  constructor() {}
  displayData(data) {
    let boxGames = ``;
    for (let i = 0; i < data.length; i++) {
      boxGames += ` <div class=" col-sm-6 col-md-4 col-lg-3 my-4 bg rounded-2>
                        <div class="card px-2  " data-id="${data[i].id}" >
                        <img src="${data[i].thumbnail}" class="card-img-top rounded-2" alt="...">
                        <div class="card-body text-center">
                            <div class="card-btn d-flex justify-content-between my-2 px-1">
                             <h5 class="card-title">${data[i].title}</h5>
                         
                             <a href="#" class="btn bg-color text-white">free</a>
                            </div>
                          

                          <p class="card-text">${data[i].short_description}   </p>
                        </div>
                      </div>
                      </div>`
    }
    document.getElementById("rowData").innerHTML = boxGames;
  }

  displayDetails(data) {
    const boxDetails = ` <div class="col-md-4">
        <img src="${data.thumbnail}" alt="Lost Ark" class="game-img">
      </div>
      <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: ${data.genre}</p>
        <p>Platform:${data.platform}</p>
        <p>Status: ${data.status}</p>
        <p>
      ${data.description} </p>
        <button class="btn btn-custom"><a href="${data.game_url}">Shaw Game</a></button>
      </div>`
    document.getElementById("detailsContent").innerHTML = boxDetails
  }


}