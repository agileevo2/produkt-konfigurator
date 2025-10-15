/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

/*
  AlphaPWR – Single-file React + Tailwind configurator
  - Works with global UMD React/ReactDOM (no build step)
  - Robust mounting to avoid double-root warnings
  - Safe to paste into environments that may re-evaluate the script
*/

// Main React hooks from global React
const { useState, useEffect, useMemo } = React;

/* ----------------------------- CONSTANTS ----------------------------- */

const LOGO_URL = "https://storage.googleapis.com/files_webpage/Price%20model/narrow.png";

const COUNTRIES = [
  { name: 'Norway', code: 'no' },
  { name: 'Denmark', code: 'dk' },
  { name: 'Sweden', code: 'se' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'United States', code: 'us' },
  { name: 'Finland', code: 'fi' },
  { name: 'Netherlands', code: 'nl' },
];

const translations = {
  // Country Selection
  countrySelectionTitle: { no: "Velg ditt land", en: "Select your country", dk: "Vælg dit land", se: "Välj ditt land" },
  countrySelectionSubtitle: { no: "", en: "", dk: "", se: "" },
  notAvailableTitle: { no: "Ikke tilgjengelig i ditt land ennå", en: "Not yet available in your country", dk: "Endnu ikke tilgængelig i dit land", se: "Ännu inte tillgängligt i ditt land" },
  notAvailableMessage: { no: "Alphatek er ikke i ditt land ennå. Snakk med Alphatek direkte for å høre om alternativene.", en: "Alphatek is not in your country yet. Talk to Alphatek directly to hear about the options.", dk: "Alphatek er endnu ikke i dit land. Tal direkte med Alphatek for at høre om mulighederne.", se: "Alphatek är inte i ditt land ännu. Prata direkt med Alphatek för att höra om alternativen." },
  goBack: { no: "Gå tilbake", en: "Go back", dk: "Gå tilbage", se: "Gå tillbaka" },
  continueButton: { no: "Fortsett", en: "Continue", dk: "Fortsæt", se: "Fortsätt" },

  // Configurator
  configuratorTitle: { no: "Produktkonfigurator", en: "Product Configurator", dk: "Produktkonfigurator", se: "Produktkonfigurator" },
  mainTitle: { no: "Bygg din AlphaPWR-pakke", en: "Build your AlphaPWR package", dk: "Byg din AlphaPWR-pakke", se: "Bygg ditt AlphaPWR-paket" },
  mainSubtitle: { no: "Skreddersy din AlphaPWR-pakke og få et prisoverslag på sekunder.", en: "Tailor your AlphaPWR package and get a price estimate in seconds.", dk: "Skræddersy din AlphaPWR-pakke og få et prisoverslag på sekunder.", se: "Skräddarsy ditt AlphaPWR-paket och få en prisuppskattning på några sekunder." },
  step1Title: { no: "Velg størrelse", en: "Choose size", dk: "Vælg størrelse", se: "Välj storlek" },
  step2Title: { no: "Tilleggsutstyr (valgfritt)", en: "Add-ons (optional)", dk: "Ekstraudstyr (valgfrit)", se: "Tilläggsutrustning (valfritt)" },
  step2Subtitle: { no: "Velg tillegg eller hopp over steget.", en: "Select add-ons or skip this step.", dk: "Vælg tilvalg eller spring dette trin over.", se: "Välj tillägg eller hoppa över steget." },
  step3Title: { no: "Velg prismodell", en: "Select pricing model", dk: "Vælg prismodel", se: "Välj prismodell" },
  step4Title: { no: "Inkludert i pakken", en: "Included in the package", dk: "Inkluderet i pakken", se: "Ingår i paketet" },
  agreementModel: { no: "Abonnementsavtale", en: "Subscription Agreement", dk: "Abonnementsaftale", se: "Prenumerationsavtal" },
  agreementModelDescription: { no: "Lavere oppstartskostnad og inkludert service. En forutsigbar leie-modell.", en: "Lower startup cost and included service. A predictable rental model.", dk: "Lavere opstartsomkostninger og inkluderet service. En forudsigelig lejemodel.", se: "Lägre startkostnad och inkluderad service. En förutsägbar hyresmodell." },
  purchaseModel: { no: "Kjøpsmodell", en: "Purchase Model", dk: "Købsmodel", se: "Köpsmodell" },
  purchaseModelDescription: { no: "Kjøp og ei utstyret for lavere programvarekostnader på sikt.", en: "Buy and own the equipment for lower long-term software costs.", dk: "Køb og ej udstyret for lavere softwareomkostninger på sigt.", se: "Köp och äg utrustningen för lägre programvarukostnader på sikt." },
  billing: { no: "Fakturering", en: "Billing", dk: "Fakturering", se: "Fakturering" },
  monthly: { no: "Månedlig", en: "Monthly", dk: "Månedlig", se: "Månadsvis" },
  yearly: { no: "Årlig", en: "Yearly", dk: "Årlig", se: "Årsvis" },
  yearlyDiscount: { no: "Årlig", en: "Yearly", dk: "Årligt", se: "Årsvis" },
  youSave: { no: "Du sparer", en: "You save", dk: "Du sparer", se: "Du sparar" },
  yearlySaveNote: { no: "ved å velge årlig.", en: "by choosing yearly.", dk: "ved at vælge årligt.", se: "genom att välja årsvis." },
  equivalentTo: { no: "tilsvarer", en: "equals", dk: "svarer til", se: "motsvarar" },
  setup: { no: "Oppsett", en: "Setup", dk: "Opsætning", se: "Installation" },
  monthlySubscription: { no: "Månedlig abonnement", en: "Monthly subscription", dk: "Månedligt abonnement", se: "Månadsprenumeration" },
  yearlySubscription: { no: "Årlig abonnement", en: "Yearly subscription", dk: "Årligt abonnement", se: "Årsprenumeration" },
  yearlyHint: { no: "Årlig betaling gir 2 mnd gratis.", en: "Yearly payment gives 2 months free.", dk: "Årlig betaling giver 2 mdr gratis.", se: "Årlig betalning ger 2 månader gratis." },
  nordicBonusHint: { no: " (+ Nordic -5% ekstra rabatt).", en: " (+ Nordic -5% extra discount).", dk: " (+ Nordic -5% ekstra rabat).", se: " (+ Nordic -5% extra rabatt)." },
  returnService: { no: "Avslutningsservice", en: "Return service", dk: "Afslutningsservice", se: "Avslutningsservice" },
  optional: { no: "valgfritt", en: "optional", dk: "valgfrit", se: "valfritt" },
  returnServiceHint: { no: "Kan returneres når som helst mot en avgift.", en: "Can be returned anytime for a fee.", dk: "Kan returneres når som helst mod et gebyr.", se: "Kan returneras när som helst mot en avgift." },
  hardwareAndAddons: { no: "AlphaPWR system + tilbehør", en: "AlphaPWR system + accessories", dk: "AlphaPWR system + tilbehør", se: "AlphaPWR system + tillbehör" },
  softwareLicenseMonthly: { no: "Programvarelisens (mnd)", en: "Software license (monthly)", dk: "Softwarelicens (mdl.)", se: "Programvarulicens (mån)" },
  softwareLicenseYearly: { no: "Programvarelisens (år)", en: "Software license (yearly)", dk: "Softwarelicens (årl.)", se: "Programvarulicens (år)" },
  yearlySoftwareHint: { no: "Årlig betaling gir 2 mnd gratis.", en: "Yearly payment gives 2 months free.", dk: "Årlig betaling giver 2 mdr gratis.", se: "Årlig betalning ger 2 månader gratis." },
  nordicBonusSoftwareHint: { no: " + Nordic -5% ekstra rabatt.", en: " + Nordic -5% extra discount.", dk: " + Nordic -5% ekstra rabat.", se: " + Nordic -5% extra rabatt." },
  leasingViaDLL: { no: "Leasing via De Lage Landen (DLL)", en: "Leasing via De Lage Landen (DLL)", dk: "Leasing via De Lage Landen (DLL)", se: "Leasing via De Lage Landen (DLL)" },
  leasingHint: { no: "Få et uforpliktende leasingtilbud.", en: "Get a non-binding leasing offer.", dk: "Få et uforpligtende leasingtilbud.", se: "Få ett oförpliktande leasingerbjudande." },
  includedSoftware: { no: "Alltid inkludert programvare", en: "Always included software", dk: "Altid inkluderet software", se: "Alltid inkluderad programvara" },
  summaryTitle: { no: "Ditt prisoverslag", en: "Your price estimate", dk: "Dit prisoverslag", se: "Din prisuppskattning" },
  summaryTitleDefault: { no: "Oppsummering", en: "Summary", dk: "Oversigt", se: "Sammanfattning" },
  summaryDefaultText: { no: "Start med å velge en størrelse for å se prisoverslaget her.", en: "Start by choosing a size to see the price estimate here.", dk: "Start med at vælge en størrelse for at se prisoverslaget her.", se: "Börja med att välja en storlek för att se prisuppskattningen här." },
  payToday: { no: "Betales i dag", en: "Amount due today", dk: "Betales i dag", se: "Betalas idag" },
  payTodayHintAgreementYearly: { no: "Inkl. oppsett og 1. års abonnement", en: "Incl. setup and 1st year's subscription", dk: "Inkl. opsætning og 1. års abonnement", se: "Inkl. installation och 1:a årets prenumeration" },
  payTodayHintAgreementMonthly: { no: "Inkl. oppsett", en: "Incl. setup", dk: "Inkl. opsætning", se: "Inkl. installation" },
  payTodayHintPurchaseYearly: { no: "Inkl. system, tilbehør og 1. års lisens", en: "Incl. system, accessories, and 1st year's license", dk: "Inkl. system, tilbehør og 1. års licens", se: "Inkl. system, tillbehör och 1:a årets licens" },
  payTodayHintPurchaseMonthly: { no: "Inkl. system og tilbehør", en: "Incl. system and accessories", dk: "Inkl. system og tilbehør", se: "Inkl. system och tillbehör" },
  whatsIncluded: { no: "Dette er inkludert i prisen over", en: "What's included in the price above", dk: "Dette er inkluderet i prisen ovenfor", se: "Detta ingår i priset ovan" },
  baseSystem: { no: "AlphaPWR System", en: "AlphaPWR System", dk: "AlphaPWR System", se: "AlphaPWR System" },
  setupFee: { no: "Oppstartsavgift", en: "Setup Fee", dk: "Opstartsgebyr", se: "Startavgift" },
  firstYearSubscription: { no: "Abonnement (første år)", en: "Subscription (first year)", dk: "Abonnement (første år)", se: "Prenumeration (första året)" },
  firstYearLicense: { no: "Programvarelisens (første år)", en: "Software License (first year)", dk: "Softwarelicens (første år)", se: "Programvarulicens (första året)" },
  ongoingCosts: { no: "Løpende kostnader", en: "Ongoing costs", dk: "Løbende omkostninger", se: "Löpande kostnader" },
  agreementType: { no: "Avtale", en: "Agreement", dk: "Aftale", se: "Avtal" },
  size: { no: "Størrelse", en: "Size", dk: "Størrelse", se: "Storlek" },
  addons: { no: "Tilleggsutstyr", en: "Add-ons", dk: "Ekstraudstyr", se: "Tillägg" },
  ongoingSubscription: { no: "Løpende abonnement", en: "Ongoing subscription", dk: "Løbende abonnement", se: "Löpande prenumeration" },
  renewsAt: { no: "Fornyes med", en: "Renews at", dk: "Fornyes med", se: "Förnyas med" },
  fromYear2: { no: "Fra og med år 2", en: "From year 2 onwards", dk: "Fra og med år 2", se: "Från och med år 2" },
  ongoingLicense: { no: "Løpende lisens", en: "Ongoing license", dk: "Løbende licens", se: "Löpande licens" },
  leasingRequest: { no: "Leasingforespørsel", en: "Leasing inquiry", dk: "Leasingforespørgsel", se: "Leasingförfrågan" },
  weWillContact: { no: "Vi kontakter deg med tilbud", en: "We will contact you with an offer", dk: "Vi kontakter dig med et tilbud", se: "Vi kontaktar dig med ett erbjudande" },
  allPricesExclVAT: { no: "Alle priser er eks. MVA", en: "All prices are excl. VAT", dk: "Alle priser er ekskl. moms", se: "Alla priser är exkl. moms" },
  readyForNextStep: { no: "Klar for neste steg?", en: "Ready for the next step?", dk: "Klar til næste skridt?", se: "Redo för nästa steg?" },
  sendRequest: { no: "Send forespørsel", en: "Send inquiry", dk: "Send forespørgsel", se: "Skicka förfrågan" },
  copyReport: { no: "Kopier rapport", en: "Copy report", dk: "Kopiér rapport", se: "Kopiera rapport" },
  copiedToClipboard: { no: "Kopiert!", en: "Copied!", dk: "Kopieret!", se: "Kopierad!" },
  showSummary: { no: "Se oppsummering", en: "View summary", dk: "Se oversigt", se: "Visa sammanfattning" },
  close: { no: "Lukk", en: "Close", dk: "Luk", se: "Stäng" },
  trustSignal: { no: "Uforpliktende · Svar innen 1 arbeidsdag", en: "No obligation · Response within 1 business day", dk: "Uforpligtende · Svar inden for 1 arbejdsdag", se: "Oförpliktande · Svar inom 1 arbetsdag" },
  mailSubject: { no: "Ny forespørsel fra priskonfigurator", en: "New inquiry from the price configurator", dk: "Ny forespørgsel fra priskonfigurator", se: "Ny förfrågan från priskonfiguratorn" },
  mailGreeting: { no: "Hei Alphatek,", en: "Hello Alphatek,", dk: "Hej Alphatek,", se: "Hej Alphatek," },
  mailBodyIntro: { no: "Jeg har brukt priskonfiguratoren og er interessert i følgende oppsett:", en: "I have used the price configurator and am interested in the following setup:", dk: "Jeg har brugt priskonfiguratoren og er interesseret i følgende opsætning:", se: "Jag har använt priskonfiguratorn och är intresserad av följande uppsättning:" },
  mailLeasing: { no: "Ønsker leasingtilbud: Ja (via DLL)", en: "Interested in leasing offer: Yes (via DLL)", dk: "Ønsker leasingtilbud: Ja (via DLL)", se: "Önskar leasingerbjudande: Ja (via DLL)" },
  mailContactMe: { no: "Vennligst ta kontakt.", en: "Please get in touch.", dk: "Venligst tag kontakt.", se: "Vänligen kontakta mig." },
  mailNoAddons: { no: "Ingen", en: "None", dk: "Ingen", se: "Inga" },
  oneTimeCost: { no: "Engangskost", en: "One-time cost", dk: "Engangsomkostning", se: "Engångskostnad" },
  selectSizePromptDetails: { no: "Velg en størrelse ovenfor for å se prisdetaljer.", en: "Select a size above to see price details.", dk: "Vælg en størrelse ovenfor for at se prisdetaljer.", se: "Välj en storlek ovan för att se prisinformation." }
};

