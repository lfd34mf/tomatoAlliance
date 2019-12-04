<template>
	<view>
		<view class="task_top_info">
			<view class="task_top_info_title uni-center">
				每天一分钟 省钱更轻松
			</view>
			<view class="task_card_container">
				<view class="task_inner_card">
					<view class="flex flex_between">
						<view class="el_balance flex align-center">
							当前CCQ总额
							<image @click="can_see_ell=false" v-show="can_see_ell" src="../../static/task/taskpage_open_icon.png" mode=""></image>
							<image @click="can_see_ell=true" v-show="!can_see_ell" src="../../static/task/taskpage_close_icon.png" mode=""></image>
						</view>
						<view class="see_detail flex align-center">
							<image class="shouzhi" src="../../static/task/taskpage_finger_icon.png" mode=""></image>
							<view class="see_detail_text">
								查看明细
							</view>
							<view class="flex flex_column flex_center">
									<image class="youjiantou" src="../../static/task/taskpage_more_icon.png" mode="widthFix"></image>
						
							</view>
						</view>
					</view>
					<view class="el_balance_num">
						{{can_see_ell?666:'***'}}
					</view>
				</view>
				
				<image class="rank_icon" src="../../static/task/taskpage_sharevalue0_icon.png" mode="widthFix"></image>
				
				<view class="mall_nav_container flex flex-wrap">
					<view class="mall_nav">
						<view class="mall_nav_icon">
							<image src="../../static/task/taskpage_taskstamps_icon.png" mode="aspectFit"></image>
						</view>
						<view>
							任务券
						</view>
					</view>
					<view class="mall_nav">
						<view class="mall_nav_icon">
							<image src="../../static/task/taskpage_liveness_icon.png" mode="aspectFit"></image>
						</view>
						<view>
							活跃度
						</view>
					</view>
					<view class="mall_nav">
						<view class="mall_nav_icon">
							<image src="../../static/task/taskpage_gongxianzhi_icon.png" mode="aspectFit"></image>
						</view>
						<view>
							贡献值
						</view>
					</view>
					<view class="mall_nav">
						<view class="mall_nav_icon">
							<image src="../../static/task/taskpage_startalent_icon.png" mode="aspectFit"></image>
						</view>
						<view>
							星级达人
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="task_list_container pd24">
			<view class="task_list" v-for="item in 4">
				<view class="task_title_container">
						<view class="task_title">
					基础任务
				</view>
				<view class="task_subheading">
					完成三个基础任务即可获得CCQ
				</view>
				</view>
			
				<view 
				v-for="item in 4"
				class="task_detail flex flex_between align-center">
					<view class="flex align-center">
						<view class="flex flex_column flex_center">
							<image class="task_detail_img" src="../../static/logo.png" mode="widthFix"></image>
						
						</view>
						<view class="flex flex_column flex_between">
							<view class="task_detail_title">
								查看每日爆款消息
							</view>
							<view class="task_detail_subheading">
								贡献值 +0.02
							</view>
						</view>
					</view>
					<view class="task_detail_btn">
						去完成
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				can_see_ell:true
			}
		},
		onLoad() {
				// uni.navigateTo({
				// 	url: '../home/home'
				// });
		},
		methods: {
	
		}
	}
</script>

<style>
	@import '../../common/mall_nav.css';
	.mall_nav_container{
		background: transparent;
		color: #827F7E;
	}
	.mall_nav{
		font-size: 26upx;
	}
	.mall_nav_icon image{
		width: 80upx;
		height: 80upx;
	}
	.task_inner_card{
		padding: 30upx 0 30upx 30upx;
		width: 77%;
		position: relative;
		top: -20upx;
		left: -20upx;
		background: url(../../static/task/taskpage_smallcard_img.png);
		background-size: cover;
		border-radius: 15upx;
	}
	.see_detail_text{
		margin: 0 5upx;
		font-size: 20upx;
	}
	.shouzhi{
		width: 40upx;
		height: 40upx;
		margin-bottom: -5upx;
	}
	.youjiantou{
		width: 27upx;
		height: 27upx;
		margin-bottom: -5upx;
	}
	.see_detail{
		background: #F9DB9F;
		height: 50upx;
		line-height: 50upx;
		border-top-left-radius: 25upx;
		border-bottom-left-radius: 25upx;
		padding: 0 10upx;
		color: #C09251;
	}
	.el_balance{
		color: #84551D;
	}
	.el_balance_num{
		color: #7F4F18;
		font-size: 36upx;
		font-weight: bold;
		margin-top: 20upx;
	}
	.el_balance image{
		margin-left: 16upx;
		width: 40upx;
		height: 40upx;
	}
	.task_card_container{
		position: relative;
		border-radius: 15upx;
		background: -moz-linear-gradient(top, #373330 0%, #1B1B1C 100%) ;
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#373330), color-stop(100%,#1B1B1C))  ;
		background: -webkit-linear-gradient(top, #373330 0%,#1B1B1C 100%) ;
		background: -o-linear-gradient(top, #373330 0%,#1B1B1C 100%) ;
		background: -ms-linear-gradient(top, #373330 0%,#1B1B1C 100%) ;
	}
	.rank_icon{
		position: absolute;
		top: 15upx;
		right: 15upx;
		width: 70upx;
		height: 70upx;
	}
	.task_top_info{
		background: url(../../static/task/bg.png);
		background-size: cover;
		padding: 0 50upx 40upx;
	}
	.task_top_info_title{
		color: #E6C890;
		font-size: 42upx;
		padding: 40upx 0 80upx;
	}
	.mall_nav{
		width: 25%;
		text-align: center;
		padding-bottom: 20upx;
	}
	.task_list{
		    box-shadow: rgba(28,28,28,.1) 0px 0px 6px 2px;
			border-radius: 20upx;
			overflow: hidden;
			padding: 35upx 40upx 50upx;
	}
	.task_detail_img{
		width: 72upx;
		height: 72upx;
		margin-right: 40upx;
	}
	.task_title_container{
		margin-bottom: 40upx;
	}
	.task_title{
		font-weight: 700;
		font-size: 30upx;
		color: #000;
		margin-bottom: 10upx;
	}
	.task_subheading{
		color: #999;
		font-size: 22upx;
	}
	.task_list:not(:last-child){
		margin-bottom: 30upx;
	}
	.task_detail:not(:last-child){
		margin-bottom: 30upx;
	}
	.task_detail_title{
		color: #000000;
		font-size: 26upx;
		margin-bottom: 8upx;
	}
	.task_detail_subheading{
		font-size: 20upx;
		color: #999;
	}
	.task_detail_btn{
		height: 44upx;
		line-height: 44upx;
		padding: 0 30upx;
		border:1px solid #D5BA87;
		color: #D3B781;
		border-radius: 26upx;
	}
</style>
