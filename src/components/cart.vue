<template>
	<div>
		cart
		<h4>已选商品</h4>
		<ul>
			<li>
				<span>id</span>
				<span>名称</span>
				<span>价格</span>
				<span>操作</span>
				<span>数量</span>
			</li>
			<li v-for="item in cartProducts">
				<span>{{item.id}}</span>
				<span>{{item.name}}</span>
				<span>{{item.price}}</span>
				<span>{{item.num}}</span>
				<button @click='delProduct(item)'>删除</button>
			</li>
			<li v-if="!cartProducts.length">
				<span>你的购物车空空如也。。。</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapGetters,mapActions,mapState } from 'vuex';
	export default{
		name:'cart',
		data(){
			return {}
		},
		computed:{
			...mapGetters(['cartProducts']),
			...mapState(['added'])
		},
		methods:{
			...mapActions(['delProduct'])
		}
	}

</script>
<style>
	
</style>