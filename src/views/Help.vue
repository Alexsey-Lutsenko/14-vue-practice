<template>
  <app-page :back="true" :title="'Часто задаваемые вопросы'">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import QuestionItem from "../components/question/QuestionItem.vue"

export default {
  setup() {
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все что нужно, чтобы быстро учиться'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано через FireBase'}
    ]

    return {
      questions
    }
  },
  components: {
    AppPage, QuestionItem
  }
}
</script>