const SIZES = [
  { id: "small", name: { no: "AlphaPWR Small", en: "AlphaPWR Small", dk: "AlphaPWR Small", se: "AlphaPWR Small" }, image: "https://storage.googleapis.com/files_webpage/Price%20model/Small%20Transparent.png", included: { no: ['50" Samsung skjerm', "AlphaPWR sensor", "Platform: 110cm x 180cm"], en: ['50" Samsung screen', "AlphaPWR sensor", "Platform: 110cm x 180cm"], dk: ['50" Samsung skærm', "AlphaPWR sensor", "Platform: 110cm x 180cm"], se: ['50" Samsung skärm', "AlphaPWR sensor", "Platform: 110cm x 180cm"]}},
  { id: "medium", name: { no: "AlphaPWR Medium", en: "AlphaPWR Medium", dk: "AlphaPWR Medium", se: "AlphaPWR Medium" }, image: "https://storage.googleapis.com/files_webpage/Price%20model/Medium%20Transparent.png", included: { no: ['50" Samsung skjerm', "AlphaPWR sensor", "Platform: 310cm x 213cm"], en: ['50" Samsung screen', "AlphaPWR sensor", "Platform: 310cm x 213cm"], dk: ['50" Samsung skærm', "AlphaPWR sensor", "Platform: 310cm x 213cm"], se: ['50" Samsung skärm', "AlphaPWR sensor", "Platform: 310cm x 213cm"]}},
  { id: "double", name: { no: "AlphaPWR Double", en: "AlphaPWR Double", dk: "AlphaPWR Double", se: "AlphaPWR Double" }, image: "https://storage.googleapis.com/files_webpage/Price%20model/Large%20Transparent.png", included: { no: ['50" Samsung skjerm', "AlphaPWR sensor", "Platform: 610cm x 213cm"], en: ['50" Samsung screen', "AlphaPWR sensor", "Platform: 610cm x 213cm"], dk: ['50" Samsung skærm', "AlphaPWR sensor", "Platform: 610cm x 213cm"], se: ['50" Samsung skärm', "AlphaPWR sensor", "Platform: 610cm x 213cm"]}}
];

