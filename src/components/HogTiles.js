import React from 'react'
import Hog from './Hog.js'


export default class HogTiles extends React.Component {

  imgPrep = (name) =>{
  return `/hog-imgs/${name.split(' ').join('_')}.jpg`
  }

  isGreased =(hog)=> {
    return hog.greased === this.props.greased
  }

  filteredHogs = () => {
    const filter = this.props.filter
    const sortedHogs = this.props.hogs.sort(function (a, b) {
      return a[filter] > b[filter] ?  1 : b[filter] > a[filter] ? -1 : 0
    })
    if(this.props.greased){
      return sortedHogs.filter(this.isGreased)
    } else {
      return sortedHogs
    }
  }

  render () {
    return(
      <div className='ui grid container'>
        { this.filteredHogs().map(hog => {
          return <Hog imgPrep ={this.imgPrep} hog={hog} key={hog.name} />
          })}
      </div>
    )
  }
}
