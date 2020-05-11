import Vue from 'vue'
import VueRouter from 'vue-router'
const DebugView = () => import('../views/setup/debug')
const Guide = () => import('../views/guide')
const Setup = () => import('../views/setup')
const Admin = () => import('../views/admin')
const ChainInfo = () => import('../views/admin/chain/chaininfo')
const Alliance = () => import('@/views/admin/chain/alliance') //链联盟委员会管理
const Configure = () => import('@/views/admin/chain/configure') // 全局参数
const NodeAdmission = () => import('@/views/admin/chain/nodeAdmission') // 节点准入许可
const frontNodeLicence = () => import('@/views/admin/chain/frontNodeLicence') // 前置节点访问许可
const chainOperation = () => import('@/views/admin/chain/operation') // 运行证许可
const chainPermission = () => import('@/views/admin/chain/permission') // 运行证许可
const chainNode = () => import('@/views/admin/chain/node') // 链内节点
const chainFrontNode = () => import('@/views/admin/chain/frontNode') // 接入前置节点
const chainFileStroage = () => import('@/views/admin/chain/fileStorage') // 文件存储
const audit = () => import('@/views/admin/chain/audit') // 链审核
const mainnode = ()=> import('@/views/admin/chain/mainnode') 
const dataauth = ()=> import('@/views/admin/chain/dataauth') 
const chainmanager = () => import('@/views/admin/chain/chainmanager') 


// data
const Data = () => import('../views/admin/data')
const datadetail = () => import('../views/admin/data/detail')
const datarule = () => import('../views/admin/data/rule')
const dataalliance = () => import('../views/admin/data/alliance')
const datapermission = () => import('../views/admin/data/permission')
const databusiness = () => import('../views/admin/data/business')
const datamanager = () => import('../views/admin/data/manager')
const datanode = () => import('../views/admin/data/node')
const dataaudit = () => import('../views/admin/data/audit')


// businiess
const Business = () => import('@/views/admin/business')
const businessdetail = () => import('@/views/admin/business/detail')
const businesspermission = () => import('@/views/admin/business/permission')
const businessrule = () => import('@/views/admin/business/rule')
const businessfile = () => import('@/views/admin/business/file')
const businesscontract = () => import('@/views/admin/business/contract')
const businessmanager = () => import('@/views/admin/business/manager')
const businessaudit = () => import('@/views/admin/business/audit')


// node
const Node = () => import('../views/admin/node')
const nodedetail = () => import('@/views/admin/node/detail')

const Err404 = () => import('../views/err/404')


// let originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/debug',
    name: 'debug',
    component: DebugView
  },
  {
    path: '/guide',
    name: 'guide',
    component: Guide
  },
  {
    path: '/',
    name: 'admin',
    component: Admin,
    redirect: 'chain',
    children: [
      {
        path: 'chain',
        name: 'chain',
        component: ChainInfo
      },
      {
        path: 'chain-alliance',
        name: 'chain-alliance',
        component: Alliance
      },
      {
        path: 'chain-configure',
        name: 'chain-configure',
        component: Configure
      },
      {
        path: 'chain-nodeadmission',
        name: 'chain-nodeadmission',
        component: NodeAdmission
      },
      {
        path: 'chain-frontnodelicence',
        name: 'chain-frontnodelicence',
        component: frontNodeLicence
      },
      {
        path: 'chain-operation',
        name: 'chain-operation',
        component: chainOperation
      },
      {
        path: 'chain-permission',
        name: 'chain-permission',
        component: chainPermission
      },
      {
        path: 'chain-node',
        name: 'chain-node',
        component: chainNode
      },
      {
        path: 'chain-frontnode',
        name: 'chain-frontnode',
        component: chainFrontNode
      },
      {
        path: 'chain-filestorage',
        name: 'chain-filestorage',
        component: chainFileStroage
      },
      {
        path: 'dataauth',
        name: 'dataauth',
        component: dataauth
      },
      {
        path: 'mainnode',
        name: 'mainnode',
        component: mainnode
      },
      {
        path: 'chainmanager',
        name: 'chainmanager',
        component: chainmanager
      },
      {
        path: 'chain-audit',
        name: 'chain-audit',
        component: audit
      },
      // data
      {
        path: 'data',
        name: 'data',
        component: Data
      },
      {
        path: 'data-detail',
        name: 'data-detail',
        component: datadetail
      },
      {
        path: 'data-rule',
        name: 'data-rule',
        component: datarule
      },
      {
        path: 'data-alliance',
        name: 'data-alliance',
        component: dataalliance
      },
      {
        path: 'data-permission',
        name: 'data-permission',
        component: datapermission
      },
      {
        path: 'data-business',
        name: 'data-business',
        component: databusiness
      },
      {
        path: 'data-manager',
        name: 'data-manager',
        component: datamanager
      },
      {
        path: 'data-node',
        name: 'data-node',
        component: datanode
      },
      {
        path: 'data-audit',
        name: 'data-audit',
        component: dataaudit
      },
      // business
      {
        path: '/business',
        name: 'business',
        component: Business
      },
      {
        path: 'detail',
        name: 'business-detail',
        component: businessdetail
      },
      {
        path: 'business-permission',
        name: 'business-permission',
        component: businesspermission
      },
      {
        path: 'business-file',
        name: 'business-file',
        component: businessfile
      },
      {
        path: 'business-rule',
        name: 'business-rule',
        component: businessrule
      },
      {
        path: 'business-contract',
        name: 'business-contract',
        component: businesscontract
      },
      {
        path: 'business-manager',
        name: 'business-manager',
        component: businessmanager
      },
      {
        path: 'business-audit',
        name: 'business-audit',
        component: businessaudit
      },
      // node
      {
        path: 'node',
        name: 'node',
        component: Node,
      },
      {
        path: 'nodedetail',
        name: 'nodedetail',
        component: nodedetail
      }
    ]
  },
  {
    path: '/setup',
    name: 'setup',
    component: Setup
  },
  {
    path: '*',
    name: 'notfound',
    component: Err404
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
