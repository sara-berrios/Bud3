<template>
  <div class="home">
    <div class="home-img-container">
      <img class="main" src="images/indoor/i1.jpg"/>
      <div class="centered">Let's root for each other and watch each other grow.</div>
    </div>

    <div class="row">
      <div class="column">
        <router-link to="/buy" class="link">
          <h1>Buy</h1>
          <img class="circular" src="../assets/buy.jpg"/>
        </router-link>
      </div>

      <div class="column">
        <router-link to="/wish" class="link">
          <h1>Wishlist</h1>
          <img class="circular" src="../assets/wish2.jpeg"/>
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
    margin-bottom: 100px;
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
    padding: 40px;
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
    margin: auto;
    display: block;
  }
  h1{
    text-align: center;
  }
  .link{
    color: #4D774E;
    text-decoration: none;
  }
  .link:hover{
    color: black;
  }


  @media only screen and (max-width: 650px) {
  .main-img {
    height: 300px;
    margin-bottom: 50px !important;
  }

  .centered {
    font-size: 30px;
    font-weight: bold;
    width: 300px;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }
  .header{
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 50px;
  }
  .footer {
    margin-top: 100px;
  }


}
</style>
