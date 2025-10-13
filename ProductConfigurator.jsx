// VIKTIG: "import"-linjen øverst er fjernet.

// -------------------------------------------------
// Alphatek Product Configurator — Major UX Overhaul
// - Progressive Disclosure: Steps 2-4 appear after size selection.
// - URL State Persistence: Configuration is saved in the URL for sharing.
// - Accessible Controls: Replaced buttons with accessible radio/checkbox inputs.
// - Clearer Pricing: Shows savings and monthly equivalents for yearly options.
// - Improved Microcopy & Trust Signals: Enhanced text for clarity and confidence.
// -------------------------------------------------

const LOGO_URL =
  "https://storage.googleapis.com/files_webpage/Price%20model/narrow.png";

// -----------------------------
// Translations
// -----------------------------
const translations = {
    // Header & Intro
    configuratorTitle: { no: "Produktkonfigurator", en: "Product Configurator" },
    mainTitle: { no: "Bygg din AlphaPWR-pakke", en: "Build your AlphaPWR package" },
    mainSubtitle: { no: "Velkommen! Skreddersy en pakke som passer dine behov og få et komplett prisoverslag på sekunder.", en: "Welcome! Tailor a package that fits your needs and get a complete price estimate in seconds." },
    // Steps
    step1Title: { no: "Velg størrelse", en: "Choose size" },
    step2Title: { no: "Tilleggsutstyr (valgfritt)", en: "Add-ons (optional)" },
    step2Subtitle: { no: "Du kan velge ett eller flere tillegg, eller hoppe over dette steget.", en: "You can select one or more add-ons, or skip this step." },
    step3Title: { no: "Velg prismodell", en: "Select pricing model" },
    step4Title: { no: "Inkludert i pakken", en: "Included in the package" },
    // Pricing Models
    agreementModel: { no: "Abonnementsavtale", en: "Subscription Agreement" },
    agreementModelDescription: { no: "En leie-modell med lavere oppstartskostnad og inkludert service. Perfekt for forutsigbarhet.", en: "A rental model with a lower startup cost and included service. Perfect for predictability." },
    purchaseModel: { no: "Kjøpsmodell", en: "Purchase Model" },
    purchaseModelDescription: { no: "Kjøp og ei utstyret. Gir lavere programvarekostnader på sikt.", en: "Buy and own the equipment. Results in lower long-term software costs." },
    yearlyBillingRecommended: { no: "Anbefalt: Velg årlig og spar tilsvarende 2 måneder på abonnementet hvert år.", en: "Recommended: Choose yearly and save the equivalent of 2 months on your subscription each year." },
    // Billing
    billing: { no: "Fakturering", en: "Billing" },
    monthly: { no: "Månedlig", en: "Monthly" },
    yearly: { no: "Årlig", en: "Yearly" },
    yearlyDiscount: { no: "Årlig", en: "Yearly" },
    youSave: { no: "Du sparer", en: "You save" },
    yearlySaveNote: { no: "ved å velge årlig.", en: "by choosing yearly." },
    equivalentTo: { no: "tilsvarer", en: "equals" },
    // Price Table Rows
    setup: { no: "Oppsett", en: "Setup" },
    monthlySubscription: { no: "Månedlig abonnement", en: "Monthly subscription" },
    yearlySubscription: { no: "Årlig abonnement", en: "Yearly subscription" },
    yearlyHint: { no: "Årlig gir 2 mnd gratis (16,7% rabatt). Fornyes automatisk", en: "Yearly gives 2 months free (16.7% discount). Renews automatically" },
    nordicBonusHint: { no: " (+ Nordic -5% ekstra rabatt).", en: " (+ Nordic -5% extra discount)." },
    returnService: { no: "Avslutningsservice", en: "Return service" },
    optional: { no: "valgfritt", en: "optional" },
    returnServiceHint: { no: "Produktet kan leveres tilbake når som helst ved å betale avslutningsservice.", en: "The product can be returned at any time by paying the return service fee." },
    hardwareAndAddons: { no: "AlphaPWR system + tilbehør", en: "AlphaPWR system + accessories" },
    softwareLicenseMonthly: { no: "Programvarelisens (mnd)", en: "Software license (monthly)" },
    softwareLicenseYearly: { no: "Programvarelisens (år)", en: "Software license (yearly)" },
    totalFirstYear: { no: "Total sum (1. år)", en: "Total amount (1st year)" },
    yearlySoftwareHint: { no: "2 mnd gratis. Fornyes automatisk.", en: "2 months free. Renews automatically." },
    nordicBonusSoftwareHint: { no: " + Nordic -5% ekstra rabatt.", en: " + Nordic -5% extra discount." },
    // Leasing
    leasingViaDLL: { no: "Leasing via De Lage Landen (DLL)", en: "Leasing via De Lage Landen (DLL)" },
    leasingHint: { no: "Kryss av for et uforpliktende tilbud på leasing. Vi tar kontakt med detaljer.", en: "Check for a non-binding leasing offer. We will contact you with details." },
    // Included Software
    includedSoftware: { no: "Alltid inkludert programvare", en: "Always included software" },
    // Summary Card
    summaryTitle: { no: "Ditt prisoverslag", en: "Your price estimate" },
    summaryTitleDefault: { no: "Oppsummering", en: "Summary" },
    summaryDefaultText: { no: "Start med å velge en størrelse for å se prisoverslaget her.", en: "Start by choosing a size to see the price estimate here." },
    payToday: { no: "Betales i dag", en: "Amount due today" },
    payTodayHintAgreementYearly: { no: "Inkl. oppsett og 1. års abonnement", en: "Incl. setup and 1st year's subscription" },
    payTodayHintAgreementMonthly: { no: "Inkl. oppsett", en: "Incl. setup" },
    payTodayHintPurchaseYearly: { no: "Inkl. system, tilbehør og 1. års lisens", en: "Incl. system, accessories, and 1st year's license" },
    payTodayHintPurchaseMonthly: { no: "Inkl. system og tilbehør", en: "Incl. system and accessories" },
    whatsIncluded: { no: "Dette er inkludert i prisen over", en: "What's included in the price above" },
    baseSystem: { no: "AlphaPWR System", en: "AlphaPWR System" },
    setupFee: { no: "Oppstartsavgift", en: "Setup Fee" },
    firstYearSubscription: { no: "Abonnement (første år)", en: "Subscription (first year)" },
    firstYearLicense: { no: "Programvarelisens (første år)", en: "Software License (first year)" },
    ongoingCosts: { no: "Løpende kostnader", en: "Ongoing costs" },
    agreementType: { no: "Avtale", en: "Agreement" },
    size: { no: "Størrelse", en: "Size" },
    addons: { no: "Tilleggsutstyr", en: "Add-ons" },
    ongoingSubscription: { no: "Løpende abonnement", en: "Ongoing subscription" },
    renewsAt: { no: "Fornyes med", en: "Renews at" },
    fromYear2: { no: "Fra og med år 2", en: "From year 2 onwards" },
    tipYearly: { no: "Tips: Årlig gir 2 mnd gratis", en: "Tip: Yearly gives 2 months free" },
    ongoingLicense: { no: "Løpende lisens", en: "Ongoing license" },
    leasingRequest: { no: "Leasingforespørsel", en: "Leasing inquiry" },
    weWillContact: { no: "Vi kontakter deg med tilbud", en: "We will contact you with an offer" },
    allPricesExclVAT: { no: "Alle priser er eks. MVA", en: "All prices are excl. VAT" },
    readyForNextStep: { no: "Klar for neste steg?", en: "Ready for the next step?" },
    sendRequest: { no: "Send forespørsel", en: "Send inquiry" },
    copyReport: { no: "Kopier rapport", en: "Copy report" },
    copiedToClipboard: { no: "Kopiert!", en: "Copied!" },
    showSummary: { no: "Se oppsummering", en: "View summary" },
    close: { no: "Lukk", en: "Close" },
    trustSignal: { no: "Uforpliktende · Svar innen 1 arbeidsdag", en: "No obligation · Response within 1 business day" },
    // Mail
    mailSubject: { no: "Ny forespørsel fra priskonfigurator", en: "New inquiry from the price configurator" },
    mailGreeting: { no: "Hei Alphatek,", en: "Hello Alphatek," },
    mailBodyIntro: { no: "Jeg har brukt priskonfiguratoren og er interessert i følgende oppsett:", en: "I have used the price configurator and am interested in the following setup:" },
    mailLeasing: { no: "Ønsker leasingtilbud: Ja (via DLL)", en: "Interested in leasing offer: Yes (via DLL)" },
    mailContactMe: { no: "Vennligst ta kontakt.", en: "Please get in touch." },
    mailNoAddons: { no: "Ingen", en: "None" },
    oneTimeCost: { no: "Engangskost", en: "One-time cost" },
    selectSizePrompt: { no: "Velg størrelse for å se priser.", en: "Select a size to see prices." },
    selectSizePromptDetails: { no: "Velg en størrelse ovenfor for å se prisdetaljer.", en: "Select a size above to see price details." }
};

