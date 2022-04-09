import axios from "axios"

const query = (searchString: string) => {
    return axios.get('/search')
}

const SearchService = { query }

export default SearchService