const ADDONS = [
  { id: "nordic", name: { no: "Nordic Hamstring", en: "Nordic Hamstring", dk: "Nordic Hamstring", se: "Nordic Hamstring" }, image: "https://storage.googleapis.com/files_webpage/Price%20model/Nordic%20Hamstring.png", hardware: 20000, softwareMonthly: 250},
  { id: "pull", name: { no: "Pull håntak", en: "Pull handles", dk: "Pull håndtag", se: "Pull handtag" }, image: "https://storage.googleapis.com/files_webpage/Price%20model/Pull.png", hardware: 2450}
];

const SOFTWARE_MODULES = ["Squat", "Squat Analytics", "Pull", "Jump", "Balance", "Monitor"];

/* --------------------------- PRICING (NOK) --------------------------- */

const AGREEMENT_PRICING = {
  small:  { setup: 18250, monthly: 3200, yearly: 32000, returnService: 18250 },
  medium: { setup: 22500, monthly: 3890, yearly: 38900, returnService: 22500 },
  double: { setup: 42500, monthly: 7000, yearly: 70000, returnService: 42500 }
};

const PURCHASE_PRICING = {
  small:  { hardware: 140000, softwareMonthly: 950 },
  medium: { hardware: 170000, softwareMonthly: 950 },
  double: { hardware: 320000, softwareMonthly: 950 }
};

/* --------------------------- UTILS & HELPERS ------------------------- */

const CONVERSION_RATES = {
    dk: 0.64, // 1 NOK = 0.64 DKK
    se: 0.98, // 1 NOK = 0.98 SEK
};

function applyMarketingRounding(amount) {
    if (amount > 0) {
         return Math.ceil(amount / 10) * 10;
    }
    return Math.round(amount);
}

function convertPrice(nokAmount, country) {
    const rate = CONVERSION_RATES[country];
    if (rate) {
        return nokAmount * rate;
    }
    return nokAmount;
}

function formatCurrency(n, country, lang) {
  if (typeof n !== "number" || Number.isNaN(n)) return "-";
  const currencyMap = { no: 'NOK', dk: 'DKK', se: 'SEK' };
  const localeMap = { no: 'no-NO', dk: 'da-DK', se: 'sv-SE', en: 'en-GB' };
  const currency = currencyMap[country] || 'NOK';
  const locale = localeMap[lang] || localeMap[country] || 'no-NO';
  const numberFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
  return `${numberFormatter.format(n)} ${currency}`;
}

function cx(...classes) { return classes.filter(Boolean).join(" "); }
function sumAddonsSetup(addons)   { return addons.reduce((s, a) => s + (a.hardware || 0), 0); }
function sumAddonsMonthly(addons) { return addons.reduce((s, a) => s + (a.softwareMonthly || 0), 0); }

const PURCHASE_YEARLY_DISCOUNT = 2 / 12;
const NORDIC_YEARLY_EXTRA_DISCOUNT = 0.05;
const applyNordicYearlyDiscount = (amount, hasNordic) =>
  hasNordic ? Math.round(amount * (1 - NORDIC_YEARLY_EXTRA_DISCOUNT)) : amount;

function computeAgreementTotals(sizeId, selectedAddons) {
  const base = AGREEMENT_PRICING[sizeId];
  const addons = ADDONS.filter((a) => selectedAddons.includes(a.id));
  const setup = base.setup + sumAddonsSetup(addons);
  const monthly = base.monthly + sumAddonsMonthly(addons);
  const yearly = applyNordicYearlyDiscount(base.yearly + sumAddonsMonthly(addons) * 12, selectedAddons.includes("nordic"));
  const returnService = base.returnService;
  return { setup, monthly, yearly, returnService };
}

