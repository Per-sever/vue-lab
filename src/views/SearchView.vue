<script setup>
import SearchBar from '@/components/SearchBar.vue';
import { computed, ref } from 'vue';
const searchQuery = ref('');

const arr = [
  '27 сайтов с задачками для оттачивания наывков прграммирования',
  'Готовимся к собеседованию в Google: 8 месяцев непрерывной работы',
  '15 материалов по разработке игр',
  '10 лучших видеокурсов для изучения Linux',
  'Учебный план по осваиванию современного JavaScript',
];

const articlesSearched = computed(() =>
  arr.filter((articlesItem) =>
    articlesItem.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<template>
  <section class="search-view">
    <div class="search-view__header">
      <SearchBar v-model="searchQuery" />
    </div>

    <transition name="fade" mode="out-in">
      <div class="search-view__list">
        <div
          v-for="articlesItem in articlesSearched"
          :key="articlesItem.url"
          class="search-view__item"
        >
          <h4 class="search-view__item-title">
            {{ articlesItem }}
          </h4>

          <p class="search-view__item-description">
            {{ articlesItem.summary }}
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.search-view {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    padding: 1rem;
    background: grey;
  }

  &__list {
    height: 100%;
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: grey;
    }

    &::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 0.5rem;
    }
  }

  &__item {
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    position: relative;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(84, 156, 180, 0.4);
    }
  }

  &__item-title {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  &__item-description {
    margin: 0;
  }

  &__link {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__loader {
    width: 4.8rem;
    height: 4.8rem;
    border: 0.5rem solid grey;
    border-bottom-color: grey;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>
