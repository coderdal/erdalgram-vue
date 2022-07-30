<template>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  box-sizing: content-box;
  padding: 0px 20px 0;
  width: calc(100% - 40px);
  margin: 0 auto 30px;
  max-width: 935px;
}
</style>
