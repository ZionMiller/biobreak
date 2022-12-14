import React, { useEffect, useState } from 'react'
import Snapshot from './Snapshot'
import { Card } from 'semantic-ui-react'
import NewsResults from './NewsResults'

// Divider 3 columns: 
    // 1; direct news to company
    // 2; articles etc containing mention 
    // 3: tweets containing ticker or drug

const News = ({returnedQuery}) => {
  // console.log(returnedQuery[0].ticker)
  const [newsArticles, setNews] = useState(null)
  const [newsFetchState, setNewsFetchState] = useState(null)
  const [newsEncodedParams, setNewsEncodedParams] = useState(new URLSearchParams())
  // console.log({process.env.RAPID_KEY})

    useEffect(() => {
        if (returnedQuery.length != 0){
            newsEncodedParams.set("symbol", `${returnedQuery[0].ticker}`);
        }   
    }, [returnedQuery])

  useEffect(() => {
    setNewsFetchState(
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',

              // process.env.REACT_APP_Rapid_API_Key
          'X-RapidAPI-Key': process.env.API_RAPID_KEY,
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: newsEncodedParams
      }
    )
  }, [newsEncodedParams])
    
      useEffect(() => {
        if (newsEncodedParams.get("symbol") && newsFetchState !== null){
        fetch('https://yahoo-finance97.p.rapidapi.com/news', newsFetchState)
          .then(response => response.json())
          .then(articles => setNews(articles))
          .catch(err => console.error(err));
          }
        }, [newsFetchState, newsEncodedParams]); 
      
    console.log(newsArticles)
  return (
    <div>  
      <Card.Group itemsPerRow={6}>
        {
          // Array.isArray(newsArticles)? 
          newsArticles !== null?(
            newsArticles["data"].map((news) => (
              <NewsResults 
                    title={news.title}
                    link={news.link}
                    publisher={news.publisher}
                    providerPublishTime={news.providerPublishTime}
                />
                ))) : (<></>)
        }
      </Card.Group>
    </div>
  )
}

export default News