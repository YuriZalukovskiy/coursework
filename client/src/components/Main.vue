<template>
  <div>
    <div class="first">
      <img src="@/assets/Main/firstImg1.png" class="firstImg"/>
      <p class="firstTitle">Выбери своего бойца</p>
      <p class="firstText">Более 100500 курсов на различные темы </p>
      <router-link tag="button" :to="'/courses'" class="firstButton">Подобрать курс</router-link>
    </div>

    <div class="seconds">
      <p class="weOffer">Мы предлагаем</p>
      <div class="centre">
        <div class="block">
          <img src="@/assets/Main/secondsImg1.png" class="secondImg"/>
          <p class="secondTitle">Обучение без ограничений</p>
          <p class="secondText">Получайте знания в любой момент из любой точки земного шара </p>
        </div>
        <div class="block">
          <img src="@/assets/Main/secondsImg2.png" class="secondImg"/>
          <p class="secondTitle">На любой вкус и цвет</p>
          <p class="secondText">Различные и обширные курсы на разразнённые темы</p>
        </div>
        <div class="block">
          <img src="@/assets/Main/secondsImg3.png" class="secondImg"/>
          <p class="secondTitle">Честность и открытость</p>
          <p class="secondText">Каждый пользователь - такой же соискатель знаний, как и вы</p>
        </div>
      </div>
    </div>

    <div class="third">
      <div class="blockHorizontal">
        <img src="@/assets/Main/thirdImg1.png" class="thirdImg"/>
        <div class="thirdRightText">
          <p class="thirdTitle">Держи все под контролем</p>
          <p class="thirdText">Проходите тесты после каждого занятия для оценки уровня своих знаний</p>
        </div>
      </div>
      <div class="blockHorizontal">
        <div class="thirdLeftText">
          <p class="thirdTitle">Шеринг знаний</p>
          <p class="thirdText">Есть чем поделиться? Загрузи свои конспекты, неси знания в массы! </p>
        </div>
        <img src="@/assets/Main/thirdImg2.png" class="thirdImg"/>
      </div>
      <router-link tag="button" :to="'/about-us'" class="thirdButton">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.first {
  margin: 0 3.5vw 15vw;

  display: flex;
  justify-content: center;
}

.firstImg {
  width: 93vw;
  height: 35vw;
}

.firstTitle {
  position: absolute;
  margin-top: 6.4vw;

  font-weight: bold;
  font-size: 3.6vw;

  color: #FFFFFF;
}

.firstText {
  position: absolute;
  margin-top: 13.2vw;

  font-size: 2.4vw;

  color: #DDDDDD;
}

.firstButton {
  position: absolute;
  margin-top: 20.7vw;
  width: 29vw;
  height: 5.9vw;
  background-color: #FF7200;
  text-align: center;
  vertical-align: center;

  font-size: 2.4vw;

  color: #FFFFFF;
}

.seconds {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weOffer {
  margin: 0 0 5vw;
  font-size: 2.8vw;

  color: #000000;
}

.centre {
  width: 92vw;
  display: flex;
  justify-content: space-between;
}

.block {
  width: 26vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.secondImg {
  height: 10vw;
  width: 10vw;
}

.secondTitle {
  margin: 1vw 0 0;
  padding: 0;

  font-size: 1.7vw;

  text-align: center;

  color: #FF7200;
}

.secondText {
  margin: 1vw 0 0;
  padding: 0;

  font-size: 1.5vw;

  text-align: center;

  color: #414141;
}

.third {
  margin-top: 15vw;
  margin-bottom: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blockHorizontal {
  width: 88vw;
  display: flex;
  justify-content: space-between;
}

.thirdImg {
  height: 19vw;
  width: 29vw;
}

.thirdTitle {
  width: 51vw;
  font-size: 2.6vw;
  color: #FF7200;
}

.thirdText {
  width: 51vw;
  font-size: 1.8vw;
  color: #2E2E2E;
}

.thirdLeftText {
  text-align: left;
}

.thirdRightText {
  text-align: right;
}

.thirdButton {
  position: absolute;
  width: 19vw;
  height: 3.2vw;

  margin-top: 31.8vw;
  background: rgba(0, 17, 166, 0.4);

  font-size: 1.6vw;
  color: #FFFFFF;
}

button {
  border-radius: 30px;
  border: none;
  outline: none;
}
</style>