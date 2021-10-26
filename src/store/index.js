import Vue from 'vue'
import Vuex from 'vuex'

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
    pollutionData:''
  },
  mutations: {
    setPollutionData(state, payload){
      state.pollutionData = payload
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
        fetch(`${state.url_base}weather?q=${payload}&units=metric&APPID=${state.api_key}`)
          .then(res => {
            commit('setSevenDaysForecastCity', payload)
            return res.json().then(res => {
              commit('setLatitudeAndLongitude', res.coord)
              fetch(`${state.url_base}onecall?lat=${state.lat}&lon=${state.lon}&units=metric&APPID=${state.api_key}`).then(res => {
                return res.json().then(res => {
                  commit('setSevenDaysForecast', res.daily)
                })
              })
              fetch(`${state.url_base}air_pollution?lat=${state.lat}&lon=${state.lon}&units=metric&APPID=${state.api_key}`).then(res => {
                return res.json().then(res => {
                  commit('setPollutionData', res)
                })
              })
            }
            )
          })
    }
  },
  modules: {
  }
})
