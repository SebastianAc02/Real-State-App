import { ContactsOutlined } from "@ant-design/icons";



export default  function FetchByFilters({query, pages=0, count=9, proposito}= {}){

var {rentFrequency, priceMax} = query



  var frecuencia = rentFrequency!==''&& rentFrequency!== undefined? rentFrequency: 'weekly'
   priceMax=0

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e82a818420msh7026230eca5b371p150d27jsn018fe9212583',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };


 
    
 return fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${proposito}&hitsPerPage=${9}&page=${pages}&lang=en&sort=city-level-score&rentFrequency=${frecuencia}`, options)
    .then((ans)=>  ans.json())
    .then((response)=>{
    const array = response.hits.map((property) => {
      const { title, coverPhoto, price, isVerified, externalID, rentFrequency, baths, agency, rooms, area, photos, type } = property;
     
      const url = property.coverPhoto.url? property.coverPhoto.url: "";
        


      return {
        title, price, isVerified, externalID, rentFrequency, baths,
        agency, rooms, area, photos, coverPhoto, type, url
      };
    });
    return array;
  })
  .catch (err=> {
    return console.error(err);
  })



}