<template>
  <div class="home-container">
    <div class="home-banner">
      <div class="home-container1">
        <div class="home-container2">
          <h1 class="home-text">Ruben van den Abeele</h1>
          <span class="home-text1">
            Is a
            <span v-html="rawbnpb"></span>
          </span>
          <nuxt-link to="/barista" class="home-navlink">barista</nuxt-link>
          <span class="Subheading">and a</span>
          <nuxt-link to="/software-engineer" class="home-navlink1">
            software engineer
          </nuxt-link>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppFooter,
  },
  data() {
    return {
      rawbnpb: ' ',
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
  background-color: var(--dl-color-brand-ebebeb);
}
.home-banner {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container1 {
  flex: 1;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-left: 0%;
  flex-direction: column;
  justify-content: center;
}
.home-container2 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-text {
  font-size: 3em;
  font-family: "Gentium Book Plus";
  font-weight: 700;
  line-height: 1.15;
  padding-top: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-twounits);
  text-transform: none;
  text-decoration: none;
}
.home-text1 {
  font-size: 2em;
  font-family: "Gentium Book Plus";
  font-weight: 500;
}
.home-navlink {
  font-size: 2.5em;
  font-family: "Gentium Book Plus";
  font-weight: 700;
  line-height: 1.15;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  text-transform: none;
  text-decoration: none;
}
.home-navlink1 {
  font-size: 2.5em;
  font-family: "Gentium Book Plus";
  font-weight: 700;
  line-height: 1.15;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  text-transform: none;
  text-decoration: none;
}
@media(max-width: 991px) {
  .home-banner {
    flex: 1;
    height: auto;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .home-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text {
    font-size: 3.5em;
  }
  .home-navlink {
    font-family: Gentium Book Plus;
    margin-left: var(--dl-space-space-twounits);
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    padding-left: 0px;
    padding-right: 0px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
  }
  .home-navlink1 {
    margin-left: var(--dl-space-space-twounits);
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    padding-left: 0px;
    padding-right: 0px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
  }
}
@media(max-width: 479px) {
  .home-banner {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container1 {
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .home-navlink {
    border-bottom-width: 0px;
  }
  .home-navlink1 {
    border-bottom-width: 0px;
  }
}
</style>
