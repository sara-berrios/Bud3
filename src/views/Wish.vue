<template>

<div v-if="isEmpty" class="outer">
  <h1 class="title"> Build your dream jungle </h1>
    <div class="wrapper">
      <div class="inventory">
        <div class="plant" v-for="plant in wishlist" :key="plant.id">
          <div class="image">
            <img :src="'/images/'+plant.image">
          </div>
          <div class="info">
            <h1 id="species">{{plant.species}}</h1>
            <h2 id="price">{{plant.price}}</h2>
            <p>{{plant.type}}</p>
          </div>
          <button v-on:click="removeFromList(plant)" class="auto">Remove Plant</button>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1 class="title"> Your wishlist is empty! </h1>
  </div>
</template>

<script>
export default {
  name: 'Wish',
  data() {
    return {
    }
  },
  computed: {
    wishlist() {
      return this.$root.$data.wishlist;
    },
    isEmpty(){
      return this.$root.$data.wishlist.length;
    }
  },
  methods: {
    removeFromList(plant){
      let indexOf = this.$root.$data.wishlist.indexOf(plant);
      if(indexOf > -1){
        this.$root.$data.wishlist.splice(indexOf, 1);
      }
    },
  }
}
</script>

<style scoped>
.title{
  text-align: center;
  font-size: 75px;
}
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
