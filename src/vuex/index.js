/*
* @Author: Administrator
* @Date:   2018-06-10 10:19:47
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-10 15:15:09
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{

	},
	state:{
		count:1,
		name:'cj',
		shop_list:[
			{id:11,name:'鱼香肉丝',price:'12'},
			{id:22,name:'宫保鸡丁',price:'14'},
			{id:34,name:'土豆丝',price:'10'},
			{id:47,name:'米饭',price:'2'},
		],
		// 添加到购物车的商品
		added:[]

	},
	getters:{
		shoplist:function(state){
			return state.shop_list;
		},
		cartProducts:function(state){
			return state.added.map(function({id,num}){
				// 返回 最开始符合条件的值，否则返回undefined
				let product=state.shop_list.find(function(curr,index){
					return curr.id==id;
				})
				// console.log(product)
				return {
					...product,
					num
				}
			})
		},
		// 计算总数量
		totalNum:function(state,getters){
			let total=0;
			getters.cartProducts.forEach(function(item){
				total+=item.num;
			})
			return total;
		},
		// 总价格
		totalPrice:function(state,getters){
			let total=0;
			getters.cartProducts.forEach(function(item){
				total+=item.price*item.num;
			})
			return total;
		}
	},
	mutations:{
		add(state,{id}){
			let record=state.added.find(function(item){
				return item.id==id;
			})
			if(!record){
				state.added.push({
					id,
					num:1
				})
			}else{
				record.num++
			}
			console.log(state.cartProducts)
		},
		del(state,product){
			state.added.forEach(function(curr,index){
				if(curr.id==product.id){
					state.added.splice(index,1);
				}
			})
		},
		clearAll(state){
			state.added=[]
		}
	},
	actions:{
		addToCart(state,product){
			state.commit('add',{
				id:product.id
			})
		},
		// 删除指定商品
		delProduct({commit},product){
			commit('del',product)
		},
		clearAllCart({commit}){
			commit('clearAll')
		}
	}
})