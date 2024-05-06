<script setup>



</script>

<template>
  <footer>
    <address>
      Claude Monet
      <p>609 Verrocchio Dr</p>
      <p>Nokomis, Florida, 34275</p>
      <a>+1 (941) 966-0241</a>
    </address>
    <div>
      <p>Today's hours</p>
      <time>12:10 - 10:00</time>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad78e5820248d01dedfcd24fb2c06cc226528169b6d527a1534d206e2620aab0c&amp;source=constructor"
      width="912"
      height="285"
      frameborder="0"
    ></iframe>
    <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad78e5820248d01dedfcd24fb2c06cc226528169b6d527a1534d206e2620aab0c&amp;width=912&amp;height=285&amp;lang=ru_RU&amp;scroll=true"></script> -->
  </footer>
</template>
