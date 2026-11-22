# Sales Calculator

គេហទំព័រនេះប្រើ HTML, CSS និង JavaScript សុទ្ធ។ មិនចាំបាច់ដំឡើង server ឬ build tool ទេ។

## បង្ហោះលើ GitHub Pages

1. បង្កើត GitHub repository ហើយដាក់ឯកសារគម្រោងទាំងអស់នៅឫស repository៖ `index.html`, `styles.css`, `script.js` និងថត `.github/workflows`។
2. Push ឯកសារទាំងនេះទៅ branch `main`។
3. នៅក្នុង repository ចូល **Settings → Pages** ហើយកំណត់ **Build and deployment → Source** ទៅជា **GitHub Actions**។
4. Workflow “Deploy website to GitHub Pages” នឹងដំណើរការ ហើយបង្ហោះគេហទំព័រដោយស្វ័យប្រវត្តិ។ រង់ចាំឱ្យវាបញ្ចប់ រួចយក URL នៅក្នុង **Settings → Pages**។

## កែប្រែ និងបច្ចុប្បន្នភាព

កែ `index.html`, `styles.css` ឬ `script.js` រួច push ការផ្លាស់ប្តូរទៅ branch `main`។ GitHub Actions នឹងបង្ហោះកំណែថ្មីដោយស្វ័យប្រវត្តិ។
