<template>
  <div>
    <table id="example" class="table table-striped">
      <thead>
        <tr>
          <th class="text-start">個案編號</th>
          <th>少年姓名</th>
          <th class="text-start">派案日期</th>
          <th>個案分類</th>
          <th class="text-start">個案來源</th>
          <th>訪視紀錄</th>
          <th>主責社工</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-start">汐-113-1-030</td>
          <td>陳八九</td>
          <td class="text-start">113/10/10</td>
          <td>
            <button type="button" class="btn btn-danger">
              <i class="bi bi-exclamation-triangle"></i> 需要緊急協助
            </button>
          </td>
          <td class="text-start">2024/10/5</td>
          <td>
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-filetype-docx"></i> 下載Word檔
            </button>
            <button type="button" class="btn btn-outline-success">
              <i class="bi bi-filetype-xls"></i> 下載Excel檔
            </button>
          </td>
          <td>張阿三</td>
        </tr>
        <tr>
          <td class="text-start">汐-113-1-020</td>
          <td>張大呆</td>
          <td class="text-start">2024/10/5</td>
          <td>
            <button type="button" class="btn btn-primary">
              <i class="bi bi-eyeglasses"></i> 定期觀察中
            </button>
          </td>
          <td class="text-start">2024/10/5</td>
          <td>
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-filetype-docx"></i> 下載Word檔
            </button>
            <button type="button" class="btn btn-outline-success">
              <i class="bi bi-filetype-xls"></i> 下載Excel檔
            </button>
          </td>
          <td>張阿三</td>
        </tr>
        <tr>
          <td class="text-start">汐-114-2-020</td>
          <td>李小王</td>
          <td class="text-start">2024/10/15</td>
          <td>
            <button type="button" class="btn btn-secondary">
              <i class="bi bi-clipboard2-check"></i> 已結案
            </button>
          </td>
          <td class="text-start">2024/10/15</td>
          <td>
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-filetype-docx"></i> 下載Word檔
            </button>
            <button type="button" class="btn btn-outline-success">
              <i class="bi bi-filetype-xls"></i> 下載Excel檔
            </button>
          </td>
          <td>張阿三</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, nextTick } from "vue";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "datatables.net-select";

let dataTableInstance = null;
// 初始化 DataTables
const initializeDataTable = () => {
  nextTick(() => {
    if (dataTableInstance) {
      dataTableInstance.destroy(); // 避免重複初始化
    }
    dataTableInstance = $("#example").DataTable({
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

<style scoped>
/* Add any scoped styles here */
</style>
