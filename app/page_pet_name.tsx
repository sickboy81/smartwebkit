import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PawPrint, RefreshCw, Copy, Check, Heart, Trash2 } from 'lucide-react';

interface PetNameProps {
  dict: Dictionary;
}

// Extensive Name Database
const NAMES_DB = {
  classic: {
    male: ["Max", "Charlie", "Buddy", "Rocky", "Jack", "Toby", "Duke", "Bear", "Tucker", "Oliver", "Milo", "Leo", "Oscar", "Teddy", "Winston", "Jasper", "Gus", "Hank", "Sam", "Rusty", "Barney", "George", "Felix", "Henry", "Arthur"],
    female: ["Bella", "Lucy", "Daisy", "Luna", "Lola", "Sadie", "Molly", "Bailey", "Stella", "Maggie", "Sophie", "Chloe", "Penny", "Lily", "Coco", "Rosie", "Ruby", "Gracie", "Mia", "Nala", "Zoe", "Abby", "Ginger", "Olive", "Lady"]
  },
  food: [
    "Oreo", "Peanut", "Muffin", "Biscuit", "Cookie", "Nacho", "Taco", "Bean", "Olive", "Pepper", "Ginger", "Honey", "Mocha", "Cocoa", "Brownie", "Fudge", "Bagel", "Waffles", "Pancake", "Sushi", "Wasabi", "Miso", "Tofu", "Basil", "Sage", "Cinnamon", "Nutmeg", "Saffron", "Pickle", "Chip", "Nugget", "Cheddar", "Brie", "Gouda", "Mango", "Kiwi", "Peaches", "Berry", "Cherry"
  ],
  geek: [
    "Yoda", "Loki", "Thor", "Zelda", "Link", "Mario", "Luigi", "Kirby", "Sonic", "Tails", "Frodo", "Gandalf", "Aragorn", "Gollum", "Bilbo", "Legolas", "Gimli", "Vader", "Leia", "Luke", "Han", "Chewie", "Spock", "Kirk", "Picard", "Data", "Riker", "Worf", "Doctor", "Sherlock", "Watson", "Bond", "Neo", "Trinity", "Morpheus", "Groot", "Rocket", "Stark", "Banner", "Parker", "Logan"
  ],
  nature: [
    "River", "Sky", "Willow", "Hazel", "Ivy", "Fern", "Ash", "Aspen", "Cedar", "Oak", "Birch", "Maple", "Forest", "Storm", "Rain", "Snow", "Winter", "Summer", "Autumn", "Spring", "Sunny", "Cloud", "Thunder", "Lightning", "Mist", "Fog", "Shadow", "Midnight", "Ember", "Flint", "Stone", "Rocky", "Pebble", "Sandy", "Dusty", "Clay", "Coral", "Pearl"
  ],
  myth: [
    "Zeus", "Hera", "Apollo", "Athena", "Ares", "Artemis", "Hermes", "Hades", "Poseidon", "Odin", "Thor", "Loki", "Freya", "Baldur", "Fenrir", "Tyr", "Anubis", "Osiris", "Isis", "Horus", "Ra", "Bastet", "Set", "Thoth", "Maat", "Hercules", "Achilles", "Odysseus", "Perseus", "Jason", "Orpheus", "Merlin", "Arthur", "Guinevere", "Lancelot", "Galahad", "Mordred", "Morgana", "Avalon", "Excalibur"
  ],
  funny: [
    "Bark Twain", "Chewbarka", "Droolius Caesar", "Franz Fur-dinand", "Jimmy Chew", "Katy Purry", "Mary Puppins", "Ozzy Pawsborne", "Prince of Barkness", "Salvador Doggy", "Santa Paws", "Sarah Jessica Parker", "Sherlock Bones", "Snarls Barkley", "The Notorious D.O.G.", "Virginia Woof", "Winnie the Poodle", "Woofgang Puck", "Chairman Meow", "Cindy Clawford", "Clawdia", "David Meowie", "Darth Vader", "Dogzilla", "Catrick Swayze", "Fuzz Lightyear", "Harry Potter", "Hairy Pawter", "Indiana Bones", "Jabba the Mutt", "James Bone", "Jude Paw"
  ],
  tough: [
    "Spike", "Diesel", "Tank", "Rex", "Brutus", "Butch", "Fang", "Jaws", "Killer", "Mack", "Rambo", "Rocky", "Sarge", "Thor", "Titan", "Tyson", "Viper", "Wolf", "Xena", "Zeus", "Hulk", "Goliath", "Beast", "Blade", "Boss", "Bruiser", "Bullet", "Caesar", "Captain", "Chief", "Colonel", "Commander", "Crash", "Danger", "General", "Ghost", "Gunner", "Hunter", "Jax", "Kane", "King", "Kong", "Major"
  ],
  cute: [
    "Pip", "Squeak", "Fluffy", "Fuzzy", "Cuddles", "Snuggles", "Bubbles", "Buttercup", "Cupcake", "Daisy", "Dolly", "Dot", "Fifi", "Gigi", "Lulu", "Mimi", "Minnie", "Missy", "Misty", "Muffin", "Noodle", "Peanut", "Pebbles", "Pixie", "Poppy", "Princess", "Pumpkin", "Snowball", "Sparkle", "Sprinkles", "Sugar", "Sweetie", "Teddy", "Tinkerbell", "Tootsie", "Trixie", "Twinkle", "Wiggles", "Ziggy"
  ]
};

