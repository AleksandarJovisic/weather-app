import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tenDaysForecast:[],
    tenDaysForecastCity:'',
    sevenDaysForecast:[],
    sevenDaysForecastCity:'',
    api_key: '8f288937c61ed29da70bef79d04dc768',
    url_base: 'https://api.openweathermap.org/data/2.5/',
    api_key_weatherabit: '4450f8446f9f4b4f851ee48aab1cb43d',
    weather:{},
    lat:'',
    lon:'',
    averageTemperature: null,
    pollutionData:'',
    UVIndex: null,
    searchError: ''
  },
  mutations: {
    setSearchError(state, payload){
      state.searchError = payload
    },
    setPollutionData(state, payload){
      state.pollutionData = payload
    },
    setUVIndex(state, payload){
      state.UVIndex = payload
    },
    setTenDaysForecast(state, payload){
      for(let i = 0; i < 10; i++){
        state.tenDaysForecast.push(payload[i])
      }
    },
    setAverageTemperatureForBackground(state){
      let sum = 0;
      state.tenDaysForecast.forEach(element => {
       sum = sum + (element.max_temp + element.min_temp)/2
      });
      state.averageTemperature =  sum / state.tenDaysForecast.length;
    },
    setTenDaysForecastCity(state, payload){
      state.tenDaysForecastCity = payload
    },
    setSevenDaysForecastCity(state, payload){
      state.sevenDaysForecastCity = payload
    },
    setSevenDaysForecast(state,payload){
      payload.shift();
      state.sevenDaysForecast = payload
    },
    setResults (state, results) {
      state.weather = results;
    },
    setLatitudeAndLongitude(state, payload){
      state.lat = payload.lat;
      state.lon = payload.lon
    }
  },
  actions: { 
    getTenDayForecast({commit, state}, payload){
      axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${payload}&key=${state.api_key_weatherabit}`).then(res => {
        commit('setTenDaysForecast', res.data.data)
        commit('setAverageTemperatureForBackground')
      })
    },
    getSevenDaysForecast({commit, state}, payload){
      axios.get(`${state.url_base}onecall?lat=${state.lat}&lon=${state.lon}&units=metric&APPID=${state.api_key}`).then(res => {
        commit('setSevenDaysForecast', res.data.daily);
        commit('setUVIndex',res.data.current.uvi);
        commit('setSearchError','');
      })
    },
    getPollutionData({commit, state}, payload){
      axios.get(`${state.url_base}air_pollution?lat=${state.lat}&lon=${state.lon}&units=metric&APPID=${state.api_key}`).then(res => {
        commit('setPollutionData', res.data);
      })
    },
    errorInSearch({commit}, err){
      commit('setSearchError',err.response.data.message + ', please try again.');
      commit('setSevenDaysForecast', []);
      commit('setUVIndex', null);
      commit('setPollutionData', '');
      commit('setSevenDaysForecastCity', '');
      commit('setLatitudeAndLongitude', '');
    }, 
    getData({commit,dispatch, state}, payload){
      axios.get(`${state.url_base}weather?q=${payload}&units=metric&APPID=${state.api_key}`).then(res => {
        commit('setSevenDaysForecastCity', payload);
        commit('setLatitudeAndLongitude', res.data.coord);
        dispatch('getSevenDaysForecast', res);
        dispatch('getPollutionData', res);
      }).catch(err => {
        dispatch('errorInSearch', err)
      })
    }
  },
  modules: {
  }
})
