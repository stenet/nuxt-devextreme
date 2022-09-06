<script setup lang="ts">
import "devextreme/dist/css/dx.light.css";
import notify from "devextreme/ui/notify";

function sayHello() {
  notify("Hello", "success", 3000);
}
</script>

<template>
  <div>
    <DxButton text="Hello" @click="sayHello()" />
  </div>
</template>
