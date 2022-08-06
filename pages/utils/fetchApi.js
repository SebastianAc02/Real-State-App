

export default function FetchApi({purpose, page = 0}){


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e82a818420msh7026230eca5b371p150d27jsn018fe9212583',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };;


    
   return fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-${purpose}&hitsPerPage=25&page=${page}&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`, options)
        .then(response => response.json())
        .then(response => 
            {
              const array =  response.hits.map((property)=>{
                const {title, coverPhoto, price, isVerified, externalID,rentFrequency,
                baths, agency , rooms, area  } = property
                const {url} = coverPhoto
            
         
                return {title, url, price, isVerified,externalID,rentFrequency,baths,
                agency , rooms, area}
              })
              
                return array
            })
        .catch(err => console.error(err));
       


} 