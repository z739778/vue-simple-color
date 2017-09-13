import Compact from './Compact.vue'

const VueSimpleColor = {
  version: '0.0.1',
  Compact
}

const install = function (Vue, opts = {}) {
  if (VueSimpleColor.install.installed) return;
  Vue.component('Compact', Compact);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(VueSimpleColor, {install});   // eslint-disable-line no-undef

