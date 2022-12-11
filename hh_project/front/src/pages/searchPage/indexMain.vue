<template>
<NavMain />
<div class="main_search">
	<div class="Container_search">
		<div class="input_btn_search">
			<input class="search_main_input" type="text">
			<button class="search_main_btn">Поиск</button>
		</div>
		<div class="search_panel">
			<span class="panel_s_span">Вакансии</span>
			<span class="panel_s_span">Резюме</span>
			<span class="panel_s_span">Компании</span>
		</div>
		<div class="bloks_panel">
			
				<span class="span_search">По вашему запросу нашлось : N Объявлений</span>
			
			<hr>
			<div class="content_div">
				<div class="content_div_nut">
					<span class="Vak_header">"Название вакансии"</span>
				</div>
				<div class="content_div_nut">
					<span class="stat_span_search">Название компании:</span>
					<span class="din_span_search"> </span>
				</div>
				<div class="content_div_nut">
					<span class="stat_span_search">Заплата:</span>
					<span class="din_span_search"> "N"</span>
				</div>
				<div class="content_div_nut">
				<span class="stat_span_search">Город</span>
				<span class="din_span_search"> "N"</span>
				</div>
				<div class="content_div_nut">
					<button class="serch_btn_more">Подробнее</button>
					<button  class="serch_btn_cont">Показать контакты</button>
				</div>
				
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
	.main_search{
		width: 100%;
		background-image: url(@/img/1.png);
		background-size: cover;
		height: calc(100vh - 150px);
	}
	.Container_search{
		margin: 0px 120px;
		position: relative;
	}
	.bloks_panel{
		background-color: #E8E7E7;
		border-radius: 15px;
		height: calc(100vh - 300px);
		width: 100%;
		
	}
	.span_search{
		font-weight: 600;
		color:#000000;
		font-size: 20px;
		padding-left: 20px;
	}
	.content_div{
		width: 500px;
		height: 230px;
		background-color: #ffffff;
		border-radius: 15px;
		margin-left: 15px;
		padding-left: 15px;

	}
	.Vak_header{
		color: #0812FD;
		font-weight: bold;
		font-size: 20px;
	}
	.serch_btn_more{
		background-color: #0812FD;
		color:#ffffff;
		padding: 12px 66px;
		font-size: 14px;
		border: none;
		border-radius: 15px;
	}
	.serch_btn_cont{
		padding: 12px 66px;
		font-size: 14px;
		border: none;
		border-radius: 15px;
		background-color: #ffffff;
		border:1px solid #000000;
		margin-left: 15px;
	}
	.search_main_input{
		width: 50%;
		height: 50px;
		border-radius: 30px;
		border: 1px solid black;
		font-size: 20px;
		padding-left: 20px;
	}
	.stat_span_search{
		font-size: 16px;
	}
	.din_span_search{
		font-size: 18px;
		font-weight: 900;
	}
	.content_div_nut{
		padding-top: 15px;
	}
	.search_main_btn{
		font-size: 16px;
		font-weight: 700;
		color: #ffffff;
		background-color: #0812fd;
		border-radius: 30px;
		padding: 15px 50px;
		text-align: right;
		right: 2%;
		position: relative;
		cursor: pointer;
		border: 1px solid black;
		z-index: -1;
	}
	.input_btn_search{
		padding-top: 25px;
	}
	.search_panel{
		margin: 15px 0px;
		text-align: center;
	}
	.panel_s_span{
		font-size: 20px;
		font-weight: 800;
		padding-left: 30px;
	}
</style>
