import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Notes from './Notes'
import Plans from './Plans'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Home——react的学习</p> 
                <ul className="nav nav-tabs">
                  <li>
                    <Link to="notes">Notes</Link>
                    <Link to="plans">Plans</Link>
                  </li>
                </ul>
                    <Routes>
                        <Route path="notes/*" element={<Notes/>} ></Route>
                        <Route path="plans" element={<Plans/>} ></Route>
                    </Routes>
           </div> 
        )
    }
}
