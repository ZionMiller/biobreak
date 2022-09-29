import React from 'react'
import { Button, Form } from 'semantic-ui-react'


const Search = () => {
  return (
    <Form position='left'>
    <input type='text'
        placeholder={query ? `${query}` : "Search..."}
        style={{width: "115px"}}
        value={query}
        onChange={((e) => setQuery(e.target.value))}
        />
        <Button type='submit' onClick={search}>Submit</Button>
    </Form>
  )
}

export default Search