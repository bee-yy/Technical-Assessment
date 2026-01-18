<script setup>
import GoogleCloudImg from '@/assets/images/googleCloud.png'
import AmazonImg from '@/assets/images/amazon-aws.png';
import AzureImg from '@/assets/images/mircrosoft-azure.png'
import DigitalOceanImg from '@/assets/images/digitalOcean.png'
import IbmImg from '@/assets/images/ibm.png'

</script>

<template>
<section id="social-proof-section" class="mt-[20%] p-4 lg:mt-[35%] md:p-page-margin-tablet xl:p-page-margin-desktop ">


<h4 class=" heading-3 text-center gradient-text ">
Trusted by various engineering teams
</h4>

    <div class="trusted-bg-imgs flex gap-[53px] mt-6 overflow-x-auto md:justify-center ">

        <img 
        class="social-proof-img"
        :src="GoogleCloudImg" alt="Google Cloud Logo" width="155px">
    <img class="social-proof-img"
     :src="AmazonImg" alt="Amazon AWS Logo" width="120px">
     <img class="social-proof-img"
     :src="AzureImg" alt="Microsoft Azure Logo" width="120px">
    <img class="social-proof-img"
    :src="DigitalOceanImg" alt="Digital Ocean Logo" width="120px">
    <img class="social-proof-img"
    :src="IbmImg" alt=" Ibm Logo" width="120px">
    </div>
    </section>
</template>