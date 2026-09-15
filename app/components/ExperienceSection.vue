<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <div class="wrap">
      <div class="about-intro" data-reveal>
        <div class="about-photo">
          <img
            src="/samuel.jpg"
            alt="Samuel Dičér outdoors"
            width="320"
            height="320"
            loading="lazy"
          /><span class="photo-note">A human behind the code. ↗</span>
        </div>
        <div>
          <p class="eyebrow section-index">02 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">
            Care for the craft.<br /><span class="serif-word"
              >Curiosity for what’s next.</span
            >
          </h2>
          <p class="about-copy">
            I’m Samuel, a frontend developer with 3+ years of experience
            building enterprise applications and public websites. I enjoy making
            complex things feel simple — through thoughtful components,
            responsive interfaces and maintainable code.
          </p>
          <p class="about-copy muted">
            From Vue and Nuxt to React and Next.js, I care about how a product
            feels as much as how it works. I also use AI-assisted development as
            part of my workflow.
          </p>
          <div class="about-facts">
            <span><i class="status-dot" /> {{ profile.location }}</span
            ><span>English · B2</span>
          </div>
        </div>
      </div>
      <div class="experience-layout">
        <div class="aside-heading" data-reveal>
          <p class="eyebrow">THE JOURNEY</p>
          <h3>Experience<span class="lime">.</span></h3>
          <a class="text-link" href="/Samuel_Dicer_CV.pdf" download
            >Full résumé ↓</a
          >
        </div>
        <div>
          <article
            v-for="job in profile.experience"
            :key="job.company"
            class="experience-row"
            data-reveal
          >
            <div class="experience-top">
              <h4>{{ job.company }}</h4>
              <span>{{ job.period }}</span>
            </div>
            <p class="role">{{ job.role }}</p>
            <p class="muted">{{ job.description }}</p>
            <div class="tags">
              <span v-for="tag in job.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
          <article class="education-row" data-reveal>
            <span class="eyebrow">EDUCATION / 2017 — 2022</span>
            <h4>Constantine the Philosopher University in Nitra</h4>
            <p class="muted">
              Master’s degree in Informatics · 2020–2022<br />Bachelor’s degree
              in Informatics · 2017–2020
            </p>
          </article>
        </div>
      </div>
      <div class="skills-section" data-reveal>
        <div class="skills-heading">
          <p class="eyebrow">THE TOOLKIT</p>
          <h3>
            The right tools.<br /><span class="serif-word"
              >The thoughtful approach.</span
            >
          </h3>
        </div>
        <div class="skill-grid">
          <div
            v-for="(group, index) in profile.skills"
            :key="group.title"
            class="skill-group"
          >
            <span class="skill-index">0{{ index + 1 }} /</span>
            <h4>{{ group.title }}</h4>
            <div class="skill-items">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
        <p class="ai-note">
          <span aria-hidden="true">✳</span> Human-led. AI-assisted.
          <span class="muted">Working with Codex, Claude & Copilot.</span>
        </p>
      </div>
    </div>
  </section>
</template>
