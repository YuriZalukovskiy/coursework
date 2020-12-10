<template>
  <div>
    <div id="title">Что за зверь Teachable Moment?</div>
    <div id="about-us">
      Teachable Moment – это сервис, позволяющий в легкой форме обмениваться знаниями. Благодаря простому интерфейсу, сервис доступен и понятен людям любого возраста.
    </div>
    <div id="image">
      <img src="@/assets/AboutUs/background1.svg">
      <div id="label">Дизайн</div>
    </div>
    <ul>
      <li>Разнообразие</li>
      <li>Знания</li>
      <li>Практика</li>
      <li>Возможности</li>
    </ul>
    <div id="quote">
      То, что мы знаем, — ограничено, а то,<br>
      чего мы не знаем, бесконечно.
      <div id="author">
        - П. Лаплас
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutUs"
}
</script>

<style scoped>
#title {
  font-weight: bold;
  font-size: 45px;
  line-height: 109.68%;
  color: #FF7B10;
  margin: 125px 82px 0;
}

#about-us {
  font-size: 22px;
  line-height: 109.68%;
  color: rgba(60, 71, 100, 0.75);
  margin: 64px 82px 0;
}

#image {
  margin: 122px 35px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
}

#label {
  position: absolute;
  font-weight: bold;
  font-size: 48px;
  line-height: 109.68%;
  text-align: center;
  color: #FFFFFF;
}

ul {
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 90px 20px 0;
  list-style-type: none;
}

li {
  width: 210px;
  height: 36px;
  background: #FF9036;
  border-radius: 30px;
  font-weight: 600;
  font-size: 20px;
  line-height: 109.68%;
  color: #FFFFFF;
  text-align: center;
  vertical-align: center;
  padding-top: 14px;
  margin-left: 15px;
  margin-right: 15px;
}

#quote {
  font-weight: 600;
  font-size: 37px;
  line-height: 109.68%;
  text-align: right;
  color: #494787;
  margin-top: 135px;
  margin-right: 82px;
  margin-bottom: 424px;
}

#author {
  font-weight: 300;
  font-size: 25px;
  margin-top: 35px;
}
</style>