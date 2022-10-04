import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import Snapshot from './Snapshot'

const Ownership = ({returnedQuery}) => {

  const [ownership, setOwnership] = useState(null)
  const [ownershipFetch, setOwnershipFetch] = useState(null)
  const [ownershipEncodedParams, setOwnershipEncodedParams] = useState(new URLSearchParams())

      useEffect(() => {
        if (returnedQuery.length != 0){
            ownershipEncodedParams.set("symbol", `${returnedQuery[0].ticker}`);
        }
      }, [returnedQuery])

  useEffect(() => {
    setOwnershipFetch(
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
              // Come back and remove key, it's not working in env folder not sure why
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: ownershipEncodedParams
      }
    )
  }, [setOwnershipEncodedParams])
    
      useEffect(() => {
        if (ownershipEncodedParams.get("symbol") && ownershipFetch !== null){
        fetch('https://yahoo-finance97.p.rapidapi.com/institutional-holders', ownershipFetch)
          .then(response => response.json())
          .then(articles => setOwnership(articles))
          .catch(err => console.error(err));
          }
        }, [ownershipFetch, ownershipEncodedParams]); 

console.log(ownership)

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
            ownership["data"].map((owner) => (
                  <Table.Body>
                    <Table.Cell>{owner.holder}</Table.Cell>
                    <Table.Cell>{owner.dateReported}</Table.Cell>
                    {/* <Table.Cell>{owner.%Out}</Table.Cell> */}
                    <Table.Cell>{owner.shares}</Table.Cell>
                    <Table.Cell>{owner.value}</Table.Cell>
                  </Table.Body>
                ))) : (<></>)
        }
      </Table>
 
    </div>
  )
}

export default Ownership