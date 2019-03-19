<template>
  <article class="about-wrapper">
    <pageTitle title="About" />
    <div class="self-introduction">
      <table>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index">
            <th>{{ contact.key }}</th>
            <td v-if="contact.url">
              <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                {{ contact.value }}
              </a>
            </td>
            <td v-else>
              {{ contact.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'About',
  head() {
    return {
      title: 'About'
    }
  },
  components: {
    pageTitle
  },
  data() {
    return {
      contacts: [
        { key: 'Name', value: '鶴瀬　和輝(Kazuki Tsuruse)', url: '' },
        { key: 'University', value: '金沢工業大学　工学部　情報工学科', url: '' },
        { key: 'Birthday', value: '1998/10.12', url: '' },
        {
          key: 'GitHub',
          value: 'tsurusekazuki',
          url: 'https://github.com/tsurusekazuki'
        },
        {
          key: 'Qiita',
          value: 'kazuki',
          url: 'https://qiita.com/kazuki1012'
        },
        {
          key: 'Facebook',
          value: '鶴瀬　和輝',
          url: 'https://www.facebook.com/kazukitsuruse'
        },
        {
          key: 'Twitter',
          value: 'kazunata@python',
          url: 'https://twitter.com/fassion60493867?lang=ja'
        },
        { key: 'Mail', value: 'b1714935@planet.kanazawa-it.ac.jp', url: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';
.about-wrapper {
  text-align: center;
}
.self-introduction {
  @include box-shadow;
  width: 800px;
  border-radius: 50px;
  margin: 20px auto;
  color: $text-color;
}
table {
  padding: 50px 0;
  display: inline-block;
  text-align: left;
}
th {
  padding-right: 20px;
  font-weight: normal;
}
td {
  font-size: 20px;
  padding: 5px 0px;
}
a {
  text-decoration: none;
}
/*タブレット*/
@media (max-width: 1000px) {
  .self-introduction {
    width: 600px;
    border-radius: 50px;
  }
}
/*スマートフォン*/
@media (max-width: 670px) {
  .self-introduction {
    width: 80%;
    border-radius: 50px;
  }
  th {
    display: block;
  }
  td {
    display: block;
    font-size: 16px;
    width: 100%;
  }
}
</style>