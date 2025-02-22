<template>
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="bi bi-brush"></i> 填寫少年基本資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">填寫少年基本資料</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row needs-validation" novalidate>
                        <div class="col-md-12">
                            <label class="form-label">少年來源</label>
                            <select class="form-select" v-model="selectedOption">
                            <option value="">請選擇</option>
                            <option value="1">分布自行收案</option>
                            <option value="2">政府派案</option>
                            </select>
                        </div>

                <!-- 當使用者選擇 "1" 時，顯示額外的選擇題 -->
                <div v-if="selectedOption === '1'" class="mt-3">
                    <p>1.自行開發
                    <div>
                        <input type="checkbox" v-model="selectedSources" value="臺北少年觀護所" />
                        <label>1. 臺北少年觀護所</label>
                    </div>

                    <div style="display: flex;">
                        <label>2. 矯正學校</label>
                        <label><input type="checkbox" v-model="selectedSources" value="誠正中學" /> 誠正中學</label>
                        <label><input type="checkbox" v-model="selectedSources" value="敦品中學" /> 敦品中學</label>
                        <label><input type="checkbox" v-model="selectedSources" value="勵志中學" /> 勵志中學</label>
                    </div>
                    <div>
                        <input type="checkbox" v-model="selectedSources" value="外展接觸" />
                        <label>3. 外展接觸</label>
                       
                    </div>
                    <div>
                        <input type="checkbox" v-model="selectedSources" value="中心會員" />
                        <label>4. 中心會員</label>
                        
                    </div>
                    <div>
                        <input type="checkbox" v-model="hasOther" />
                        <label>5. 其他</label>
                    </div>
                </p>
                <p>2. 主動求助
                    <div>
                        <input type="checkbox"  />
                        <label>1. 家長自行求助</label>
                    </div>
                   <div>
                        <input type="checkbox" />
                        <label>2. 少年自行求助</label>
                    </div>
                </p>
                </div>

                <!-- 當使用者選擇 "2" 時，顯示額外的選擇題 -->
                <div v-if="selectedOption === '2'" class="mt-3">
                    <div style="display: flex;">
                        <label>1. 法院</label>
                        <label><input type="checkbox" v-model="selectedSources" value="新北法院" /> 新北法院</label>
                        <label><input type="checkbox" v-model="selectedSources" value="台北法院" /> 台北法院</label>
                        <label><input type="checkbox" v-model="selectedSources" value="士林法院" /> 士林法院</label>
                        <label><input type="checkbox" v-model="selectedSources" value="基隆法院" /> 基隆法院</label>
                    </div>
                    <div>
                        <label>2. 社政單位 : </label>
                    </br>
                    </br>
                        <input type="text" v-model="selectedSources" value="社政單位" />
                        
                       
                    </div>
                    <div>
                        <input type="checkbox" v-model="selectedSources" value="教育單位" />
                        <label>3. 教育單位</label>
                        
                    </div>
                    <div>
                       
                        <input type="checkbox" v-model="縣市政府社會局" />
                        <label>4.縣市政府社會局 </label>
                    </div>
                </div>
                        <div class="col-md-12">
                            <label  class="form-label">案號</label>
                            <input type="text" class="form-control" required>
                            <div class="valid-feedback">
                                請輸入案號
                            </div>
                        </div>
                    <div class="col-md-12">
                        <label  class="form-label">接案日期</label>
                        <input type="date" class="form-control" required lang="zh-TW">
                        <div class="valid-feedback">
                            請輸入接案日期
                        </div>
                    </div>


                    <div class="col-md-12">
                        <label for="validationCustom02" class="form-label">姓名</label>
                        <input type="text" class="form-control" required>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustomUsername" class="form-label">性別</label>
                        <div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault">
                            <label class="form-check-label">
                                男
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault">
                            <label class="form-check-label">
                                女
                            </label>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustom03" class="form-label">通訊地址</label>
                        <input type="text" class="form-control" id="validationCustom03" required>
                    </div>

                    <div class="col-md-12">
                        <label for="validationCustom04" class="form-label">戶籍地址</label>
                        <input type="text" class="form-control" id="validationCustom03">
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustom05" class="form-label">連絡電話</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom05" class="form-label">緊急連絡</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom05" class="form-label">關係</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom05" class="form-label">電話</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustom05" class="form-label">指派負責社工員</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>請選擇</option>
                            <option value="1"><span>員工編號:A234</span> 張社工</option>
                            <option value="2"><span>員工編號:B456</span> 李社工</option>
                            <option value="3"><span>員工編號:C789</span> 王社工</option>
                        </select>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
 
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">確認送出</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref(""); // 用於綁定 select 值
const selectedSources = ref([]); // 存放多選框的值
const hasOther = ref(false); // 是否選擇 "其他"
const otherText = ref(""); // "其他" 選項的輸入內容
</script>

<style scope>


</style>