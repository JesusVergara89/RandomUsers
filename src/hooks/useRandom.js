import axios from "axios";
import { useEffect, useState } from "react"

const useRandom = (first,userFunction) => {

    const [getUser, setGetUser] = useState()
    useEffect(() => {
        const URL = "https://randomuser.me/api/"
        axios.get(URL)
            .then(({ data }) => setGetUser(data))
            .catch(err => console.log(err))
            .finally(
                userFunction
            )
    }, [first]);

    return getUser
}

export default useRandom