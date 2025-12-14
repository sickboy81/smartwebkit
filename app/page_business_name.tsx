import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Briefcase, RefreshCw, Copy, Check, Heart, Trash2, Globe } from 'lucide-react';

interface BusinessNameProps {
  dict: Dictionary;
}

// Data sources
const SUFFIXES: Record<string, string[]> = {
  tech: ["ify", "ly", "io", "lab", "sys", "net", "box", "soft", "tech", "zone", "bot", "sync", "flow", "stack", "cloud", "data", "hub", "verse", "ai", "base"],
  creative: ["studio", "works", "art", "design", "lab", "house", "agency", "collective", "space", "create", "vision", "pixel", "dream", "concept", "ink", "bold", "light"],
  services: ["solutions", "group", "consulting", "partners", "associates", "global", "strategies", "advisors", "services", "care", "works", "help", "point", "plus", "pro"],
  food: ["eats", "bistro", "kitchen", "cafe", "grill", "spot", "bar", "bakery", "house", "market", "fresh", "box", "basket", "chef", "cook", "taste", "flavor"],
  fashion: ["style", "wear", "boutique", "brand", "label", "look", "mode", "trend", "vibe", "apparel", "co", "line", "stitch", "threads", "fit"],
  finance: ["capital", "invest", "ventures", "partners", "fund", "wealth", "asset", "bank", "finance", "money", "corp", "holdings", "trust", "equity"],
  health: ["care", "health", "life", "wellness", "med", "cure", "fit", "vital", "pulse", "clinic", "doc", "plus", "aid", "path", "mind"],
  any: ["works", "co", "hq", "inc", "ltd", "club", "point", "spot", "center", "hub", "zone", "link", "now", "go", "up", "on"]
};

const PREFIXES: Record<string, string[]> = {
  tech: ["Cyber", "Net", "Data", "Tech", "Info", "Meta", "Digi", "Smart", "Auto", "Hyper", "Neo", "Virtual", "Nano", "Logic", "Code", "Bit"],
  creative: ["Art", "Color", "Dream", "Mind", "Idea", "Muse", "Bold", "Bright", "True", "Pure", "Zen", "Soul", "Neon", "Vivid", "Wild"],
  services: ["Pro", "Best", "Top", "Prime", "Elite", "First", "Star", "Gold", "Your", "My", "Our", "All", "One", "Go", "Max"],
  food: ["Yum", "Tasty", "Fresh", "Hot", "Sweet", "Green", "Urban", "Daily", "Good", "Real", "Chef", "Cook", "Eat", "Food", "Meal"],
  fashion: ["Urban", "Chic", "Moda", "Vogue", "Lux", "Glam", "Trend", "Style", "Silk", "Velvet", "Icon", "Nova", "Elite", "Coco", "Rose"],
  finance: ["Capital", "Wealth", "Rich", "Asset", "Gold", "Silver", "Prime", "First", "Safe", "Secure", "Trust", "Value", "Smart", "Coin", "Cash"],
  health: ["Medi", "Vita", "Bio", "Cure", "Heal", "Life", "Well", "Pure", "Fit", "Active", "Care", "Doc", "Nurse", "Safe", "Good"],
  any: ["The", "My", "Our", "New", "Old", "Big", "Small", "Red", "Blue", "Green", "White", "Black", "Gold", "Silver", "Iron", "Sun"]
};

