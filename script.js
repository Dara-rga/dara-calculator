const intro = document.getElementById("intro");
const aboutDialog = document.getElementById("aboutDialog");
const settingsDialog = document.getElementById("settingsDialog");
const introWelcome = document.getElementById("introWelcome");
const brandName = document.getElementById("brandName");
const themeButton = document.getElementById("themeButton");
const themeButtonLabel = document.getElementById("themeButtonLabel");
const themeIcon = document.getElementById("themeIcon");
const themeColor = document.getElementById("themeColor");
const languageButtons = document.querySelectorAll(".language-button");
const dashboardSearch = document.getElementById("dashboardSearch");
const discountTab = document.getElementById("discountTab");
const targetTab = document.getElementById("targetTab");
const profitTab = document.getElementById("profitTab");
const expTab = document.getElementById("expTab");
const appsTab = document.getElementById("appsTab");
const discountPanel = document.getElementById("discountPanel");
const targetPanel = document.getElementById("targetPanel");
const profitPanel = document.getElementById("profitPanel");
const expPanel = document.getElementById("expPanel");
const appsPanel = document.getElementById("appsPanel");
const appsHeading = document.getElementById("appsHeading");
const appsDescription = document.getElementById("appsDescription");
const appPicker = document.getElementById("appPicker");
const openWheelAppButton = document.getElementById("openWheelApp");
const openStockAppButton = document.getElementById("openStockApp");
const openLotteryAppButton = document.getElementById("openLotteryApp");
const luckyWheelView = document.getElementById("luckyWheelView");
const stockSupervisorView = document.getElementById("stockSupervisorView");
const lotteryAppView = document.getElementById("lotteryAppView");
const stockSupervisorOverview = document.getElementById("stockSupervisorOverview");
const stockFeaturePicker = document.getElementById("stockFeaturePicker");
const openIncomingExpButton = document.getElementById("openIncomingExp");
const incomingExpView = document.getElementById("incomingExpView");
const wheelNamesInput = document.getElementById("wheelNames");
const saveWheelNamesButton = document.getElementById("saveWheelNames");
const resetWheelButton = document.getElementById("resetWheel");
const spinWheelButton = document.getElementById("spinWheel");
const wheelCanvas = document.getElementById("wheelCanvas");
const wheelContext = wheelCanvas.getContext("2d");
const wheelStatus = document.getElementById("wheelStatus");
const wheelRemaining = document.getElementById("wheelRemaining");
const wheelWinners = document.getElementById("wheelWinners");
const wheelStorageKey = "dragon-calculator-lucky-wheel-v1";
const wheelColors = ["#0f8790", "#5267b8", "#d18225", "#6b55a5", "#208b72", "#c64b4b"];
let wheelState = { participants: [], remaining: [], winners: [] };
let wheelRotation = 0;
let wheelIsSpinning = false;
let wheelNotice = { key: "wheelEmpty" };
let wheelSpinFallback;
const originalPrice = document.getElementById("originalPrice");
const discountRate = document.getElementById("discountRate");
const discountedPrice = document.getElementById("discountedPrice");
const discountDetail = document.getElementById("discountDetail");
const discountCalculation = document.getElementById("discountCalculation");
const salesTarget = document.getElementById("salesTarget");
const actualSales = document.getElementById("actualSales");
const targetPercent = document.getElementById("targetPercent");
const targetProgress = document.getElementById("targetProgress");
const progressTrack = document.querySelector(".progress-track");
const targetDetail = document.getElementById("targetDetail");
const targetCalculation = document.getElementById("targetCalculation");
const purchasePrice = document.getElementById("purchasePrice");
const salePrice = document.getElementById("salePrice");
const profitDiscountRate = document.getElementById("profitDiscountRate");
const profitDiscountAmount = document.getElementById("profitDiscountAmount");
const profitPercentField = document.getElementById("profitPercentField");
const profitAmountField = document.getElementById("profitAmountField");
const profitDiscountModes = document.querySelectorAll('input[name="profitDiscountType"]');
const profitLossResult = document.getElementById("profitLossResult");
const profitSalePrice = document.getElementById("profitSalePrice");
const profitCalculation = document.getElementById("profitCalculation");

