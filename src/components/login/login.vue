<template>
<div class="all_content">
    <div class="inner_content">
        <div class="image-container">
            <img src="../../assets/img/login.jpg" class="img_login" >
        </div>
        <div class="word_content">
            <div class="one">
                <svg width="100%" height="60px">
                    <text x="50%" y="70%" fill="white" class="logo">CSMT System
                    </text>
                </svg>
            </div>
            <div class="three">
                <form id="login_form">
                    <div>
                        <label for="formGroupExampleInput" class="form-label" style="color:white;">使用者名稱</label>
                        <input type="text" class="form-control" v-model="employee_id">
                    </div>
                    </br>
                    <div>
                        <label for="formGroupExampleInput" class="form-label" style="color:white;">使用者密碼</label>
                        <input type="password" class="form-control" v-model="employee_password">
                    </div>
                    </br>
                    <div class="row mb-3">
                        <div class="col-lg-12 col-xs-12">
                            <button type="button" class="btn_login_submit" @click="login_submit" >登入</button>
                        </div>
                    </div>
                    <p style="color:white; font-size:12px;">若無法順利登入！請聯絡工程師</p>
                </form>
                <!-- This system is developed by Jimmy C WU -->
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import {ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const employee_id = ref('');
const employee_password = ref('');

const login_submit = () => {
    console.log(employee_id.value);
    console.log(employee_password.value);
    const router = useRouter();

    axios.post("https://localhost:7131/api/Member/Login", {
        username: employee_id.value,
        password: employee_password.value
    })
    .then((res) => {
        if(res.status == 200){
            console.log("pass");
            window.location.href = '/MainPage/Dashboard';
            
            sessionStorage.setItem("userName", employee_id.value);
        }else{
            console.log("err");
        }
       
    })
    .catch((err) => {
        console.log(err);
    });
}


</script>
<style scoped>
/* login page start*/
.all_content{
    max-width: 400px;
    margin: 60px auto;
    padding: 20px;
    background-color:#9B9B93; 
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0,0,0,1);
    
}
.img_login{
    width: 100%; 
    height: 60%;
    border-radius : 10px;
    opacity: 1;
}
.image-container{
    max-width: 100%;
    height: auto;
}
.word_content{
    margin-top:10px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.three{
    margin-top:10px ;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.two h3{
    color:white;
    font-size: 2.5rem;
}

.btn_login_submit{
  color:#A3A380;
  font-family: sans-serif;
  font-size:1rem;
  border: 1px solid;
  padding:8px 16px;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 5%;
}

.btn_login_submit:before{
  content: '登入';
  position: absolute;
  top:0;
  Left:0;
  height:100%;
  width:100%;
  background-color:#A3A380;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(5);
  opacity: 0;
  transition: all 0.5s;
 }
 .btn_login_submit:hover:before{
  transform: scale(1);
  opacity: 1;
 }


.logo{
    font-weight:normal;
    font-size: 2.5rem;
    text-anchor:middle;
    stroke:white;
    stroke-width: 1;
    animation:show 6s ease-in-out;
    font-family: 'Dancing Script', cursive;
    border-radius: 10px;
}
@keyframes show{
    0% ,10% {
        fill: transparent;
        stroke-dasharray: 0% 100%;
    }
    70% {
        stroke-dasharray: 100% 0%;
        stroke-opacity: 1;
        fill: transparent;
    }
    80%, 100%{
        stroke-opacity: 0;
        fill:white;
    }
}
/* login page end */
</style>