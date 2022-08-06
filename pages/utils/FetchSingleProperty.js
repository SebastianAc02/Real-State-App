


export default function FetchSingleProperty({id})
{


    

   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':  'e82a818420msh7026230eca5b371p150d27jsn018fe9212583',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };

    
    
   return  fetch(`https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`, options)
    .then(answer => answer.json())
        .then(res => {
            if(res!== undefined)
            
          {  const {title, coverPhoto, price, isVerified, externalID,rentFrequency,
                baths, agency , rooms, area , photos, description, type, purpose } = res
                const {url} = coverPhoto
            
         console.log(res)
                
                return {title, url, price, isVerified,externalID,rentFrequency,baths,
                agency , rooms, area, photos,description, type, purpose}
          }
        })
       .catch(err => console.log(err))


       

}
