<template>
  <form @submit.prevent="submitForm" method="post">
    <h2>Registration</h2>
    <input v-model="firstName" type="text" inputmode="text" placeholder="First Name" />
    <input v-model="lastName" type="text" inputmode="text" placeholder="Last Name" />
    <input v-model="middleName" type="text" inputmode="text" placeholder="Middle Name" />
    <input v-model="phone" type="tel" inputmode="tel" name="phone" placeholder="Phone Number" />
    <input v-model="password" type="password" placeholder="Password" />
    <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />      
    <label class="agree"><input v-model="rememberMe" type="checkbox" />Запомнить меня</label>
    <button type="submit" value="Войти">Registration</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const firstName = ref('');
const lastName = ref('');
const middleName = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const rememberMe = ref(false);

const router = useRouter();


async function submitForm() {
  try {
  const formData = await axios.post('', {
    firstName: firstName.value,
    lastName: lastName.value,
    middleName: middleName.value,
    phone: phone.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
  const res = formData.data;

  if (res.token) {
      localStorage.setItem('token', res.token);
      router.replace('/profile');
    } else {
      localStorage.removeItem('token');
    }
  } catch (error) {
    console.error(error)
    const res = {}
    res.message = error.response.data.message
  }
};

</script>

<style scoped></style>
