import React from 'react';
import { Link } from 'react-router-dom';

const Calculator = props => (
    <nav>
        <Link to={`/calculator/bmi`}>Body Mass Index (BMI)</Link>
        <br></br>
        <Link to={`/calculator/bmr`}>Basal Metabolic Rate (BMR)</Link>
        <br></br>
        <Link to={`/calculator/one-rep-max`}>One Rep Max (1RM)</Link>
        <br></br>
        <Link to={`/calculator/VO2-max`}>Maximal Oxygen Uptake (VO2 Max)</Link>
        <br></br>
        <Link to={`/calculator/target-hr`}>Target Heart Rate</Link>
        <br></br>
        <Link to={`/calculator/body-fat-percent`}>Body Fat Percent</Link>
    </nav>
)

export default Calculator;