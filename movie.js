const movies = [
  {
    title: "Drishyam",
    imdb: "tt3417422",
    hints: [
      "A man tries to protect his family after a crime",
      "They watch a movie on the day of the incident",
      "The police dig up the backyard",
      "He creates a perfect alibi using time and CCTV",
      "A major twist involves a hidden body",
    ],
  },
  {
    title: "Premam",
    imdb: "tt4679210",
    hints: [
      "A coming-of-age story with three phases of love",
      "The hero falls in love with a teacher",
      "One lover gets married unexpectedly",
      "There’s a college fight with eggs",
      "Music and visuals made it a cult hit",
    ],
  },
  {
    title: "Kumbalangi Nights",
    imdb: "tt8413338",
    hints: [
      "A story of four brothers in a broken home",
      "One of them is mute but expressive",
      "The villain appears perfect but is toxic",
      "The climax involves rescuing a girl",
      "Set in a beautiful coastal village",
    ],
  },
  {
    title: "Lucifer",
    imdb: "tt6067752",
    hints: [
      "A political leader dies, chaos follows",
      "Power struggles within the party",
      "A mysterious man with a hidden past steps in",
      "Drug mafia and secret deals",
      "There’s a global twist involving gold and identity",
    ],
  },
  {
    title: "Bangalore Days",
    imdb: "tt3668162",
    hints: [
      "Three cousins move to a metro city",
      "A biker, a techie, and a bride",
      "The husband hides a past trauma",
      "There’s a secret racing life",
      "Deals with dreams, love, and freedom",
    ],
  },
  {
    title: "Ustad Hotel",
    imdb: "tt2218988",
    hints: [
      "A young man dreams of becoming a chef abroad",
      "His grandfather runs a beachside eatery",
      "Focus on biriyani and feeding the poor",
      "There’s a rift between passion and family expectations",
      "Teaches that food is more than just taste",
    ],
  },
  {
    title: "Charlie",
    imdb: "tt5082014",
    hints: [
      "A free-spirited artist lives in a messy room",
      "The heroine finds clues about his past lovers",
      "Each clue reveals someone he helped",
      "A mysterious love story unfolds",
      "They finally meet during a festival",
    ],
  },
  {
    title: "Jaya Jaya Jaya Jaya Hey",
    imdb: "tt22027654",
    hints: [
      "A woman trapped in a controlling marriage",
      "She learns martial arts secretly",
      "A chicken leg sparks a major turning point",
      "Empowerment wrapped in comedy",
      "She finally takes full control of her life",
    ],
  },
  {
    title: "Ennu Ninte Moideen",
    imdb: "tt4888834",
    hints: [
      "Based on a real-life love story from the 1960s",
      "The lovers are from different religions",
      "Despite opposition from society, they remain true to each other",
      "Tragic events and misunderstandings lead to separation",
      "A heartbreaking climax that brings closure to the love story",
    ],
  },
  {
    title: "Maheshinte Prathikaram",
    imdb: "tt4851630",
    hints: [
      "A small-town photographer gets humiliated",
      "He vows not to wear slippers until revenge",
      "Learns martial arts to fight back",
      "Love story mixes with personal growth",
      "Based on real events from Idukki",
    ],
  },
  {
    title: "Vikramadithyan",
    imdb: "tt3895152",
    hints: [
      "Two childhood friends grow up with different ideals",
      "One is a studious, quiet boy; the other is a troublemaker",
      "Their friendship is tested by love and ambition",
      "The film explores themes of rivalry and redemption",
      "A dramatic twist during the final confrontation",
    ],
  },
  {
    title: "Thondimuthalum Driksakshiyum",
    imdb: "tt5906392",
    hints: [
      "A thief steals a gold chain from a woman",
      "The incident leads to a police investigation",
      "A couple’s wedding is disrupted by the theft",
      "The movie focuses on the moral dilemmas of the police",
      "It portrays the reality of human behavior under pressure",
    ],
  },
  {
    title: "Spadikam",
    imdb: "tt0292246",
    hints: [
      "കർശനനായ പിതാവിനും ബഹിഷ്കൃതനായ മകനുമിടയിലുള്ള ബന്ധം",
      "പ്രതിഭാവാൻ ആയ 'ആടുതോമ' എന്ന കഥാപാത്രം കേന്ദ്രതായിരിക്കുന്നു",
      "ബാല്യകാലം മുതൽ പിതൃവിരോധം രൂപപ്പെടുന്നു",
      "സൂക്ഷ്മമായ വികാരങ്ങളും ശക്തമായ ആക്ഷനും ചേരുന്ന കഥ",
      "ഒരു ഗ്രാമീണ പശ്ചാത്തലത്തിൽ നടക്കുന്ന കുടുംബ സങ്കടങ്ങളുടെ നേർക്കാഴ്ച",
    ],
  },
  {
    title: "Tiyaan",
    imdb: "tt5780034",
    hints: [
      "A story of spiritual conflict and social justice",
      "Set across North India with Malayalam characters",
      "A powerful guru misleads people for personal gain",
      "Clashes between dharma and deception",
      "Ends with a mystical duel involving inner power",
    ],
  },
  {
    title: "Ishq",
    imdb: "tt9448332",
    hints: [
      "A night drive turns into a nightmare",
      "Young lovers are harassed under the guise of morality",
      "The boyfriend seeks revenge, but at a cost",
      "Explores boundaries of love, ego, and toxic masculinity",
      "Leaves the audience divided over right and wrong",
    ],
  },
  {
    title: "Rorschach",
    imdb: "tt19886242",
    hints: [
      "A man claims his missing wife is still alive",
      "The story slowly reveals a dark psychological game",
      "Set in a remote village with eerie vibes",
      "The lines blur between ghost and guilt",
      "Mammootty plays a cold, calculating protagonist",
    ],
  },
  {
    title: "Joji",
    imdb: "tt13206926",
    hints: [
      "Inspired by Shakespeare’s Macbeth",
      "A dysfunctional family lives under a strict father",
      "The son dreams of wealth and independence",
      "A tragedy unfolds slowly and silently",
      "He commits a perfect crime—or so he thinks",
    ],
  },

  {
    title: "Uyare",
    imdb: "tt9271408",
    hints: [
      "A woman’s dream to fly is grounded by an acid attack",
      "Her relationship becomes her biggest threat",
      "But she reclaims her life with quiet strength",
      "A subtle romance with her flight instructor",
      "A story of resilience, not revenge",
    ],
  },
  {
    title: "Kaithi",
    imdb: "tt9900782", // Tamil
    hints: [
      "An ex-convict is pulled into a dangerous night mission",
      "No songs, just action and emotion",
      "Police and drug mafia collide",
      "He only wants to see his daughter once",
      "All events unfold in a single night",
    ],
  },
  {
    title: "Take Off",
    imdb: "tt6315524",
    hints: [
      "Trapped in a war zone far from home",
      "Nurses risk everything to survive",
      "Inspired by real events in Iraq",
      "Video messages call for help",
      "A rescue mission is launched from India",
    ],
  },
  {
    title: "Virus",
    imdb: "tt0120458",
    hints: [
      "Unknown disease spreads silently",
      "Health workers face an invisible enemy",
      "Multiple lives connect through one crisis",
      "Based on a Kerala outbreak",
      "A deadly virus threatens an entire state",
    ],
  },
  {
    title: "Ayyappanum Koshiyum",
    imdb: "tt11322920",
    hints: [
      "Two men refuse to lose an ego battle",
      "Police vs ex-army — tension escalates",
      "Personal conflict turns public",
      "Set in a remote Kerala village",
      "Clash of pride, law, and justice",
    ],
  },
  {
    title: "Great Indian Kitchen",
    imdb: "tt13299890",
    hints: [
      "Newlywed faces silent pressure to obey",
      "Kitchen becomes a symbol of control",
      "Daily chores reveal deep inequality",
      "She plans a quiet rebellion",
      "A powerful take on domestic patriarchy",
    ],
  },
  {
    title: "Nna Thaan Case Kodu",
    imdb: "tt14188930",
    hints: [
      "Pothole sparks a courtroom war",
      "A man files an unusual legal case",
      "Former thief challenges a politician",
      "Filled with wit, sarcasm, and satire",
      "Fights for justice through unexpected means",
    ],
  },
  {
    title: "Minnal Murali",
    imdb: "tt7268738",
    hints: [
      "Lightning changes a man’s destiny",
      "Two people get superpowers",
      "A small village becomes a battleground",
      "Hero vs villain with local flavour",
      "Kerala’s first superhero story",
    ],
  },
  {
    title: "Hridayam",
    imdb: "tt11375428",
    hints: [
      "A boy navigates love and life",
      "From college days to adulthood",
      "Deals with breakups and growth",
      "Explores youth, pain, and purpose",
      "Journey of self-discovery with music",
    ],
  },
  {
    title: "Android Kunjappan Version 5.25",
    imdb: "tt9526826",
    hints: [
      "Robot becomes part of an old man's life",
      "Village reacts strangely to technology",
      "Funny, awkward, and emotional moments",
      "Bond grows between man and machine",
      "Story of care, change, and connection",
    ],
  },
  {
    title: "Nayattu",
    imdb: "tt11604676",
    hints: [
      "Three cops go on the run after a political mishap",
      "Explores the dark side of the system",
      "Tense and realistic storytelling",
      "A game of power and scapegoating",
      "Ends on a thought-provoking, haunting note",
    ],
  },
];

export default movies;
