<template>
    <article class="contacts-wrapper">
        <pageTitle title="Contacts" />
        <div class="contacts">
            <p>
                私の<a href="https://www.facebook.com/kazukitsuruse" target="_blank">
                Facebook
                </a>、<a href="https://twitter.com/fassion60493867?lang=ja" target="_blank">
                Twitter
                </a>、もしくはMail (b1714935@planet.kanazawa-it.ac.jp)からお問い合わせください。
            </p>
        </div>
    </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
export default {
  name: 'Contacts',
  head() {
    return {
      title: 'Contacts'
    }
  },
  components: {
    pageTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';
.contacts-wrapper {
  text-align: center;
}
.contacts {
  @include box-shadow;
  width: 800px;
  border-radius: 50px;
  margin: 20px auto;
  color: $text-color;
}
@media (max-width: 1000px) {
  .contacts {
    width: 80%;
    word-break: break-all;
  }
}
p {
  padding: 40px 20px;
}
a {
  text-decoration: none;
}
</style>
