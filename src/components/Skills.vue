<script setup>
defineProps({
  skills: {
    type: Array,
    required: true
  }
})
</script>


<template>
  <section class="card">
    <h2>技能</h2>
    <ul>
      <li v-for="s in skills" :key="s">{{ s }}</li>
    </ul>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
}
</style>
