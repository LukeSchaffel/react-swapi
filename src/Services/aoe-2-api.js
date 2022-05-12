const BASE_URL = "https://age-of-empires-2-api.herokuapp.com/api/v1"

export function getAllCivs(){
return fetch(`${BASE_URL}/civilizations`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin:':'*',
      'Accept':'application/JSON'
    }

  })
  .then(res => res.json())

}