const moneyFormat = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
const percentFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const translations = {
  km: {
    pageTitle: "Dragon Calculator | កម្មវិធីគណនាតម្លៃ និងការលក់",
    creatorName: "មួយនាទីក៏មានតម្លៃ",
    welcome: "ស្វាគមន៍",
    welcomeMessage: "សូមស្វាគមន៍មកកាន់ Dragon Calculator!",
    introCredit: "អ្នកបង្កើត · Dragon Calculator",
    skipIntro: "ចូលប្រើម៉ាស៊ីនគិតលេខ",
    mainLabel: "កម្មវិធីគណនាតម្លៃ និងការលក់",
    copyrightNotice: "© 2026 តោះ · Dragon Calculator",
    websiteVersionLabel: "កំណែគេហទំព័រ",
    brandTagline: "ភាពអាចទៅរួច",
    languageSelect: "ជ្រើសរើសភាសា",
    aboutButton: "អំពីកម្មវិធី",
    settingsButton: "ការកំណត់",
    settingsEyebrow: "ការកំណត់",
    settingsTitle: "ការកំណត់",
    themeSettingLabel: "រូបរាង",
    themeSettingDescription: "ប្តូររវាងរបៀបភ្លឺ និងរបៀបងងឹត",
    languageSettingLabel: "ភាសា",
    languageSettingDescription: "ជ្រើសរើសភាសាដែលប្រើក្នុងកម្មវិធី",
    darkMode: "របៀបងងឹត",
    lightMode: "របៀបភ្លឺ",
    enableDarkMode: "បើករបៀបងងឹត",
    enableLightMode: "បើករបៀបភ្លឺ",
    toolTabList: "ប្រភេទមុខងារ",
    discountTab: "បញ្ចុះតម្លៃ",
    discountTabNote: "Discount price",
    targetTab: "គោលដៅលក់",
    targetTabNote: "Sales target",
    profitTab: "ចំណេញ/ខាត",
    profitTabNote: "Profit & loss",
    expTab: "ការគណនា EXP ដែលបូកឆ្នាំ",
    expTabNote: "Expiration date",
    expDescription: "បញ្ចូលថ្ងៃផលិត EXP និងរយៈពេលដើម្បីរកថ្ងៃផុតកំណត់",
    calculateExpButton: "គណនា",
    appsTab: "កម្មវិធីផ្សេងៗ",
    appsTabNote: "ឧបករណ៍បន្ថែម",
    appsHeading: "កម្មវិធីផ្សេងៗ",
    appsDescription: "ជ្រើសរើសកម្មវិធីដែលអ្នកចង់ប្រើ",
    backToApps: "ត្រឡប់ទៅជម្រើសមុខងារ",
    backToStockFeatures: "ត្រឡប់ក្រោយ",
    lotteryTitle: "ឆែកលេខឡូ",
    lotteryDescription: "បញ្ចូលលេខឡូ ដើម្បីត្រួតពិនិត្យលទ្ធផល។ មុខងារនេះកំពុង Update ទិន្នន័យ។",
    lotteryEyebrow: "មុខងារថ្មី",
    lotteryStatus: "កំពុង Update",
    lotteryNumberLabel: "លេខឡូ",
    lotteryPlaceholder: "ឧ. 123456",
    lotteryCheckButton: "ឆែកលទ្ធផល",
    lotteryPending: "មុខងារនេះនឹងអាប់ដេតឆាប់ៗនេះ។",
    wheelEyebrow: "ហ្គេមសំណាង",
    wheelTitle: "កងបង្វិលសំណាង",
    wheelDescription: "បញ្ចូលឈ្មោះអ្នកចូលរួមរហូតដល់ 30 នាក់។ អ្នកឈ្នះនឹងត្រូវដកចេញពីកងបង្វិល។",
    wheelNamesLabel: "បញ្ជីឈ្មោះ (មួយឈ្មោះក្នុងមួយបន្ទាត់)",
    wheelNamesHelp: "អាចបញ្ចូលបានរហូតដល់ 30 ឈ្មោះ។ ឈ្មោះដែលឈ្នះរួច មិនអាចបញ្ចូលវិញបានទេ។",
    wheelSaveNames: "រក្សាទុកបញ្ជីឈ្មោះ",
    wheelReset: "ចាប់ផ្ដើមជុំថ្មី",
    wheelSpin: "បង្វិលឥឡូវនេះ",
    wheelRemaining: "នៅសល់ {count} / {max} នាក់",
    wheelWinnersHeading: "ឈ្មោះអ្នកឈ្នះ",
    wheelNoWinners: "មិនទាន់មានអ្នកឈ្នះ",
    wheelReady: "បញ្ជីឈ្មោះត្រូវបានរក្សាទុករួច។ អាចចាប់ផ្ដើមបង្វិលបាន។",
    wheelNamesSaved: "បានរក្សាទុកឈ្មោះ {count} នាក់។",
    wheelSpinning: "កំពុងបង្វិល...",
    wheelWinner: "{name} ឈ្នះហើយ! ឈ្មោះត្រូវបានដកចេញពីបញ្ជី។",
    wheelTooMany: "អាចបញ្ចូលឈ្មោះបានត្រឹមតែ 30 នាក់ប៉ុណ្ណោះ។",
    wheelDuplicateNames: "មានឈ្មោះស្ទួនក្នុងបញ្ជី។ សូមពិនិត្យម្ដងទៀត។",
    wheelAlreadyWon: "ឈ្មោះ {name} ឈ្នះរួចហើយ ហើយមិនអាចបញ្ចូលមកបង្វិលវិញបានទេ។",
    wheelResetConfirm: "ចាប់ផ្ដើមជុំថ្មី? ឈ្មោះអ្នកឈ្នះនឹងត្រូវបានសម្អាត ហើយឈ្មោះទាំងអស់នឹងត្រឡប់មកកងវិញ។",
    wheelResetDone: "ជុំថ្មីបានចាប់ផ្ដើម។",
    wheelEmpty: "សូមបញ្ចូលឈ្មោះ និងរក្សាទុកបញ្ជីសិន។",
    wheelCanvasLabel: "កងបង្វិលសំណាង មានឈ្មោះ {count} នាក់",
    wheelStorageError: "មិនអាចអានទិន្នន័យចាស់បានទេ។ សូមរក្សាទុកបញ្ជីថ្មី ឬចាប់ផ្ដើមជុំថ្មី។",
    stockSupervisorEyebrow: "កម្មវិធីថ្មី",
    stockSupervisorTitle: "ស្វែងយល់អំពីថ្ងៃផុតកំណត់ EXP",
    stockSupervisorDescription: "មុខងារនេះកំពុងរៀបចំ។ សូមរង់ចាំការអាប់ដេតបន្ទាប់។",
    monthlyExpTitle: "គណនាថ្ងៃផុតកំណត់ EXP",
    expReadyStatus: "ត្រៀមប្រើ",
    manufactureDateLabel: "ថ្ងៃផលិត EXP",
    expYearLabel: "ចំនួនឆ្នាំ",
    expMonthLabel: "ចំនួនខែ",
    expResultLabel: "ថ្ងៃផុតកំណត់ EXP",
    incomingExpTitle: "លក្ខណៈនៃការមើល EXP ដែលត្រូវទទួលលក់",
    stockFeatureStatus: "កំពុង Update",
    discountHeading: "គណនាតម្លៃក្រោយបញ្ចុះ",
    discountDescription: "បញ្ចូលតម្លៃដើម និងភាគរយបញ្ចុះតម្លៃ",
    originalPrice: "តម្លៃដើម ($)",
    discountRate: "បញ្ចុះតម្លៃ (%)",
    discountResultLabel: "តម្លៃក្រោយបញ្ចុះ",
    calculationLabel: "របៀបគណនា",
    targetHeading: "គណនាភាគរយសម្រេចគោលដៅលក់",
    targetDescription: "ប្រៀបធៀបការលក់ជាក់ស្តែងជាមួយគោលដៅ",
    salesTarget: "គោលដៅលក់ ($)",
    actualSales: "លក់បាន ($)",
    targetResultLabel: "សម្រេចបាន",
    progressLabel: "សម្រេចគោលដៅ",
    profitHeading: "គណនាចំណេញ ឬខាតក្រោយបញ្ចុះ",
    profitDescription: "ប្រៀបធៀបតម្លៃលក់ក្រោយបញ្ចុះនឹងតម្លៃទិញចូល",
    purchasePrice: "តម្លៃទិញចូល ($)",
    salePrice: "តម្លៃលក់ចេញ ($)",
    discountMode: "ជ្រើសរើសរបៀបបញ្ចុះ",
    percentMode: "ភាគរយ",
    percentModeExample: "ឧ. បញ្ចុះ 50%",
    amountMode: "ចំនួនដុល្លារ",
    amountModeExample: "ឧ. បញ្ចុះ $30",
    profitPercentLabel: "បញ្ចុះតម្លៃ (%)",
    profitAmountLabel: "បញ្ចុះតម្លៃ ($)",
    profitResultLabel: "លទ្ធផលក្រោយបញ្ចុះ",
    aboutEyebrow: "អំពីខ្ញុំ",
    aboutTitle: "អំពីខ្ញុំ និងគោលបំណងនៃការបង្កើតគេហទំព័រនេះ",
    close: "បិទ",
    aboutGreetingPrefix: "សួស្តី! ខ្ញុំបាទឈ្មោះ",
    aboutGreetingName: "វ៉ន ដារ៉ា (Vorn Dara)",
    aboutGreetingSuffix: "។",
    aboutParagraph1: "ខ្ញុំមិនមែនជាអ្នកជំនាញផ្នែក IT ឬជាអ្នកអភិវឌ្ឍន៍គេហទំព័រអាជីពនោះទេ។ គេហទំព័រតូចមួយនេះ ត្រូវបានបង្កើតឡើងដោយផ្អែកលើចំណង់ចំណូលចិត្ត ការចង់ចេះចង់ដឹង និងបំណងប្រាថ្នាចង់ស្វែងយល់អ្វីថ្មីៗរបស់ខ្ញុំប៉ុណ្ណោះ។",
    aboutParagraph2: "ខ្ញុំជឿថា ការរៀនសូត្រមិនចាំបាច់ចាប់ផ្ដើមពីភាពជាអ្នកជំនាញនោះទេ ប៉ុន្តែអាចចាប់ផ្ដើមពីការចង់ដឹង ការហ៊ានសាកល្បង និងការមិនបោះបង់នៅពេលជួបបញ្ហា។",
    aboutParagraph3: "ខ្ញុំមិនខ្លាចក្នុងការចាប់ផ្ដើមពីចំណុចសូន្យនោះទេ ព្រោះខ្ញុំជឿថា អ្នកជំនាញគ្រប់រូបក៏ធ្លាប់ជាអ្នកចាប់ផ្ដើមដំបូងដូចគ្នា។ អ្វីដែលសំខាន់ គឺការបន្តរៀន បន្តអភិវឌ្ឍ និងធ្វើឱ្យខ្លួនឯងកាន់តែប្រសើរឡើងជារៀងរាល់ថ្ងៃ។",
    aboutPurposeHeading: "គោលបំណងនៃគេហទំព័រនេះ",
    aboutPurpose1: "គេហទំព័រនេះមិនមែនបង្កើតឡើងដើម្បីបង្ហាញថាខ្ញុំចេះអ្វីៗគ្រប់យ៉ាងនោះទេ ប៉ុន្តែវាជាកន្លែងសម្រាប់សាកល្បង បង្កើត ស្វែងយល់ និងប្រមូលបទពិសោធន៍ថ្មីៗ។",
    aboutPurpose2: "ខ្ញុំមានបំណងប្រើប្រាស់ចំណេះដឹងដែលបានរៀន ដើម្បីបង្កើតឧបករណ៍តូចៗ កម្មវិធី និងគេហទំព័រផ្សេងៗ ដែលអាចជួយសម្រួលដល់ការងារ និងជីវិតប្រចាំថ្ងៃ។",
    aboutPurpose3: "ទោះបីជាគេហទំព័រនេះមិនទាន់ល្អឥតខ្ចោះក៏ដោយ ក៏វាជាស្នាដៃតូចមួយដែលកើតចេញពីការខិតខំប្រឹងប្រែង ការសាកល្បង និងការរៀនសូត្ររបស់ខ្ញុំផ្ទាល់។",
    aboutJourneyHeading: "ដំណើរនៃការរៀនសូត្រ (My Journey)",
    aboutJourney1: "ខ្ញុំសង្ឃឹមថា នៅថ្ងៃអនាគត គេហទំព័រនេះនឹងក្លាយជាកន្លែងមួយដែលអាចបង្ហាញពីការរីកចម្រើនរបស់ខ្ញុំ តាមរយៈស្នាដៃថ្មីៗ និងបទពិសោធន៍ដែលខ្ញុំទទួលបាន។",
    aboutJourney2: "រាល់កំហុសគឺជាមេរៀន រាល់បញ្ហាគឺជាបទពិសោធន៍ ហើយរាល់ការចាប់ផ្ដើមថ្មី គឺជាឱកាសមួយសម្រាប់ការរីកចម្រើន។",
    aboutBeliefsHeading: "ពាក្យដែលខ្ញុំតែងតែជឿជាក់",
    aboutQuote: "«កុំរង់ចាំរហូតដល់ខ្លួនឯងពូកែ ទើបចាប់ផ្ដើមធ្វើអ្វីមួយ។ ចូរហ៊ានចាប់ផ្ដើមពីអ្វីដែលអ្នកមាន ហើយរៀនឱ្យកាន់តែពូកែតាមរយៈអ្វីដែលអ្នកបានធ្វើ»។",
    aboutBelief: "ខ្ញុំជឿថា យើងមិនចាំបាច់ប្រកួតប្រជែងជាមួយអ្នកដទៃគ្រប់ពេលនោះទេ។ គ្រាន់តែធ្វើឱ្យខ្លួនឯងនៅថ្ងៃនេះ ប្រសើរជាងខ្លួនឯងកាលពីម្សិលមិញ ក៏ជាការរីកចម្រើនដ៏មានតម្លៃមួយដែរ។",
    aboutThanks: "ជាចុងក្រោយ ខ្ញុំសូមអរគុណយ៉ាងជ្រាលជ្រៅចំពោះអ្នកដែលបានចំណាយពេលចូលមកទស្សនា និងគាំទ្រស្នាដៃតូចមួយនេះ។ ការចូលទស្សនារបស់អ្នក គឺជាកម្លាំងចិត្តមួយដែលជំរុញឱ្យខ្ញុំបន្តរៀនសូត្រ និងបង្កើតអ្វីថ្មីៗបន្ថែមទៀត។",
    aboutThanksEmphasis: "សូមអរគុណពីចិត្ត!",
    aboutSignatureClosing: "ដោយក្តីគោរព និងអរគុណពីខ្ញុំបាទ",
    aboutSignatureName: "វ៉ន ដារ៉ា (Vorn Dara)",
    contactHeading: "ទំនាក់ទំនង",
    invalidDiscount: "បញ្ចូលតម្លៃ និងភាគរយ 0–100% ឱ្យបានត្រឹមត្រូវ",
    discountSavings: "បញ្ចុះតម្លៃបាន {amount}",
    discountSuffix: "បញ្ចុះ",
    invalidTarget: "បញ្ចូលគោលដៅ និងចំនួនលក់ឱ្យបានត្រឹមត្រូវ",
    targetRemaining: "នៅសល់ {amount} ដើម្បីដល់គោលដៅ",
    targetAbove: "លើសគោលដៅ {amount}",
    targetMet: "សម្រេចបានគោលដៅពេញលេញ",
    invalidProfit: "បញ្ចូលតម្លៃឱ្យបានត្រឹមត្រូវ",
    amountExceedsSale: "ចំនួនបញ្ចុះមិនអាចលើសតម្លៃលក់បានទេ",
    saleAfterDiscount: "តម្លៃលក់ក្រោយបញ្ចុះ៖ {amount}",
    loss: "ខាត {amount}",
    profit: "ចំណេញ {amount}",
    breakEven: "ស្មើដើម $0"
  },
  en: {
    pageTitle: "Dragon Calculator | Sales & Discount Calculator | មួយនាទីក៏មានតម្លៃ",
    creatorName: "មួយនាទីក៏មានតម្លៃ",
    welcome: "Welcome",
    welcomeMessage: "Welcome to Dragon Calculator!",
    introCredit: "Created by មួយនាទីក៏មានតម្លៃ · Dragon Calculator",
    skipIntro: "Open the calculator",
    mainLabel: "Sales and discount calculator",
    copyrightNotice: "© 2026 តោះ · Dragon Calculator",
    websiteVersionLabel: "Website version",
    brandTagline: "Possibility",
    languageSelect: "Select language",
    aboutButton: "About",
    settingsButton: "Settings",
    settingsEyebrow: "PREFERENCES",
    settingsTitle: "Settings",
    themeSettingLabel: "Appearance",
    themeSettingDescription: "Switch between light and dark mode.",
    languageSettingLabel: "Language",
    languageSettingDescription: "Choose the language used in the app.",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    enableDarkMode: "Enable dark mode",
    enableLightMode: "Enable light mode",
    toolTabList: "Calculator functions",
    discountTab: "Discount",
    discountTabNote: "Discount price",
    targetTab: "Sales target",
    targetTabNote: "Target progress",
    profitTab: "Profit / loss",
    profitTabNote: "Profit & loss",
    expTab: "EXP year calculation",
    expTabNote: "Expiration date",
    expDescription: "Enter the manufacture date and duration to find the expiration date.",
    calculateExpButton: "Calculate",
    appsTab: "Other apps",
    appsTabNote: "More tools",
    appsHeading: "Other apps",
    appsDescription: "Choose an app to use.",
    backToApps: "Back to app choices",
    backToStockFeatures: "Go back",
    lotteryTitle: "Check Lottery Number",
    lotteryDescription: "Enter a lottery number to check the result. Data updates are in progress.",
    lotteryEyebrow: "NEW APP",
    lotteryStatus: "Updating",
    lotteryNumberLabel: "Lottery number",
    lotteryPlaceholder: "e.g. 123456",
    lotteryCheckButton: "Check result",
    lotteryPending: "This feature will be updated soon.",
    wheelEyebrow: "LUCKY GAME",
    wheelTitle: "Lucky Spin Wheel",
    wheelDescription: "Enter up to 30 participant names. Each winner is removed from the wheel.",
    wheelNamesLabel: "Names (one per line)",
    wheelNamesHelp: "Enter up to 30 names. A winner cannot be added back to the same game.",
    wheelSaveNames: "Save participant list",
    wheelReset: "Start a new game",
    wheelSpin: "Spin the wheel",
    wheelRemaining: "{count} / {max} participants remaining",
    wheelWinnersHeading: "Winners",
    wheelNoWinners: "No winners yet.",
    wheelReady: "Your list is saved. The wheel is ready.",
    wheelNamesSaved: "Saved {count} participant names.",
    wheelSpinning: "Spinning...",
    wheelWinner: "{name} wins! Their name has been removed from the wheel.",
    wheelTooMany: "You can enter up to 30 names.",
    wheelDuplicateNames: "Duplicate names found. Please check the list.",
    wheelAlreadyWon: "{name} has already won and cannot be added back to the wheel.",
    wheelResetConfirm: "Start a new game? This clears the winner history and returns everyone to the wheel.",
    wheelResetDone: "A new game has started.",
    wheelEmpty: "Enter names and save the list before spinning.",
    wheelCanvasLabel: "Lucky wheel with {count} participant names",
    wheelStorageError: "The saved game data could not be read. Save a new list or start a new game.",
    stockSupervisorEyebrow: "COMING SOON",
    stockSupervisorTitle: "EXP Expiration Information",
    stockSupervisorDescription: "This feature is being prepared. Please check back for a future update.",
    monthlyExpTitle: "Calculate EXP expiration date",
    expReadyStatus: "Ready",
    manufactureDateLabel: "EXP manufacture date",
    expYearLabel: "Years",
    expMonthLabel: "Months",
    expResultLabel: "EXP expiration date",
    incomingExpTitle: "EXP items to receive for sale",
    stockFeatureStatus: "Updating",
    discountHeading: "Discounted price",
    discountDescription: "Enter the original price and discount percentage.",
    originalPrice: "Original price ($)",
    discountRate: "Discount (%)",
    discountResultLabel: "Price after discount",
    calculationLabel: "How it's calculated",
    targetHeading: "Sales target completion",
    targetDescription: "Compare actual sales with your target.",
    salesTarget: "Sales target ($)",
    actualSales: "Actual sales ($)",
    targetResultLabel: "Target achieved",
    progressLabel: "Target progress",
    profitHeading: "Profit or loss after discount",
    profitDescription: "Compare the discounted selling price with your purchase cost.",
    purchasePrice: "Purchase cost ($)",
    salePrice: "Selling price ($)",
    discountMode: "Choose a discount type",
    percentMode: "Percentage",
    percentModeExample: "e.g. 50% off",
    amountMode: "Fixed amount",
    amountModeExample: "e.g. $30 off",
    profitPercentLabel: "Discount (%)",
    profitAmountLabel: "Discount amount ($)",
    profitResultLabel: "Result after discount",
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "About Me and Why I Created This Website",
    close: "Close",
    aboutGreetingPrefix: "Hello! My name is",
    aboutGreetingName: "Vorn Dara",
    aboutGreetingSuffix: ".",
    aboutParagraph1: "I am not an IT expert or a professional web developer. I created this small website out of personal interest, curiosity, and a desire to explore new things.",
    aboutParagraph2: "I believe learning does not have to begin with being an expert. It can start with curiosity, the courage to try, and not giving up when challenges arise.",
    aboutParagraph3: "I am not afraid to start from zero, because every expert was once a beginner too. What matters is continuing to learn, grow, and become a little better every day.",
    aboutPurposeHeading: "Why I Created This Website",
    aboutPurpose1: "This website was not created to show that I know everything. It is a place to experiment, create, explore, and gain new experiences.",
    aboutPurpose2: "I hope to use what I learn to build small tools, apps, and websites that can make work and everyday life easier.",
    aboutPurpose3: "Although this website is not perfect yet, it is a small project made through my own effort, experiments, and learning.",
    aboutJourneyHeading: "My Learning Journey",
    aboutJourney1: "I hope that one day this website will show how I have grown through new projects and experiences.",
    aboutJourney2: "Every mistake is a lesson, every problem an experience, and every new beginning an opportunity to grow.",
    aboutBeliefsHeading: "A Quote I Believe In",
    aboutQuote: "“Don’t wait until you are skilled to start doing something. Dare to begin with what you have, and become better by learning from what you do.”",
    aboutBelief: "I believe we do not need to compete with others all the time. Becoming a better version of ourselves today than we were yesterday is meaningful progress.",
    aboutThanks: "Finally, I sincerely thank everyone who has taken the time to visit and support this small project. Your visit encourages me to keep learning and creating new things.",
    aboutThanksEmphasis: "Thank you from the bottom of my heart!",
    aboutSignatureClosing: "With respect and gratitude,",
    aboutSignatureName: "Vorn Dara",
    contactHeading: "Contact",
    invalidDiscount: "Enter a valid price and a discount from 0% to 100%.",
    discountSavings: "Discount amount: {amount}",
    discountSuffix: "discount",
    invalidTarget: "Enter a valid target and actual sales amount.",
    targetRemaining: "{amount} remaining to reach the target",
    targetAbove: "{amount} above target",
    targetMet: "Target achieved",
    invalidProfit: "Enter valid prices and a valid discount.",
    amountExceedsSale: "The discount cannot exceed the selling price.",
    saleAfterDiscount: "Selling price after discount: {amount}",
    loss: "Loss: {amount}",
    profit: "Profit: {amount}",
    breakEven: "Break-even: $0"
  },
  zh: {
    pageTitle: "Dragon Calculator | 销售与折扣计算器 | មួយនាទីក៏មានតម្លៃ",
    creatorName: "មួយនាទីក៏មានតម្លៃ",
    welcome: "欢迎",
    welcomeMessage: "欢迎来到龙计算器！",
    introCredit: "由 មួយនាទីក៏មានតម្លៃ 创建 · 龙计算器",
    skipIntro: "进入计算器",
    mainLabel: "销售与折扣计算器",
    copyrightNotice: "© 2026 មួយនាទីក៏មានតម្លៃ · 龙计算器",
    websiteVersionLabel: "网站版本",
    brandTagline: "无限可能",
    languageSelect: "选择语言",
    aboutButton: "关于应用",
    settingsButton: "设置",
    settingsEyebrow: "偏好设置",
    settingsTitle: "设置",
    themeSettingLabel: "外观",
    themeSettingDescription: "在浅色和深色模式之间切换。",
    languageSettingLabel: "语言",
    languageSettingDescription: "选择应用使用的语言。",
    darkMode: "深色模式",
    lightMode: "浅色模式",
    enableDarkMode: "启用深色模式",
    enableLightMode: "启用浅色模式",
    toolTabList: "计算功能",
    discountTab: "折扣",
    discountTabNote: "折后价格",
    targetTab: "销售目标",
    targetTabNote: "目标进度",
    profitTab: "利润 / 亏损",
    profitTabNote: "利润与亏损",
    expTab: "EXP 年份计算",
    expTabNote: "到期日期",
    expDescription: "输入生产日期和有效期时长以计算到期日。",
    calculateExpButton: "计算",
    appsTab: "其他应用",
    appsTabNote: "更多工具",
    appsHeading: "其他应用",
    appsDescription: "选择要使用的应用。",
    backToApps: "返回应用选项",
    backToStockFeatures: "返回",
    lotteryTitle: "彩票号码查询",
    lotteryDescription: "输入彩票号码以查询结果。数据正在更新。",
    lotteryEyebrow: "新应用",
    lotteryStatus: "正在更新",
    lotteryNumberLabel: "彩票号码",
    lotteryPlaceholder: "例如：123456",
    lotteryCheckButton: "查询结果",
    lotteryPending: "此功能即将更新。",
    wheelEyebrow: "幸运游戏",
    wheelTitle: "幸运转盘",
    wheelDescription: "最多输入 30 位参与者的姓名。每位获胜者都会从转盘中移除。",
    wheelNamesLabel: "姓名（每行一个）",
    wheelNamesHelp: "最多输入 30 个姓名。获胜者不能重新加入本轮游戏。",
    wheelSaveNames: "保存参与者名单",
    wheelReset: "开始新一轮",
    wheelSpin: "开始旋转",
    wheelRemaining: "剩余 {count} / {max} 人",
    wheelWinnersHeading: "获胜者",
    wheelNoWinners: "暂无获胜者。",
    wheelReady: "名单已保存，转盘已准备就绪。",
    wheelNamesSaved: "已保存 {count} 位参与者。",
    wheelSpinning: "转盘旋转中……",
    wheelWinner: "{name} 获胜！该姓名已从转盘中移除。",
    wheelTooMany: "最多只能输入 30 个姓名。",
    wheelDuplicateNames: "名单中有重复姓名，请检查后再试。",
    wheelAlreadyWon: "{name} 已经获胜，不能重新加入转盘。",
    wheelResetConfirm: "开始新一轮？这将清除获胜记录，并让所有人重新参加。",
    wheelResetDone: "新一轮已开始。",
    wheelEmpty: "请先输入姓名并保存名单。",
    wheelCanvasLabel: "幸运转盘，共有 {count} 位参与者",
    wheelStorageError: "无法读取已保存的游戏数据。请保存新名单或开始新一轮。",
    stockSupervisorEyebrow: "即将推出",
    stockSupervisorTitle: "了解 EXP 到期日",
    stockSupervisorDescription: "该功能正在准备中，请等待后续更新。",
    monthlyExpTitle: "计算 EXP 到期日",
    expReadyStatus: "可使用",
    manufactureDateLabel: "EXP 生产日期",
    expYearLabel: "年",
    expMonthLabel: "个月",
    expResultLabel: "EXP 到期日",
    incomingExpTitle: "待接收销售的 EXP 商品",
    stockFeatureStatus: "正在更新",
    discountHeading: "计算折后价格",
    discountDescription: "输入原价和折扣百分比",
    originalPrice: "原价 ($)",
    discountRate: "折扣 (%)",
    discountResultLabel: "折后价格",
    calculationLabel: "计算方式",
    targetHeading: "销售目标完成比例",
    targetDescription: "比较实际销售额与目标",
    salesTarget: "销售目标 ($)",
    actualSales: "实际销售额 ($)",
    targetResultLabel: "目标完成率",
    progressLabel: "目标进度",
    profitHeading: "计算折后利润或亏损",
    profitDescription: "比较折后售价与进货成本",
    purchasePrice: "进货成本 ($)",
    salePrice: "售价 ($)",
    discountMode: "选择折扣方式",
    percentMode: "百分比",
    percentModeExample: "例如：优惠 50%",
    amountMode: "固定金额",
    amountModeExample: "例如：减 $30",
    profitPercentLabel: "折扣 (%)",
    profitAmountLabel: "折扣金额 ($)",
    profitResultLabel: "折后结果",
    aboutEyebrow: "关于我",
    aboutTitle: "关于我以及创建这个网站的初衷",
    close: "关闭",
    aboutGreetingPrefix: "大家好！我叫",
    aboutGreetingName: "Vorn Dara",
    aboutGreetingSuffix: "。",
    aboutParagraph1: "我不是 IT 专家，也不是专业的网站开发人员。这个小网站源于我的兴趣、好奇心，以及探索新事物的愿望。",
    aboutParagraph2: "我相信，学习不必从成为专家开始。它可以从好奇心、勇于尝试，以及遇到困难时不轻言放弃开始。",
    aboutParagraph3: "我不害怕从零开始，因为每一位专家也曾是初学者。重要的是持续学习、不断进步，并让自己每天都变得更好。",
    aboutPurposeHeading: "创建这个网站的目的",
    aboutPurpose1: "创建这个网站并不是为了证明我什么都会，而是为了提供一个尝试、创造、探索和积累新经验的地方。",
    aboutPurpose2: "我希望运用所学知识制作小工具、应用和网站，帮助简化工作与日常生活。",
    aboutPurpose3: "虽然这个网站还不完美，但这是我通过努力、尝试和学习完成的一个小项目。",
    aboutJourneyHeading: "我的学习历程",
    aboutJourney1: "我希望有一天，这个网站能够通过新的作品和经历展现我的成长。",
    aboutJourney2: "每个错误都是一堂课，每个问题都是一段经验，每个新的开始都是成长的机会。",
    aboutBeliefsHeading: "我一直相信的一句话",
    aboutQuote: "“不要等到自己足够优秀才开始做事。勇敢地从现有的一切开始，并在实践中不断学习进步。”",
    aboutBelief: "我相信，我们不必总是与他人竞争。只要今天的自己比昨天的自己更好，就是有价值的进步。",
    aboutThanks: "最后，衷心感谢每一位抽出时间访问并支持这个小项目的人。您的访问鼓励我继续学习并创造更多新事物。",
    aboutThanksEmphasis: "衷心感谢！",
    aboutSignatureClosing: "谨致敬意与谢意，",
    aboutSignatureName: "Vorn Dara",
    contactHeading: "联系方式",
    invalidDiscount: "请输入有效价格及 0% 至 100% 的折扣。",
    discountSavings: "优惠金额：{amount}",
    discountSuffix: "折扣",
    invalidTarget: "请输入有效的销售目标和实际销售额。",
    targetRemaining: "距离目标还差 {amount}",
    targetAbove: "超出目标 {amount}",
    targetMet: "已完成销售目标",
    invalidProfit: "请输入有效价格和折扣。",
    amountExceedsSale: "折扣金额不能超过售价。",
    saleAfterDiscount: "折后售价：{amount}",
    loss: "亏损：{amount}",
    profit: "利润：{amount}",
    breakEven: "收支平衡：$0"
  }
};

