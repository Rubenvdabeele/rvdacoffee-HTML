<template>
  <div class="barista-container"></div>
</template>

<script>
export default {
  name: 'Barista',
  head: {
    title: 'Barista - rvda.coffee',
    meta: [
      {
        property: 'og:title',
        content: 'Barista - rvda.coffee',
      },
    ],
  },
}
</script>

<style scoped>
.barista-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
