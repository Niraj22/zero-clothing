import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
class Directory extends React.Component {
    constructor(){
    super()
    this.state = {
        sections : [{
              title: 'hats',
              imageUrl: 'https://bit.ly/2J8azhA',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://bit.ly/2y0yKMp',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://bit.ly/2UdoTM3',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://bit.ly/2xjoNte',
              size: 'large',
              id: 4,
              size:'large',
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://bit.ly/2JarXSX',
              size: 'large',
              id: 5,
              size:'large',
              linkUrl: 'shop/mens'
            }
          ]
    }
    }

 render(){
     return (
         <div className='directory-menu'>
            {
                 this.state. sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
         </div>
     )
 }
}
export default Directory