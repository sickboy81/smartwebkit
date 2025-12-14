import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom';
import { en, pt } from './dictionaries';
import { Lang } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './app/page_home';
import { PasswordPage } from './app/page_password';
import { JsonPage } from './app/page_json_formatter';
import { WordCounterPage } from './app/page_word_counter';
import { PercentagePage } from './app/page_percentage';
import { AgePage } from './app/page_age';
import { Base64Page } from './app/page_base64';
import { UUIDPage } from './app/page_uuid';
import { LoremPage } from './app/page_lorem_ipsum';
import { RuleOfThreePage } from './app/page_rule_of_three';
import { QrPage } from './app/page_qrcode';
import { MinifyPage } from './app/page_minify';
import { ColorPage } from './app/page_color';
import { MetaPage } from './app/page_meta';
import { CaseConverterPage } from './app/page_case_converter';
import { DuplicateRemoverPage } from './app/page_duplicate_remover';
import { TextReverserPage } from './app/page_text_reverser';
import { ImageConverterPage } from './app/page_image_converter';
import { ImageResizerPage } from './app/page_image_resizer';
import { FaviconPage } from './app/page_favicon';
import { UnixPage } from './app/page_unix_timestamp';
import { MarkdownPage } from './app/page_markdown';
import { SlugPage } from './app/page_slug';
import { BinaryPage } from './app/page_binary';
import { PomodoroPage } from './app/page_pomodoro';
import { StopwatchPage } from './app/page_stopwatch';
import { UnitConverterPage } from './app/page_unit_converter';
import { HashPage } from './app/page_hash_generator';
import { DiffPage } from './app/page_diff_checker';
import { DevicePage } from './app/page_device_info';
import { DiscountPage } from './app/page_discount_calculator';
import { SalaryPage } from './app/page_salary_converter';
import { RandomPage } from './app/page_random_number';
import { WhatsAppPage } from './app/page_whatsapp';
import { UtmPage } from './app/page_utm';
import { CronPage } from './app/page_cron';
import { PregnancyPage } from './app/page_pregnancy';
import { InstagramPage } from './app/page_instagram';
import { TDEEPage } from './app/page_tdee';
import { WaterPage } from './app/page_water';
import { SQLPage } from './app/page_sql_formatter';
import { KeycodePage } from './app/page_keycode';
import { MyIpPage } from './app/page_my_ip';
import { JsonCsvPage } from './app/page_json_csv';
import { SubnetPage } from './app/page_subnet';
import { ShoeSizePage } from './app/page_shoe_size';
import { CulinaryPage } from './app/page_culinary';
import { NamePickerPage } from './app/page_name_picker';
import { ListRandomizerPage } from './app/page_list_randomizer';
import { ListSorterPage } from './app/page_list_sorter';
import { PrefixSuffixPage } from './app/page_prefix_suffix';
import { RandomCsvPage } from './app/page_random_csv';
import { WeekNumberPage } from './app/page_week_number';
import { WebEncodersPage } from './app/page_web_encoders';
import { ReactionTimePage } from './app/page_reaction_time';
import { MorsePage } from './app/page_morse';
import { BMIPage } from './app/page_bmi';
import { LoanPage } from './app/page_loan';
import { AspectRatioPage } from './app/page_aspect_ratio';
import { BoxShadowPage } from './app/page_box_shadow';
import { TextToSpeechPage } from './app/page_text_to_speech';
import { PasswordStrengthPage } from './app/page_password_strength';
import { GradePage } from './app/page_grade_calculator';
import { YouTubeThumbnailPage } from './app/page_youtube_thumbnail';
import { PPIPage } from './app/page_ppi';
import { CompoundInterestPage } from './app/page_compound_interest';
import { CoinFlipPage } from './app/page_coin_flip';
import { ChmodPage } from './app/page_chmod';
import { CpfPage } from './app/page_cpf';
import { ABNTPage } from './app/page_abnt';
import { ROIPage } from './app/page_roi';
import { ScoreboardPage } from './app/page_scoreboard';
import { DeadPixelPage } from './app/page_dead_pixel';
import { ReadingPage } from './app/page_reading';
import { BitratePage } from './app/page_bitrate';
import { SummarizerPage } from './app/page_summarizer';
import { YouTubeTagsPage } from './app/page_youtube_tags';
import { TipPage } from './app/page_tip';
import { FantasyNamePage } from './app/page_fantasy_name';
import { RaidPage } from './app/page_raid';
import { YamlPage } from './app/page_yaml_json';
import { JwtPage } from './app/page_jwt';
import { LuhnPage } from './app/page_luhn';
import { MetronomePage } from './app/page_metronome';
import { PalettePage } from './app/page_palette';
import { TimePage } from './app/page_time_converter';
import { RegexPage } from './app/page_regex';
import { RomanPage } from './app/page_roman';
import { MemoPage } from './app/page_memo';
import { GlassPage } from './app/page_glass';
import { DensityPage } from './app/page_density';
import { FiltersPage } from './app/page_filters';
import { WheelPage } from './app/page_decision_wheel';
import { SpinBottlePage } from './app/page_spin_bottle';
import { PetNamePage } from './app/page_pet_name';
import { BabyNamePage } from './app/page_baby_name';
// New Import
import { BusinessNamePage } from './app/page_business_name';

