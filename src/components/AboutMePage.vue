<template>
    <div class="about-page"> 
        <div class="about-page__image-wrap">
            <img class="about-page__image" src="../assets/images/aboutme.jpg" alt="about-photo">
        </div> 
        <div class="about-page__content">
            <h2 class="about-page__subtitle">Hello! I'm an enthusiastic frontend developer.</h2>
            <p class="about-page__text">I'm fond of creating web sites from the process of writing the code to getting the finished product.
            </p>
            <p class="about-page__text">Looking to be part of a friendly and professional team where I could develop my skills to achieve team results.
            </p>
        </div>
    </div>
</template>

<script>   
    export default {
        name: 'AboutMePage'
    }
</script>

<style lang="scss">
        .about-page {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #F6F6F6;
            @media (max-width: 768px) {
                position: relative;
                flex-direction: column-reverse;
            }
            &__content {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 50px;
                height: 600px;
                @media (max-width: 935px) {
                    height: 450px;
                    gap:20px;
                }
                @media (max-width: 768px) {
                    width: 95%;
                    position: relative;
                    align-items: flex-start;
                }
                @media (max-width: 500px) {
                   height: 500px;
                   padding-bottom: 20px;
                }
            }
            &__subtitle {
                font-family: 'Libre Baskerville';
                width: 400px;
                font-size: 36px;
                padding-top: 100px;
                @media (max-width: 935px) {
                    font-size: 28px;
                    width: 300px;
                }
                @media (max-width: 768px) {
                    padding-top: 70px;
                }
                @media (max-width: 500px) {
                    width: 95%;
                    padding-top: 50px;
                }
            }
            &__text {
                width: 400px;
                font-size: 16px;
                @media (max-width: 935px) {
                    width: 300px;
                } 
                @media (max-width: 590px) {
                    width: 50%;
                }
                @media (max-width: 500px) {
                    font-size: 14px;
                }
            }
            &__image-wrap {
                position: relative;
                width: 50%;
                height: 600px;
                overflow: hidden;
                padding-top: 20px;
                @media (max-width: 935px) {
                    height: 450px;
                }
                @media (max-width: 768px) {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 60%;
                }
                @media (max-width: 590px) {
                    height: 350px;
                }
                @media (max-width: 420px) {
                    height: 280px;
                }
            }
            &__image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: top center;
            }
        }
</style>
