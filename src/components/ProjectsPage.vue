<template>
    <div class="projects-page"> 
        <h2 class="projects-page__title">My projects</h2>
        <h3 class="projects-page__subtitle">Here are some of the projects I worked on</h3>
        <div class="projects-page__content">
            <projects-page-item
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </div>               
    </div>
</template>

<script>   
    import ProjectsPageItem from "./ProjectsPageItem.vue";
    export default {
        name: 'ProjectsPage',
        data: () => {
            return { 
                projects: [
                {   title: 'Website of the creative studio "Diart"',
                    image: 'diart.jpg',
                    id: 1,
                    link: 'https://irinaantonenko.github.io/diart/templates/'
                },
                {
                    title: 'Online-shop project on Vue.js',
                    image: 'online-shop.jpg',
                    id: 2,
                    link:'https://irinaantonenko.github.io/online-shop/#/'
                },
                {
                    title: 'Website of a psychologist',
                    image: 'psycholog.jpg',
                    id: 3,
                    link:'https://irinaantonenko.github.io/my_project/project_CBD/dist/index.html#/homepage'
                },
                {
                    title: 'Website "Tokyo Sushi"',
                    image: 'sushi.jpg',
                    id: 4,
                    link:'https://irinaantonenko.github.io/tokyosushibar_ua/main.html'
                }
            ]
            }
        },
        components: {
            ProjectsPageItem
        }
    }
</script>

<style lang="scss">
        .projects-page {
            display: flex;
            flex-direction: column;      
            background-color: #F6F6F6;
            padding-bottom: 50px;
            gap: 50px;            
            @media (max-width: 425px) {            
                background-color: #fff;
                gap: 20px;  
            }
            &__title {
                font-family: 'Libre Baskerville';
                font-size: 36px;                
                padding-top: 50px;
                text-transform: uppercase;
                margin: 0 auto;
                @media (max-width: 1440px) {
                    font-size: 30px;
                }
                @media (max-width: 768px) {
                    font-size: 20px;
                }
                @media (max-width: 425px) {
                    padding-top: 20px;
                }
            }
            &__subtitle {
                font-size: 18px;
                margin: 0 auto;
                text-align: center;                
                @media (max-width: 425px) {
                    font-size: 16px;
                }
            }
            &__content {
                max-width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                gap: 50px;
                flex-wrap: wrap; 
            }
        }
</style>
