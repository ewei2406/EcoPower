import axios from "axios"

const query = (searchString: string) => {

    const config = {
        params: {
            'query': searchString
        }
    }

    return axios
        .get('/search', config)
        .then(data => data.data)
}

const SearchService = { query }

export default SearchService