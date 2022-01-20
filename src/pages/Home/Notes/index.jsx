import React, { Component } from 'react'
import { Routes,Route,NavLink } from 'react-router-dom'
import MyNavLink from '../../MyNavLink'

export default class Messages extends Component {
    state={notes:[
        {id:1,title:"第一天"},
        {id:2,title:"第二天"},
        {id:3,title:"第三天"}
    ]}
    render() {
        return (
            <div>
                <ul>
                    {this.state.notes.map((day)=>{
                        return <button key={day.id}><MyNavLink to={""+day.id} >{day.title}</MyNavLink></button>
                    })}
                </ul>
                <Routes>
                    {this.state.notes.map((day)=>{
                        return <Route key={day.id} path={""+day.id} element={<p>{day.title}笔记</p>}></Route>
                    })}
                </Routes>
            </div>
        )
    }
}
