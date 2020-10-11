<!-- crated：2020/9/9  author：Monster  -->
<template>
  <div class='qrCodeAuthDialog'>
    <Modal
      width="300"
      height="300"
      v-model="dialogVisible"
      :loading="loading"
      footer-hide
    >
      <!--            <p>{{qrCodeUrl}}</p>-->
      <vue-qr-code v-if="qrCodeUrl" class="qrCodeAuthDialog-picture" id="picture" :margin="2"
                   :value="qrCodeUrl"></vue-qr-code>
    </Modal>
  </div>
</template>

<script>
import VueQrCode from 'vue-qrcode'

export default {
  name: 'qrCodeAuthDialog',
  components: {
    VueQrCode
  },
  data: function () {
    return {
      qrCodeUrl: '',
      dialogVisible: false,
      loading: true
    }
  },
  dialogVisible (e) {
    if (e) {
      this.init()
    }
  },
  methods: {
    init () {
      console.log('init')
    },
    asyncOK () {
      setTimeout(() => {
        this.dialogVisible = false
      }, 2000)
    }
  },
  created () {
  }
}
</script>

<style lang='less' type='text/less'>
    .qrCodeAuthDialog {
        width: 300px;
        height: 300px;
    }

    .qrCodeAuthDialog-picture {
        width: 100%;
        height: 100%;
    }
</style>
