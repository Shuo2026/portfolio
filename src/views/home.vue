<script setup>
import { skills } from "../data/skills.js"
import { projects } from "../data/projects.js"
import Skills from "../components/Skills.vue"
import Projects from "../components/Projects.vue"

const name = "饶硕"
const goal = "12周做出可交付的学员管理系统并上线演示"


</script>

<template>
  <div class="page">
    <header class="hero">
      <h1>{{ name }}</h1>
      <p class="goal">{{ goal }}</p>
    </header>

    <Skills :skills="skills" />
    <Projects :projects="projects" />

    <section class="card">
      <h2>联系方式</h2>
      <p>邮箱：1569981375@qq.com</p>
    </section>

    <footer class="footer">
      <small>作品集 v1</small>
    </footer>
  </div>
</template>

<style scoped>
.page {
  max-width: 860px;
  margin: 40px auto;
  padding: 0 16px;
  line-height: 1.6;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "PingFang SC",
    "Microsoft YaHei", sans-serif;
}
.hero { margin-bottom: 24px; }
.goal { margin-top: 8px; opacity: 0.8; }
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
}
.footer { margin-top: 24px; opacity: 0.7; }
</style>