let currentLanguage = "km";

function translate(key, values) {
  let text = translations[currentLanguage][key];
  if (values) {
    Object.entries(values).forEach(([name, value]) => {
      text = text.split(`{${name}}`).join(value);
    });
  }
  return text;
}

function setLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(translations, language)) {
    throw new Error(`Unsupported language: ${language}`);
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translate("pageTitle");
  introWelcome.textContent = translate("welcomeMessage");
  brandName.textContent = translate("creatorName");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  updateThemeButton();
  updateDiscount();
  updateTarget();
  updateProfitLoss();
  renderWheel();
}

function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeButtonLabel.textContent = translate(isDark ? "lightMode" : "darkMode");
  themeButton.setAttribute("aria-label", translate(isDark ? "enableLightMode" : "enableDarkMode"));
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀" : "☾";
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeColor.content = isDark ? "#101923" : "#10233f";
  localStorage.setItem("dragon-calculator-theme", isDark ? "dark" : "light");
  updateThemeButton();
  renderWheel();
}

function formatMoney(value) {
  return `$${moneyFormat.format(value)}`;
}

function roundCurrency(value) {
  return Math.round((value + Math.sign(value) * Number.EPSILON) * 100) / 100;
}

function readValidNumber(input) {
  if (!input.value.trim() || !input.validity.valid) return null;
  const value = Number(input.value);
  return Number.isFinite(value) ? value : null;
}