// Middleware-like component to handle Language logic
const LangLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();

  // Validate Language
  const isValidLang = lang === 'en' || lang === 'pt';

  // If invalid language, redirect to English but keep the path tail if possible, 
  // or just go to root (which triggers the detector)
  if (!isValidLang) {
    return <Navigate to="/en" replace />;
  }

  const currentLang = lang as Lang;
  const dict = currentLang === 'en' ? en : pt;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar lang={currentLang} dict={dict} />
      <div className="flex-1">
        <Outlet context={{ lang: currentLang, dict }} />
      </div>
      <Footer dict={dict} />
    </div>
  );
};

// Component to detect browser language and redirect
const RootRedirect = () => {
  const userLang = navigator.language || navigator.languages[0];
  const targetLang = (userLang.startsWith('pt')) ? 'pt' : 'en';
  return <Navigate to={`/${targetLang}`} replace />;
};

// Wrapper components to pass context props down to pages
const HomeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <HomePage lang={lang as Lang} dict={d} />;
};

const PasswordWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PasswordPage lang={lang as Lang} dict={d} />;
};

const JsonWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <JsonPage dict={d} />;
};

const WordWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <WordCounterPage dict={d} />;
};

const PercentWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PercentagePage dict={d} />;
};

const AgeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <AgePage dict={d} />;
};

const Base64Wrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <Base64Page dict={d} />;
};

const UUIDWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <UUIDPage dict={d} />;
};

const LoremWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <LoremPage dict={d} />;
};

const Rule3Wrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <RuleOfThreePage dict={d} />;
};

const QrWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <QrPage dict={d} />;
};

const MinifyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MinifyPage dict={d} />;
};

const ColorWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ColorPage dict={d} />;
};

const MetaWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MetaPage dict={d} />;
};

const CaseWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <CaseConverterPage dict={d} />;
};

const DupeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <DuplicateRemoverPage dict={d} />;
};

const ReverserWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <TextReverserPage dict={d} />;
};

const ImgConvWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ImageConverterPage dict={d} />;
};

const ImgResizeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ImageResizerPage dict={d} />;
};

const FaviconWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <FaviconPage dict={d} />;
};

const UnixWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <UnixPage dict={d} />;
};

const MarkdownWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MarkdownPage dict={d} />;
};

const SlugWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <SlugPage dict={d} />;
};

const BinaryWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <BinaryPage dict={d} />;
};

const PomodoroWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PomodoroPage dict={d} />;
};

const StopwatchWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <StopwatchPage dict={d} />;
};

const UnitWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <UnitConverterPage dict={d} />;
};

const HashWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <HashPage dict={d} />;
};

const DiffWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <DiffPage dict={d} />;
};

const DeviceWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <DevicePage dict={d} />;
};

const DiscountWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <DiscountPage dict={d} />;
};

const SalaryWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <SalaryPage dict={d} />;
};

const RandomWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <RandomPage dict={d} />;
};

const WhatsAppWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <WhatsAppPage dict={d} />;
};

const UtmWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <UtmPage dict={d} />;
};

const CronWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <CronPage dict={d} />;
};

const PregnancyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PregnancyPage dict={d} />;
};

const InstagramWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <InstagramPage dict={d} />;
};

const TDEEWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <TDEEPage dict={d} />;
};

const WaterWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <WaterPage dict={d} />;
};

const SQLWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <SQLPage dict={d} />;
};

const KeycodeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <KeycodePage dict={d} />;
};

const MyIpWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MyIpPage dict={d} />;
};

const JsonCsvWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <JsonCsvPage dict={d} />;
};

const SubnetWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <SubnetPage dict={d} />;
};

const ShoeSizeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ShoeSizePage dict={d} />;
};

const CulinaryWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <CulinaryPage dict={d} />;
};

const NamePickerWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <NamePickerPage dict={d} />;
};

const ListRandomizerWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ListRandomizerPage dict={d} />;
};

const ListSorterWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ListSorterPage dict={d} />;
};

const PrefixSuffixWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PrefixSuffixPage dict={d} />;
};

const RandomCsvWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <RandomCsvPage dict={d} />;
};

const WeekNumberWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <WeekNumberPage dict={d} />;
};

const WebEncodersWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <WebEncodersPage dict={d} />;
};

const ReactionTimeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ReactionTimePage dict={d} />;
};

const MorseWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MorsePage dict={d} />;
};

const BMIWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <BMIPage dict={d} />;
};

const LoanWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <LoanPage dict={d} />;
};

const RatioWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <AspectRatioPage dict={d} />;
};

const ShadowWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <BoxShadowPage dict={d} />;
};

const TTSWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <TextToSpeechPage dict={d} />;
};

const StrengthWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PasswordStrengthPage dict={d} />;
};

const GradeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <GradePage dict={d} />;
};

const YTWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <YouTubeThumbnailPage dict={d} />;
};

const PPIWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PPIPage dict={d} />;
};

const CompoundWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <CompoundInterestPage dict={d} />;
};

const CoinWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <CoinFlipPage dict={d} />;
};

const ChmodWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ChmodPage dict={d} />;
};

const CpfWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <CpfPage dict={d} />;
};

const ABNTWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ABNTPage dict={d} />;
};

const ROIWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ROIPage dict={d} />;
};

const ScoreboardWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ScoreboardPage dict={d} />;
};

const DeadPixelWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <DeadPixelPage dict={d} />;
};

const ReadingWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <ReadingPage dict={d} />;
};

const BitrateWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <BitratePage dict={d} />;
};

const SummarizerWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <SummarizerPage dict={d} />;
};

const TagsWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <YouTubeTagsPage dict={d} />;
};

const TipWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <TipPage dict={d} />;
};

const FantasyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <FantasyNamePage dict={d} />;
};

const RaidWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <RaidPage dict={d} />;
};

const YamlWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <YamlPage dict={d} />;
};

const JwtWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <JwtPage dict={d} />;
};

const LuhnWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <LuhnPage dict={d} />;
};

const MetronomeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MetronomePage dict={d} />;
};

const PaletteWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PalettePage dict={d} />;
};

const TimeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <TimePage dict={d} />;
};

const RegexWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <RegexPage dict={d} />;
};

const RomanWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <RomanPage dict={d} />;
};

const MemoWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <MemoPage dict={d} />;
};

const GlassWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <GlassPage dict={d} />;
};

const DensityWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <DensityPage dict={d} />;
};

const FiltersWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <FiltersPage dict={d} />;
};

const WheelWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <WheelPage dict={d} />;
};

const BottleWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <SpinBottlePage dict={d} />;
};

const PetNameWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <PetNamePage dict={d} />;
};

const BabyNameWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <BabyNamePage dict={d} />;
};