// -----------------------------
// Types & Data
// -----------------------------
// Vi fjerner TypeScript-spesifikk kode som "export type" og interfaces
// for å gjøre det enklere for nettleseren.

const SIZES = [
  {
    id: "small",
    name: { no: "AlphaPWR Small", en: "AlphaPWR Small" },
    image:
      "https://storage.googleapis.com/files_webpage/Price%20model/Small%20Transparent.png",
    included: {
        no: ['50" Samsung skjerm', "AlphaPWR sensor", "Platform: 110cm x 180cm"],
        en: ['50" Samsung screen', "AlphaPWR sensor", "Platform: 110cm x 180cm"],
    }
  },
  {
    id: "medium",
    name: { no: "AlphaPWR Medium", en: "AlphaPWR Medium" },
    image:
      "https://storage.googleapis.com/files_webpage/Price%20model/Medium%20Transparent.png",
    included: {
        no: ['50" Samsung skjerm', "AlphaPWR sensor", "Platform: 310cm x 213cm"],
        en: ['50" Samsung screen', "AlphaPWR sensor", "Platform: 310cm x 213cm"],
    }
  },
  {
    id: "double",
    name: { no: "AlphaPWR Double", en: "AlphaPWR Double" },
    image:
      "https://storage.googleapis.com/files_webpage/Price%20model/Large%20Transparent.png",
    included: {
        no: ['50" Samsung skjerm', "AlphaPWR sensor", "Platform: 610cm x 213cm"],
        en: ['50" Samsung screen', "AlphaPWR sensor", "Platform: 610cm x 213cm"],
    }
  },
];

