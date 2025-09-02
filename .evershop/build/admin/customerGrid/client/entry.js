
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import eb815f7f2b6a3e9335838b6a040df2731 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e258b61aab0f141523cb20acf362608b3 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e3b9850aac05c9a0c1f08eb187817452f from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ea7eb967982cacdf566c92ad5558524aa from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import ed0a26f7bdd2dfed904013abfb094d6ad from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e46e385d6c88c31835239e64670fd1319 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e7081878d5ea310b1c8ad0f549512b29f from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import ebac3194576dd4e8a11eb67d766edc14e from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e497397519b716c71dce15740ef9295e4 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e868156bebcf6552e642ba51d3b6d54ae from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e8f539117f11d76446d8c9ae574b99f4a from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e1d80e359d376cf6a852d10f6b8f4f4f5 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import ef04d51a06d9da37497defda0bc83e9e9 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ebfada94d880381955565cc0eb8943b4b from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e0ba200020034d738d94af0b1c14525d6 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import eb0a66fa9b3a15f13326d704aa283db98 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerGrid/Grid.js';
import edcec7b1fbd7426db0d98b6e6148f8add from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerGrid/Heading.js';
import e2f39dccbb3301401bede782edd4aba02 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e2450a6e1b97e2fee8faff616a1e50472 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import ec3a7aff0194f8e74f4cd5760ba5576bb from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e85bd6e67a247b6f06cb90f5f0bc5159d from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import ec3ed64e98462b0b3d3741a4e2ed0f420 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import efd33f174ef3e9d7be9393c66de29980b from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e75be7fe9197d3bca21b9ea6d56edb430 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    eb815f7f2b6a3e9335838b6a040df2731: {
      id: 'eb815f7f2b6a3e9335838b6a040df2731',
      sortOrder: 50,
      component: { default: eb815f7f2b6a3e9335838b6a040df2731 }
    },
    ebac3194576dd4e8a11eb67d766edc14e: {
      id: 'ebac3194576dd4e8a11eb67d766edc14e',
      sortOrder: 10,
      component: { default: ebac3194576dd4e8a11eb67d766edc14e }
    },
    ef04d51a06d9da37497defda0bc83e9e9: {
      id: 'ef04d51a06d9da37497defda0bc83e9e9',
      sortOrder: 20,
      component: { default: ef04d51a06d9da37497defda0bc83e9e9 }
    }
  },
  adminMenu: {
    e258b61aab0f141523cb20acf362608b3: {
      id: 'e258b61aab0f141523cb20acf362608b3',
      sortOrder: 20,
      component: { default: e258b61aab0f141523cb20acf362608b3 }
    },
    ed0a26f7bdd2dfed904013abfb094d6ad: {
      id: 'ed0a26f7bdd2dfed904013abfb094d6ad',
      sortOrder: 60,
      component: { default: ed0a26f7bdd2dfed904013abfb094d6ad }
    },
    e1d80e359d376cf6a852d10f6b8f4f4f5: {
      id: 'e1d80e359d376cf6a852d10f6b8f4f4f5',
      sortOrder: 10,
      component: { default: e1d80e359d376cf6a852d10f6b8f4f4f5 }
    },
    e0ba200020034d738d94af0b1c14525d6: {
      id: 'e0ba200020034d738d94af0b1c14525d6',
      sortOrder: 40,
      component: { default: e0ba200020034d738d94af0b1c14525d6 }
    },
    e2f39dccbb3301401bede782edd4aba02: {
      id: 'e2f39dccbb3301401bede782edd4aba02',
      sortOrder: 30,
      component: { default: e2f39dccbb3301401bede782edd4aba02 }
    },
    e2450a6e1b97e2fee8faff616a1e50472: {
      id: 'e2450a6e1b97e2fee8faff616a1e50472',
      sortOrder: 50,
      component: { default: e2450a6e1b97e2fee8faff616a1e50472 }
    },
    ec3ed64e98462b0b3d3741a4e2ed0f420: {
      id: 'ec3ed64e98462b0b3d3741a4e2ed0f420',
      sortOrder: 500,
      component: { default: ec3ed64e98462b0b3d3741a4e2ed0f420 }
    }
  },
  quickLinks: {
    e3b9850aac05c9a0c1f08eb187817452f: {
      id: 'e3b9850aac05c9a0c1f08eb187817452f',
      sortOrder: 20,
      component: { default: e3b9850aac05c9a0c1f08eb187817452f }
    },
    ec3a7aff0194f8e74f4cd5760ba5576bb: {
      id: 'ec3a7aff0194f8e74f4cd5760ba5576bb',
      sortOrder: 30,
      component: { default: ec3a7aff0194f8e74f4cd5760ba5576bb }
    }
  },
  settingPageMenu: {
    ea7eb967982cacdf566c92ad5558524aa: {
      id: 'ea7eb967982cacdf566c92ad5558524aa',
      sortOrder: 15,
      component: { default: ea7eb967982cacdf566c92ad5558524aa }
    },
    e85bd6e67a247b6f06cb90f5f0bc5159d: {
      id: 'e85bd6e67a247b6f06cb90f5f0bc5159d',
      sortOrder: 10,
      component: { default: e85bd6e67a247b6f06cb90f5f0bc5159d }
    },
    efd33f174ef3e9d7be9393c66de29980b: {
      id: 'efd33f174ef3e9d7be9393c66de29980b',
      sortOrder: 5,
      component: { default: efd33f174ef3e9d7be9393c66de29980b }
    },
    e75be7fe9197d3bca21b9ea6d56edb430: {
      id: 'e75be7fe9197d3bca21b9ea6d56edb430',
      sortOrder: 20,
      component: { default: e75be7fe9197d3bca21b9ea6d56edb430 }
    }
  },
  footerLeft: {
    e46e385d6c88c31835239e64670fd1319: {
      id: 'e46e385d6c88c31835239e64670fd1319',
      sortOrder: 10,
      component: { default: e46e385d6c88c31835239e64670fd1319 }
    },
    ebfada94d880381955565cc0eb8943b4b: {
      id: 'ebfada94d880381955565cc0eb8943b4b',
      sortOrder: 20,
      component: { default: ebfada94d880381955565cc0eb8943b4b }
    }
  },
  body: {
    e7081878d5ea310b1c8ad0f549512b29f: {
      id: 'e7081878d5ea310b1c8ad0f549512b29f',
      sortOrder: 10,
      component: { default: e7081878d5ea310b1c8ad0f549512b29f }
    },
    e8f539117f11d76446d8c9ae574b99f4a: {
      id: 'e8f539117f11d76446d8c9ae574b99f4a',
      sortOrder: 10,
      component: { default: e8f539117f11d76446d8c9ae574b99f4a }
    }
  },
  head: {
    e497397519b716c71dce15740ef9295e4: {
      id: 'e497397519b716c71dce15740ef9295e4',
      sortOrder: 5,
      component: { default: e497397519b716c71dce15740ef9295e4 }
    }
  },
  adminNavigation: {
    e868156bebcf6552e642ba51d3b6d54ae: {
      id: 'e868156bebcf6552e642ba51d3b6d54ae',
      sortOrder: 10,
      component: { default: e868156bebcf6552e642ba51d3b6d54ae }
    }
  },
  content: {
    eb0a66fa9b3a15f13326d704aa283db98: {
      id: 'eb0a66fa9b3a15f13326d704aa283db98',
      sortOrder: 20,
      component: { default: eb0a66fa9b3a15f13326d704aa283db98 }
    },
    edcec7b1fbd7426db0d98b6e6148f8add: {
      id: 'edcec7b1fbd7426db0d98b6e6148f8add',
      sortOrder: 10,
      component: { default: edcec7b1fbd7426db0d98b6e6148f8add }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );