<template>
	<view>
		<view class="search_container">
			<view class="search_input">
				复制标题 搜天猫大额优惠券
			</view>
		</view>
		<view class="QS-tabs-box">
			<QSTabs 
			ref="tabs" 
			:tabs="tabs" 
			animationMode="line3" 
			backgroundColor="#15151A"
			defaultColor="#fff"
			:current="current" 
			@change="change"
			activeColor="#F8D590"
			lineColor="#F8D590"
			height="80"
			swiperWidth="750">
			</QSTabs>
		</view>
		<swiper 
		:style="{'height': '1000rpx'}" 
		:current="swiperCurrent" 
		@transition="transition"
		@animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" >
					<view>
							<view class="banner">
								<image src="../../static/home/banner.png" mode="widthFix"></image>
							</view>
							<view class="mall_nav_container flex flex-wrap">
								<view class="mall_nav" v-for="item in 10">
									<view class="mall_nav_icon">
										<image src="../../static/home/mine_icon_taobao.png" mode="aspectFit"></image>
									</view>
									<view>
										淘宝
									</view>
								</view>
							</view>
							<view class="ad_banner">
								<image src="../../static/home/banner2.png" mode="widthFix"></image>
							</view>
							<view class="for_you_title bgf5 uni-center">
								<image src="../../static/home/weinituijian.png" mode="widthFix"></image>
							</view>
							<view class="crosswise_goods_list_container bgf5">
								<view class="crosswise_goods_container bgf" v-for="item in 10">
									<view class="crosswise_goods flex">
										<image class="crosswise_goods_img" src="../../static/home/good.png" mode="widthFix"></image>
											<view class="crosswise_goods_info flex-1">
												<view class="crosswise_goods_name">
													<!-- <image src="../../static/home/home_icon_horn.png" mode="widthFix"></image> -->
													 毛呢短裤女高腰秋款2019新款外传宽松高腰显瘦百搭冬季打底裤
												</view>
												<view class="coupon_container flex flex_start align-center">
													<view class="coupon_num font-col-f">
														券 ￥5
													</view>
													<view class="add_ell">
														+
														0.022CCQ
													</view>
												</view>
												<view class="price_container flex align-baseline">
													<view class="quanhou_price flex align-baseline">
														<view class="font-col-B1B1B1">
															券后
														</view>
														<view style="margin-left: 8rpx;margin-right: 3upx;"  class="font-size20">
															￥
														</view>
														<view style="margin-right: 15upx;"  class="font38 font_weight">
															30.00
														</view>
													</view>
													<view class="font-col-B1B1B1 market_price text-line-through">
														￥35
													</view>
												</view>
											</view>
										
									</view>
									<view class="crosswise_goods_btn_container flex flex_end">
										<view class="font-col-f flex flex_start align-center crosswise_goods_btn">
											<image src="../../static/home/home_share_icon.png" mode="widthFix"></image>
											<view style="margin-left: 5upx;">
												奖
											</view>
											<view class="font-size20" style="margin: 0 15upx 0 5upx;">
												￥
											</view>
											<view>
												6.66
											</view>
										</view>
									</view>
								</view>
							</view>
					
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import QSTabs from '../../components/QS-tabs/QS-tabs.vue';
	const Sys = uni.getSystemInfoSync();
	const wH = Sys.windowHeight;
	let n = 1;
	const tabs = Array(10).fill('').map(()=> 'tab' + Array(n).fill('s').join('') + n++);
	export default {
		components: {
			QSTabs
		},
		data() {
			return {
				tabs:[...tabs],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0
			}
		},
		methods: {
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

<style scoped>
	.search_container{
		padding: 20upx;
		background-color: #081519;
		}
		.search_input{
			height: 60upx;
			line-height: 60upx;
			background-color: #fff;
			border-radius: 10upx;
			color: #A8A8A8;
			text-align: center;
		}
	.crosswise_goods_info{
			padding-left: 12upx;
		}
		.crosswise_goods_list_container{
			padding: 12upx 24upx 0;
		}
		.crosswise_goods_container{
			margin-bottom: 18upx;
			border-radius: 20upx;
			padding: 24upx;
		}
	.coupon_container{
		margin: 10upx;
	}
	.coupon_container .coupon_num{
		background: #E74E5B;
		border-radius: 10upx;
		padding: 5upx 10upx;
		margin-right: 20upx;
	}
	.crosswise_goods_name image{
		width: 60upx;
	}
	.crosswise_goods_img{
		width: 200rpx;
		height: 200rpx;
	}
	.crosswise_goods_btn{
		padding: 0 25upx;
		height: 60upx;
		border-radius: 30upx;
		background: -webkit-gradient(linear, left top, right top, from(#E9586B), to(#E5444C));
		background: -webkit-linear-gradient(left, #E9586B, #E5444C);
		background: -o-linear-gradient(left, #E9586B, #E5444C);
		background: linear-gradient(to right, #E9586B, #E5444C);
	}
	.crosswise_goods_btn image{
		width: 40upx;
		height: 40upx;
	}
	.add_ell{
		background: #FDF6E7;
		border-radius: 10upx;
		padding: 5upx 10upx;
		color: #C99B46;
	}
	.banner image{
		width: 100%;
	}
	.mall_nav_container{
		padding-top: 20upx;
		background-color: #fff;
	}
	.mall_nav{
		width: 20%;
		text-align: center;
		padding-bottom: 20upx;
	}
	.mall_nav_icon image{
		width: 100upx;
		height: 100upx;
	}
	.ad_banner{
		padding: 24rpx;
		background-color: #f5f5f5;
	}
	.ad_banner image{
		width: 100%;
	}
	.for_you_title image{
		width: 300upx;
	}
	
</style>
