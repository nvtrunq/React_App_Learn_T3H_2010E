import React, {Fragment, useState} from 'react'

const Contents = () => {
  const [todosState] = useState([
    {
      images: '/images/dubstep2.jpg',
      title: 'Living Nightmare',
      discaption: 'Snowflake',
      time: '2:58'
    },
    {
      images: '/images/happyrock.jpg',
      title: 'Dubstep',
      discaption: 'Bensound',
      time: '2:04'
    },
    {
      images: '/images/retrosoul.jpg',
      title: '42',
      discaption: 'Secret Of Life',
      time: '1:18'
    },
    {
      images: '/images/snowflake.jpg',
      title: 'Retrosoul',
      discaption: 'Bensound',
      time: '2:55'
    },
    {
      images: '/images/snowflake2.jpg',
      title: 'Holiday Funky Blues',
      discaption: 'Snowflake',
      time: '2:20'
    },
    {
      images: '/images/track3.jpeg',
      title: 'Happy Rock',
      discaption: 'Bendsound',
      time: '12:00',
      
    },
  ])

  return (
    <Fragment>
      {
        todosState.map(content => {
          return(
            <div>
                <div className="row">
                  <div className="col-12">
                  <div className="item">
                    <div className="content-item d-flex justify-content-between pt-2">
                      <div className="discaption-item d-flex">
                        <img className="rounded mx-auto d-block" src={content.images}></img>
                        <div className="text-item pl-2">
                          <h5>{content.title}</h5>
                          <p>{content.discaption}</p>
                        </div>
                      </div>
                      <p>{content.time}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        )})
      }
    </Fragment>
  )
}

export default Contents
