import vue from 'vue'
import UI from './index.vue'
import * as cApi from '@/http/api'
const SetQueryApprovedDialog = vue.extend(UI)
class QueryApprovedDialog {
  install () {
    const alert = this.init()
    alert.$mount(document.createElement('div'))
    document.body.appendChild(alert.$el)
    vue.prototype.$QueryApprovedDialog = alert
  }
  init () {
    // let that = this
    const toastDom = new SetQueryApprovedDialog({
      data () {
        return {
          dialogVisible: false,
          list: []
        }
      },
      methods: {
        hide () {
          this.dialogVisible = false
        },
        getList (row) {
          return cApi.pbqal({ review_id: row.review_id }).then(res => {
            console.log(res)
            return res.rows
          })
        },
        async show (row) {
          let list = await this.getList(row)
          this.list = list
          this.dialogVisible = true
        }
      }
    })
    return toastDom
  }
}
export default new QueryApprovedDialog()
