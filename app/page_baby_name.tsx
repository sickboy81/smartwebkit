import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Baby, RefreshCw, Copy, Check, Heart, Trash2, Sparkles } from 'lucide-react';

interface BabyNameProps {
  dict: Dictionary;
}

// Compact extensive database
type NameEntry = { n: string, g: 'm' | 'f' | 'n', o: string[], s: string[] };

const NAMES_DB: NameEntry[] = [
  // Biblical / Hebrew
  { n: "Noah", g: 'm', o: ['biblical'], s: ['popular', 'classic'] },
  { n: "Elijah", g: 'm', o: ['biblical'], s: ['classic'] },
  { n: "James", g: 'm', o: ['biblical', 'english'], s: ['classic', 'popular'] },
  { n: "Sarah", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Hannah", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Levi", g: 'm', o: ['biblical'], s: ['modern'] },
  { n: "Asher", g: 'm', o: ['biblical'], s: ['modern', 'rare'] },
  { n: "Naomi", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Caleb", g: 'm', o: ['biblical'], s: ['classic'] },
  { n: "Ezra", g: 'n', o: ['biblical'], s: ['modern', 'short'] },
  { n: "Gabriel", g: 'm', o: ['biblical', 'latin'], s: ['classic'] },
  { n: "Abigail", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Elizabeth", g: 'f', o: ['biblical', 'english'], s: ['classic'] },
  { n: "Samuel", g: 'm', o: ['biblical'], s: ['classic'] },
  { n: "Ethan", g: 'm', o: ['biblical'], s: ['popular'] },
  { n: "Leah", g: 'f', o: ['biblical'], s: ['short', 'classic'] },
  { n: "Zoe", g: 'f', o: ['greek'], s: ['short', 'popular'] },
  { n: "Chloe", g: 'f', o: ['greek'], s: ['modern'] },
  { n: "Penelope", g: 'f', o: ['greek'], s: ['classic', 'long'] },
  { n: "Alexander", g: 'm', o: ['greek'], s: ['classic', 'long'] },
  { n: "Theo", g: 'm', o: ['greek'], s: ['short', 'modern'] },
  { n: "Sophia", g: 'f', o: ['greek'], s: ['popular', 'classic'] },
  { n: "Lucas", g: 'm', o: ['latin', 'greek'], s: ['popular'] },
  { n: "Leo", g: 'm', o: ['latin'], s: ['short', 'modern'] },
  { n: "Julian", g: 'm', o: ['latin'], s: ['classic'] },
  { n: "Oliver", g: 'm', o: ['latin', 'english'], s: ['popular'] },
  { n: "Luna", g: 'f', o: ['latin', 'nature'], s: ['modern', 'popular'] },
  { n: "Aurora", g: 'f', o: ['latin', 'nature'], s: ['classic'] },
  { n: "Stella", g: 'f', o: ['latin'], s: ['classic'] },
  { n: "Nova", g: 'f', o: ['latin'], s: ['modern', 'rare'] },
  { n: "Liam", g: 'm', o: ['germanic', 'english'], s: ['popular'] },
  { n: "William", g: 'm', o: ['germanic', 'english'], s: ['classic'] },
  { n: "Emma", g: 'f', o: ['germanic'], s: ['popular'] },
  { n: "Matilda", g: 'f', o: ['germanic'], s: ['classic', 'rare'] },
  { n: "Henry", g: 'm', o: ['germanic'], s: ['classic'] },
  { n: "Alice", g: 'f', o: ['germanic', 'english'], s: ['classic'] },
  { n: "Arthur", g: 'm', o: ['english', 'celtic'], s: ['classic'] },
  { n: "Rowan", g: 'n', o: ['celtic', 'nature'], s: ['modern'] },
  { n: "Finn", g: 'm', o: ['celtic'], s: ['short', 'modern'] },
  { n: "Maeve", g: 'f', o: ['celtic'], s: ['rare', 'classic'] },
  { n: "Willow", g: 'f', o: ['english', 'nature'], s: ['modern'] },
  { n: "Hazel", g: 'f', o: ['english', 'nature'], s: ['classic'] },
  { n: "Ivy", g: 'f', o: ['english', 'nature'], s: ['short'] },
  { n: "River", g: 'n', o: ['english', 'nature'], s: ['modern'] },
  { n: "Sky", g: 'n', o: ['english', 'nature'], s: ['short'] },
  { n: "Forest", g: 'm', o: ['english', 'nature'], s: ['rare'] },
  { n: "Sage", g: 'n', o: ['latin', 'nature'], s: ['short'] },
  { n: "Jasper", g: 'm', o: ['persian', 'nature'], s: ['classic'] },
  { n: "Ruby", g: 'f', o: ['latin', 'nature'], s: ['classic', 'short'] },
  { n: "Aria", g: 'f', o: ['italian'], s: ['modern'] },
  { n: "Luca", g: 'm', o: ['italian'], s: ['modern'] },
  { n: "Enzo", g: 'm', o: ['italian'], s: ['short'] },
  { n: "Bella", g: 'f', o: ['italian'], s: ['popular'] },
  { n: "Milo", g: 'm', o: ['germanic'], s: ['short'] },
  { n: "Otis", g: 'm', o: ['germanic'], s: ['rare', 'classic'] },
  { n: "Arlo", g: 'm', o: ['english'], s: ['modern'] },
  { n: "Elio", g: 'm', o: ['greek', 'italian'], s: ['rare'] },
  { n: "Sienna", g: 'f', o: ['italian'], s: ['modern'] },
  { n: "Kai", g: 'n', o: ['hawaiian'], s: ['short', 'modern'] },
  { n: "Ayla", g: 'f', o: ['hebrew', 'turkish'], s: ['short', 'modern'] },
  { n: "Maya", g: 'f', o: ['sanskrit', 'greek'], s: ['popular'] },
  { n: "Amara", g: 'f', o: ['african', 'latin'], s: ['rare', 'beautiful'] },
  { n: "Zara", g: 'f', o: ['arabic'], s: ['short', 'modern'] },
  { n: "Atlas", g: 'm', o: ['greek'], s: ['modern', 'rare'] },
  { n: "Orion", g: 'm', o: ['greek'], s: ['rare'] },
  { n: "Freya", g: 'f', o: ['nordic'], s: ['classic', 'popular'] },
  { n: "Astrid", g: 'f', o: ['nordic'], s: ['classic', 'rare'] },
  { n: "Axel", g: 'm', o: ['nordic'], s: ['modern', 'short'] },
  { n: "Soren", g: 'm', o: ['nordic'], s: ['rare'] },
  { n: "Hugo", g: 'm', o: ['germanic', 'latin'], s: ['classic', 'short'] },
  { n: "Clara", g: 'f', o: ['latin'], s: ['classic'] },
  { n: "Felix", g: 'm', o: ['latin'], s: ['classic'] },
  { n: "Iris", g: 'f', o: ['greek', 'nature'], s: ['classic'] },
  { n: "Rose", g: 'f', o: ['latin', 'nature'], s: ['classic', 'short'] },
  { n: "Violet", g: 'f', o: ['latin', 'nature'], s: ['classic'] },
  { n: "Lily", g: 'f', o: ['english', 'nature'], s: ['popular'] },
  { n: "Daisy", g: 'f', o: ['english', 'nature'], s: ['classic'] },
  { n: "Poppy", g: 'f', o: ['latin', 'nature'], s: ['modern'] },
  { n: "Wren", g: 'f', o: ['english', 'nature'], s: ['short', 'rare'] },
  { n: "Juniper", g: 'f', o: ['latin', 'nature'], s: ['modern', 'rare'] },
  { n: "Bear", g: 'm', o: ['english', 'nature'], s: ['modern', 'rare'] },
  { n: "Wolf", g: 'm', o: ['germanic', 'nature'], s: ['rare'] },
  { n: "Fox", g: 'm', o: ['english', 'nature'], s: ['short', 'rare'] },
  { n: "Ash", g: 'n', o: ['english', 'nature'], s: ['short'] },
  { n: "Harper", g: 'f', o: ['english'], s: ['modern'] },
  { n: "Piper", g: 'f', o: ['english'], s: ['modern'] },
  { n: "Quinn", g: 'n', o: ['celtic'], s: ['short'] },
  { n: "Riley", g: 'n', o: ['celtic'], s: ['popular'] },
  { n: "Avery", g: 'n', o: ['english'], s: ['popular'] },
  { n: "Jordan", g: 'n', o: ['hebrew'], s: ['classic'] },
  { n: "Charlie", g: 'n', o: ['germanic'], s: ['popular'] },
  { n: "Alex", g: 'n', o: ['greek'], s: ['short', 'classic'] },
  { n: "Max", g: 'm', o: ['latin'], s: ['short', 'popular'] },
  { n: "Mia", g: 'f', o: ['latin'], s: ['short', 'popular'] },
  { n: "Ava", g: 'f', o: ['latin'], s: ['short', 'popular'] },
  { n: "Ian", g: 'm', o: ['celtic'], s: ['short', 'classic'] },
  { n: "Eli", g: 'm', o: ['hebrew'], s: ['short'] },
  { n: "Ada", g: 'f', o: ['germanic'], s: ['short', 'classic'] },
  { n: "Eva", g: 'f', o: ['hebrew'], s: ['short', 'classic'] },
  { n: "Ben", g: 'm', o: ['hebrew'], s: ['short', 'classic'] },
  { n: "Sam", g: 'n', o: ['hebrew'], s: ['short', 'classic'] },
  { n: "Dan", g: 'm', o: ['hebrew'], s: ['short'] },
  { n: "Tom", g: 'm', o: ['aramaic'], s: ['short'] },
  { n: "Jim", g: 'm', o: ['hebrew'], s: ['short'] },
  { n: "Bob", g: 'm', o: ['germanic'], s: ['short'] },
  { n: "Ted", g: 'm', o: ['greek'], s: ['short'] },
  { n: "Pat", g: 'n', o: ['latin'], s: ['short'] },
  { n: "Lou", g: 'n', o: ['germanic'], s: ['short'] },
  { n: "Kit", g: 'n', o: ['greek'], s: ['short'] },

  // Expanded Database
  // Biblical / Hebrew (cont.)
  { n: "David", g: 'm', o: ['biblical'], s: ['classic', 'popular'] },
  { n: "Daniel", g: 'm', o: ['biblical'], s: ['classic', 'popular'] },
  { n: "Joseph", g: 'm', o: ['biblical'], s: ['classic', 'popular'] },
  { n: "Ruth", g: 'f', o: ['biblical'], s: ['classic', 'short'] },
  { n: "Esther", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Miriam", g: 'f', o: ['biblical'], s: ['classic', 'rare'] },
  { n: "Aaron", g: 'm', o: ['biblical'], s: ['classic'] },
  { n: "Rachel", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Rebecca", g: 'f', o: ['biblical'], s: ['classic'] },
  { n: "Simon", g: 'm', o: ['biblical'], s: ['classic'] },

  // English / Classic
  { n: "Grace", g: 'f', o: ['english'], s: ['classic', 'popular'] },
  { n: "Charlotte", g: 'f', o: ['english', 'french'], s: ['classic', 'popular'] },
  { n: "George", g: 'm', o: ['english', 'greek'], s: ['classic'] },
  { n: "Edward", g: 'm', o: ['english'], s: ['classic'] },
  { n: "Louis", g: 'm', o: ['french', 'germanic'], s: ['classic', 'short'] },
  { n: "Eleanor", g: 'f', o: ['english'], s: ['classic', 'popular'] },
  { n: "Lucy", g: 'f', o: ['english', 'latin'], s: ['short', 'classic'] },

  // Nature / Bohemian
  { n: "Luna", g: 'f', o: ['latin', 'nature'], s: ['popular', 'short'] },
  { n: "Orion", g: 'm', o: ['greek', 'nature'], s: ['rare', 'modern'] },
  { n: "Basil", g: 'm', o: ['greek', 'nature'], s: ['rare', 'classic'] },
  { n: "Clover", g: 'f', o: ['english', 'nature'], s: ['rare', 'modern'] },
  { n: "Fern", g: 'f', o: ['english', 'nature'], s: ['short', 'rare'] },
  { n: "Rowan", g: 'n', o: ['celtic', 'nature'], s: ['modern', 'popular'] },
  { n: "Cedar", g: 'm', o: ['english', 'nature'], s: ['rare', 'modern'] },

  // Modern / Trendy
  { n: "Milo", g: 'm', o: ['germanic'], s: ['short', 'modern'] },
  { n: "Arlo", g: 'm', o: ['english'], s: ['short', 'modern'] },
  { n: "Finn", g: 'm', o: ['celtic'], s: ['short', 'modern'] },
  { n: "Nova", g: 'f', o: ['latin'], s: ['modern', 'short'] },
  { n: "Ayla", g: 'f', o: ['hebrew'], s: ['short', 'modern'] },
  { n: "Eliana", g: 'f', o: ['hebrew', 'latin'], s: ['modern', 'popular'] },
  { n: "Maverick", g: 'm', o: ['english'], s: ['modern', 'popular'] },

  // Rare / Unique
  { n: "Cassius", g: 'm', o: ['latin'], s: ['rare', 'classic'] },
  { n: "Aurelius", g: 'm', o: ['latin'], s: ['rare', 'classic'] },
  { n: "Seraphina", g: 'f', o: ['hebrew'], s: ['rare', 'classic'] },
  { n: "Calliope", g: 'f', o: ['greek'], s: ['rare', 'classic'] },
  { n: "Thalia", g: 'f', o: ['greek'], s: ['rare', 'short'] },
  { n: "Lysander", g: 'm', o: ['greek'], s: ['rare', 'classic'] },

  // International / diverse
  { n: "Mateo", g: 'm', o: ['spanish'], s: ['popular', 'modern'] },
  { n: "Santiago", g: 'm', o: ['spanish'], s: ['popular', 'classic'] },
  { n: "Valentina", g: 'f', o: ['latin', 'spanish'], s: ['popular', 'classic'] },
  { n: "Amir", g: 'm', o: ['arabic'], s: ['short', 'modern'] },
  { n: "Layla", g: 'f', o: ['arabic'], s: ['popular', 'modern'] },
  { n: "Kenji", g: 'm', o: ['japanese'], s: ['modern'] },
  { n: "Yuki", g: 'n', o: ['japanese'], s: ['short', 'modern'] },
  { n: "Magnus", g: 'm', o: ['nordic', 'latin'], s: ['classic', 'rare'] }
];

export const BabyNamePage: React.FC<BabyNameProps> = ({ dict }) => {
  const t = dict.tools.baby_name;

  const [origin, setOrigin] = useState("any");
  const [gender, setGender] = useState("any");
  const [style, setStyle] = useState("any");
  const [letter, setLetter] = useState("");

  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedFav, setCopiedFav] = useState(false);

  const generate = () => {
    let pool = NAMES_DB;

    // Filter by Gender
    if (gender !== 'any') {
      // 'n' (neutral) matches 'any' request implicitly if we wanted, but strict filtering:
      // If user wants 'Boy', we give 'm' and 'n'. If 'Girl', 'f' and 'n'.
      // If 'Neutral', only 'n'.
      if (gender === 'm') pool = pool.filter(x => x.g === 'm' || x.g === 'n');
      else if (gender === 'f') pool = pool.filter(x => x.g === 'f' || x.g === 'n');
      else if (gender === 'n') pool = pool.filter(x => x.g === 'n');
    }

    // Filter by Origin
    if (origin !== 'any') {
      pool = pool.filter(x => x.o.includes(origin));
    }

    // Filter by Style
    if (style !== 'any') {
      pool = pool.filter(x => x.s.includes(style));
    }

    // Filter by Letter
    if (letter) {
      pool = pool.filter(x => x.n.toLowerCase().startsWith(letter.toLowerCase()));
    }

    // Shuffle and Pick
    if (pool.length === 0) {
      setGeneratedNames(["No matches found..."]);
      return;
    }

    // Fisher-Yates Shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Take top 9 unique names
    const selected = shuffled.slice(0, 9).map(x => x.n);
    setGeneratedNames(selected);
  };

  const surpriseMe = () => {
    setOrigin("any");
    setGender("any");
    setStyle("any");
    setLetter("");
    // Trigger generate with clean state logic requires state update first or direct call
    // Direct random pick from full DB
    const shuffled = [...NAMES_DB];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setGeneratedNames(shuffled.slice(0, 9).map(x => x.n));
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
        <Card className="shadow-xl border-slate-200 overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3 text-indigo-900">
              <Baby className="w-8 h-8 text-rose-400" />
              {t.title}
            </CardTitle>
            <CardDescription className="text-slate-600 text-lg">{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8">

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">{t.label_gender}</label>
                <select aria-label={t.label_gender} value={gender} onChange={e => setGender(e.target.value)} className="w-full p-2.5 border-slate-200 rounded-lg text-sm bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option value="any">{t.gender_neutral}</option>
                  <option value="m">{t.gender_boy}</option>
                  <option value="f">{t.gender_girl}</option>
                  <option value="n">Neutral Only</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">{t.label_origin}</label>
                <select aria-label={t.label_origin} value={origin} onChange={e => setOrigin(e.target.value)} className="w-full p-2.5 border-slate-200 rounded-lg text-sm bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option value="any">{t.origin_any}</option>
                  <option value="biblical">{t.origin_biblical}</option>
                  <option value="english">{t.origin_english}</option>
                  <option value="latin">{t.origin_latin}</option>
                  <option value="germanic">{t.origin_germanic}</option>
                  <option value="greek">{t.origin_greek}</option>
                  <option value="nature">{t.origin_nature}</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">{t.label_style}</label>
                <select aria-label={t.label_style} value={style} onChange={e => setStyle(e.target.value)} className="w-full p-2.5 border-slate-200 rounded-lg text-sm bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option value="any">{t.style_any}</option>
                  <option value="modern">{t.style_modern}</option>
                  <option value="classic">{t.style_classic}</option>
                  <option value="rare">{t.style_rare}</option>
                  <option value="short">{t.style_short}</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">{t.label_letter}</label>
                <select aria-label={t.label_letter} value={letter} onChange={e => setLetter(e.target.value)} className="w-full p-2.5 border-slate-200 rounded-lg text-sm bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option value="">Any</option>
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={generate} size="lg" className="flex-1 gap-2 text-lg h-14 bg-indigo-600 hover:bg-indigo-700 shadow-md">
                <RefreshCw className="w-5 h-5" /> {t.btn_generate}
              </Button>
              <Button onClick={surpriseMe} size="lg" variant="outline" className="flex-1 gap-2 text-lg h-14 border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                <Sparkles className="w-5 h-5" /> {t.btn_surprise}
              </Button>
            </div>

            {/* Results Area */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.sec_results}</h3>
              {generatedNames.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {generatedNames.map((name, i) => (
                    <button
                      key={i}
                      onClick={() => toggleFavorite(name)}
                      className={`p-6 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-3 group relative shadow-sm hover:shadow-md ${favorites.includes(name)
                        ? 'bg-rose-50 border-rose-200 text-rose-700 ring-2 ring-rose-100'
                        : 'bg-white border-slate-100 hover:border-indigo-200 text-slate-700'
                        }`}
                    >
                      <span className="font-bold text-xl">{name}</span>
                      <Heart className={`w-5 h-5 transition-transform duration-300 ${favorites.includes(name) ? 'fill-rose-500 text-rose-500 scale-110' : 'text-slate-300 group-hover:text-rose-400 group-hover:scale-110'}`} />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 bg-white/50 rounded-xl border-2 border-dashed border-slate-200">
                  <Baby className="w-12 h-12 mx-auto text-slate-200 mb-2" />
                  {t.msg_select || "Click generate to find names"}
                </div>
              )}
            </div>

            {/* Favorites Area */}
            {favorites.length > 0 && (
              <div className="border-t border-indigo-100 pt-6 space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-500">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-indigo-400 text-indigo-400" /> {t.sec_favorites} ({favorites.length})
                  </h3>
                  <div className="flex gap-2">
                    <Button onClick={copyFavorites} size="sm" variant="outline" className="h-8 gap-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                      {copiedFav ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {t.btn_favorites}
                    </Button>
                    <Button onClick={() => setFavorites([])} aria-label="Clear all favorites" size="sm" variant="ghost" className="h-8 text-slate-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {favorites.map((name, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white text-indigo-700 rounded-full border border-indigo-100 text-sm font-semibold shadow-sm flex items-center gap-2">
                      {name}
                      <button onClick={() => toggleFavorite(name)} aria-label={`Remove ${name} from favorites`} className="hover:text-red-500 transition-colors"><Trash2 className="w-3 h-3" /></button>
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