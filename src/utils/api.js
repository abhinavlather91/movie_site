import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTdlYmQyZjkzMTY4MmYyMGE0ZTVlYTdlODI2MjNmNCIsIm5iZiI6MTcyNTcyOTcxMC42OTg0OTgsInN1YiI6IjY2ZGM4YjNjYzUwYWI2NzM0YzY0NWNiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GhuTdW1zQpC41ZsMjq02-ukexLxp3k6YAJBCpxvw4mY";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
