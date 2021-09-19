<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <footer class="siteFooter">
      <p>CC-BY-NC-ND-4.0 Licensed | Copyright © 2021-present <a href="https://github.com/yansfil">Grab</a></p>
    </footer>
  </div>
</template>

<style scoped>
  footer{text-align:center; font-size:16px; color:#020202; margin: 10px 0 0 250px;}
</style>