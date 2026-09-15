<script setup lang="ts">
import { projects } from "~/data/projects";

const activeId = ref<string | null>(null);
const pinned = ref(false);
const activeProject = computed(() =>
  projects.find((project) => project.id === activeId.value),
);
const motion = ref(true);
const pointer = ref({ x: -100, y: -100, visible: false, interactive: false });
const cursorStyle = computed(() => ({
  transform: `translate3d(${pointer.value.x}px, ${pointer.value.y}px, 0)`,
}));
let closeTimer: ReturnType<typeof setTimeout> | undefined;
let frame = 0;
let restoringFocus = false;
let hoverDismissedUntil = 0;

function cancelClose() {
  clearTimeout(closeTimer);
}
function reveal(id: string, fromFocus = false) {
  cancelClose();
  // Closing the overlay can expose a circle under the stationary pointer.
  // Ignore that synthetic re-entry until the leave transition has finished.
  if (!fromFocus && Date.now() < hoverDismissedUntil) return;
  if (pinned.value) return;
  activeId.value = id;
}
function focusProject(id: string) {
  if (!restoringFocus) reveal(id, true);
}
function scheduleClose() {
  if (pinned.value) return;
  cancelClose();
  closeTimer = setTimeout(() => {
    activeId.value = null;
  }, 220);
}
function select(id: string) {
  cancelClose();
  if (activeId.value === id && pinned.value) {
    dismiss();
    return;
  }
  activeId.value = id;
  pinned.value = true;
}
function dismiss() {
  cancelClose();
  hoverDismissedUntil = Date.now() + 350;
  const originId = activeId.value;
  const restoreFocus = document.activeElement?.closest("#project-detail");
  activeId.value = null;
  pinned.value = false;
  if (restoreFocus && originId) {
    nextTick(() => {
      restoringFocus = true;
      document
        .getElementById(`project-${originId}`)
        ?.focus({ preventScroll: true });
      restoringFocus = false;
    });
  }
}
function handleKey(event: KeyboardEvent) {
  if (event.key === "Escape") dismiss();
}

onMounted(() => {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const updatePreference = () => {
    motion.value = !preference.matches;
  };
  updatePreference();
  preference.addEventListener("change", updatePreference);
  const move = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    cancelAnimationFrame(frame);
    const interactive =
      event.target instanceof Element &&
      Boolean(event.target.closest("button, a"));
    frame = requestAnimationFrame(() => {
      pointer.value = {
        x: event.clientX,
        y: event.clientY,
        visible: true,
        interactive,
      };
    });
  };
  const leave = () => {
    pointer.value.visible = false;
  };
  window.addEventListener("pointermove", move, { passive: true });
  document.documentElement.addEventListener("pointerleave", leave);
  window.addEventListener("keydown", handleKey);
  onBeforeUnmount(() => {
    cancelClose();
    cancelAnimationFrame(frame);
    window.removeEventListener("pointermove", move);
    document.documentElement.removeEventListener("pointerleave", leave);
    window.removeEventListener("keydown", handleKey);
    preference.removeEventListener("change", updatePreference);
  });
});
</script>

