<template>
<div class="wrapper">
  <div class="inventory">
    <div class="plant" v-for="plant in plants" :key="plant.id">
      <div class="image">
        <img :src="'/images/'+plant.image">
      </div>
      <div class="info">
        <h1 id="species">{{plant.species}}</h1>
        <h2 id="price">{{plant.price}}</h2>
        <p>{{plant.type}}</p>
      </div>
      <button v-on:click="addToWishlist(plant)" class="auto">Add to Wishlist</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlantList',
  props: {
    plants: Array
  },
  methods: {
    addToWishlist(plant){
      this.$root.$data.wishlist.push({
        id: plant.id,
        species: plant.species,
        price: plant.price,
        type: plant.type,
        image: plant.image
      });
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.inventory {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.plant {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.plant img {
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.plant .image {
  display: flex;
  justify-content: center;
}

.info {
  height: 80px;
}

.info h1 {
  font-size: 18px;
}

.info h2 {
  font-size: 16px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}

button {
  height: 50px;
  background-color: #fcf9f3;
  border: none;
}
button:hover{
  background-color: #4D774E;
}

.auto {
  margin-left: auto;
}
</style>