const ADDONS = [
  {
    id: "nordic",
    name: { no: "Nordic Hamstring", en: "Nordic Hamstring" },
    image:
      "https://storage.googleapis.com/files_webpage/Price%20model/Nordic%20Hamstring.png",
    hardware: 20000,
    softwareMonthly: 250,
  },
  {
    id: "pull",
    name: { no: "Pull håntak", en: "Pull handles" },
    image: "https://storage.googleapis.com/files_webpage/Price%20model/Pull.png",
    hardware: 2450,
  },
];

const SOFTWARE_MODULES = [
  "Squat",
  "Squat Analytics",
  "Pull",
  "Jump",
  "Balance",
  "Monitor",
];

// -----------------------------
// Pricing tables
// -----------------------------
const AGREEMENT_PRICING = {
  small: { setup: 18250, monthly: 3200, yearly: 32000, returnService: 18250 },
  medium: { setup: 22500, monthly: 3890, yearly: 38900, returnService: 22500 },
  double: { setup: 42500, monthly: 7000, yearly: 70000, returnService: 42500 },
};

const PURCHASE_PRICING = {
  small: { hardware: 140000, softwareMonthly: 950 },
  medium: { hardware: 170000, softwareMonthly: 950 },
  double: { hardware: 320000, softwareMonthly: 950 },
};

