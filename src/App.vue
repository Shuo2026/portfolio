<script setup>
const name = "饶硕"
const goal = "12周做出可交付的学员管理系统并上线演示"
const skills = ["Vue3", "JavaScript", "Git", "Node.js（学习中）"]
const projects = [
  {
    title: "学员管理系统 Student-CRM（开发中）",
    desc: "登录/权限、学员管理、课消记录、续费提醒、Excel导出、上线演示链接"
  },
  {
    title: "预约报名系统（计划中）",
    desc: "报名表单、后台管理、导出、通知（可选）"
  }
]
</script>

<template>
  <div class="page">
    <header class="hero">
      <h1>{{ name }}</h1>
      <p class="goal">{{ goal }}</p>
    </header>

    <section class="card">
      <h2>技能</h2>
      <ul>
        <li v-for="s in skills" :key="s">{{ s }}</li>
      </ul>
    </section>

    <section class="card">
      <h2>项目</h2>
      <div class="proj" v-for="p in projects" :key="p.title">
        <h3>{{ p.title }}</h3>
        <p>{{ p.desc }}</p>
      </div>
    </section>

    <section class="card">
      <h2>联系方式</h2>
      <p>邮箱：1569981375@qq.com</p>
    </section>

    <footer class="footer">
      <small>Day1：作品集主页 v1</small>
    </footer>
  </div>
</template>

<style scoped>
.page {
  max-width: 860px;
  margin: 40px auto;
  padding: 0 16px;
  line-height: 1.6;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
}
.hero { margin-bottom: 24px; }
.goal { margin-top: 8px; opacity: 0.8; }
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
}
.proj { margin-top: 12px; }
.footer { margin-top: 24px; opacity: 0.7; }
</style>
