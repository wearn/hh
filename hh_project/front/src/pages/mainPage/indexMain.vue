<template>

    <NavMain />
      <div class="main">
        <div class="center_div_text">
          <span class="span_center_main_text">Hay trabajo para todos</span>
        </div>
        <div class="center_main_div">
          <div class="div_inp">
            <input
              type="text"
              class="main_form_inp"
              v-model="inputValue"
              placeholder="Profesión, cargo o empresa"
              @input="inputHandler"
            />
          </div>
          <div class="div_btn">
            <button
              @click="$router.push({ name: 'Search Page' })"
              class="main_form_btn"
            >
              Búsqueda de empleo
            </button>
            <div class="test">
              <span>Login: <input type="text" v-model="name"></span>
              <span>Password: <input type="text" v-model="password"></span>
              <span>email: <input type="text" v-model="email"></span>
              <button @click="signup">go</button>
            </div>
            <div class="test2">
              <span>Login: <input type="text"></span>
              <span>Password: <input type="text"></span>
              <button>go</button>
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
  },
  data() {
    return {
      inputValue: "",
      name: "",
      password: "",
      email:""
    };
  },


  methods: {
    inputHandler(event) {
      console.log(event.srcElement.value);
    },
    signup(){
      console.log(this.name);
      console.log(this.password);
      console.log(this.email);
    }
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background-image: url(@/img/1.png);
  background-size: cover;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.center_main_div {
  width: 60%;
  display: flex;
  justify-content: left;
}
.main_form_inp {
  width: 100%;
  height: 60px;
  border-radius: 30px;
  border: 1px solid black;
  font-size: 20px;
  padding-left: 15px;
}
.div_inp {
  width: 80%;
  z-index: 5;
}
.main_form_btn {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background-color: #0812fd;
  border-radius: 30px;
  padding: 10px 40px;
  text-align: right;
  right: 30%;
  position: relative;
  cursor: pointer;
  border: 1px solid black;
}
.span_center_main_text {
  font-size: 44px;
  font-weight: bold;
}
.center_div_text {
  width: 60%;
  margin-bottom: 15px;
}
.test{
  position: absolute;
  width: 250px;
  left: 0;
  right: 0;
}
.test2{
  position: absolute;
  width: 250px;

  right: 0;
}
</style>
