<script setup lang="ts">
import { profile } from "~/data/profile";
</script>

<template>
  <section id="work" class="work-section wrap" aria-labelledby="work-title">
    <div class="section-heading" data-reveal>
      <div>
        <p class="eyebrow section-index">01 / SELECTED WORK</p>
        <h2 id="work-title">
          Built for the<br /><span class="serif-word">real world.</span>
        </h2>
      </div>
      <p>
        Enterprise platforms. Product interfaces.<br />Websites with purpose.<br /><span
          class="muted"
          >A selection of work I’ve contributed to.</span
        >
      </p>
    </div>
    <article
      v-for="project in profile.projects"
      :key="project.id"
      class="project"
      :class="`project-${project.id}`"
      data-reveal
    >
      <div class="project-visual" :class="project.visual" aria-hidden="true">
        <span class="visual-brand">{{ project.name }}<span>®</span></span
        ><span class="visual-number">/ {{ project.number }}</span>
        <div
          v-if="project.visual === 'dashboard'"
          class="mock-window dashboard-window"
        >
          <div class="mock-sidebar">
            <b>e<span>.</span></b
            ><i class="sidebar-active">◈ &nbsp; Overview</i
            ><i>▦ &nbsp; Risk register</i><i>◎ &nbsp; Compliance</i
            ><i>▤ &nbsp; Reports</i>
            <div class="sidebar-bottom">
              WORKSPACE<br /><strong>Everything in perspective.</strong>
            </div>
          </div>
          <div class="mock-content">
            <div class="mock-topline">
              <span>Workspace / Overview</span
              ><span class="avatar-mini">SD</span>
            </div>
            <h3>A clearer picture.</h3>
            <p>Your governance, risk & compliance overview</p>
            <div class="mock-stats">
              <div>
                <small>Frameworks</small><b>Overview <em>↗</em></b>
              </div>
              <div>
                <small>Risk management</small><b>Connected <em>↗</em></b>
              </div>
            </div>
            <div class="mock-chart">
              <div class="chart-title">
                Activity overview <span>THIS QUARTER</span>
              </div>
              <div class="chart-bars">
                <i
                  v-for="n in 14"
                  :key="n"
                  :style="{ height: `${25 + ((n * 17) % 65)}%` }"
                />
              </div>
            </div>
            <div class="mock-row">
              <span class="status-dot" /> All your workflows. One place.
              <span>→</span>
            </div>
          </div>
        </div>
        <div
          v-else-if="project.visual === 'boards'"
          class="mock-window board-window"
        >
          <div class="board-top">
            <b>juno<span>one</span></b
            ><span>Workspace &nbsp; / &nbsp; Product</span><span>✳</span>
          </div>
          <div class="board-heading">
            <h3>Good work starts here.</h3>
            <span>+ New task</span>
          </div>
          <div class="board-columns">
            <div
              v-for="(column, index) in ['To do', 'In progress', 'Done']"
              :key="column"
              class="board-column"
            >
              <div class="column-title">
                <i :class="`dot-${index}`" />{{ column }}<span>•••</span>
              </div>
              <div v-for="n in index === 1 ? 2 : 3" :key="n" class="task-card">
                <span class="task-tag">{{
                  ["DESIGN", "DEVELOPMENT", "REVIEW"][(n + index) % 3]
                }}</span
                ><b>{{
                  [
                    "Refine the little details",
                    "Build reusable components",
                    "Connect the experience",
                  ][(n + index) % 3]
                }}</b>
                <div class="task-lines" />
                <div class="task-footer">
                  <span>↗ &nbsp; ◇</span
                  ><span class="avatar-mini">{{
                    ["SD", "UI", "FE"][index]
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="website-art">
          <div class="star-orbits"><i /><i /><i /><span>✳</span></div>
          <div class="website-copy">
            <p>A NEW PERSPECTIVE</p>
            <h3>Ideas.<br />Taking shape.</h3>
            <span class="mini-button">Explore the possibilities ↗</span>
          </div>
          <span class="website-line">CLARITY IN EVERY DETAIL —</span>
        </div>
        <span class="visual-caption"
          >ILLUSTRATIVE INTERFACE · {{ project.company.toUpperCase() }}</span
        >
      </div>
      <div class="project-info">
        <div class="project-title">
          <span class="project-number">{{ project.number }}</span>
          <div>
            <p class="eyebrow">{{ project.category }}</p>
            <h3>
              {{ project.name }}
              <span class="muted">/ {{ project.headline }}</span>
            </h3>
          </div>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-details">
          <div class="tags">
            <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <details>
            <summary>My contribution <span aria-hidden="true">+</span></summary>
            <p>{{ project.contribution }}</p>
          </details>
        </div>
      </div>
    </article>
  </section>
</template>
