import studio from '../assets/screens/words-studio.png';
import furniture from '../assets/screens/words-furniture.png';
import food from '../assets/screens/words-food.png';
import print from '../assets/screens/words-print.png';

export const HOME_FAQ = [
  {
    q: 'How much does it cost?',
    a: "Every business is different, so we don't sell fixed packages. After a first conversation we give you a clear quote based on how many people will use the system, which parts of your work it covers, and what needs to be moved over from your current files. You know the full price before any work starts.",
  },
  {
    q: 'How long until we can use it?',
    // TODO: replace "within weeks" with a concrete number once agreed.
    a: 'Your team can start working in the first version within weeks. We begin with the part that slows you down most, then add the rest step by step, so you are not waiting months for everything at once.',
  },
  {
    q: 'What if we need changes later?',
    a: "That's expected. Businesses change, and the system should change with them. Tell us what you need, a new step, a new status, a new report, and we adjust it. No ticket queues and no starting over.",
  },
  {
    q: 'Is our data safe? Where is it stored?',
    a: "Wherever suits you best. We agree on it together before we start. If you want your data kept on your own servers, on-site, we set the system up there. If you'd rather not think about it, we host it for you and take care of security and backups. Either way, your data stays yours.",
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Support is available 24/7. If something stops working or your team has a question, you reach a person who knows your system, not a call centre.',
  },
];

export const WORDS = [
  {
    title: 'Design studio',
    text: 'A ten-person studio that tracks every style from first sketch to production. We named things the way their designers already talk, and built the flow around fittings.',
    chips: [['list', 'Styles'], ['flask', 'Samples'], ['ruler', 'Fittings'], ['box', 'Fabrics']],
    img: studio, panel: 'p-blue', href: '/industries/apparel-plm/', cta: 'See the apparel system',
    alt: 'Example system for a design studio: a wrap dress moving through sketch, sample, fitting and approval.',
  },
  // The next three are the kinds of businesses we're ready to build for, not finished projects.
  // Their button goes to the contact form.
  {
    title: 'Furniture workshop',
    text: 'Every kitchen and table is a job with drawings, a prototype and a site visit. The system follows that path instead of a generic sales pipeline.',
    chips: [['pencil', 'Jobs'], ['file', 'Drawings'], ['pin', 'Site visits'], ['box', 'Timber']],
    img: furniture, panel: 'p-violet', href: '#contact', cta: 'Talk to us about yours',
    alt: 'Example system for a furniture workshop: a kitchen job moving from quote to drawings, prototype and build.',
  },
  {
    title: 'Food producer',
    text: 'Batches move from recipe to tasting to shipping. Nothing leaves the kitchen without a tasting step, so the system makes that step impossible to skip.',
    chips: [['cup', 'Batches'], ['file', 'Recipes'], ['checkCircle', 'Tastings'], ['truck', 'Shipping']],
    img: food, panel: 'p-sky', href: '#contact', cta: 'Talk to us about yours',
    alt: 'Example system for a food producer: a batch moving from recipe through cooking and tasting to shipping.',
  },
  {
    title: 'Print shop',
    text: 'Clients approve proofs before anything goes to press. We put proofs and press checks where the team expects them, with clients notified at each step.',
    chips: [['list', 'Orders'], ['eye', 'Proofs'], ['clock', 'Press checks'], ['users', 'Clients']],
    img: print, panel: 'p-indigo', href: '#contact', cta: 'Talk to us about yours',
    alt: 'Example system for a print shop: an order moving from brief to proof, press check and printing.',
  },
] as const;
