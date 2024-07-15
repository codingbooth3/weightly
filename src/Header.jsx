import '../src/css/Header.css'

import logo from '../src/assets/header.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div id='header'>
        <Link to={'/weightly/'}><img src={logo} alt="" id='logo'/></Link>
        <div id="headerBody">
            <NavLink to={'/weightly/weightloss'}  className={({ isActive }) => isActive ? 'heading activeHeader' : 'heading'}>Weight Loss Calculator</NavLink>
            <NavLink to={'/weightly/diet'}  className={({ isActive }) => isActive ? 'heading activeHeader' : 'heading'}>Diet Planner</NavLink>
            <NavLink to={'/weightly/excercise'}  className={({ isActive }) => isActive ? 'heading activeHeader' : 'heading'}>Excercise Calculator</NavLink>
        </div>
        <div id="mobileBodyCenter">
          <div id="mobileHeaderBody">
            <NavLink to={'/weightly/weightloss'} className={({ isActive }) => isActive ? 'heading activeHeader' : 'heading'}>Weight Loss Calculator</NavLink>
            <NavLink to={'/weightly/diet'}  className={({ isActive }) => isActive ? 'heading activeHeader' : 'heading'}>Diet Planner</NavLink>
            <NavLink to={'/weightly/excercise'}  className={({ isActive }) => isActive ? 'heading activeHeader' : 'heading'}>Excercise Calculator</NavLink>
          </div>
        </div>
    </div>
  )
}