function computePurchaseTotals(sizeId, selectedAddons) {
  const base = PURCHASE_PRICING[sizeId];
  const addons = ADDONS.filter((a) => selectedAddons.includes(a.id));
  const hardware = base.hardware + sumAddonsSetup(addons);
  const softwareMonthly = base.softwareMonthly + sumAddonsMonthly(addons);
  const yearlyBase = Math.round(softwareMonthly * 12 * (1 - PURCHASE_YEARLY_DISCOUNT));
  const yearly = applyNordicYearlyDiscount(yearlyBase, selectedAddons.includes("nordic"));
  return { hardware, softwareMonthly, yearly };
}

function buildMailCore({ size, addons, pricingModel, billingCycle, leasingInterest, language, country }) {
  const t = (key) => translations[key][language] || translations[key]['en'];
  const to = "contact@alphatek.ai";
  const subject = t('mailSubject');
  const avtale = pricingModel === "agreement" ? t('agreementModel') : t('purchaseModel');
  const faktureringChoice = billingCycle === "yearly" ? t('yearly') : t('monthly');
  const selSize = size ? size.name[language] : "Ikke valgt";
  const addonNames = addons && addons.length ? addons.map((a) => a.name[language]) : [];
  const addonLines = addonNames.length
    ? [`${t('addons')}:`, ...addonNames.map((n) => `- ${n}`)]
    : [`${t('addons')}: ${t('mailNoAddons')}`];

  const bodyLines = [
    t('mailGreeting'),
    "",
    t('mailBodyIntro'),
    "",
    `- Land: ${COUNTRIES.find(c => c.code === country)?.name || country}`,
    `- ${t('agreementType')}: ${avtale}`,
    `- ${t('billing')}: ${faktureringChoice}`,
    `- ${t('size')}: ${selSize}`
  ];
  if (pricingModel === 'purchase' && leasingInterest) {
    bodyLines.push(`- ${t('mailLeasing')}`);
  }
  bodyLines.push("", ...addonLines, "", t('mailContactMe'));
  const body = bodyLines.join("\n");
  return { to, subject, body };
}

function buildMailtoHref(args) {
  const { to, subject, body } = buildMailCore(args);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ---------------------------- UI COMPONENTS -------------------------- */

function CheckIcon(props) {
  return (
    React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props
    }, React.createElement("path", { d: "M20 6 9 17l-5-5" }))
  );
}

function CountryFlag({ countryCode }) {
    switch (countryCode) {
        case 'no':
            return React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 16", className: "w-8 h-auto rounded" },
                React.createElement("rect", { width: "22", height: "16", fill: "#ba0c2f" }),
                React.createElement("path", { d: "M0 8h22M8 0v16", stroke: "#fff", strokeWidth: "4" }),
                React.createElement("path", { d: "M0 8h22M8 0v16", stroke: "#00205b", strokeWidth: "2" })
            );
        case 'dk':
            return React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 37 28", className: "w-8 h-auto rounded" },
                React.createElement("rect", { width: "37", height: "28", fill: "#c60c30" }),
                React.createElement("path", { d: "M0 12h37m-25-12v28", stroke: "#fff", strokeWidth: "4" })
            );
        case 'se':
            return React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 16", className: "w-8 h-auto rounded" },
                React.createElement("rect", { width: "22", height: "16", fill: "#006aa7" }),
                React.createElement("path", { d: "M0 8h22M8 0v16", stroke: "#fecc00", strokeWidth: "4" })
            );
        case 'en':
        case 'gb':
            return React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 30", className: "w-8 h-auto rounded" },
                React.createElement("clipPath", { id: "s_a" }, React.createElement("path", { d: "M0 0v30h60V0z" })),
                React.createElement("clipPath", { id: "s_b" }, React.createElement("path", { d: "M30 15h30v15zv15H0zH0V0h30z" })),
                React.createElement("g", { clipPath: "url(#s_a)" },
                    React.createElement("path", { fill: "#012169", d: "M0 0v30h60V0z" }),
                    React.createElement("path", { stroke: "#fff", strokeWidth: "6", d: "m0 0 60 30m0-30L0 30" }),
                    React.createElement("path", { stroke: "#C8102E", strokeWidth: "4", d: "m0 0 60 30m0-30L0 30", clipPath: "url(#s_b)" }),
                    React.createElement("path", { fill: "#fff", d: "M30 0v30M0 15h60", stroke: "#fff", strokeWidth: "10" }),
                    React.createElement("path", { fill: "#C8102E", d: "M30 0v30M0 15h60", stroke: "#C8102E", strokeWidth: "6" })
                )
            );
        default:
            return null;
    }
}

