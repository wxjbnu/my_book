<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
{{bookArr}}

    <div v-for="(book,index) in bookArr"
      :key="index">
      <textarea v-model="bookArr[index]" cols="50" rows="3"></textarea>
      <a href="javascript:void(0)" @click="delItem(index)">删除</a>
    </div>
    
    <p>
      <a href="javascript:void(0)" @click="addItem">add</a>
    </p>
    
    <p><button @click="addArt">添加文章</button></p>
    
  </div>
</template>

<script>
const AV = window.AV
const table = 'wxbooks'
export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemArr: [''], // 至少有一项
      bookArr: [''], // 至少有一项
      editorOption: {},
      content: ''
    }
  },
  methods: {
    delItem (index) {
      this.itemArr.splice(index, 1)
      this.bookArr.splice(index, 1)
    },
    addItem () {
      this.itemArr.push('')
      this.bookArr.push('')
    },
    addArt () {
      var TestObject = AV.Object.extend(table)
      var testObject = new TestObject()
      testObject.save({
        title: 'Hello World!',
        content: this.bookArr
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
