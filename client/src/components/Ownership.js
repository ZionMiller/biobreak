import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import Snapshot from './Snapshot'

const Ownership = ({returnedQuery}) => {

  const [ownership, setOwnership] = useState(null)
  const [ownershipFetch, setOwnershipFetch] = useState(null)
  const [ownershipEncodedParams, setOwnershipEncodedParams] = useState(new URLSearchParams())
  const [ownershipArr, setOwnershipArr] = useState(null)

  //     useEffect(() => {
  //       if (returnedQuery.length != 0){
  //           ownershipEncodedParams.set("symbol", `${returnedQuery[0].ticker}`);
  //       }
  //     }, [returnedQuery])

  // useEffect(() => {
  //   setOwnershipFetch(
  //     {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/x-www-form-urlencoded',
  //             // Come back and remove key, it's not working in env folder not sure why
  //         'X-RapidAPI-Key': '',
  //         'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
  //       },
  //       body: ownershipEncodedParams
  //     }
  //   )
  // }, [ownershipEncodedParams])
    
  //     useEffect(() => {
  //       if (ownershipEncodedParams.get("symbol") && ownershipFetch !== null){
  //       fetch('https://yahoo-finance97.p.rapidapi.com/institutional-holders', ownershipFetch)
  //         .then(response => response.json())
  //         .then(owners => setOwnership(owners))
  //         .catch(err => console.error(err));
  //         }
  //       }, [ownershipFetch, ownershipEncodedParams]); 

console.log("state", ownership)
console.log("fetch", ownershipFetch)

// useEffect(() => {
//   setOwnershipArr(ownership)
// }, [ownership])

console.log("ownershipArr", ownershipArr)

  return (
    <div>

      <Table style={{backgroundColor: "", textAlign: "center"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Holder</Table.HeaderCell>
            <Table.HeaderCell>Date Reported</Table.HeaderCell>
            <Table.HeaderCell>% Outstanding</Table.HeaderCell>
            <Table.HeaderCell>Shares</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {
          ownership !== null?(
            ownershipArr.map((ownership) => {
                return (
                  <Table.Body>
                    <Table.Cell>{ownership.holder}</Table.Cell>
                    {/* <Table.Cell>{owner.dateReported}</Table.Cell> */}
                    {/* <Table.Cell>{owner.%Out}</Table.Cell> */}
                    <Table.Cell>{ownership.shares}</Table.Cell>
                    <Table.Cell>{ownership.value}</Table.Cell>
                  </Table.Body>
                )
            })) : (<></>)
              
                // ))): (<></>)
        }
      </Table>
 {/* console.log(owner.holder) */}
    </div>
  )
}

export default Ownership