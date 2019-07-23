<template>
  <div class="sys-page">
    <div style="width: 300px">
      <el-upload
        :file-list="fileList"
        :limit="fileNum"
        :on-exceed="handleExceed"
        :before-remove="beforeRemove"
        :http-request="uploadHandle"
        action=""
        accept=".apk"
        class="upload-demo"
        multiple>
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传apk文件，且不超过500kb</div>
      </el-upload>
      <el-button size="small" type="primary" @click="submitHandle">确定上传</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UploadFile',
  data() {
    return {
      fileNum: 5, // 上传文件个数
      fileList: []
    }
  },
  mounted() {
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 ${this.fileNum} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 上传校验
    uploadRules(file) {
      console.log(file)
    },
    // 上传事件
    uploadHandle(file) {
      console.log(file)
      // const isJPG = file.type === 'image/jpg'
      // const isPNG = file.type === 'image/png'
      // const isLt20M = file.size / 1024 / 1024 < 20
    },
    // 提交表单
    submitHandle(e) {
      this.uploadHandle()
      // console.log(e)
    }
  }
}
</script>