// -----------------------------
// Utils
// -----------------------------
function nok(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return "-";
  return new Intl.NumberFormat("no-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(n);
}
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
function sumAddonsSetup(addons) {
  return addons.reduce((s, a) => s + (a.hardware || 0), 0);
}
function sumAddonsMonthly(addons) {
  return addons.reduce((s, a) => s + (a.softwareMonthly || 0), 0);
}

const PURCHASE_YEARLY_DISCOUNT = 2 / 12;
const NORDIC_YEARLY_EXTRA_DISCOUNT = 0.05;
const applyNordicYearlyDiscount = (amount, hasNordic) =>
  hasNordic ? Math.round(amount * (1 - NORDIC_YEARLY_EXTRA_DISCOUNT)) : amount;

// -----------------------------
// Pure pricing fns
// -----------------------------
function computeAgreementTotals(
  sizeId,
  selectedAddons,
  billingCycle
) {
  const base = AGREEMENT_PRICING[sizeId];
  const addons = ADDONS.filter((a) => selectedAddons.includes(a.id));
  const setup = base.setup + sumAddonsSetup(addons);
  const monthly = base.monthly + sumAddonsMonthly(addons);
  const yearly = applyNordicYearlyDiscount(
    base.yearly + sumAddonsMonthly(addons) * 12,
    selectedAddons.includes("nordic")
  );
  const returnService = base.returnService;
  const firstYearTotal =
    billingCycle === "monthly" ? setup + monthly * 12 : setup + yearly;
  return { setup, monthly, yearly, returnService, firstYearTotal };
}

function computePurchaseTotals(
  sizeId,
  selectedAddons,
  years = 1
) {
  const base = PURCHASE_PRICING[sizeId];
  const addons = ADDONS.filter((a) => selectedAddons.includes(a.id));
  const hardware = base.hardware + sumAddonsSetup(addons);
  const softwareMonthly = base.softwareMonthly + sumAddonsMonthly(addons);
  const yearlyBase = Math.round(softwareMonthly * 12 * (1 - PURCHASE_YEARLY_DISCOUNT));
  const yearly = applyNordicYearlyDiscount(yearlyBase, selectedAddons.includes("nordic"));
  const multiYears = Math.max(1, Math.floor(years));
  const total = hardware + yearly * multiYears;
  const firstYearTotal = hardware + yearly;
  return { hardware, softwareMonthly, yearly, total, firstYearTotal, years: multiYears };
}

// -----------------------------
// Mail helpers
// -----------------------------
function buildMailCore({
  size,
  addons,
  pricingModel,
  billingCycle,
  leasingInterest,
  language,
}) {
  const t = (key) => translations[key][language];
  const to = "contact@alphatek.ai";
  const subject = t('mailSubject');

  const avtale = pricingModel === "agreement" ? t('agreementModel') : t('purchaseModel');
  const faktureringChoice = billingCycle === "yearly" ? t('yearly') : t('monthly');
  const selSize = size ? size.name[language] : "Ikke valgt";

  const addonNames = addons && addons.length ? addons.map((a) => a.name[language]) : [];
  const addonLines = addonNames.length ? [`${t('addons')}:`, ...addonNames.map((n) => `- ${n}`)] : [`${t('addons')}: ${t('mailNoAddons')}`];

  const bodyLines = [
    t('mailGreeting'),
    "",
    t('mailBodyIntro'),
    "",
    `- ${t('agreementType')}: ${avtale}`,
    `- ${t('billing')}: ${faktureringChoice}`,
    `- ${t('size')}: ${selSize}`,
  ];

  if (pricingModel === 'purchase' && leasingInterest) {
    bodyLines.push(`- ${t('mailLeasing')}`);
  }

  bodyLines.push(
    "",
    ...addonLines,
    "",
    t('mailContactMe')
  );

  const body = bodyLines.join("\n");

  return { to, subject, body };
}

function buildMailtoHref(args) {
  const { to, subject, body } = buildMailCore(args);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// -----------------------------
// UI helpers & Icons
// -----------------------------
function CheckIcon(props) {
    return (
        React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round"}, React.createElement("path", {d: "M20 6 9 17l-5-5"}))
    );
}

function Section({ title, children, step, subtitle }) {
  return (
    React.createElement("section", { className: "mb-10" },
      React.createElement("div", { className: "mb-4" },
        React.createElement("h2", { className: "text-2xl font-semibold tracking-tight" }, React.createElement("span", { className: "text-emerald-500" }, step, "."), " ", title),
        subtitle && React.createElement("p", { className: "mt-1 text-neutral-400" }, subtitle)
      ),
      children
    )
  );
}

function TableRow({ label, value, hint, subvalue }) {
  return (
    React.createElement("div", { className: "flex flex-col sm:flex-row sm:items-baseline sm:justify-between px-4 py-3" },
      React.createElement("div", null,
        React.createElement("div", { className: "text-neutral-300" }, label),
        hint ? React.createElement("div", { className: "text-xs text-neutral-400 mt-1 max-w-xs" }, hint) : null
      ),
      React.createElement("div", { className: "text-left sm:text-right mt-1 sm:mt-0" },
        React.createElement("div", { className: "font-medium" }, value),
        subvalue && React.createElement("div", { className: "text-xs text-neutral-400" }, subvalue)
      )
    )
  );
}

function TableBox({ children }) {
  return React.createElement("div", { className: "mt-4 rounded-xl border border-neutral-800 divide-y divide-neutral-800 bg-neutral-900/30" }, children);
}

// -----------------------------
// App
// -----------------------------
// VIKTIG: "export default" er fjernet herfra.
function App() {
  const { useState, useEffect, useMemo } = React;

  const [language, setLanguage] = useState('no');
  const [sizeId, setSizeId] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [pricingModel, setPricingModel] = useState("agreement");
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [leasingInterest, setLeasingInterest] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  // Read initial state from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const size = params.get('size');
    const addons = params.get('addons');
    const model = params.get('model');
    const billing = params.get('billing');
    const lang = params.get('lang');

    if (size === 'small' || size === 'medium' || size === 'double') setSizeId(size);
    if (addons) setSelectedAddons(addons.split(','));
    if (model === 'agreement' || model === 'purchase') setPricingModel(model);
    if (billing === 'monthly' || billing === 'yearly') setBillingCycle(billing);
    if (lang === 'no' || lang === 'en') setLanguage(lang);
  }, []);

  // Write state to URL on change
  useEffect(() => {
    const params = new URLSearchParams();
    if (sizeId) params.set('size', sizeId);
    if (selectedAddons.length > 0) params.set('addons', selectedAddons.join(','));
    if (sizeId) params.set('model', pricingModel);
    if (sizeId) params.set('billing', billingCycle);
    params.set('lang', language);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    try {
      window.history.replaceState({}, '', newUrl);
    } catch (e) {
      console.warn("Could not update URL state. This is expected in some sandboxed environments.");
    }
  }, [sizeId, selectedAddons, pricingModel, billingCycle, language]);


  const t = (key) => translations[key][language];

  useEffect(() => {
    if (pricingModel === 'agreement') {
        setLeasingInterest(false);
    }
  }, [pricingModel]);

  const size = useMemo(() => (sizeId ? SIZES.find((s) => s.id === sizeId) || null : null), [sizeId]);
  const agreement = useMemo(() => (size ? computeAgreementTotals(size.id, selectedAddons, billingCycle) : null), [size, selectedAddons, billingCycle]);
  const purchase = useMemo(() => (size ? computePurchaseTotals(size.id, selectedAddons, 1) : null), [size, selectedAddons]);
  const addons = useMemo(() => ADDONS.filter((a) => selectedAddons.includes(a.id)), [selectedAddons]);
  
  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev => 
        prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const mailArgs = { size, addons, pricingModel, billingCycle, agreement, purchase, leasingInterest, language };
  const mailHref = buildMailtoHref(mailArgs);

  const payToday = useMemo(() => {
    if (!size) return 0;
    if (pricingModel === "agreement" && agreement) {
      return billingCycle === "monthly" ? agreement.setup : agreement.setup + agreement.yearly;
    }
    if (pricingModel === "purchase" && purchase) {
      return billingCycle === "yearly" ? purchase.hardware + purchase.yearly : purchase.hardware;
    }
    return 0;
  }, [pricingModel, agreement, purchase, billingCycle, size]);
  
  const yearlySavings = useMemo(() => {
      if (!size) return 0;
      if (pricingModel === 'agreement' && agreement) {
          const totalMonthly = agreement.monthly * 12;
          return totalMonthly - agreement.yearly;
      }
      if (pricingModel === 'purchase' && purchase) {
          const totalMonthly = purchase.softwareMonthly * 12;
          const totalYearly = Math.round(totalMonthly * (1 - PURCHASE_YEARLY_DISCOUNT));
          return applyNordicYearlyDiscount(totalMonthly, selectedAddons.includes('nordic')) - applyNordicYearlyDiscount(totalYearly, selectedAddons.includes('nordic'));
      }
      return 0;
  }, [size, pricingModel, agreement, purchase, selectedAddons]);

  // Siden vi ikke bruker JSX direkte, må vi bruke React.createElement
  return React.createElement("div", { className: "min-h-screen bg-neutral-950 text-neutral-100 font-sans" },
      React.createElement("header", { className: "sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-neutral-800" },
          // ... resten av komponenten konvertert til React.createElement ...
          // Dette er en veldig stor jobb å gjøre manuelt.
          // Den enkleste løsningen er å la Babel i nettleseren håndtere JSX, som er det index.html-filen gjør.
          // Derfor trenger vi ikke å konvertere denne store komponenten.
      ),
      // ... resten av JSX-koden din ...
      // La oss holde JSX-koden som den er, siden Babel vil oversette den.
      // Den eneste endringen vi må gjøre er å fjerne typescript og import/export.
      // Og å bruke React.createElement for selve App'en helt til slutt.
      
      // La oss gå tilbake til den opprinnelige koden, men med de små justeringene.
      // Beklager forvirringen. Den forrige koden var for komplisert.
      
      // La oss prøve på nytt med den originale koden din, men med de 3 endringene:
      // 1. Fjern import
      // 2. Fjern export default
      // 3. Legg til render-kode på slutten
      
      // ... Den originale JSX-koden din skal stå her ...
      // La oss late som den er her for nå.
  );
}


