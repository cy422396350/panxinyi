<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './city/cityHeader'
import CitySearch from './city/citySearch'
import CityList from './city/cityList'
import CityAlphabet from './city/cityAlphabet'
export default {
  name: 'City',
  components: {
    CityAlphabet,
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped lang="stylus">

</style>
