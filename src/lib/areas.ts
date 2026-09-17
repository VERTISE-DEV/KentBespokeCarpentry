/**
 * Area pages.
 *
 * These are written to rank, which means each one has to earn its place: different headings,
 * a different property mix, a different ranked list of the work we actually get asked for there,
 * and its own questions. Pages that share a skeleton and swap the town name are treated as
 * doorway pages and suppressed, so `propertyMix`, `topJobs`, `demand` and `faqs` must be genuinely
 * specific to the place if a new area is added.
 */

export type PropertyType = {
  type: string;
  /** How prevalent it is locally. Qualitative on purpose: we do not have census figures. */
  weight: "Dominant" | "Common" | "Pockets";
  note: string;
};

export type Area = {
  slug: string;
  name: string;
  /** Used in prose where "the Medway Towns" needs a different article to "Maidstone". */
  inName: string;
  county: string;
  postcodes: string;
  /** Hand written per area rather than templated. */
  title: string;
  description: string;
  eyebrow: string;
  h1: [string, string];
  intro: string;
  /** One line summarising the local market, shown under the property table. */
  marketSummary: string;
  propertyMix: PropertyType[];
  /** Ranked by how often we are asked for it in this area. */
  topJobs: { job: string; why: string }[];
  /** Two body sections with headings specific to this area. */
  demand: { heading: string; body: string[] }[];
  neighbourhoods: string[];
  /** Service slugs, ordered by relevance to this area. */
  serviceOrder: string[];
  faqs: { q: string; a: string }[];
  nearby: string[];
};

const FF = "first-fix-carpentry";
const SF = "second-fix-carpentry";
const BJ = "bespoke-joinery";

