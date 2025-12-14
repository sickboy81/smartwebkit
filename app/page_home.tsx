import React from 'react';
import { Dictionary, Lang, Tool } from '../types';
import { ToolCard } from '../components/ToolCard';

interface HomePageProps {
  lang: Lang;
  dict: Dictionary;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, dict }) => {
  
  const tools: Tool[] = [
    // Dev Tools
    { id: 'json', icon: 'json', nameKey: 'json_formatter', href: `/${lang}/json-formatter`, category: 'dev' },
    { id: 'regex', icon: 'regex', nameKey: 'regex_tester', href: `/${lang}/regex-tester`, category: 'dev' },
    { id: 'yaml', icon: 'yaml', nameKey: 'yaml_json', href: `/${lang}/yaml-json-converter`, category: 'dev' },
    { id: 'jwt', icon: 'jwt', nameKey: 'jwt_decoder', href: `/${lang}/jwt-decoder`, category: 'dev' },
    { id: 'cpf', icon: 'cpf', nameKey: 'cpf_generator', href: `/${lang}/cpf-generator`, category: 'dev' },
    { id: 'jsoncsv', icon: 'csv', nameKey: 'json_to_csv', href: `/${lang}/json-to-csv`, category: 'dev' },
    { id: 'rndcsv', icon: 'csv', nameKey: 'random_csv', href: `/${lang}/random-csv`, category: 'dev' },
    { id: 'webenc', icon: 'code', nameKey: 'web_encoders', href: `/${lang}/web-encoders`, category: 'dev' },
    { id: 'base64', icon: 'binary', nameKey: 'base64_converter', href: `/${lang}/base64-converter`, category: 'dev' },
    { id: 'uuid', icon: 'uuid', nameKey: 'uuid_generator', href: `/${lang}/uuid-generator`, category: 'dev' },
    { id: 'minify', icon: 'minify', nameKey: 'css_js_minifier', href: `/${lang}/css-js-minifier`, category: 'dev' },
    { id: 'qr', icon: 'qr', nameKey: 'qr_code_generator', href: `/${lang}/qr-code-generator`, category: 'dev' },
    { id: 'md', icon: 'markdown', nameKey: 'markdown_html', href: `/${lang}/markdown-to-html`, category: 'dev' },
    { id: 'bin', icon: 'terminal', nameKey: 'binary_converter', href: `/${lang}/binary-converter`, category: 'dev' },
    { id: 'chmod', icon: 'chmod', nameKey: 'chmod_calculator', href: `/${lang}/chmod-calculator`, category: 'dev' },
    { id: 'device', icon: 'monitor', nameKey: 'device_info', href: `/${lang}/device-info`, category: 'dev' },
    { id: 'cron', icon: 'cron', nameKey: 'cron_generator', href: `/${lang}/cron-job-generator`, category: 'dev' },
    { id: 'sql', icon: 'db', nameKey: 'sql_formatter', href: `/${lang}/sql-formatter`, category: 'dev' }, 
    { id: 'key', icon: 'keyboard', nameKey: 'keycode_info', href: `/${lang}/keycode-visualizer`, category: 'dev' },
    { id: 'pixel', icon: 'pixel', nameKey: 'dead_pixel', href: `/${lang}/dead-pixel-test`, category: 'dev' },
    { id: 'ppi', icon: 'ppi', nameKey: 'ppi_calculator', href: `/${lang}/ppi-calculator`, category: 'dev' },
    { id: 'bitrate', icon: 'bitrate', nameKey: 'bitrate_calculator', href: `/${lang}/bitrate-calculator`, category: 'dev' },
    { id: 'raid', icon: 'raid', nameKey: 'raid_calculator', href: `/${lang}/raid-calculator`, category: 'dev' },
    
    // Text Tools
    { id: 'word', icon: 'text', nameKey: 'word_counter', href: `/${lang}/word-counter`, category: 'text' },
    { id: 'memo', icon: 'memo', nameKey: 'memo_pad', href: `/${lang}/memo-pad`, category: 'text' },
    { id: 'abnt', icon: 'abnt', nameKey: 'abnt_generator', href: `/${lang}/abnt-generator`, category: 'text' },
    { id: 'summary', icon: 'summary', nameKey: 'text_summarizer', href: `/${lang}/text-summarizer`, category: 'text' },
    { id: 'tts', icon: 'mic', nameKey: 'text_to_speech', href: `/${lang}/text-to-speech`, category: 'text' },
    { id: 'listrnd', icon: 'shuffle', nameKey: 'list_randomizer', href: `/${lang}/list-randomizer`, category: 'text' },
    { id: 'listsort', icon: 'sort', nameKey: 'list_sorter', href: `/${lang}/list-sorter`, category: 'text' },
    { id: 'prefix', icon: 'prefix', nameKey: 'prefix_suffix', href: `/${lang}/prefix-suffix`, category: 'text' },
    { id: 'lorem', icon: 'lorem', nameKey: 'lorem_ipsum', href: `/${lang}/lorem-ipsum`, category: 'text' },
    { id: 'case', icon: 'text', nameKey: 'case_converter', href: `/${lang}/case-converter`, category: 'text' },
    { id: 'dupe', icon: 'list', nameKey: 'duplicate_remover', href: `/${lang}/duplicate-remover`, category: 'text' },
    { id: 'reverse', icon: 'reverse', nameKey: 'text_reverser', href: `/${lang}/text-reverser`, category: 'text' },
    { id: 'diff', icon: 'diff', nameKey: 'diff_checker', href: `/${lang}/diff-checker`, category: 'text' },
    { id: 'morse', icon: 'morse', nameKey: 'morse_code', href: `/${lang}/morse-code`, category: 'text' },
    { id: 'fantasy', icon: 'fantasy', nameKey: 'fantasy_name', href: `/${lang}/fantasy-name-generator`, category: 'text' },
    { id: 'pet', icon: 'paw', nameKey: 'pet_name', href: `/${lang}/pet-name-generator`, category: 'text' },
    { id: 'baby', icon: 'baby', nameKey: 'baby_name', href: `/${lang}/baby-name-generator`, category: 'text' },

    // Math Tools
    { id: 'bottle', icon: 'bottle', nameKey: 'spin_bottle', href: `/${lang}/spin-the-bottle`, category: 'math' },
    { id: 'wheel', icon: 'wheel', nameKey: 'decision_wheel', href: `/${lang}/decision-wheel`, category: 'math' },
    { id: 'math', icon: 'math', nameKey: 'percentage_calculator', href: `/${lang}/percentage-calculator`, category: 'math' },
    { id: 'roman', icon: 'roman', nameKey: 'roman_numeral', href: `/${lang}/roman-numeral-converter`, category: 'math' },
    { id: 'rule3', icon: 'calc', nameKey: 'rule_of_three', href: `/${lang}/rule-of-three`, category: 'math' },
    { id: 'loan', icon: 'loan', nameKey: 'loan_calculator', href: `/${lang}/loan-calculator`, category: 'math' },
    { id: 'roi', icon: 'roi', nameKey: 'roi_calculator', href: `/${lang}/roi-calculator`, category: 'math' },
    { id: 'compound', icon: 'grow', nameKey: 'compound_interest', href: `/${lang}/compound-interest-calculator`, category: 'math' },
    { id: 'grade', icon: 'grad', nameKey: 'grade_calculator', href: `/${lang}/grade-calculator`, category: 'math' },
    { id: 'unit', icon: 'ruler', nameKey: 'unit_converter', href: `/${lang}/unit-converter`, category: 'math' },
    { id: 'chef', icon: 'chef', nameKey: 'culinary_converter', href: `/${lang}/culinary-converter`, category: 'math' },
    { id: 'discount', icon: 'tag', nameKey: 'discount_calculator', href: `/${lang}/discount-calculator`, category: 'math' },
    { id: 'salary', icon: 'money', nameKey: 'salary_converter', href: `/${lang}/salary-converter`, category: 'math' },
    { id: 'tip', icon: 'tip', nameKey: 'tip_calculator', href: `/${lang}/tip-calculator`, category: 'math' },
    { id: 'luhn', icon: 'luhn', nameKey: 'luhn_validator', href: `/${lang}/luhn-validator`, category: 'math' },
    { id: 'rng', icon: 'dice', nameKey: 'random_number_generator', href: `/${lang}/random-number-generator`, category: 'math' },
    { id: 'coin', icon: 'coin', nameKey: 'coin_flip', href: `/${lang}/coin-flip`, category: 'math' },
    { id: 'score', icon: 'score', nameKey: 'scoreboard', href: `/${lang}/online-scoreboard`, category: 'math' },
    { id: 'picker', icon: 'shuffle', nameKey: 'name_picker', href: `/${lang}/name-picker`, category: 'math' },

    // Date Tools
    { id: 'date', icon: 'date', nameKey: 'age_calculator', href: `/${lang}/age-calculator`, category: 'date' },
    { id: 'world', icon: 'world', nameKey: 'time_converter', href: `/${lang}/time-zone-converter`, category: 'date' },
    { id: 'week', icon: 'week', nameKey: 'week_number', href: `/${lang}/week-number`, category: 'date' },
    { id: 'unix', icon: 'clock', nameKey: 'unix_timestamp', href: `/${lang}/unix-timestamp`, category: 'date' },
    { id: 'pomo', icon: 'timer', nameKey: 'pomodoro_timer', href: `/${lang}/pomodoro-timer`, category: 'date' },
    { id: 'stop', icon: 'clock', nameKey: 'stopwatch', href: `/${lang}/stopwatch`, category: 'date' },
    { id: 'book', icon: 'book', nameKey: 'reading_planner', href: `/${lang}/reading-planner`, category: 'date' },

    // Security
    { id: 'pass', icon: 'lock', nameKey: 'password_generator', href: `/${lang}/password-generator`, category: 'security' },
    { id: 'strength', icon: 'check', nameKey: 'password_strength', href: `/${lang}/password-strength`, category: 'security' },
    { id: 'hash', icon: 'shield', nameKey: 'hash_generator', href: `/${lang}/hash-generator`, category: 'security' },

    // Design
    { id: 'brush', icon: 'brush', nameKey: 'color_palette', href: `/${lang}/color-palette-generator`, category: 'design' },
    { id: 'glass', icon: 'glass', nameKey: 'glassmorphism', href: `/${lang}/glassmorphism-generator`, category: 'design' },
    { id: 'filters', icon: 'filters', nameKey: 'image_filters', href: `/${lang}/image-filters`, category: 'design' },
    { id: 'color', icon: 'palette', nameKey: 'color_converter', href: `/${lang}/color-converter`, category: 'design' },
    { id: 'shadow', icon: 'shadow', nameKey: 'box_shadow', href: `/${lang}/box-shadow-generator`, category: 'design' },
    { id: 'ratio', icon: 'ratio', nameKey: 'aspect_ratio', href: `/${lang}/aspect-ratio-calculator`, category: 'design' },
    { id: 'imgconv', icon: 'image', nameKey: 'image_converter', href: `/${lang}/image-converter`, category: 'design' },
    { id: 'imgsize', icon: 'scale', nameKey: 'image_resizer', href: `/${lang}/image-resizer`, category: 'design' },
    { id: 'favicon', icon: 'image', nameKey: 'favicon_generator', href: `/${lang}/favicon-generator`, category: 'design' },

    // SEO & Social
    { id: 'business', icon: 'business', nameKey: 'business_name', href: `/${lang}/business-name-generator`, category: 'marketing' },
    { id: 'yt', icon: 'yt', nameKey: 'youtube_thumbnail', href: `/${lang}/youtube-thumbnail-downloader`, category: 'marketing' },
    { id: 'tags', icon: 'tags', nameKey: 'youtube_tags', href: `/${lang}/youtube-tag-generator`, category: 'marketing' },
    { id: 'density', icon: 'density', nameKey: 'keyword_density', href: `/${lang}/keyword-density-checker`, category: 'seo' },
    { id: 'meta', icon: 'seo', nameKey: 'meta_tag_generator', href: `/${lang}/meta-tag-generator`, category: 'seo' },
    { id: 'slug', icon: 'link', nameKey: 'url_slug', href: `/${lang}/url-slug`, category: 'seo' },
    { id: 'wa', icon: 'whatsapp', nameKey: 'whatsapp_link', href: `/${lang}/whatsapp-link-generator`, category: 'marketing' },
    { id: 'utm', icon: 'megaphone', nameKey: 'utm_builder', href: `/${lang}/utm-builder`, category: 'marketing' },
    { id: 'insta', icon: 'instagram', nameKey: 'instagram_caption', href: `/${lang}/instagram-caption-maker`, category: 'marketing' },

    // Health
    { id: 'bmi', icon: 'bmi', nameKey: 'bmi_calculator', href: `/${lang}/bmi-calculator`, category: 'health' },
    { id: 'reaction', icon: 'reaction', nameKey: 'reaction_time', href: `/${lang}/reaction-time`, category: 'health' },
    { id: 'music', icon: 'music', nameKey: 'metronome', href: `/${lang}/online-metronome`, category: 'health' },
    { id: 'preg', icon: 'baby', nameKey: 'pregnancy_calculator', href: `/${lang}/pregnancy-calculator`, category: 'health' },
    { id: 'tdee', icon: 'activity', nameKey: 'tdee_calculator', href: `/${lang}/tdee-calculator`, category: 'health' },
    { id: 'water', icon: 'water', nameKey: 'water_intake', href: `/${lang}/water-intake-calculator`, category: 'health' },
    { id: 'shoe', icon: 'shoe', nameKey: 'shoe_size', href: `/${lang}/shoe-size-converter`, category: 'health' },

    // Network & Hardware
    { id: 'ip', icon: 'globe', nameKey: 'my_ip', href: `/${lang}/my-ip-address`, category: 'network' },
    { id: 'subnet', icon: 'network', nameKey: 'subnet_calculator', href: `/${lang}/subnet-calculator`, category: 'network' },
  ];

  const categories = [
    { id: 'dev', title: dict.common.categories.dev },
    { id: 'marketing', title: dict.common.categories.marketing },
    { id: 'text', title: dict.common.categories.text },
    { id: 'design', title: dict.common.categories.design },
    { id: 'math', title: dict.common.categories.math },
    { id: 'date', title: dict.common.categories.date },
    { id: 'security', title: dict.common.categories.security },
    { id: 'seo', title: dict.common.categories.seo },
    { id: 'health', title: dict.common.categories.health },
    { id: 'network', title: dict.common.categories.network },
  ] as const;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-slate-50 border-b border-slate-200">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-slate-900">
              {dict.home.hero_title}
            </h1>
            <p className="max-w-[42rem] leading-normal text-slate-500 sm:text-xl sm:leading-8">
              {dict.home.hero_subtitle}
            </p>
          </div>
        </section>

        {/* Tools Section by Category */}
        <div className="container max-w-5xl py-8 md:py-12 lg:py-16 mx-auto px-4 space-y-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
             <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-slate-900">
              {dict.home.tools_section_title}
            </h2>
          </div>

          {categories.map((cat) => {
            const catTools = tools.filter(t => t.category === cat.id);
            if (catTools.length === 0) return null;

            return (
              <section key={cat.id} className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-slate-900 pl-3">
                  {cat.title}
                </h3>
                <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {catTools.map((tool) => {
                    const toolConfig = dict.tools[tool.nameKey];
                    // Safety check to prevent crashing if a translation key is missing
                    if (!toolConfig) return null;
                    
                    return (
                      <ToolCard 
                        key={tool.id}
                        href={tool.href}
                        icon={tool.icon}
                        title={toolConfig.name}
                        description={toolConfig.description}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        
        {/* AdSense Placeholder */}
        <section className="container max-w-5xl py-8 mx-auto px-4">
          <div className="w-full h-32 bg-slate-100 rounded-lg border border-dashed border-slate-300 flex items-center justify-center">
            <p className="text-slate-400 text-sm font-medium">AdSense Banner Area</p>
          </div>
        </section>
      </main>
    </div>
  );
};