function updateDiscount() {
  const price = readValidNumber(originalPrice);
  const rate = readValidNumber(discountRate);
  if (price === null || rate === null) {
    discountedPrice.textContent = "—";
    discountDetail.textContent = translate("invalidDiscount");
    discountCalculation.textContent = "—";
    return;
  }

  const savings = price * rate / 100;
  const finalPrice = price - savings;
  discountedPrice.textContent = formatMoney(finalPrice);
  discountDetail.textContent = translate("discountSavings", { amount: formatMoney(savings) });
  discountCalculation.textContent = `${formatMoney(price)} × ${percentFormat.format(rate)}% = ${formatMoney(savings)} ${translate("discountSuffix")}; ${formatMoney(price)} − ${formatMoney(savings)} = ${formatMoney(finalPrice)}`;
}

function updateTarget() {
  const target = readValidNumber(salesTarget);
  const actual = readValidNumber(actualSales);
  if (target === null || target <= 0 || actual === null) {
    targetPercent.textContent = "—";
    targetProgress.style.width = "0%";
    progressTrack.setAttribute("aria-valuenow", "0");
    targetDetail.textContent = translate("invalidTarget");
    targetCalculation.textContent = "—";
    return;
  }

  const completion = actual / target * 100;
  const progress = Math.min(completion, 100);
  targetPercent.textContent = `${percentFormat.format(completion)}%`;
  targetProgress.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", String(progress));
  targetCalculation.textContent = `${formatMoney(actual)} ÷ ${formatMoney(target)} × 100 = ${percentFormat.format(completion)}%`;

  if (actual < target) {
    targetDetail.textContent = translate("targetRemaining", { amount: formatMoney(target - actual) });
  } else if (actual > target) {
    targetDetail.textContent = translate("targetAbove", { amount: formatMoney(actual - target) });
  } else {
    targetDetail.textContent = translate("targetMet");
  }
}

