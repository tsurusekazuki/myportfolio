<template>
  <article class="languages-wrapper">
    <pageTitle title="Languages" />
    <div class="languages">
      <box v-for="language in languages" :key="language.name" :lang="language">
        使用歴 : {{ language.term }}
      </box>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'
export default {
  name: 'Languages',
  components: {
    pageTitle,
    box
  },
  head() {
    return {
      title: 'Languages'
    }
  },
  data() {
    return {
      languages: [
        {
          name: 'Python',
          content:
            '自分が今、一番扱っている言語です。学校の授業およびkaggleで機械学習モデルを作成する時に使用しています。',
          term: '１年'
        },
        {
          name: 'Ruby',
          content:
            'Ruby on Railsに興味を持っていた時に始めました。基本知識は本や先輩から教えてもらいました。',
          term: '2ヶ月'
        },
        {
          name: 'HTML & SCSS',
          content:
            '学校の課外活動（プロジェクト）に所属した時に、独学で勉強していました。勉強サイトでの勉強はしたことがなく、知識はほとんど本で得ました',
          term: '3ヶ月'
        },
        {
          name: 'React Native',
          content:
            'プロジェクトでスマホアプリを開発した際に使用した言語です。jsの勉強はあまりしたことがなくプロジェクト開発でいきなり使い始めた言語です。',
          term: '3ヶ月'
        },
        {
          name: 'C',
          content:
            '僕が初めて学んだプログラミング言語です。大学1年生の時に授業で習い、コンピュータの基礎的な部分を学びました。',
          term: '2年'
        },
        {
          name: 'Android Java',
          content:
            'プロジェクトの勉強会で使用した言語です。じゃんけんアプリなどを作りました。',
          term: '1ヶ月'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.languages-wrapper {
  text-align: center;
}
.languages {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
</style>