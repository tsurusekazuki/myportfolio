<template>
  <article class="favorite-wrapper">
    <pageTitle title="Favorite" />
    <div class="favorite-content" v-for="(favorite, index) in favorites" :key="index">
      <img class="favimg" :src="favorite.image" width="400" height="250" />
      <h3>{{ favorite.favtitle }}</h3>
      <p>{{ favorite.describe }}</p>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import YouTube from '@/assets/YouTube.png'
import Bowling from '@/assets/Bowling.jpg'
import Bedjwford from '@/assets/Bedjwford.png'
import Kaggle from '@/assets/Kaggle.png'
import Walk from '@/assets/Walk.jpg'

export default {
  name: 'Favorite',
  head() {
    return {
      title: 'Favorites'
    }
  },
  components: {
    pageTitle
  },
  data() {
    return {
      favorites: [
        { 
          image: YouTube,
          favtitle: "YouTube鑑賞",
          describe: "お気に入りのYouTuberはもこうの実況です。暇があるときはもこう先生のマリカー実況を見て笑っています笑"
        },
        {
          image: Bowling,
          favtitle: "ボウリング",
          describe: "2018年の9月ぐらいからボウリングにハマって、多い時では月に３回ぐらい友達と練習しに言ってます。最近ようやくスコアが200に近づいてきたのでこれからも頑張って行こうと思ってます！"
        },
        {
          image: Bedjwford,
          favorite: "Fassion",
          describe: "服が好きなので良く服好きな友達と街に行って、ショッピングしてます。画像は僕が最近好きなブランドです。"
        },
        {
          image: Kaggle,
          favtitle: "Kaggle",
          describe: "2019年の１月からkaggleを始めました。元々、機械学習に少し興味を抱いていたので調べたら機械学習を始めるならkaggleという記事を見つけ始めました。"
        },
        {
          image: Walk,
          favtitle: "深夜散歩",
          describe: "僕が働いているバイトは基本、深夜に終わるのでバイト帰りの深夜散歩が最近好きです。田舎なので車も通っていないので静かで心が落ち着きます。"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';
.favorite-wrapper {
  text-align: center;
}
.favorite-content {
  @include box-shadow;
  width: 800px;
  border-radius: 50px;
  margin: 20px auto;
  padding-top: 2px;
  padding-bottom: 2px;
  color: $text-color;
}
.favimg {
  box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
  border-radius: 25px;  /* 角丸半径を50%にする(=円形にする) */
  margin-top: 15px; 
}
h3 {
  width: 400px;
  color: #505050;/*文字色*/
  padding: 0.5em;/*文字周りの余白*/
  margin: 10px auto;
  line-height: 1.3;/*行高*/
  background: #dbebf8;/*背景色*/
  border-radius: 25px;
}
h3:before {
  content: '●';
  color: white;
  margin-right: 8px;
}
p {
  width: 400px;
  margin: 20px auto;
  text-align: left;
}
</style>