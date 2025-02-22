<template>
  <div>
    <table id="unassigned-case-box" class="table table-striped">
      <thead>
        <tr>
          <th class="text-start">個案編號</th>
          <th scope="col">少年姓名</th>
          <th scope="col">派案編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="caseItem in caseList" :key="caseItem.id">
          <td class="text-start">{{ caseItem.id }}</td>
          <td>{{ caseItem.name }}</td>
          <td>
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="bi bi-person-up"></i>  派案編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">派案編輯</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">負責社工</label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>請選擇</option>
              <option value="1"><span>員工編號:A234</span> 張社工</option>
              <option value="2"><span>員工編號:B456</span> 李社工</option>
              <option value="3"><span>員工編號:C789</span> 王社工</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-outline-secondary">儲存編輯</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, nextTick } from "vue";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "datatables.net-select";

// 假設的個案列表
const caseList = ref([
  { id: "0001", name: "小A" },
  { id: "0002", name: "小B" },
  { id: "0003", name: "小C" },
  { id: "0004", name: "小D" },
]);

let dataTableInstance = null;

// 初始化 DataTables
const initializeDataTable = () => {
  nextTick(() => {
    if (dataTableInstance) {
      dataTableInstance.destroy(); // 避免重複初始化
    }
    dataTableInstance = $("#unassigned-case-box").DataTable({
      paging: true, // 分頁
      lengthMenu: [5, 10, 25, 50], // 可選每頁筆數
      pageLength: 5, // 預設每頁 5 筆
      ordering: true, // 啟用排序
      searching: true, // 啟用搜尋
      responsive: true, // 響應式
      language: {
        lengthMenu: "每頁顯示 _MENU_ 筆資料",
        zeroRecords: "沒有符合的資料",
        info: "顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆",
        infoEmpty: "沒有符合的資料",
        infoFiltered: "(從 _MAX_ 筆資料中篩選)",
        search: "搜尋：",
        paginate: {
          first: "首頁",
          last: "末頁",
          next: "下一頁",
          previous: "上一頁",
        },
      },
    });
  });
};

// 監聽 caseList 變化並重新初始化 DataTables
watchEffect(() => {
  initializeDataTable();
});

// 在元件掛載時初始化 DataTables
onMounted(() => {
  initializeDataTable();
});
</script>
