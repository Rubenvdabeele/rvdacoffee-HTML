<template>
  <div class="home-container">
    <div class="home-container1"><span class="home-text">Hello world</span></div>
    <div class="home-banner">
      <h1 class="home-text1">Learn to keep it simple</h1>
      <span class="home-text2">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor.
            <span v-html="raw02wg"></span>
          </span>
          <span><span v-html="rawknvb"></span></span>
        </span>
      </span>
      <div class="home-btn-group">
        <button class="home-button button">Get Started</button>
        <button class="home-button1 button">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      raw02wg: ' ',
      rawknvb: ' ',
    }
  },
  head: {
    title: 'rvda.coffee',
    meta: [
      {
        property: 'og:title',
        content: 'rvda.coffee',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-text {
  font-size: 40px;
  font-family: "Gentium Book Plus";
}
.home-banner {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.home-text1 {
  font-size: 3rem;
  text-align: center;
}
.home-text2 {
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-button {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-black);
}
.home-button:hover {
  transform: scale(1.02);
}
.home-button1 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.home-button1:hover {
  transform: scale(1.02);
}
@media(max-width: 767px) {
  .home-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text2 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-btn-group {
    flex-direction: column;
  }
  .home-button1 {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
}
</style>