function updateProfitLoss() {
  const cost = readValidNumber(purchasePrice);
  const price = readValidNumber(salePrice);
  const selectedMode = document.querySelector('input[name="profitDiscountType"]:checked').value;
  const discountInput = selectedMode === "percent" ? profitDiscountRate : profitDiscountAmount;
  if (price === null) {
    profitDiscountAmount.removeAttribute("max");
  } else {
    profitDiscountAmount.max = String(price);
  }
  const discountValue = readValidNumber(discountInput);
  if (cost === null || price === null || discountValue === null) {
    profitLossResult.textContent = "—";
    profitLossResult.classList.remove("loss", "profit", "break-even");
    const discountExceedsPrice = selectedMode === "amount"
      && price !== null
      && profitDiscountAmount.value !== ""
      && Number(profitDiscountAmount.value) > price;
    profitSalePrice.textContent = discountExceedsPrice
      ? translate("amountExceedsSale")
      : translate("invalidProfit");
    profitCalculation.textContent = "—";
    return;
  }

  const discountAmount = roundCurrency(selectedMode === "percent"
    ? price * discountValue / 100
    : discountValue);
  const discountedSalePrice = roundCurrency(price - discountAmount);
  const profit = roundCurrency(discountedSalePrice - cost);
  profitSalePrice.textContent = translate("saleAfterDiscount", { amount: formatMoney(discountedSalePrice) });
  profitLossResult.classList.remove("loss", "profit", "break-even");

  if (profit < 0) {
    profitLossResult.textContent = translate("loss", { amount: formatMoney(Math.abs(profit)) });
    profitLossResult.classList.add("loss");
  } else if (profit > 0) {
    profitLossResult.textContent = translate("profit", { amount: formatMoney(profit) });
    profitLossResult.classList.add("profit");
  } else {
    profitLossResult.textContent = translate("breakEven");
    profitLossResult.classList.add("break-even");
  }

  const difference = profit < 0 ? `−${formatMoney(Math.abs(profit))}` : formatMoney(profit);
  const resultLabel = profit < 0
    ? translate("loss", { amount: formatMoney(Math.abs(profit)) })
    : profit > 0
      ? translate("profit", { amount: formatMoney(profit) })
      : translate("breakEven");
  const discountCalculation = selectedMode === "percent"
    ? `${formatMoney(price)} × (1 − ${percentFormat.format(discountValue)}%) = ${formatMoney(discountedSalePrice)}`
    : `${formatMoney(price)} − ${formatMoney(discountAmount)} = ${formatMoney(discountedSalePrice)}`;
  profitCalculation.textContent = `${discountCalculation}; ${formatMoney(discountedSalePrice)} − ${formatMoney(cost)} = ${difference} (${resultLabel})`;
}