function Section({ title, children, step, subtitle }) {
  return (
    React.createElement("section", { className: "mb-20" },
        React.createElement("div", { className: "mb-4" },
            React.createElement("h2", { className: "text-2xl font-semibold tracking-tight" },
                React.createElement("span", { className: "text-emerald-500" }, step, "."), " ", title
            ),
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
  return (
    React.createElement("div", { className: "rounded-xl border border-neutral-800 divide-y divide-neutral-800 bg-neutral-900/30 flex flex-col h-full" },
      children
    )
  );
}

function PriceBreakdownRow({ label, value }) {
  if (value == null) return null;
  if (typeof value === 'string' && value.includes('NaN')) return null;
  return (
    React.createElement("div", { className: "flex justify-between items-center text-sm py-1.5" },
        React.createElement("span", { className: "text-neutral-300" }, label),
        React.createElement("span", { className: "font-medium text-white" }, value)
    )
  );
}

function SummaryCard({
  mailHref, pricingModel, agreement, purchase, size, addons,
  billingCycle, payToday, mailArgs, compact, leasingInterest, language, country, finalPrices
}) {
  const t = (key) => translations[key][language] || translations[key]['en'];

  if (!size) {
    return (
      React.createElement("div", { className: cx("rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center", compact ? "p-4" : "p-6") },
        React.createElement("h3", { className: "text-lg font-semibold" }, t('summaryTitleDefault')),
        React.createElement("p", { className: "mt-2 text-neutral-400" }, t('summaryDefaultText'))
      )
    );
  }

  const formatOnly = (n) => formatCurrency(n, country, language);

  return (
    React.createElement("div", { className: cx("rounded-2xl border border-neutral-800 bg-neutral-900/50", compact ? "" : "p-5") },
      !compact && React.createElement("h3", { className: "text-lg font-semibold mb-4" }, t('summaryTitle')),
      
      React.createElement("div", { className: "p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-center" },
        React.createElement("div", { className: "text-sm uppercase tracking-wider text-neutral-400" }, t('payToday')),
        React.createElement("div", { className: "mt-1 text-3xl font-bold text-white", "aria-live": "polite" }, formatOnly(payToday)),
        React.createElement("p", { className: "text-xs text-neutral-500 mt-2 min-h-[16px]" },
          pricingModel === 'agreement' && billingCycle === 'yearly'  && t('payTodayHintAgreementYearly'),
          pricingModel === 'agreement' && billingCycle === 'monthly' && t('payTodayHintAgreementMonthly'),
          pricingModel === 'purchase'  && billingCycle === 'yearly'  && t('payTodayHintPurchaseYearly'),
          pricingModel === 'purchase'  && billingCycle === 'monthly' && t('payTodayHintPurchaseMonthly')
        )
      ),
      
      React.createElement("div", { className: "mt-5 pt-5 border-t border-neutral-700/70" },
        React.createElement("h4", { className: "text-sm font-medium text-neutral-300 mb-3" }, t('whatsIncluded')),
        React.createElement("div", { className: "space-y-2" },
          React.createElement(PriceBreakdownRow, {
            label: `${t('baseSystem')} (${size?.name?.[language] || ''})`,
            value: pricingModel === 'agreement' ? t('agreementModel') : formatOnly(finalPrices.purchase.baseHardware)
          }),
          finalPrices.addons.map((a) => (
            React.createElement(PriceBreakdownRow, { key: a.id, label: a.name?.[language] || '', value: formatOnly(a.finalHardware) })
          )),
          pricingModel === 'agreement' && React.createElement(PriceBreakdownRow, { label: t('setupFee'), value: formatOnly(finalPrices.agreement.setup) }),
          pricingModel === 'agreement' && billingCycle === 'yearly'   && React.createElement(PriceBreakdownRow, { label: t('firstYearSubscription'), value: formatOnly(finalPrices.agreement.yearly) }),
          pricingModel === 'purchase'  && billingCycle === 'yearly'   && React.createElement(PriceBreakdownRow, { label: t('firstYearLicense'), value: formatOnly(finalPrices.purchase.yearly) })
        )
      ),

      React.createElement("div", { className: "mt-5 pt-5 border-t border-neutral-700/70" },
        React.createElement("h4", { className: "text-sm font-medium text-neutral-300 mb-3" }, t('ongoingCosts')),
        React.createElement("div", { className: "space-y-2" },
          pricingModel === "agreement" && agreement && (
            billingCycle === "monthly"
              ? React.createElement(PriceBreakdownRow, { label: t('ongoingSubscription'), value: `${formatOnly(finalPrices.agreement.monthly)}/mnd` })
              : React.createElement(PriceBreakdownRow, { label: `${t('renewsAt')} (${t('fromYear2')})`, value: `${formatOnly(finalPrices.agreement.yearly)}/år` })
          ),
          pricingModel === "purchase" && purchase && (
            billingCycle === "monthly"
              ? React.createElement(PriceBreakdownRow, { label: t('ongoingLicense'), value: `${formatOnly(finalPrices.purchase.softwareMonthly)}/mnd` })
              : React.createElement(PriceBreakdownRow, { label: `${t('renewsAt')} (${t('fromYear2')})`, value: `${formatOnly(finalPrices.purchase.yearly)}/år` })
          )
        )
      ),

      React.createElement("div", { className: "mt-6" },
        React.createElement("div", { className: "mt-4 space-y-2" },
          React.createElement("h4", { className: "text-base text-center font-semibold text-white" }, t('readyForNextStep')),
          React.createElement("a", { href: mailHref, target: "_blank", rel: "noopener noreferrer",
             className: "w-full block text-center rounded-xl border-2 border-emerald-600 bg-emerald-700 px-4 py-3 text-base font-semibold text-white hover:bg-emerald-600 transition shadow-lg" },
            t('sendRequest')
          )
        ),
        React.createElement("p", { className: "text-xs text-center text-neutral-500 mt-4" }, t('allPricesExclVAT'))
      )
    )
  );
}

/* --------------------------- PAGE COMPONENTS ------------------------- */

function CountrySelection({ onCountrySelect }) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].code); // Default to Norway
  const t = (key) => translations[key]['en']; // English on this page

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry) {
      onCountrySelect(selectedCountry);
    }
  };

  return (
        React.createElement("div", { className: "min-h-screen bg-neutral-900 font-sans text-neutral-100 flex items-center justify-center p-4", style:{fontFamily: "'Inter', sans-serif"} },
            React.createElement("div", { className: "absolute inset-0 z-0" },
                React.createElement("img", { src: "https://storage.googleapis.com/files_webpage/Mockups/Work-Out.jpg", alt: "Workout background", className: "w-full h-full object-cover opacity-20"}),
                React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-900/50" })
            ),
            React.createElement("div", { className: "relative z-10 w-full max-w-md mx-auto bg-black/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10" },
                React.createElement("img", { src: LOGO_URL, alt: "Alphatek", className: "h-8 w-auto mx-auto mb-6" }),
                React.createElement("div", { className: "text-center" },
                    React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-white mb-2" }, t('countrySelectionTitle')),
                    React.createElement("p", { className: "text-neutral-300 max-w-sm mx-auto" }, t('countrySelectionSubtitle'))
                ),
                React.createElement("form", { onSubmit: handleSubmit, className: "mt-8 space-y-4" },
                    React.createElement("div", { className: "relative" },
                        React.createElement("select", {
                            value: selectedCountry,
                            onChange: (e) => setSelectedCountry(e.target.value),
                            className: "w-full appearance-none rounded-xl border-2 border-neutral-700 bg-neutral-800/80 px-4 py-3 text-base text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition"
                        },
                            COUNTRIES.map(country => (
                                React.createElement("option", { key: country.code, value: country.code, className: "bg-neutral-800 text-white" },
                                    country.name
                                )
                            ))
                        ),
                        React.createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400" },
                            React.createElement("svg", { className: "fill-current h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
                                React.createElement("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})
                            )
                        )
                    ),
                    React.createElement("button", { type: "submit", className: "w-full rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/40 transform hover:-translate-y-0.5" },
                        t('continueButton')
                    )
                )
            )
        )
  );
}

