<template>
	<div class="product">
		<h4>商品信息</h4>
		<ul>
			<li>
				<span>id</span>
				<span>名称</span>
				<span>价格</span>
				<span>操作</span>
			</li>
			<li v-for="item in shoplist">
				<span>{{item.id}}</span>
				<span>{{item.name}}</span>
				<span>{{item.price}}</span>
				<button @click='addToCart(item)'>
					添加
				</button>
			</li>
		</ul>
		<h1>{{ cj }}</h1>
		<h2>{{ shop_list }}</h2>
		<h3>{{ count}}</h3>
		<button @click='increment'>add count</button>
	</div>
</template>
<script>
import {mapGetters,mapActions,mapMutations,mapState } from 'vuex'
	export default{
		name:'product',
		data(){
			return {
				
			}
		},
		computed:{
			...mapGetters(['shoplist'])
			
		},
		// computed:mapState({
		// 	count:function(state){
		// 		return state.count+1
		// 	},
		// 	hehe:function(state){
		// 		return state.name
		// 	}
		// }),
	
		methods:{
			// ...mapMutations({
			// 	add:'increment'
			// })
			...mapActions(['addToCart'])
		}
	}

</script>
<style></style>