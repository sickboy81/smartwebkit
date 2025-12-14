import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { ArrowRight, Lock, FileJson, Type, Percent, Calendar, Binary, Fingerprint, AlignLeft, Calculator, QrCode, FileCode, Palette, Search, Image as ImageIcon, Scaling, ListX, ArrowLeftRight, Clock, FileText, Link2, Terminal, Timer, Ruler, ShieldAlert, GitCompare, Monitor, Tag, Banknote, Dices, MessageCircle, Megaphone, CalendarClock, Baby, Instagram, Activity, Droplets, Database, Keyboard, Globe, FileSpreadsheet, Network, Footprints, ChefHat, Shuffle, ListOrdered, FilePlus, CalendarDays, Code2, TimerReset, Radio, Layers, Mic, ShieldCheck, Landmark, GraduationCap, Youtube, MonitorSmartphone, TrendingUp, CircleDollarSign, BookOpen, UserCheck, MonitorX, LayoutList, Trophy, Clapperboard, FileOutput, Hash, Coins, Wand2, HardDrive, FileType, Key, CreditCard, Music2, Brush, Globe2, Regex, StickyNote, BarChart, Sliders, PieChart, RotateCcw, PawPrint, Briefcase } from 'lucide-react';

interface ToolCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

const IconMap: Record<string, React.ReactNode> = {
  'lock': <Lock className="h-8 w-8 text-slate-900 mb-2" />,
  'json': <FileJson className="h-8 w-8 text-slate-900 mb-2" />,
  'text': <Type className="h-8 w-8 text-slate-900 mb-2" />,
  'math': <Percent className="h-8 w-8 text-slate-900 mb-2" />,
  'date': <Calendar className="h-8 w-8 text-slate-900 mb-2" />,
  'binary': <Binary className="h-8 w-8 text-slate-900 mb-2" />, // Used for Base64
  'uuid': <Fingerprint className="h-8 w-8 text-slate-900 mb-2" />,
  'lorem': <AlignLeft className="h-8 w-8 text-slate-900 mb-2" />,
  'calc': <Calculator className="h-8 w-8 text-slate-900 mb-2" />,
  'qr': <QrCode className="h-8 w-8 text-slate-900 mb-2" />,
  'minify': <FileCode className="h-8 w-8 text-slate-900 mb-2" />,
  'palette': <Palette className="h-8 w-8 text-slate-900 mb-2" />,
  'seo': <Search className="h-8 w-8 text-slate-900 mb-2" />,
  'image': <ImageIcon className="h-8 w-8 text-slate-900 mb-2" />,
  'scale': <Scaling className="h-8 w-8 text-slate-900 mb-2" />,
  'list': <ListX className="h-8 w-8 text-slate-900 mb-2" />,
  'reverse': <ArrowLeftRight className="h-8 w-8 text-slate-900 mb-2" />,
  'clock': <Clock className="h-8 w-8 text-slate-900 mb-2" />,
  'markdown': <FileText className="h-8 w-8 text-slate-900 mb-2" />,
  'link': <Link2 className="h-8 w-8 text-slate-900 mb-2" />,
  'terminal': <Terminal className="h-8 w-8 text-slate-900 mb-2" />,
  'timer': <Timer className="h-8 w-8 text-slate-900 mb-2" />,
  'ruler': <Ruler className="h-8 w-8 text-slate-900 mb-2" />,
  'shield': <ShieldAlert className="h-8 w-8 text-slate-900 mb-2" />,
  'diff': <GitCompare className="h-8 w-8 text-slate-900 mb-2" />,
  'monitor': <Monitor className="h-8 w-8 text-slate-900 mb-2" />,
  'tag': <Tag className="h-8 w-8 text-slate-900 mb-2" />,
  'money': <Banknote className="h-8 w-8 text-slate-900 mb-2" />,
  'dice': <Dices className="h-8 w-8 text-slate-900 mb-2" />,
  'whatsapp': <MessageCircle className="h-8 w-8 text-slate-900 mb-2" />,
  'megaphone': <Megaphone className="h-8 w-8 text-slate-900 mb-2" />,
  'cron': <CalendarClock className="h-8 w-8 text-slate-900 mb-2" />,
  'baby': <Baby className="h-8 w-8 text-slate-900 mb-2" />,
  'instagram': <Instagram className="h-8 w-8 text-slate-900 mb-2" />,
  'activity': <Activity className="h-8 w-8 text-slate-900 mb-2" />,
  'water': <Droplets className="h-8 w-8 text-slate-900 mb-2" />,
  'db': <Database className="h-8 w-8 text-slate-900 mb-2" />,
  'keyboard': <Keyboard className="h-8 w-8 text-slate-900 mb-2" />,
  'globe': <Globe className="h-8 w-8 text-slate-900 mb-2" />,
  'csv': <FileSpreadsheet className="h-8 w-8 text-slate-900 mb-2" />,
  'network': <Network className="h-8 w-8 text-slate-900 mb-2" />,
  'shoe': <Footprints className="h-8 w-8 text-slate-900 mb-2" />,
  'chef': <ChefHat className="h-8 w-8 text-slate-900 mb-2" />,
  'shuffle': <Shuffle className="h-8 w-8 text-slate-900 mb-2" />,
  'sort': <ListOrdered className="h-8 w-8 text-slate-900 mb-2" />,
  'prefix': <FilePlus className="h-8 w-8 text-slate-900 mb-2" />,
  'week': <CalendarDays className="h-8 w-8 text-slate-900 mb-2" />,
  'code': <Code2 className="h-8 w-8 text-slate-900 mb-2" />,
  'reaction': <TimerReset className="h-8 w-8 text-slate-900 mb-2" />,
  'morse': <Radio className="h-8 w-8 text-slate-900 mb-2" />,
  'bmi': <Activity className="h-8 w-8 text-slate-900 mb-2" />,
  'loan': <Landmark className="h-8 w-8 text-slate-900 mb-2" />,
  'ratio': <Scaling className="h-8 w-8 text-slate-900 mb-2" />,
  'shadow': <Layers className="h-8 w-8 text-slate-900 mb-2" />,
  'mic': <Mic className="h-8 w-8 text-slate-900 mb-2" />,
  'check': <ShieldCheck className="h-8 w-8 text-slate-900 mb-2" />,
  'grad': <GraduationCap className="h-8 w-8 text-slate-900 mb-2" />,
  'yt': <Youtube className="h-8 w-8 text-slate-900 mb-2" />,
  'ppi': <MonitorSmartphone className="h-8 w-8 text-slate-900 mb-2" />,
  'grow': <TrendingUp className="h-8 w-8 text-slate-900 mb-2" />,
  'coin': <CircleDollarSign className="h-8 w-8 text-slate-900 mb-2" />,
  'chmod': <Terminal className="h-8 w-8 text-slate-900 mb-2" />,
  'cpf': <UserCheck className="h-8 w-8 text-slate-900 mb-2" />,
  'book': <BookOpen className="h-8 w-8 text-slate-900 mb-2" />,
  'abnt': <LayoutList className="h-8 w-8 text-slate-900 mb-2" />,
  'roi': <TrendingUp className="h-8 w-8 text-slate-900 mb-2" />,
  'score': <Trophy className="h-8 w-8 text-slate-900 mb-2" />,
  'pixel': <MonitorX className="h-8 w-8 text-slate-900 mb-2" />,
  'bitrate': <Clapperboard className="h-8 w-8 text-slate-900 mb-2" />,
  'summary': <FileOutput className="h-8 w-8 text-slate-900 mb-2" />,
  'tags': <Hash className="h-8 w-8 text-slate-900 mb-2" />,
  'tip': <Coins className="h-8 w-8 text-slate-900 mb-2" />,
  'fantasy': <Wand2 className="h-8 w-8 text-slate-900 mb-2" />,
  'raid': <HardDrive className="h-8 w-8 text-slate-900 mb-2" />,
  'yaml': <FileType className="h-8 w-8 text-slate-900 mb-2" />,
  'jwt': <Key className="h-8 w-8 text-slate-900 mb-2" />,
  'luhn': <CreditCard className="h-8 w-8 text-slate-900 mb-2" />,
  'music': <Music2 className="h-8 w-8 text-slate-900 mb-2" />,
  'brush': <Brush className="h-8 w-8 text-slate-900 mb-2" />,
  'world': <Globe2 className="h-8 w-8 text-slate-900 mb-2" />,
  // New Batch 9
  'regex': <Regex className="h-8 w-8 text-slate-900 mb-2" />,
  'roman': <Type className="h-8 w-8 text-slate-900 mb-2" />,
  'memo': <StickyNote className="h-8 w-8 text-slate-900 mb-2" />,
  'glass': <Layers className="h-8 w-8 text-slate-900 mb-2" />,
  'density': <BarChart className="h-8 w-8 text-slate-900 mb-2" />,
  'filters': <Sliders className="h-8 w-8 text-slate-900 mb-2" />,
  // Batch 10
  'wheel': <PieChart className="h-8 w-8 text-slate-900 mb-2" />,
  'bottle': <RotateCcw className="h-8 w-8 text-slate-900 mb-2" />,
  // Pet
  'paw': <PawPrint className="h-8 w-8 text-slate-900 mb-2" />,
  // Business
  'business': <Briefcase className="h-8 w-8 text-slate-900 mb-2" />,
};

export const ToolCard: React.FC<ToolCardProps> = ({ href, icon, title, description }) => {
  return (
    <Link to={href} className="group block h-full">
      <Card className="h-full transition-all hover:border-slate-400 hover:shadow-md">
        <CardHeader>
          <div className="mb-2">
             {IconMap[icon] || <ArrowRight className="h-8 w-8 text-slate-900 mb-2" />}
          </div>
          <CardTitle className="text-lg group-hover:text-slate-700 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
