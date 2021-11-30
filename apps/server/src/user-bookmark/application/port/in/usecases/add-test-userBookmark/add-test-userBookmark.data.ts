import { initCategories } from '@readable/categories/domain/category.model';

const DESIGN_URLS = [
  'https://dev.to/uxcollective/ux-bootcamps-bad-roadmaps-the-button-factory-and-more-ux-this-week-2o51',
  'https://dev.to/uxcollective/the-ux-of-among-us-chaos-in-design-dead-chatbots-1lik',
  'https://dev.to/duquer/responsive-design-433f',
];

const BACKEND_URLS = [
  'https://levelup.gitconnected.com/principles-of-database-schema-design-8e322e4fb283',
  'https://abdulrwahab.medium.com/api-architecture-performance-best-practices-for-rest-apis-1d4a5922dae1',
  'https://dev.to/mjoycemilburn/a-beginners-guide-to-javascript-development-using-firebase-v9-part-1-project-configuration-5bo3',
  'https://dev.to/aws/aws-open-source-news-and-updates-90-3ppg',
];

const FRONTEND_URLS = [
  'https://javascript.plainenglish.io/top-7-react-developer-tools-to-use-in-2021-with-bonus-4e29e89c9703',
  'https://dev.to/ansub/css-animation-simplified-2g0i',
  'https://dev.to/mikegajdos/how-to-build-a-custom-pagination-component-in-reactjs-p37',
  'https://dev.to/estheragbaje/5-popular-frontend-development-tools-in-2021-1pg2',
  'https://dev.to/rthefounding/react-use-advanced-javascript-in-react-render-method-3hn0',
];

const LANGUAGE_URLS = [
  'https://betterprogramming.pub/mastering-typescript-template-literal-types-f4131a94ffb1',
  'https://medium.com/geekculture/writing-clean-javascript-es6-edition-834e83abc746',
  'https://dev.to/mukul_singhal/deep-flatten-an-array-5elf',
  'https://dev.to/silvenleaf/simplest-way-to-compile-all-typescript-into-one-single-js-file-19bj',
];

const TOOL_URLS = [
  'https://luiyongsheng.medium.com/5-tools-i-used-in-managing-servers-31034d1ed94d',
  'https://medium.com/brainsandbrawn-studio/mac-setup-for-development-checklist-2021-9b73af15fecd',
  'https://javascript.plainenglish.io/the-10-best-javascript-ides-and-code-editors-for-2022-bac97a86d565',
  'https://dev.to/codebycorey/building-a-vscode-extension-part-three-2fnj',
  'https://dev.to/coderallan/vscode-extension-using-webview-and-message-posting-5435',
];

export const OPERATION_TEST_URLS = {
  [`${initCategories.DESIGN}`]: DESIGN_URLS,
  [`${initCategories.BACKEND}`]: BACKEND_URLS,
  [`${initCategories.FRONTEND}`]: FRONTEND_URLS,
  [`${initCategories.LANGUAGE}`]: LANGUAGE_URLS,
  [`${initCategories.TOOL}`]: TOOL_URLS,
};