function updateProfitDiscountMode() {
  const selectedMode = document.querySelector('input[name="profitDiscountType"]:checked').value;
  const usePercent = selectedMode === "percent";
  profitPercentField.hidden = !usePercent;
  profitAmountField.hidden = usePercent;
  profitDiscountRate.disabled = !usePercent;
  profitDiscountAmount.disabled = usePercent;
  profitDiscountModes.forEach((input) => {
    input.closest(".mode-option").classList.toggle("selected", input.checked);
  });
  updateProfitLoss();
}

function normalizeWheelName(name) {
  return name.normalize("NFC").toLocaleLowerCase();
}

function saveWheelState() {
  localStorage.setItem(wheelStorageKey, JSON.stringify(wheelState));
}

function setWheelNotice(key, values) {
  wheelNotice = { key, values };
  wheelStatus.textContent = translate(key, values);
}

function drawLuckyWheel() {
  const { width, height } = wheelCanvas;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) - 5;
  const names = wheelState.remaining;
  const lineColor = getComputedStyle(document.documentElement).getPropertyValue("--line").trim() || "#e2e8f0";
  const surfaceColor = getComputedStyle(document.documentElement).getPropertyValue("--surface").trim() || "#ffffff";

  wheelContext.clearRect(0, 0, width, height);
  wheelContext.beginPath();
  wheelContext.arc(centerX, centerY, radius, 0, Math.PI * 2);
  wheelContext.fillStyle = lineColor;
  wheelContext.fill();

  if (names.length === 0) {
    wheelContext.beginPath();
    wheelContext.arc(centerX, centerY, radius - 3, 0, Math.PI * 2);
    wheelContext.fillStyle = surfaceColor;
    wheelContext.fill();
    return;
  }

  const sliceAngle = Math.PI * 2 / names.length;
  const fontSize = names.length > 20 ? 10 : names.length > 12 ? 12 : 15;
  names.forEach((name, index) => {
    const startAngle = -Math.PI / 2 + index * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    wheelContext.beginPath();
    wheelContext.moveTo(centerX, centerY);
    wheelContext.arc(centerX, centerY, radius - 3, startAngle, endAngle);
    wheelContext.closePath();
    wheelContext.fillStyle = wheelColors[index % wheelColors.length];
    wheelContext.fill();
    wheelContext.strokeStyle = "#ffffff";
    wheelContext.lineWidth = 2;
    wheelContext.stroke();

    wheelContext.save();
    wheelContext.translate(centerX, centerY);
    wheelContext.rotate(startAngle + sliceAngle / 2);
    wheelContext.fillStyle = "#ffffff";
    wheelContext.font = `600 ${fontSize}px system-ui, "Noto Sans Khmer", sans-serif`;
    wheelContext.textAlign = "right";
    wheelContext.textBaseline = "middle";
    const labelWidth = Math.max(12, 2 * (radius - 24) * Math.sin(sliceAngle / 2) - 4);
    wheelContext.fillText(name, radius - 18, 0, labelWidth);
    wheelContext.restore();
  });

  wheelContext.beginPath();
  wheelContext.arc(centerX, centerY, radius * 0.13, 0, Math.PI * 2);
  wheelContext.fillStyle = surfaceColor;
  wheelContext.fill();
  wheelContext.strokeStyle = lineColor;
  wheelContext.lineWidth = 3;
  wheelContext.stroke();
}

