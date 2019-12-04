<template>
	<view class="mine">
		<!-- 用户信息 -->
		<view class="userInfo"></view>
		<!-- 相关功能 -->
		<view class="otherModule">
			<!-- 我的订单 -->
			<view class="myOrder moudelItem">
				<view class="title">
					<text>我的订单</text>
					<text class="title_btn">查看全部></text>
				</view>
				<!-- 订单按钮 -->
				<view class=" moudelItem_list">
					<view class="moudelItem_Item " v-for="(item,index) in myOrder" :key='index'>
						<image :src="item.icon" mode="aspectFit"></image>
						<view>{{ item.text }}</view>
					</view>
				</view>
			</view>
			<!-- 我的节点 -->
			<view class="myNode">
				
			</view>
			<!-- 广告 -->
			<view class="ad">
				
			</view>
			<view class="myServer">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					myOrder:[
						{icon:'../../static/logo.png',text:'全部'},
						{icon:'../../static/logo.png',text:'已付款'},
						{icon:'../../static/logo.png',text:'已完成'},
						{icon:'../../static/logo.png',text:'已失效'}
					],
					myNode:[
						{icon:'../../static/logo.png',text:'我的钱包'},
						{icon:'../../static/logo.png',text:'我的粉丝'},
						{icon:'../../static/logo.png',text:'粉丝订单'},
						{icon:'../../static/logo.png',text:'邀请好友'}
					],
					myServer:[
						{icon:'../../static/logo.png',text:'我的收藏'},
						{icon:'../../static/logo.png',text:'我的足迹'},
						{icon:'../../static/logo.png',text:'找回订单'},
						{icon:'../../static/logo.png',text:'地推物料'},
						{icon:'../../static/logo.png',text:'常见问题'},
						{icon:'../../static/logo.png',text:'联系我们'},
						{icon:'../../static/logo.png',text:'意见反馈'},
						{icon:'../../static/logo.png',text:'设置'}
					]
			}
		},
	}
</script>

<style lang="less">
	.mine{
		background: #EDEDED;
		height: 100%;
		.userInfo{
		}
		.moudelItem{
			border-radius: 5px;
			background: #fff;
			padding: .8rem;
			.title{
				padding: .5rem 0;
				border-bottom: 1px solid #ddd;
				display: flex;
				justify-content: space-between;
				.title_btn{
					color: #ddd;
				}
			}
			.moudelItem_list{
				display: flex;
				flex-wrap: wrap;
				.moudelItem_Item{
					width: 25%;
					image{
						width: 100%;
						height: auto;
					}
				}
			}
		}
	}
</style>
