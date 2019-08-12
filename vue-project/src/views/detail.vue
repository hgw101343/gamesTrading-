<template>
  <div class="detail">
    <Detail></Detail>
  </div>
</template>

<script>
// @ is an alias to /src
import Detail from "@/components/detailpage.vue";
export default {
  name: "detail",
  components: {
    Detail
  }
};
</script>
<style scoped>
.detail {
  height: 100%;
}
</style>