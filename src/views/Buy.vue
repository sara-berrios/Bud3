<template>
  <div>
  <h1>Buy Plants</h1>

    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText"/>
        </form>
      </div>
    </div>

    <div class="controls">
      <button v-on:click="select('Indoor')">Show Indoor</button>
      <button v-on:click="select('Outdoor')">Show Outdoor</button>
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
h1{
  font-size: 100px;
  margin-left: 50px;
  color: #4D774E;
}
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
button{
  margin: 30px;
  border: none;
  background-color:#4D774E;
  border-radius: 25px;
  width: 150px;
  height: 50px;
  font-weight: bold;
}
button:hover{
  background-color: #fcf9f3;
  border: 2px solid #73AD21;
}
.controls{
  display: flex;
  align-items: center;
  justify-content: center;
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