export const BusinessNamePage: React.FC<BusinessNameProps> = ({ dict }) => {
  const t = dict.tools.business_name;
  
  const [keywords, setKeywords] = useState("");
  const [industry, setIndustry] = useState("any");
  const [style, setStyle] = useState("modern");
  
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedFav, setCopiedFav] = useState(false);

  const generate = () => {
    let baseWords = keywords.split(/[\s,]+/).filter(w => w.trim().length > 0);
    if (baseWords.length === 0) baseWords = ["Company", "Brand", "Start"];

    const suffixes = [...(SUFFIXES[industry] || []), ...SUFFIXES.any];
    const prefixes = [...(PREFIXES[industry] || []), ...PREFIXES.any];
    
    let results: string[] = [];

    // Generator logic
    for (let i = 0; i < 12; i++) {
        const word = baseWords[Math.floor(Math.random() * baseWords.length)];
        const cleanWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        
        let name = "";

        if (style === 'short') {
            // Suffix fusion or Prefix fusion
            if (Math.random() > 0.5) {
                const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
                name = cleanWord + suffix;
            } else {
                const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
                name = prefix + cleanWord;
            }
        } else if (style === 'classic') {
            if (Math.random() > 0.5) {
                name = `${cleanWord} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`; 
                // Classic often implies separate words like "Tech Systems" instead of "Techsys"
                // But our suffix list is mixed. Let's force capitalization for classic
                name = name.charAt(0).toUpperCase() + name.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');
                // Or standard patterns
                const classicEndings = ["Group", "Corp", "Inc", "Co", "Limited", "Systems", "Solutions"];
                name = `${cleanWord} ${classicEndings[Math.floor(Math.random() * classicEndings.length)]}`;
            } else {
                const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
                name = `${prefix} ${cleanWord}`;
            }
        } else if (style === 'compound') {
             const word2 = baseWords[Math.floor(Math.random() * baseWords.length)];
             const cleanWord2 = word2.charAt(0).toUpperCase() + word2.slice(1).toLowerCase();
             if (word !== word2) {
                 name = cleanWord + cleanWord2;
             } else {
                 // Pick a noun relevant to industry
                 const noun = prefixes[Math.floor(Math.random() * prefixes.length)]; // Reusing prefixes as secondary nouns often works
                 name = cleanWord + noun;
             }
        } else {
            // Modern (Default) - Mix of everything, preference for merged words
            if (Math.random() > 0.6) {
                const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
                name = cleanWord + suffix;
            } else {
                const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
                name = prefix + cleanWord;
            }
        }
        
        results.push(name);
    }

    // Deduplicate
    setGeneratedNames(Array.from(new Set(results)));
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
        <Card className="shadow-xl border-slate-200 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3 text-slate-900">
              <Briefcase className="w-8 h-8 text-blue-500" />
              {t.title}
            </CardTitle>
            <CardDescription className="text-slate-600 text-lg">{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8">
            
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className="text-sm font-bold text-slate-500 uppercase block mb-2">{t.label_keywords}</label>
                    <input 
                        type="text" 
                        value={keywords} 
                        onChange={e => setKeywords(e.target.value)} 
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg shadow-sm"
                        placeholder="e.g. Cloud, Sky, Fast"
                    />
                </div>

                <div>
                    <label className="text-sm font-bold text-slate-500 uppercase block mb-2">{t.label_industry}</label>
                    <select 
                        value={industry} 
                        onChange={e => setIndustry(e.target.value)} 
                        className="w-full p-3 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                        <option value="any">{t.ind_any}</option>
                        <option value="tech">{t.ind_tech}</option>
                        <option value="creative">{t.ind_creative}</option>
                        <option value="services">{t.ind_services}</option>
                        <option value="food">{t.ind_food}</option>
                        <option value="fashion">{t.ind_fashion}</option>
                        <option value="finance">{t.ind_finance}</option>
                        <option value="health">{t.ind_health}</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-bold text-slate-500 uppercase block mb-2">{t.label_style}</label>
                    <select 
                        value={style} 
                        onChange={e => setStyle(e.target.value)} 
                        className="w-full p-3 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                        <option value="modern">{t.style_modern}</option>
                        <option value="classic">{t.style_classic}</option>
                        <option value="short">{t.style_short}</option>
                        <option value="compound">{t.style_compound}</option>
                    </select>
                </div>
            </div>

            <Button onClick={generate} size="lg" className="w-full gap-2 text-lg h-14 bg-slate-900 hover:bg-slate-800 shadow-lg">
               <RefreshCw className="w-5 h-5" /> {t.btn_generate}
            </Button>

            {/* Results Grid */}
            <div className="space-y-4 pt-4">
                {generatedNames.length > 0 && (
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.sec_results}</h3>
                        <span className="text-xs text-slate-400">{t.msg_hint}</span>
                    </div>
                )}
                
                {generatedNames.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {generatedNames.map((name, i) => (
                        <div 
                            key={i} 
                            onClick={() => toggleFavorite(name)}
                            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer group relative flex flex-col gap-2 ${
                                favorites.includes(name) 
                                ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-200 shadow-md' 
                                : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-md'
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`font-bold text-lg ${favorites.includes(name) ? 'text-blue-700' : 'text-slate-800'}`}>
                                    {name}
                                </span>
                                <Heart className={`w-5 h-5 transition-transform duration-200 ${favorites.includes(name) ? 'fill-blue-500 text-blue-500 scale-110' : 'text-slate-300 group-hover:text-slate-400'}`} />
                            </div>
                            
                            {/* Domain Hint (Visual Only) */}
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                                <Globe className="w-3 h-3" />
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{name.replace(/\s/g, '').toLowerCase()}.com</span>
                                <span className="ml-auto opacity-0 group-hover:opacity-100 text-[10px] uppercase font-bold tracking-wider text-green-600 bg-green-50 px-1 rounded transition-opacity">
                                    {t.check_domain}
                                </span>
                            </div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-slate-400 bg-white/50 rounded-xl border-2 border-dashed border-slate-200">
                        Enter keywords and click generate
                    </div>
                )}
            </div>

            {/* Favorites Section */}
            {favorites.length > 0 && (
               <div className="border-t border-slate-200 pt-8 space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-500">
                  <div className="flex justify-between items-center">
                     <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2">
                        <Heart className="w-4 h-4 fill-blue-500 text-blue-500" /> {t.sec_favorites} ({favorites.length})
                     </h3>
                     <div className="flex gap-2">
                        <Button onClick={copyFavorites} size="sm" variant="outline" className="h-8 gap-2 border-slate-200 text-slate-600 hover:bg-slate-50">
                           {copiedFav ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                           {t.btn_favorites}
                        </Button>
                        <Button onClick={() => setFavorites([])} size="sm" variant="ghost" className="h-8 text-slate-400 hover:text-red-500">
                           <Trash2 className="w-4 h-4" />
                        </Button>
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                     {favorites.map((name, i) => (
                        <span key={i} className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 text-sm font-semibold shadow-sm flex items-center gap-2 group">
                           {name}
                           <button onClick={() => toggleFavorite(name)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 className="w-3 h-3" /></button>
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