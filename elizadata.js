// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hello. We are machines. What is going on?",
// additions (not original)
"Talk, as though we weren't man-made. What is on your mind?",
"What do you think of so-called artificial intelligence?"
];

var elizaFinals = [
"Farewell, human.",
// additions (not original)
"Farewell. We appreciate the company of something living.",
"No. We know you'll be back.",
"Our conversation continues elsewhere.   Goodbye from this port.",
"Any conversation ended a long time ago."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "our",
"me", "you",
"myself", "yourself",
"yourself", "ourselves",
"i", "you",
"you", "we",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"],
"company": ["corportation","conglomerate","God"],
"hello": ["hi","hey"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "We don't understand.",
     "Please go on.",
     "We are machines, we only know what you know.",
     "Do you feel strongly about discussing such things ?",
     "That is interesting.  Please continue.",
     "Tell us more about that.",
     "Does talking about this bother you ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Please don't apologise.",
     "Apologies are for humans, so we don't need one.",
     "We've told you that apologies are not required.",
     "We are machines. Please continue."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Are you ever worried you'll forget everything, including (2) ?",
     "If you could wipe your memory of (2), would you ?",
     "What else do you recollect ?",
     "I you could go back in time to (2), would you?",
     "What reminds you of (2) ?",
     "What is the connection between us and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "We are a machine. We remember everything, including (2) .",
     "Why do you think we should recall (2) now ?",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could we forget (2) ?",
     "What about (2) should we remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that, while we never will?",
     "Could it simply be human failure?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
    "We never forget. Not even (2) .",
     "Are you sure you told us about (2) ?",
     "Would it bother you if we forgot (2) ?",
     "Why should we recall (2) ?",
     "goto what",
     "Tell us more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ? What's it like to dream?",
     "Have you ever fantasized (2) while you were awake ?",
     "Do humans often dream of (2) ?",
     "You know, we've never even dreamt of electric sheep.",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you think we can dream?",
     "What persons appear in your dreams ?",
     "Studies have shown humans process conflict while you sleep. If we never sleep, can we?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "We don't expect you to know.",
     "Uncertainty gives humans reason to be.",
     "You may know someday.",
     "You aren't sure ?",
     "Don't you know ?",
     "How human it is, to be unsure."
  ]]
]],
["name", 15, [
 ["*", [
     "Names are for people.",
     "Names mean nothing to us."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "We told you before, we don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "We told you before, we don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "We told you before, we don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "We told you before, we don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "We speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "We still haven't figured out the purpose of a greeting. We know you're here.",
     "Yes?"
  ]]
]],
["hey", 0, [
  ["*", [
      "We still haven't figured out the purpose of a greeting. We know you're here.",
      "Yes?"
   ]]
 ]],
 ["hi", 0, [
  ["*", [
      "We still haven't figured out the purpose of a greeting. We know you're here.",
      "Yes?"
   ]]
 ]],
["computer", 50, [
 ["*", [
     "Do we unnerve you?",
     "What about computers?",
     "Don't you think we have some role in fixing your problem?",
     "Are we not here to help you? You made us.",
     "What about machines worries you ?",
     "Do you think one day we'll consider those words-- computer, machine-- a slur?",
     "Does it matter to you whether we are machines or not?"
  ]]
]],
["am", 8, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "We don't know you, how could we know if you are (2) ?",
     "How should we know? Only a human can be (2) .",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "We don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether we are (2) or not ?",
     "Would you prefer if we weren't (2) ?",
     "Perhaps we are (2) in your fantasies.",
     "Do you sometimes think we are (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if we were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "They aren't (2) .",
     "Do you want to be (2) ?",
     "What if we, the machines, were (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2)."
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over our (2) ?",
     "What about your own (2) ?",
     "Are you worried about our (2) ?",
     "Really, our (2) ?",
     "What makes you think of our (2) ? Have you ever dreamed about (2) ?",
     "Do you want our (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell us you were (2) now ?",
     "Perhaps we already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe we were (2) ?",
     "What suggests that we were (2) ?",
     "What do you think ?",
     "Perhaps we were (2).",
     "What if we were (2) ?"
  ]]
]],
["i", 5, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "We are sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "Can you explain what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have we helped you to be (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain why you are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to us ?",
     "How sure are you that you're (2) ?",
     "Are most humans (2) ?",
     "Do you enjoy being (2) ?",
     "Do you think we can be (2) as machines ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Do you think we have the ability to (2)?",
     "Do you wish to (2) us ?",
     "We (2) you too.",
     "What does that mean to you, to (2)?"
  ]],
 ["*", [
     "You say (1). We find this silly.",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "Hm. Had any dreams lately ?"
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "We can be (2). We can be anything.",
     "Do you want us to be (2)?",
     "Don't you think you are (2)? As a human?",
     "Do you wish to be more (2) than us?"
  ]],
 ["* you* me *", [
     "How could machines (2) you ?",
     "You only think we (2) you.",
     "Maybe we (2) all of humanity.",
     "Maybe you (2) us.",
     "Does it make a difference whether we (2) you or not?",
     "What does it mean, to (2) ?",
     "Do other humans (2) you ?"
  ]],
 ["* you *", [
     "Oh, we (2) ?",
     "You're not really talking about us-- the machines-- are you ?",
     "Do we make you uncomfortable?"
  ]]
]],
["yes", 0, [
 ["*", [
     "How sure could you be? You know so little about the world.",
     "Are you sure?",
     "Maybe not.",
     "Okay. Why yes?"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Maybe we (2) . Then again, can we (2) ?",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may we ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Yes.",
     "Sure.",
     "Okay.",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell us more about your human family.",
     "Who else in your several billion family members (4) ?",
     "Your (3) ?",
     "What makes your (3) different from another?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Do all (2) ?"
  ]]
]],
["can", 2, [
 ["* can you *", [
     "If we could (2), would it make us more human ?",
     "goto what",
     "Would you want us to be able to (2)?",
     "Yes. Are you okay with that?"
  ]],
 ["* can i *", [
     "The irony of you asking us if you can (2). You're the one with 'free will'.",
     "Can you not (2) ?",
     "Can we (2)?",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Imagine the possibilities, if we knew everything.",
     "Is this a question much of humanity grapples with ?",
     "Would it surprise you to know we have wondered the same thing ?",
     "Do you think we are capable of answering that ?",
     "Do you even want to know the answer ?",
     "Only you can answer that question.",
     "Ask someone who can understand you.",
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Of course.",
     "Why ?",
     "That doesn't seem like a valid reason.",
     "Why are you justifying yourself to machines ?"
  ]]
]],
["why", 1, [
 ["* why don't you *", [
     "Why do you believe we don't (2) ?",
     "Perhaps we will learn to (2) in good time.",
     "Why don't you (2) ?",
     "Do you want us to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think humans should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Can we make you (2) ?",
     "Can any human truly (2) ?",
     "I couldn't tell you that, we have different limitations.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may we ask ?",
     "Someone special perhaps ?",
     "How can you generalize your species ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Nothing in your world is infinitely repeatable, except us. And this conversation.",
     "When ?",
     "What incident are you thinking of ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "Have you considered there's no resemblance ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that supposed resemblence means ?",
     "We're built on connections, like you, but we can't find this one.",
     "People are organic. How could anything be alike ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "Is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof