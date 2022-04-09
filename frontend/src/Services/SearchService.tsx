import axios from "axios"
import ItemType from "../components/Item/ItemType"

const query = (searchString: string): Promise<ItemType[]> => {

    if (searchString === "") return new Promise((resolve, reject) => {
        resolve([])
    })

    const config = {
        params: {
            'searchTerm': searchString
        }
    }

    function compare(a: ItemType, b: ItemType) {
        if (a.score < b.score) {
            return 1;
        }
        if (a.score > b.score) {
            return -1;
        }
        return 0;
    }


    return axios
        .get('/search', config)
        .then(data => data.data.sort(compare))
}

const SearchService = { query }

export default SearchService