// Batch 13
const BusinessNameWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : en;
  return <BusinessNamePage dict={d} />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Root path detects language */}
        <Route path="/" element={<RootRedirect />} />

        {/* Dynamic Language Route */}
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<HomeWrapper />} />
          <Route path="password-generator" element={<PasswordWrapper />} />
          <Route path="json-formatter" element={<JsonWrapper />} />
          <Route path="word-counter" element={<WordWrapper />} />
          <Route path="percentage-calculator" element={<PercentWrapper />} />
          <Route path="age-calculator" element={<AgeWrapper />} />
          <Route path="base64-converter" element={<Base64Wrapper />} />
          <Route path="uuid-generator" element={<UUIDWrapper />} />
          <Route path="lorem-ipsum" element={<LoremWrapper />} />
          <Route path="rule-of-three" element={<Rule3Wrapper />} />
          
          <Route path="qr-code-generator" element={<QrWrapper />} />
          <Route path="css-js-minifier" element={<MinifyWrapper />} />
          <Route path="color-converter" element={<ColorWrapper />} />
          <Route path="meta-tag-generator" element={<MetaWrapper />} />

          <Route path="case-converter" element={<CaseWrapper />} />
          <Route path="duplicate-remover" element={<DupeWrapper />} />
          <Route path="text-reverser" element={<ReverserWrapper />} />
          <Route path="image-converter" element={<ImgConvWrapper />} />
          <Route path="image-resizer" element={<ImgResizeWrapper />} />
          <Route path="favicon-generator" element={<FaviconWrapper />} />

          <Route path="unix-timestamp" element={<UnixWrapper />} />
          <Route path="markdown-to-html" element={<MarkdownWrapper />} />
          <Route path="url-slug" element={<SlugWrapper />} />
          <Route path="binary-converter" element={<BinaryWrapper />} />
          <Route path="pomodoro-timer" element={<PomodoroWrapper />} />

          <Route path="stopwatch" element={<StopwatchWrapper />} />
          <Route path="unit-converter" element={<UnitWrapper />} />
          <Route path="hash-generator" element={<HashWrapper />} />
          <Route path="diff-checker" element={<DiffWrapper />} />
          <Route path="device-info" element={<DeviceWrapper />} />

          <Route path="discount-calculator" element={<DiscountWrapper />} />
          <Route path="salary-converter" element={<SalaryWrapper />} />
          <Route path="random-number-generator" element={<RandomWrapper />} />

          <Route path="whatsapp-link-generator" element={<WhatsAppWrapper />} />
          <Route path="utm-builder" element={<UtmWrapper />} />
          <Route path="cron-job-generator" element={<CronWrapper />} />
          <Route path="pregnancy-calculator" element={<PregnancyWrapper />} />

          <Route path="instagram-caption-maker" element={<InstagramWrapper />} />
          <Route path="tdee-calculator" element={<TDEEWrapper />} />
          <Route path="water-intake-calculator" element={<WaterWrapper />} />
          <Route path="sql-formatter" element={<SQLWrapper />} />
          <Route path="keycode-visualizer" element={<KeycodeWrapper />} />
          <Route path="my-ip-address" element={<MyIpWrapper />} />

          <Route path="json-to-csv" element={<JsonCsvWrapper />} />
          <Route path="subnet-calculator" element={<SubnetWrapper />} />
          <Route path="shoe-size-converter" element={<ShoeSizeWrapper />} />
          <Route path="culinary-converter" element={<CulinaryWrapper />} />
          <Route path="name-picker" element={<NamePickerWrapper />} />

          <Route path="list-randomizer" element={<ListRandomizerWrapper />} />
          <Route path="list-sorter" element={<ListSorterWrapper />} />
          <Route path="prefix-suffix" element={<PrefixSuffixWrapper />} />
          <Route path="random-csv" element={<RandomCsvWrapper />} />
          <Route path="week-number" element={<WeekNumberWrapper />} />
          <Route path="web-encoders" element={<WebEncodersWrapper />} />
          <Route path="reaction-time" element={<ReactionTimeWrapper />} />
          <Route path="morse-code" element={<MorseWrapper />} />

          <Route path="bmi-calculator" element={<BMIWrapper />} />
          <Route path="loan-calculator" element={<LoanWrapper />} />
          <Route path="aspect-ratio-calculator" element={<RatioWrapper />} />
          <Route path="box-shadow-generator" element={<ShadowWrapper />} />
          <Route path="text-to-speech" element={<TTSWrapper />} />
          <Route path="password-strength" element={<StrengthWrapper />} />

          <Route path="grade-calculator" element={<GradeWrapper />} />
          <Route path="youtube-thumbnail-downloader" element={<YTWrapper />} />
          <Route path="ppi-calculator" element={<PPIWrapper />} />
          <Route path="compound-interest-calculator" element={<CompoundWrapper />} />
          <Route path="coin-flip" element={<CoinWrapper />} />
          <Route path="chmod-calculator" element={<ChmodWrapper />} />

          <Route path="cpf-generator" element={<CpfWrapper />} />
          <Route path="abnt-generator" element={<ABNTWrapper />} />
          <Route path="roi-calculator" element={<ROIWrapper />} />
          <Route path="online-scoreboard" element={<ScoreboardWrapper />} />
          <Route path="dead-pixel-test" element={<DeadPixelWrapper />} />
          <Route path="reading-planner" element={<ReadingWrapper />} />

          <Route path="bitrate-calculator" element={<BitrateWrapper />} />
          <Route path="text-summarizer" element={<SummarizerWrapper />} />
          <Route path="youtube-tag-generator" element={<TagsWrapper />} />
          <Route path="tip-calculator" element={<TipWrapper />} />
          <Route path="fantasy-name-generator" element={<FantasyWrapper />} />
          <Route path="raid-calculator" element={<RaidWrapper />} />

          <Route path="yaml-json-converter" element={<YamlWrapper />} />
          <Route path="jwt-decoder" element={<JwtWrapper />} />
          <Route path="luhn-validator" element={<LuhnWrapper />} />
          <Route path="online-metronome" element={<MetronomeWrapper />} />
          <Route path="color-palette-generator" element={<PaletteWrapper />} />
          <Route path="time-zone-converter" element={<TimeWrapper />} />

          <Route path="regex-tester" element={<RegexWrapper />} />
          <Route path="roman-numeral-converter" element={<RomanWrapper />} />
          <Route path="memo-pad" element={<MemoWrapper />} />
          <Route path="glassmorphism-generator" element={<GlassWrapper />} />
          <Route path="keyword-density-checker" element={<DensityWrapper />} />
          <Route path="image-filters" element={<FiltersWrapper />} />

          <Route path="decision-wheel" element={<WheelWrapper />} />
          <Route path="spin-the-bottle" element={<BottleWrapper />} />
          <Route path="pet-name-generator" element={<PetNameWrapper />} />
          <Route path="baby-name-generator" element={<BabyNameWrapper />} />
          
          {/* New Route Batch 13 */}
          <Route path="business-name-generator" element={<BusinessNameWrapper />} />
        </Route>

        {/* Catch all - redirect to root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;