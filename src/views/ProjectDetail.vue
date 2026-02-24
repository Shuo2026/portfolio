<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

const map = {
  "student-crm": {
    title: "学员管理系统 Student-CRM",
    desc: "面向中小机构的学员管理系统。",
    features: [
      "登录与权限控制",
      "学员列表管理",
      "课消记录统计",
      "续费提醒机制",
      "Excel 导出功能"
    ]
  },
  signup: {
    title: "预约报名系统",
    desc: "用于课程预约与报名收集。",
    features: [
      "报名表单提交",
      "后台查看报名记录",
      "数据导出",
      "简单权限管理"
    ]
  }
}

const slug = route.params.slug
const project = map[slug]
</script>

<template>

  <div class="page">
    <RouterLink class="back" to="/">← 返回首页</RouterLink>
    <div v-if="project" class="card">
      <h1>{{ project.title }}</h1>
      <div class="meta">
  <span class="badge">Demo：准备中</span>
  <span class="badge">状态：迭代中</span>
</div>
      <p class="desc">{{ project.desc }}</p>
    </div>

    <div v-else class="card">
      <h1>项目不存在</h1>
      <p class="desc">你访问的项目链接不对。</p>
    </div>
  </div>
  <ul class="feature-list">
  <li v-for="f in project.features" :key="f">
    {{ f }}
  </li>
</ul>
</template>

<style scoped>
.proj {
  display: block;
  color: inherit;
  text-decoration: none;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}
.proj:hover {
  border-color: #e5e7eb;
}
.hint {
  display: inline-block;
  margin-top: 6px;
  opacity: 0.7;
}
.feature-list {
  margin-top: 16px;
  padding-left: 20px;
  line-height: 1.8;
}
.feature-list li {
  margin-bottom: 4px;
}
.back {
  display: inline-block;
  margin-bottom: 12px;
  opacity: 0.85;
  text-decoration: none;
  color: inherit;
}
.back:hover { opacity: 1; }

.meta {
  margin: 10px 0 14px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.badge {
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  opacity: 0.85;
}
.page { max-width: 860px; margin: 40px auto; padding: 0 16px; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; }
.back { display: inline-block; margin-bottom: 12px; opacity: 0.8; }
.desc { opacity: 0.85; }
</style>
