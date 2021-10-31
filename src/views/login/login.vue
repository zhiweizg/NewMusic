<template>
  <div class="login">
    <div class="login-i">
      <i class="el-icon-remove"></i>
      <i class="el-icon-error"></i>
    </div>
    <div class="login-heard">
      <div class="heard-item">手机登陆</div>
      <div class="heard-item">邮箱登陆</div>
      <div class="heard-item">二维码登陆</div>
    </div>
    <div class="login-content">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="手机号码" prop="phone">
          <el-input
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')"
            >登陆</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { goLogin, checkPhone } from '@/api/login'
export default {
  data () {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['addUser']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.check(this.$refs[formName].model).then((res) => {
            if (res.hasPassword) {
              this.subFrom(this.$refs[formName].model).then((res) => {
                if (res.code !== 200) {
                  return this.$alert('密码错误', {
                    callback: action => {
                      this.$message({
                        type: 'info',
                        message: 'error: 密码错误'
                      })
                    }
                  })
                } else {
                  this.addUser(res)
                  localStorage.setItem('cookie', res.cookie)
                  localStorage.setItem('avatar', res.profile.avatarUrl)
                  localStorage.setItem('uid', res.profile.userId)
                  localStorage.setItem('nickname', res.profile.nickname)
                  this.$router.replace('/findeMusic')
                  return alert('登陆成功')
                }
              })
            } else {
              return this.$alert('手机号错误', {
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: 'error: 手机号错误'
                  })
                }
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async subFrom (value) {
      const { data } = await goLogin(value.phone, value.password)
      console.log(data)
      return data
    },
    async check (value) {
      const { data } = await checkPhone(value.phone)
      console.log(data)
      return data
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 300px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(241, 237, 237);
  color: #000;
  .login-i {
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 5px;
    color: red;
    i {
      margin-right: 10px;
    }
    .el-icon-remove {
      color: rgb(201, 201, 25);
    }
  }
  .login-heard {
    display: flex;
    margin-top: 20px;
    .heard-item {
      width: 80px;
      height: 40px;
      margin: 10px;
      font-size: 14px;
      text-align: center;
      line-height: 40px;
    }
  }
  .login-content {
    font-size: 14px;
    padding: 20px 50px 0 0;
    .demo-ruleForm {
      .el-form-item {
        margin-top: 20px;
      }
    }
  }
}
</style>