function renderWheel() {
  wheelRemaining.textContent = translate("wheelRemaining", {
    count: String(wheelState.remaining.length),
    max: "30"
  });
  wheelStatus.textContent = translate(wheelNotice.key, wheelNotice.values);
  wheelCanvas.setAttribute("aria-label", translate("wheelCanvasLabel", {
    count: String(wheelState.remaining.length)
  }));
  spinWheelButton.disabled = wheelIsSpinning || wheelState.remaining.length === 0;
  saveWheelNamesButton.disabled = wheelIsSpinning;
  resetWheelButton.disabled = wheelIsSpinning || wheelState.participants.length === 0;
  wheelNamesInput.disabled = wheelIsSpinning;

  wheelWinners.textContent = "";
  if (wheelState.winners.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "winner-empty";
    emptyItem.textContent = translate("wheelNoWinners");
    wheelWinners.append(emptyItem);
  } else {
    wheelState.winners.forEach((name) => {
      const item = document.createElement("li");
      item.textContent = name;
      wheelWinners.append(item);
    });
  }

  if (!wheelIsSpinning) drawLuckyWheel();
}

function initializeWheel() {
  const savedState = localStorage.getItem(wheelStorageKey);
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      const nameLists = [parsed.participants, parsed.remaining, parsed.winners];
      if (!parsed || nameLists.some((names) => !Array.isArray(names)
        || names.some((name) => typeof name !== "string" || !name.trim())
        || names.some((name) => name !== name.trim()))) {
        throw new Error("Saved lucky wheel data has an invalid shape.");
      }

      const allNames = [...parsed.remaining, ...parsed.winners];
      const participantKeys = parsed.participants.map(normalizeWheelName);
      const playedKeys = allNames.map(normalizeWheelName);
      const participantSet = new Set(participantKeys);
      if (parsed.participants.length > 30
        || parsed.remaining.length + parsed.winners.length > 30
        || participantSet.size !== participantKeys.length
        || new Set(playedKeys).size !== playedKeys.length
        || playedKeys.some((name) => !participantSet.has(name))) {
        throw new Error("Saved lucky wheel data is inconsistent.");
      }

      wheelState = {
        participants: [...parsed.participants],
        remaining: [...parsed.remaining],
        winners: [...parsed.winners]
      };
    } catch (error) {
      console.error("Could not restore the saved lucky wheel game.", error);
      wheelNotice = { key: "wheelStorageError" };
    }
  }

  wheelNamesInput.value = wheelState.remaining.join("\n");
  renderWheel();
}

function saveWheelNames() {
  if (wheelIsSpinning) return;
  const names = wheelNamesInput.value.split(/\r?\n/).map((name) => name.trim()).filter(Boolean);
  if (names.length + wheelState.winners.length > 30) {
    setWheelNotice("wheelTooMany");
    return;
  }

  const nameKeys = names.map(normalizeWheelName);
  if (new Set(nameKeys).size !== nameKeys.length) {
    setWheelNotice("wheelDuplicateNames");
    return;
  }

  const winnerKeys = new Set(wheelState.winners.map(normalizeWheelName));
  const alreadyWon = names.find((name) => winnerKeys.has(normalizeWheelName(name)));
  if (alreadyWon) {
    setWheelNotice("wheelAlreadyWon", { name: alreadyWon });
    return;
  }

  wheelState.remaining = names;
  wheelState.participants = [...names, ...wheelState.winners];
  saveWheelState();
  setWheelNotice("wheelNamesSaved", { count: String(names.length) });
  renderWheel();
}

function resetWheel() {
  if (wheelIsSpinning || wheelState.participants.length === 0) return;
  if (!window.confirm(translate("wheelResetConfirm"))) return;

  wheelState.remaining = [...wheelState.participants];
  wheelState.winners = [];
  wheelNamesInput.value = wheelState.remaining.join("\n");
  saveWheelState();
  setWheelNotice("wheelResetDone");
  renderWheel();
}

function spinWheel() {
  if (wheelIsSpinning || wheelState.remaining.length === 0) return;

  const selectedIndex = Math.floor(Math.random() * wheelState.remaining.length);
  const selectedName = wheelState.remaining[selectedIndex];
  const sliceDegrees = 360 / wheelState.remaining.length;
  const desiredRotation = ((-(selectedIndex + 0.5) * sliceDegrees) % 360 + 360) % 360;
  const currentRotation = ((wheelRotation % 360) + 360) % 360;
  const alignmentRotation = (desiredRotation - currentRotation + 360) % 360;
  const fullTurns = 5 + Math.floor(Math.random() * 3);
  wheelRotation += fullTurns * 360 + alignmentRotation;
  wheelIsSpinning = true;
  setWheelNotice("wheelSpinning");
  renderWheel();

  let finished = false;
  const finishSpin = () => {
    if (finished) return;
    finished = true;
    window.clearTimeout(wheelSpinFallback);
    wheelCanvas.removeEventListener("transitionend", handleTransitionEnd);
    wheelIsSpinning = false;
    wheelState.remaining.splice(selectedIndex, 1);
    wheelState.winners.push(selectedName);
    wheelNamesInput.value = wheelState.remaining.join("\n");
    saveWheelState();
    setWheelNotice("wheelWinner", { name: selectedName });
    renderWheel();
  };
  const handleTransitionEnd = (event) => {
    if (event.target === wheelCanvas && event.propertyName === "transform") finishSpin();
  };

  wheelCanvas.addEventListener("transitionend", handleTransitionEnd);
  wheelSpinFallback = window.setTimeout(finishSpin, 5000);
  requestAnimationFrame(() => {
    wheelCanvas.style.transform = `rotate(${wheelRotation}deg)`;
  });
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setTimeout(finishSpin, 50);
  }
}

function selectTool(selectedTab) {
  [
    { tab: discountTab, panel: discountPanel },
    { tab: targetTab, panel: targetPanel },
    { tab: profitTab, panel: profitPanel },
    { tab: expTab, panel: expPanel },
    { tab: appsTab, panel: appsPanel }
  ].forEach(({ tab, panel }) => {
    const selected = tab === selectedTab;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    panel.hidden = !selected;
    if (selected) animateEntrance(panel);
  });
}

function animateEntrance(element) {
  element.classList.remove("view-enter");
  void element.offsetWidth;
  element.classList.add("view-enter");
}

function showAppChoices() {
  appsHeading.hidden = false;
  appsDescription.hidden = false;
  appPicker.hidden = false;
  animateEntrance(appPicker);
  luckyWheelView.hidden = true;
  stockSupervisorView.hidden = true;
  lotteryAppView.hidden = true;
  showStockFeatureChoices();
  openWheelAppButton.setAttribute("aria-expanded", "false");
  openStockAppButton.setAttribute("aria-expanded", "false");
  openLotteryAppButton.setAttribute("aria-expanded", "false");
}

function showAppView(view, selectedButton) {
  appsHeading.hidden = true;
  appsDescription.hidden = true;
  appPicker.hidden = true;
  luckyWheelView.hidden = view !== luckyWheelView;
  stockSupervisorView.hidden = view !== stockSupervisorView;
  lotteryAppView.hidden = view !== lotteryAppView;
  animateEntrance(view);
  openWheelAppButton.setAttribute("aria-expanded", String(selectedButton === openWheelAppButton));
  openStockAppButton.setAttribute("aria-expanded", String(selectedButton === openStockAppButton));
  openLotteryAppButton.setAttribute("aria-expanded", String(selectedButton === openLotteryAppButton));
}

