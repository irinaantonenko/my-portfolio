<template>
    <div class="main-page">  
        <div class="main-page__content">
            <h2 class="main-page__subtitle">portfolio</h2>
            <h1 class="main-page__title">Iryna Antonenko</h1>
            <div class="main-page__text">
                <p class="main-page__position">FRONT-END DEVELOPER</p>
                <a href="mailto:antonenkoirina1706@gmail.com" class="main-page__mail">email me</a>
            </div>
        </div>
        <div class="main-page__image-wrap">
            <img src="../assets/images/main-photo.jpg" alt="main-photo" class="main-page__image">
        </div>
    </div>
</template>

<script>  
    export default {
        name: 'MainPage'
    }
</script>

<style lang="scss">
    .main-page {
        display: flex;
        align-items: center;
        justify-content: space-between;       
        background-color: #F6F6F6;
        @media (max-width: 935px) {
            flex-direction: column;
        }
        &__content {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 50px;
            min-height: 600px;
            @media (max-width: 935px) {
                width: 100%;
                min-height: 450px;
            }
            @media (max-width: 768px) {
                gap: 30px;
            }
        }
        &__subtitle {
            font-size: 16px;
            text-transform: uppercase;
            @media (max-width: 425px) {
                font-size: 14px;
            }
        }
        &__title {
            font-family: 'Libre Baskerville';
            font-size: 80px;
            text-align: center;
            margin-bottom: 50px;
            @media (max-width: 935px) {
                font-size: 60px;
            }
            @media (max-width: 425px) {
                font-size: 50px;
                margin-bottom: 0;
            }
        }
        &__text {
            display: flex;
            align-items: flex-start;
            gap: 100px;
            @media (max-width: 425px) {
                flex-direction: column;
                gap: 20px;
                align-items: center;
            }
        }
        &__mail {
            text-transform: uppercase;
            text-decoration: none;
            padding-bottom: 10px;
            border-bottom: 1px solid #000;
            color: #000;
            &:hover {
                color: red;
                border-bottom: 1px solid red;
            }
        }
        &__image-wrap {
            position: relative;
            width: 50%;
            height: 600px;
            overflow: hidden;
            @media (max-width: 935px) {
                width: 100%;
                height: 450px;
            }
            @media (max-width: 425px) {
                height: 400px;
            }
        }
        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>
