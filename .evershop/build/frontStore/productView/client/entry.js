
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e6aece02fc8ca3dadb3ef897dbcb5ea83 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e5ecc3bdc3bbe5eafb194867c6c6df9c1 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Attributes.js';
import eaf92eb3c0ba323aaa7fbd5ef83aecf4d from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Description.js';
import e3f785a7dd3f46addfc0ed3ebef78a281 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Form.js';
import ea4ac43b174b1ef7e6420e2f08a39462c from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/GeneralInfo.js';
import e18b53f1e002a44644dc5f31bfd205c37 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Images.js';
import ef1b2cb766a2fe8bb86100b0719d78a5d from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Layout.js';
import e060db151d487a1f35d5111899e9b60bd from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Options.js';
import e87a2250a2f210ee819f907c83990e755 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Variants.js';
import ec0b1dc4aa5a44d23515dec70cc463982 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e2365b0c149e58650183fa69bb51a5434 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import e27f996b234ff4ce80820d3ee1e8ff1a7 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import ebae19b9e213a7d33013db4991872285a from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e57184dcc2ac42f02ce02bfaeb4016fb6 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e631cfad0ad456e0a730bd35a9ed5bee4 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import e4319d71d4f9adb64deb1e6b69fca619c from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e46b1da99d5374362cf78344c2121fcc2 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import collection_products from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
Area.defaultProps.components = {
  'icon-wrapper': {
    e6aece02fc8ca3dadb3ef897dbcb5ea83: {
      id: 'e6aece02fc8ca3dadb3ef897dbcb5ea83',
      sortOrder: 5,
      component: { default: e6aece02fc8ca3dadb3ef897dbcb5ea83 }
    },
    ec0b1dc4aa5a44d23515dec70cc463982: {
      id: 'ec0b1dc4aa5a44d23515dec70cc463982',
      sortOrder: 10,
      component: { default: ec0b1dc4aa5a44d23515dec70cc463982 }
    },
    e46b1da99d5374362cf78344c2121fcc2: {
      id: 'e46b1da99d5374362cf78344c2121fcc2',
      sortOrder: 30,
      component: { default: e46b1da99d5374362cf78344c2121fcc2 }
    }
  },
  productViewGeneralInfo: {
    e5ecc3bdc3bbe5eafb194867c6c6df9c1: {
      id: 'e5ecc3bdc3bbe5eafb194867c6c6df9c1',
      sortOrder: 25,
      component: { default: e5ecc3bdc3bbe5eafb194867c6c6df9c1 }
    }
  },
  productPageMiddleRight: {
    eaf92eb3c0ba323aaa7fbd5ef83aecf4d: {
      id: 'eaf92eb3c0ba323aaa7fbd5ef83aecf4d',
      sortOrder: 50,
      component: { default: eaf92eb3c0ba323aaa7fbd5ef83aecf4d }
    },
    e3f785a7dd3f46addfc0ed3ebef78a281: {
      id: 'e3f785a7dd3f46addfc0ed3ebef78a281',
      sortOrder: 45,
      component: { default: e3f785a7dd3f46addfc0ed3ebef78a281 }
    },
    ea4ac43b174b1ef7e6420e2f08a39462c: {
      id: 'ea4ac43b174b1ef7e6420e2f08a39462c',
      sortOrder: 10,
      component: { default: ea4ac43b174b1ef7e6420e2f08a39462c }
    },
    e060db151d487a1f35d5111899e9b60bd: {
      id: 'e060db151d487a1f35d5111899e9b60bd',
      sortOrder: 30,
      component: { default: e060db151d487a1f35d5111899e9b60bd }
    },
    e87a2250a2f210ee819f907c83990e755: {
      id: 'e87a2250a2f210ee819f907c83990e755',
      sortOrder: 35,
      component: { default: e87a2250a2f210ee819f907c83990e755 }
    }
  },
  productPageMiddleLeft: {
    e18b53f1e002a44644dc5f31bfd205c37: {
      id: 'e18b53f1e002a44644dc5f31bfd205c37',
      sortOrder: 10,
      component: { default: e18b53f1e002a44644dc5f31bfd205c37 }
    }
  },
  content: {
    ef1b2cb766a2fe8bb86100b0719d78a5d: {
      id: 'ef1b2cb766a2fe8bb86100b0719d78a5d',
      sortOrder: 10,
      component: { default: ef1b2cb766a2fe8bb86100b0719d78a5d }
    },
    e2365b0c149e58650183fa69bb51a5434: {
      id: 'e2365b0c149e58650183fa69bb51a5434',
      sortOrder: 0,
      component: { default: e2365b0c149e58650183fa69bb51a5434 }
    }
  },
  footer: {
    e27f996b234ff4ce80820d3ee1e8ff1a7: {
      id: 'e27f996b234ff4ce80820d3ee1e8ff1a7',
      sortOrder: 10,
      component: { default: e27f996b234ff4ce80820d3ee1e8ff1a7 }
    }
  },
  head: {
    ebae19b9e213a7d33013db4991872285a: {
      id: 'ebae19b9e213a7d33013db4991872285a',
      sortOrder: 5,
      component: { default: ebae19b9e213a7d33013db4991872285a }
    }
  },
  body: {
    e57184dcc2ac42f02ce02bfaeb4016fb6: {
      id: 'e57184dcc2ac42f02ce02bfaeb4016fb6',
      sortOrder: 1,
      component: { default: e57184dcc2ac42f02ce02bfaeb4016fb6 }
    },
    e4319d71d4f9adb64deb1e6b69fca619c: {
      id: 'e4319d71d4f9adb64deb1e6b69fca619c',
      sortOrder: 10,
      component: { default: e4319d71d4f9adb64deb1e6b69fca619c }
    }
  },
  header: {
    e631cfad0ad456e0a730bd35a9ed5bee4: {
      id: 'e631cfad0ad456e0a730bd35a9ed5bee4',
      sortOrder: 10,
      component: { default: e631cfad0ad456e0a730bd35a9ed5bee4 }
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
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );