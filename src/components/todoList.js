import React, { Component } from 'react';

import RenderSlide from './RenderSlide'
import TodoBody from './TodoBody'
import SearchBar from './searchbar.js'

import {categories} from '../json/categories.json'

class TaskNumber extends Component {
  render(){
    return(
      <div id="taskCount">You have {this.props.tasks} tasks todo today.</div>
    )
  }
}

class TodoList extends Component {
  state = {
    slideNum: 0,
    categories: categories,
    openSearch: false,
  }

  _handleSlide = () => {
    console.log('pls work')
    this.props.history.push('/todo')
  }

  changeSlideLeft = () => {
    if (this.state.slideNum === 0) {
      this.setState({
        slideNum: (Object.keys(this.state.categories).length)-1,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum - 1),
      })
    }
  }

  changeSlideRight = () => {
    if (this.state.slideNum === (Object.keys(this.state.categories).length)-1) {
      this.setState({
        slideNum: 0,
      })
    }
    else {
      this.setState({
        slideNum: (this.state.slideNum + 1),
      })
    }
  }

  _handleSearch = () => {
    this.setState(prevState => {
      return {
        openSearch: !prevState.openSearch,
      }
    })
  }

  render () {
    let notFinished = this.state.categories[this.state.slideNum].incompleteTodo.length
    let finished = this.state.categories[this.state.slideNum].completeTodo.length
    let calculatedPercentage = (finished/(notFinished + finished)*100).toFixed(1)

    return (
      <div>
        <div id="header">
          <div id="menu">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
          </div>
          <div id="title">TODO</div>
          <div onClick={this._handleSearch} id="search">
          {this.state.openSearch === false ?
            <svg version="1.1" className="searchIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384 381"  xmlSpace="preserve">
            <path d="M385,360.7L271.7,247.3c20.8-26,33.3-59.1,33.3-95.1C305,68.1,236.9,0,153,0C69,0,1,68.2,1,152.2s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L361.7,384L385,360.7z M56.8,248.6C31.1,222.9,17,188.7,17,152.3S31.2,81.7,56.8,56s59.9-40,96.2-40s70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3c-25.7,25.7-59.9,39.9-96.2,39.9C116.7,288.5,82.5,274.3,56.8,248.6z"/>
            </svg> :
            <svg version="1.1" className="xIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415 409.7"  xmlSpace="preserve">
              <path d="M224.2,204.9L411.3,20.2c2.5-2.5,4-5.9,4-9.3c0-3-1.1-5.7-3.2-7.7c-2-2-4.8-3.1-7.8-3.1c-3.4,0-6.9,1.5-9.4,4L207.8,188.7L20.8,4c-2.5-2.5-6-4-9.4-4c-3,0-5.8,1.1-7.8,3.1c-2,2-3.2,4.7-3.2,7.7c0,3.4,1.5,6.7,4,9.3l187.1,184.7L4.4,389.5c-2.5,2.4-3.9,5.5-4,8.7c-0.1,3.2,1,6.1,3.1,8.3c2,2,4.8,3.1,7.8,3.1c3.4,0,6.9-1.4,9.4-4L207.8,221l187.1,184.7c4.8,4.7,12.9,5.1,17.2,0.8c4.5-4.5,4.1-12.1-0.8-17L224.2,204.9z"/>
            </svg>
          }
          </div>
        </div>
        {this.state.openSearch && <SearchBar />}
        <div className="gradient"></div>
        <div id="toDoContainer">
          <img src="alex.jpg" id="userAvatarImg"/>
          <div id="userGreet">Hello, Alex.</div>
          <div>reminder (add a way to edit reminders)</div>
          <div id="taskCount"><TaskNumber tasks={6}/></div>
        </div>
        <div id="variousToDos">
          <div id="date">
              <span>TODAY: {date.toUpperCase()}</span>
          </div>
          <div id="toDoListContainerSmall">
            <button className='slideArrows' onClick={this.changeSlideLeft}>
              <div></div>
              <svg version="1.1" className="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
            <div id="selectedToDo">
              <RenderSlide
                handleSlide={this._handleSlide}
                categoryImg={this.state.categories[this.state.slideNum].categoryImg}
                catName={this.state.categories[this.state.slideNum].category}
                percent={calculatedPercentage}
              />
            </div>
            <button className='slideArrows' onClick={this.changeSlideRight}>
              <svg version="1.1" className="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </button>
          </div>
        </div>
        {/*<TodoBody
          todoCategories={this.state.categories}
          categoryImg={this.state.categories[this.state.slideNum].categoryImg}
          calculatedPercentage={calculatedPercentage}
          slideNum={this.state.slideNum}
        />*/}
      </div>
    )
  }
}

export default TodoList

let today = new Date()
let dd = today.getDate()
let mm = today.getMonth()
let yyyy = today.getFullYear()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = months[mm] + ' ' + dd + ', ' + yyyy
