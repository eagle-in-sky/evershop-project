
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
import e24a145790e7c1dc662d3e860f96f4faa from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import e0ba200020034d738d94af0b1c14525d6 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e2f39dccbb3301401bede782edd4aba02 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e0efd8bc05824082697dea05c6e3ccf92 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import eb16ac850d17fb0c7885d3bc2ec5fc021 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/AddTrackingButton.js';
import e48621aa2c529a69c938f3312bd83daa0 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import e3de974eef14239c1af28ad1691233a2b from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import e03a724805ff5af27dcaebaef978b1675 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import eb08d318068b94ba1b0d007610a9c1e01 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import e1959660ae7cebb44c5d536ac925bb65b from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import eb3e1e3b95a5d4a975f6aaf8f14ae7834 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/MarkDeliveredButton.js';
import e9b60b590ab6c45c52a5de84cf23d7f91 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import ebe37f65b470740d535fcd425c735dc0d from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import e2c272d483d50709b68e91044710e4227 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/ShipButton.js';
import e41fac50d49a19607ffc9e93aab60cc8c from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import edb4a04e4243c6ba42c94f76144493d8b from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/TrackingButton.js';
import e74ef4c91e6a253dbb8a5eb9b8ba54040 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import e7f0af5f316c7546b9a4cc430d2926d7e from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import e2450a6e1b97e2fee8faff616a1e50472 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import ec3a7aff0194f8e74f4cd5760ba5576bb from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e85bd6e67a247b6f06cb90f5f0bc5159d from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import ec3ed64e98462b0b3d3741a4e2ed0f420 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import efd33f174ef3e9d7be9393c66de29980b from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import eb40f82b5c0e05315eff35200dc62af82 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
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
  orderPaymentActions: {
    e24a145790e7c1dc662d3e860f96f4faa: {
      id: 'e24a145790e7c1dc662d3e860f96f4faa',
      sortOrder: 10,
      component: { default: e24a145790e7c1dc662d3e860f96f4faa }
    },
    e74ef4c91e6a253dbb8a5eb9b8ba54040: {
      id: 'e74ef4c91e6a253dbb8a5eb9b8ba54040',
      sortOrder: 10,
      component: { default: e74ef4c91e6a253dbb8a5eb9b8ba54040 }
    },
    e7f0af5f316c7546b9a4cc430d2926d7e: {
      id: 'e7f0af5f316c7546b9a4cc430d2926d7e',
      sortOrder: 10,
      component: { default: e7f0af5f316c7546b9a4cc430d2926d7e }
    },
    eb40f82b5c0e05315eff35200dc62af82: {
      id: 'eb40f82b5c0e05315eff35200dc62af82',
      sortOrder: 10,
      component: { default: eb40f82b5c0e05315eff35200dc62af82 }
    }
  },
  leftSide: {
    e0efd8bc05824082697dea05c6e3ccf92: {
      id: 'e0efd8bc05824082697dea05c6e3ccf92',
      sortOrder: 30,
      component: { default: e0efd8bc05824082697dea05c6e3ccf92 }
    },
    eb08d318068b94ba1b0d007610a9c1e01: {
      id: 'eb08d318068b94ba1b0d007610a9c1e01',
      sortOrder: 10,
      component: { default: eb08d318068b94ba1b0d007610a9c1e01 }
    },
    ebe37f65b470740d535fcd425c735dc0d: {
      id: 'ebe37f65b470740d535fcd425c735dc0d',
      sortOrder: 20,
      component: { default: ebe37f65b470740d535fcd425c735dc0d }
    }
  },
  order_actions: {
    eb16ac850d17fb0c7885d3bc2ec5fc021: {
      id: 'eb16ac850d17fb0c7885d3bc2ec5fc021',
      sortOrder: 5,
      component: { default: eb16ac850d17fb0c7885d3bc2ec5fc021 }
    },
    eb3e1e3b95a5d4a975f6aaf8f14ae7834: {
      id: 'eb3e1e3b95a5d4a975f6aaf8f14ae7834',
      sortOrder: 10,
      component: { default: eb3e1e3b95a5d4a975f6aaf8f14ae7834 }
    },
    e2c272d483d50709b68e91044710e4227: {
      id: 'e2c272d483d50709b68e91044710e4227',
      sortOrder: 10,
      component: { default: e2c272d483d50709b68e91044710e4227 }
    },
    edb4a04e4243c6ba42c94f76144493d8b: {
      id: 'edb4a04e4243c6ba42c94f76144493d8b',
      sortOrder: 15,
      component: { default: edb4a04e4243c6ba42c94f76144493d8b }
    }
  },
  pageHeadingRight: {
    e48621aa2c529a69c938f3312bd83daa0: {
      id: 'e48621aa2c529a69c938f3312bd83daa0',
      sortOrder: 35,
      component: { default: e48621aa2c529a69c938f3312bd83daa0 }
    }
  },
  rightSide: {
    e3de974eef14239c1af28ad1691233a2b: {
      id: 'e3de974eef14239c1af28ad1691233a2b',
      sortOrder: 15,
      component: { default: e3de974eef14239c1af28ad1691233a2b }
    },
    e03a724805ff5af27dcaebaef978b1675: {
      id: 'e03a724805ff5af27dcaebaef978b1675',
      sortOrder: 10,
      component: { default: e03a724805ff5af27dcaebaef978b1675 }
    }
  },
  content: {
    e1959660ae7cebb44c5d536ac925bb65b: {
      id: 'e1959660ae7cebb44c5d536ac925bb65b',
      sortOrder: 10,
      component: { default: e1959660ae7cebb44c5d536ac925bb65b }
    },
    e9b60b590ab6c45c52a5de84cf23d7f91: {
      id: 'e9b60b590ab6c45c52a5de84cf23d7f91',
      sortOrder: 5,
      component: { default: e9b60b590ab6c45c52a5de84cf23d7f91 }
    }
  },
  pageHeadingLeft: {
    e41fac50d49a19607ffc9e93aab60cc8c: {
      id: 'e41fac50d49a19607ffc9e93aab60cc8c',
      sortOrder: 200,
      component: { default: e41fac50d49a19607ffc9e93aab60cc8c }
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