<template>
    <div class="contact-page"> 
        <div class="contact-page__image-wrap">
            <img src="../assets/images/contact.jpg" alt="contact" class="contact-page__image">
        </div>
        <div class="contact-page__content">
            <h2 class="contact-page__title">Contact me</h2>
            <div class="contact-page__btns">
                <a href="https://www.linkedin.com/in/iryna-antonenko-75521521b/" target="_blank" class="contact-page__link">
                    <span class="icon-linkedin"></span>
                    <p class="contact-page__text">LinkedIn</p>  
                </a>
                <a href="https://t.me/irynaantonenko" target="_blank" class="contact-page__link">
                    <span class="icon-telegram"></span>
                    <p class="contact-page__text">Telegram</p>  
                </a>
                <a href="mailto:antonenkoirina1706@gmail.com" target="_blank" class="contact-page__link">
                    <span class="icon-gmail"></span>
                    <p class="contact-page__text">Gmail</p>  
                </a>
                <a href="https://www.youtube.com/@irynaantonenko/" target="_blank" class="contact-page__link">
                    <span class="icon-youtube"></span>
                    <p class="contact-page__text">YouTube</p>  
                </a>
            </div>
            <a href="https://irinaantonenko.github.io/my-portfolio/resume/Iryna_Antonenko_Frontend_Developer.pdf" target="_blank" class="contact-page__resume">Find my resume here</a>
        </div>
    </div>
</template>

<script>    
    export default {
        name: 'ContactPage'
    }
</script>
<style lang="scss">
    .contact-page {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        @media (max-width: 500px) {
            flex-direction: column-reverse;
        }
        &__image-wrap {
            width: 50%;
            overflow: hidden;
            position: relative;
            height: 600px;
            @media (max-width: 935px) {
                height: 450px;
            }
            @media (max-width: 425px) {
                height: 300px;
                width: 100%;
            }
        }
        &__image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right bottom;
            padding-top: 20px;
        }
        &__content {
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 50px;
            padding: 50px 0 20px;
            @media (max-width: 935px) {
                gap: 20px;
            }
            @media (max-width: 425px) {
                padding-top: 20px;
                background-color: #F6F6F6;
                width: 100%;
            }
        }
        &__title {
            font-size: 36px;
            font-family: 'Libre Baskerville';
            text-transform: uppercase;
            @media (max-width: 1440px) {
                font-size: 30px;
            }
            @media (max-width: 768px) {
                font-size: 20px;
            }
        }
        &__btns {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        &__link {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ddd;
            box-sizing: border-box;
            border-radius: 5px;
            gap: 10px;
            width: 150px;
            height: 50px;
            color: #000;
            cursor: pointer;
            font-size: 18px;
            &:hover {
                opacity: 0.5;
            }
            @media (max-width: 768px) {
                font-size: 14px;
            }
        }
        &__resume {
            background-color: #d14836;
            color: #fff;
            cursor: pointer;
            font-size: 18px;
            text-decoration: none;
            width: 250px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            &:hover {
                opacity: 0.7;
            }
            @media (max-width: 768px) {
                font-size: 14px;
                width: 200px;
            }
        }
    }
</style>