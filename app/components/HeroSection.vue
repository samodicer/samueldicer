<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <div class="hero-top intro-enter">
      <p class="eyebrow"><span class="status-dot" /> OPEN TO OPPORTUNITIES</p>
      <p class="coordinate">BASED IN SLOVAKIA · WORKING ON THE WEB</p>
    </div>
    <div class="hero-heading intro-enter">
      <p class="hero-name">
        Hey, I’m {{ profile.name }}
        <span class="wave" aria-hidden="true">✳</span>
      </p>
      <h1 id="hero-title">
        Thoughtful<br /><span class="serif-word">interfaces.</span><br />Solid
        foundations<span class="lime">.</span>
      </h1>
      <div class="orbit-art" aria-hidden="true">
        <div class="orbit orbit-one" />
        <div class="orbit orbit-two" />
        <div class="orbit orbit-three" />
        <div class="orbit orbit-four" />
        <div class="orbit-core">&lt;/&gt;</div>
        <span class="orbit-star">✳</span
        ><span class="orbit-label">CRAFTED WITH CURIOSITY</span>
      </div>
    </div>
    <div class="hero-bottom intro-enter">
      <div class="hero-description">
        <span class="small-cross" aria-hidden="true">+</span>
        <p>
          Frontend developer turning complex ideas into clear, considered
          digital experiences.
        </p>
      </div>
      <div class="hero-actions">
        <a class="button button-lime" href="#work"
          >Explore my work <span aria-hidden="true">↘</span></a
        ><a class="text-link" href="/Samuel_Dicer_CV.pdf" download
          >Download CV <span aria-hidden="true">↓</span></a
        >
      </div>
    </div>
    <div class="hero-meta">
      <span>VUE / NUXT / REACT / TYPESCRIPT</span
      ><span class="scroll-note"
        >SCROLL TO DISCOVER <span aria-hidden="true">↓</span></span
      >
    </div>
  </section>
</template>
