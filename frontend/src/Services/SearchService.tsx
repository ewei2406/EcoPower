import axios from "axios"
import ItemType from "../components/Item/ItemType"

const query = (searchString: string): Promise<ItemType[]> => {

    if (searchString === "") return new Promise((resolve, reject) => {
        resolve([])
    })

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