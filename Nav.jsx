import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Nav.css';

function Nav() {
    return (
        <div>
            <nav className="navbar">
                <h2 className="logo">MyApp</h2>
                <ul className="nav-links">
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><Navlink to=          </li>
        </div>