/**
 * Area pages. Each one carries local content that is genuinely specific to the place, because
 * near-identical pages with the town name swapped are treated as doorway pages and do more harm
 * than good. `housing` and `work` must stay distinct per area if new ones are added.
 */

export type Area = {
  slug: string;
  /** Town or district name as it should read in a sentence. */
  name: string;
  county: string;
  postcodes: string;
  /** Opening paragraph under the h1. */
  intro: string;
  /** What the local housing stock is actually like. */
  housing: string;
  /** What that stock means for the carpentry we get asked for. */
  work: string;
  /** Districts and villages within the area. Real place names, used for long-tail local search. */
  neighbourhoods: string[];
  /** One question specific to working in this area. */
  faq: { q: string; a: string };
  /** Slugs of neighbouring areas, for internal linking. */
  nearby: string[];
};

export const AREAS: Area[] = [
  {
    slug: "maidstone",
    name: "Maidstone",
    county: "Kent",
    postcodes: "ME14 to ME17",
    intro:
      "Maidstone sits at the centre of our patch, and it is the area we are asked to work in most often. The mix of property here is unusually broad for one town, which means the carpentry ranges from matching Victorian mouldings one week to forming partitions in a new-build extension the next.",
    housing:
      "The streets around the town centre and Tovil are largely Victorian terraces, many with their original stair flights and deep moulded trim still in place. Penenden Heath, Shepway and Allington are dominated by interwar and post-war semis with generous rear gardens. Push out towards Bearsted, Boxley and the villages and the stock changes again to older detached houses, converted oast houses and farm buildings with exposed structural timber.",
    work:
      "In the terraces the common jobs are alcove cupboards either side of a chimney breast, replacement stair parts and second fix trim that has to match what is already there rather than a merchant's profile. The interwar semis drive most of the extension work, which needs the full package from roof carcassing through to hanging the doors. Out in the villages it is more often garden structures, garden rooms and sympathetic repairs to existing timber.",
    neighbourhoods: ["Bearsted", "Boxley", "Penenden Heath", "Shepway", "Allington", "Tovil", "Barming", "Loose", "Coxheath", "Harrietsham"],
    faq: { q: "Do you charge to come out to a Maidstone address?", a: "No. Anywhere in ME14 to ME17 and the surrounding villages is a free visit with no obligation, and we will give you a written fixed quote afterwards whether or not you go ahead." },
    nearby: ["sittingbourne", "tonbridge", "sevenoaks", "medway"],
  },
  {
    slug: "ashford",
    name: "Ashford",
    county: "Kent",
    postcodes: "TN23 to TN27",
    intro:
      "Ashford has grown faster than almost anywhere else in Kent over the last two decades, and it shows in the work. A large share of enquiries here come from relatively new houses where the owners want something better than the developer's standard specification.",
    housing:
      "Chilmington Green, Finberry and Repton Park have added thousands of modern homes, typically with trussed roofs, standard-profile trim and builder-grade internal doors. Closer to the centre, Beaver Road and Willesborough hold the older Victorian and Edwardian stock. The arrival of the international station pulled in commuters, and with them a steady demand for home offices and converted loft space.",
    work:
      "New-build owners tend to come to us for upgrades: replacing hollow internal doors with solid ones, swapping thin architrave for a deeper profile, fitting wardrobes into bedrooms that were handed over empty, and building media walls in through-lounges. In the older streets the work is closer to what we do in Maidstone, with more emphasis on making good and matching existing joinery.",
    neighbourhoods: ["Willesborough", "Kennington", "Singleton", "Chilmington Green", "Repton Park", "Finberry", "Charing", "Wye"],
    faq: { q: "Can you upgrade the doors and trim in a new-build?", a: "Yes, and it is one of our most common Ashford jobs. Swapping hollow-core doors for solid ones and thin architrave for a deeper profile changes how a new house feels more than almost anything else for the money." },
    nearby: ["canterbury", "folkestone", "maidstone", "faversham"],
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    county: "Kent",
    postcodes: "CT1 to CT4",
    intro:
      "Canterbury asks more of a carpenter than most places we work. Inside the city walls a high proportion of buildings are listed or sit in a conservation area, and what you can do is governed as much by consent as by construction.",
    housing:
      "The historic core holds timber-framed and Georgian buildings where original fabric is protected and replacement is rarely the answer. Wincheap, St Dunstan's and the streets towards Whitstable Road are mostly Victorian and Edwardian terraces. The two universities generate a substantial rental and shared-house market, which has its own carpentry needs around fire doors and durability.",
    work:
      "In protected buildings the work is repair-led: splicing rather than replacing, matching an existing section, and keeping as much original timber as possible. In the terraces it is the familiar alcove units, stair repairs and second fix matching. For landlords with student property the recurring job is fire door installation done properly, with the correct gaps, strips and ironmongery, which is the item most often failed at inspection.",
    neighbourhoods: ["Wincheap", "St Dunstan's", "Harbledown", "Sturry", "Bridge", "Chartham", "Blean"],
    faq: { q: "Can you work on a listed building in Canterbury?", a: "Yes, and we work repair-first in protected buildings: splicing into sound timber and matching existing sections rather than replacing. Listed building consent is the owner's responsibility, and we would rather you confirm it before we start than after." },
    nearby: ["whitstable", "herne-bay", "faversham", "ashford"],
  },
  {
    slug: "medway",
    name: "the Medway Towns",
    county: "Kent",
    postcodes: "ME1 to ME8",
    intro:
      "Rochester, Chatham, Gillingham and Strood between them hold one of the largest concentrations of Victorian terraced housing in the South East, built at pace for the dockyard and never really replaced. That single fact shapes most of the carpentry we do across Medway.",
    housing:
      "Street after street of two and three bedroom Victorian terraces, many subdivided into flats or run as shared houses. Rochester High Street and the streets behind it hold older Georgian and timber-framed buildings, several listed. Chatham has seen significant regeneration around the waterfront, adding modern apartment stock with a very different set of requirements.",
    work:
      "Terrace work dominates: alcove cupboards, under-stair storage, replacement treads and risers on worn flights, and second fix trim matched to deep Victorian profiles. Because so much of the stock is rented or converted, we do a steady volume of fire door installation and void turnaround carpentry for landlords and letting agents. In the listed buildings around Rochester the approach is repair rather than replacement.",
    neighbourhoods: ["Rochester", "Chatham", "Gillingham", "Strood", "Rainham", "Walderslade", "Hempstead", "Cuxton"],
    faq: { q: "Do you work for landlords across Medway?", a: "Regularly. Void turnarounds, fire door installation to a standard that will pass inspection, and the repeat carpentry that keeps a terraced portfolio lettable. We can provide photographic records per opening where you need them." },
    nearby: ["gravesend", "sittingbourne", "maidstone", "dartford"],
  },
  {
    slug: "tunbridge-wells",
    name: "Royal Tunbridge Wells",
    county: "Kent",
    postcodes: "TN1 to TN4",
    intro:
      "Tunbridge Wells has the highest proportion of decorative joinery in our whole area. Regency and early Victorian building left behind a town full of detail, and clients here generally want that detail respected rather than simplified.",
    housing:
      "Large Regency and Victorian villas around the Pantiles, Mount Ephraim and Calverley Park, much of it in conservation areas. Substantial Edwardian houses out towards Rusthall and Southborough. Deep skirting, panelled doors, moulded architrave, decorative stair balustrades and sash windows are the norm rather than the exception, and a lot of it has survived.",
    work:
      "The recurring brief is work that reads as though it has always been there: panelling, alcove cupboards built to the room's existing proportions, replacement balusters turned to match an original pattern, and trim run to a profile taken from the house rather than bought in. Budgets here generally allow for hardwood and for the extra time that proper matching takes.",
    neighbourhoods: ["Rusthall", "Southborough", "Pembury", "Langton Green", "Speldhurst", "Bidborough"],
    faq: { q: "Can you match the original mouldings in a Victorian villa?", a: "In almost every case. We take a profile from the existing trim and either source the closest match or have it run. For balusters and stair parts we can match an original turned pattern rather than substituting a stock spindle." },
    nearby: ["tonbridge", "sevenoaks", "crowborough", "maidstone"],
  },
  {
    slug: "tonbridge",
    name: "Tonbridge",
    county: "Kent",
    postcodes: "TN9 to TN12",
    intro:
      "Tonbridge is family-move territory. People buy here for the schools and the direct line to London, then extend rather than move again, which makes it one of our steadiest areas for full-package carpentry on extensions and loft conversions.",
    housing:
      "Victorian and Edwardian villas in the streets near the station, large interwar semis and detached houses spreading south and east, and newer development around Hildenborough and the town fringes. Plot sizes are generous by South East standards, which is why so much of the growth here goes upwards and backwards rather than sideways.",
    work:
      "Extensions and loft conversions mean we are usually on a job twice: roof carcassing, partitions, joists and door linings at first fix, then back several weeks later for doors, trim, a new flight and any fitted storage. Loft conversions in particular need careful stair and hatch work to hit head height and building regulations without losing the landing.",
    neighbourhoods: ["Hildenborough", "Higham Wood", "Haysden", "Golden Green", "Shipbourne", "Leigh"],
    faq: { q: "Do you do the carpentry on loft conversions?", a: "Yes, both stages. Roof work, floor structure and partitions at first fix, then the new flight, doors, trim and any fitted storage at second. The stair is usually what decides whether a loft works at all, so we look at that first." },
    nearby: ["tunbridge-wells", "sevenoaks", "maidstone", "crowborough"],
  },
  {
    slug: "sevenoaks",
    name: "Sevenoaks",
    county: "Kent",
    postcodes: "TN13 to TN15",
    intro:
      "Sevenoaks and the villages around it hold some of the largest private houses we work in. Projects here tend to be bigger in scope and longer in programme, and the expectation on finish is high.",
    housing:
      "Substantial Edwardian and Arts and Crafts houses in the town and at Riverhead, large detached properties through Kemsing, Otford and Weald, and a significant number of period farmhouses and converted barns in the surrounding countryside. Plots are large, and outbuildings and annexes are common.",
    work:
      "Whole-house refurbishment is more common here than single-room work, which suits the way we operate: one team across first fix, second fix and the bespoke pieces. Alongside the interior work we get a lot of external joinery, including substantial pergolas, covered outdoor kitchens, garden rooms and decking on properly set footings that has to survive being overlooked from the house.",
    neighbourhoods: ["Riverhead", "Otford", "Kemsing", "Seal", "Weald", "Dunton Green", "Chipstead"],
    faq: { q: "Do you take on whole-house refurbishments?", a: "Yes, and they suit the way we work. One team covers first fix, second fix and the bespoke pieces, so nothing is lost between stages on a project running over several months." },
    nearby: ["tonbridge", "tunbridge-wells", "dartford", "bromley"],
  },
  {
    slug: "sittingbourne",
    name: "Sittingbourne",
    county: "Kent",
    postcodes: "ME9 to ME10",
    intro:
      "Sittingbourne was built around its paper mills and brickfields, and the housing that went up for the workforce still makes up much of the town. It is practical, well-proportioned stock that takes carpentry well.",
    housing:
      "Victorian and Edwardian terraces through Milton Regis and the older centre, extensive post-war estates, and newer development to the north of the town and towards Kemsley. Rooms in the older terraces are typically narrower than their Maidstone equivalents, which changes what will physically fit.",
    work:
      "Space is usually the constraint rather than budget. Under-stair storage, alcove units built to the full height of a narrow chimney recess, and wardrobes designed around a room that cannot take a standard depth are the regular requests. On the newer estates the work is closer to Ashford's: upgrading builder-standard doors and trim, and fitting out bedrooms and home offices.",
    neighbourhoods: ["Milton Regis", "Kemsley", "Bapchild", "Borden", "Iwade", "Newington", "Teynham"],
    faq: { q: "Will fitted storage work in a narrow terrace?", a: "Usually, but not at standard depths. We measure the actual recess, which is rarely the same at the top and bottom, and design to what is there. A shallower unit that fits properly beats a standard one that does not." },
    nearby: ["faversham", "medway", "maidstone", "whitstable"],
  },
  {
    slug: "faversham",
    name: "Faversham",
    county: "Kent",
    postcodes: "ME13",
    intro:
      "Faversham has more listed buildings than almost any comparable market town in England, and working here means accepting that the building was not built to modern tolerances and never will be.",
    housing:
      "Abbey Street and the streets around the creek hold timber-framed and Georgian buildings in unusually complete condition, a great many of them listed. Beyond the historic core there is Victorian terracing and later twentieth-century housing, but it is the old stock that defines the town and most of the work we are called to.",
    work:
      "Almost nothing here is square, so measuring is done in several places and pieces are scribed rather than cut to a single dimension. Work is repair-led wherever possible: splicing in new timber to a sound section rather than replacing a whole member, and matching existing section sizes and profiles. Where consent is needed we would rather you check before we start than after.",
    neighbourhoods: ["Ospringe", "Preston", "Boughton", "Selling", "Oare", "Davington"],
    faq: { q: "My house is not square anywhere. Is that a problem?", a: "Not for us, it is normal in Faversham. Pieces are scribed to the opening rather than cut to a single dimension, and we measure in several places before anything is made." },
    nearby: ["canterbury", "sittingbourne", "whitstable", "ashford"],
  },
  {
    slug: "whitstable",
    name: "Whitstable",
    county: "Kent",
    postcodes: "CT5",
    intro:
      "Whitstable is the one place on our patch where the weather dictates the specification. Timber a few hundred metres from the sea has a harder life than the same timber inland, and pretending otherwise is how you end up back in three years.",
    housing:
      "Weatherboarded fishermen's cottages near the harbour and along Island Wall, Victorian terraces through Tankerton, and a large number of properties run as holiday lets or second homes. External timber is a defining feature of the town's character and is protected in parts of it.",
    work:
      "External work needs treated or naturally durable timber, stainless or properly coated fixings, and end grain sealed rather than left open, because salt air finds every shortcut. Weatherboard repair and replacement is a regular job. Inside, the holiday let market drives a steady stream of durable fitted storage and hard-wearing second fix in properties that turn over every week.",
    neighbourhoods: ["Tankerton", "Seasalter", "Chestfield", "Swalecliffe", "Yorkletts"],
    faq: { q: "What timber lasts near the sea?", a: "Treated softwood or a naturally durable hardwood, with stainless or properly coated fixings and end grain sealed. Salt air finds every untreated cut, which is why standard fixings rust through and stain the timber within a couple of seasons." },
    nearby: ["herne-bay", "canterbury", "faversham", "sittingbourne"],
  },
  {
    slug: "herne-bay",
    name: "Herne Bay",
    county: "Kent",
    postcodes: "CT6",
    intro:
      "Herne Bay has a different profile again from its neighbours along the coast, with far more single-storey property and a strong market in adapting houses for people who intend to stay in them.",
    housing:
      "Victorian seafront terraces and villas along the front, extensive interwar and post-war bungalow development inland, and a significant retirement population. Bungalows here often have generous loft space that was never designed to be used but frequently could be.",
    work:
      "Loft conversion carpentry is a recurring job, and in a bungalow the stair is the whole problem: finding a run that works without swallowing the hallway, and hitting head height under an existing roof. Beyond that, the common requests are accessible fitted storage, level thresholds, sturdy handrails and second fix that is easy to live with.",
    neighbourhoods: ["Beltinge", "Studd Hill", "Greenhill", "Hillborough", "Reculver", "Herne"],
    faq: { q: "Can a bungalow loft be converted?", a: "Often yes, but the stair decides it. We look at whether a run exists that hits head height without swallowing the hallway, and we will tell you straight if it does not work rather than starting and finding out." },
    nearby: ["whitstable", "canterbury", "faversham", "ashford"],
  },
  {
    slug: "folkestone",
    name: "Folkestone",
    county: "Kent",
    postcodes: "CT18 to CT20",
    intro:
      "Folkestone has changed considerably in the last decade. The regeneration around the Creative Quarter and the harbour has brought a lot of older building back into use, and much of that work needs carpentry sympathetic to what was there.",
    housing:
      "Grand Victorian terraces along the Leas and Clifton Crescent, tightly packed older housing in the Old High Street and the streets behind the harbour, and interwar and post-war stock spreading inland towards Cheriton and Hawkinge. Many of the larger seafront houses were long ago converted into flats.",
    work:
      "Conversion and reinstatement work is common: forming partitions and door sets in buildings being brought back into use, fitting fire doors to a standard that will pass inspection, and replacing stair parts in flights that have carried a century of traffic. In the larger period houses the emphasis shifts to matching original trim and making replacement joinery that suits the scale of the rooms.",
    neighbourhoods: ["Sandgate", "Cheriton", "Hawkinge", "Hythe", "Capel-le-Ferne", "Elham"],
    faq: { q: "Do you fit fire doors for converted flats?", a: "Yes. Conversions along the Leas and around the harbour are a regular job, and fire doors are fitted to the door set specification with the correct gaps, intumescent strips and ironmongery, with records per opening if you need them." },
    nearby: ["ashford", "canterbury", "herne-bay", "whitstable"],
  },
  {
    slug: "gravesend",
    name: "Gravesend",
    county: "Kent",
    postcodes: "DA11 to DA13",
    intro:
      "Gravesend combines a dense older centre with some of the largest new development anywhere in the county on its doorstep, and we get called to both.",
    housing:
      "Victorian terraces through the town centre and Northfleet, interwar semis spreading south, and the continuing growth of Ebbsfleet Garden City on the western edge bringing in substantial numbers of modern houses. The riverside has seen sustained regeneration, converting older industrial and commercial buildings to residential use.",
    work:
      "In the terraces it is the usual pattern of alcove storage, stair repair and matched second fix. The Ebbsfleet and Northfleet new build brings upgrade work: solid internal doors, deeper trim, fitted wardrobes and media walls in houses handed over to a standard specification. Conversion projects along the river need first fix partitioning and compliant fire door sets.",
    neighbourhoods: ["Northfleet", "Ebbsfleet", "Istead Rise", "Higham", "Shorne", "Meopham"],
    faq: { q: "We have just moved into a new house at Ebbsfleet. What is worth doing first?", a: "Internal doors and trim, then storage. Developer specification is built to a price, and replacing hollow doors and thin architrave lifts the whole house. Wardrobes come next, because new bedrooms are almost always handed over empty." },
    nearby: ["dartford", "medway", "bromley", "maidstone"],
  },
  {
    slug: "dartford",
    name: "Dartford",
    county: "Kent",
    postcodes: "DA1 to DA9",
    intro:
      "Dartford is commuter territory, close enough to London that houses get improved rather than outgrown. Most of what we do here is making an existing house work harder.",
    housing:
      "Extensive interwar and post-war suburban housing, Victorian terracing nearer the town centre, and newer apartment and family housing towards Stone and Greenhithe. Typical plots have a reasonable rear garden and a standard suburban footprint that lends itself to a single-storey rear extension.",
    work:
      "Rear extensions and garage conversions are the staple, which means the full carpentry package: joists, partitions and roof carcassing at first fix, then doors, trim, flooring and storage at second. Garden rooms and home offices are a close second, driven by people who commute two or three days a week and want somewhere to work the rest of the time.",
    neighbourhoods: ["Stone", "Greenhithe", "Swanscombe", "Wilmington", "Bean", "Darenth", "Swanley"],
    faq: { q: "Can you convert our garage?", a: "Yes. Garage conversions need floor structure, insulation, a new partition and infill where the door was, then the full second fix. It is one of the cheapest ways to add a usable room to a Dartford semi." },
    nearby: ["gravesend", "bexley", "bromley", "medway"],
  },
  {
    slug: "bromley",
    name: "Bromley",
    county: "Greater London",
    postcodes: "BR1 to BR7",
    intro:
      "Bromley is the edge of London, and the carpentry reflects that. Space costs more, so the work is about getting more out of the footprint that is already there.",
    housing:
      "Victorian and Edwardian terraces and villas around the town centre and Beckenham, larger detached property through Bickley, Shortlands and Chislehurst, and consistent interwar suburban development in between. A high proportion of houses have already been extended at least once.",
    work:
      "Side returns, rear extensions and loft conversions dominate, and because many houses have been altered before, the existing structure rarely matches the drawing. We check on site before cutting. Fitted storage is in constant demand: wardrobes into awkward chimney breast recesses, under-stair drawers, and home offices built into a box room that has to stay a spare bedroom as well.",
    neighbourhoods: ["Beckenham", "Bickley", "Shortlands", "Chislehurst", "Hayes", "West Wickham", "Keston"],
    faq: { q: "Our house has been extended before. Does that complicate things?", a: "It means we check rather than assume. Previous alterations in Bromley houses are often undocumented, so we survey what is actually there before pricing and before cutting, and raise anything that does not match the drawing early." },
    nearby: ["orpington", "bexley", "sevenoaks", "dartford"],
  },
  {
    slug: "orpington",
    name: "Orpington",
    county: "Greater London",
    postcodes: "BR5 to BR6",
    intro:
      "Orpington is one of the most consistent areas we work in, because so much of it was built at the same time to a similar pattern. Once you know the house type, you know most of what the job will involve.",
    housing:
      "Very large numbers of 1930s semis and detached houses with long rear gardens, built out along the railway between the wars. Later estates at Petts Wood, St Mary Cray and Green Street Green. Bay fronts, picture rails and original panelled doors survive in a good proportion of them.",
    work:
      "The long gardens make Orpington our busiest area for garden structures: pergolas, covered outdoor kitchens and bars, garden rooms and decking, all of which need proper footings rather than being sat on slabs. Inside, the 1930s layout drives alcove cupboards beside the chimney breast, bay window seats with storage, and knocking through with the partition and structural work that follows.",
    neighbourhoods: ["Petts Wood", "St Mary Cray", "Green Street Green", "Chelsfield", "Farnborough", "Crofton", "Locksbottom"],
    faq: { q: "Do garden rooms need footings?", a: "Anything structural does. We set proper footings rather than sitting a frame on slabs, because a building that moves with the ground will rack, and doors and windows stop closing within a year or two." },
    nearby: ["bromley", "bexley", "sevenoaks", "dartford"],
  },
  {
    slug: "bexley",
    name: "Bexley and Sidcup",
    county: "Greater London",
    postcodes: "DA5, DA14 to DA16",
    intro:
      "Bexley and Sidcup are suburban in the most literal sense, largely built between the wars for families moving out of London, and still doing that job. The houses are well built and repay investment.",
    housing:
      "Interwar semis and detached houses in quantity through Bexleyheath, Welling, Blackfen and Sidcup, with pockets of older village property in Bexley and Old Bexley itself. Rooms are a reasonable size, ceilings are lower than Victorian equivalents, and most houses have a usable loft.",
    work:
      "Loft conversions and rear extensions are the main drivers, with the stair almost always the deciding factor on whether a loft works. Beyond that, the pattern is familiar: internal doors and trim upgraded from the original or from a previous owner's cheap replacement, fitted wardrobes, and storage designed around a lower ceiling than the stock sizes assume.",
    neighbourhoods: ["Bexleyheath", "Welling", "Sidcup", "Blackfen", "Barnehurst", "Crayford", "Old Bexley"],
    faq: { q: "Our ceilings are lower than standard. Will fitted wardrobes still work?", a: "Yes, and they work better made to measure. Stock wardrobes assume a ceiling height these 1930s houses do not have, which is why they leave a dust gap at the top. Built to the actual height, you get that space back as storage." },
    nearby: ["bromley", "orpington", "dartford", "gravesend"],
  },
  {
    slug: "crowborough",
    name: "Crowborough and the Weald",
    county: "East Sussex",
    postcodes: "TN6, TN7, TN22",
    intro:
      "The Wealden villages on the East Sussex border are the most rural part of our patch, and the most varied. Almost every job here is a one-off, because almost every house is.",
    housing:
      "Large detached houses around Crowborough itself, period cottages and farmhouses scattered through the villages towards Ashdown Forest, and a significant number of converted barns and outbuildings. Exposed structural timber, tile hanging and weatherboarding are common, and modern regularity is not.",
    work:
      "Work here is dominated by one-off pieces made to fit rooms that are not square and openings that are not standard. Exposed timber means repairs have to be visible-quality rather than structural-only. Outside, the requests are for garden rooms, studios, substantial pergolas and covered outdoor space, usually with the expectation that it will look right against an old building.",
    neighbourhoods: ["Jarvis Brook", "Rotherfield", "Mayfield", "Hartfield", "Forest Row", "Uckfield", "Wadhurst"],
    faq: { q: "Do you travel out to the villages?", a: "Yes, the Wealden villages are part of our regular patch. Tell us where you are when you call and we will be straight about whether the journey makes sense for the size of the job." },
    nearby: ["tunbridge-wells", "tonbridge", "sevenoaks", "maidstone"],
  },
];

export const areaBySlug = (slug: string) => AREAS.find((a) => a.slug === slug);
export const areasByCounty = () => {
  const map = new Map<string, Area[]>();
  for (const a of AREAS) map.set(a.county, [...(map.get(a.county) ?? []), a]);
  return [...map.entries()];
};
