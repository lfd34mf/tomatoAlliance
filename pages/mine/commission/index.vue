<template>
	<!-- 佣金页面 -->
	<view class="commission">
		<!-- 账户余额 -->
		<view class="balance">
			<text class="labelText">账号余额：</text>
			<view class="balance_money">
				<text>{{ money }}</text>
				<view class="tx">
					去提现
					<view class="iconfont iconyou"></view>
				</view>
			</view>
		</view>
		<!-- tabs -->
		<QSTabs
		ref="tabs" 
		:tabs="tabs" 
		animationMode="line3" 
		backgroundColor="#010101"
		defaultColor="#fff"
		:current="current" 
		@change="change"
		activeColor="#F8D590"
		lineColor="#F8D590"
		height="80"
		swiperWidth="750">
		</QSTabs>
		<!-- tabs内页 -->
		<swiper
		:style="{'height': '1000rpx'}" 
		:current="swiperCurrent" 
		@transition="transition"
		@animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" >
					<commissionDetail></commissionDetail>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue';
	import commissionDetail from './commissionDetail';
		export default {
			components: {
				QSTabs,commissionDetail
			},
			data(){
				return{
					current: 0,
					swiperCurrent: 0,
					tabsHeight: 0,
					dx: 0,
					tabs:[
						{name:'京东',key:'all'},
						{name:'淘宝',key:'all'},
						{name:'拼多多',key:'all'}
					],
					money:0
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
	.commission{
		.balance{
			background: #010101;
			color: #fff;
			.labelText{
				color: #797979;
			}
			.balance_money{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30upx;
				uni-text{
					font-size: 50upx;
				}
				.tx{
					display: flex;
					align-items: center;
					background-image: linear-gradient(to right, #F9DA9E , #F7D48D);
					padding: 0 25upx;
					font-size: 20upx;
					color: #7F4F18;
					border-radius: 14px  0 0 14px;
				}
			}
		}
	}
	
</style>
