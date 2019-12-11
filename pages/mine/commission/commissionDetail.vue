<template>
	<view class="commissionDetail">
		<view class="notice">
			<view class="iconfont iconhorn"></view>
			每月25日可提现上月【确认收货】的收益
		</view>
		<view class="commissionDetail_content">
			<view class="title">
				<text>日预估收入</text>
				<view class="title_btn" @click="toDo('allOrder')">说明<view class="iconfont iconyou"></view></view>
			</view>
			<view class="commissionBox" v-for="(item,index) of dayMoney" :key='index'> 
				<view class="commissionBox_List">
					<view class="commissionBox_Item" :class="index" v-for="(val,idx) of item" :key="index+'_'+idx">
						<view>{{ val['k'] }}</view>
						<view >{{ val['v'] }}</view>
					</view>
				</view>
			</view>
			<view class="title">
				<text>月预估收入</text>
				<view class="title_btn" @click="toDo('allOrder')">说明<view class="iconfont iconyou"></view></view>
			</view>
			<view class="commissionBox">
				<view class="commissionBox_List"  v-for="(item,index) of mouthData" :key='index'>
					<view class="commissionBox_Item" :class="index" v-for="(val,idx) of item" :key="index+'_'+idx">
						<view>{{ val['k'] }}</view>
						<view >{{ val['v'] }}</view>
					</view>
				</view>
			</view>
			<view class="commissionBox">
				
			</view>
			<view class="title">
				<text>月预估收入</text>
				<view class="title_btn" @click="toDo('allOrder')">规则说明<view class="iconfont iconyou"></view></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				dayMoney:{
					tody:{
						num:{
							k:'付款笔数',
							v:'0'
						},
						chengjiao:{
							k:'成交预估收入',
							v:'0'
						},
						jiesuan:{
							k:'结算预估收入',
							v:'0'
						}
					},
					tomorrow:{
						num:{
							k:'付款笔数',
							v:'0'
						},
						chengjiao:{
							k:'成交预估收入',
							v:'0'
						},
						jiesuan:{
							k:'结算预估收入',
							v:'0'
						}
					}
				},
				mouthData:{
					nowMouth:{
						chengjiao:{
							k:'本月成交预估收入',
							v:'0'
						},
						jiesuan:{
							k:'本月结算预估收入',
							v:'0'
						}
					},
					prevMouth:{
						chengjiao:{
							k:'上月成交预估收入',
							v:'0'
						},
						jiesuan:{
							k:'上月结算预估收入',
							v:'0'
						}
					}
				}
			}
		}
	}
</script>

<style lang="less">
	@groveWidth: 20upx;
	.commissionDetail{
		background: #EDEDED;
		.commissionDetail_content{
			margin: @groveWidth;
		}
	}
	.notice{
		padding: @groveWidth;
		display: flex;
		background: #F6F2E7;
		color: #A35D05;
		.iconhorn{
			margin-right: 10upx;
		}
	}
	.title {
		padding: .5rem 0;
		display: flex;
		justify-content: space-between;
	
		.title_btn {
			color: #a7a7a7;
			display: flex;
			align-items: center;
		}
	}
	.commissionBox{
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 0 @groveWidth;
		.commissionBox_List{
			display: flex;
			padding: @groveWidth 0;
			.commissionBox_Item{
				color: #969696;
				flex: 1;
				text-align: center;
				& + .commissionBox_Item{
					border-left: 1upx solid #969696;
				}
			}
		}
		&+.commissionBox{
			margin-top: 20upx;
		}
		
	}
</style>
