<script setup>
import DartCodeAICard from './DartCodeAICard.vue';

import AutoFlagIcon from '@/assets/images/autoflag-icon.svg'
import SmartRampIcon from '@/assets/images/smartramp-icon.svg'
import ExplainFlagIcon from '@/assets/images/explainflag-icon.svg'
import AutoSegmentIcon from '@/assets/images/autosegment-icon.png'

</script>

<template>
    <section id="dart-code-ai-section" class="dart-ai-section-bg h-[var(--dart-ai-section-bg-height)] horizontal-padding flex flex-col gap-8 items-center  ">
    <!-- top -->
    <div class="flex flex-col items-center">
        <button class="button-text bg-secondary w-[181px] py-2 px-5 rounded-full">
            <span class="gradient-text"> Coming Soon </span>
            
        </button>
<h2 class="heading-1 text-center text-accent">
    DartCodeAI That Actually Changes Flagging
</h2>
    </div>
    

    <!-- middle  -->
    <div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-14">
    <DartCodeAICard 
    :icon="AutoFlagIcon" 
    :title="'AutoFlag AI (LLM-Assisted Flag Creation)'"
    :description="'Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you..'"
    />

    <DartCodeAICard 
    :icon="SmartRampIcon" 
    :title="'SmartRamp AI (AI-Driven Rollout Optimization)'"
    :description="'CRollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.'"
    />

    <DartCodeAICard 
    :icon="ExplainFlagIcon" 
    :title="'ExplainFlags AI (LLM Root-Cause + Insights)'"
    :description="'Understand issues instantly with AI-generated, plain-language insights tied to your flags.'"
    />

    <DartCodeAICard 
    :icon="AutoSegmentIcon" 
    :title="'AutoSegment AI (Behavioral Segmentation)'"
    :description="'Target the right users automatically. AI builds segments from live behavior—no manual rules.'"
    />

    </div>
   
    <!-- bottom -->
      <h3 class="hidden xl:block heading-2 text-secondary">
        Enterprise Only
    </h3>
    <div class=" new-glass-effect flex flex-col gap-4 text-accent  p-6 rounded-lg md:w-full md:items-center xl:flex-row xl:justify-between xl:p-12">
 <h4 class="heading-3">
        <span class="text-secondary "> 
Be The First
        </span> To Try Out Our New AI Features.
    </h4>

    <form action="" class="flex backdrop-blur-sm bg-transparent border-2 border-white/60 rounded-lg shadow-2xl. p-1  md:w-[70%] xl:w-[50%]">
        <div class="form-input w-[70%] ">
<label for="user-email">
        <input 
        class="w-100 bg-transparent outline-none p-2" 
         type="text" name="user-email" id="user-email" placeholder="Enter email address">
         </label>
        </div>
        

       
        <button type="submit"
        class="gold-btn w-[100px] md:w-[30%] py-2 rounded-md button-text"> Get Access</button>
        <button type="submit"
        class="hidden button-text gold-outline-bt"
        > Join AI Early Access</button>
    </form>
    </div>

      </section>
</template>

<style>
    :root{
        --dart-ai-section-bg-height:fit-content;
    }
    .dart-ai-section-bg{
        background-image: url('../../assets/images/bg-dart-ai-mobile.jpg');
        background-size: cover;
        background-repeat: no repeat;
        background-position: center;
    }
</style>