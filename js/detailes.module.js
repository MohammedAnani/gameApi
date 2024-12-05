import {
    Ui
} from "./interface.module.js";

export class Detailes {
    constructor(id) {
        document.getElementById("btnClose").addEventListener("click", function () {
            document.getElementById("details").classList.add("d-none")
            document.getElementById("rowData").classList.remove("d-none")

        })
        this.loading = document.querySelector(".load")

        this.getDetails(id)


    }

    async getDetails(id) {
        this.loading.classList.remove("d-none")
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f4065ad5bfmsh9ad3dd3d5e48ac7p137208jsnefa676870141',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            this.loading.classList.add("d-none")

            new Ui().displayDetails(result)


        } catch (error) {
            console.error(error);
        }
    }
}