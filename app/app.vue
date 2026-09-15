<script setup lang="ts">
useReveal();
</script>

<template>
  <div>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header wrap">
      <a class="wordmark" href="#" aria-label="Samuel Dičér home"
        >sd<span>®</span></a
      >
      <nav aria-label="Main navigation">
        <a href="#work">Work<span>03</span></a>
        <a href="#about">About</a>
        <a href="#contact" class="nav-contact"
          >Let’s talk <span aria-hidden="true">↗</span></a
        >
      </nav>
    </header>
    <main id="main">
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <footer class="wrap site-footer">
      <a class="wordmark" href="#" aria-label="Back to top">sd<span>®</span></a>
      <p>© {{ new Date().getFullYear() }} Samuel Dičér</p>
      <p>Designed with intent. Built with Nuxt.</p>
      <a href="#">Back to top ↑</a>
    </footer>
  </div>
</template>
