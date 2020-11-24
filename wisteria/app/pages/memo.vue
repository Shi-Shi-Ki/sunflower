<template>
  <section class="container">
    <nuxt-link to="/">index</nuxt-link>
    <nuxt-link to="inspire">inspire</nuxt-link>
    <hr />
    <h1>MEMO</h1>
    <v-simple-table>
      <tbody>
        <tr>
          <th>Title</th>
          <td>
            <v-text-field
              v-model="title"
              type="text"
              name="title"
              class="title"
              size="40"
            />
          </td>
        </tr>
        <tr>
          <th>Memo</th>
          <td>
            <v-textarea
              v-model="content"
              name="content"
              class="content"
              cols="50"
              rows="5"
            ></v-textarea>
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th></th>
          <td>
            <span v-if="id == 0">
              <v-btn @click="insert">save</v-btn>
            </span>
            <span v-else>
              <v-btn @click="clearForm">clear</v-btn>
              <v-btn @click="update">update</v-btn>
            </span>
            <transition name="del">
              <v-btn v-if="id != 0" @click="remove">delete</v-btn>
            </transition>
          </td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </v-simple-table>
    <hr />
    <v-list-item class="list">
      <v-list-item-content>
        <v-list-item-title
          v-for="[key, value] in Array.from(page_items)"
          :key="key"
        >
          <span @click="select(value)">
            {{ value.title }} {{ value.created_at }}</span
          >
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <hr />
    <div class="nav">
      <span @click="prev">&lt;prev</span>|<span @click="next">next&gt;</span>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
const API_URL = 'http://rose.local/api/memos';

export default {
  data() {
    return {
      id: 0,
      title: '',
      content: '',
      num_per_page: 5,
      sel_item: null,
      memo_data: null,
      current_page_num: 0,
    }
  },
  // (init showed only) get history data.
  async asyncData() {
    const res = await axios.get(API_URL)
    // Object -> Map
    let data = new Map()
    for (const key of Object.keys(res.data)) {
      data.set(key, res.data[key])
    }
    return { memo_data: data }
  },
  // "computed" in no support async processing!!
  // https://teratail.com/questions/181043
  computed: {
    // get page items.
    // https://qiita.com/Nossa/items/e2092d5aca2540485591
    page_items() {
      const sliceArr = Array.from(this.memo_data).slice(
        this.num_per_page * this.current_page_num,
        this.num_per_page * (this.current_page_num + 1)
      )
      let res = new Map()
      sliceArr.forEach(v => {
        res.set(v[0], v[1])
      })
      return res
    },
    // page value controller.
    page: {
      get() {
        return this.current_page_num
      },
      set(p) {
        let pg =
          p > (this.memo_data.length - 1) / this.num_per_page
            ? Math.ceil(
                (this.memo_data.length - 1) / this.num_per_page
              ) - 1
            : p
        pg = pg < 0 ? 0 : pg
        this.current_page_num = pg
      },
    },
  },
  created() {
  },
  methods: {
    // clear memo form.
    clearForm() {
      this.id = 0
      this.title = ''
      this.content = ''
    },
    // saved memo data.
    insert() {
      axios.post(API_URL, {
        title: this.title,
        body: this.content,
      }).then((res) => {
        // get new history data.
        this._getHistory('saved memo.')
      })
      this.id = 0
      this.title = ''
      this.content = ''
    },
    // update memo data.
    update() {
      axios.put(API_URL +`/${this.sel_item.id}`, {
        title: this.title,
        body: this.content,
      }).then((res) => {
        this._getHistory('updated memo.')
      })
      this.id = 0
      this.title = ''
      this.content = ''
    },
    // click history item event.
    select(item) {
      this.sel_item = item
      this.id = item.id
      this.title = item.title
      this.content = item.body
    },
    // delete history.
    remove() {
      axios.delete(API_URL +`/${this.sel_item.id}`).then((res) => {
        // * I have to do new to activate the monitoring function.
        // https://qiita.com/bobu_web/items/ec5a98d03758d12ad721
        // https://future-architect.github.io/articles/20200316/
        let tmp = this.memo_data
        this.memo_data = new Map() // computed event ignition here!
        tmp.delete(this.sel_item.id.toString())
        this.memo_data = tmp
        this.sel_item = null
        alert('delted item.')
      })
      this.id = 0
      this.title = ''
      this.content = ''
    },
    next() {
      this.page++
    },
    prev() {
      this.page--
    },
    // get new history data.
    _getHistory(informationMessage) {
      axios.get(API_URL).then((res) => {
        this.memo_data = new Map()
        let data = new Map()
        for (const key of Object.keys(res.data)) {
          data.set(key, res.data[key])
        }
        this.memo_data = data

        alert(informationMessage)
      });
    },
  },
}
/* eslint-disable */
</script>
