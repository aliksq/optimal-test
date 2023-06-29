<template>
  <div class="list__content">
    <div class="item__card" >
      <div class="card__content" v-for="item in items" :key="item.name">
        <div class="item__name">
          {{ item.name }}
        </div>
        <div class="item__value">
          {{ item.value }}
        </div>
        <button class="select__item" @click="selectItem(item)">Edit</button>
      </div>

    </div>
    <div v-if="selectedItem">
      <EditForm :item="selectedItem" @cancel = "cancelItem" />
    </div>
  </div>
</template>

<script>
import listData from "@/listData";
import EditForm from "@/components/EditForm";
export default {
  components:{
    EditForm
  },
  data(){
    return{
      items: listData,
      selectedItem: null
    }
  },
  methods:{
    selectItem(item){
      this.selectedItem = item
    },
    cancelItem(){
      this.selectedItem = null
    }
  }
}
</script>

<style scoped>
.list__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
.item__card{
  display: flex;
  flex-direction: column;
  gap: 40px;

}
.card__content{
  display: flex;
  min-width: 400px;
  justify-content: space-between;
  align-items: center;
}
.item__name{
  min-width: 33%;
}
.select__item {
  background-color: #42B983;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all .3s ease;
  outline: none;
  cursor: pointer;
}
button:hover {
  background-color: #2f8960;
}
button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}
</style>