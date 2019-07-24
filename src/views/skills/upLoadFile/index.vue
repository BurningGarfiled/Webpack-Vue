<template>
  <div class="sys-page">
    <div style="width: 300px">
      <el-upload
        :file-list="fileList"
        :limit="fileNum"
        :on-exceed="handleExceed"
        :on-remove="removeHandle"
        :before-upload="beforeUpload"
        :http-request="uploadHandle"
        :multiple="multiple"
        :accept="fileType"
        action=""
        class="upload-demo">
        <el-button size="small" type="primary">点击上传</el-button>
        <div v-if="fileType === '*'" slot="tip" class="el-upload__tip">文件类型不限制</div>
        <div v-else slot="tip" class="el-upload__tip">只能上传{{ fileType }}文件</div>
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
      fileNum: 3, // 上传文件个数
      fileSize: 2, // 单个上传文件大小(M)，不控制大小用null表示
      fileType: '*', // 上传文件类型，多个类型用逗号拼接，不控制类型用*表示
      multiple: false, // 是否支持多选文件
      fileData: [], // 上传文件数组
      fileList: []
    }
  },
  mounted() {
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 ${this.fileNum} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    // 文件移除前校验
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`)
    // },
    // 文件移除
    removeHandle(file, fileList) {
      console.log('文件移除')
      this.fileData = fileList.length > 0 ? fileList : [] // 需要加一层判断，否则上传文件失败之后重新上传会有问题
    },
    // 上传之前钩子函数
    beforeUpload(file) {
      console.log('开始上传')
      console.log(file)
      const isType = this.fileType === '*' ? true : file.type === this.fileType
      const isSize = this.fileSize === null ? true : file.size / 1024 / 1024 < this.fileSize
      if (!isType) {
        this.$message.error(`上传只能是${this.fileType}文件!`)
      }
      if (!isSize) {
        this.$message.error(`上传文件大小不能超过${this.fileSize}M!`)
      }
      return isType && isSize
    },
    // 上传事件
    uploadHandle(file) {
      console.log('文件上传')
      this.fileData.push(file.file)
      console.log(this.fileData)
    },
    // 提交表单
    submitHandle() {
      const fileList = [] // 要上传的文件数组
      this.fileData.forEach(e => {
        if (e.raw) {
          fileList.push(e.raw)
        } else {
          fileList.push(e)
        }
      })
    }
  }
}
</script>
