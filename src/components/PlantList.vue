<template>
<div class="wrapper">
  <div class="inventory">
    <div class="plant" v-for="plant in plants" :key="plant.id">
      <div class="info">
        <h1>{{plant.species}}</h1>
        <p>{{plant.type}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+plant.image">
      </div>
      <div class="price">
        <h2>{{plant.price}}</h2>
        <button v-on:click="addToWishlist(plant)" class="auto">Add to Wishlist</button>
      </div>
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

.plants {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.inventory {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.plant img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.plant .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
