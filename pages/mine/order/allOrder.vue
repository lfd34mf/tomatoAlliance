<template>
	<view class="allOrder">
		<QSTabs
		ref="tabs" 
		:tabs="tabs" 
		animationMode="line3" 
		backgroundColor="#fff"
		defaultColor="#000"
		:current="current" 
		@change="change"
		activeColor="#F8D590"
		lineColor="#F8D590"
		height="80"
		swiperWidth="750">
		</QSTabs>
		<swiper
		:style="{'height': '1000rpx'}" 
		:current="swiperCurrent" 
		@transition="transition"
		@animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" >
					<view class="allOrder_view">
						<view class="noOrder">
							<image src="/static/mine/box.png" mode=""></image>
							<view>您还没有订单~</view>
							<view>去首页逛逛寻找您想要的商品吧~</view>
							<view class="toHome" @click="toHome">
								首页逛逛
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue';
		export default {
			components: {
				QSTabs
			},
			data(){
				return{
					current: 0,
					swiperCurrent: 0,
					tabsHeight: 0,
					dx: 0,
					tabs:[
						{name:'全部',key:'all'},
						{name:'已付款',key:'all'},
						{name:'已完成',key:'all'},
						{name:'已失效',key:'all'},
					]
				}
			},
			methods: {
				toHome(){
					uni.switchTab({
					    url: '/pages/home/index'
					});
				},
				change(index) {
					this.swiperCurrent = index;
				},
				transition({ detail: { dx } }) {
					this.$refs.tabs.setDx(dx);
				},
				animationfinish({detail: { current }}) {
					this.$refs.tabs.setFinishCurrent(current);
					this.swiperCurrent = current;
					this.current = current;
				}
			}
		}
</script>

<style lang="less">
	.allOrder_view{
		position: relative;
		.noOrder{
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%,0);
			text-align: center;
			width: 80%;
			.toHome{
				width: 100%;
				background: #DEB97C;
				padding: 30upx;
				color: #fff;
				box-sizing: border-box;
				font-size: 30upx;
				border-radius: 4px;
			}
		}
	}
</style>
