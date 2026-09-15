<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section
    id="contact"
    class="contact-section wrap"
    aria-labelledby="contact-title"
    data-reveal
  >
    <p class="eyebrow section-index">03 / WHAT’S NEXT?</p>
    <div class="contact-heading">
      <h2 id="contact-title">
        Let’s build<br /><span class="serif-word">something great.</span>
      </h2>
      <a
        class="contact-arrow"
        :href="`mailto:${profile.email}`"
        aria-label="Email Samuel"
        ><span aria-hidden="true">↗</span></a
      >
    </div>
    <div class="contact-bottom">
      <div>
        <p>Looking for a frontend developer who cares?</p>
        <a class="email-link" :href="`mailto:${profile.email}`">{{
          profile.email
        }}</a>
      </div>
      <div class="contact-links">
        <a :href="profile.github" target="_blank" rel="noopener noreferrer"
          >GitHub ↗</a
        ><a href="/Samuel_Dicer_CV.pdf" download>Download CV ↓</a>
      </div>
    </div>
  </section>
</template>
