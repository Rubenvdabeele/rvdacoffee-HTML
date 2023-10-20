<template>
  <div class="footer-container" v-bind:class="rootClassName">
    <div class="footer-container1">
      <a href="mailto:mailto:info@rvda.coffee?subject=" class="footer-link">
        <svg viewBox="0 0 1024 1024" class="footer-icon">
          <path
            d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.footer-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: center;
}
.footer-link {
  display: contents;
}
.footer-icon {
  width: 2em;
  height: 24px;
  text-decoration: none;
}

</style>
