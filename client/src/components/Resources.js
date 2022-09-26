import React from 'react'
import Faq from 'react-faq-component';
import { Embed } from 'semantic-ui-react'

const Resources = () => {

    const data = {
        title: "FAQ (How it works)",
        rows: [
          {
            title: "Lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
          },
          {
            title: "Nunc maximus, magna at ultricies elementum",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
          },
          {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
          },
          {
            title: "What is the package version",
            content: "v1.0.5"
          }]
      }

  return (
    <div>
        <Faq data={data} />
        {/* <Embed
        icon='right circle arrow'
        placeholder='/images/image-16by9.png'
        url='https://www.myfav.es/jack'
    /> */}
  </div>
  )
}

export default Resources