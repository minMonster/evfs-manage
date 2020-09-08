<template>
  <div class="setup">
    <div class="set-inner  abs">
      <div class="set-left">
        <img src="@/assets/logo_text_white.png" @click="guide" alt="">
        <div class="step-wrapper">
          <div class="step-title">节点服务器初始化状态</div>
          <ul>
            <li v-for="(item, index) in steps" :key="index" :class="{active: curStep == item.name || (item.name == 'step4' && curStep == 'step4-joinchain')}">
              <div class="main-step">{{item.text}}</div>
              <div class="sub-step">
                <ul v-if="curStep.indexOf('step4.') > -1 || curStep.indexOf('step6.') > -1">
                  <li v-for="(item,index) in item.new" :class="{active: curStep == item.name}" :key="index">
                    <div>{{item.text}}</div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="abs set-right">
        <setup-nav :text="setHeader[curStep] && setHeader[curStep]['text']" @on-click="navClick(setHeader[curStep]['step'])"></setup-nav>
        <set-server @next="next" v-if="curStep == 'step1'"></set-server>
        <bind-manager @next="next" v-if="curStep == 'step2'"></bind-manager>
        <bind-enterprise @next="next" v-if="curStep == 'step3'"></bind-enterprise>
        <new-chain @next="next" v-if="curStep == 'step4.1'"></new-chain>
        <league @next="next" v-if="curStep == 'step4.2'"></league>
        <administrator @next="next" v-if="curStep == 'step4.3'"></administrator>
        <configure @next="next" v-if="curStep == 'step4.4'"></configure>
        <permission @next="next" v-if="curStep == 'step4.5'"></permission>
        <join-chain @next="next" v-if="curStep == 'step4-joinchain'"></join-chain>
        <bind-licence @next="next" v-if="curStep == 'step5'"></bind-licence>
        <base-info @next="next" v-if="curStep == 'step6.1'"></base-info>
        <rule @next="next" v-if="curStep == 'step6.2'"></rule>
        <opt-rule @next="next" v-if="curStep == 'step6.3'"></opt-rule>
        <safe @next="next" v-if="curStep == 'step6.4'"></safe>
        <licence @next="next" v-if="curStep == 'step6.5'"></licence>
        <join-field @next="next" v-if="curStep == 'step6-join'"></join-field>
      </div>
    </div>
  </div>
</template>

<script>
import setServer from './setServer'
import setupNav from '@/components/setupNav'
import bindManager from './bindManager'
import bindEnterprise from './bindEnterprise'
import newChain from './chain/newChain'
import league from './chain/league'
import administrator from './chain/administrator'
import configure from './chain/configure'
import permission from './chain/permission'
import joinChain from './chain/joinChain'
import bindLicence from './bindLicence'

