<template>
	<div>
		<div class="item-wrapper">
			<div>总数 <strong>{{ totalNum }}</strong></div>
			<div>总价 <strong>{{ totalPrice }}</strong></div>
			<button @click="clearAllCart">clear all</button>
		</div>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return {}
		},
		computed:{
			...mapGetters(['totalNum','totalPrice'])
		},
		methods:{
			...mapActions(['clearAllCart'])
		}
	}
</script>