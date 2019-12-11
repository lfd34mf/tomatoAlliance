<template>
	<view class="userStatus">
		<!-- 未登录 -->
		<view class="noLogin" @click="login" v-if="loginStatus == '0'">
			<view class="head">
				<view class="headImg">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<text>立即登录</text>
			</view>
			<text>></text>
		</view>
		<!-- 已登录 -->
		<view class="logined"  v-else-if="loginStatus == '1'">
			<view class="bg"></view>
			<!-- 用户信息 -->
			<view class="userInfo">
				<view class="userInfo_info">
					<view class="headImg" @click="loginOut">
						<image src="../../static/logo.png" mode="widthFix"></image>
					</view>
					<view class="userInfo_info_box">
						<view class="userInfo_info_phone ">
							151****0711
							<view class="userInfo_info_rank">
								vip
							</view>
						</view>
						<view class="invitationCode">
							邀请码：{{ 123123123 }}
							<text class="copyBtn">复制</text>
						</view>
					</view>
				</view>
				<view class="bindWexin">
					<view class="iconfont iconweixin"></view>
					绑定微信
					<view class="iconfont iconyou"></view>
				</view>
			</view>
			<!-- 佣金 -->
			<view class="commission">
				<view class="commission_all moneyItem">
					<view class="uni-inlin-center moneyTitle" @click="toCommission">
						<view class="iconfont icontishi"></view>
						累计预估佣金收益（元）
						<view class="iconfont iconyou"></view>
					</view>
					<view class="uni-center">{{ 0 }}</view>
				</view>
				<view class="moneyBox">
					<view class="commission_today">
						<view class="moneyTitle" @click="toCommission">今日预估佣金收入（元）</view>
						<view class="uni-center">{{ 0 }}</view>
					</view>
					<view class="line"></view>
					<view class="commission_month">
						<view class="moneyTitle" @click="toCommission">本月预估佣金收入（元）</view>
						<view class="uni-center">{{ 0 }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters,mapMutations } from 'vuex'
	export default {
		data(){
			return {
				
			}
		},
		mounted(){
			console.log(this.userInfo)
		},
			
		methods:{
			login(){
				this.setLoginStatus('1')
			},
			toCommission(){
				uni.navigateTo({
				    url: '/pages/mine/commission/index'
				});
			},
			loginOut(){
				this.setLoginStatus('0')
			},
			...mapMutations(['setLoginStatus'])
		},
		computed:{
			...mapGetters(['userInfo','loginStatus'])
		}
	}
</script>

<style lang="less">
	@groveWidth: 20upx;
	@default-color-gold: #F8D590;
	@color-gold: #D5B063;
	.userStatus{
			.noLogin {
				background: #222126;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #fff;
				padding: 0 20upx 50upx;
			
				.head {
					display: flex;
					flex: 1;
					align-items: center;
				}
			}
			.logined{
				position: relative;
				z-index: 0;
				.bg{
					position: absolute;
					top: 0;
					bottom: 30%;
					width: 100%;
					z-index: -1;
					background: #252427;
				}
				.userInfo{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: @groveWidth 0 @groveWidth @groveWidth;
					color: 	@default-color-gold ;
					.userInfo_info{
						display: flex;
						flex: 1;
						.userInfo_info_box{
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							uni-view{
								display: flex;
							}
							.userInfo_info_phone{
								.userInfo_info_rank{
									
								}							}
							.invitationCode{
								color: #fff;
								display: flex;
								align-items: center;
								.copyBtn{
									color: @default-color-gold;
									border: 1upx solid @default-color-gold;
									border-radius: 2px;
									padding: 2upx 5upx;
									margin-left: 10upx;
								}
							}
						}
					}
					.bindWexin{
						display: flex;
						align-items: center;
						background-image: linear-gradient(to right, #F9DA9E , #F7D48D);
						padding: 10upx 15upx;
						color: #7F4F18;
						border-radius: 14px  0 0 14px;
					}
				}
				.commission{
					background-image: linear-gradient(to right, #F9DA9E , #F7D48D);
					margin: @groveWidth;
					border-radius: 10px;
					padding: @groveWidth 0;
					>uni-view{
						display: flex;
						flex-direction: column;
					}
					.moneyBox{
						display: flex;
						align-items: center;
						flex-direction: row;
						justify-content: center;
						.line{
							height: 30upx;
							width: 2px;
							background: @color-gold;
						}
					}
					.moneyTitle{
						padding: 20upx;
					}
				}
			}
			.headImg {
				width: 20%;
				margin-right: 20upx;
				border-radius: 50%;
				overflow: hidden;
				font-size: 0;
						
				image {
					width: 100%;
				}
			}
	}
</style>
