<script setup>
import FooterLogo from '@/assets/images/footer-logo.png'
</script>

<template>
<footer class="horizontal-padding bg-accent flex flex-col gap-6 xl:flex-row">
   
     <div class="lg:flex gap-4  xl:flex-3"> 

  <!-- 1 -->
    <div class="flex flex-col gap-4 lg:flex-1"> 
        <div class="log-wrapper w-[171px]">
            <img  :src="FooterLogo" alt="IntelliToggle Logo">
        </div>
        <p class="text-body-2">IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.</p>


        <div class="icon-wrapper">
            <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#4B4B4B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6498 7.74219C11.8023 7.74219 8.70703 10.8375 8.70703 14.6849C8.70703 17.7513 10.7031 20.3548 13.4512 21.2805C13.7984 21.3384 13.9141 21.1359 13.9141 20.9334C13.9141 20.7598 13.9141 20.3259 13.9141 19.7474C11.9759 20.1813 11.5709 18.8217 11.5709 18.8217C11.2527 18.0117 10.7899 17.8092 10.7899 17.8092C10.1534 17.3752 10.8477 17.3752 10.8477 17.3752C11.542 17.4331 11.9181 18.0985 11.9181 18.0985C12.5255 19.1688 13.538 18.8506 13.943 18.677C14.0009 18.2142 14.1744 17.9249 14.3769 17.7513C12.8438 17.5777 11.2238 16.9703 11.2238 14.3089C11.2238 13.5567 11.4841 12.9203 11.947 12.4575C11.8891 12.2839 11.6288 11.5896 12.0048 10.6061C12.0048 10.6061 12.5834 10.4325 13.9141 11.3293C14.4637 11.1846 15.0712 11.0978 15.6498 11.0978C16.2283 11.0978 16.8358 11.1846 17.3855 11.3293C18.7162 10.4325 19.2947 10.6061 19.2947 10.6061C19.6708 11.5607 19.4394 12.255 19.3526 12.4575C19.7865 12.9492 20.0758 13.5567 20.0758 14.3089C20.0758 16.9703 18.4558 17.5488 16.8937 17.7224C17.154 17.9249 17.3565 18.3588 17.3565 18.9952C17.3565 19.9209 17.3565 20.6731 17.3565 20.9045C17.3565 21.078 17.4722 21.3095 17.8483 21.2516C20.5965 20.3548 22.5925 17.7513 22.5925 14.6849C22.5925 10.8375 19.4972 7.74219 15.6498 7.74219Z" fill="white"/>
</svg>
</span>
        </div>

    </div>

        <!-- 2 -->
    <div class="flex flex-row-reverse justify-end gap-8 lg:flex-1">
        <!-- left -->
        <div>
            <p class=" text-body-2 mb-3">
                Resources
            </p>
            <ul class="flex flex-col gap-2 button-text">
                <li><a href=""> Why IntelliToggle Is Different</a></li>
                <li> <a href="">Customer Support</a></li>
                <li> <a href="">Terms & Conditions</a></li>
                <li> <a href="">Privacy Policy</a></li>
            </ul>
        </div>
        <!-- Rright -->
        <div>
<p class="title  text-body-2 mb-3">Company</p>
            <ul class="flex flex-col gap-2 button-text">
                <li>Pricing</li>
                <li>Documentation</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
    </div>
    <!-- 3 -->
    <div class="flex flex-col gap-6 mt-9 lg:w-[50%] lg:ml-auto md:mt-3 xl:flex-1">
        <p class="button-text">Subscribe to Newsletter</p>
         <form action="" class="flex p-1 h-[45px] rounded-md">
        <div class="form-input w-[70%]">
<label for="user-email">
        <input 
        class="w-100 bg-white w-full h-[45px] outline-none p-2 rounded-l-md" 
         type="text" name="user-email" id="user-email" placeholder="Enter email address">
         </label>
        </div>
        
        <button type="submit"
        class="hidden md:block gold-btn w-[30%] h-[45px] py-2 rounded-r-md button text"> Subscribe</button>
         <button type="submit"
        class="md:hidden gradient-bg purple-btn w-[30%] h-[45px] py-2 rounded-r-md button text"> Join </button>
    </form>
    </div>

</footer>
</template>