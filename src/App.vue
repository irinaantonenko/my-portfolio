<template>
  <div>
    <main-page/>
    <about-me-page/>
    <experience-page/>
    <projects-page/>
    <chanel-page/>
    <contact-page/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import AboutMePage from './components/AboutMePage.vue';
import ExperiencePage from './components/ExperiencePage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ChanelPage from './components/ChanelPage.vue';
import ContactPage from './components/ContactPage.vue';
export default {
  name: 'App',
  components: {
    MainPage,
    AboutMePage,
    ExperiencePage,
    ProjectsPage,
    ChanelPage,
    ContactPage
  }
}
</script>

<style>
</style>
