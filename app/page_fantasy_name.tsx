import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Wand2, Copy, Check, RefreshCw } from 'lucide-react';

interface FantasyProps {
  dict: Dictionary;
}

// Data sources for generation
const DATA = {
  classic: {
    adjectives: ["Crimson", "Silent", "Ancient", "Dark", "Golden", "Savage", "Mystic", "Frozen", "Broken", "Eternal", "Shadow", "Radiant", "Iron", "Storm", "Void", "Azure", "Obsidian", "Celestial", "Hollow", "Vengeful", "Arcane", "Fallen", "Rising", "Sapphire", "Burning", "Spectral", "Divine", "Wicked", "Holy", "Lost", "Infinite", "Primal", "Chaos", "Astral", "Ethereal", "Cursed", "Blessed", "Wild", "Noble", "Grim", "Thunder", "Frost"],
    nouns: ["Dragon", "Shield", "Blade", "Wolf", "Phoenix", "Walker", "Guardian", "Spirit", "Hunter", "Knight", "Wraith", "Titan", "Eagle", "Fang", "Storm", "Strider", "Heart", "Soul", "Bane", "Caller", "Reaper", "Warden", "Sage", "Seer", "King", "Queen", "Lord", "Strike", "Flame", "Song", "Whisper", "Roar", "Claw", "Eye", "Hand", "Oath", "Pact", "Shadow", "Light", "Star", "Moon", "Sun"]
  },
  human: {
    male: ["Aric", "Bram", "Cael", "Doran", "Elric", "Finn", "Gareth", "Hal", "Ivar", "Jorin", "Kael", "Lorn", "Marek", "Novan", "Orin", "Perrin", "Quinn", "Rowan", "Silas", "Torin", "Ulric", "Valen", "Willem", "Xander", "Yoric", "Zane", "Arthur", "Baldric", "Cedric", "Darian", "Edric", "Godric", "Leoric", "Osric", "Roderick", "Theodoric", "Alaric", "Berenger", "Conrad", "Emeric", "Fendrel", "Gustav", "Henrik", "Isen", "Jarod", "Konrad", "Loric", "Magnus", "Neric", "Olaf", "Patrin", "Ragnar", "Sigurd", "Toric", "Uther", "Vance", "Walric", "Xenos", "Yorick", "Zorander"],
    female: ["Adela", "Brea", "Cora", "Dara", "Elara", "Fae", "Gwen", "Hana", "Isla", "Jessa", "Kara", "Lana", "Mara", "Nia", "Ola", "Petra", "Quilla", "Ria", "Sera", "Tessa", "Una", "Vera", "Willa", "Xena", "Yara", "Zara", "Aveline", "Beatrix", "Clarissa", "Elowen", "Genevieve", "Isolde", "Juliana", "Lilith", "Mirabel", "Rosalind", "Seraphina", "Theodora", "Amara", "Bella", "Cassia", "Diana", "Elena", "Fiona", "Gisela", "Helena", "Irina", "Jora", "Kaela", "Lyra", "Mina", "Nora", "Ophelia", "Portia", "Rowena", "Sabrina", "Tatiana", "Ursula", "Valeria", "Winona", "Xandra", "Ysabel", "Zelma"],
    surnames: ["Blackwood", "Crowley", "Dawson", "Evans", "Fletcher", "Grey", "Hawthorne", "Ironwood", "Jones", "King", "Locke", "Miller", "Nash", "Oakley", "Pike", "Quade", "Ryder", "Stark", "Thorne", "Underwood", "Vance", "Walker", "Xavier", "York", "Zale", "Ashford", "Blackwater", "Coldwater", "Darkmore", "Eastwick", "Frost", "Grim", "Hightower", "Ironfist", "Longstrider", "Moon", "Nightshade", "Storm", "Winter", "Whitewater", "Amberhill", "Brightwood", "Clearwater", "Dawnstar", "Evergreen", "Fairwind", "Goldriver", "Havenwood", "Icewind", "Jadehill", "Kingsford", "Lakeview", "Mistwalker", "Northstar", "Oakheart", "Pinegrove", "Quickstream", "Ravenwood", "Silverlake", "Thornbush", "Underhill", "Vale", "Westwind", "Yewdale", "Zircon"],
    titles: ["the Brave", "the Bold", "the Wise", "the Strong", "the Swift", "Dragonbane", "Ironheart", "Stormborn", "the Just", "the Cruel", "the Fair", "the Young", "the Old", "the Great", "Lionheart", "Wolfsbane", "the Shadow", "the Light", "of the North", "of the South", "the Paladin", "the Rogue", "the Mage", "the Cleric", "the Bard", "the Druid", "the Monk", "the Ranger", "the Sorcerer", "the Warlock", "the Warrior", "Godslayer", "Kingslayer", "Queenslayer", "Doomherald", "Lightbringer"]
  },
  elf: {
    male_prefix: ["Aer", "Cae", "Dae", "Eir", "Fae", "Gae", "Il", "La", "Mue", "Na", "Pa", "Qua", "Ra", "Sa", "Ta", "Va", "Za", "Thran", "Leg", "El", "Gil", "Hal", "Fin", "Glor", "Cel", "Ar", "Ber", "Car", "Dor", "Ea", "Far", "Gal", "Har", "Ia", "Jar", "Kan", "Lor", "Mar", "Nor", "Ori", "Par", "Quo", "Ril", "Sil", "Tar", "Van", "Wil", "Xan", "Yen", "Zir"],
    female_prefix: ["Ara", "Bri", "Cia", "Dara", "Ela", "Fian", "Gla", "Hala", "Ila", "Kia", "Lia", "Mia", "Nia", "Ola", "Pia", "Quia", "Ria", "Sia", "Tia", "Via", "Xia", "Yia", "Zia", "Gal", "Arw", "Ana", "Bela", "Ca", "Dae", "Eri", "Fae", "Gwen", "He", "Iri", "Jae", "Kae", "Lae", "Mae", "Nae", "Orae", "Pae", "Qui", "Rae", "Sae", "Tae", "Vae", "Wae", "Xae", "Yae", "Zae"],
    suffix: ["ban", "cor", "dan", "driel", "eil", "eth", "ian", "iel", "in", "ion", "ius", "lan", "las", "len", "lyn", "mah", "mil", "mus", "nal", "nes", "niel", "non", "or", "que", "ra", "rad", "ran", "reth", "ric", "rid", "riel", "rien", "rin", "rith", "ros", "sha", "th", "tha", "thas", "ther", "thir", "thor", "uil", "uin", "um", "us", "van", "var", "wyn", "x", "y", "yr", "dor", "mir", "dal", "dil", "dor", "duin", "gal", "gorn", "gul", "hir", "lith", "loth", "nar", "niph", "nui", "ond", "orn", "phir", "quil", "ril", "rond", "ros", "thien", "uil", "und", "uilos", "ur", "vorn", "wen", "wing", "yav"],
    titles: ["Starseeker", "Moonwhisper", "Sunstrider", "Leafwalker", "Windrunner", "Dawncaller", "Duskblade", "Starlight", "Moonshadow", "Silverleaf", "Goldleaf", "Swiftfoot", "Truebow", "Greenleaf", "Spellweaver", "Lorekeeper", "Highborn", "Pathfinder", "Woodwalker", "Stargazer"]
  },
  dwarf: {
    male_prefix: ["Bal", "Bim", "Bo", "Bom", "Bram", "Bran", "Bru", "Bur", "Dag", "Dil", "Dim", "Dol", "Dori", "Dwal", "Far", "Fil", "Flo", "Gar", "Gil", "Gim", "Glo", "Gor", "Gorm", "Gram", "Grim", "Grum", "Ham", "Kil", "Kor", "Krum", "Lob", "Lof", "Mal", "Mor", "Nor", "Oin", "Or", "Ori", "Tho", "Thor", "Thra", "Thro", "Tor", "Ad", "Am", "Bar", "Bro", "Dain", "Dur", "Fun", "Gin", "Har", "Kaz", "Lon", "Mun", "Nain", "Nori", "Fund", "Gloin", "Bif", "Bof", "Bomb"],
    female_prefix: ["Bel", "Bona", "Bree", "Da", "Di", "Dis", "Dora", "Dura", "Fal", "Filia", "Gimna", "Glora", "Gora", "Hel", "Hilda", "Kila", "Kora", "Lia", "Lora", "Mara", "Mora", "Nala", "Nora", "Ola", "Oria", "Thora", "Thra", "Tora", "Alma", "Bruna", "Cara", "Dona", "Elga", "Frida", "Greta", "Helga", "Inga", "Kara", "Lena", "Mina", "Nena", "Olga", "Petra", "Rona", "Sola", "Trina", "Ula", "Vana", "Wila", "Xara", "Yana", "Zara"],
    suffix: ["aim", "ain", "ak", "ar", "at", "bor", "bu", "bur", "d", "din", "dir", "dor", "drin", "durs", "gal", "gan", "gar", "gim", "gin", "gni", "gno", "grom", "gund", "ik", "in", "li", "lin", "lo", "m", "min", "mir", "na", "ni", "no", "o", "or", "orin", "ra", "ram", "rin", "s", "th", "thor", "thur", "ur", "ack", "ang", "bek", "bol", "dak", "dohr", "drak", "dul", "gack", "gan", "gash", "gorm", "grad", "grim", "gud", "gund", "hack", "hark", "him", "hrak", "hurb", "kagg", "kakk", "kash", "khr", "kor", "kul", "lag", "lam", "lar", "lesh", "lok", "lur", "makh", "marr", "mash", "maz", "mir", "mok", "morg", "mrak", "mug", "nakh", "nar", "nogg", "nok", "norg", "nrak", "nurl", "ogg", "ol", "org", "orn", "rad", "rak", "ram", "rash", "rav", "raz", "rik", "rim", "rish", "rog", "rok", "ron", "ror", "roth", "ru", "ruk", "rung", "rush", "sakh", "sarr", "sash", "shak", "shar", "shat", "shok", "shor", "shrak", "shul", "skab", "skag", "skak", "skarr", "skash", "skat", "skaw", "skaz", "skek", "skel", "sker", "skex", "skey", "skez", "skil", "skit", "skiv", "skiz", "skok", "skom", "skon", "skoo", "skop", "skor", "skos", "skot", "skov", "skow", "skox", "skoy", "skoz", "skuk", "skul", "skum", "skun", "skur", "skus", "skut", "skuv", "skux", "skuy", "skuz", "slai", "slak", "slam", "slar", "slat", "slaw", "slay", "slaz"],
    clan: ["Ironfist", "Stonehelm", "Goldbeard", "Deepforge", "Anvilbreaker", "Bronzebeard", "Hammerfall", "Shieldbreaker", "Axebite", "Thunderforge", "Copperpot", "Steelshaper", "Rockheart", "Mountainview", "Gemfinder", "Battlehammer", "Blackiron", "Bloodaxe", "Boulderfist", "Brewer", "Broadbeam", "Coppersmelt", "Deepdelver", "Dragonbane", "Earthshield", "Fireforge", "Flintchin", "Frostbeard", "Graveltoe", "Grimstone", "Heavyhand", "Ironfoot", "Kegbottom", "Lodestone", "Longbeard", "Metalshaper", "Minecart", "Mudfoot", "Oakenhild", "Oresmelter", "Platearm", "Quarryman", "Redaxe", "Rockcrusher", "Runecarver", "Silverpick", "Slatefist", "Smelter", "Stonebreaker", "Strongarm", "Tunnelrat", "Underhill", "Warhammer", "Wildbeard"]
  },
  orc: {
    male_prefix: ["Ag", "Ar", "At", "Bash", "Bog", "Bur", "Duf", "Dur", "Gash", "Ghor", "Gor", "Grom", "Gru", "Gruk", "Gub", "Gug", "Gur", "Hag", "Hok", "Hog", "Jub", "Jug", "Kag", "Kog", "Lok", "Lug", "Mak", "Mog", "Mok", "Mug", "Nog", "Olg", "Oog", "Oruk", "Rug", "Ruk", "Shag", "Shug", "Skab", "Snag", "Thak", "Thok", "Thrug", "Ug", "Urz", "Uth", "Zag", "Zog", "Az", "Baz", "Brog", "Brug", "Dak", "Dreg", "Drog", "Drum", "Gak", "Garg", "Glum", "Gnar", "Gob", "Gok", "Grak", "Grim", "Grot", "Grub", "Gul", "Guz", "Hak", "Harg", "Hok", "Hrug", "Hug", "Jak", "Jog", "Juk", "Karg", "Kog", "Krug", "Lak", "Log", "Lug", "Mag", "Morg", "Mug", "Nak", "Narg", "Nog", "Nug", "Ok", "Org", "Orog", "Rag", "Rok", "Rot", "Rug", "Sak", "Sarg", "Skog", "Slug", "Sog", "Tag", "Thag", "Thog", "Thug", "Ugl", "Urk", "Vak", "Vog", "Vug", "Wag", "Wog", "Wug", "Yag", "Yog", "Yug", "Zak", "Zog", "Zug"],
    female_prefix: ["Bree", "Da", "Gha", "Gra", "Gua", "Hana", "Kora", "Lag", "Marga", "Maz", "Mugha", "Narg", "Oka", "Ola", "Rha", "Rua", "Shara", "Soka", "Uga", "Uma", "Ura", "Var", "Vola", "Zara", "Aga", "Baga", "Daga", "Gaga", "Haga", "Jaga", "Kaga", "Laga", "Maga", "Naga", "Oga", "Raga", "Saga", "Taga", "Uga", "Vaga", "Waga", "Yaga", "Zaga", "Ara", "Bara", "Dara", "Gara", "Hara", "Jara", "Kara", "Lara", "Mara", "Nara", "Ora", "Rara", "Sara", "Tara", "Ura", "Vara", "Wara", "Yara", "Zara"],
    suffix: ["'gash", "'gog", "'gor", "'gul", "'kai", "'maug", "'mog", "'rush", "'thog", "'tug", "ak", "ax", "bag", "bog", "dag", "dash", "dog", "dug", "gash", "gog", "gor", "gu", "hag", "hok", "kak", "kash", "kull", "lag", "lug", "mak", "maug", "morg", "nak", "nar", "og", "or", "org", "rak", "rark", "rol", "ruk", "skab", "snaga", "thak", "thog", "ug", "uk", "ur", "urt", "zog", "ash", "bash", "clash", "crash", "dash", "fash", "gash", "hash", "lash", "mash", "nash", "pash", "rash", "sash", "tash", "vash", "wash", "yash", "zash", "eck", "beck", "deck", "feck", "geck", "heck", "jeck", "keck", "leck", "meck", "neck", "peck", "reck", "seck", "teck", "veck", "weck", "yeck", "zeck", "ick", "bick", "dick", "fick", "gick", "hick", "jick", "kick", "lick", "mick", "nick", "pick", "rick", "sick", "tick", "vick", "wick", "yick", "zick", "ock", "bock", "dock", "fock", "gock", "hock", "jock", "kock", "lock", "mock", "nock", "pock", "rock", "sock", "tock", "vock", "wock", "yock", "zock", "uck", "buck", "duck", "fuck", "guck", "huck", "juck", "kuck", "luck", "muck", "nuck", "puck", "ruck", "suck", "tuck", "vuck", "wuck", "yuck", "zuck"],
    titles: ["the Destroyer", "Bonecrusher", "Skullsplitter", "Bloodaxe", "Ironhide", "the Fierce", "Warsong", "Doomhammer", "Hellscream", "Blackrock", "the Brute", "the Savage", "the Mighty", "the Cruel", "the Vile", "the Wicked", "the Dark", "the Black", "the Red", "the Green", "the Ugly", "the Strong", "the Fast", "the Quick", "the Slow", "the Dumb", "the Smart", "the Wise", "the Old", "the Young", "the Big", "the Small", "the Fat", "the Skinny", "the Tall", "the Short", "the Loud", "the Quiet", "the Brave", "the Coward", "the Rich", "the Poor", "the Good", "the Bad", "the Ugly"]
  },
  place: {
    prefix: ["Winter", "Storm", "Iron", "High", "Silver", "Shadow", "Dragon", "River", "North", "West", "East", "South", "Fair", "Dark", "Light", "Gold", "Frost", "Green", "White", "Black", "Red", "Blue", "Gray", "Old", "New", "Kings", "Queens", "Princes", "Raven", "Wolf", "Bear", "Eagle", "Hawk", "Falcon", "Owl", "Crow", "Deer", "Elk", "Moose", "Boar", "Fox", "Badger", "Otter", "Beaver", "Rat", "Mouse", "Snake", "Viper", "Adder", "Cobra", "Python", "Toad", "Frog", "Newt", "Lizard", "Turtle", "Fish", "Shark", "Whale", "Dolphin", "Seal", "Walrus", "Penguin", "Polar", "Grizzly", "Panda", "Koala", "Kangaroo", "Lion", "Tiger", "Leopard", "Cheetah", "Jaguar", "Panther", "Cougar", "Lynx", "Bobcat", "Wildcat", "Housecat", "Dog", "Wolf", "Coyote", "Jackal", "Fox", "Hyena", "Dingo", "Bear", "Raccoon", "Skunk", "Weasel", "Ferret", "Mink", "Otter", "Badger", "Wolverine", "Mongoose", "Meerkat", "Civet", "Genet", "Fossa", "Binturong", "Linsang", "Palm", "Masked", "Banded", "Giant", "Red", "Lesser", "Spotted", "Striped", "Ring-tailed", "Brown", "Black", "White", "Grey", "Golden", "Silver", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Red", "Violet", "Indigo"],
    suffix: ["fell", "hold", "gard", "keep", "watch", "haven", "wood", "field", "rock", "stone", "dale", "vale", "port", "gate", "mouth", "spire", "tower", "bridge", "ford", "wall", "land", "ia", "ton", "ville", "burgh", "shire", "wick", "stead", "heim", "grad", "bad", "furt", "dorf", "berg", "stein", "hof", "kirch", "bach", "brun", "feld", "wald", "thou", "by", "thorp", "toft", "thwaite", "holm", "ness", "vik", "dal", "stad", "heim", "land", "mark", "gard", "vang", "vid", "vin", "set", "rud", "tveit", "bø", "dal", "fjell", "nes", "vik", "øy", "holm", "skjær", "bo", "rum", "stad", "tun", "vang", "vin", "akr", "al", "ar", "ast", "at", "ba", "be", "bi", "bo", "bu", "by", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xu", "ya", "ye", "yi", "yo", "yu", "za", "ze", "zi", "zo", "zu"]
  },
  scifi: {
    male: ["Zor", "Xal", "Kry", "Vex", "Jor", "Kal", "Ron", "Zax", "Qar", "Tex", "Lax", "Nex", "Pax", "Rax", "Sax", "Tax", "Vax", "Wax", "Zex", "Quix", "Tron", "Neo", "Morpheus", "Cypher", "Tank", "Dozer", "Mouse", "Apoc", "Switch", "Link", "Zee", "Kid", "Bane", "Smith", "Brown", "Jones", "Jackson", "Johnson", "Thompson", "Williams", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray"],
    female: ["Zora", "Xala", "Krya", "Vexa", "Jora", "Kala", "Rona", "Zaxa", "Qara", "Texa", "Laxa", "Nexa", "Paxa", "Raxa", "Saxa", "Taxa", "Vaxa", "Waxa", "Zexa", "Quixa", "Trona", "Nea", "Morphea", "Cyphera", "Tanka", "Doza", "Mousa", "Apoca", "Switcha", "Linka", "Zea", "Kida", "Bana", "Smitha", "Browna", "Jonesa", "Jacksona", "Johnsona", "Thompsona", "Williamsa", "Davisa", "Millera", "Wilsona", "Moora", "Taylora", "Andersona", "Thomasa", "Jacksona", "Whita", "Harrisa", "Martina", "Thompsona", "Garcia", "Martineza", "Robinsona", "Clarka", "Rodrigueza", "Lewisa", "Lea", "Walkera", "Halla", "Allena", "Younga", "Hernandeza", "Kinga", "Wrighta", "Lopeza", "Hilla", "Scotta", "Greena", "Adamsa", "Bakera", "Gonzalez", "Nelsona", "Cartera", "Mitchella", "Pereza", "Robertsa", "Turnera", "Phillipsa", "Campbella", "Parkera", "Evansa", "Edwardsa", "Collinsa", "Stewarta", "Sancheza", "Morrisa", "Rogersa", "Reeda", "Cooka", "Morgana", "Bella", "Murphya", "Baileya", "Rivera", "Coopera", "Richardsona", "Coxa", "Howarda", "Warda", "Torresa", "Petersona", "Graya"],
    surnames: ["Stark", "Wayne", "Kent", "Banner", "Parker", "Rogers", "Odinson", "Romanoff", "Barton", "Wilson", "Barnes", "Maximoff", "Vision", "Strange", "T'Challa", "Danvers", "Lang", "Van Dyne", "Pym", "Fury", "Hill", "Coulson", "May", "Johnson", "Fitz", "Simmons", "Mack", "Yo-Yo", "Campbell", "Creel", "Garrett", "Ward", "Malick", "Hale", "Talbot", "Creel", "Hunter", "Morse", "Radcliffe", "Aida", "Enoch", "Deke", "Sousa", "Kora", "Sibyl", "Nathaniel", "Malick"]
  },
  villain: {
    names: ["Malakar", "Zorath", "Voldar", "Thul", "Krag", "Xul", "Morgath", "Drakon", "Saron", "Vex", "Nox", "Grim", "Bane", "Raze", "Void", "Doom", "Dread", "Vile", "Wicked", "Cruel", "Dark", "Shadow", "Night", "Blood", "Death", "Pain", "Fear", "Hate", "Rage", "Wrath", "Sin", "Vice", "Malice", "Spite", "Envy", "Greed", "Lust", "Sloth", "Pride", "Gluttony"],
    titles: ["the Dark", "the Cruel", "the Vile", "the Wicked", "the Evil", "the Mad", "the Insane", "the Crazy", "the Psycho", "the Killer", "the Murderer", "the Butcher", "the Slayer", "the Destroyer", "the Conqueror", "the Tyrant", "the Despot", "the Dictator", "the Oppressor", "the Master", "the Lord", "the King", "the Emperor", "the God", "the Demon", "the Devil", "the Beast", "the Monster", "the Fiend", "the Ghoul", "the Ghost", "the Spirit", "the Soul", "the Heart", "the Mind", "the Body", "the Blood", "the Bone", "the Flesh", "the Skin"]
  },
  tavern: {
    adjectives: ["Broken", "Black", "Red", "White", "Golden", "Silver", "Rusty", "Sleepy", "Dancing", "Prancing", "Laughing", "Crying", "Singing", "Drunken", "Salty", "Lonely", "Happy", "Jolly", "Merry", "Sad", "Angry", "Grumpy", "Hungry", "Thirsty", "Fat", "Skinny", "Tall", "Short", "Big", "Small", "Old", "New", "Young", "Ancient", "Magic", "Mystic", "Secret", "Hidden", "Lost", "Found"],
    nouns: ["Dragon", "Horse", "Pony", "Unicorn", "Griffin", "Lion", "Tiger", "Bear", "Wolf", "Fox", "Cat", "Dog", "Rat", "Mouse", "Badger", "Otter", "Beaver", "Eagle", "Hawk", "Falcon", "Owl", "Raven", "Crow", "Swan", "Goose", "Duck", "Chicken", "Rooster", "Hen", "Pig", "Cow", "Bull", "Sheep", "Goat", "Ram", "Deer", "Elk", "Moose", "Fish", "Shark"]
  }
};

export const FantasyNamePage: React.FC<FantasyProps> = ({ dict }) => {
  const t = dict.tools.fantasy_name;
  
  const [category, setCategory] = useState<'human' | 'elf' | 'dwarf' | 'orc' | 'place' | 'classic' | 'scifi' | 'villain' | 'tavern'>('human');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [quantity, setQuantity] = useState(5);
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const rand = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

  const generate = () => {
    const results: string[] = [];
    
    for (let i = 0; i < quantity; i++) {
      let name = "";
      
      switch (category) {
        case 'classic':
          name = `The ${rand(DATA.classic.adjectives)} ${rand(DATA.classic.nouns)}`;
          break;
        case 'human':
          const firstName = gender === 'male' ? rand(DATA.human.male) : rand(DATA.human.female);
          const lastName = rand(DATA.human.surnames);
          name = `${firstName} ${lastName}`;
          if (Math.random() > 0.8) name += ` ${rand(DATA.human.titles)}`;
          break;
        case 'elf':
          const prefix = gender === 'male' ? rand(DATA.elf.male_prefix) : rand(DATA.elf.female_prefix);
          name = `${prefix}${rand(DATA.elf.suffix)}`;
          if (Math.random() > 0.8) name += ` ${rand(DATA.elf.titles)}`;
          break;
        case 'dwarf':
          const dPrefix = gender === 'male' ? rand(DATA.dwarf.male_prefix) : rand(DATA.dwarf.female_prefix);
          name = `${dPrefix}${rand(DATA.dwarf.suffix)}`;
          if (Math.random() > 0.6) name += ` of Clan ${rand(DATA.dwarf.clan)}`;
          break;
        case 'orc':
          const oPrefix = gender === 'male' ? rand(DATA.orc.male_prefix) : rand(DATA.orc.female_prefix);
          name = `${oPrefix}${rand(DATA.orc.suffix)}`;
          if (Math.random() > 0.7) name += ` ${rand(DATA.orc.titles)}`;
          break;
        case 'place':
          name = `${rand(DATA.place.prefix)}${rand(DATA.place.suffix)}`;
          break;
        case 'scifi':
          const sName = gender === 'male' ? rand(DATA.scifi.male) : rand(DATA.scifi.female);
          name = `${sName} ${rand(DATA.scifi.surnames)}`;
          break;
        case 'villain':
          name = `${rand(DATA.villain.names)} ${rand(DATA.villain.titles)}`;
          break;
        case 'tavern':
          name = `The ${rand(DATA.tavern.adjectives)} ${rand(DATA.tavern.nouns)}`;
          break;
        default:
          name = "Unknown";
      }
      results.push(name);
    }
    setGeneratedNames(results);
    setCopied(false);
  };

  const copyAll = async () => {
    if (generatedNames.length === 0) return;
    try {
      await navigator.clipboard.writeText(generatedNames.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Wand2 className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-3 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_race}</label>
                  <select 
                    value={category} 
                    onChange={e => setCategory(e.target.value as any)} 
                    className="w-full p-2.5 border rounded-md bg-white"
                  >
                     <option value="human">{t.opt_human}</option>
                     <option value="elf">{t.opt_elf}</option>
                     <option value="dwarf">{t.opt_dwarf}</option>
                     <option value="orc">{t.opt_orc}</option>
                     <option value="place">{t.opt_place}</option>
                     <option value="classic">{t.opt_classic}</option>
                     <option value="scifi">{t.opt_scifi}</option>
                     <option value="villain">{t.opt_villain}</option>
                     <option value="tavern">{t.opt_tavern}</option>
                  </select>
               </div>

               {/* Gender only relevant for some categories */}
               {(['human', 'elf', 'dwarf', 'orc', 'scifi'].includes(category)) && (
                 <div className="space-y-2">
                    <label className="text-sm font-medium">{t.label_gender}</label>
                    <div className="flex bg-slate-100 p-1 rounded-md border border-slate-200">
                       <button onClick={() => setGender('male')} className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${gender === 'male' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}>{t.opt_male}</button>
                       <button onClick={() => setGender('female')} className={`flex-1 py-1.5 text-sm font-medium rounded transition-all ${gender === 'female' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}>{t.opt_female}</button>
                    </div>
                 </div>
               )}

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_qty}</label>
                  <input type="number" value={quantity} min="1" max="20" onChange={e => setQuantity(Number(e.target.value))} className="w-full p-2.5 border rounded-md" />
               </div>
            </div>

            <Button onClick={generate} size="lg" className="w-full gap-2">
               <RefreshCw className="h-4 w-4" /> {t.btn_generate}
            </Button>

            {generatedNames.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-lg relative">
                 <div className="absolute right-4 top-4">
                    <Button onClick={copyAll} size="sm" variant="ghost" className="h-8 gap-1">
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {t.btn_copy_all}
                    </Button>
                 </div>
                 <div className="space-y-2">
                    {generatedNames.map((name, i) => (
                       <div key={i} className="text-lg font-medium text-slate-800 border-b border-slate-200 last:border-0 pb-2 last:pb-0">
                          {name}
                       </div>
                    ))}
                 </div>
              </div>
            )}

          </CardContent>
        </Card>
        <article className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{t.seo_title}</h2>
          <div className="text-slate-600 space-y-4 leading-7">{t.seo_content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </article>
      </div>
    </div>
  );
};
