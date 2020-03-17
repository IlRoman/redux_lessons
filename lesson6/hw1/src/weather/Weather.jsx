import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';

const Weather = ({ dataList, getWeatherData }) => {
    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {dataList && dataList.map(element => (
                    <li className="city" key={Math.random()}>
                        <span className="city__name">{element.name}</span>
                        <span className="city__temperature">{element.temperature}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

const mapState = state => {
    return {
        dataList: state.data.data,
    }
};

const mapDisptch = {
    getWeatherData,
}

export default connect(mapState, mapDisptch)(Weather);