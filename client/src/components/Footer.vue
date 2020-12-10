<template>
  <footer>
    <ul>
      <li>Залуковский Ю. А.</li>
      <li>Кеосак А. И.</li>
    </ul>
    <div>Одесса 2020</div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  padding-left: 50px;
  padding-right: 50px;
  height: 60px;
  background: rgba(218, 174, 138, 0.39);
  font-weight: 300;
  font-size: 18px;
  line-height: 109.68%;
  letter-spacing: -0.025em;
  color: #808080;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
}

li {
  margin-right: 35px;
}
</style>