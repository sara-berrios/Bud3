<template>
  <div>
    <div class="wrapper">
      <h1>Buy a variety of indoor and outdoor plants</h1>
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>

      <div class="controls">
        <button v-on:click="select('Indoor')">Show Indoor</button>
        <button v-on:click="select('Outdoor')">Show Outdoor</button>
      </div>
    </div>

    <PlantList :plants="plants"/>

  </div>
</template>

<script>
import PlantList from "../components/PlantList.vue"

export default {
  name: "Buy",
  components: {
    PlantList,
  },
  data(){
    return{
      searchText: '',
    }
  },
  computed:{
    plants() {
      return this.$root.$data.plants.filter(plant =>
        plant.species.toLowerCase().search(this.searchText.toLowerCase()) >= 0);;
    }
  },
  methods:{
    select(type){
      this.type = type;
    }
  },
}

</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
