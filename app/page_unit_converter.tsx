import React, { useState, useEffect } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Ruler } from 'lucide-react';

interface UnitConverterProps {
  dict: Dictionary;
}

type UnitCategory = 'length' | 'weight' | 'temp' | 'speed' | 'time' | 'volume' | 'area' | 'digital';

export const UnitConverterPage: React.FC<UnitConverterProps> = ({ dict }) => {
  const t = dict.tools.unit_converter;
  const [category, setCategory] = useState<UnitCategory>('length');
  const [valFrom, setValFrom] = useState<string>("");
  const [unitFrom, setUnitFrom] = useState<string>("m");
  const [unitTo, setUnitTo] = useState<string>("ft");
  const [result, setResult] = useState<string>("");

  const units: Record<UnitCategory, { id: string; label: string; factor?: number }[]> = {
    length: [
      { id: 'm', label: 'Meters', factor: 1 },
      { id: 'km', label: 'Kilometers', factor: 1000 },
      { id: 'cm', label: 'Centimeters', factor: 0.01 },
      { id: 'mm', label: 'Millimeters', factor: 0.001 },
      { id: 'ft', label: 'Feet', factor: 0.3048 },
      { id: 'in', label: 'Inches', factor: 0.0254 },
      { id: 'yd', label: 'Yards', factor: 0.9144 },
      { id: 'mi', label: 'Miles', factor: 1609.344 },
    ],
    weight: [
      { id: 'kg', label: 'Kilograms', factor: 1 },
      { id: 'g', label: 'Grams', factor: 0.001 },
      { id: 'mg', label: 'Milligrams', factor: 0.000001 },
      { id: 'lb', label: 'Pounds', factor: 0.453592 },
      { id: 'oz', label: 'Ounces', factor: 0.0283495 },
    ],
    temp: [
      { id: 'c', label: 'Celsius' },
      { id: 'f', label: 'Fahrenheit' },
      { id: 'k', label: 'Kelvin' },
    ],
    speed: [
      { id: 'ms', label: 'm/s', factor: 1 },
      { id: 'kmh', label: 'km/h', factor: 0.277778 },
      { id: 'mph', label: 'mph', factor: 0.44704 },
      { id: 'knot', label: 'Knots', factor: 0.514444 },
    ],
    time: [
      { id: 's', label: 'Seconds', factor: 1 },
      { id: 'min', label: 'Minutes', factor: 60 },
      { id: 'h', label: 'Hours', factor: 3600 },
      { id: 'd', label: 'Days', factor: 86400 },
      { id: 'wk', label: 'Weeks', factor: 604800 },
      { id: 'mo', label: 'Months (30d)', factor: 2592000 },
      { id: 'y', label: 'Years (365d)', factor: 31536000 },
    ],
    volume: [
      { id: 'l', label: 'Liters', factor: 1 },
      { id: 'ml', label: 'Milliliters', factor: 0.001 },
      { id: 'gal', label: 'Gallons (US)', factor: 3.78541 },
      { id: 'qt', label: 'Quarts (US)', factor: 0.946353 },
      { id: 'pt', label: 'Pints (US)', factor: 0.473176 },
      { id: 'cup', label: 'Cups (US)', factor: 0.236588 },
      { id: 'floz', label: 'Fluid Oz (US)', factor: 0.0295735 },
    ],
    area: [
      { id: 'm2', label: 'Sq Meters', factor: 1 },
      { id: 'km2', label: 'Sq Kilometers', factor: 1000000 },
      { id: 'ft2', label: 'Sq Feet', factor: 0.092903 },
      { id: 'mi2', label: 'Sq Miles', factor: 2589988 },
      { id: 'ac', label: 'Acres', factor: 4046.86 },
      { id: 'ha', label: 'Hectares', factor: 10000 },
    ],
    digital: [
      { id: 'b', label: 'Bytes', factor: 1 },
      { id: 'bit', label: 'Bits', factor: 0.125 },
      { id: 'kb', label: 'Kilobytes (KB)', factor: 1024 },
      { id: 'mb', label: 'Megabytes (MB)', factor: 1048576 },
      { id: 'gb', label: 'Gigabytes (GB)', factor: 1073741824 },
      { id: 'tb', label: 'Terabytes (TB)', factor: 1099511627776 },
    ]
  };

  useEffect(() => {
    // Reset selections when category changes
    const list = units[category];
    if (!list.find(u => u.id === unitFrom)) setUnitFrom(list[0].id);
    if (!list.find(u => u.id === unitTo)) setUnitTo(list[1]?.id || list[0].id);
    setValFrom("");
    setResult("");
  }, [category]);

  useEffect(() => {
    const val = parseFloat(valFrom);
    if (isNaN(val)) {
      setResult("");
      return;
    }

    if (category === 'temp') {
      let res = val;
      // Convert to C first
      if (unitFrom === 'f') res = (val - 32) * 5/9;
      if (unitFrom === 'k') res = val - 273.15;
      
      // Convert from C to target
      if (unitTo === 'f') res = (res * 9/5) + 32;
      if (unitTo === 'k') res = res + 273.15;
      
      setResult(res.toFixed(2));
    } else {
      // Linear conversion using base unit
      const uFrom = units[category].find(u => u.id === unitFrom);
      const uTo = units[category].find(u => u.id === unitTo);
      
      if (uFrom && uTo && uFrom.factor && uTo.factor) {
        const base = val * uFrom.factor;
        const res = base / uTo.factor;
        
        // Dynamic formatting based on magnitude
        let formatted = res.toString();
        if (res > 0.01 && res < 10000) {
           formatted = res.toFixed(4).replace(/\.?0+$/, '');
        } else {
           formatted = res.toExponential(4).replace(/\.?0+e/, 'e');
        }
        
        // Simple decimal handling for common cases
        if (formatted.indexOf('e') === -1) {
             formatted = res.toLocaleString('en-US', { maximumFractionDigits: 6 });
        }

        setResult(formatted);
      }
    }
  }, [valFrom, unitFrom, unitTo, category]);

  const categories = [
     { id: 'length', label: t.cat_length },
     { id: 'weight', label: t.cat_weight },
     { id: 'volume', label: t.cat_volume },
     { id: 'area', label: t.cat_area },
     { id: 'temp', label: t.cat_temp },
     { id: 'time', label: t.cat_time },
     { id: 'speed', label: t.cat_speed },
     { id: 'digital', label: t.cat_digital },
  ];

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <Ruler className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Conversor de Unidades Universal</h3>
              <p className="text-slate-600 leading-7 mb-3">
                Nossa ferramenta de Conversão de Unidades permite converter entre diferentes unidades de medida em oito categorias: 
                Comprimento, Peso, Volume, Área, Temperatura, Tempo, Velocidade e Armazenamento Digital. Esta ferramenta é essencial 
                para qualquer situação onde você precise converter entre sistemas de medida diferentes, como métrico e imperial.
              </p>
              <p className="text-slate-600 leading-7 mb-3">
                A conversão acontece em tempo real enquanto você digita. Simplesmente selecione a categoria desejada, escolha a 
                unidade de origem e a unidade de destino, e insira o valor. A ferramenta calculará automaticamente o valor convertido. 
                Para temperatura, a conversão leva em conta as fórmulas específicas entre Celsius, Fahrenheit e Kelvin.
              </p>
              <p className="text-slate-600 leading-7">
                Esta ferramenta é útil para estudantes, profissionais de engenharia, cozinheiros, viajantes e qualquer pessoa que 
                precise trabalhar com diferentes sistemas de medida. Ela elimina a necessidade de cálculos manuais e garante precisão 
                em todas as conversões.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 bg-slate-50 p-4 rounded-lg">
               {categories.map(cat => (
                 <button 
                   key={cat.id}
                   onClick={() => setCategory(cat.id as any)}
                   className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${category === cat.id ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:bg-slate-100'}`}
                 >
                   {cat.label}
                 </button>
               ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_from}</label>
                  <div className="flex gap-2">
                    <input 
                      type="number" 
                      value={valFrom}
                      onChange={(e) => setValFrom(e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white text-lg"
                      placeholder="0"
                    />
                    <select 
                      value={unitFrom}
                      onChange={(e) => setUnitFrom(e.target.value)}
                      className="p-3 border rounded-md bg-slate-50 min-w-[120px] max-w-[150px]"
                    >
                      {units[category].map(u => (
                        <option key={u.id} value={u.id}>{u.label}</option>
                      ))}
                    </select>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_to}</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      readOnly
                      value={result}
                      className="w-full p-3 border rounded-md bg-slate-50 text-lg font-bold text-slate-900"
                      placeholder="0"
                    />
                    <select 
                      value={unitTo}
                      onChange={(e) => setUnitTo(e.target.value)}
                      className="p-3 border rounded-md bg-slate-50 min-w-[120px] max-w-[150px]"
                    >
                      {units[category].map(u => (
                        <option key={u.id} value={u.id}>{u.label}</option>
                      ))}
                    </select>
                  </div>
               </div>
            </div>

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