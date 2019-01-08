import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
    <nav>
        <Link to={`/`}>Home</Link>
        <br></br>
        <Link to={`/bmi`}>Body Mass Index (BMI)</Link>
        <br></br>
        <Link to={`/body-fat-percent`}>Body Fat Percent</Link>
        <br></br>
        <Link to={`/one-rep-max`}>One Rep Max (1RM)</Link>
        <br></br>
        <Link to={`/VO2-max`}>Maximal Oxygen Uptake (VO2 Max)</Link>
        <br></br>
        <Link to={`/target-hr`}>Target Heart Rate</Link>
        <br></br>
        <Link to={`/bmr`}>Basal Metabolic Rate (BMR)</Link>
    </nav>
)

export default Nav;