export const AREAS: Area[] = [
  {
    slug: "maidstone",
    name: "Maidstone",
    inName: "Maidstone",
    county: "Kent",
    postcodes: "ME14 to ME17",
    title: "Carpenter in Maidstone | Extensions & Fitted Joinery",
    description:
      "Carpenter covering Maidstone, Bearsted, Boxley and the surrounding villages. Alcove storage in the town terraces, full extension carpentry on the interwar semis, garden structures out in the villages. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Maidstone."],
    intro:
      "Maidstone is the most varied patch we work. Within four miles you go from Victorian terraces with their original stair flights intact, to interwar semis being extended for a second time, to converted oast houses where nothing is square and everything is on show. No two weeks here look alike.",
    marketSummary:
      "Broadest property mix of anywhere we cover, which is why our Maidstone work splits fairly evenly across all three stages of carpentry.",
    propertyMix: [
      { type: "Victorian and Edwardian terraces", weight: "Common", note: "Tovil, Wheeler Street and the streets ringing the town centre. Deep original mouldings and chimney breasts on both floors." },
      { type: "Interwar and post-war semis", weight: "Dominant", note: "Penenden Heath, Shepway, Allington and Barming. Generous rear plots, which is why so many are extended rather than sold." },
      { type: "Oast houses and converted farm buildings", weight: "Pockets", note: "Boxley, Bearsted and the villages beyond. Exposed structural timber, so any repair has to be finish quality." },
    ],
    topJobs: [
      { job: "Full extension carpentry on interwar semis", why: "The single biggest source of work here. Roof carcassing, joists and partitions at first fix, then doors, trim and storage several weeks later." },
      { job: "Alcove cupboards beside chimney breasts", why: "Every terrace in Tovil and the town centre streets has two recesses per room and almost none of them are the same width top to bottom." },
      { job: "Garden rooms and pergolas in the villages", why: "Plots out towards Bearsted and Boxley are large enough that outbuildings are worth doing properly, on real footings." },
    ],
    demand: [
      {
        heading: "Why Maidstone extends rather than moves",
        body: [
          "The interwar estates around Penenden Heath and Allington were laid out with rear gardens far deeper than anything built since. That single planning decision is why we spend so much of our Maidstone year on extension carpentry: the space is already there, and moving to get it costs more than building into it.",
          "It also means most of these houses come to us twice. Once when the shell goes up and we are forming joists, partitions and roof structure, and again a month or so later for the doors, trim, flooring and fitted storage that make it a room rather than a box.",
        ],
      },
      {
        heading: "Town terraces and village barns in the same week",
        body: [
          "The other half of the Maidstone workload could not be more different. In the terraces it is careful second fix matched to Victorian profiles that no merchant stocks, and stair repairs to flights that have carried traffic since the 1890s.",
          "Out in the villages it is exposed structural timber in converted oasts and barns, where a repair is visible for the rest of the building's life and a bolt-on bracket will not do. We work these three markets in parallel, which is unusual and is the main reason our Maidstone diary is the fullest of anywhere we cover.",
        ],
      },
    ],
    neighbourhoods: ["Bearsted", "Boxley", "Penenden Heath", "Shepway", "Allington", "Tovil", "Barming", "Loose", "Coxheath", "Harrietsham"],
    serviceOrder: [FF, BJ, SF],
    faqs: [
      { q: "Do you charge to come out to a Maidstone address?", a: "No. Anywhere in ME14 to ME17 and the surrounding villages is a free visit with no obligation, and you get a written fixed quote afterwards whether or not you go ahead." },
      { q: "We are extending a 1930s semi. Do you do both carpentry stages?", a: "Yes, and on a Maidstone extension that is normally the sensible way round. We form the structure, come back once the plaster is dry, and hang doors into linings we set ourselves rather than someone else's." },
      { q: "Can you repair exposed beams in a converted oast?", a: "Yes. In exposed timber the repair has to look right as well as hold, so we splice into sound material and match the section rather than plating over it." },
    ],
    nearby: ["sittingbourne", "tonbridge", "sevenoaks", "medway"],
  },
  {
    slug: "ashford",
    name: "Ashford",
    inName: "Ashford",
    county: "Kent",
    postcodes: "TN23 to TN27",
    title: "Carpenter in Ashford | New Build Upgrades & Wardrobes",
    description:
      "Carpenter in Ashford, Kennington, Willesborough and Chilmington Green. Upgrading builder-standard doors and trim, fitted wardrobes in new-build bedrooms, media walls and home offices. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Ashford."],
    intro:
      "Ashford has added more new housing than anywhere else in Kent over the past twenty years, and that has given us a workload here unlike any other area we cover. Very little of it is repair. Almost all of it is taking a house that was built to a price and bringing it up to the standard the owner actually wanted.",
    marketSummary:
      "The most new-build dominated area on our patch, and by some distance our highest volume of specification upgrade work.",
    propertyMix: [
      { type: "Modern estate housing", weight: "Dominant", note: "Chilmington Green, Finberry, Repton Park and Singleton. Trussed roofs, hollow-core doors, thin architrave and empty bedrooms." },
      { type: "Victorian and Edwardian terraces", weight: "Common", note: "Beaver Road, Willesborough and the older streets near the centre. The only local stock with original joinery worth matching." },
      { type: "Rural cottages and farmhouses", weight: "Pockets", note: "Charing, Wye and the villages under the Downs. Older, irregular, and a different job entirely." },
    ],
    topJobs: [
      { job: "Replacing builder-standard doors and architrave", why: "Our single most requested Ashford job. Solid doors and a deeper profile change how a new house reads more than anything else for the money." },
      { job: "Fitted wardrobes in new-build bedrooms", why: "Estate houses are handed over with empty bedrooms and no storage at all, so wardrobes are usually the first thing the second owner wants." },
      { job: "Media walls and home offices", why: "The international station made Ashford a part-week commuter town, and part-week commuters need somewhere at home that is actually a desk." },
    ],
    demand: [
      {
        heading: "What a new-build actually needs from a carpenter",
        body: [
          "A house on Chilmington Green or Finberry is structurally sound and thermally good, and its carpentry is specified to hit a build cost. Hollow-core internal doors, the thinnest architrave that passes, no storage beyond whatever the plot allowed, and a loft that was never designed to be entered.",
          "None of that is a defect, but all of it is replaceable, and the difference is immediate. Solid doors close with weight behind them instead of rattling. A 95mm architrave gives a room a line. A wardrobe built to the actual ceiling height rather than a stock carcass gives back the foot of dead space above a flat-pack unit.",
        ],
      },
      {
        heading: "Why Ashford gets less period work than its neighbours",
        body: [
          "Compared with Canterbury or Faversham down the road, Ashford has relatively little protected or period stock, and that changes the shape of our year here. We do very little consent-governed repair and very little profile matching.",
          "What we do instead is closer to fitting out: measuring rooms that are square and predictable, and building into them. It is faster and more repeatable work, which is why we can usually offer an Ashford start date sooner than in the older towns.",
        ],
      },
    ],
    neighbourhoods: ["Willesborough", "Kennington", "Singleton", "Chilmington Green", "Repton Park", "Finberry", "Charing", "Wye"],
    serviceOrder: [BJ, SF, FF],
    faqs: [
      { q: "We have just moved into a new-build. What is worth doing first?", a: "Doors and architrave, then storage. It is the cheapest change with the biggest effect, and it is the one most Ashford owners tell us they wish they had done sooner." },
      { q: "Can you fit wardrobes into a room with a sloping ceiling?", a: "Yes, and it is common in the loft rooms on the newer estates. Built to the actual slope you get usable hanging space where a stock wardrobe simply will not go in." },
      { q: "Do you work on the older houses near Beaver Road too?", a: "Yes. That stock needs a different approach, closer to what we do in Canterbury: matching existing profiles and repairing rather than replacing." },
    ],
    nearby: ["canterbury", "folkestone", "maidstone", "faversham"],
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    inName: "Canterbury",
    county: "Kent",
    postcodes: "CT1 to CT4",
    title: "Carpenter in Canterbury | Period Work & HMO Fire Doors",
    description:
      "Carpenter in Canterbury, Wincheap, St Dunstan's and Sturry. Repair-first work in listed and conservation area property, plus fire door installation for student landlords. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Canterbury."],
    intro:
      "Canterbury splits our work down the middle in a way no other area does. Inside the walls, what you are allowed to do is governed by consent and the answer is almost always repair rather than replace. Outside them, the student rental market generates a steady, completely different demand built around compliance.",
    marketSummary:
      "The only area we cover where consent and compliance shape more of the work than the property itself does.",
    propertyMix: [
      { type: "Listed and conservation area buildings", weight: "Common", note: "The walled city and the streets off it. Timber framed and Georgian, with protected fabric and very little tolerance for replacement." },
      { type: "Victorian and Edwardian terraces", weight: "Dominant", note: "Wincheap, St Dunstan's and out along the Whitstable Road. A high proportion now in multiple occupation." },
      { type: "Post-war and modern housing", weight: "Pockets", note: "Sturry, Hersden and the estates on the ring. Conventional stock, conventional work." },
    ],
    topJobs: [
      { job: "Fire door installation for student landlords", why: "Our highest volume Canterbury job. Fire doors are the item most often failed at inspection, and almost never on the door itself." },
      { job: "Repair to listed and conservation area timber", why: "Splicing into sound material and matching existing sections, because in a protected building replacement is rarely the permitted answer." },
      { job: "Second fix matched to original profiles", why: "The Victorian terraces have deep, specific mouldings, and a room finished in stock trim always reads as an addition." },
    ],
    demand: [
      {
        heading: "Why fire doors fail inspection in Canterbury",
        body: [
          "The two universities have turned a large share of the Wincheap and St Dunstan's terraces into shared houses, and every one of them needs fire doors that will actually pass a fire risk assessment. In our experience the door leaf is almost never the problem.",
          "What fails is the gap around it being too big or uneven, intumescent strips missing or the wrong width, the ironmongery not being fire rated, or a self-closer that has been disconnected because a tenant found it annoying. We fit to the door set specification and can give you a photographic record per opening for your handover or assessment pack.",
        ],
      },
      {
        heading: "Working inside the city walls",
        body: [
          "In a listed building the default is retention. We work repair-first, cutting out only what has failed and splicing in new timber to match the existing section, because a wholesale replacement is both harder to get consent for and worse for the building.",
          "Listed building consent is the owner's responsibility rather than ours, but we would far rather you confirm the position before we start than discover it halfway through. If a proposal is not going to get through, it is cheaper to know in week one.",
        ],
      },
    ],
    neighbourhoods: ["Wincheap", "St Dunstan's", "Harbledown", "Sturry", "Bridge", "Chartham", "Blean", "Rough Common"],
    serviceOrder: [SF, BJ, FF],
    faqs: [
      { q: "Can you certify the fire doors you fit?", a: "We fit to the door set's specification and provide a photographic record per opening covering gaps, strips and ironmongery. The formal assessment is your fire risk assessor's, but that record is normally what they want to see." },
      { q: "Can you work on a listed building in Canterbury?", a: "Yes, repair-first. Consent is the owner's responsibility and we would rather you confirm it before we start, because a refused proposal is much cheaper to find out about early." },
      { q: "Do you take on HMO turnarounds between tenancies?", a: "Yes. Summer is the obvious window in Canterbury and it books up early, so tell us as far ahead as you can and we will hold the weeks." },
    ],
    nearby: ["whitstable", "herne-bay", "faversham", "ashford"],
  },
  {
    slug: "medway",
    name: "the Medway Towns",
    inName: "Medway",
    county: "Kent",
    postcodes: "ME1 to ME8",
    title: "Carpenter in Medway | Rochester, Chatham & Gillingham",
    description:
      "Carpenter across Rochester, Chatham, Gillingham and Strood. Victorian terrace joinery, stair repairs, landlord void turnarounds and fire door installation. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter across", "the Medway Towns."],
    intro:
      "Medway holds one of the largest concentrations of Victorian terraced housing anywhere in the South East, built fast and in quantity for the dockyard and never really replaced. One fact shapes nearly everything we do here, and it is that the houses are all roughly the same age, the same size and in need of the same things.",
    marketSummary:
      "Our highest proportion of landlord and letting agent work, driven by the volume of rented Victorian terrace stock.",
    propertyMix: [
      { type: "Victorian terraces", weight: "Dominant", note: "Street after street across Chatham, Gillingham and Luton. A large share subdivided into flats or run as shared houses." },
      { type: "Georgian and listed buildings", weight: "Pockets", note: "Rochester High Street and the lanes behind it. Protected, older and a very different job." },
      { type: "Modern waterfront apartments", weight: "Common", note: "Chatham Maritime and the regenerated riverside. Newer stock with compliance-led rather than character-led requirements." },
    ],
    topJobs: [
      { job: "Void turnarounds between tenancies", why: "Our most frequent Medway call. Doors, trim, stair parts and storage put back to lettable condition inside a short window." },
      { job: "Fire door installation and upgrades", why: "The volume of conversions and shared houses means fire doors are a recurring rather than one-off requirement across most portfolios here." },
      { job: "Stair repair on worn Victorian flights", why: "Terrace flights are typically 130 years old and treads go before anything else. Replacement treads and risers cost a fraction of a new flight." },
    ],
    demand: [
      {
        heading: "Why Medway is a landlord market",
        body: [
          "Because so much of the stock is the same, so much of it is rented. We work for landlords and letting agents across Medway more than anywhere else we cover, and the requirement is different from a homeowner's: it is about turnaround speed, durability, and passing inspection.",
          "That shapes how we price and how we work. On a void we will give you a fixed figure and a number of days rather than an open-ended day rate, because a week of overrun on an empty property costs you more than the carpentry does.",
        ],
      },
      {
        heading: "Terrace joinery, repeated",
        body: [
          "The upside of uniform stock is that we know these houses. The chimney breast recesses, the stair geometry, the ceiling heights and the moulding profiles repeat street to street, so a set of alcove cupboards or a stair repair here is quicker and more predictable than the same job in a mixed area.",
          "Around Rochester High Street it changes completely. The Georgian and listed buildings there need the repair-first approach we use in Faversham and Canterbury, with matched sections and nothing thrown away that can be saved.",
        ],
      },
    ],
    neighbourhoods: ["Rochester", "Chatham", "Gillingham", "Strood", "Rainham", "Walderslade", "Hempstead", "Cuxton"],
    serviceOrder: [SF, FF, BJ],
    faqs: [
      { q: "How fast can you turn a void around?", a: "On a standard Medway terrace, usually inside a week for the carpentry, and we will give you the number of days at quote stage rather than after we start. Empty weeks cost you more than we do." },
      { q: "Do you price per property across a portfolio?", a: "Yes. If the houses are similar, which in Medway they usually are, we can price a repeatable scope per property so you can budget across the portfolio rather than job by job." },
      { q: "Can you work on the listed buildings in Rochester?", a: "Yes, with the same repair-first approach we use in Faversham. Consent is the owner's responsibility and worth confirming before anything starts." },
    ],
    nearby: ["gravesend", "sittingbourne", "maidstone", "dartford"],
  },
  {
    slug: "tunbridge-wells",
    name: "Royal Tunbridge Wells",
    inName: "Tunbridge Wells",
    county: "Kent",
    postcodes: "TN1 to TN4",
    title: "Carpenter in Tunbridge Wells | Panelling & Period Joinery",
    description:
      "Carpenter in Royal Tunbridge Wells, Rusthall, Southborough and Pembury. Panelling, matched mouldings, turned balusters and hardwood joinery for Regency and Victorian villas. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Tunbridge Wells."],
    intro:
      "Tunbridge Wells has more surviving decorative joinery than anywhere else we work. Regency and early Victorian building left the town full of detail, a great deal of it still in place, and clients here generally want new work to disappear into it rather than announce itself.",
    marketSummary:
      "Our most joinery-led area, with the highest proportion of hardwood, matched profiles and genuinely decorative work.",
    propertyMix: [
      { type: "Regency and early Victorian villas", weight: "Dominant", note: "The Pantiles, Mount Ephraim and Calverley Park. Deep skirting, panelled doors, moulded architrave and decorative balustrades, largely intact." },
      { type: "Substantial Edwardian houses", weight: "Common", note: "Out through Rusthall and Southborough. Big rooms, generous ceiling heights and detail worth respecting." },
      { type: "Later twentieth century housing", weight: "Pockets", note: "The estates on the fringes. Conventional work, and a small share of what we do here." },
    ],
    topJobs: [
      { job: "Wall panelling and matched mouldings", why: "The defining Tunbridge Wells job. Run to a profile taken from the house, so a new room reads as original rather than added." },
      { job: "Replacement balusters and stair parts", why: "Decorative balustrades lose spindles over a century. We match the original turned pattern rather than substituting a stock spindle." },
      { job: "Alcove cupboards built to room proportion", why: "In rooms with three metre ceilings, a standard height unit looks wrong. These are designed to the room's own proportions." },
    ],
    demand: [
      {
        heading: "Why matching matters more here",
        body: [
          "In most of Kent, second fix trim is a functional item. In Tunbridge Wells it is part of what the house is worth. A Victorian villa with 180mm moulded skirting and a new room finished in 119mm torus reads as compromised the moment you walk in, and it shows in a valuation.",
          "So we take a profile from the existing trim and either source the closest genuine match or have it run. It costs more than buying off a rack and it takes longer to arrive, which is why we raise it at quote stage rather than on the day the trim turns up.",
        ],
      },
      {
        heading: "Hardwood, and where it is worth it",
        body: [
          "Budgets here generally allow for hardwood, but that does not mean it belongs everywhere. Painted MDF gives a cleaner line on panelling and cupboard doors that are going to be sprayed, and on a painted finish nobody can tell what is underneath.",
          "Where hardwood earns its cost is anywhere the grain is visible or the piece takes daily wear: handrails, stair parts, window seat lids, a desk top. We will tell you which is which rather than quoting the most expensive option across the board.",
        ],
      },
    ],
    neighbourhoods: ["Rusthall", "Southborough", "Pembury", "Langton Green", "Speldhurst", "Bidborough", "Frant"],
    serviceOrder: [BJ, SF, FF],
    faqs: [
      { q: "Can you match the original mouldings in a Victorian villa?", a: "In almost every case. We take a profile from the existing trim and either source the nearest genuine match or have it run. Bespoke runs need lead time, so we flag it when we quote." },
      { q: "Can you replace missing balusters on a decorative staircase?", a: "Yes. We match the original turned pattern rather than dropping in a stock spindle, which on a Tunbridge Wells balustrade would be obvious from the hallway." },
      { q: "Is panelling suitable for a period room?", a: "Usually yes, but the height and proportion have to follow the room rather than a standard. Done properly it looks original. Done to a fixed height it never does." },
    ],
    nearby: ["tonbridge", "sevenoaks", "crowborough", "maidstone"],
  },
  {
    slug: "tonbridge",
    name: "Tonbridge",
    inName: "Tonbridge",
    county: "Kent",
    postcodes: "TN9 to TN12",
    title: "Carpenter in Tonbridge | Loft & Extension Carpentry",
    description:
      "Carpenter in Tonbridge, Hildenborough and Higham Wood. Loft conversion carpentry, new stair flights and full extension packages for families extending rather than moving. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Tonbridge."],
    intro:
      "Tonbridge is where families arrive for the schools and the direct line into London, and then stay. What they do instead of moving again is build, which makes this the most extension and loft driven area on our whole patch.",
    marketSummary:
      "Highest concentration of loft conversion and extension carpentry we do anywhere, and the area where the staircase decides the project.",
    propertyMix: [
      { type: "Interwar semis and detached", weight: "Dominant", note: "Spreading south and east of the town. Good plot depth and, crucially, a roof pitch that usually makes a loft viable." },
      { type: "Victorian and Edwardian villas", weight: "Common", note: "The streets near the station. Taller, with the head height that makes a loft conversion straightforward." },
      { type: "Newer estate housing", weight: "Pockets", note: "Around Hildenborough and the town fringes. Trussed roofs, which changes the loft answer entirely." },
    ],
    topJobs: [
      { job: "Loft conversion carpentry", why: "Our number one Tonbridge job, and the stair is what makes or breaks it before anything else is decided." },
      { job: "Rear and side extension packages", why: "Both stages: roof structure, joists and partitions first, then doors, trim and storage once the plaster is dry." },
      { job: "New and replacement stair flights", why: "A loft needs a compliant second flight, and it has to land somewhere that does not lose the landing it arrives on." },
    ],
    demand: [
      {
        heading: "The staircase decides whether a loft works",
        body: [
          "Before anyone talks about roof lights or en suites, the question is whether a compliant flight can be fitted that hits head height at the top and does not swallow the landing at the bottom. On the interwar semis around Higham Wood that is usually solvable. On some layouts it is not, and finding out in week three is expensive.",
          "So it is the first thing we look at. Rise, going, head height over the flight and where it lands, measured on site. If the geometry does not work we will tell you at the free visit rather than after you have paid for drawings.",
        ],
      },
      {
        heading: "Trussed roofs change the answer",
        body: [
          "The newer housing around Hildenborough and the town edges is mostly trussed rather than cut. A trussed roof has no usable void, because the webs run right through where the room would be, and converting one means structural alteration rather than carpentry alone.",
          "It is still doable, but it is a different job with a different price and it needs an engineer. We will say which sort of roof you have on the first visit, because it changes the conversation completely.",
        ],
      },
    ],
    neighbourhoods: ["Hildenborough", "Higham Wood", "Haysden", "Golden Green", "Shipbourne", "Leigh", "Hadlow"],
    serviceOrder: [FF, SF, BJ],
    faqs: [
      { q: "Can our loft be converted?", a: "The roof type and the stair decide it. A cut roof with head height over a viable flight usually can. A trussed roof needs structural alteration first. We will tell you which you have at the free visit." },
      { q: "Do you do the carpentry on both stages of an extension?", a: "Yes, and in Tonbridge that is nearly always how we work. Same team forming the structure and hanging the doors into it several weeks later." },
      { q: "How long is the gap between first and second fix?", a: "Usually two to four weeks while plaster dries and first fix services and decoration prep are done. We would rather come back at the right point than rush and leave you work that has to be redone." },
    ],
    nearby: ["tunbridge-wells", "sevenoaks", "maidstone", "crowborough"],
  },
  {
    slug: "sevenoaks",
    name: "Sevenoaks",
    inName: "Sevenoaks",
    county: "Kent",
    postcodes: "TN13 to TN15",
    title: "Carpenter in Sevenoaks | Whole House & Garden Joinery",
    description:
      "Carpenter in Sevenoaks, Riverhead, Otford and Kemsing. Whole-house refurbishment carpentry, substantial pergolas and outdoor kitchens, barn and annexe joinery. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Sevenoaks."],
    intro:
      "Sevenoaks and the villages around it produce our largest and longest projects. Work here is more often a whole house than a single room, programmes run into months rather than weeks, and the external joinery is on a scale we rarely see elsewhere.",
    marketSummary:
      "Biggest average project size on our patch, and the area where one team across all three stages matters most.",
    propertyMix: [
      { type: "Large Edwardian and Arts and Crafts houses", weight: "Dominant", note: "The town, Riverhead and Kippington. Substantial rooms, original detail and owners who intend to keep it." },
      { type: "Period farmhouses and converted barns", weight: "Common", note: "Out through Weald, Kemsing and Seal. Exposed frames, irregular openings and outbuildings with potential." },
      { type: "Post-war detached", weight: "Pockets", note: "Dunton Green and the newer roads. Conventional stock in an otherwise unconventional area." },
    ],
    topJobs: [
      { job: "Whole-house refurbishment carpentry", why: "Our most common Sevenoaks brief and the one that suits us best: one team covering first fix, second fix and the bespoke pieces across a long programme." },
      { job: "Substantial pergolas and outdoor kitchens", why: "Plots here are big enough that external structures are architectural rather than decorative, and they get looked at from the house every day." },
      { job: "Annexe and outbuilding conversion", why: "Barns, stables and garages being brought into use, which means first fix structure and a full second fix in the same project." },
    ],
    demand: [
      {
        heading: "Why long programmes suit one team",
        body: [
          "On a six month refurbishment the carpentry is not one visit, it is a thread running through the whole job. Structure early, joinery in the middle, finishing at the end, with decisions made in month one that only show up in month five.",
          "Booking three different carpenters across that means re-measuring, re-explaining and a finish that changes halfway through the house. We cover all three stages, so the person who set the door linings in February is the person hanging doors into them in April.",
        ],
      },
      {
        heading: "External joinery that has to hold its line",
        body: [
          "A pergola or outdoor kitchen on a Sevenoaks plot is usually in direct sight of the main rooms, which means it has to stay square and stay level for years rather than seasons. That is a footings question long before it is a timber question.",
          "We set proper footings rather than standing a frame on slabs, use treated or naturally durable timber, and seal end grain. A structure that moves with the ground racks within a couple of winters, and once it has racked nothing you do to the timber will fix it.",
        ],
      },
    ],
    neighbourhoods: ["Riverhead", "Otford", "Kemsing", "Seal", "Weald", "Dunton Green", "Chipstead", "Kippington"],
    serviceOrder: [BJ, FF, SF],
    faqs: [
      { q: "Do you take on whole-house refurbishments?", a: "Yes, and they suit how we work. One team across first fix, second fix and bespoke, so nothing is lost between stages on a project running for months." },
      { q: "Will you work alongside our architect and main contractor?", a: "Yes, regularly. We price from drawings, work to the programme someone else is running, and raise anything that does not match what has actually been built before it is covered up." },
      { q: "Do garden structures need planning permission?", a: "Often not, but it depends on size, height and position, and more of Sevenoaks sits in protected landscape than people expect. Worth confirming before we build rather than after." },
    ],
    nearby: ["tonbridge", "tunbridge-wells", "dartford", "bromley"],
  },
  {
    slug: "sittingbourne",
    name: "Sittingbourne",
    inName: "Sittingbourne",
    county: "Kent",
    postcodes: "ME9 to ME10",
    title: "Carpenter in Sittingbourne | Fitted Storage & Alcoves",
    description:
      "Carpenter in Sittingbourne, Milton Regis, Kemsley and Iwade. Under-stair storage, full-height alcove units and made-to-measure wardrobes for narrow terraced rooms. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Sittingbourne."],
    intro:
      "Sittingbourne was built for its paper mills and brickfields, and the housing that went up for that workforce is narrower than almost anything comparable in Kent. Here the constraint is rarely the budget. It is the physical width of the room, and that is a carpentry problem before it is anything else.",
    marketSummary:
      "The area where fitted storage does most of the work, because standard depths simply do not fit the rooms.",
    propertyMix: [
      { type: "Victorian and Edwardian terraces", weight: "Dominant", note: "Milton Regis and the older centre. Narrower rooms and shallower chimney recesses than their Maidstone equivalents." },
      { type: "Post-war estate housing", weight: "Common", note: "Spread across the town. Compact, practical and well suited to built-in storage." },
      { type: "New estate development", weight: "Common", note: "North of the town and towards Kemsley and Iwade. Upgrade work closer to what we do in Ashford." },
    ],
    topJobs: [
      { job: "Under-stair storage and drawers", why: "Our most requested Sittingbourne job. In a narrow terrace the under-stair void is often the only unused space in the house." },
      { job: "Full-height alcove units", why: "If a recess is too shallow for depth, the only way left is up, and full-height changes what a small room can hold." },
      { job: "Reduced-depth fitted wardrobes", why: "A standard 600mm carcass blocks the door in these bedrooms. Made to measure at a shallower depth, it works." },
    ],
    demand: [
      {
        heading: "Why standard sizes fail in a Sittingbourne terrace",
        body: [
            "Flat-pack and stock joinery is built around assumptions: a 600mm wardrobe depth, a 300mm shelf, a chimney recess wide enough to take a carcass with packers either side. Milton Regis terraces were not built to those assumptions and they do not meet them.",
            "The usual outcome is a wardrobe that stops the bedroom door opening fully, or an alcove unit with a 40mm filler strip down one side because the recess narrows towards the top. Made to measure at a depth that actually suits the room solves both, and usually costs less than people expect once you count what the stock option wastes.",
        ],
      },
      {
        heading: "Going up instead of out",
        body: [
          "When a room has no spare width, the only direction left is vertical. Full-height alcove units, storage above door heads, and shelving that runs to the ceiling rather than stopping at a standard carcass height.",
          "It changes what a small terrace can hold quite dramatically, and it is the single piece of advice we give most often on a Sittingbourne visit. The space above head height in these houses is almost always empty and almost always usable.",
        ],
      },
    ],
    neighbourhoods: ["Milton Regis", "Kemsley", "Bapchild", "Borden", "Iwade", "Newington", "Teynham", "Murston"],
    serviceOrder: [BJ, SF, FF],
    faqs: [
      { q: "Will fitted storage work in a narrow terrace?", a: "Usually, but not at standard depths. We measure the actual recess, which in these houses is rarely the same width at the top and the bottom, and build to what is there." },
      { q: "Is under-stair storage worth doing?", a: "In a Sittingbourne terrace it is often the best value job in the house, because that void is usually the only unused space left and it is bigger than it looks." },
      { q: "Do you work on the new estates at Kemsley and Iwade?", a: "Yes. That work is different, closer to what we do in Ashford: upgrading builder-standard doors and trim and fitting out bedrooms handed over empty." },
    ],
    nearby: ["faversham", "medway", "maidstone", "whitstable"],
  },
  {
    slug: "faversham",
    name: "Faversham",
    inName: "Faversham",
    county: "Kent",
    postcodes: "ME13",
    title: "Carpenter in Faversham | Listed & Timber Framed Work",
    description:
      "Carpenter in Faversham, Ospringe, Boughton and Oare. Repair-first joinery for listed, timber framed and Georgian buildings where nothing is square. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Faversham."],
    intro:
      "Faversham has more listed buildings than almost any comparable market town in England, and working here means accepting a basic fact: the building was not built to modern tolerances, it never was, and trying to impose them on it makes the job worse rather than better.",
    marketSummary:
      "The most repair-led area we cover, and the one where scribing rather than measuring is the normal way to work.",
    propertyMix: [
      { type: "Listed and timber framed buildings", weight: "Dominant", note: "Abbey Street, Court Street and the creekside lanes. Unusually complete survival, and protected accordingly." },
      { type: "Georgian frontages", weight: "Common", note: "Through the centre. Handsome, regular from the street and frequently anything but behind it." },
      { type: "Victorian and later housing", weight: "Pockets", note: "The streets out towards Ospringe. Conventional stock in a decidedly unconventional town." },
    ],
    topJobs: [
      { job: "Splicing repairs into existing timber", why: "The default answer in a protected building. Cut out what has failed, splice in matching material, keep everything sound." },
      { job: "Scribed fitted joinery", why: "Nothing here is square, so cupboards and units are scribed to the opening rather than cut to a single dimension." },
      { job: "Matching historic section sizes", why: "Original timbers are rarely a size you can buy. Matching the section matters as much as matching the profile." },
    ],
    demand: [
      {
        heading: "Why we measure in five places, not one",
        body: [
          "In a modern house you measure an opening once and cut to it. In a Faversham building that approach produces a cupboard with a tapering gap down one side, because the opening is 12mm wider at the bottom than the top and the floor falls away towards the wall.",
          "So we measure top, middle and bottom, both diagonals, and the floor level across the opening, then scribe the piece to fit what is actually there. It takes longer at the survey and longer at the fit, and it is the only way the finished thing looks like it belongs.",
        ],
      },
      {
        heading: "Repair before replacement",
        body: [
          "In a listed building replacement is rarely the permitted answer and almost never the right one. An oak wall plate with 200mm of rot at one end does not need replacing, it needs that 200mm cut out and a matched splice let in.",
          "That approach keeps original fabric, is far more likely to get consent, and usually costs less than a wholesale replacement once you account for what a full replacement disturbs. Consent itself is the owner's responsibility, and in Faversham it is worth establishing early.",
        ],
      },
    ],
    neighbourhoods: ["Ospringe", "Preston", "Boughton", "Selling", "Oare", "Davington", "Painters Forstal"],
    serviceOrder: [SF, BJ, FF],
    faqs: [
      { q: "My house is not square anywhere. Is that a problem?", a: "Not for us, it is normal in Faversham. Pieces are scribed to the opening rather than cut to a dimension, and we measure in several places before anything is made." },
      { q: "Can original timber be repaired rather than replaced?", a: "Usually yes, and in a listed building it is normally the only answer that will get consent. We splice into sound material and match the existing section." },
      { q: "Do I need listed building consent?", a: "Often, and it is the owner's responsibility rather than ours. We would far rather you confirm the position before we start, because a refused proposal is much cheaper to discover in week one." },
    ],
    nearby: ["canterbury", "sittingbourne", "whitstable", "ashford"],
  },
  {
    slug: "whitstable",
    name: "Whitstable",
    inName: "Whitstable",
    county: "Kent",
    postcodes: "CT5",
    title: "Carpenter in Whitstable | Weatherboard & Coastal Timber",
    description:
      "Carpenter in Whitstable, Tankerton and Seasalter. Weatherboard repair, durable external timber specified for salt air, and hard-wearing joinery for holiday lets. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Whitstable."],
    intro:
      "Whitstable is the one place on our patch where the weather writes the specification. Timber a few hundred metres from the sea has a considerably harder life than the same timber inland, and pretending otherwise is how you end up back at the same property in three years doing the job again.",
    marketSummary:
      "Our most externally focused area, and the only one where material and fixing choice matters more than the joinery itself.",
    propertyMix: [
      { type: "Weatherboarded cottages", weight: "Dominant", note: "The harbour, Island Wall and the streets off Harbour Street. External timber is the town's defining feature and is protected in places." },
      { type: "Victorian terraces and villas", weight: "Common", note: "Through Tankerton and up the hill. Conventional inside, exposed outside." },
      { type: "Holiday lets and second homes", weight: "Common", note: "Spread across the town. A high turnover market with a specific interior requirement." },
    ],
    topJobs: [
      { job: "Weatherboard repair and replacement", why: "The most common Whitstable call by a distance, and the work the town's appearance depends on." },
      { job: "External timber specified for salt air", why: "Treated or naturally durable timber, stainless fixings and sealed end grain, because the standard specification does not last here." },
      { job: "Hard-wearing joinery for holiday lets", why: "A property turning over weekly takes more abuse in a year than a family home takes in five, and the storage has to survive it." },
    ],
    demand: [
      {
        heading: "What salt air actually does to timber",
        body: [
          "Two things fail first near the sea, and neither is the timber itself. Fixings go first: standard bright or electro-plated screws corrode, then bleed rust down the face of the board and lose their grip on the substrate. Then end grain goes, because a sawn end drinks water and nothing was ever applied to stop it.",
          "So the specification here is stainless or properly coated fixings, treated or naturally durable timber, and every cut end sealed before it goes up. It adds a small amount to the material cost and it is the difference between a repair lasting fifteen years and five.",
        ],
      },
      {
        heading: "Joinery that survives a weekly changeover",
        body: [
          "Holiday lets are a substantial slice of the Whitstable market and they have a genuinely different brief. A wardrobe in a let is opened by strangers a hundred times a year, and nobody in it has any reason to be careful with it.",
          "That pushes us towards heavier carcasses, proper hinges rather than the cheapest that will function, and finishes that can be wiped rather than needing care. It costs more up front and it is the version that is still working when the property changes hands.",
        ],
      },
    ],
    neighbourhoods: ["Tankerton", "Seasalter", "Chestfield", "Swalecliffe", "Yorkletts", "Borstal Hill"],
    serviceOrder: [BJ, SF, FF],
    faqs: [
      { q: "What timber lasts near the sea?", a: "Treated softwood or a naturally durable hardwood, with stainless or properly coated fixings and every cut end sealed. Salt air finds any untreated cut within a couple of seasons." },
      { q: "Can you repair weatherboarding rather than replace the lot?", a: "Usually yes. Failure is normally localised around fixings and ends, so replacing the affected boards and re-fixing properly is common and much cheaper than a full re-clad." },
      { q: "Do you fit out holiday lets?", a: "Yes, and we build them differently. Heavier carcasses, better hinges and wipeable finishes, because weekly changeovers are harder on joinery than family use." },
    ],
    nearby: ["herne-bay", "canterbury", "faversham", "sittingbourne"],
  },
  {
    slug: "herne-bay",
    name: "Herne Bay",
    inName: "Herne Bay",
    county: "Kent",
    postcodes: "CT6",
    title: "Carpenter in Herne Bay | Bungalow Lofts & Storage",
    description:
      "Carpenter in Herne Bay, Beltinge, Greenhill and Herne. Bungalow loft stairs, accessible fitted storage, sturdy handrails and level thresholds. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Herne Bay."],
    intro:
      "Herne Bay has a completely different profile from its neighbours along the coast. Far more of it is single storey, and a large share of the people we work for here have no intention of moving again, which changes what they want a carpenter to do.",
    marketSummary:
      "More bungalow work than anywhere else we cover, and the highest share of adapting a house to be lived in long term.",
    propertyMix: [
      { type: "Interwar and post-war bungalows", weight: "Dominant", note: "Spread widely inland from the front. Generous loft voids that were never designed to be used but frequently could be." },
      { type: "Victorian seafront terraces and villas", weight: "Common", note: "Along the front and around the centre. Taller, older and a different job entirely." },
      { type: "Modern estate housing", weight: "Pockets", note: "The newer development on the edges. Conventional fitting out work." },
    ],
    topJobs: [
      { job: "Bungalow loft conversion stairs", why: "Our defining Herne Bay job, and the one thing that decides whether a bungalow loft is possible at all." },
      { job: "Accessible fitted storage", why: "Storage designed to be reached without a stool, with pull-out rather than deep fixed shelving." },
      { job: "Sturdy handrails and level thresholds", why: "Small carpentry that makes a real difference to staying in a house, and it needs fixing into something solid." },
    ],
    demand: [
      {
        heading: "Why the stair is the whole question in a bungalow",
        body: [
          "A bungalow loft usually has the volume. What it rarely has is anywhere to put a compliant staircase without taking the hallway, and the hallway in a bungalow is often the only thing connecting the rooms.",
          "So on a Herne Bay bungalow we start there. Whether a flight can run somewhere that hits head height at the top, lands somewhere usable, and leaves the ground floor still working as a home. Sometimes there is an elegant answer and sometimes there genuinely is not, and we will tell you which on the first visit.",
        ],
      },
      {
        heading: "Carpentry for staying put",
        body: [
          "A lot of what we do here is not about adding space, it is about making the existing space work for longer. Pull-out storage instead of deep cupboards nobody can reach into. A handrail that is fixed into structure rather than plasterboard. A threshold taken level so nothing catches.",
          "These are small jobs individually and they are among the most useful carpentry we do. They are also easy to get wrong: a handrail that looks fine and is screwed into a stud wall without a pattress is worse than no handrail at all.",
        ],
      },
    ],
    neighbourhoods: ["Beltinge", "Studd Hill", "Greenhill", "Hillborough", "Reculver", "Herne", "Broomfield"],
    serviceOrder: [FF, SF, BJ],
    faqs: [
      { q: "Can a bungalow loft be converted?", a: "Often, but the stair decides it. We look at whether a compliant flight exists that hits head height without swallowing the hallway, and we will tell you straight if it does not work." },
      { q: "Can you fit handrails and grab rails properly?", a: "Yes, and fixing matters more than the rail. We fix into structure or add pattressing, because a rail screwed into plasterboard is worse than none at all." },
      { q: "Can storage be made easier to reach?", a: "Yes. Pull-out shelving and drawers instead of deep fixed cupboards makes a substantial difference, and it is one of the most worthwhile changes in a bungalow." },
    ],
    nearby: ["whitstable", "canterbury", "faversham", "folkestone"],
  },
  {
    slug: "folkestone",
    name: "Folkestone",
    inName: "Folkestone",
    county: "Kent",
    postcodes: "CT18 to CT20",
    title: "Carpenter in Folkestone | Conversions & Fire Doors",
    description:
      "Carpenter in Folkestone, Sandgate, Cheriton and Hythe. Conversion partitions, compliant fire door sets and stair repair in large subdivided Victorian houses. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Folkestone."],
    intro:
      "Folkestone has changed a great deal in the last decade. Regeneration around the Creative Quarter and the harbour has brought a lot of large, long-neglected building back into use, and most of that means subdivision: turning one enormous house into four flats that each have to work and each have to comply.",
    marketSummary:
      "Our highest volume of conversion work, where first fix partitioning and compliant fire doors go in together.",
    propertyMix: [
      { type: "Large Victorian terraces and villas", weight: "Dominant", note: "The Leas, Clifton Crescent and Castle Hill Avenue. Grand, tall, and the great majority already divided into flats." },
      { type: "Older harbour housing", weight: "Common", note: "The Old High Street and the lanes behind. Tighter, older and frequently irregular." },
      { type: "Interwar and post-war housing", weight: "Common", note: "Inland through Cheriton and Hawkinge. Conventional family stock." },
    ],
    topJobs: [
      { job: "Conversion partitions and door sets", why: "The core Folkestone job. Forming new flat layouts inside a shell that was designed as one house." },
      { job: "Fire door installation to specification", why: "Every conversion needs them and they are the item most often failed on handover, usually on gaps and ironmongery rather than the door." },
      { job: "Stair repair in subdivided houses", why: "A flight built for one family now carries four households, and treads and nosings go first." },
    ],
    demand: [
      {
        heading: "Turning one house into four",
        body: [
          "A conversion is a first fix and second fix job compressed together. New partitions have to land on something that will carry them, service routes have to be planned before anything is boarded, and every new opening needs a door set that will satisfy building control rather than merely fill the hole.",
          "The complication in Folkestone is that these buildings have usually been altered before, often more than once and rarely with any record. We survey what is actually there before pricing, because a drawing of a Leas villa and the building itself are frequently two different things.",
        ],
      },
      {
        heading: "Stairs that now carry four households",
        body: [
          "A communal flight in a converted house takes several times the traffic it was built for. Treads wear through at the nosing, the flight starts to move, and what was a comfortable domestic staircase becomes a liability in a common part.",
          "Replacement treads and risers on a sound carriage cost a fraction of a new flight and are usually the right answer. Where the carriage itself has gone, we will say so rather than patching over a structural problem in a shared escape route.",
        ],
      },
    ],
    neighbourhoods: ["Sandgate", "Cheriton", "Hawkinge", "Hythe", "Capel-le-Ferne", "Elham", "Seabrook"],
    serviceOrder: [FF, SF, BJ],
    faqs: [
      { q: "Do you fit fire doors for converted flats?", a: "Yes, and it is one of our most common Folkestone jobs. Fitted to the door set specification with correct gaps, intumescent strips and fire rated ironmongery, with a photographic record per opening if you need one." },
      { q: "Can you price a conversion from drawings?", a: "We can give an indicative figure, but on a Folkestone conversion we would rather come and look. These buildings have almost always been altered before and rarely match the drawing." },
      { q: "Is it worth repairing a worn communal staircase?", a: "Usually. If the carriage is sound, replacement treads and risers cost far less than a new flight. If it is not, we will tell you, because it is an escape route." },
    ],
    nearby: ["ashford", "canterbury", "herne-bay", "whitstable"],
  },
  {
    slug: "gravesend",
    name: "Gravesend",
    inName: "Gravesend",
    county: "Kent",
    postcodes: "DA11 to DA13",
    title: "Carpenter in Gravesend & Ebbsfleet | Joinery & Storage",
    description:
      "Carpenter in Gravesend, Northfleet, Ebbsfleet and Meopham. New-build specification upgrades, terrace storage and riverside conversion carpentry. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Gravesend."],
    intro:
      "Gravesend runs two entirely separate housing markets side by side, and we work in both in the same week. A dense Victorian centre where the houses are 140 years old, and Ebbsfleet on the doorstep where some of them are not yet finished.",
    marketSummary:
      "The sharpest split of any area we cover, between period terrace work and brand new specification upgrades.",
    propertyMix: [
      { type: "Victorian terraces", weight: "Dominant", note: "The town centre and Northfleet. Compact, consistent and largely unmodernised internally." },
      { type: "Ebbsfleet and new estate housing", weight: "Common", note: "The western edge and growing. Built to specification, handed over bare." },
      { type: "Riverside conversions", weight: "Pockets", note: "Former industrial and commercial building brought into residential use along the front." },
    ],
    topJobs: [
      { job: "New-build door and trim upgrades", why: "Ebbsfleet and Northfleet buyers moving in and immediately replacing hollow doors and thin architrave." },
      { job: "Terrace storage and alcove units", why: "The town centre Victorian stock, where built-in storage is the only storage there is going to be." },
      { job: "Conversion first fix along the river", why: "Partitions, door sets and compliant fire doors in buildings being changed of use." },
    ],
    demand: [
      {
        heading: "Ebbsfleet: what to change first",
        body: [
          "The question we are asked most often by new Ebbsfleet owners is what is worth doing first, and the answer is nearly always the same. Internal doors and architrave, then storage.",
          "Developer specification is not poor, it is priced. Hollow-core doors and 69mm architrave meet requirement and cost the least, and replacing them is the single most noticeable change you can make to a new house. Wardrobes come second, because new bedrooms are almost always handed over completely empty.",
        ],
      },
      {
        heading: "A different job two miles away",
        body: [
          "In the town centre terraces nothing is bare and nothing is standard. Rooms are narrow, chimney breasts eat the width, and any storage has to be built into the recess rather than stood in front of it.",
          "It is a more considered job than the new build work and it takes longer per room, which is why we price them separately even when the same customer owns both. We are asked to do exactly that more often in Gravesend than anywhere else, usually by people who have kept the old house and let it.",
        ],
      },
    ],
    neighbourhoods: ["Northfleet", "Ebbsfleet", "Istead Rise", "Higham", "Shorne", "Meopham", "Perry Street"],
    serviceOrder: [SF, BJ, FF],
    faqs: [
      { q: "We have just moved into a new house at Ebbsfleet. What is worth doing first?", a: "Internal doors and architrave, then storage. Developer specification is built to a price, and replacing hollow doors and thin trim lifts the whole house more than anything else for the money." },
      { q: "Do you work on the older terraces as well?", a: "Yes, and it is a different job. Narrow rooms and chimney recesses mean storage has to be built in rather than stood in front of the wall." },
      { q: "Can you do fire doors for a riverside conversion?", a: "Yes. Change of use work needs door sets that satisfy building control, fitted to specification with a record per opening where it is required for handover." },
    ],
    nearby: ["dartford", "medway", "bromley", "maidstone"],
  },
  {
    slug: "dartford",
    name: "Dartford",
    inName: "Dartford",
    county: "Kent",
    postcodes: "DA1 to DA9",
    title: "Carpenter in Dartford | Garage & Garden Room Conversions",
    description:
      "Carpenter in Dartford, Stone, Greenhithe and Wilmington. Garage conversions, rear extension carpentry and garden offices for part-week commuters. Free visit, fixed quote.",
    eyebrow: "Carpentry in Kent",
    h1: ["Carpenter in", "Dartford."],
    intro:
      "Dartford is close enough to London that houses get improved rather than outgrown. Almost everything we do here is about making an existing suburban house hold one more room, and since 2020 that room is very often an office.",
    marketSummary:
      "The highest share of garage conversion and garden office work we do anywhere, driven by part-week commuting.",
    propertyMix: [
      { type: "Interwar and post-war semis", weight: "Dominant", note: "Across Wilmington, Dartford proper and out towards Bean. Attached garage, standard footprint, usable rear garden." },
      { type: "Victorian terraces", weight: "Common", note: "Nearer the town centre. Older and tighter than the suburban majority." },
      { type: "Newer family housing", weight: "Common", note: "Stone, Greenhithe and the Ebbsfleet fringe. Modern layouts, bare interiors." },
    ],
    topJobs: [
      { job: "Garage conversions", why: "The cheapest way to add a real room to a Dartford semi, and our most requested job here." },
      { job: "Garden offices and studios", why: "Part-week commuters wanting somewhere at home that is genuinely separate from the house." },
      { job: "Rear extension carpentry", why: "Both stages: floor structure, partitions and roof at first fix, then the full second fix." },
    ],
    demand: [
      {
        heading: "Why garage conversions make sense here",
        body: [
          "The attached garage on an interwar Dartford semi is almost never used for a car. It is too narrow for a modern one, and it sits inside the existing footprint with a roof and three walls already built and paid for.",
          "Converting it needs a raised and insulated floor structure, the door opening infilled and a new partition, then the full second fix. Because the shell exists, it is consistently the cheapest usable room you can add to these houses, and it needs no change to the roofline at all.",
        ],
      },
      {
        heading: "A garden office is a building, not a shed",
        body: [
          "The garden office boom brought a lot of poorly built structures into Dartford gardens, and the failure pattern is consistent: no real footings, a frame sat on slabs, and within two winters the ground moves, the frame racks and the door stops closing.",
          "If it is going to be a room you sit in through January, it needs proper footings, an insulated floor, walls and roof, and a door and window set that will still operate in five years. We would rather quote for that honestly than for something that looks the same and is not.",
        ],
      },
    ],
    neighbourhoods: ["Stone", "Greenhithe", "Swanscombe", "Wilmington", "Bean", "Darenth", "Swanley", "Joydens Wood"],
    serviceOrder: [FF, SF, BJ],
    faqs: [
      { q: "Can you convert our garage?", a: "Yes, and on a Dartford semi it is usually the cheapest usable room you can add. Raised insulated floor, infill where the door was, new partition, then the full second fix." },
      { q: "Do garden offices need footings?", a: "Anything you intend to use year round does. A frame sat on slabs racks within a couple of winters and then the door never closes properly again." },
      { q: "Do you handle building regulations?", a: "We build to meet them and work with your building control inspector, but the application itself is the homeowner's or the main contractor's. We will tell you what is notifiable before we start." },
    ],
    nearby: ["gravesend", "bexley", "bromley", "medway"],
  },
  {
    slug: "bromley",
    name: "Bromley",
    inName: "Bromley",
    county: "Greater London",
    postcodes: "BR1 to BR7",
    title: "Carpenter in Bromley | Side Returns & Fitted Storage",
    description:
      "Carpenter in Bromley, Beckenham, Bickley and Chislehurst. Side return and loft carpentry, plus fitted storage for houses that have already been altered more than once. Free visit, fixed quote.",
    eyebrow: "Carpentry in Greater London",
    h1: ["Carpenter in", "Bromley."],
    intro:
      "Bromley is where London prices make space worth building rather than buying, and it shows in the housing. A very high proportion of what we work on here has already been extended at least once, often without any record of what was done, which changes how we price and how we start.",
    marketSummary:
      "More previously altered houses than anywhere else we cover, which is why we survey rather than price from drawings.",
    propertyMix: [
      { type: "Victorian and Edwardian terraces and villas", weight: "Dominant", note: "Around the town centre and through Beckenham. Side return potential and a lot of past alteration." },
      { type: "Large detached houses", weight: "Common", note: "Bickley, Shortlands and Chislehurst. Bigger budgets, longer programmes and more bespoke joinery." },
      { type: "Interwar suburban housing", weight: "Common", note: "Filling in between. Conventional, and usually loft-viable." },
    ],
    topJobs: [
      { job: "Side return extension carpentry", why: "The classic Bromley move, and the one that makes a Victorian terrace kitchen actually usable." },
      { job: "Loft conversion carpentry", why: "Where a side return has already been done, the loft is the next space and is often the last one available." },
      { job: "Fitted storage in awkward recesses", why: "Past alterations leave odd recesses and part-width chimney breasts that only made-to-measure will fill." },
    ],
    demand: [
      {
        heading: "Why we survey before we price in Bromley",
        body: [
          "In most areas a drawing of a standard house type is close enough to price from. In Bromley it frequently is not, because the house has been altered before, sometimes twice, and rarely with drawings that survived.",
          "Walls have been moved, chimney breasts removed on one floor and left on another, and floor levels changed between original and extension. We look at what is actually there before we give you a figure, and we raise anything that does not match the drawing before it gets covered up rather than after.",
        ],
      },
      {
        heading: "Storage in houses that have been chopped about",
        body: [
          "One consequence of repeated alteration is a house full of recesses that are not quite anything. A chimney breast taken out upstairs but not down. A cupboard left behind a previous partition. An alcove that is 480mm deep on one side and 610mm on the other.",
          "No stock product fits any of these, which is why built-in storage is such a large part of our Bromley work. Measured properly and built to the actual opening, dead space becomes usable, and the room finally reads as deliberate rather than accidental.",
        ],
      },
    ],
    neighbourhoods: ["Beckenham", "Bickley", "Shortlands", "Chislehurst", "Hayes", "West Wickham", "Keston", "Bromley Common"],
    serviceOrder: [FF, BJ, SF],
    faqs: [
      { q: "Our house has been extended before. Does that complicate things?", a: "It means we check rather than assume. Previous Bromley alterations are often undocumented, so we survey before pricing and before cutting, and flag anything that does not match the drawing early." },
      { q: "Do you do side return extensions?", a: "The carpentry on them, yes: floor structure, partitions and roof at first fix, then doors, trim and storage at second. We work alongside your builder or main contractor." },
      { q: "Can you make storage fit a recess that is not square?", a: "That is most of what we build in Bromley. Measured top, middle and bottom, and scribed to the opening rather than cut to one dimension." },
    ],
    nearby: ["orpington", "bexley", "sevenoaks", "dartford"],
  },
  {
    slug: "orpington",
    name: "Orpington",
    inName: "Orpington",
    county: "Greater London",
    postcodes: "BR5 to BR6",
    title: "Carpenter in Orpington | Garden Rooms & Pergolas",
    description:
      "Carpenter in Orpington, Petts Wood, Chelsfield and Green Street Green. Garden rooms, pergolas and outdoor kitchens on proper footings, plus 1930s alcove and bay window joinery. Free visit, fixed quote.",
    eyebrow: "Carpentry in Greater London",
    h1: ["Carpenter in", "Orpington."],
    intro:
      "Orpington is the most consistent area we work in, because so much of it went up at the same time to the same pattern. Interwar semis built out along the railway, with rear gardens considerably longer than anything London built after them. Those gardens are why this is our busiest area for outdoor work.",
    marketSummary:
      "More garden structures than anywhere else we cover, thanks to the length of the interwar plots.",
    propertyMix: [
      { type: "1930s semis and detached", weight: "Dominant", note: "Built out along the line through Petts Wood, Crofton and Green Street Green. Bay fronts, picture rails and long rear plots." },
      { type: "Post-war estate housing", weight: "Common", note: "St Mary Cray and the later development. Shorter gardens, more compact rooms." },
      { type: "Larger detached", weight: "Pockets", note: "Chelsfield and the greener edges. Bigger plots again, and bigger external projects." },
    ],
    topJobs: [
      { job: "Garden rooms, pergolas and outdoor kitchens", why: "Our number one Orpington job by a clear margin, because the plots are long enough to justify building something permanent." },
      { job: "Bay window seats with storage", why: "Almost every 1930s house here has a bay, and almost none of them use the space under it." },
      { job: "Alcove cupboards beside the chimney breast", why: "The standard 1930s layout puts two recesses in the main rooms, and they are the obvious place for built-in storage." },
    ],
    demand: [
      {
        heading: "Long gardens, and why footings decide everything",
        body: [
          "The interwar plots here run far deeper than modern development allows, which means there is genuinely room to put a building at the end of the garden without losing the garden. That is why we do more pergolas, outdoor kitchens and garden rooms in Orpington than in any other area.",
          "The thing that separates one that lasts from one that does not is entirely below ground. A frame stood on slabs will move with seasonal ground movement, rack out of square, and then the doors stop closing. Proper footings cost more at the start and are the difference between a twenty year structure and a five year one.",
        ],
      },
      {
        heading: "Working a house type we know well",
        body: [
          "The upside of Orpington's uniformity is that we know these houses before we arrive. The bay dimensions, the recess widths either side of the chimney breast, the ceiling heights and where the picture rail sits repeat road after road.",
          "That makes pricing more accurate and the work faster. A bay window seat or a pair of alcove cupboards in a Petts Wood semi is a job we have done many times, and we can tell you at the free visit roughly what it involves rather than going away to work it out.",
        ],
      },
    ],
    neighbourhoods: ["Petts Wood", "St Mary Cray", "Green Street Green", "Chelsfield", "Farnborough", "Crofton", "Locksbottom", "Ramsden"],
    serviceOrder: [BJ, SF, FF],
    faqs: [
      { q: "Do garden rooms need footings?", a: "Anything structural does. We set proper footings rather than sitting a frame on slabs, because a building that moves with the ground racks and then the doors never close properly again." },
      { q: "Can you build a covered outdoor kitchen?", a: "Yes, and it is one of our most common Orpington projects. Treated structural timber, proper footings, and built to stay square through a few winters." },
      { q: "Is a bay window seat worth doing?", a: "In a 1930s Orpington house, usually. The space under a bay is almost always empty, and a seat with storage underneath uses it without taking any floor area from the room." },
    ],
    nearby: ["bromley", "bexley", "sevenoaks", "dartford"],
  },
  {
    slug: "bexley",
    name: "Bexley and Sidcup",
    inName: "Bexley",
    county: "Greater London",
    postcodes: "DA5, DA14 to DA16",
    title: "Carpenter in Bexley & Sidcup | Lofts & Fitted Wardrobes",
    description:
      "Carpenter in Bexleyheath, Sidcup, Welling and Blackfen. Loft conversion stairs, wardrobes built to lower interwar ceiling heights, and door and trim upgrades. Free visit, fixed quote.",
    eyebrow: "Carpentry in Greater London",
    h1: ["Carpenter in", "Bexley and Sidcup."],
    intro:
      "Bexley and Sidcup are suburban in the most literal sense, built between the wars for families moving out of London and still doing exactly that job. The houses are well made and worth investing in, with one quirk that shapes a surprising amount of our work here: the ceilings are lower than people expect.",
    marketSummary:
      "The area where stock furniture sizes fail most often, because interwar ceiling heights do not match modern assumptions.",
    propertyMix: [
      { type: "Interwar semis and detached", weight: "Dominant", note: "Bexleyheath, Welling, Blackfen and Sidcup. Reasonable room sizes, lower ceilings and a usable loft on most of them." },
      { type: "Post-war housing", weight: "Common", note: "Filling in around the older estates. Similar constraints, plainer detail." },
      { type: "Older village property", weight: "Pockets", note: "Old Bexley and pockets around it. Genuinely old and genuinely irregular." },
    ],
    topJobs: [
      { job: "Loft conversion stairs and structure", why: "Most of these houses have a convertible loft, and as in Tonbridge the flight is what decides it." },
      { job: "Wardrobes built to the actual ceiling height", why: "Stock wardrobes assume a height these houses do not have, which is why they leave a dust gap on top." },
      { job: "Door and trim upgrades", why: "A great many were replaced cheaply in the 1980s, and putting proper doors and deeper architrave back changes the house." },
    ],
    demand: [
      {
        heading: "Why stock wardrobes do not work here",
        body: [
          "Flat-pack and modular wardrobe ranges are built to a standard carcass height designed around a modern ceiling. Interwar Bexley bedrooms are frequently lower than that, and the result is one of two things: the unit does not go in at all, or it goes in and leaves a gap above it that collects dust and does nothing.",
          "Built to the actual height of the room, that gap becomes usable hanging or box storage. On a typical Sidcup bedroom that is a foot of full-width storage recovered, which is more than most people expect and the main reason made-to-measure pays here.",
        ],
      },
      {
        heading: "Undoing the 1980s",
        body: [
          "A large share of these houses had their original panelled doors taken out and replaced with flush hardboard ones during the 1970s and 80s, along with the thinnest architrave available at the time. Many still have them.",
          "Putting solid doors and a deeper moulded architrave back is not a structural change and it is not expensive relative to what it does. It is consistently the job Bexley and Sidcup clients tell us made the biggest difference for the money, and it is usually a few days' work.",
        ],
      },
    ],
    neighbourhoods: ["Bexleyheath", "Welling", "Sidcup", "Blackfen", "Barnehurst", "Crayford", "Old Bexley", "Falconwood"],
    serviceOrder: [SF, BJ, FF],
    faqs: [
      { q: "Our ceilings are lower than standard. Will fitted wardrobes still work?", a: "Yes, and they work better made to measure. Stock wardrobes assume a ceiling height these houses do not have, which is why they leave a dust gap. Built to the real height, you get that space back." },
      { q: "Can our loft be converted?", a: "Most of the interwar stock here can, but the stair decides it. We check rise, going and head height on the first visit before anything else gets discussed." },
      { q: "Is it worth replacing 1980s flush doors?", a: "It is the single change our Bexley clients mention most. Solid doors and deeper architrave, usually a few days' work, and it changes how the whole house reads." },
    ],
    nearby: ["bromley", "orpington", "dartford", "gravesend"],
  },
  {
    slug: "crowborough",
    name: "Crowborough and the Weald",
    inName: "the Weald",
    county: "East Sussex",
    postcodes: "TN6, TN7, TN22",
    title: "Carpenter in Crowborough & the Weald | Bespoke Joinery",
    description:
      "Carpenter in Crowborough, Rotherfield, Mayfield and Forest Row. One-off joinery for rooms that are not square, visible-quality timber repair and garden studios. Free visit, fixed quote.",
    eyebrow: "Carpentry in East Sussex",
    h1: ["Carpenter in", "the Weald."],
    intro:
      "The Wealden villages on the East Sussex border are the most rural part of our patch and by far the most varied. Almost every job out here is a one-off, for the simple reason that almost every house is. There is no standard local house type to price against.",
    marketSummary:
      "The highest proportion of genuinely bespoke work we do, because stock sizes fit almost nothing here.",
    propertyMix: [
      { type: "Period cottages and farmhouses", weight: "Dominant", note: "Scattered through the villages towards Ashdown Forest. Exposed frames, tile hanging, weatherboarding and no two the same." },
      { type: "Large detached houses", weight: "Common", note: "Crowborough itself and the roads around it. Generous, individual and rarely repeated." },
      { type: "Converted barns and outbuildings", weight: "Common", note: "Across the area. Big volumes, exposed structure and everything on show." },
    ],
    topJobs: [
      { job: "One-off joinery for irregular rooms", why: "Nothing standard fits, so nearly everything we build out here is made to the opening rather than to a size." },
      { job: "Visible-quality structural timber repair", why: "In an exposed frame the repair is on show permanently, so it has to look right as well as carry load." },
      { job: "Garden studios and outbuildings", why: "Plots are large and detached working space is in demand, but it has to sit properly against an old building." },
    ],
    demand: [
      {
        heading: "Why nothing here is off the shelf",
        body: [
          "In a Bexley semi or an Ashford new build you can price a wardrobe from a room type. Out here you cannot, because the room is a shape nobody has built since, the floor falls 30mm across it, and there is a beam running through where the top of the unit would go.",
          "So the survey matters more than anywhere else we work. We measure the opening in several places, take floor levels, and draw what is actually there. That drawing is what the fixed quote is built on, which is why we would rather spend the extra time on it than discover the problem when a carcass arrives.",
        ],
      },
      {
        heading: "Repairs that are permanently on display",
        body: [
          "In a house with an exposed frame, a structural repair is not hidden behind plasterboard, it is a visible part of the room for the rest of the building's life. A steel plate bolted across a beam does the structural job and ruins the room.",
          "The alternative takes longer: cut out only the failed material, splice in matching timber, and match the section as well as the species so the repair reads as part of the frame. It costs more and it is the only version worth doing in a building where the timber is the point.",
        ],
      },
    ],
    neighbourhoods: ["Jarvis Brook", "Rotherfield", "Mayfield", "Hartfield", "Forest Row", "Uckfield", "Wadhurst", "Groombridge"],
    serviceOrder: [BJ, FF, SF],
    faqs: [
      { q: "Do you travel out to the villages?", a: "Yes, the Wealden villages are part of our regular patch. Tell us where you are when you call and we will be straight about whether the journey makes sense for the size of the job." },
      { q: "Can you repair an exposed beam without it looking patched?", a: "Yes, and that is the whole point out here. We splice in matching timber and match the section rather than plating over it, because the repair is on show permanently." },
      { q: "Why does bespoke cost more than a fitted wardrobe company?", a: "Because nothing here is a standard size. A modular system is priced on repeating the same carcass, and in a Wealden cottage there is no repeat. What you get instead is something that actually fits." },
    ],
    nearby: ["tunbridge-wells", "tonbridge", "sevenoaks", "maidstone"],
  },
];

export const areaBySlug = (slug: string) => AREAS.find((a) => a.slug === slug);

export const areasByCounty = () => {
  const map = new Map<string, Area[]>();
  for (const a of AREAS) map.set(a.county, [...(map.get(a.county) ?? []), a]);
  return [...map.entries()];
};
