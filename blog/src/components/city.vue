<template>
  <div>
    <city-header></city-header>
    <city-search :city="cities"></city-search>
    <city-list :cities="cities" :hotCity="hot"></city-list>
    <city-alphabet :alphabet="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './city/cityHeader'
import CitySearch from './city/citySearch'
import CityList from './city/cityList'
import CityAlphabet from './city/cityAlphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityAlphabet,
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
      cities: {},
      hot: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (ret) {
      let res = ret.data
      if (res.data && res.ret) {
        res = res.data
        this.cities = res.cities
        this.hot = res.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
