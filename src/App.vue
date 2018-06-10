<template>
  <div id="app">
    <h3>Vuex购物车</h3>
    <!-- 商品列表 -->
	<vue-product></vue-product>
	<!-- 购物车列表 -->
	<vue-cart></vue-cart>
	<!-- 小计 -->
	<vue-info></vue-info>
  </div>
</template>

<script>
import product from '@/components/product.vue'
import cart from '@/components/cart.vue'
import info from '@/components/info.vue'
export default {
  name: 'App',
  components:{
  	vueProduct:product,
  	vueCart:cart,
  	vueInfo:info
  }
}
</script>

<style>

</style>