function NotAvailableMessage({ onBack }) {
  const t = (key) => translations[key]['en'];
  return (
    React.createElement("div", { className: "min-h-screen bg-neutral-950 text-neutral-100 font-sans flex flex-col items-center justify-center p-4 text-center" },
      React.createElement("header", { className: "absolute top-0 left-0 right-0" },
        React.createElement("div", { className: "mx-auto max-w-6xl px-4 py-3 flex items-center" },
          React.createElement("img", { src: LOGO_URL, alt: "Alphatek", className: "h-7 w-auto" })
        )
      ),
      React.createElement("main", null,
        React.createElement("h1", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-white" }, t('notAvailableTitle')),
        React.createElement("p", { className: "mt-3 text-lg text-neutral-400 max-w-xl mx-auto" }, t('notAvailableMessage')),
        React.createElement("button", { onClick: onBack,
                className: "mt-8 rounded-xl border-2 border-emerald-600 bg-emerald-700 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-600 transition shadow-lg" },
          t('goBack')
        )
      )
    )
  );
}

function ProductConfigurator({ selectedCountry }) {
  const [language, setLanguage] = useState(selectedCountry);
  const [sizeId, setSizeId] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [pricingModel, setPricingModel] = useState("agreement");
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [leasingInterest, setLeasingInterest] = useState(false);
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  // Read URL only if it matches selected country (deep link)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('country') === selectedCountry) {
      const size = params.get('size');
      const addons = params.get('addons');
      const model = params.get('model');
      const billing = params.get('billing');
      const lang = params.get('lang');

      if (size === 'small' || size === 'medium' || size === 'double') setSizeId(size);
      if (addons) setSelectedAddons(addons.split(',').filter(Boolean));
      if (model === 'agreement' || model === 'purchase') setPricingModel(model);
      if (billing === 'monthly' || billing === 'yearly') setBillingCycle(billing);
      if (lang && (lang === selectedCountry || lang === 'en')) setLanguage(lang);
    }
  }, [selectedCountry]);

  // Keep URL in sync (but avoid noise before a size is chosen)
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('country', selectedCountry);
    if (sizeId) {
      params.set('size', sizeId);
      if (selectedAddons.length > 0) params.set('addons', selectedAddons.join(','));
      params.set('model', pricingModel);
      params.set('billing', billingCycle);
    }
    params.set('lang', language);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    try { window.history.replaceState({}, '', newUrl); } catch (e) { /* noop */ }
  }, [sizeId, selectedAddons, pricingModel, billingCycle, language, selectedCountry]);

  const t = (key) => translations[key][language] || translations[key]['en'];

  // If agreement model, leasing checkbox must reset
  useEffect(() => { if (pricingModel === 'agreement') setLeasingInterest(false); }, [pricingModel]);
  
  const rawPrices = useMemo(() => {
    if (!sizeId) return null;
    return {
        agreement: computeAgreementTotals(sizeId, selectedAddons),
        purchase: computePurchaseTotals(sizeId, selectedAddons),
    };
  }, [sizeId, selectedAddons]);

  const finalPrices = useMemo(() => {
    if (!rawPrices) return null;
    
    const { agreement: rawAgreement, purchase: rawPurchase } = rawPrices;
    const selectedRawAddons = ADDONS.filter(a => selectedAddons.includes(a.id));

    return {
        agreement: {
            setup: applyMarketingRounding(convertPrice(rawAgreement.setup, selectedCountry)),
            monthly: applyMarketingRounding(convertPrice(rawAgreement.monthly, selectedCountry)),
            yearly: applyMarketingRounding(convertPrice(rawAgreement.yearly, selectedCountry)),
            returnService: applyMarketingRounding(convertPrice(rawAgreement.returnService, selectedCountry)),
        },
        purchase: {
            baseHardware: applyMarketingRounding(convertPrice(rawPurchase.hardware - sumAddonsSetup(selectedRawAddons), selectedCountry)),
            softwareMonthly: applyMarketingRounding(convertPrice(rawPurchase.softwareMonthly, selectedCountry)),
            yearly: applyMarketingRounding(convertPrice(rawPurchase.yearly, selectedCountry)),
        },
        addons: selectedRawAddons.map(a => ({
            ...a,
            finalHardware: applyMarketingRounding(convertPrice(a.hardware, selectedCountry)),
        }))
    };
  }, [rawPrices, selectedAddons, selectedCountry]);


  const payToday = useMemo(() => {
    if (!finalPrices) return 0;
    if (pricingModel === "agreement") {
      return billingCycle === "monthly" 
        ? finalPrices.agreement.setup 
        : finalPrices.agreement.setup + finalPrices.agreement.yearly;
    }
    if (pricingModel === "purchase") {
      const addonHardwareTotal = finalPrices.addons.reduce((sum, a) => sum + a.finalHardware, 0);
      return billingCycle === "yearly"
        ? finalPrices.purchase.baseHardware + addonHardwareTotal + finalPrices.purchase.yearly
        : finalPrices.purchase.baseHardware + addonHardwareTotal;
    }
    return 0;
  }, [pricingModel, billingCycle, finalPrices]);
  
  const fc = (n) => formatCurrency(n, selectedCountry, language);

  const size      = useMemo(() => (sizeId ? SIZES.find((s) => s.id === sizeId) || null : null), [sizeId]);
  const addons    = useMemo(() => ADDONS.filter((a) => selectedAddons.includes(a.id)), [selectedAddons]);

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev => prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]);
  };

  const mailArgs = { size, addons, pricingModel, billingCycle, agreement: rawPrices?.agreement, purchase: rawPrices?.purchase, leasingInterest, language, country: selectedCountry };
  const mailHref = buildMailtoHref(mailArgs);

  const yearlySavings = useMemo(() => {
    if (!rawPrices) return 0;
    if (pricingModel === 'agreement') {
      const totalMonthly = rawPrices.agreement.monthly * 12;
      return totalMonthly - rawPrices.agreement.yearly;
    }
    if (pricingModel === 'purchase') {
      const totalMonthly = rawPrices.purchase.softwareMonthly * 12;
      const totalYearly  = Math.round(totalMonthly * (1 - PURCHASE_YEARLY_DISCOUNT));
      const hasNordic    = selectedAddons.includes('nordic');
      return applyNordicYearlyDiscount(totalMonthly, hasNordic) - applyNordicYearlyDiscount(totalYearly, hasNordic);
    }
    return 0;
  }, [rawPrices, pricingModel, selectedAddons]);

  return (
    React.createElement("div", { className: "min-h-screen bg-neutral-950 text-neutral-100", style:{fontFamily: "'Inter', sans-serif"} },
      React.createElement("header", { className: "sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-neutral-800" },
        React.createElement("div", { className: "mx-auto max-w-6xl px-4 py-3 flex items-center justify-between" },
          React.createElement("div", { className: "flex items-center gap-4" },
            React.createElement("img", { src: LOGO_URL, alt: "Alphatek", className: "h-7 w-auto" }),
            React.createElement("span", { className: "hidden sm:block text-sm text-neutral-400" }, t('configuratorTitle'))
          ),
          React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("button", {
              title: COUNTRIES.find(c => c.code === selectedCountry)?.name,
              onClick: () => setLanguage(selectedCountry),
              className: cx("rounded-full p-0.5 transition-all", language === selectedCountry ? 'bg-neutral-700' : 'opacity-60 hover:opacity-100')
            },
              React.createElement(CountryFlag, { countryCode: selectedCountry })
            ),
            React.createElement("button", {
              title: "English",
              onClick: () => setLanguage('en'),
              className: cx("rounded-full p-0.5 transition-all", language === 'en' ? 'bg-neutral-700' : 'opacity-60 hover:opacity-100')
            },
              React.createElement(CountryFlag, { countryCode: 'en' })
            )
          )
        )
      ),
      React.createElement("main", { className: "mx-auto max-w-6xl px-4 py-8 sm:py-12 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_440px] gap-8 xl:gap-12" },
        React.createElement("div", null,
          React.createElement("div", { className: "mb-10" },
            React.createElement("h1", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-white" }, t('mainTitle')),
            React.createElement("p", { className: "mt-3 text-lg text-neutral-400 max-w-2xl" }, t('mainSubtitle'))
          ),
          React.createElement(Section, { title: t('step1Title'), step: 1 },
            React.createElement("fieldset", null,
              React.createElement("legend", { className: "sr-only" }, t('step1Title')),
              React.createElement("div", { role: "radiogroup", className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" },
                SIZES.map((s) => (
                  React.createElement("label", { key: s.id, htmlFor: `size-${s.id}`,
                         className: cx(
                           "rounded-2xl border-2 p-4 text-left transition-all duration-300 group cursor-pointer hover:border-neutral-700 hover:bg-neutral-900",
                           sizeId === s.id ? "border-emerald-500 bg-neutral-900 shadow-lg" : "border-neutral-800"
                         )},
                    React.createElement("input", { type: "radio", name: "size", id: `size-${s.id}`, value: s.id,
                           checked: sizeId === s.id, onChange: (e) => setSizeId(e.target.value),
                           className: "sr-only" }),
                    React.createElement("img", { src: s.image, alt: s.name[language], className: "w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105" }),
                    React.createElement("div", { className: "mt-3 font-semibold text-white" }, s.name[language]),
                    React.createElement("ul", { className: "mt-2 text-sm text-neutral-400 space-y-1 list-disc list-inside" },
                      s.included[language].map((item, idx) => (React.createElement("li", { key: idx }, item)))
                    )
                  )
                ))
              )
            )
          ),
          React.createElement("div", { className: cx("transition-opacity duration-500", !sizeId && "opacity-40 pointer-events-none") },
            React.createElement(Section, { title: t('step2Title'), step: 2, subtitle: t('step2Subtitle') },
              React.createElement("fieldset", null,
                React.createElement("legend", { className: "sr-only" }, t('step2Title')),
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" },
                  ADDONS.map((a) => (
                    React.createElement("label", { key: a.id, htmlFor: `addon-${a.id}`,
                           className: cx(
                             "rounded-2xl border-2 p-4 text-left transition-all duration-300 group cursor-pointer hover:border-neutral-700 hover:bg-neutral-900",
                             selectedAddons.includes(a.id) ? "border-sky-500 bg-neutral-900 shadow-lg" : "border-neutral-800"
                           )},
                      React.createElement("input", { type: "checkbox", id: `addon-${a.id}`, value: a.id,
                             checked: selectedAddons.includes(a.id),
                             onChange: () => handleAddonToggle(a.id),
                             className: "sr-only" }),
                      React.createElement("img", { src: a.image, alt: a.name[language], className: "w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105" }),
                      React.createElement("div", { className: "mt-3 font-semibold text-white" }, a.name[language]),
                      (a.hardware || a.softwareMonthly) && (
                        React.createElement("p", { className: "mt-1 text-sm text-neutral-400" },
                          a.hardware ? React.createElement(React.Fragment, null, translations.oneTimeCost[language] || translations.oneTimeCost.en, " ", formatCurrency(applyMarketingRounding(convertPrice(a.hardware, selectedCountry)), selectedCountry, language)) : null,
                          a.hardware && a.softwareMonthly ? " + " : null,
                          a.softwareMonthly ? React.createElement(React.Fragment, null, formatCurrency(applyMarketingRounding(convertPrice(a.softwareMonthly, selectedCountry)), selectedCountry, language), "/mnd") : null
                        )
                      )
                    )
                  ))
                )
              )
            ),
            React.createElement(Section, { title: t('step3Title'), step: 3 },
              React.createElement("div", { className: "border-b border-neutral-800 flex" },
                React.createElement("button", { onClick: () => setPricingModel("agreement"),
                        title: t('agreementModelDescription'),
                        className: cx("px-4 py-3 text-base font-semibold transition-colors",
                          pricingModel === 'agreement' ? 'text-white border-b-2 border-emerald-500' : 'text-neutral-400 hover:text-white')},
                  t('agreementModel')
                ),
                React.createElement("button", { onClick: () => setPricingModel("purchase"),
                        title: t('purchaseModelDescription'),
                        className: cx("px-4 py-3 text-base font-semibold transition-colors",
                          pricingModel === 'purchase' ? 'text-white border-b-2 border-emerald-500' : 'text-neutral-400 hover:text-white')},
                  t('purchaseModel')
                )
              ),
              React.createElement("div", { className: "pt-6" },
                React.createElement("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center" },
                  React.createElement("span", { className: "text-sm text-neutral-300 font-medium" }, t('billing'), ":"),
                  React.createElement("div", { className: "inline-flex rounded-full border border-neutral-800 bg-neutral-900 p-1 text-sm" },
                    React.createElement("button", { className: cx("px-4 py-1.5 rounded-full transition", billingCycle === "monthly" ? "bg-neutral-700 text-white" : "text-neutral-400 hover:text-white"),
                            onClick:() => setBillingCycle("monthly") },
                      t('monthly')
                    ),
                    React.createElement("button", { className: cx("px-4 py-1.5 rounded-full transition relative", billingCycle === "yearly" ? "bg-emerald-700 text-white" : "text-neutral-400 hover:text-white"),
                            onClick: () => setBillingCycle("yearly") },
                      t('yearlyDiscount')
                    )
                  )
                ),
                billingCycle === 'yearly' && sizeId && (
                  React.createElement("p", { className: "text-sm text-emerald-300 mt-2 px-1" },
                    t('youSave'), " ", formatCurrency(applyMarketingRounding(convertPrice(yearlySavings, selectedCountry)), selectedCountry, language), " ", t('yearlySaveNote')
                  )
                ),
                React.createElement("div", { className: "mt-4" },
                  !finalPrices ? (
                    React.createElement("div", { className: "rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30 p-6 text-center text-neutral-400" },
                      translations.selectSizePromptDetails[language] || translations.selectSizePromptDetails.en
                    )
                  ) : (
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                      pricingModel === "agreement" && (
                        React.createElement(React.Fragment, null,
                          React.createElement(TableBox, null,
                            React.createElement(TableRow, { label: t('setup'), value: formatCurrency(finalPrices.agreement.setup, selectedCountry, language) }),
                            billingCycle === "monthly"
                              ? React.createElement(TableRow, { label: t('monthlySubscription'), value: formatCurrency(finalPrices.agreement.monthly, selectedCountry, language) })
                              : React.createElement(TableRow, {
                                  label: t('yearlySubscription'),
                                  value: formatCurrency(finalPrices.agreement.yearly, selectedCountry, language),
                                  subvalue: React.createElement(React.Fragment, null, t('equivalentTo'), " ", formatCurrency(Math.round(finalPrices.agreement.yearly / 12), selectedCountry, language), "/mnd"),
                                  hint: React.createElement(React.Fragment, null, t('yearlyHint'), addons.some((a) => a.id === "nordic") ? (translations.nordicBonusHint[language] || translations.nordicBonusHint.en) : "")
                                })
                            
                          ),
                          React.createElement(TableBox, null,
                            React.createElement(TableRow, {
                              label: t('returnService'),
                              value: React.createElement(React.Fragment, null, formatCurrency(finalPrices.agreement.returnService, selectedCountry, language), " ", React.createElement("span", { className: "text-xs text-neutral-500" }, "(", t('optional'), ")")),
                              hint: t('returnServiceHint')
                            })
                          )
                        )
                      ),
                      pricingModel === "purchase" && (
                        React.createElement(React.Fragment, null,
                          React.createElement(TableBox, null,
                            React.createElement(TableRow, { label: t('hardwareAndAddons'), value: formatCurrency(finalPrices.purchase.baseHardware + finalPrices.addons.reduce((s, a) => s + a.finalHardware, 0), selectedCountry, language) }),
                            billingCycle === "monthly"
                              ? React.createElement(TableRow, { label: t('softwareLicenseMonthly'), value: React.createElement(React.Fragment, null, formatCurrency(finalPrices.purchase.softwareMonthly, selectedCountry, language), "/mnd") })
                              : React.createElement(TableRow, {
                                  label: t('softwareLicenseYearly'),
                                  value: formatCurrency(finalPrices.purchase.yearly, selectedCountry, language),
                                  subvalue: React.createElement(React.Fragment, null, t('equivalentTo'), " ", formatCurrency(Math.round(finalPrices.purchase.yearly / 12), selectedCountry, language), "/mnd"),
                                  hint: React.createElement(React.Fragment, null,
                                    t('yearlySoftwareHint'),
                                    addons.some((a) => a.id === "nordic")
                                      ? React.createElement("span", { className: "text-emerald-400" }, t('nordicBonusSoftwareHint'))
                                      : ""
                                  )
                                })
                          ),
                          React.createElement("div", { className: "rounded-xl border border-neutral-700 bg-neutral-800/50 p-4 h-full flex flex-col justify-center" },
                            React.createElement("label", { htmlFor: "leasing-checkbox", className: "flex items-start gap-3 cursor-pointer" },
                              React.createElement("input", { id: "leasing-checkbox", type: "checkbox",
                                     checked: leasingInterest,
                                     onChange: (e) => setLeasingInterest(e.target.checked),
                                     className: "mt-1 h-4 w-4 rounded border-neutral-600 bg-neutral-900 text-emerald-600 focus:ring-emerald-500" }),
                              React.createElement("div", null,
                                React.createElement("span", { className: "font-medium text-neutral-100" }, t('leasingViaDLL')),
                                React.createElement("p", { className: "text-xs text-neutral-400" }, t('leasingHint'))
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(Section, { title: t('step4Title'), step: 4 },
              React.createElement("div", { className: "rounded-xl border border-neutral-800 bg-neutral-900/40 p-4" },
                React.createElement("h4", { className: "text-sm font-medium uppercase tracking-wider text-neutral-400" }, t('includedSoftware')),
                React.createElement("ul", { className: "mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2" },
                  SOFTWARE_MODULES.map(module => (
                    React.createElement("li", { key: module, className: "flex items-center gap-2 text-neutral-200" },
                      React.createElement(CheckIcon, { className: "h-4 w-4 text-emerald-500 shrink-0" }),
                      React.createElement("span", null, module)
                    )
                  ))
                )
              )
            )
          )
        ),
        React.createElement("aside", { className: "xl:sticky xl:top-24 h-max hidden xl:block" },
          finalPrices && React.createElement(SummaryCard, {
            mailHref: mailHref,
            pricingModel: pricingModel,
            agreement: rawPrices.agreement,
            purchase: rawPrices.purchase,
            size: size,
            addons: addons,
            billingCycle: billingCycle,
            payToday: payToday,
            leasingInterest: leasingInterest,
            mailArgs: mailArgs,
            language: language,
            country: selectedCountry,
            fc: fc,
            finalPrices: finalPrices
          })
        )
      ),
      sizeId && React.createElement("div", { className: "h-20 xl:hidden" }),
      sizeId && (
        React.createElement("div", { className: "fixed inset-x-0 bottom-0 z-50 xl:hidden border-t border-neutral-800 bg-neutral-950/90 backdrop-blur-sm px-4 py-3" },
          React.createElement("div", { className: "flex items-center justify-between gap-3" },
            React.createElement("div", { className: "min-w-0" },
              React.createElement("div", { className: "text-xs uppercase tracking-wide text-neutral-400 whitespace-nowrap" }, t('payToday')),
              React.createElement("div", { className: "text-lg font-bold text-white truncate max-w-[50vw]", "aria-live": "polite" },
                payToday ? fc(payToday) : '-'
              )
            ),
            React.createElement("button", { type: "button",
                    className: "shrink-0 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-500 transition-colors shadow-lg",
                    onClick: () => setMobileSummaryOpen(true) },
              t('showSummary')
            )
          )
        )
      ),
      mobileSummaryOpen && (
        React.createElement("div", { className: "fixed inset-0 z-[60] xl:hidden" },
          React.createElement("div", { className: "absolute inset-0 bg-black/70", onClick: () => setMobileSummaryOpen(false) }),
          React.createElement("div", { className: "absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-2xl bg-neutral-900 border-t border-neutral-700 p-4 overflow-y-auto" },
            React.createElement("div", { className: "flex items-center justify-between mb-3" },
              React.createElement("h4", { className: "text-lg font-semibold" }, t('summaryTitleDefault')),
              React.createElement("button", { className: "text-sm text-neutral-400", onClick: () => setMobileSummaryOpen(false) }, t('close'))
            ),
            finalPrices && React.createElement(SummaryCard, {
              mailHref: mailHref,
              pricingModel: pricingModel,
              agreement: rawPrices.agreement,
              purchase: rawPrices.purchase,
              size: size,
              payToday: payToday,
              addons: addons,
              billingCycle: billingCycle,
              leasingInterest: leasingInterest,
              mailArgs: mailArgs,
              language: language,
              country: selectedCountry,
              fc: fc,
              finalPrices: finalPrices,
              compact: true
            })
          )
        )
      )
    )
  );
}

/* ---------------------------- MAIN APP (Router) ---------------------- */

function App() {
  const [country, setCountry] = useState(null);

  // Deep link: read country from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const countryParam = params.get('country');
    if (countryParam && COUNTRIES.some(c => c.code === countryParam)) {
      setCountry(countryParam);
    }
  }, []);

  if (!country) {
    return React.createElement(CountrySelection, { onCountrySelect: setCountry });
  }

  if (['no', 'dk', 'se'].includes(country)) {
    return React.createElement(ProductConfigurator, { selectedCountry: country });
  }

  return (
    React.createElement(NotAvailableMessage, {
      onBack: () => {
        const newUrl = window.location.pathname;
        try { window.history.replaceState({}, '', newUrl); } catch (e) {}
        setCountry(null);
      }
    })
  );
}

/* ---------------------------- ROBUST MOUNT --------------------------- */
/*
  - Avoids "createRoot() on a container that has already been passed" warning.
  - Safe if the script is injected multiple times.
  - Requires a #root on the page (hosted by the environment).
*/

(function mount() {
  const host = document.getElementById('root');
  if (!host) {
    console.error('#root not found');
    return;
  }

  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined' || typeof ReactDOM.createRoot === 'undefined') {
    console.error('React/ReactDOM UMD not loaded or ReactDOM.createRoot missing.');
    return;
  }

  // Create a stable sub-container once (so other scripts using #root don't clash)
  let sub = host.querySelector('#alphatek-app');
  if (!sub) {
    sub = document.createElement('div');
    sub.id = 'alphatek-app';
    host.appendChild(sub);
  }

  // Reuse root bound to our OWN container across reloads
  if (sub._reactRoot) {
    sub._reactRoot.render(React.createElement(App));
  } else {
    sub._reactRoot = ReactDOM.createRoot(sub);
    sub._reactRoot.render(React.createElement(App));
  }
})();

