<template>
  <div>
    <main-page/>
    <about-me-page/>
    <experience-page/>
    <projects-page/>
    <contact-page/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import AboutMePage from './components/AboutMePage.vue';
import ExperiencePage from './components/ExperiencePage.vue';
import ContactPage from './components/ContactPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
export default {
  name: 'App',
  components: {
    MainPage,
    AboutMePage,
    ExperiencePage,
    ContactPage,
    ProjectsPage
  }
}
</script>

<style>
</style>
