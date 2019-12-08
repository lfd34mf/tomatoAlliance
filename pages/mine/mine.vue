<template>
	<view class="mine">
		<!-- 用户信息 -->
		<userStatus></userStatus>
		<!-- 相关功能 -->
		<view class="otherModule">
			<!-- 我的订单 -->
			<view class="myOrder moudelItem">
				<view class="title">
					<text>我的订单</text>
					<text class="title_btn">查看全部</text>
				</view>
				<!-- 订单按钮 -->
				<view class=" moudelItem_list">
					<view class="moudelItem_Item " v-for="(item,index) in myOrder" :key='index'>
						<image :src="item.icon" mode="widthFix"></image>
						<view class="text">{{ item.text }}</view>
					</view>
				</view>
			</view>
			<!-- 我的节点 -->
			<view class="myNode moudelItem">
				<view class="title">
					<text>我的节点</text>
					<text class="title_btn"></text>
				</view>
				<!-- 订单按钮 -->
				<view class=" moudelItem_list">
					<view class="moudelItem_Item " v-for="(item,index) in myNode" :key='index'>
						<image :src="item.icon" mode="widthFix"></image>
						<view class="text">{{ item.text }}</view>
					</view>
				</view>
			</view>
			<!-- 广告 -->
			<view class="ad moudelItem">
				<image src="../../static/mine/banner2.png" mode="widthFix"></image>
			</view>
			<view class="myServer moudelItem">
				<view class="title">
					<text>我的服务</text>
					<text class="title_btn"></text>
				</view>
				<!-- 订单按钮 -->
				<view class=" moudelItem_list">
					<view class="moudelItem_Item " v-for="(item,index) in myServer" :key='index'>
						<image :src="item.icon" mode="widthFix"></image>
						<view class="text">{{ item.text }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import userStatus from './userStatus.vue';
	export default {
		data() {
			return {
				myOrder: [{
						icon: '../../static/logo.png',
						text: '全部'
					},
					{
						icon: '../../static/logo.png',
						text: '已付款'
					},
					{
						icon: '../../static/logo.png',
						text: '已完成'
					},
					{
						icon: '../../static/logo.png',
						text: '已失效'
					}
				],
				myNode: [{
						icon: '../../static/logo.png',
						text: '我的钱包'
					},
					{
						icon: '../../static/logo.png',
						text: '我的粉丝'
					},
					{
						icon: '../../static/logo.png',
						text: '粉丝订单'
					},
					{
						icon: '../../static/logo.png',
						text: '邀请好友'
					}
				],
				myServer: [{
						icon: '../../static/logo.png',
						text: '我的收藏'
					},
					{
						icon: '../../static/logo.png',
						text: '我的足迹'
					},
					{
						icon: '../../static/logo.png',
						text: '找回订单'
					},
					{
						icon: '../../static/logo.png',
						text: '地推物料'
					},
					{
						icon: '../../static/logo.png',
						text: '常见问题'
					},
					{
						icon: '../../static/logo.png',
						text: '联系我们'
					},
					{
						icon: '../../static/logo.png',
						text: '意见反馈'
					},
					{
						icon: '../../static/logo.png',
						text: '设置'
					}
				]
			}
		},
		components: {
			userStatus
		},
	}
</script>

<style lang="less">
	@groveWidth: 20upx;
	.mine {
		background: #EDEDED;
		height: 100%;

		.otherModule {
			background: #EDEDED;
			padding: @groveWidth;
		}

		.ad {
			padding: 0 !important;
			font-size: 0;

			image {
				width: 100%;
			}
		}

		.moudelItem {
			border-radius: 5upx;
			background: #fff;
			padding: 0 .8rem;
			margin-bottom: @groveWidth;

			.title {
				padding: .5rem 0;
				border-bottom: 1upx solid #ddd;
				display: flex;
				justify-content: space-between;

				.title_btn {
					color: #ddd;
				}
			}

			.moudelItem_list {
				display: flex;
				flex-wrap: wrap;

				.moudelItem_Item {
					width: 25%;
					text-align: center;
					padding: 20upx 0;

					.text {
						font-size: 10upx;
					}

					image {
						width: 25%;
					}
				}
			}
		}
	}
</style>
