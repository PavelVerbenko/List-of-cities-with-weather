/* weather-cities.js */
export default class WeatherCities {
    /** @param {array[]} cities */
      // your code
    constructor(data){
      this.data = data;
    }
    getFirst(){
      return this.data[0]
    }
      getLast(){
      return this.data.at(-1)
    }
    exportCsv(){
      return this.data.map(item => 
        `${item.location.name} ${item.current.temperature}`).join(", ");
    }
  }