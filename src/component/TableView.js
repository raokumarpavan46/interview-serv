import React, { useState, useEffect } from 'react';

export function TableView(){
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setData(data);
         setIsLoading(false)
      })
      .catch((err) => {
         console.log(err.message);
      })
    
   }, []);

   if (isLoading){
      return <div>Data is being fetched...</div>
   } 
    var table=  
                     <table>
                     <tr>
                           <th>User</th>
                           <th>Text</th>
                           <th>Source</th>
                           <th>Updated At</th>
                           <th>Type</th>
                     </tr>
                     {
                       !isLoading && data.map((value) => {
                        return <tr>
                              <td>{value.user}</td>
                              <td>{value.text}</td>
                              <td>{value.source}</td>
                              <td>{value.updatedAt}</td>
                              <td>{value.type}</td>
                           </tr>

                     })
                     } 
                  </table>



return (
<div>
   {table}
</div>
);


}
