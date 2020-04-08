<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="Username"
      label="Username"
      placeholder="Username"
      :rules="[{ required: true, message: 'Username is required' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="Password"
      label="Password"
      placeholder="Password"
      :rules="[{ required: true, message: 'Password is required' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">Submit</van-button>
    </div>
  </van-form>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
  },
}
</script>
