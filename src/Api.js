import { APIKEY } from "./key"
import axios from "axios";

const news = async () => {

    axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-12-11&sortBy=popularity&apiKey=${APIKEY}`, {

    }).then(async (e) => {
        if (e.status === 200) {
            return e.data.articles
        }
    })
}

export default news;