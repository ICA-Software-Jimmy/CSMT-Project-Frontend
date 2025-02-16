<template>
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="bi bi-brush"></i> 開案-填寫基本資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">開案-填寫基本資料</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row needs-validation" novalidate>
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
                        <label for="validationCustom05" class="form-label">緊急連絡關係</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom05" class="form-label">緊急連絡電話</label>
                        <input type="text" class="form-control" id="validationCustom05" required>
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


</script>

<style scope>


</style>