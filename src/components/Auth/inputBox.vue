<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :id="id"
    autocomplete="off"
    :required="required"
    v-model="inputValue"
    ref="inputRef"
  />
</template>

<script>
export default {
  name: "inputBox",
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue() {
      this.$emit("inputChange", this.$refs.inputRef.value);
    },
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
main section form input {
  width: 50%;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin: 0 auto;
  font-size: 1em;
}

main section form input:focus {
  border: 1px solid var(--text-color);
  outline: none;
}
</style>
