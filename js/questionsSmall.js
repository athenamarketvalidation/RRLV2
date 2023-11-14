// creating an array and passing the number, questions, options, and answers
// questions for small STARTUP (ONLY THEIR WEIGHT IS DIFFERENT FROM TOHERS. SAME QUESTIONS)
let questions = [
    {
    numb: 1,
    question: "Does your product/service address the unemployment rate?",
    detailedquestion: "Does the product/service provide enough employment in any way that could have the potential to alleviate the unemployment rate in your community?",
    scoringnote: "Scoring note: the higher the employment opportunities, the higher the score.",
    answer: .4,
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
    {
    numb: 2,
    question: "Does your product/service concept applicable for individuals that have special needs?",
    detailedquestion: "Example: for persons with disabilities, pregnant women, senior citizens",
    scoringnote: "Scoring note: The more individuals that can use the product/service, the higher the score.",
    answer: .6,
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
    {
    numb: 3,
    question: "Is the product/service applicable for all ages?",
    detailedquestion: "Is your product/service designed to be used by people of all ages?  Or, is there a minimum age restriction? Can children use it safely?",
    scoringnote: "Scoring note: The more individuals that can use the product/service, the higher the score.",
    answer: .6,
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
    {
    numb: 4,
    question: "Is the product/service concept applicable for most gender types? ",
    detailedquestion: "Is the product/service concept designed only for 1 specific gender group or can it also be used by other groups i.e Male/Female/LGBTQ/non-Binary, etc.?",
    scoringnote: "Scoring note: The more gender types that can use the product/service, the higher the score.",
    answer: .6,
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
    {
    numb: 5,
    question: "Does your product/service concept address environmental issues?",
    detailedquestion: "Is your product/service designed to address climate change, environmental degradation, or other aspects of environmental protection? Does it use an environmentally friendly business model or manufacturing process?",
    scoringnote: "Scoring note: If you think that your product/service promotes greener business practices, helps or sustains the natural environment, the higher the score.",
    answer: 1,
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
  },
  {
  numb: 6,
  question: "How confident are you that the customers can easily recognize the problem that your product/service is trying to solve/provide a solution?",
  detailedquestion: "Is the problem recognition too complex for customers to identify or it is relatively easy to identify?",
  scoringnote: "Scoring note: The more obvious the problem type that the product/service can solve, the higher the score.",
  answer: .4,
  options: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ]
},
{
numb: 7,
question: "Will the use of this product/service engages customers in a form of community involvement?",
detailedquestion: "Are customers an inclusive part of beneficiaries or clients as partners?",
scoringnote: "Scoring note: The more engagement, participation, and proactive applied towards community involvement, the higher the score.",
answer: .4,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 8,
question: "Does your startup clearly define the 4 customer segmentation? ",
detailedquestion: "How confident are you that your startup clearly defines the 4 customer segmentation of geographic, demographic, psychographic, and behavioral aspects?",
scoringnote: "Scoring note: The more thoroughly the customer segments are addressed, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 9,
question: "To what degree do you prioritize customer satisfaction?",
detailedquestion: "Do you value customer feedback and take into consideration their retention? Can you maintain your professional integrity while rendering your product and service, even if faced with challenges, just to satisfy your customers?",
scoringnote: "Scoring note: The more engaged towards flexibility and adaptability committed in various situations, the higher the score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 10,
question: "How confident are you that the product/service can passively raise awareness to the customers?",
detailedquestion: "To what degree do you think that your customers are being exposed to your product/service through an indirect or non-marketed channel that can potentially attract intended/potential customers?",
scoringnote: "Scoring note: The higher the level of awareness that your product/service can induce, the higher the score. (i.e Trending or famous product/service as of the current time? High demand?)(ex. Film merchandise, health safety commodities, etc.).",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 11,
question: "How confident are you that your target customers can use or avail of your product/service concept with ease?",
detailedquestion: "Have you done a significant amount of user experience testing of your product/service with actual target customers? Are there any well-produced resources such as detailed manuals, video tutorials, or any preparations that make your product easy to use?",
scoringnote: "Scoring note: The more testing you have done and the more documentation or guides you have created for users, the higher the score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 12,
question: "How large is the target market for your product/service concept?",
detailedquestion: "How certain are you about the perceived exact scale of the market? Do you think there is an opportunity for this product to increase its share of the market? What data do you have to indicate market share increase?",
scoringnote: "Scoring note: The higher the reach of the target market, based on evidence, facts, observation, or research, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 13,
question: "How well informed are you about the competition and market dynamics in your target market? ",
detailedquestion: "Is there a similar product/service that provides much better functionality/features or cost-effective solutions than what you offer?",
scoringnote: "Scoring Note: The higher your knowledge about the competitive landscape in your target market, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 14,
question: "Does your product/service concept have any competitive advantage in relation to your competitors?",
detailedquestion: "How confident are you that your competitive advantage is strong and that the competitors can't easily duplicate it? Are you confident that you or your team has the ability to innovate to leverage your product/service concept in the market? Did you conduct a SWOT analysis? Did it yield positive results?",
scoringnote: "Scoring note: The more practices, research, and strategies a startup applied to gain potential competitive advantage opportunity, the higher the score.",
answer: .6,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 15,
question: "How confident are you that your product/service has characteristics for competition and will be strongly competitive?",
detailedquestion: "Do you think it is easy to penetrate the market by providing your competitive product/service concept? Is this task relatively easy for you e.g. based on any similar experience you have?",
scoringnote: "When your product/service can compete in the market (eg. cost-effective or product differentiation), the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 16,
question: "How acquainted are you with the competitors in your target market that offer related products/services?",
detailedquestion: "Do you consider this as a threat or an ally/partner? Do you think this can hinder or improve your development or product/service commercialization as a startup?",
scoringnote: "Scoring note: The more benefits or less disruption from your competitors, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 17,
question: "Rate how strong is your market position as of this moment?",
detailedquestion: "Do you have established partners, stakeholders, proactive community participation, government support or permits, by external grants from public or private firms?",
scoringnote: "Scoring note: The higher the perceived market position, the higher the score.",
answer: .6,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 18,
question: "Are you specifically aligned with your marketing plans to your desired market?",
detailedquestion: "How likely can you avoid competitive barriers (e.g. financially, human resources) with your prepared marketing plans?",
scoringnote: "Scoring note: The more marketing plans or strategies implies a higher score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 19,
question: "Is your product/service concept significantly new to the market?",
detailedquestion: "How confident are you that your product/service is different and new? How innovative is the product/service?",
scoringnote: "Scoring note: If your product/service concept is very innovative in nature or is completely new to the customer, the higher the score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 20,
question: "Are there well-planned penetration and adaptation strategies for your product/service concept?",
detailedquestion: "Do you have contingency plans if your plans do not go as planned? e.g. failure to penetrate/introduce the product/service concept in the desired way?",
scoringnote: "Scoring note: The more contingencies, buffers, or backup plans in place, the higher the score.",
answer: .4,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 21,
question: "Is the product/service an essential need to the target community?",
detailedquestion: "Do you render delivery services? Healthcare? Food essentials e.g. provide basic needs?",
scoringnote: "Scoring note: The more inclined to a community’s basic needs, the higher the score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 22,
question: "Rate how intensive is your product/service concept to produce as an MVP (Minimum Viable Product)?",
detailedquestion: "Is the production of the product or rendering the service a labor-intensive task? Does the product/service concept require heavy resource needs such as time, money, skills?",
scoringnote: "Scoring Note: The lesser operational cost, resource dependency, or complexity, the higher the score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 23,
question: "How well can you describe your MVP (Minimum Viable Product) as a founder when speaking to your customers?",
detailedquestion: "Does your MVP statement describe the product/service concept accurately in a brief sentence that the customers can easily remember?",
scoringnote: "Scoring note: The clearer the MVP to understand, catchy and attractive, the higher the score.",
answer: 1,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 24,
question: "Do you think that your competitive advantage provides significant value to your customers aside from solving their problems?",
detailedquestion: "Does the product/service concept make their life potentially easier? Do you think you can deliver sustained value once customers have tried your product/service for the first time?",
scoringnote: "Scoring Note: The more value that your product/service concept could deliver compared to the cost, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 25,
question: "How well can you describe your UVP (Unique Value Proposition) as a founder of your team? ",
detailedquestion: "Does the UVP accurately and effectively describe the value that the team intends to deliver to the market? Do the founders convey awareness to the team such that everyone is on the same page?",
scoringnote: "Scoring note: The clearer and more established the UVP, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 26,
question: "How well-defined do you think your business model is?",
detailedquestion: "Is your business model easy to understand? Can you present it to different stakeholders easily? Does your business model clearly state the value, product/service, commercialization, strategies? Does the business model have a game-changing cost structure? e.g non-standard and follows well-founded methodologies based on research, etc.",
scoringnote: "Scoring Note: If your answer to all sub-questions is yes, then the higher the score.",
answer: .6,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 27,
question: "Do you apply any financial management tools to your business concept?",
detailedquestion: "How many financial management tools are applied, are they well-prepared and ready for use? (e.g accounting, budgeting planning, spreadsheet tools, communication or inventory systems) Is there an automation system involved in one of the processes?",
scoringnote: "Scoring Note: The more financial management tools and systems are planned to be used or are currently being utilized, the higher the score.",
answer: .4,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 28,
question: "Do you anticipate financial sustainability in your plans? To what degree?",
detailedquestion: "Does any of the team have access to potential financial resources or any other external support that could provide help in any way or to cover up unexpected operational costs?",
scoringnote: "Scoring note: The higher the degree of anticipation or preparedness, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 29,
question: "Is the product/service concept has lesser risk inherent to its processes/usage/manufacturing/handling?",
detailedquestion: "Risk in terms of environmental impact, health hazards, technological usage, manufacturing/production, special care of handling (e.g safety concerns).",
scoringnote: "Scoring note: The safer the product/service concept, the higher the score.",
answer: .6,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 30,
question: "Do you implement risk management measures for your business concept?",
detailedquestion: "Does this contain internal controls such as detective, preventative, and corrective mechanisms? Is this feasible to mitigate the risks inherent to the startup business processes?",
scoringnote: "Scoring Note: The more Internal controls and risk mitigation plans on the business process, the higher the score.",
answer: .8,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 31,
question: "Is the product/service concept innovative enough that it can be a candidate for intellectual property/copyright/patentability?",
detailedquestion: "This question varies per country. According to the Philippine R.A 8293 SECTION 4. Definitions. ‑ 4.1. The term “intellectual property rights” consists of: (a) Copyright and Related Rights (b) Trademarks and Service Marks; (c) Geographic Indications; (d) Industrial Designs; (e) Patents; (f) Layout-Designs (Topographies) of Integrated Circuits; and (g) Protection of Undisclosed Information.",
scoringnote: "Scoring note: If the product/service concept is innovative and is a potential candidate for IP, the higher the score.",
answer: .6,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
},
{
numb: 32,
question: "Are the strategies for IP protection for your product/service concept well-defined?",
detailedquestion: "Are there plans prepared to cover IP protection and related processes to protect new innovation that you are going to bring into the market?",
scoringnote: "Scoring Note: The more IP rights protection that is applicable towards the startup, the higher score. If less related, important, or significant to the product/service, the lesser the score.",
answer: .6,
options: [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
]
}
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
