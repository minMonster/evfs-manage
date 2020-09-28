import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'
const DebugView = () => import('../views/setup/debug')
const Guide = () => import('../views/guide')
const Setup = () => import('../views/setup')
const Admin = () => import('../views/admin')
const ChainInfo = () => import('../views/admin/chain/chaininfo')
const Alliance = () => import('@/views/admin/chain/alliance') // 链联盟委员会管理
const Configure = () => import('@/views/admin/chain/configure') // 行为审计
const NodeAdmission = () => import('@/views/admin/chain/nodeAdmission') // 节点准入许可
const NodeManage = () => import('@/views/admin/chain/nodeManage')
const frontNodeLicence = () => import('@/views/admin/chain/frontNodeLicence') // 前置节点访问许可
const frontNodeAdd = () => import('@/views/admin/chain/frontNodeAdd')
const chainOperation = () => import('@/views/admin/chain/operation') // 运行证许可
const chainPermission = () => import('@/views/admin/chain/permission') // 运行证许可
const chainNode = () => import('@/views/admin/chain/node') // 链内节点
const chainFrontNode = () => import('@/views/admin/chain/frontNode') // 接入前置节点
const chainFileStroage = () => import('@/views/admin/chain/fileStorage') // 文件存储
const audit = () => import('@/views/admin/chain/audit') // 链审核
const mainnode = () => import('@/views/admin/chain/mainnode')
const dataauth = () => import('@/views/admin/chain/dataauth')
const chainmanager = () => import('@/views/admin/chain/chainmanager')
const chdetial = () => import('@/views/admin/chain/chdetial')
const nextChdetial = () => import('@/views/admin/chain/nextChdetial')

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
const busestablish = () => import('../views/admin/data/busestablish')
const nodeAddAdmin = () => import('../views/admin/data/nodeAddAdmin')

// businiess
const Business = () => import('@/views/admin/business')
const businessdetail = () => import('@/views/admin/business/detail')
const businesspermission = () => import('@/views/admin/business/permission')
const businessrule = () => import('@/views/admin/business/rule')
const businessfile = () => import('@/views/admin/business/file')
const businesscontract = () => import('@/views/admin/business/contract')
const businessconfigure = () => import('@/views/admin/business/configure')
const businessmanager = () => import('@/views/admin/business/manager')
const businessaudit = () => import('@/views/admin/business/audit')
const addpermission = () => import('@/views/admin/business/addpermission')

// node
const Node = () => import('../views/admin/node')
const nodedetail = () => import('@/views/admin/node/detail')

const Err404 = () => import('../views/err/404')
const Login = () => import('@/views/login')

// let originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      needPermission: true
    },
    component: Login
  },
  {
    path: '/debug',
    name: 'debug',
    meta: {
      needPermission: true
    },
    component: DebugView
  },
  {
    path: '/guide',
    name: 'guide',
    meta: {
      needPermission: true
    },
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
      // {
      //   path: 'chain-configure',
      //   name: 'chain-configure',
      //   component: Configure
      // },
      {
        path: 'chain-nodeadmission',
        name: 'chain-nodeadmission',
        component: NodeAdmission
      },
      {
        path: 'chain-nodeManage',
        name: 'chain-nodeManage',
        component: NodeManage
      },
      {
        path: 'chain-frontnodelicence',
        name: 'chain-frontnodelicence',
        component: frontNodeLicence
      },
      {
        path: 'chain-frontNodeAdd',
        name: 'chain-frontNodeAdd',
        component: frontNodeAdd
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
        path: 'chain-chdetial',
        name: 'chain-chdetial',
        component: chdetial
      },
      {
        path: 'chain-nextChdetial',
        name: 'chain-nextChdetial',
        component: nextChdetial
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
      // {
      //   path: 'data-alliance',
      //   name: 'data-alliance',
      //   component: dataalliance
      // },
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
        path: 'data-busestablish',
        name: 'data-busestablish',
        component: busestablish
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
        path: 'data-nodeAddAdmin',
        name: 'data-nodeAddAdmin',
        component: nodeAddAdmin
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
        path: 'business-configure',
        name: 'business-configure',
        component: businessconfigure
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
      {
        path: 'business-addpermission',
        name: 'business-addpermission',
        component: addpermission
      },
      // node
      {
        path: 'node',
        name: 'node',
        component: Node
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
    meta: {
      needPermission: true
    },
    component: Setup
  },
  {
    path: '*',
    name: 'notfound',
    meta: {
      needPermission: true
    },
    component: Err404
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  let fbs_address = sessionStorage.getItem('fbs_address')
  if (!fbs_address && !to.meta.needPermission) {
    next({ path: 'login',
      query: {
        redirect: encodeURIComponent(window.location.pathname + window.location.search)
      } })
  }
  next()
})

router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})

export default router
