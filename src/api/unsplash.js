import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a6e4LQQmleht05etEq6299QPNKOk74BR3vTzNFz1DH8'
    }
})