<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
{{bookArr}}

    <div>
      书名<input type="text" v-model="name">
    </div>
    <div>
      章节名<input type="text" v-model="chapter">
    </div>
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
// const AV = window.AV
// const table = 'wxbooks'
// const bookname = 'wxbooksname'
// const TestObject = AV.Object.extend(table)
// const BookObject = AV.Object.extend(bookname)
// const bookQuery = new AV.Query(bookname)
// console.log(AV);

import {autoBook} from  './../autoBook.js'

export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '', // 书名
      bookname: 'wxbooksname',
      chapter: '', // 章节名称
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
      var self = this
      

      var testObject = new TestObject()
      var bookObject = new BookObject()

      var bname = this.name

      testObject.save({
        title: bname,
        chapter: this.chapter,
        content: this.bookArr
      }).then(function (object) {
        self.itemArr = ['']
        self.bookArr = ['']
        alert('add article!')
      })

      bookQuery.equalTo('title', bname)
      bookQuery.find()
      .then(function (results) {
        if (results.length > 0) {
          alert('已存在')
        } else {
          bookObject.save({
            title: bname
          }).then(function (object) {
            alert('add title!')
          })
        }
      }, function (error) {
        console.log(error)
      })
      console.log(bookObject)
    },
    addwx () {
      let i = 0
      this.testadd (i)
    },
    nextArt (i) {
      this.testadd(autoBook[i])
    },
    testadd (i) {
      var TestObject = AV.Object.extend(table)
      var testObject = new TestObject()
      testObject.save({
        title: '周易',
        chapter: autoBook[i].title,
        content: autoBook[i].cont
      }).then((object) => {
        if(i < autoBook.length){
          i++
          console.log(i)
          this.testadd(i)
        }else {
          console.log('end')
        }
      })
    }
  },
  mounted () {
    console.log(autoBook)
    console.log(AV)
    // this.testadd(0)
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
