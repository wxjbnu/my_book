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
    <p><button @click="addArt">添加文章</button></p>
    <p>https://github.com/surmon-china/vue-quill-editor</p>
    <p>https://github.com/vuejs/awesome-vue#rich-text-editing</p>
    <p>https://github.com/quilljs/quill/</p>
    <p>{{content}}</p>
  </div>
</template>

<script>
const AV = window.AV
const table = 'books'
export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      editorOption: {},
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
    },
    addArt () {
      var TestObject = AV.Object.extend(table)
      var testObject = new TestObject()
      testObject.save({
        title: 'Hello World!',
        content: this.content
      }).then(function (object) {
        alert('add article!')
      })
    }
  },
  mounted () {
    // console.log(window.AV)
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
