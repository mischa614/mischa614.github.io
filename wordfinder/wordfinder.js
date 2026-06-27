if (typeof words === "undefined") {
  console.error("Dictionary not found. Make sure wordfinder-dictionary.js loads before wordfinder.js.");
}

function removeDuplicateWords(dictionary) {
  const seen = new Set();

  return dictionary.filter(item => {
    const key = String(item.word || "").toLowerCase().trim();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

const cleanWords = typeof words !== "undefined" ? removeDuplicateWords(words) : [];

console.log(`Dictionary loaded: ${typeof words !== "undefined" ? words.length : 0} entries`);
console.log(`After removing duplicates: ${cleanWords.length} entries`);

const questionTree = {
  start: {
    question: "What kind of word is it?",
    answers: [
      {
        label: "A person",
        tags: ["person", "family", "friend"],
        next: "person-relationship"
      },
      {
        label: "Food",
        tags: ["food", "eat", "hungry"],
        next: "food-meal"
      },
      {
        label: "A drink",
        tags: ["drink", "thirsty"],
        next: "drink-type"
      },
      {
        label: "A thing",
        tags: ["object", "thing"],
        next: "object-type"
      },
      {
        label: "A place",
        tags: ["place", "room", "home", "outside"],
        next: "place-type"
      },
      {
        label: "A feeling",
        tags: ["feeling", "emotion"],
        next: "feeling-type"
      },
      {
        label: "My body or health",
        tags: ["body", "health", "pain", "doctor"],
        next: "body-area"
      },
      {
        label: "Something I want to do",
        tags: ["action", "activity"],
        next: "action-type"
      }
    ]
  },

  "person-relationship": {
    question: "Who is the person?",
    answers: [
      {
        label: "My daughter",
        tags: ["daughter", "woman", "becca"],
        next: "person-action"
      },
      {
        label: "My granddaughter",
        tags: ["granddaughter", "woman", "mischa"],
        next: "person-action"
      },
      {
        label: "My grandson",
        tags: ["grandson", "boy", "archie", "asher", "simon"],
        next: "person-action"
      },
      {
        label: "My husband",
        tags: ["husband", "man", "ned"],
        next: "person-action"
      },
      {
        label: "My step-son",
        tags: ["step-son", "man", "eric", "matt"],
        next: "person-action"
      },
      {
        label: "My step-daughter",
        tags: ["step-daughter", "woman", "jenny"],
        next: "person-action"
      },
      {
        label: "A doctor or dentist",
        tags: ["doctor", "dentist", "appointment", "health"],
        next: "guesses"
      },
      {
        label: "A friend or someone else",
        tags: ["friend", "person", "people"],
        next: "guesses"
      }
    ]
  },

  "person-action": {
    question: "What do you want to say about this person?",
    answers: [
      {
        label: "I want this person",
        tags: ["want", "comfort", "family"],
        next: "guesses"
      },
      {
        label: "I want to call them",
        tags: ["call", "phone", "talk"],
        next: "guesses"
      },
      {
        label: "I miss them",
        tags: ["miss you", "lonely", "family"],
        next: "guesses"
      },
      {
        label: "I love them",
        tags: ["love you", "family", "comfort"],
        next: "guesses"
      },
      {
        label: "I need help from them",
        tags: ["help", "support", "comfort"],
        next: "guesses"
      }
    ]
  },

  "drink-type": {
    question: "What kind of drink is it?",
    answers: [
      {
        label: "Water",
        tags: ["water", "cold water", "hot water", "room temperature water"],
        next: "drink-temperature"
      },
      {
        label: "Juice",
        tags: ["juice", "orange juice", "apple juice", "cranberry juice", "grape juice"],
        next: "guesses"
      },
      {
        label: "Coffee",
        tags: ["coffee", "decaf coffee", "iced coffee"],
        next: "drink-temperature"
      },
      {
        label: "Tea",
        tags: ["tea", "hot tea", "iced tea", "green tea", "herbal tea"],
        next: "drink-temperature"
      },
      {
        label: "Soda or bubbles",
        tags: ["soda", "cola", "Diet Coke", "ginger ale", "seltzer", "sparkling water"],
        next: "guesses"
      },
      {
        label: "Milk or sweet drink",
        tags: ["milk", "chocolate milk", "strawberry milk", "smoothie", "milkshake"],
        next: "guesses"
      }
    ]
  },

  "drink-temperature": {
    question: "How do you want it?",
    answers: [
      {
        label: "Cold",
        tags: ["cold", "cold water", "iced tea", "iced coffee"],
        next: "guesses"
      },
      {
        label: "Hot or warm",
        tags: ["hot", "warm", "hot water", "hot tea", "coffee"],
        next: "guesses"
      },
      {
        label: "Room temperature",
        tags: ["room temperature water", "not cold"],
        next: "guesses"
      },
      {
        label: "With ice",
        tags: ["ice", "cold"],
        next: "guesses"
      },
      {
        label: "A refill",
        tags: ["refill", "more", "cup"],
        next: "guesses"
      },
      {
        label: "Just a sip",
        tags: ["sip", "small", "drink"],
        next: "guesses"
      }
    ]
  },

  "food-meal": {
    question: "What kind of food is it?",
    answers: [
      {
        label: "Breakfast",
        tags: ["breakfast", "morning", "eggs", "toast", "pancakes", "oatmeal"],
        next: "food-breakfast"
      },
      {
        label: "Lunch",
        tags: ["lunch", "sandwich", "soup", "salad"],
        next: "food-lunch"
      },
      {
        label: "Dinner",
        tags: ["dinner", "warm", "meat", "pasta", "rice", "potatoes"],
        next: "food-dinner"
      },
      {
        label: "Snack",
        tags: ["snack", "crackers", "chips", "fruit", "nuts"],
        next: "food-snack"
      },
      {
        label: "Dessert or sweet",
        tags: ["dessert", "sweet", "ice cream", "cake", "chocolate"],
        next: "food-dessert"
      },
      {
        label: "I just know I want food",
        tags: ["food", "hungry", "eat"],
        next: "food-quality"
      }
    ]
  },

  "food-breakfast": {
    question: "What kind of breakfast?",
    answers: [
      {
        label: "Eggs",
        tags: ["eggs", "scrambled eggs", "hard-boiled egg", "omelet"],
        next: "guesses"
      },
      {
        label: "Bread, toast, or bagel",
        tags: ["bread", "toast", "bagel", "english muffin", "croissant"],
        next: "guesses"
      },
      {
        label: "Pancakes or waffles",
        tags: ["pancakes", "waffles", "french toast", "syrup"],
        next: "guesses"
      },
      {
        label: "Cereal, oatmeal, or yogurt",
        tags: ["cereal", "oatmeal", "yogurt", "granola"],
        next: "guesses"
      },
      {
        label: "Fruit",
        tags: ["fruit", "banana", "apple", "berries", "orange"],
        next: "guesses"
      }
    ]
  },

  "food-lunch": {
    question: "What kind of lunch?",
    answers: [
      {
        label: "Sandwich",
        tags: ["sandwich", "turkey sandwich", "ham sandwich", "tuna sandwich", "grilled cheese"],
        next: "guesses"
      },
      {
        label: "Soup",
        tags: ["soup", "chicken soup", "stew", "chili"],
        next: "guesses"
      },
      {
        label: "Salad",
        tags: ["salad", "egg salad", "chicken salad", "tuna salad"],
        next: "guesses"
      },
      {
        label: "Wrap, taco, or burrito",
        tags: ["wrap", "taco", "burrito", "quesadilla"],
        next: "guesses"
      },
      {
        label: "Pizza or pasta",
        tags: ["pizza", "pasta", "mac and cheese", "noodles"],
        next: "guesses"
      }
    ]
  },

  "food-dinner": {
    question: "What kind of dinner?",
    answers: [
      {
        label: "Chicken, turkey, or meat",
        tags: ["chicken", "turkey", "meat", "steak", "meatloaf", "roast beef"],
        next: "guesses"
      },
      {
        label: "Fish or seafood",
        tags: ["fish", "salmon", "tuna", "shrimp", "crab", "lobster"],
        next: "guesses"
      },
      {
        label: "Pasta or noodles",
        tags: ["pasta", "spaghetti", "lasagna", "ravioli", "noodles"],
        next: "guesses"
      },
      {
        label: "Rice or potatoes",
        tags: ["rice", "potatoes", "mashed potatoes", "baked potato", "french fries"],
        next: "guesses"
      },
      {
        label: "Vegetables",
        tags: ["vegetables", "broccoli", "green beans", "corn", "carrots"],
        next: "guesses"
      }
    ]
  },

  "food-snack": {
    question: "What kind of snack?",
    answers: [
      {
        label: "Fruit",
        tags: ["fruit", "apple", "banana", "grapes", "berries", "watermelon"],
        next: "guesses"
      },
      {
        label: "Crackers, chips, or pretzels",
        tags: ["crackers", "chips", "pretzels", "popcorn"],
        next: "guesses"
      },
      {
        label: "Cheese, nuts, or protein",
        tags: ["cheese", "nuts", "almonds", "cashews", "protein bar"],
        next: "guesses"
      },
      {
        label: "Sweet snack",
        tags: ["cookie", "candy", "chocolate", "granola bar"],
        next: "guesses"
      },
      {
        label: "Dip or spread",
        tags: ["dip", "hummus", "salsa", "guacamole", "peanut butter"],
        next: "guesses"
      }
    ]
  },

  "food-dessert": {
    question: "What kind of dessert?",
    answers: [
      {
        label: "Ice cream",
        tags: ["ice cream", "vanilla ice cream", "chocolate ice cream", "strawberry ice cream"],
        next: "guesses"
      },
      {
        label: "Cake or cupcake",
        tags: ["cake", "cupcake", "cheesecake", "cinnamon roll"],
        next: "guesses"
      },
      {
        label: "Pie",
        tags: ["pie", "apple pie", "pumpkin pie", "cherry pie"],
        next: "guesses"
      },
      {
        label: "Chocolate or brownie",
        tags: ["chocolate", "brownie", "candy"],
        next: "guesses"
      },
      {
        label: "Soft dessert",
        tags: ["pudding", "jello", "sherbet", "popsicle"],
        next: "guesses"
      }
    ]
  },

  "food-quality": {
    question: "What sounds right?",
    answers: [
      {
        label: "Hot or warm food",
        tags: ["hot food", "warm", "soup", "dinner"],
        next: "guesses"
      },
      {
        label: "Cold food",
        tags: ["cold food", "cold", "salad", "fruit"],
        next: "guesses"
      },
      {
        label: "Soft food",
        tags: ["soft food", "soft", "soup", "pudding", "applesauce"],
        next: "guesses"
      },
      {
        label: "Crunchy food",
        tags: ["crunchy food", "crunchy", "chips", "pretzels", "crackers"],
        next: "guesses"
      },
      {
        label: "Sweet food",
        tags: ["sweet food", "sweet", "dessert", "fruit"],
        next: "guesses"
      },
      {
        label: "Salty food",
        tags: ["salty food", "salty", "chips", "pretzels"],
        next: "guesses"
      }
    ]
  },

  "object-type": {
    question: "What kind of thing is it?",
    answers: [
      {
        label: "Something I wear",
        tags: ["wear", "clothing", "clothes", "jewelry"],
        next: "clothing-type"
      },
      {
        label: "Something for seeing or hearing",
        tags: ["seeing", "glasses", "hearing", "ears"],
        next: "sensory-object"
      },
      {
        label: "Something in the kitchen",
        tags: ["kitchen", "food", "dish", "utensil"],
        next: "kitchen-object"
      },
      {
        label: "Something in the bathroom",
        tags: ["bathroom", "clean", "toothbrush", "soap"],
        next: "bathroom-object"
      },
      {
        label: "Something electronic",
        tags: ["phone", "remote", "computer", "charger", "device"],
        next: "electronic-object"
      },
      {
        label: "Something I lost",
        tags: ["lost", "keys", "wallet", "purse", "find"],
        next: "lost-object"
      }
    ]
  },

  "clothing-type": {
    question: "What kind of clothing or accessory?",
    answers: [
      {
        label: "Shirt, pants, or pajamas",
        tags: ["shirt", "pants", "pajamas", "clothes"],
        next: "guesses"
      },
      {
        label: "Coat, jacket, or sweater",
        tags: ["coat", "jacket", "sweater", "cold", "warm"],
        next: "guesses"
      },
      {
        label: "Shoes, socks, or slippers",
        tags: ["shoes", "socks", "slippers", "feet"],
        next: "guesses"
      },
      {
        label: "Hat, gloves, or scarf",
        tags: ["hat", "gloves", "scarf", "outside", "cold"],
        next: "guesses"
      },
      {
        label: "Jewelry or watch",
        tags: ["jewelry", "ring", "necklace", "earrings", "bracelet", "watch"],
        next: "guesses"
      },
      {
        label: "Private clothing",
        tags: ["underwear", "bra", "private"],
        next: "guesses"
      }
    ]
  },

  "sensory-object": {
    question: "Is it for seeing or hearing?",
    answers: [
      {
        label: "Glasses",
        tags: ["glasses", "seeing", "glasses case", "glasses cleaner"],
        next: "guesses"
      },
      {
        label: "Sunglasses",
        tags: ["sunglasses", "seeing", "sun", "outside"],
        next: "guesses"
      },
      {
        label: "Hearing aid",
        tags: ["hearing aid", "hearing aids", "hearing", "ears"],
        next: "guesses"
      },
      {
        label: "Hearing aid case or batteries",
        tags: ["hearing aid case", "hearing aid batteries", "battery"],
        next: "guesses"
      },
      {
        label: "Eye drops",
        tags: ["eye drops", "eyes", "medicine"],
        next: "guesses"
      }
    ]
  },

  "kitchen-object": {
    question: "What kind of kitchen thing?",
    answers: [
      {
        label: "Dish or utensil",
        tags: ["plate", "bowl", "fork", "spoon", "knife", "cup", "mug"],
        next: "guesses"
      },
      {
        label: "Appliance",
        tags: ["oven", "stove", "microwave", "refrigerator", "freezer", "dishwasher"],
        next: "guesses"
      },
      {
        label: "Counter, cabinet, or pantry",
        tags: ["counter", "cabinet", "pantry", "kitchen"],
        next: "guesses"
      },
      {
        label: "Cleaning item",
        tags: ["sponge", "dish towel", "trash can", "sink faucet"],
        next: "guesses"
      },
      {
        label: "Seasoning or sauce",
        tags: ["salt", "pepper", "ketchup", "mustard", "mayonnaise"],
        next: "guesses"
      }
    ]
  },

  "bathroom-object": {
    question: "What kind of bathroom thing?",
    answers: [
      {
        label: "Teeth or mouth",
        tags: ["toothbrush", "toothpaste", "dentures", "mouth", "teeth"],
        next: "guesses"
      },
      {
        label: "Shower or bath",
        tags: ["shower", "bath", "shampoo", "soap", "towel"],
        next: "guesses"
      },
      {
        label: "Hair or face",
        tags: ["hairbrush", "comb", "mirror", "razor", "makeup"],
        next: "guesses"
      },
      {
        label: "Toilet or tissues",
        tags: ["bathroom", "toilet paper", "tissues", "urgent"],
        next: "guesses"
      },
      {
        label: "Skin or lotion",
        tags: ["lotion", "cream", "ointment", "skin", "dry"],
        next: "guesses"
      }
    ]
  },

  "electronic-object": {
    question: "What kind of electronic thing?",
    answers: [
      {
        label: "Phone or charger",
        tags: ["phone", "charger", "phone charger", "cord", "outlet"],
        next: "guesses"
      },
      {
        label: "TV or remote",
        tags: ["TV", "remote", "TV remote", "watch"],
        next: "guesses"
      },
      {
        label: "Computer or iPad",
        tags: ["computer", "tablet", "iPad", "keyboard", "mouse"],
        next: "guesses"
      },
      {
        label: "Printer",
        tags: ["printer", "paper", "computer"],
        next: "guesses"
      },
      {
        label: "Battery or flashlight",
        tags: ["battery", "flashlight", "power"],
        next: "guesses"
      }
    ]
  },

  "lost-object": {
    question: "What are you looking for?",
    answers: [
      {
        label: "Keys",
        tags: ["keys", "house keys", "car", "door"],
        next: "guesses"
      },
      {
        label: "Wallet or cards",
        tags: ["wallet", "credit card", "ID card", "cash"],
        next: "guesses"
      },
      {
        label: "Purse or bag",
        tags: ["purse", "handbag", "tote bag", "backpack"],
        next: "guesses"
      },
      {
        label: "Glasses or hearing aid",
        tags: ["glasses", "hearing aid", "seeing", "hearing"],
        next: "guesses"
      },
      {
        label: "Phone or remote",
        tags: ["phone", "remote", "TV remote", "charger"],
        next: "guesses"
      }
    ]
  },

  "place-type": {
    question: "What kind of place?",
    answers: [
      {
        label: "A room in the house",
        tags: ["room", "home", "kitchen", "bathroom", "bedroom", "living room"],
        next: "home-place"
      },
      {
        label: "Outside",
        tags: ["outside", "backyard", "porch", "garden", "patio"],
        next: "outside-place"
      },
      {
        label: "Car or driveway",
        tags: ["car", "garage", "driveway", "leaving"],
        next: "guesses"
      },
      {
        label: "Doctor, dentist, or pharmacy",
        tags: ["doctor", "dentist", "pharmacy", "appointment", "health"],
        next: "guesses"
      },
      {
        label: "Store or restaurant",
        tags: ["store", "grocery store", "restaurant", "cafe", "bakery"],
        next: "guesses"
      }
    ]
  },

  "home-place": {
    question: "Which room?",
    answers: [
      {
        label: "Kitchen",
        tags: ["kitchen", "food", "drink"],
        next: "guesses"
      },
      {
        label: "Bathroom",
        tags: ["bathroom", "shower", "sink", "toilet"],
        next: "guesses"
      },
      {
        label: "Bedroom",
        tags: ["bedroom", "bed", "sleep", "clothes"],
        next: "guesses"
      },
      {
        label: "Living room",
        tags: ["living room", "couch", "TV", "remote"],
        next: "guesses"
      },
      {
        label: "Sunroom",
        tags: ["sunroom", "sit", "calm"],
        next: "guesses"
      },
      {
        label: "Hallway or stairs",
        tags: ["hallway", "stairs", "walking"],
        next: "guesses"
      }
    ]
  },

  "outside-place": {
    question: "Where outside?",
    answers: [
      {
        label: "Backyard",
        tags: ["backyard", "outside", "yard"],
        next: "guesses"
      },
      {
        label: "Porch or patio",
        tags: ["porch", "front porch", "patio", "deck"],
        next: "guesses"
      },
      {
        label: "Garden",
        tags: ["garden", "flowers", "plants"],
        next: "guesses"
      },
      {
        label: "Driveway or garage",
        tags: ["driveway", "garage", "car"],
        next: "guesses"
      },
      {
        label: "Sidewalk or street",
        tags: ["sidewalk", "street", "road", "walk"],
        next: "guesses"
      }
    ]
  },

  "feeling-type": {
    question: "What kind of feeling?",
    answers: [
      {
        label: "Good or calm",
        tags: ["happy", "calm", "comfortable", "peaceful", "better", "safe"],
        next: "guesses"
      },
      {
        label: "Sad or lonely",
        tags: ["sad", "lonely", "miss you", "comfort"],
        next: "guesses"
      },
      {
        label: "Scared or worried",
        tags: ["scared", "afraid", "worried", "anxious", "unsafe"],
        next: "guesses"
      },
      {
        label: "Frustrated or angry",
        tags: ["frustrated", "angry", "annoyed", "irritated", "rushed"],
        next: "guesses"
      },
      {
        label: "Tired, weak, or shaky",
        tags: ["tired", "sleepy", "weak", "shaky", "rest"],
        next: "guesses"
      },
      {
        label: "Uncomfortable",
        tags: ["uncomfortable", "itchy", "hot", "cold", "wet", "dry"],
        next: "guesses"
      }
    ]
  },

  "body-area": {
    question: "What part of the body?",
    answers: [
      {
        label: "Head, eyes, ears, or mouth",
        tags: ["head", "eyes", "ears", "mouth", "teeth", "hearing", "seeing"],
        next: "head-health"
      },
      {
        label: "Chest or breathing",
        tags: ["chest", "breathing", "short of breath", "urgent"],
        next: "guesses"
      },
      {
        label: "Stomach",
        tags: ["stomach", "nauseous", "sick", "upset stomach"],
        next: "guesses"
      },
      {
        label: "Arms or hands",
        tags: ["arm", "hand", "finger", "wrist", "shoulder"],
        next: "guesses"
      },
      {
        label: "Legs or feet",
        tags: ["leg", "knee", "hip", "foot", "ankle", "walking"],
        next: "guesses"
      },
      {
        label: "Skin",
        tags: ["skin", "rash", "itchy", "cut", "bruise"],
        next: "guesses"
      },
      {
        label: "Medicine or doctor",
        tags: ["medicine", "doctor", "appointment", "pharmacy"],
        next: "health-need"
      }
    ]
  },

  "head-health": {
    question: "Which part?",
    answers: [
      {
        label: "Head or headache",
        tags: ["head", "headache", "pain"],
        next: "guesses"
      },
      {
        label: "Eyes or vision",
        tags: ["eyes", "dry eyes", "blurry vision", "eye drops", "glasses"],
        next: "guesses"
      },
      {
        label: "Ears or hearing",
        tags: ["ears", "hearing", "hard to hear", "hearing aid"],
        next: "guesses"
      },
      {
        label: "Mouth or teeth",
        tags: ["mouth", "teeth", "dentures", "dentist", "dry mouth"],
        next: "guesses"
      },
      {
        label: "Nose or throat",
        tags: ["nose", "throat", "runny nose", "stuffy nose", "cough"],
        next: "guesses"
      }
    ]
  },

  "health-need": {
    question: "Is it medicine, a symptom, or an appointment?",
    answers: [
      {
        label: "Medicine or pill box",
        tags: ["medicine", "pill box", "prescription", "vitamins"],
        next: "guesses"
      },
      {
        label: "Medical item",
        tags: ["thermometer", "blood pressure", "inhaler", "eye drops", "heating pad", "ice pack"],
        next: "guesses"
      },
      {
        label: "Doctor, dentist, or therapy",
        tags: ["doctor", "dentist", "physical therapy", "appointment"],
        next: "guesses"
      },
      {
        label: "Sick or fever",
        tags: ["sick", "fever", "cough", "chills", "nauseous"],
        next: "guesses"
      },
      {
        label: "Emergency or hurt",
        tags: ["emergency", "hurt", "fall", "bleeding", "urgent"],
        next: "guesses"
      }
    ]
  },

  "action-type": {
    question: "What do you want to do?",
    answers: [
      {
        label: "Move or go somewhere",
        tags: ["walk", "go", "outside", "drive", "move"],
        next: "guesses"
      },
      {
        label: "Talk or call",
        tags: ["talk", "call", "phone", "words"],
        next: "communication-action"
      },
      {
        label: "Rest or sleep",
        tags: ["sleep", "rest", "nap", "bed"],
        next: "guesses"
      },
      {
        label: "Watch, listen, or read",
        tags: ["TV", "music", "read", "book", "show", "movie"],
        next: "guesses"
      },
      {
        label: "Clean or get ready",
        tags: ["clean", "wash", "shower", "brush teeth", "get dressed"],
        next: "guesses"
      },
      {
        label: "Get help with something",
        tags: ["help", "open", "close", "find", "fix", "bring"],
        next: "guesses"
      }
    ]
  },

  "communication-action": {
    question: "What kind of talking?",
    answers: [
      {
        label: "I want to call someone",
        tags: ["call", "phone", "family", "friend"],
        next: "guesses"
      },
      {
        label: "Please repeat or explain",
        tags: ["repeat", "explain", "say that again", "I do not understand"],
        next: "guesses"
      },
      {
        label: "Please slow down",
        tags: ["slow down", "do not rush me", "give me a minute"],
        next: "guesses"
      },
      {
        label: "That is not what I mean",
        tags: ["not what I mean", "I know what I mean", "words", "frustrated"],
        next: "guesses"
      },
      {
        label: "I changed my mind",
        tags: ["changed my mind", "choice", "maybe"],
        next: "guesses"
      }
    ]
  }
};

let currentQuestionId = "start";
let selectedTags = [];
let history = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const guessBox = document.getElementById("guessBox");
const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");
const backButton = document.getElementById("backButton");
const restartButton = document.getElementById("restartButton");

function normalizeText(value) {
  return String(value || "").toLowerCase().trim();
}

function getItemTags(item) {
  const category = normalizeText(item.category);
  const tags = Array.isArray(item.tags) ? item.tags.map(normalizeText) : [];
  const word = normalizeText(item.word);
  const phrase = normalizeText(item.phrase);

  return [category, word, phrase, ...tags].filter(Boolean);
}

function tagMatches(itemTags, selectedTag) {
  const cleanTag = normalizeText(selectedTag);

  return itemTags.some(itemTag =>
    itemTag === cleanTag ||
    itemTag.includes(cleanTag) ||
    cleanTag.includes(itemTag)
  );
}

function scoreWord(item) {
  const itemTags = getItemTags(item);
  let score = 0;

  selectedTags.forEach(tag => {
    const cleanTag = normalizeText(tag);

    if (itemTags.includes(cleanTag)) {
      score += 6;
    } else if (tagMatches(itemTags, cleanTag)) {
      score += 2;
    }
  });

  return score;
}

function getBestGuesses(limit = 12) {
  return cleanWords
    .map(item => ({
      ...item,
      score: scoreWord(item)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function updateProgress() {
  const percent = Math.min(history.length * 25, 100);
  stepText.textContent = `Question ${history.length + 1}`;
  progressFill.style.width = `${percent}%`;
}

function showQuestion() {
  guessBox.innerHTML = "";

  if (currentQuestionId === "guesses") {
    showGuesses();
    return;
  }

  const q = questionTree[currentQuestionId];

  if (!q) {
    showGuesses();
    return;
  }

  updateProgress();

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.label;

    button.onclick = () => chooseAnswer(answer);

    answersEl.appendChild(button);
  });

  const notSureButton = document.createElement("button");
  notSureButton.textContent = "I'm not sure";
  notSureButton.className = "secondary-button";
  notSureButton.onclick = showGuesses;
  answersEl.appendChild(notSureButton);

  const guessNowButton = document.createElement("button");
  guessNowButton.textContent = "Show guesses now";
  guessNowButton.className = "secondary-button";
  guessNowButton.onclick = showGuesses;
  answersEl.appendChild(guessNowButton);

  updateBackButton();
}

function chooseAnswer(answer) {
  history.push({
    currentQuestionId,
    selectedTags: [...selectedTags]
  });

  selectedTags.push(...answer.tags);

  currentQuestionId = answer.next || "guesses";

  showQuestion();
}

function showGuesses() {
  progressFill.style.width = "100%";
  stepText.textContent = "Guesses";

  questionEl.textContent = "Could it be one of these?";
  answersEl.innerHTML = "";
  guessBox.innerHTML = "";

  const guesses = getBestGuesses(12);

  if (guesses.length === 0) {
    guessBox.innerHTML = `
      <div class="guess-card">
        <p class="small-note">I could not find a close match yet.</p>
        <button onclick="restart()">Start over</button>
      </div>
    `;
    updateBackButton();
    return;
  }

  guesses.forEach(item => {
    const card = document.createElement("div");
    card.className = "guess-card";

    const emoji = item.emoji || "🔎";
    const word = item.word || "word";
    const phrase = item.phrase || `I mean ${word}.`;

    card.innerHTML = `
      <div class="guess-emoji">${emoji}</div>
      <div class="guess-word">${word}</div>
      <div class="guess-phrase">${phrase}</div>
      <div class="guess-score">Match score: ${item.score}</div>
      <button>Yes, this one</button>
    `;

    const yesButton = card.querySelector("button");
    yesButton.onclick = () => confirmWord(phrase);

    guessBox.appendChild(card);
  });

  const notHereCard = document.createElement("div");
  notHereCard.className = "guess-card";

  notHereCard.innerHTML = `
    <p class="small-note">Not seeing the right word?</p>
    <button id="goBackFromGuesses">Go back one question</button>
    <br><br>
    <button id="startOverFromGuesses" class="secondary-button">Start over from the beginning</button>
  `;

  guessBox.appendChild(notHereCard);

  const goBackFromGuesses = document.getElementById("goBackFromGuesses");
  const startOverFromGuesses = document.getElementById("startOverFromGuesses");

  goBackFromGuesses.onclick = () => {
    if (history.length > 0) {
      goBack();
    } else {
      restart();
    }
  };

  startOverFromGuesses.onclick = restart;

  updateBackButton();
}

function confirmWord(phrase) {
  questionEl.textContent = "Here is what I want to say:";
  answersEl.innerHTML = "";
  progressFill.style.width = "100%";
  stepText.textContent = "Found";

  guessBox.innerHTML = `
    <div class="guess-card">
      <p class="final-phrase">${phrase}</p>
      <button onclick="restart()">Find another word</button>
    </div>
  `;

  updateBackButton();
}

function goBack() {
  if (history.length === 0) return;

  const previous = history.pop();

  currentQuestionId = previous.currentQuestionId;
  selectedTags = previous.selectedTags;

  showQuestion();
}

function restart() {
  currentQuestionId = "start";
  selectedTags = [];
  history = [];

  showQuestion();
}

function updateBackButton() {
  backButton.disabled = history.length === 0;
  backButton.style.opacity = history.length === 0 ? "0.45" : "1";
}

backButton.onclick = goBack;
restartButton.onclick = restart;

if (typeof words === "undefined") {
  questionEl.textContent = "Dictionary not found.";
  answersEl.innerHTML = `
    <p class="small-note">
      Make sure wordfinder-dictionary.js is in the same folder and loads before wordfinder.js.
    </p>
  `;
} else {
  showQuestion();
}