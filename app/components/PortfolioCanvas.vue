<script setup lang="ts">
import { projects } from "~/data/projects";
import { technicalSkills } from "~/data/skills";

const activeId = ref<string | null>(null);
const activeProject = computed(() =>
  projects.find((project) => project.id === activeId.value),
);
const motion = ref(true);
const pointer = ref({ x: -100, y: -100, visible: false, interactive: false });
const cursorStyle = computed(() => ({
  transform: `translate3d(${pointer.value.x}px, ${pointer.value.y}px, 0)`,
}));
let frame = 0;

function select(id: string) {
  if (activeId.value === id) {
    dismiss();
    return;
  }
  activeId.value = id;
}
function dismiss() {
  const originId = activeId.value;
  const restoreFocus = document.activeElement?.closest("#project-detail");
  activeId.value = null;
  if (restoreFocus && originId) {
    nextTick(() => {
      document
        .getElementById(`project-${originId}`)
        ?.focus({ preventScroll: true });
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
    <a class="quick-contact" href="mailto:dicersamuel@gmail.com">Contact me</a>
    <main
      class="constellation"
      aria-label="Samuel Dičér and selected projects"
      @click.self="dismiss"
    >
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
          :class="{ highlighted: activeId === 'future' }"
          d="M500 280 Q500 160 500 63"
        />
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
              src="/samuel-portrait-cropped.jpg"
              alt="Samuel Dičér, photographed in the mountains"
              width="1152"
              height="1199"
              fetchpriority="high"
            />
          </div>
        </div>
        <p class="hello">Hello, I’m</p>
        <h1 id="name">Samuel Dičér</h1>
        <p class="identity-role">
          I’m a frontend developer with 3+ years of experience building
          enterprise applications and public websites. I focus on intuitive,
          responsive interfaces, reusable components and maintainable
          architecture, with SEO in mind. Experienced in AI-assisted
          development.
        </p>
        <p class="available"><span /> Open to new opportunities</p>
        <button
          id="project-skills"
          class="skills-button"
          :aria-expanded="activeId === 'skills'"
          :aria-controls="activeId === 'skills' ? 'project-detail' : undefined"
          @click="select('skills')"
        >
          Skills
        </button>
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
      >
        <button
          class="project-node"
          :id="`project-${project.id}`"
          :aria-label="
            project.id === 'future'
              ? 'Could be your project — contact me'
              : `${project.name} — ${project.label}. View technologies and contribution`
          "
          :aria-expanded="activeId === project.id"
          :aria-controls="
            activeId === project.id ? 'project-detail' : undefined
          "
          @click="select(project.id)"
        >
          <svg class="node-ring" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="97" />
          </svg>
          <span class="node-name">{{ project.name }}</span
          ><span class="node-label">{{ project.period || project.label }}</span>
        </button>
      </div>

      <Transition name="detail">
        <section
          v-if="activeProject || activeId === 'skills'"
          id="project-detail"
          class="detail-card"
          :class="[
            activeProject?.side,
            { 'skills-card': activeId === 'skills' },
          ]"
          :aria-label="
            activeId === 'skills'
              ? 'Technical skills'
              : `${activeProject?.name} project details`
          "
        >
          <div class="detail-top">
            <span
              >{{
                activeProject?.id === "future" ? "" : activeProject?.company
              }}
              <span v-if="activeProject?.period" aria-hidden="true">/</span>
              {{ activeProject?.period }}</span
            ><button
              class="close-detail"
              :aria-label="
                activeId === 'skills' ? 'Close skills' : 'Close project details'
              "
              @click="dismiss"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div
            v-if="activeId === 'skills'"
            class="detail-content skills-content"
          >
            <h2>Technical skills</h2>
            <section
              v-for="(group, index) in technicalSkills"
              :key="group.title"
              class="skill-group modal-accent"
              :style="{ '--skill-delay': `${index * 65 + 80}ms` }"
            >
              <h3>{{ group.title }}</h3>
              <p class="skills-list">{{ group.items.join(", ") }}</p>
            </section>
          </div>
          <div
            v-else-if="activeProject?.id === 'future'"
            class="detail-content future-content"
          >
            <h2>Could be your project</h2>
            <p class="future-description modal-accent">
              Have a project in mind or a role to fill? Let’s talk about what we
              can build together.
            </p>
            <a class="future-contact" href="mailto:dicersamuel@gmail.com"
              >Contact me
            </a>
          </div>
          <div
            v-else-if="activeProject"
            :key="activeProject.id"
            class="detail-content"
          >
            <p class="detail-category">{{ activeProject.label }}</p>
            <h2>{{ activeProject.name }}</h2>
            <p class="project-stack modal-accent">
              {{ activeProject.stack.join(", ") }}
            </p>
            <h3>MY CONTRIBUTION</h3>
            <ul>
              <li
                v-for="(item, index) in activeProject.work"
                :key="item"
                class="modal-accent"
                :style="{ '--skill-delay': `${index * 65 + 145}ms` }"
              >
                {{ item }}
              </li>
            </ul>
            <a
              class="future-contact project-website"
              :href="activeProject.website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit website (opens in a new tab)"
              >Visit website</a
            >
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