// Simple species specific overrides (optional, can be expanded)
const SPECIES_SPECIFIC: Record<string, string[]> = {
  bird: ["Tweety", "Polly", "Sky", "Rio", "Sunny", "Mango", "Kiwi", "Blue", "Angel", "Precious"],
  reptile: ["Spike", "Rex", "Monty", "Yoshi", "Godzilla", "Snape", "Draco", "Charmander", "Scale", "Claw"],
  small: ["Hammy", "Nibbles", "Squeaky", "Chewy", "Cookie", "Peanut", "Oreo", "Biscuit", "Pip", "Pop"]
};

export const PetNamePage: React.FC<PetNameProps> = ({ dict }) => {
  const t = dict.tools.pet_name;
  
  const [species, setSpecies] = useState("any");
  const [gender, setGender] = useState("any");
  const [theme, setTheme] = useState("classic");
  const [letter, setLetter] = useState("");
  
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedFav, setCopiedFav] = useState(false);

  const generate = () => {
    let pool: string[] = [];

    // Select Base Pool based on Theme
    if (theme === 'classic') {
      if (gender === 'male') pool = [...NAMES_DB.classic.male];
      else if (gender === 'female') pool = [...NAMES_DB.classic.female];
      else pool = [...NAMES_DB.classic.male, ...NAMES_DB.classic.female];
    } else {
      // Other themes are mostly unisex lists in this DB structure
      pool = [...(NAMES_DB[theme as keyof typeof NAMES_DB] as string[])];
    }

    // Add species specific names if relevant and pool isn't huge
    if (species !== 'any' && SPECIES_SPECIFIC[species]) {
       pool = [...pool, ...SPECIES_SPECIFIC[species]];
    }

    // Filter by Letter
    if (letter) {
      pool = pool.filter(n => n.toLowerCase().startsWith(letter.toLowerCase()));
    }

    // Shuffle and Pick
    if (pool.length === 0) {
      setGeneratedNames(["No names found! Try different filters."]);
      return;
    }

    // Fisher-Yates Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Take top 12 unique
    setGeneratedNames(Array.from(new Set(pool)).slice(0, 12));
  };

  const toggleFavorite = (name: string) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(n => n !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  const copyFavorites = async () => {
    if (favorites.length === 0) return;
    try {
      await navigator.clipboard.writeText(favorites.join(', '));
      setCopiedFav(true);
      setTimeout(() => setCopiedFav(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <PawPrint className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
               
               <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.label_species}</label>
                  <select value={species} onChange={e => setSpecies(e.target.value)} className="w-full p-2 border rounded-md text-sm bg-white">
                     <option value="any">{t.species_any}</option>
                     <option value="dog">{t.species_dog}</option>
                     <option value="cat">{t.species_cat}</option>
                     <option value="bird">{t.species_bird}</option>
                     <option value="reptile">{t.species_reptile}</option>
                     <option value="small">{t.species_small}</option>
                  </select>
               </div>

               <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.label_gender}</label>
                  <select value={gender} onChange={e => setGender(e.target.value)} className="w-full p-2 border rounded-md text-sm bg-white">
                     <option value="any">{t.gender_any}</option>
                     <option value="male">{t.gender_male}</option>
                     <option value="female">{t.gender_female}</option>
                  </select>
               </div>

               <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.label_theme}</label>
                  <select value={theme} onChange={e => setTheme(e.target.value)} className="w-full p-2 border rounded-md text-sm bg-white">
                     <option value="classic">{t.theme_classic}</option>
                     <option value="food">{t.theme_food}</option>
                     <option value="geek">{t.theme_geek}</option>
                     <option value="nature">{t.theme_nature}</option>
                     <option value="myth">{t.theme_myth}</option>
                     <option value="funny">{t.theme_funny}</option>
                     <option value="tough">{t.theme_tough}</option>
                     <option value="cute">{t.theme_cute}</option>
                  </select>
               </div>

               <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">{t.label_letter}</label>
                  <select value={letter} onChange={e => setLetter(e.target.value)} className="w-full p-2 border rounded-md text-sm bg-white">
                     <option value="">Any</option>
                     {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
               </div>

            </div>

            <Button onClick={generate} size="lg" className="w-full gap-2 text-lg h-14">
               <RefreshCw className="w-5 h-5" /> {t.btn_generate}
            </Button>

            {/* Results Area */}
            <div className="space-y-2">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.sec_results}</h3>
               {generatedNames.length > 0 ? (
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {generatedNames.map((name, i) => (
                       <button 
                         key={i} 
                         onClick={() => toggleFavorite(name)}
                         className={`p-4 rounded-lg border text-center transition-all flex items-center justify-center gap-2 group relative ${
                            favorites.includes(name) 
                              ? 'bg-red-50 border-red-200 text-red-600 shadow-sm' 
                              : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                         }`}
                       >
                          <span className="font-bold">{name}</span>
                          <Heart className={`w-4 h-4 transition-transform ${favorites.includes(name) ? 'fill-current scale-110' : 'text-slate-300 group-hover:text-slate-400'}`} />
                       </button>
                    ))}
                 </div>
               ) : (
                 <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    Click Generate to find names
                 </div>
               )}
               <p className="text-xs text-center text-slate-400 pt-2">{t.msg_select}</p>
            </div>

            {/* Favorites Area */}
            {favorites.length > 0 && (
               <div className="border-t pt-6 space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-500">
                  <div className="flex justify-between items-center">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Heart className="w-4 h-4 fill-red-500 text-red-500" /> {t.sec_favorites} ({favorites.length})
                     </h3>
                     <div className="flex gap-2">
                        <Button onClick={copyFavorites} size="sm" variant="outline" className="h-8 gap-2">
                           {copiedFav ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                           {t.btn_favorites}
                        </Button>
                        <Button onClick={() => setFavorites([])} size="sm" variant="ghost" className="h-8 text-slate-400 hover:text-red-500">
                           <Trash2 className="w-4 h-4" />
                        </Button>
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {favorites.map((name, i) => (
                        <span key={i} className="px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-100 text-sm font-medium">
                           {name}
                        </span>
                     ))}
                  </div>
               </div>
            )}

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">
            {t.seo_title}
          </h2>
          <div className="text-slate-600 space-y-4 leading-7">
            {t.seo_content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};