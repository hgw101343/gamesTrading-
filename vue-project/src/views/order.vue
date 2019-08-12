<template>
  <div>
    <Order></Order>
  </div>
</template>

<script>
// @ is an alias to /src
import Order from "@/components/orderpage.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "list",
  components: {
    Order
  }
};
</script>
<style scoped>
div {
  height: 100%;
}
</style>