import axios from 'axios';

export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    }
}


const API_KEY = '12b2817fbec86915a6e9b4dbbd3d9036';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},zh_cn`;
    const request = axios.get(url);
    // console.log('request', request);

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}