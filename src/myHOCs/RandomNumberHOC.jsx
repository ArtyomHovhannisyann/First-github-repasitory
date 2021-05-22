import React, { Component } from 'react'

export default function RandomNumberHOC(MyComponent) {
    
    class Random extends Component {
        RandomNumbers(){
              let number = Math.floor(Math.random()*100)
              return number
        }
        render(){
            return <MyComponent text = {this.RandomNumbers()}/>
        }
    }
    return Random
    
}
