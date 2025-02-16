<template>
  <div>
    <table id="example" class="table table-striped">
    <thead>
      <tr>
        <th class="text-start">個案編號</th>
        <th scope="col">少年姓名</th>
        <th scope="col">個案狀態</th>
        <th class="text-start">開案日期</th>
        <th scope="col">填寫紀錄</th>
        <th scope="col">表單紀錄</th>
        <th scope="col">負責社工</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="caseItem in caseList" :key="caseItem.id">
        <td class="text-start">{{ caseItem.id }}</td>
        <td>{{ caseItem.name }}</td>
        <td>
          <button :class="getStatusClass(caseItem.status)">
            <i :class="getStatusIcon(caseItem.status)"></i> {{ caseItem.statusText }}
          </button>
        </td>
        <td class="text-start">{{ caseItem.openDate }}</td>
        <td>
          <AddRecord :caseItem="caseItem" />
        </td>
        <td>
          <button type="button" class="btn btn-outline-success">
            <i class="bi bi-clipboard2-data"></i> 顯示紀錄
          </button>
        </td>
        <td>{{ caseItem.worker }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script setup>
import { ref,onMounted, watchEffect, nextTick} from "vue";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "datatables.net-select";
import AddRecord from "../service-record/add-record.vue";

// 定義 props
defineProps({
  caseList: Array
});
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
// 假設這是預設數據
const caseList = ref([
  {
    id: "0001",
    name: "陳八九",
    status: "urgent",
    statusText: "需要緊急協助",
    openDate: "2024/10/5",
    worker: "張阿三",
  },
  {
    id: "0002",
    name: "張大呆",
    status: "observing",
    statusText: "定期觀察中",
    openDate: "2024/10/5",
    worker: "張阿三",
  },
  {
    id: "0003",
    name: "李小王",
    status: "closed",
    statusText: "已結案",
    openDate: "2024/10/5",
    worker: "張阿三",
  },
  {
    id: "0004",
    name: "小黃",
    status: "observing",
    statusText: "定期觀察中",
    openDate: "2025/10/01",
    worker: "張阿三",
  },
]);

const getStatusClass = (status) => {
  switch (status) {
    case "urgent":
      return "btn btn-danger";
    case "observing":
      return "btn btn-primary";
    case "closed":
      return "btn btn-secondary";
    default:
      return "btn btn-light";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "urgent":
      return "bi bi-exclamation-triangle";
    case "observing":
      return "bi bi-eyeglasses";
    case "closed":
      return "bi bi-clipboard2-check";
    default:
      return "bi bi-question-circle";
  }
};
</script>

<style scoped>

</style>
    