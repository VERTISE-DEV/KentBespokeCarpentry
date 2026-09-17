/** Content for the three service pages. Each one is linked from the homepage intro paragraph. */

export type ServicePage = {
  slug: string;
  /** Short label used in navigation and inline links. */
  label: string;
  /** Page <h1>, split so the second line renders in the light weight. */
  h1: [string, string];
  eyebrow: string;
  title: string;
  description: string;
  /** Opening paragraph under the h1. */
  intro: string;
  hero: string;
  heroAlt: string;
  /** "What it covers" checklist. */
  includes: { group: string; items: string[] }[];
  /** Two or three body sections. */
  sections: { heading: string; body: string[] }[];
  /** Short answers to the questions customers actually ask. */
  faqs: { q: string; a: string }[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "first-fix-carpentry",
    label: "First fix carpentry",
    h1: ["First fix", "carpentry."],
    eyebrow: "Structural carpentry",
    title: "First Fix Carpentry in Kent & the South East",
    description:
      "First fix carpentry across Kent and the South East: stud partitions, floor joists, roof carcassing, door linings and window boards. Family run, fifteen years established, fixed quotes.",
    intro:
      "First fix is the structural carpentry that goes in while a building is still open: the timber that carries loads, forms rooms and gives every trade after us something true to work to. It is finished long before anyone sees it, which is precisely why it has to be right.",
    hero: "/assets/pergola-octagon.jpg",
    heroAlt: "Structural timber frame in place before the finishing trades arrive",
    includes: [
      { group: "Floors and ceilings", items: ["Floor joists and joist hangers", "Noggins and strutting", "Chipboard and ply decking", "Ceiling joists and firrings", "Loft hatch openings"] },
      { group: "Walls and openings", items: ["Stud partitions, insulated or acoustic", "Door linings and casings", "Window boards and sub-frames", "Structural timber to engineer's detail", "Pattressing for fixings and brackets"] },
      { group: "Roof and external", items: ["Cut roofs and roof carcassing", "Trussed roof erection and bracing", "Firring and flat roof decks", "Fascia, soffit and bargeboards", "Timber frame and SIPs assistance"] },
    ],
    sections: [
      {
        heading: "Where first fix sits in a build",
        body: [
          "First fix follows the shell and precedes the plasterer. Once the structure is weathertight, we form the internal layout in timber so the electrician and plumber can run services through it, and so the plasterer has flat, plumb surfaces to board and skim.",
          "Get it wrong and the cost lands on everyone downstream. A partition that is out of plumb shows in the skirting line months later. A joist centred at the wrong spacing means the flooring has to be re-planned. A door lining that is racked will never hang a door that closes cleanly, whatever the second fix carpenter does to it.",
        ],
      },
      {
        heading: "How we work on site",
        body: [
          "We work to drawings and to the structural engineer's details, and we check dimensions on site before cutting rather than assuming the drawing matches what has been built. Where something does not line up, we raise it with the main contractor or the homeowner before it is buried, not after.",
          "Timber is ordered to the specification on the drawing, stored properly and cut as needed. Offcuts are kept until the stage signs off, the working area is swept at the end of each day, and waste is removed rather than left for the next trade to move.",
        ],
      },
    ],
    faqs: [
      { q: "Do you take on first fix only?", a: "Yes. Plenty of our work is first fix for builders and main contractors who have their own finishing carpenter, and we are happy to price a first fix package on its own." },
      { q: "Can you work to a programme?", a: "Yes. Tell us the slot and we will confirm whether we can hold it. If a preceding trade slips we would rather adjust with you than turn up to a job that is not ready." },
      { q: "Do you supply the timber?", a: "Usually, priced within the quote. If you prefer to supply materials from your own account we can price labour only." },
    ],
  },
  {
    slug: "second-fix-carpentry",
    label: "Second fix carpentry",
    h1: ["Second fix", "carpentry."],
    eyebrow: "The finishing stage",
    title: "Second Fix Carpentry in Kent & the South East",
    description:
      "Second fix carpentry across Kent and the South East: door hanging, skirting and architrave, staircases, loft hatches and kitchen fitting. Family run, fifteen years established, fixed quotes.",
    intro:
      "Second fix is everything that goes in once the walls are finished, and it is the stage that decides whether a room looks properly finished or merely completed. Doors that close cleanly, a skirting line that runs true, mitres that hold: this is the work people run their eye along for the next twenty years.",
    hero: "/assets/staircase.jpg",
    heroAlt: "Staircase and balustrade being installed during second fix carpentry",
    includes: [
      { group: "Doors", items: ["Internal door hanging and adjustment", "Fire door installation and intumescent strips", "External and composite door fitting", "Ironmongery, locks and closers", "Bi-fold and sliding door tracks"] },
      { group: "Mouldings and trim", items: ["Skirting and architrave", "Dado and picture rail", "Window boards and reveals", "Box-outs and bulkheads", "Matching existing period profiles"] },
      { group: "Fitting out", items: ["Staircase parts, spindles and handrail", "Kitchen carcasses and worktops", "Loft hatches and access ladders", "Shelving and airing cupboards", "Flooring and thresholds"] },
    ],
    sections: [
      {
        heading: "Why the sequence matters",
        body: [
          "Second fix waits for a reason. Skirting fitted before plastering gets damaged by the plasterer. A door hung before the floor goes down has to come off again to clear the new finish. A kitchen installed before decoration means cutting in around every cabinet.",
          "There is usually a gap of two to four weeks between first and second fix while plaster dries out and first fix services and decoration prep are completed. We would rather come back at the right point than rush in early and leave you with work that has to be redone.",
        ],
      },
      {
        heading: "Matching what is already there",
        body: [
          "In an older property the trim rarely matches anything on a merchant's shelf. Victorian and Edwardian houses across Kent tend to have deeper, more detailed profiles than modern stock, and a new room finished in standard moulding will always read as an addition.",
          "Where it matters we take a profile from the existing trim and match it, either by sourcing the nearest equivalent or having it run. The same applies to staircases: replacement treads, risers and spindles are made to suit the flight that is there rather than to a catalogue size.",
        ],
      },
    ],
    faqs: [
      { q: "Can you hang fire doors to regulations?", a: "Yes. Fire doors are fitted with the correct gaps, intumescent strips and ironmongery, which matters for building control sign-off and for insurance on rented property." },
      { q: "How long does second fix take?", a: "It depends on the number of openings and the finish, but a typical three-bedroom refurbishment is usually a week to two weeks of second fix. We confirm the figure at quote stage." },
      { q: "Can you match old skirting and architrave?", a: "In most cases yes, by taking a profile from what is there. If an exact match is not available we will show you the closest options before anything is ordered." },
    ],
  },
  {
    slug: "bespoke-joinery",
    label: "Bespoke joinery",
    h1: ["Bespoke", "joinery."],
    eyebrow: "Made to measure",
    title: "Bespoke Joinery in Kent & the South East",
    description:
      "Bespoke joinery across Kent and the South East: media walls, fitted wardrobes, alcove units, staircases and garden structures, designed around your space. Family run, fifteen years established.",
    intro:
      "Bespoke work is what happens when nothing off the shelf fits. A chimney breast that is not square, an alcove three centimetres narrower on one side, a ceiling that drops across the room. We measure what is actually there and build to it, rather than fitting a standard unit and filling the gaps.",
    hero: "/assets/fireplace-wall.jpg",
    heroAlt: "Finished bespoke media wall with lit alcoves and concealed cabling",
    includes: [
      { group: "Living spaces", items: ["Recessed media and television walls", "Fireplace surrounds and hearth framing", "Alcove cupboards and floating shelves", "Window seats with storage", "Panelling and slatted feature walls"] },
      { group: "Storage", items: ["Floor-to-ceiling fitted wardrobes", "Under-stair storage and drawers", "Home office desks and shelving", "Utility and boot room units", "Bespoke airing and plant cupboards"] },
      { group: "Outside", items: ["Structural timber pergolas", "Covered outdoor kitchens and bars", "Decking and raised platforms", "Slatted screens and privacy walls", "Garden rooms and studio shells"] },
    ],
    sections: [
      {
        heading: "Designed around the room, not the catalogue",
        body: [
          "Every bespoke project starts with a survey and a drawing. We measure the opening in several places, because almost nothing in a house is truly square, and we work through proportions with you on paper before any timber is ordered.",
          "That drawing is what the quote is built on, so the figure is fixed and you can see what you are getting. Changes are easy at drawing stage and expensive once a carcass is built, which is why we would rather spend the extra half hour at the start.",
        ],
      },
      {
        heading: "Materials and finish",
        body: [
          "Painted MDF gives the cleanest lines for a sprayed or brushed finish and suits most media walls, wardrobes and alcove units. Hardwood and veneer suit anything where the grain is part of the design. Structural and treated softwood is used outside, on properly set footings.",
          "We will talk you through the difference in cost and durability rather than assuming the most expensive option. Where a piece is going to take daily wear, such as a wardrobe interior or a window seat lid, we will say where it is worth spending and where it is not.",
        ],
      },
    ],
    faqs: [
      { q: "Do you do the painting as well?", a: "We can supply pieces primed ready for your decorator, or finished. Tell us which suits the rest of the programme and we will price it that way." },
      { q: "How far ahead do you book?", a: "It varies with the size of the job. We will give you a realistic start date at quote stage rather than an optimistic one." },
      { q: "Can you work around a TV, sockets and cabling?", a: "Yes. Media walls are set out around the screen size, socket positions and cable routes at drawing stage, and we co-ordinate the chasing and back boxes with your electrician." },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
