<template>
    <div class="nav_panel">
    <div class="cont">
        <div class="left_panel">
            <span>city</span>
        </div>
        <div class="right_panel">
            <ul class="nav_ul">
                <li><span>CVs preparados</span></li>
                <li><span>Empleadores</span></li>
                <li><span class="login_span">Login</span></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
 li {
        list-style-type: none;
        cursor: pointer;
    }
    .nav_panel{
        width: 100%;
        height: 60px;
        font-size: 20px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .cont{
        margin: 0px 120px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .nav_ul{ 
        display: flex;
        justify-content: space-between;
    }
    .left_panel{
        margin-left: 25%; 
        width: 100%;
    }
   .right_panel{
    width: 100%;
   }
   .nav_panel::before{
    content: url(@/img/img_logo.png);
    position: absolute;
    top: 0%;
    left: 0%;
   }
   .login_span{
    position: relative;
   }
   .login_span::before{
    content: url(@/img/women.png);
    position: absolute;
    right: 100%;
    top: -10%;
   }
</style>