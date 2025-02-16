<template>
  <table class="table table-striped border-light">
    <thead>
      <tr>
        <th scope="col">員工編號</th>
        <th scope="col">姓名</th>
        <th scope="col">職稱</th>
        <th scope="col">狀態</th>
        <th scope="col">權限</th>
        <th scope="col">編輯</th>
        <th scope="col">停用</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td >{{ employee.id }}</td>
        <td >{{ employee.name }}</td>
        <td >{{ employee.title }}</td>
        <td >{{ employee.status }}</td>
        <td >{{ employee.permission }}</td>
        <td >
          <button
            type="button"
            class="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            @click="editEmployee(employee)"
          >
            <i class="bi bi-brush"></i> 編輯
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="suspendAccount(employee.id)"
          >
            <i class="bi bi-trash3"></i> 停用
          </button>
        </td>
      </tr>
    </tbody>
  </Table>
  <!-- model -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">編輯員工資料 - {{ selectedEmployee.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="employee-title" class="form-label">員工編號</label>
              <input type="text" id="employee-title" v-model="selectedEmployee.id" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="employee-title" class="form-label">員工姓名</label>
              <input type="text" id="employee-title" v-model="selectedEmployee.name" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="employee-title" class="form-label">狀態</label>
              <input type="text" id="employee-title" v-model="selectedEmployee.status" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="employee-title" class="form-label">權限1~5</label>
              <input type="text" id="employee-title" v-model="selectedEmployee.permission" class="form-control" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">儲存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref, onMounted } from 'vue';
import 'datatables.net-bs5';

onMounted(() => {

});

const employees = ref([
  { id: "A3456", name: "阿花", status: "在職中", title: "社工師", permission: 2},
  { id: "B7890", name: "阿明", status: "在職中", title: "社工師", permission: 1},
  { id: "C1230", name: "大呆", status: "在職中", title: "社工督導長", permission:5}
]);

const selectedEmployee = ref({});

const editEmployee = (employee) => {
  selectedEmployee.value = {...employee};
};

const suspendAccount = async (employeeId) => {
  const result = await Swal.fire({
    title: "確定要停用該帳戶嗎？",
    text: `員工編號 ${employeeId} 的帳戶將被停用`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "取消",
    confirmButtonText: "是的，停用！"
  });

  if (result.isConfirmed) {
    employees.value = employees.value.filter((emp) => emp.id !== employeeId);
    Swal.fire("已停用！", `員工編號 ${employeeId} 的帳戶已成功停用。`, "success");
  }
};
</script>