function showStockFeatureChoices() {
  stockSupervisorOverview.hidden = false;
  stockFeaturePicker.hidden = false;
  incomingExpView.hidden = true;
  animateEntrance(stockSupervisorOverview);
  openIncomingExpButton.setAttribute("aria-expanded", "false");
}

function showStockFeature(view, selectedButton) {
  stockSupervisorOverview.hidden = true;
  stockFeaturePicker.hidden = true;
  incomingExpView.hidden = view !== incomingExpView;
  animateEntrance(view);
  openIncomingExpButton.setAttribute("aria-expanded", String(selectedButton === openIncomingExpButton));
  view.querySelector("h3").focus();
}

document.getElementById("discountForm").addEventListener("submit", (event) => {
  event.preventDefault();
});
document.getElementById("targetForm").addEventListener("submit", (event) => {
  event.preventDefault();
});
document.getElementById("profitForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

[originalPrice, discountRate].forEach((input) => {
  input.addEventListener("input", updateDiscount);
});
[salesTarget, actualSales].forEach((input) => {
  input.addEventListener("input", updateTarget);
});
[purchasePrice, salePrice, profitDiscountRate, profitDiscountAmount].forEach((input) => {
  input.addEventListener("input", updateProfitLoss);
});
profitDiscountModes.forEach((input) => {
  input.addEventListener("change", updateProfitDiscountMode);
});
saveWheelNamesButton.addEventListener("click", saveWheelNames);
spinWheelButton.addEventListener("click", spinWheel);
resetWheelButton.addEventListener("click", resetWheel);
languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
dashboardSearch?.addEventListener("input", () => {
  const query = dashboardSearch.value.trim().toLocaleLowerCase();
  document.querySelectorAll(".tool-tab").forEach((tab) => {
    tab.hidden = Boolean(query) && !tab.textContent.toLocaleLowerCase().includes(query);
  });
});
themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

discountTab.addEventListener("click", () => selectTool(discountTab));
targetTab.addEventListener("click", () => selectTool(targetTab));
profitTab.addEventListener("click", () => selectTool(profitTab));
expTab.addEventListener("click", () => selectTool(expTab));
appsTab.addEventListener("click", () => {
  showAppChoices();
  selectTool(appsTab);
});
openWheelAppButton.addEventListener("click", () => showAppView(luckyWheelView, openWheelAppButton));
openStockAppButton.addEventListener("click", () => {
  showStockFeatureChoices();
  showAppView(stockSupervisorView, openStockAppButton);
});
openLotteryAppButton.addEventListener("click", () => showAppView(lotteryAppView, openLotteryAppButton));
openIncomingExpButton.addEventListener("click", () => showStockFeature(incomingExpView, openIncomingExpButton));
document.querySelectorAll("[data-stock-back]").forEach((button) => {
  button.addEventListener("click", () => {
    showStockFeatureChoices();
    openIncomingExpButton.focus();
  });
});
document.querySelectorAll("[data-app-back]").forEach((button) => {
  button.addEventListener("click", () => {
    let selectedButton = openWheelAppButton;
    if (button.closest("#stockSupervisorView")) selectedButton = openStockAppButton;
    if (button.closest("#lotteryAppView")) selectedButton = openLotteryAppButton;
    showAppChoices();
    selectedButton.focus();
  });
});

const lotteryCheckForm = document.getElementById("lotteryCheckForm");
const lotteryNumber = document.getElementById("lotteryNumber");

lotteryNumber?.addEventListener("input", () => {
  lotteryNumber.value = lotteryNumber.value.replace(/\D/g, "");
});

lotteryCheckForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});

function formatExpDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  return `${day}-${month}-${date.getFullYear()}`;
}

function readExpDateParts(dateFields) {
  if (!dateFields || !dateFields.day || !dateFields.month || !dateFields.year) return null;
  const day = Number(dateFields.day.value);
  const month = Number(dateFields.month.value);
  const year = Number(dateFields.year.value);
  if (!day || !month || !year) return null;
  return [year, month, day];
}

function initializeExpYearSelect(select, selectedYear = 2026) {
  if (!select) return;

  const fragment = document.createDocumentFragment();
  for (let year = 1900; year <= 2100; year += 1) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    option.selected = year === selectedYear;
    fragment.appendChild(option);
  }
  select.replaceChildren(fragment);
}

const expDirectForm = document.getElementById("expDirectForm");
const expDirectManufactureDate = {
  day: document.getElementById("expDirectDay"),
  month: document.getElementById("expDirectMonth"),
  year: document.getElementById("expDirectYear")
};
initializeExpYearSelect(expDirectManufactureDate.year, 2026);
const expDirectYears = document.getElementById("expDirectYears");
const expDirectMonths = document.getElementById("expDirectMonths");
const expDirectResultDate = document.getElementById("expDirectResultDate");
const expDirectCalculationDetail = document.getElementById("expDirectCalculationDetail");

function updateDirectExpExpiration() {
  if (!expDirectManufactureDate || !expDirectYears || !expDirectMonths) return;

  const dateParts = readExpDateParts(expDirectManufactureDate);
  const years = Math.max(0, Number(expDirectYears.value) || 0);
  const months = Math.max(0, Number(expDirectMonths.value) || 0);
  if (!dateParts) return;

  const originalMonth = dateParts[1] - 1;
  const originalDay = dateParts[2];
  const totalMonths = years * 12 + months;
  const targetMonthIndex = originalMonth + totalMonths;
  const targetYear = dateParts[0] + Math.floor(targetMonthIndex / 12);
  const targetMonth = ((targetMonthIndex % 12) + 12) % 12;
  const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();
  const expiration = new Date(targetYear, targetMonth, Math.min(originalDay, lastDay));

  expDirectResultDate.textContent = formatExpDate(expiration);
  expDirectCalculationDetail.textContent =
    `${formatExpDate(new Date(dateParts[0], originalMonth, originalDay))} + ` +
    `${years ? `${years} ${translate("expYearLabel")} ` : ""}` +
    `${months ? `${months} ${translate("expMonthLabel")}` : ""}`.trim();
}

expDirectForm?.addEventListener("input", updateDirectExpExpiration);
expDirectForm?.addEventListener("change", updateDirectExpExpiration);
expDirectForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  updateDirectExpExpiration();
});
document.getElementById("aboutButton").addEventListener("click", () => {
  aboutDialog.showModal();
});
document.getElementById("settingsButton").addEventListener("click", () => {
  settingsDialog.showModal();
});
document.getElementById("closeAbout").addEventListener("click", () => {
  aboutDialog.close();
});
document.getElementById("closeSettings").addEventListener("click", () => {
  settingsDialog.close();
});
aboutDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") aboutDialog.close();
});
aboutDialog.addEventListener("click", (event) => {
  if (event.target === aboutDialog) aboutDialog.close();
});
settingsDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") settingsDialog.close();
});
settingsDialog.addEventListener("click", (event) => {
  if (event.target === settingsDialog) settingsDialog.close();
});
window.setTimeout(() => {
  intro.classList.add("dismissed");
}, 1000);

initializeWheel();
setLanguage("km");
setTheme(localStorage.getItem("dragon-calculator-theme") === "dark" ? "dark" : "light");
updateDirectExpExpiration();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The app still works normally if offline caching is unavailable.
    });
  });
}
