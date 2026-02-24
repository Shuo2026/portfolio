<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="card">
    <h2>项目</h2>

    <RouterLink
      class="proj"
      v-for="p in projects"
      :key="p.slug"
      :to="`/projects/${p.slug}`"
    >
      <h3>{{ p.title }}</h3>
      <p>{{ p.desc }}</p>
      <small class="hint">点击查看详情 →</small>
    </RouterLink>
  </section>
</template>




<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
}
.proj {
  border-top: 1px solid #f1f5f9;
  padding-top: 12px;
  margin-top: 12px;
}
.proj { display: block; color: inherit; text-decoration: none; }
.proj:hover { opacity: 0.9; }
.hint { opacity: 0.7; }
</style>
