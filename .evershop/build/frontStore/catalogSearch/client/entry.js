
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e6aece02fc8ca3dadb3ef897dbcb5ea83 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e29e1679e3bd7363e03d25c6ca8ddfe3a from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/General.js';
import e97b36c2f8a58925c933b63d796525577 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/Pagination.js';
import e7b5105e661ad9ed512480304477601ec from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/Products.js';
import e00cfa273c750245e3341c1f8ac9b7178 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/SearchPage.js';
import e5709c7820a863da88e1dc7ddd67ccd94 from 'file:///E:/Website/evershop%20project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/Sorting.js';
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
  content: {
    e29e1679e3bd7363e03d25c6ca8ddfe3a: {
      id: 'e29e1679e3bd7363e03d25c6ca8ddfe3a',
      sortOrder: 5,
      component: { default: e29e1679e3bd7363e03d25c6ca8ddfe3a }
    },
    e00cfa273c750245e3341c1f8ac9b7178: {
      id: 'e00cfa273c750245e3341c1f8ac9b7178',
      sortOrder: 10,
      component: { default: e00cfa273c750245e3341c1f8ac9b7178 }
    },
    e2365b0c149e58650183fa69bb51a5434: {
      id: 'e2365b0c149e58650183fa69bb51a5434',
      sortOrder: 0,
      component: { default: e2365b0c149e58650183fa69bb51a5434 }
    }
  },
  oneColumn: {
    e97b36c2f8a58925c933b63d796525577: {
      id: 'e97b36c2f8a58925c933b63d796525577',
      sortOrder: 30,
      component: { default: e97b36c2f8a58925c933b63d796525577 }
    },
    e7b5105e661ad9ed512480304477601ec: {
      id: 'e7b5105e661ad9ed512480304477601ec',
      sortOrder: 25,
      component: { default: e7b5105e661ad9ed512480304477601ec }
    },
    e5709c7820a863da88e1dc7ddd67ccd94: {
      id: 'e5709c7820a863da88e1dc7ddd67ccd94',
      sortOrder: 15,
      component: { default: e5709c7820a863da88e1dc7ddd67ccd94 }
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