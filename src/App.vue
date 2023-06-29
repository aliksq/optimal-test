<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <div class="content">
          <h1>Редактор блоков на Vue 3</h1>
          <ItemsList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsList from "./components/ItemsList"
export default {
  components: {ItemsList},
}
</script>

<style>
@import '~reset.css/reset.css';
@import '~normalize.css/normalize.css';
h1{
  color: #2C3E50;
}
.wrapper{
  max-width: 1500px;
}
.container{
  margin: 0 auto;
  max-width: 80%;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
