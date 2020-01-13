const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

const FetchAPI = () => fetch(ENDPOINT).then(response => response.json())
const FetchDetails = (id) => fetch(ENDPOINT+id).then(response => response.json())

export {FetchAPI, FetchDetails};