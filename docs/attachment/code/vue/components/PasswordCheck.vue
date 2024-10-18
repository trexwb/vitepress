<!--
 * @Author: trexwb
 * @Date: 2024-06-18 15:45:22
 * @LastEditors: trexwb
 * @LastEditTime: 2024-10-18 14:25:21
 * @FilePath: /xuanyun.wang/docs/attachment/code/vue/components/PasswordCheck.vue
 * @Description: 
 * 一花一世界，一叶一如来
 * Copyright (c) 2024 by 杭州大美, All Rights Reserved. 
-->
<template>
  <el-dialog v-model="showMask" :modal="true" :lock-scroll="true" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" modal-class="fullscreen-mask" title="请输入密码" width="500"
    align-center>
    <el-input type="password" v-model="userPassword" placeholder="页面需要输入密码才能访问！虽然你也可以简单绕过！" @keyup.enter="checkPassword" clearable show-password></el-input>
    <button @click="checkPassword" class="login-button">登录</button>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CryptoJS from 'crypto-js'
import { ElMessage } from 'element-plus'

const publicSecret = '32位随机字符串'; // 用来做公钥
const encryptedPassword = '密码'; // 请自己进行一次md5加密
const userPassword = ref('');
const showMask = ref(true);

const checkPassword = () => {
  if (md5(userPassword.value) === encryptedPassword) {
    // 密码正确时关闭遮罩层或执行其他操作
    setTokenStorage(encryptedPassword, 8 * 60 * 1000 * 1000, 'token');
    ElMessage({
      type: 'success',
      message: '登录成功',
      grouping: true,
      plain: true
    });
    closeMask();
  } else {
    ElMessage({
      type: 'warning',
      message: '密码错误，请重试！',
      grouping: true,
      plain: true
    });
  }
};

const closeMask = () => {
  // 如果点击遮罩层外部，则关闭遮罩层
  showMask.value = false;
};

const md5 = (str: string) => {
  return CryptoJS.MD5(str).toString()
}

// 加密函数
const encrypt = (encryptedData: { password: any; expiry: any; }, key: string, iv: string) => {
  try {
    const encryptedText = JSON.stringify(encryptedData)
    const cipher = CryptoJS.AES.encrypt(encryptedText, key, { iv: CryptoJS.enc.Utf8.parse(iv) })
    return cipher.toString()
  } catch (err) {
    return false
  }
}
// 解密函数
const decrypt = (encryptedText: any, key: string, iv: any) => {
  try {
    const decryptedData = CryptoJS.AES.decrypt(encryptedText, key, { iv: CryptoJS.enc.Utf8.parse(iv) })
    const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedText)
  } catch (err) {
    return false
  }
}

const isJson = (value: string | null) => {
  if (typeof value === 'string') {
    const obj = JSON.parse(value)
    return !!(typeof obj === 'object' && obj)
  }
  return false
}
const getTokenStorage = (key: undefined) => {
  const itemStr = localStorage ? localStorage.getItem(key || 'token') : null
  if (itemStr && isJson(itemStr)) {
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    // 检查是否已过期
    if (now > item.expiry) {
      // 过期则删除该条数据
      removeTokenStorage(key || 'token');
      return null;
    }
    return item;
  } else {
    return itemStr
  }
}
function generateRandomString(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const setTokenStorage = (value: string, ttlMilliseconds: number, key: string) => {
  // 计算过期时间
  const expiryTime = new Date().getTime() + ttlMilliseconds;
  const iv = generateRandomString(16);
  const token = encrypt({
    password: value,
    expiry: expiryTime
  }, publicSecret, iv)
  return localStorage.setItem(key || 'token', JSON.stringify({
    token: token,
    iv: iv,
    expiry: expiryTime
  }))
}
const removeTokenStorage = (key: any) => {
  return localStorage.removeItem(key || 'token')
}

// 阻止页面滚动
if (typeof window !== 'undefined') {
  const tokenEncrypt = getTokenStorage(undefined);
  if (tokenEncrypt) {
    const tokenDecrypt = decrypt(tokenEncrypt.token, publicSecret, tokenEncrypt.iv);
    if (tokenDecrypt?.password && tokenDecrypt?.password === encryptedPassword) showMask.value = false;
  }
}

// document.body.style.overflow = showMask.value ? 'hidden' : 'auto';

// onMounted(() => {

// });

// // 添加卸载时的清理工作，以防万一组件在消息隐藏前被卸载
// onUnmounted(() => {
//   document.body.style.overflow = 'auto';
// });

// defineExpose({
//   userPassword,
//   checkPassword,
//   closeMask,
//   showMask
// });
</script>

<style scoped>
:root {
  --placeholder-color: #322d2d;
  /* 默认颜色 */
}

.fullscreen-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* 确保遮罩层在最上层 */
}

.login-container {
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  /* 添加阴影效果 */
  border-radius: 10px;
  /* 圆角效果 */
  padding: 30px;
  width: 300px;
  /* 登录框宽度自定义 */
}

.login-form {
  text-align: center;
}

.input-field {
  display: block;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: var(--placeholder-color);
  color: #322d2d
}

.login-button {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

/* 为了更好的浏览器兼容性，可以添加针对不同浏览器引擎的前缀 */
input::-webkit-input-placeholder {
  color: var(--placeholder-color);
}

input::-moz-placeholder {
  color: var(--placeholder-color);
}

input:-ms-input-placeholder {
  color: var(--placeholder-color);
}
</style>