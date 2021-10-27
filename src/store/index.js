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
    weather:{},
    lat:'',
    lon:'',
    averageTemperature: '',
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
      state.tenDaysForecast = payload
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