// step6
import baseInfo from './field/baseinfo'
import rule from './field/rule'
import optRule from './field/optrule'
import safe from './field/safe'
import licence from './field/licence'
import joinField from './field/join'
const steps = [
  { text: '1.设置服务器名称', name: 'step1' },
  { text: '2.绑定首位服务器管理员', name: 'step2' },
  { text: '3.为服务器签署企业隶属关系', name: 'step3' },
  { text: '4.创建新的链，或加入现有的链',
    name: 'step4',
    new: [
      { text: '4.1.节点网络准入设置', name: 'step4.1' },
      { text: '4.2.区块链联盟委员会信息设置', name: 'step4.2' },
      { text: '4.3.链管理员设置', name: 'step4.3' },
      { text: '4.4.行为审计配置', name: 'step4.4' },
      { text: '4.5.链前置节点访问许可配置', name: 'step4.5' }
    ],
    join: [
      { text: '加入现有的链', name: 'step4-joinchain' }
    ] }
  // { text: '5.链实例运行许可证绑定', name: 'step5' },
  // { text: '6.创建新的文件存储域，或加入现有的文件存储域', name: 'step6', new:[
  //   {text: '6.1.文件存储域基础信息设置', name: 'step6.1'},
  //   {text: '6.2.文件存储域固存规则设置', name: 'step6.2'},
  //   {text: '6.3.文件存储域文件操作规则设置', name: 'step6.3'},
  //   {text: '6.4.文件存储域外部系统访问安全设置', name: 'step6.4'},
  //   {text: '6.5.文件存储域运行许可配置', name: 'step6.5'},
  // ] }
]
const setHeader = {
  step1: {
    text: '首页',
    step: 'home'
  },
  step2: {
    text: '设置服务器名称',
    step: 'step1'
  },
  step3: {
    text: '绑定首位服务器管理员',
    step: 'step2'
  },
  'step4.1': {
    text: '为服务器签署企业隶属关系',
    step: 'step3'
  },
  'step4-joinchain': {
    text: '为服务器签署企业隶属关系',
    step: 'step3'
  },
  'step4.2': {
    text: '节点网络准入设置',
    step: 'step4.1'
  },
  'step4.3': {
    text: '区块链联盟委员会信息设置',
    step: 'step4.2'
  },
  'step4.4': {
    text: '链管理员设置',
    step: 'step4.3'
  },
  'step4.5': {
    text: '行为审计',
    step: 'step4.4'
  },
  'step5': {
    text: '链前置节点访问许可配置',
    step: 'step4.5'
  },
  'step6.1': {
    text: '链实例运行许可证绑定',
    step: 'step5'
  },
  'step6.2': {
    text: '文件存储域基础信息设置',
    step: 'step6.1'
  },
  'step6.3': {
    text: '文件存储域固存规则设置',
    step: 'step6.2'
  },
  'step6.4': {
    text: '文件存储域文件操作规则设置',
    step: 'step6.3'
  },
  'step6.5': {
    text: '文件存储域外部系统访问安全设置',
    step: 'step6.4'
  },
  'step6.6': {
    text: '文件存储域运行许可配置',
    step: 'step6.5'
  },
  'step6-join': {
    text: '文件存储域运行许可配置',
    step: 'step5'
  }
}
export default {
  components: {
    'setup-nav': setupNav,
    'set-server': setServer,
    'bind-manager': bindManager,
    'bind-enterprise': bindEnterprise,
    'new-chain': newChain,
    'join-chain': joinChain,
    league,
    administrator,
    configure,
    permission,
    'bind-licence': bindLicence,
    'base-info': baseInfo,
    'rule': rule,
    'opt-rule': optRule,
    safe: safe,
    licence: licence,
    'join-field': joinField
  },
  data () {
    return {
      steps,
      curStep: 'step1',
      setHeader
    }
  },
  // mounted() {
  //   console.log(this.curStep)
  // },
  methods: {
    navClick (name) {
      if (name === 'home') {
        this.$router.push({
          name: 'guide'
        })
        return
      }
      this.curStep = name
    },
    next (name) {
      console.log('name', name)
      this.curStep = name
    },
    guide () {
      this.$router.push({
        name: 'guide'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .set-left {
    width: 400px;
    position: relative;
    min-height: 100%;
    background: url(~@/assets/setup/left_bg.png) no-repeat center;
    background-size: 100% 100%;
    padding: 50px 0;
    & > img {
      width: 200px;
      margin-left: 50px;
      cursor: pointer;
    }
    .step-title {
      font-size:16px;
      font-weight:600;
      color:rgba(22,206,241,1);
      padding: 50px 0 20px 50px;
    }
    .step-wrapper > ul {
      & > li {
        padding-left: 50px;
        color: #fff;
        line-height: 50px;
        .sub-step {
          ul {
            li {
              padding-left: 2em;
              position: relative;
              div {
                z-index: 1;
                position: relative;
              }
              &.active {
                &:after {
                  content: '';
                  display: block;
                  height: 50px;
                  position: absolute;
                  top: 0;
                  left: -80px;
                  right: 0;
                  bottom: 0;
                  background-color: #95B0F0;
                  z-index: 0;
                }
              }
            }
          }
        }
        &.active {
          background-color: #95B0F0;
        }
      }
    }
  }
  .set-right {
    left: 400px;
    padding: 60px;
  }
</style>
