import {
    Detailes
} from "./detailes.module.js";
import {
    Ui
} from "./interface.module.js";

let icons = document.querySelectorAll(".nav-link");
let catagory;
export class Home {
    constructor() {
        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener("click", () => {
                document.querySelector(".active").classList.remove("active");
                icons[i].classList.add("active");
                catagory = icons[i].getAttribute("data-catagory");
                this.getApi(catagory)
                // this.changeActiveLink()

            })

        }
        this.details = document.getElementById("details")
        this.rowData = document.getElementById("rowData")
        this.loading = document.querySelector(".load")
        this.ui = new Ui();
        this.detailsSection = new Detailes()

        this.getApi()

    }
    // async changeActiveLink(){


    //     console.log(catagory);


    // }

    async getApi(cat = "mmorpg") {
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f4065ad5bfmsh9ad3dd3d5e48ac7p137208jsnefa676870141',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const result = await api.json();
        // console.log(result);
        // const catagoryData= await this.getApi(catagory) //return api
        this.ui.displayData(result)
        this.loading.classList.add("d-none")

        document.querySelectorAll(".bg").forEach((item) => {
            item.addEventListener("click", () => {
                this.details.classList.remove("d-none");
                this.rowData.classList.add("d-none");

                const dataIdValue = item.getAttribute('data-id');
                new Detailes(dataIdValue)
            })
        })


    }


}