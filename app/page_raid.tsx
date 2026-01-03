import React, { useState } from 'react';
import { Dictionary } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { HardDrive } from 'lucide-react';

interface RaidProps {
  dict: Dictionary;
}

export const RaidPage: React.FC<RaidProps> = ({ dict }) => {
  const t = dict.tools.raid_calculator;
  const [diskSize, setDiskSize] = useState("4");
  const [diskCount, setDiskCount] = useState("4");
  const [raidType, setRaidType] = useState("5");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const size = parseFloat(diskSize);
    const count = parseInt(diskCount);
    
    let capacity = 0;
    let fault = "None";

    if (raidType === "0") {
        capacity = count * size;
        fault = "0 Disks (None)";
    } else if (raidType === "1") {
        capacity = size; // Mirroring, effectively 1 disk size usable capacity usually
        fault = "1 Disk (Mirror)";
    } else if (raidType === "5") {
        capacity = (count - 1) * size;
        fault = "1 Disk";
    } else if (raidType === "6") {
        capacity = (count - 2) * size;
        fault = "2 Disks";
    } else if (raidType === "10") {
        capacity = (count / 2) * size;
        fault = "Up to 1 per pair";
    }

    setResult({ capacity, fault });
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle as="h1" className="text-2xl flex items-center gap-2">
              <HardDrive className="w-6 h-6" />
              {t.title}
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="grid md:grid-cols-3 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_disk_size}</label>
                  <input type="number" value={diskSize} onChange={e => setDiskSize(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_disk_count}</label>
                  <input type="number" value={diskCount} onChange={e => setDiskCount(e.target.value)} className="w-full p-2 border rounded-md" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium">{t.label_raid_type}</label>
                  <select value={raidType} onChange={e => setRaidType(e.target.value)} className="w-full p-2 border rounded-md bg-white">
                     <option value="0">RAID 0</option>
                     <option value="1">RAID 1</option>
                     <option value="5">RAID 5</option>
                     <option value="6">RAID 6</option>
                     <option value="10">RAID 10</option>
                  </select>
               </div>
            </div>

            <Button onClick={calculate} size="lg" className="w-full">
               Calculate
            </Button>

            {result && (
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-slate-50 p-6 rounded-lg text-center border border-slate-100">
                    <span className="text-xs uppercase text-slate-500 font-bold mb-1 block">{t.res_capacity}</span>
                    <span className="text-3xl font-bold text-slate-900">{result.capacity} TB</span>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-lg text-center border border-slate-100">
                    <span className="text-xs uppercase text-slate-500 font-bold mb-1 block">{t.res_fault}</span>
                    <span className="text-xl font-bold text-slate-700">{result.fault}</span>
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