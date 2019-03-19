<template>
    <h1 class="pagename">{{ title }}</h1>
</template>

<script>
export default {
    name: 'Pagetitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style>
.pagename {
  width: 800px;
  position: relative;
  padding: 0.5em;
  margin: 5px auto;
  background: #a6d3c8;
  color: white;
}
.pagename:after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}  
</style>