<template>
  <div
    class="portfolio"
    :class="{ 'motion-off': !motion, 'project-open': activeId }"
  >
    <header class="topbar">
      <nav aria-label="Contact">
        <a class="contact-link" href="mailto:dicersamuel@gmail.com"
          >Let’s talk <span aria-hidden="true">↗</span></a
        >
      </nav>
    </header>

    <main
      class="constellation"
      aria-label="Samuel Dičér and selected projects"
      @click.self="dismiss"
    >
      <div class="canvas-note">
        <span>A FEW THINGS<br />I’VE HELPED BUILD</span>
      </div>
      <span class="edition">PORTFOLIO — 2026</span>

      <svg
        class="connections"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          v-for="project in projects"
          :key="project.id"
          :class="{ highlighted: activeId === project.id }"
          :d="`M 500 330 Q ${project.x < 50 ? 330 : 675} ${project.y * 7} ${project.x * 10} ${project.y * 7}`"
        />
      </svg>
      <svg
        class="connections connections-mobile"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          :class="{ highlighted: activeId === 'eramba' }"
          d="M500 280 Q330 220 180 126"
        />
        <path
          :class="{ highlighted: activeId === 'eramba-web' }"
          d="M500 280 Q680 220 800 126"
        />
        <path
          :class="{ highlighted: activeId === 'juno' }"
          d="M500 280 Q720 350 830 497"
        />
        <path
          :class="{ highlighted: activeId === 'stellarex' }"
          d="M500 280 Q280 350 170 504"
        />
        <path
          :class="{ highlighted: activeId === 'juno-web' }"
          d="M500 280 Q500 490 510 616"
        />
      </svg>

      <section class="identity" aria-labelledby="name">
        <div class="portrait-wrap">
          <div class="portrait-outline" aria-hidden="true" />
          <div class="portrait-crop">
            <img
              src="/samuel-portrait.jpg"
              alt="Samuel Dičér, photographed in the mountains"
              width="1152"
              height="2048"
              fetchpriority="high"
            />
          </div>
          <span class="portrait-label">A HUMAN BEHIND THE CODE</span>
        </div>
        <p class="hello">Hello, I’m</p>
        <h1 id="name">Samuel Dičér<span>.</span></h1>
        <p class="identity-role">Frontend developer. Detail enthusiast.</p>
        <p class="available"><span /> Open to new opportunities</p>
      </section>

      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-anchor"
        :class="[project.id, project.size, { active: activeId === project.id }]"
        :style="{
          '--x': `${project.x}%`,
          '--y': `${project.y}%`,
          '--delay': `${index * 85 + 200}ms`,
        }"
        @mouseenter="reveal(project.id)"
        @mouseleave="scheduleClose"
      >
        <button
          class="project-node"
          :id="`project-${project.id}`"
          :aria-label="`${project.name} — ${project.label}. View technologies and contribution`"
          :aria-expanded="activeId === project.id"
          :aria-controls="
            activeId === project.id ? 'project-detail' : undefined
          "
          @focus="focusProject(project.id)"
          @blur="scheduleClose"
          @click="select(project.id)"
        >
          <svg class="node-ring" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="97" />
          </svg>
          <span class="node-index">0{{ index + 1 }}</span
          ><span class="node-name">{{ project.name }}</span
          ><span class="node-label">{{ project.label }}</span
          ><span class="node-arrow" aria-hidden="true">↗</span>
        </button>
      </div>

      <Transition name="detail">
        <section
          v-if="activeProject"
          id="project-detail"
          class="detail-card"
          :class="activeProject.side"
          :aria-label="`${activeProject.name} project details`"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
          @focusin="cancelClose"
          @focusout="scheduleClose"
        >
          <div class="detail-top">
            <span
              >{{ activeProject.company }} <span aria-hidden="true">/</span>
              {{ activeProject.period }}</span
            ><button
              class="close-detail"
              aria-label="Close project details"
              @click="dismiss"
            >
              ×
            </button>
          </div>
          <div :key="activeProject.id" class="detail-content">
            <p class="detail-category">{{ activeProject.label }}</p>
            <h2>{{ activeProject.name }}<span>↗</span></h2>
            <div class="stack">
              <span v-for="tech in activeProject.stack" :key="tech">{{
                tech
              }}</span>
            </div>
            <h3>MY CONTRIBUTION</h3>
            <ul>
              <li v-for="item in activeProject.work" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="detail-bottom">
            <span class="detail-dot" />
            {{
              pinned
                ? "Click the circle again to unpin"
                : "Click the circle to keep this open"
            }}
          </div>
        </section>
      </Transition>
    </main>

    <div
      class="cursor-dot"
      :class="{ visible: pointer.visible, interactive: pointer.interactive }"
      :style="cursorStyle"
      aria-hidden="true"
    />
  </div>
</template>
