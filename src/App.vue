<template>
  <div>
    <img class="logo" src="/images/logo.png">
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><router-link class="pure-menu-link" to="/">Home</router-link></li>
        <li class="pure-menu-item"><router-link class="pure-menu-link" to="/buy">Buy</router-link> </li>
        <li class="pure-menu-item"><router-link class="pure-menu-link" to="/wish">Wishlist</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", sans-serif;
}

body{
  background-color: #fcf9f3;
}
.footer {
  text-align: center;
  margin-top: 200px;
  background-color: #4D774E;
  color:#fcf9f3;
}
.pure-menu{
  text-align: right;
  background-color:#4D774E;
  height: 80px;
}
.pure-menu-link{
  color: black;
  font-weight: bold;
  margin-top: 15px;
  font-size: 20px;
}
.logo{
  height: 70px;
  width: 70px;
  margin-top: 5px;
  position: absolute;
}
</style>
