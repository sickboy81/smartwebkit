import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChefHat } from 'lucide-react';

interface CulinaryProps {
  dict: Dictionary;
}

// Density relative to water (1g/ml)
// Approximations
const INGREDIENTS: Record<string, number> = {
  water: 1,
  flour: 0.5, // ~120g per cup (240ml)
  sugar: 0.85, // ~200g per cup
  butter: 0.95, // ~227g per cup
  rice: 0.8, // ~190g per cup
};

const UNITS: Record<string, number> = {
  cup: 240, // ml
  tbsp: 15,
  tsp: 5,
  oz: 29.57,
  ml: 1,
  l: 1000
};

export const CulinaryPage: React.FC<CulinaryProps> = ({ dict }) => {
  const t = dict.tools.culinary_converter;
  const [ingredient, setIngredient] = useState("flour");
  const [amount, setAmount] = useState(1);
  const [unit, setUnit] = useState("cup");
  const [result, setResult] = useState<string>("");

  const convert = () => {
    // Basic logic: Convert input to ML (Volume), then to Grams (Weight) if density known
    // Or just volume to volume. 
    // Let's assume user wants to know Grams and ML equivalence.
    
    const volumeInMl = amount * UNITS[unit];
    const density = INGREDIENTS[ingredient];
    const weightInGrams = volumeInMl * density;

    setResult(`${Math.round(weightInGrams)}g / ${Math.round(volumeInMl)}ml`);
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <ChefHat className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-3 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_ingredient}</label>
                  <select 
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    className="w-full p-2.5 border rounded-md bg-white focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="flour">{t.opt_flour}</option>
                    <option value="sugar">{t.opt_sugar}</option>
                    <option value="butter">{t.opt_butter}</option>
                    <option value="water">{t.opt_water}</option>
                    <option value="rice">{t.opt_rice}</option>
                  </select>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_amount}</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full p-2.5 border rounded-md bg-white focus:ring-2 focus:ring-slate-900"
                  />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_unit}</label>
                  <select 
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full p-2.5 border rounded-md bg-white focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="cup">Cups</option>
                    <option value="tbsp">Tablespoons (Tbsp)</option>
                    <option value="tsp">Teaspoons (Tsp)</option>
                    <option value="oz">Fluid Ounces (fl oz)</option>
                    <option value="ml">Milliliters (ml)</option>
                  </select>
               </div>
            </div>

            <Button onClick={convert} size="lg" className="w-full">
               {t.btn_convert}
            </Button>

            {result && (
              <div className="bg-orange-50 border border-orange-100 p-8 rounded-xl text-center">
                 <h3 className="text-orange-900 uppercase text-xs font-bold tracking-widest mb-2">{t.res_result}</h3>
                 <div className="text-4xl font-bold text-orange-700">{result}</div>
              </div>
            )}

          </CardContent>
        </Card>

        <article className="prose prose-slate max-w-none">
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