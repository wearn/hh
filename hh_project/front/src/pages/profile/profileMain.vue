<template>
    <NavMain />
    <div class="main_list">
	<div class="Container_list">	
		<div class="bloks_panel_list">
			<div class="content_div_list">
				<p class="list_p">"Text Text Text"</p>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
import NavMain from "@/components/mainPage/navMain.vue";

export default {
	components: {
	NavMain,
  }
} 
</script>

<style scoped>
.main_list{
		width: 100%;
		background-image: url(@/img/1.png);
		background-size: cover;
		height: calc(100vh - 150px);
	}
	.Container_list{
		margin: 0px 120px;
		position: relative;
	}
	.bloks_panel_list{
		background-color: #E8E7E7;
		border-radius: 15px;
		height: calc(100vh - 300px);
		width: 100%;
	}

    .content_div_list{
        padding: 30px 30px;
    }
    .list_p{
        font-size: 18px;
        color: #000000;
    }
</style>