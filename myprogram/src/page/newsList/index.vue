<template>
    <div class="new-list-container">
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class='mui-ellipsis'>
                            <span>发表时间:2018-1-1 12:12:12</span>
                            <span>点击: 0次</span>
                        </p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class='mui-ellipsis'>
                            <span>发表时间:2018-1-1 12:12:12</span>
                            <span>点击: 0次</span>
                        </p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class='mui-ellipsis'>
                            <span>发表时间:2018-1-1 12:12:12</span>
                            <span>点击: 0次</span>
                        </p>
					</div>
				</a>
			</li>
		</ul>
        <!-- <h1>1519819898198</h1> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
.new-list-container{
    padding-top:50px;
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
