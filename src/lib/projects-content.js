import { projects } from "@/lib/constants";

// Scope and industries come from the existing portfolio. Business context and
// visible features were checked against each linked client website. Add delivery
// details or results only when confirmed by the project owner.
const projectDetails = {
  "bost-homes": {
    metaTitle: "Bost Homes Website Project",
    metaDescription:
      "Explore NineOneNine's Bost Homes website project for a Cary, NC custom home builder, with a project preview and related web development services.",
    lede: "A custom home builder's work, approach, and available homesites in one place.",
    location: "Cary, North Carolina",
    context:
      "Bost Custom Homes builds custom residences in the Raleigh and Cary area. For prospective homeowners, choosing a builder involves understanding both the finished work and the people behind it.",
    overview:
      "This website project brings together the company's residential portfolio, building approach, and homesite information. Visitors can explore homes before starting a conversation about their own project.",
    highlights: [
      {
        title: "Homes as the starting point",
        description:
          "Featured residences and a dedicated portfolio give visitors a way to explore the builder's work.",
      },
      {
        title: "Context for a major decision",
        description:
          "The company story and approach sit alongside the homes, helping prospective clients learn about the team and building process.",
      },
      {
        title: "From exploration to inquiry",
        description:
          "Neighborhood and homesite information complements the project portfolio, with a contact path for people ready to discuss a home.",
      },
    ],
    serviceSlugs: ["web-development"],
  },
  "grande-manor": {
    metaTitle: "Grande Manor Website Project",
    metaDescription:
      "Explore NineOneNine's Grande Manor website project for a North Carolina custom home builder, with a project preview and web development services.",
    lede: "A website connecting a Carolina builder's craftsmanship with its next homeowners.",
    location: "Wake Forest, North Carolina",
    context:
      "Grande Manor Homes is a custom home builder based in Wake Forest, serving North Carolina's Piedmont. Its business centers on individual residences and a family tradition of building.",
    overview:
      "This website project presents Grande Manor's homes alongside its approach to construction. The experience gives prospective homeowners a place to explore the company and begin a consultation.",
    highlights: [
      {
        title: "A visual introduction",
        description:
          "Residential photography and portfolio links put the builder's homes at the center of the experience.",
      },
      {
        title: "The people behind the homes",
        description:
          "The company's background and construction approach provide context for homeowners considering a custom build.",
      },
      {
        title: "A clear first conversation",
        description:
          "Consultation links and a dedicated contact page give visitors a next step after exploring the work.",
      },
    ],
    serviceSlugs: ["web-development"],
  },
  "mcmillan-design": {
    metaTitle: "McMillan Design Website Project",
    metaDescription:
      "Explore NineOneNine's McMillan Design website project for a Wake Forest residential design firm, with a project preview and web development services.",
    lede: "Residential design work and the process behind it, brought into focus.",
    location: "Wake Forest, North Carolina",
    context:
      "McMillan Design is a residential design firm in Wake Forest. It works on home design, residential planning, and consulting, helping clients turn ideas for a home into a design.",
    overview:
      "This website project pairs a residential portfolio with an introduction to the firm's process. Visitors can explore individual designs and learn how a project develops before contacting the team.",
    highlights: [
      {
        title: "A portfolio with local context",
        description:
          "Featured designs include project names and locations, giving visitors specific examples of the firm's residential work.",
      },
      {
        title: "An introduction to the process",
        description:
          "Consultation and design development information helps prospective clients understand how to begin working with the firm.",
      },
      {
        title: "An accessible next step",
        description:
          "Contact links connect project exploration with an inquiry about a new home or residential design project.",
      },
    ],
    serviceSlugs: ["web-development"],
  },
  "dealer-lifts": {
    metaTitle: "Dealer Lifts Website & eCommerce Project",
    metaDescription:
      "Explore NineOneNine's Dealer Lifts website and eCommerce project for a Benson, NC automotive shop, with service, build gallery, and parts store context.",
    lede: "Automotive services, custom builds, and a parts store connected in one website.",
    location: "Benson, North Carolina",
    context:
      "Dealer Lifts is an automotive service and performance shop in Benson. Its work spans routine maintenance, repairs, suspension upgrades, and custom vehicle builds.",
    overview:
      "Our Dealer Lifts portfolio project covers a website and eCommerce. The public site connects service information, a vehicle build gallery, and a parts store, giving visitors several ways to explore what the shop offers.",
    highlights: [
      {
        title: "Services for different needs",
        description:
          "Maintenance, diagnostics, and performance upgrades are presented together, helping visitors find the work relevant to their vehicle.",
      },
      {
        title: "The builds behind the business",
        description:
          "A gallery of completed vehicles gives prospective customers examples of the shop's custom work.",
      },
      {
        title: "Parts and project inquiries",
        description:
          "The parts store sits alongside quote requests and shop contact information, connecting product exploration with a conversation about installation or service.",
      },
    ],
    serviceSlugs: ["ecommerce-development", "web-development"],
  },
};

export const projectPageList = projects.map((project) => ({
  ...project,
  ...projectDetails[project.slug],
}));

export const projectPages = Object.fromEntries(
  projectPageList.map((project) => [project.slug, project])
);
