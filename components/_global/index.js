import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// Require all Components in the current dierictory and sub directories

 const requireComponent = require.context('.', true,/_base-[\w-]+\.vue$/);

 requireComponent.keys().forEach(file => {
// get compnents configuration
 const componentConfig = requireComponent(file);
 const fn = file.split('/').pop().replace(/\.\w+$/,'');
 const componentName = upperFirst(camelCase(fn));

 Vue.component(componentName, componentConfig.default || componentConfig)
 });