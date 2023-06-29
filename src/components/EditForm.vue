<template>
  <form @submit.prevent = "saveItem">
    <div>
      <label for="name">Name: </label>
      <span class="name">{{item.name}}</span>
    </div>
    <div>
      <label for="value">Value:  </label>
      <input type="text" id="value" v-model="item.newValue" />
    </div>
    <div class="btns">
      <button type="submit">Save</button>
      <button type="button" @click="$emit('cancel')">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["item"],
  data(){
    return{
      newValue: ''
    }
  },
  methods: {
    saveItem() {
      this.item.value = this.item.newValue
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btns{
  display: flex;
  justify-content: space-between;
}
.btns button {
  background-color: #3f9cdb;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all .3s ease;
  outline: none;
  cursor: pointer;
  width: 140px;
}
.btns button:hover {
  background-color: #2d74a3;
}
.btns button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}
</style>