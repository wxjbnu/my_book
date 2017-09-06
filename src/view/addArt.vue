<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
  <p>https://github.com/surmon-china/vue-quill-editor</p>
  <p>https://github.com/vuejs/awesome-vue#rich-text-editing</p>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: ''
    }
  },
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({editor, html, text}) {
      console.log('editor change!', editor, html, text)
      this.content = html
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  padding: 20px;
}
</style>
