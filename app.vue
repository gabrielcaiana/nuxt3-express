<script setup>
  const showMessageFromBackend = async () => {
    try {
      const { data } = await useFetch('/server-api/test')
      console.log(data.value)
    } catch (err) {
      console.log(err)
    }
  }
</script>

<template>
  <div>
     <button @click="showMessageFromBackend">Show message from backend</button>
  </div>
</template>
