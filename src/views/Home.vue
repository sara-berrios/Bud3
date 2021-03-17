<template>
  <div class="home">
    <div class="home-img-container">
      <img class="main" src="../assets/images/home.jpg"/>
      <div class="centered">Let's root for each other and watch each other grow.</div>
    </div>

    <div class="row">
      <div class="column">
        <router-link to="/buy">
          <h1>Buy</h1>
          <img class="circular" src="../assets/images/buy.jpg"/>
        </router-link>
      </div>

      <div class="column">
        <router-link to="/wish">
          <h1>Wishlist</h1>
          <img class="circular" src="../assets/images/wishlist.jpeg"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style scoped>
  .main {
    width: 100%;
  }
  .home-img-container {
    position: relative;
    text-align: center;
    color: white;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .centered {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    color: #fcf9f3;
    width: 80%;
  }
  .column {
    float: left;
    width: 50%;
  }
  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  .circular{
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
  h1{
    text-align: center;
  }
</style>