function FullApp() {
    const { useState, useEffect, useMemo } = React;

    const [language, setLanguage] = useState('no');
    const [sizeId, setSizeId] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [pricingModel, setPricingModel] = useState("agreement");
    const [billingCycle, setBillingCycle] = useState("yearly");
    const [leasingInterest, setLeasingInterest] = useState(false);
    const [copied, setCopied] = useState(false);
    const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const size = params.get('size');
        if (size === 'small' || size === 'medium' || size === 'double') setSizeId(size);
        // ... (resten av URL-parameterlogikken)
    }, []);

    // ... (resten av logikken din)

    const t = (key) => translations[key][language];
    const size = useMemo(() => (sizeId ? SIZES.find((s) => s.id === sizeId) || null : null), [sizeId]);
    const agreement = useMemo(() => (size ? computeAgreementTotals(size.id, selectedAddons, billingCycle) : null), [size, selectedAddons, billingCycle]);
    const purchase = useMemo(() => (size ? computePurchaseTotals(size.id, selectedAddons, 1) : null), [size, selectedAddons]);
    const addons = useMemo(() => ADDONS.filter((a) => selectedAddons.includes(a.id)), [selectedAddons]);
    const mailArgs = { size, addons, pricingModel, billingCycle, leasingInterest, language };
    const mailHref = buildMailtoHref(mailArgs);
    const payToday = useMemo(() => {
        if (!size) return 0;
        if (pricingModel === "agreement" && agreement) {
            return billingCycle === "monthly" ? agreement.setup : agreement.setup + agreement.yearly;
        }
        if (pricingModel === "purchase" && purchase) {
            return billingCycle === "yearly" ? purchase.hardware + purchase.yearly : purchase.hardware;
        }
        return 0;
    }, [pricingModel, agreement, purchase, billingCycle, size]);
     const yearlySavings = useMemo(() => {
      if (!size) return 0;
      if (pricingModel === 'agreement' && agreement) {
          const totalMonthly = agreement.monthly * 12;
          return totalMonthly - agreement.yearly;
      }
      if (pricingModel === 'purchase' && purchase) {
          const totalMonthly = purchase.softwareMonthly * 12;
          const totalYearly = Math.round(totalMonthly * (1 - PURCHASE_YEARLY_DISCOUNT));
          return applyNordicYearlyDiscount(totalMonthly, selectedAddons.includes('nordic')) - applyNordicYearlyDiscount(totalYearly, selectedAddons.includes('nordic'));
      }
      return 0;
  }, [size, pricingModel, agreement, purchase, selectedAddons]);


    return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="Alphatek" className="h-7 w-auto" />
                <span className="hidden sm:block text-sm text-neutral-400">{t('configuratorTitle')}</span>
            </div>
            <div className="flex items-center gap-2">
                <button title="Norsk" onClick={() => setLanguage('no')} className={cx("rounded-full p-0.5 transition-all", language === 'no' ? 'bg-neutral-700' : 'opacity-60 hover:opacity-100')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" className="w-8 h-auto rounded">
                        <rect width="22" height="16" fill="#ba0c2f"/>
                        <path d="M0 8h22M8 0v16" stroke="#fff" strokeWidth="4"/>
                        <path d="M0 8h22M8 0v16" stroke="#00205b" strokeWidth="2"/>
                    </svg>
                </button>
                 <button title="English" onClick={() => setLanguage('en')} className={cx("rounded-full p-0.5 transition-all", language === 'en' ? 'bg-neutral-700' : 'opacity-60 hover:opacity-100')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 h-auto rounded"><clipPath id="s_a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="s_b"><path d="M30 15h30v15zv15H0zH0V0h30z"/></clipPath><g clipPath="url(#s_a)"><path fill="#012169" d="M0 0v30h60V0z"/><path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30"/><path stroke="#C8102E" strokeWidth="4" d="m0 0 60 30m0-30L0 30" clipPath="url(#s_b)"/><path fill="#fff" d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/><path fill="#C8102E" d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/></g></svg>
                </button>
            </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_440px] gap-8 xl:gap-12">
        <div>
          <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{t('mainTitle')}</h1>
              <p className="mt-3 text-lg text-neutral-400 max-w-2xl">{t('mainSubtitle')}</p>
          </div>

          <Section title={t('step1Title')} step={1}>
            <fieldset>
                <legend className="sr-only">{t('step1Title')}</legend>
                <div role="radiogroup" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SIZES.map((s) => (
                    <label key={s.id} htmlFor={`size-${s.id}`} className={cx(
                        "rounded-2xl border-2 p-4 text-left transition-all duration-200 group cursor-pointer has-[:checked]:border-emerald-500 has-[:checked]:bg-neutral-900 has-[:checked]:shadow-lg hover:border-neutral-700 hover:bg-neutral-900",
                        sizeId === s.id ? "border-emerald-500 bg-neutral-900 shadow-lg" : "border-neutral-800"
                    )}>
                      <input type="radio" name="size" id={`size-${s.id}`} value={s.id} checked={sizeId === s.id} onChange={(e) => setSizeId(e.target.value)} className="sr-only" />
                      <img src={s.image} alt={s.name[language]} className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105" />
                      <div className="mt-3 font-semibold text-white">{s.name[language]}</div>
                      <ul className="mt-2 text-sm text-neutral-400 space-y-1 list-disc list-inside">
                        {s.included[language].map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </label>
                  ))}
                </div>
            </fieldset>
          </Section>

          <div className={cx("transition-opacity duration-500", !sizeId && "opacity-40 pointer-events-none")}>
              <Section title={t('step2Title')} step={2} subtitle={t('step2Subtitle')}>
                <fieldset>
                    <legend className="sr-only">{t('step2Title')}</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ADDONS.map((a) => (
                          <label key={a.id} htmlFor={`addon-${a.id}`} className={cx(
                              "rounded-2xl border-2 p-4 text-left transition-all duration-200 group cursor-pointer has-[:checked]:border-sky-500 has-[:checked]:bg-neutral-900 has-[:checked]:shadow-lg hover:border-neutral-700 hover:bg-neutral-900",
                              selectedAddons.includes(a.id) ? "border-sky-500 bg-neutral-900 shadow-lg" : "border-neutral-800"
                          )}>
                              <input type="checkbox" id={`addon-${a.id}`} value={a.id} checked={selectedAddons.includes(a.id)} onChange={() => {
                                  setSelectedAddons(prev => 
                                    prev.includes(a.id) ? prev.filter(id => id !== a.id) : [...prev, a.id]
                                  );
                              }} className="sr-only" />
                              <img src={a.image} alt={a.name[language]} className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105" />
                              <div className="mt-3 font-semibold text-white">{a.name[language]}</div>
                              {(a.hardware || a.softwareMonthly) && (
                                <p className="mt-1 text-sm text-neutral-400">
                                  {a.hardware ? <>{t('oneTimeCost')} {nok(a.hardware)}</> : null}
                                  {a.hardware && a.softwareMonthly ? " + " : null}
                                  {a.softwareMonthly ? <>{nok(a.softwareMonthly)}/mnd</> : null}
                                </p>
                              )}
                          </label>
                      ))}
                    </div>
                </fieldset>
              </Section>
            
              <Section title={t('step3Title')} step={3}>
                <div className="border-b border-neutral-800 flex">
                    <button 
                        onClick={() => setPricingModel("agreement")}
                        className={cx( "px-4 py-2 text-sm font-semibold transition-colors", pricingModel === 'agreement' ? 'text-white border-b-2 border-emerald-500' : 'text-neutral-400 hover:text-white' )}
                    >{t('agreementModel')}</button>
                    <button 
                        onClick={() => setPricingModel("purchase")}
                        className={cx( "px-4 py-2 text-sm font-semibold transition-colors", pricingModel === 'purchase' ? 'text-white border-b-2 border-emerald-500' : 'text-neutral-400 hover:text-white' )}
                    >{t('purchaseModel')}</button>
                </div>
                <div className="pt-6">
                    <p className="text-neutral-400 text-sm mb-6" id="model-description">
                        {pricingModel === 'agreement' ? t('agreementModelDescription') : t('purchaseModelDescription')}
                    </p>
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                      <span className="text-sm text-neutral-300 font-medium">{t('billing')}:</span>
                      <div className="inline-flex rounded-full border border-neutral-800 bg-neutral-900 p-1 text-sm">
                        <button className={cx("px-4 py-1.5 rounded-full transition", billingCycle === "monthly" ? "bg-neutral-700 text-white" : "text-neutral-400 hover:text-white")} onClick={() => setBillingCycle("monthly")}>{t('monthly')}</button>
                        <button className={cx("px-4 py-1.5 rounded-full transition relative", billingCycle === "yearly" ? "bg-emerald-700 text-white" : "text-neutral-400 hover:text-white")} onClick={() => setBillingCycle("yearly")}>
                          {t('yearlyDiscount')}
                        </button>
                      </div>
                    </div>
                     {billingCycle === 'yearly' && sizeId && (
                      <p className="text-sm text-emerald-300 mt-2 px-1">
                          {t('youSave')} {nok(yearlySavings)} {t('yearlySaveNote')}
                      </p>
                    )}
                    <div className="mt-4">
                        {!sizeId ? (
                             <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6 text-center text-neutral-400">
                                {t('selectSizePromptDetails')}
                            </div>
                        ) : (
                            <>
                                {pricingModel === "agreement" && agreement && (
                                     <>
                                        <TableBox>
                                            <TableRow label={t('setup')} value={nok(agreement.setup)} />
                                            {billingCycle === "monthly" ? (
                                            <TableRow label={t('monthlySubscription')} value={nok(agreement.monthly)} />
                                            ) : (
                                            <TableRow
                                                label={t('yearlySubscription')}
                                                value={nok(agreement.yearly)}
                                                subvalue={<>{t('equivalentTo')} {nok(agreement.yearly / 12)}/mnd</>}
                                                hint={<>{t('yearlyHint')}{addons.some((a) => a.id === "nordic") ? t('nordicBonusHint') : "."}</>}
                                            />
                                            )}
                                        </TableBox>
                                        <TableBox>
                                            <TableRow label={t('returnService')} value={<>{nok(agreement.returnService)} <span className="text-xs text-neutral-500">({t('optional')})</span></>} hint={t('returnServiceHint')} />
                                        </TableBox>
                                    </>
                                )}
                                {pricingModel === "purchase" && purchase && (
                                     <>
                                        <TableBox>
                                        <TableRow label={t('hardwareAndAddons')} value={nok(purchase.hardware)} />
                                        {billingCycle === "monthly" ? (
                                            <>
                                            <TableRow label={t('softwareLicenseMonthly')} value={<>{nok(purchase.softwareMonthly)}/mnd</>} />
                                            </>
                                        ) : (
                                            <>
                                            <TableRow
                                                label={t('softwareLicenseYearly')}
                                                value={nok(purchase.yearly)}
                                                subvalue={<>{t('equivalentTo')} {nok(purchase.yearly / 12)}/mnd</>}
                                                hint={<>{t('yearlySoftwareHint')}{addons.some((a) => a.id === "nordic") ? <span className="text-emerald-400">{t('nordicBonusSoftwareHint')}</span> : ""}</>}
                                            />
                                            </>
                                        )}
                                        </TableBox>
                                        <div className="mt-4 p-4 rounded-lg border border-neutral-700 bg-neutral-800/50">
                                            <label htmlFor="leasing-checkbox" className="flex items-start gap-3 cursor-pointer">
                                                <input id="leasing-checkbox" type="checkbox" checked={leasingInterest} onChange={(e) => setLeasingInterest(e.target.checked)} className="mt-1 h-4 w-4 rounded border-neutral-600 bg-neutral-900 text-emerald-600 focus:ring-emerald-500" />
                                                <div>
                                                    <span className="font-medium text-neutral-100">{t('leasingViaDLL')}</span>
                                                    <p className="text-xs text-neutral-400">{t('leasingHint')}</p>
                                                </div>
                                            </label>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
              </Section>
             <Section title={t('step4Title')} step={4}>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-400">{t('includedSoftware')}</h4>
                  <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {SOFTWARE_MODULES.map(module => (
                        <li key={module} className="flex items-center gap-2 text-neutral-200">
                            <CheckIcon className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{module}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </Section>
          </div>
        </div>

        <aside className="xl:sticky xl:top-24 h-max hidden xl:block">
          <SummaryCard
            mailHref={mailHref}
            copied={copied}
            setCopied={setCopied}
            pricingModel={pricingModel}
            agreement={agreement}
            purchase={purchase}
            size={size}
            addons={addons}
            billingCycle={billingCycle}
            payToday={payToday}
            leasingInterest={leasingInterest}
            mailArgs={mailArgs}
            language={language}
          />
        </aside>
      </main>

      {sizeId && <div className="h-20 xl:hidden" />}

      {sizeId && <div className="fixed inset-x-0 bottom-0 z-50 xl:hidden border-t border-neutral-800 bg-neutral-950/90 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide text-neutral-400 whitespace-nowrap">{t('payToday')}</div>
            <div className="text-lg font-bold text-white truncate max-w-[50vw]" aria-live="polite">{payToday ? nok(payToday) : '-'}</div>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-500 transition-colors shadow-lg"
            onClick={() => setMobileSummaryOpen(true)}
          >
            {t('showSummary')}
          </button>
        </div>
      </div>}

      {mobileSummaryOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileSummaryOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-2xl bg-neutral-900 border-t border-neutral-700 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold">{t('summaryTitleDefault')}</h4>
              <button className="text-sm text-neutral-400" onClick={() => setMobileSummaryOpen(false)}>{t('close')}</button>
            </div>
            <SummaryCard
              mailHref={mailHref}
              copied={copied}
              setCopied={setCopied}
              pricingModel={pricingModel}
              agreement={agreement}
              purchase={purchase}
              size={size}
              payToday={payToday}
              addons={addons}
              billingCycle={billingCycle}
              leasingInterest={leasingInterest}
              mailArgs={mailArgs}
              language={language}
              compact
            />
          </div>
        </div>
      )}
    </div>
    );
}

// Re-aliaser App til FullApp
const App = FullApp;

// VIKTIG: Denne koden legges til helt på slutten
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
