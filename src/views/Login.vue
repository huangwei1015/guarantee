<template>
  <div class="login">
    <div id="passwordLogin" v-show="passwordOrPhone === '账号登录'">
      <div class="header">
        <van-nav-bar
          title="账号登录"
          right-text="手机登录"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          class="color"
        >
          <template #left>
            <van-icon name="cross" size="18" />
          </template>
        </van-nav-bar>
      </div>

      <!-- 账号密码 -->
      <div id="nameAndPassword">
        <div class="user default">
          <div class="userName">币达账号</div>
          <div class="userNameInput">
            <van-field
              v-model="user.userName"
              placeholder="请输入账号"
              class="name"
            />
          </div>
        </div>
        <div class="password default">
          <div class="userPassword">密码</div>
          <div class="userPasswordInput">
            <van-field
              v-model="user.password"
              placeholder="请输入密码"
              class="name"
            />
          </div>
        </div>
      </div>

      <!-- 阅读协议 -->
      <div class="readXy">
        <van-checkbox v-model="checked"
          >我已仔细阅读并同意《<span class="xy">用户协议</span>》</van-checkbox
        >
      </div>

      <!-- 登录按钮等 -->
      <div class="buttonLogin">
        <van-button type="danger" size="large" @click="login" class="logButton"
          >登录</van-button
        >
        <div class="register">
          <div @click="register">账号注册</div>
          <div @click="forgetPass">忘记密码？</div>
        </div>
      </div>
    </div>
    <div id="phoneLogin" v-show="passwordOrPhone === '手机登录'">
      <div class="header">
        <van-nav-bar
          title="手机登录"
          right-text="账号登录"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight1"
          class="color"
        >
          <template #left>
            <van-icon name="cross" size="18" />
          </template>
        </van-nav-bar>
      </div>

      <!-- 账号密码 -->
      <div id="nameAndPassword">
        <div class="user default">
          <div class="userName">手机号</div>
          <div class="userNameInput">
            <van-field
              v-model="user.userName"
              placeholder="请输入手机号"
              class="name"
            />
          </div>
        </div>
        <div class="password default">
          <div class="userPassword">验证码</div>
          <div class="userPasswordInput">
            <van-field
              v-model="user.password"
              placeholder="请输入验证码"
              class="name"
            >
              <template #button>
                <van-button size="small" type="primary" class="smsButton">发送验证码</van-button>
              </template>
            </van-field>
          </div>
        </div>
      </div>

      <!-- 阅读协议 -->
      <div class="readXy">
        <van-checkbox v-model="checked"
          >我已仔细阅读并同意《<span class="xy">用户协议</span>》</van-checkbox
        >
      </div>

      <!-- 登录按钮等 -->
      <div class="buttonLogin">
        <van-button type="danger" size="large" @click="login" class="logButton"
          >登录</van-button
        >
        <div class="register">
          <div @click="register">账号注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      passwordOrPhone:'账号登录',
      user: {
        userName: "",
        password: "",
      },
      checked: "",
    };
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickRight() {
      console.log("手机登录");
      this.passwordOrPhone = '手机登录'
    },
    onClickRight1() {
      console.log("账号登录");
      this.passwordOrPhone = '账号登录'
    },
    login() {
      console.log("登录");
      this.$router.push('/index')
    },
    register() {
      console.log("注册");
    },
    forgetPass() {
      console.log("忘记密码");
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  padding: 0 1rem;
  .header {
    .van-nav-bar .van-icon {
      color: black;
    }
    /deep/ .van-nav-bar__text {
      color: black;
    }
  }
  .default {
    .name {
      line-height: 3rem;
      font-size: 1rem;
    }
    .van-cell {
      padding: 8px 0;
    }
  }
  .user {
    margin: 2rem 0 1rem 0;
  }
  .readXy {
    font-size: 0.9rem;
    .xy {
      color: #008ad9;
    }
  }

  .buttonLogin {
    margin: 8rem 0.2rem 0;
    .logButton {
      border-radius: 5px;
    }
    .register {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: #999999;
    }
  }
}
</style>
