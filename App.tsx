import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom';
import { en, pt, es } from './dictionaries';
import { Lang } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

// Lazy loading components using named export adapter pattern
const HomePage = React.lazy(() => import('./app/page_home').then(module => ({ default: module.HomePage })));
const PasswordPage = React.lazy(() => import('./app/page_password').then(module => ({ default: module.PasswordPage })));
const JsonPage = React.lazy(() => import('./app/page_json_formatter').then(module => ({ default: module.JsonPage })));
const WordCounterPage = React.lazy(() => import('./app/page_word_counter').then(module => ({ default: module.WordCounterPage })));
const PercentagePage = React.lazy(() => import('./app/page_percentage').then(module => ({ default: module.PercentagePage })));
const AgePage = React.lazy(() => import('./app/page_age').then(module => ({ default: module.AgePage })));
const Base64Page = React.lazy(() => import('./app/page_base64').then(module => ({ default: module.Base64Page })));
const UUIDPage = React.lazy(() => import('./app/page_uuid').then(module => ({ default: module.UUIDPage })));
const LoremPage = React.lazy(() => import('./app/page_lorem_ipsum').then(module => ({ default: module.LoremPage })));
const RuleOfThreePage = React.lazy(() => import('./app/page_rule_of_three').then(module => ({ default: module.RuleOfThreePage })));
const QrPage = React.lazy(() => import('./app/page_qrcode').then(module => ({ default: module.QrPage })));
const MinifyPage = React.lazy(() => import('./app/page_minify').then(module => ({ default: module.MinifyPage })));
const ColorPage = React.lazy(() => import('./app/page_color').then(module => ({ default: module.ColorPage })));
const MetaPage = React.lazy(() => import('./app/page_meta').then(module => ({ default: module.MetaPage })));
const CaseConverterPage = React.lazy(() => import('./app/page_case_converter').then(module => ({ default: module.CaseConverterPage })));
const DuplicateRemoverPage = React.lazy(() => import('./app/page_duplicate_remover').then(module => ({ default: module.DuplicateRemoverPage })));
const TextReverserPage = React.lazy(() => import('./app/page_text_reverser').then(module => ({ default: module.TextReverserPage })));
const ImageConverterPage = React.lazy(() => import('./app/page_image_converter').then(module => ({ default: module.ImageConverterPage })));
const ImageResizerPage = React.lazy(() => import('./app/page_image_resizer').then(module => ({ default: module.ImageResizerPage })));
const FaviconPage = React.lazy(() => import('./app/page_favicon').then(module => ({ default: module.FaviconPage })));
const UnixPage = React.lazy(() => import('./app/page_unix_timestamp').then(module => ({ default: module.UnixPage })));
const MarkdownPage = React.lazy(() => import('./app/page_markdown').then(module => ({ default: module.MarkdownPage })));
const SlugPage = React.lazy(() => import('./app/page_slug').then(module => ({ default: module.SlugPage })));
const BinaryPage = React.lazy(() => import('./app/page_binary').then(module => ({ default: module.BinaryPage })));
const PomodoroPage = React.lazy(() => import('./app/page_pomodoro').then(module => ({ default: module.PomodoroPage })));
const StopwatchPage = React.lazy(() => import('./app/page_stopwatch').then(module => ({ default: module.StopwatchPage })));
const UnitConverterPage = React.lazy(() => import('./app/page_unit_converter').then(module => ({ default: module.UnitConverterPage })));
const HashPage = React.lazy(() => import('./app/page_hash_generator').then(module => ({ default: module.HashPage })));
const DiffPage = React.lazy(() => import('./app/page_diff_checker').then(module => ({ default: module.DiffPage })));
const DevicePage = React.lazy(() => import('./app/page_device_info').then(module => ({ default: module.DevicePage })));
const DiscountPage = React.lazy(() => import('./app/page_discount_calculator').then(module => ({ default: module.DiscountPage })));
const SalaryPage = React.lazy(() => import('./app/page_salary_converter').then(module => ({ default: module.SalaryPage })));
const RandomPage = React.lazy(() => import('./app/page_random_number').then(module => ({ default: module.RandomPage })));
const WhatsAppPage = React.lazy(() => import('./app/page_whatsapp').then(module => ({ default: module.WhatsAppPage })));
const UtmPage = React.lazy(() => import('./app/page_utm').then(module => ({ default: module.UtmPage })));
const CronPage = React.lazy(() => import('./app/page_cron').then(module => ({ default: module.CronPage })));
const PregnancyPage = React.lazy(() => import('./app/page_pregnancy').then(module => ({ default: module.PregnancyPage })));
const InstagramPage = React.lazy(() => import('./app/page_instagram').then(module => ({ default: module.InstagramPage })));
const TDEEPage = React.lazy(() => import('./app/page_tdee').then(module => ({ default: module.TDEEPage })));
const WaterPage = React.lazy(() => import('./app/page_water').then(module => ({ default: module.WaterPage })));
const SQLPage = React.lazy(() => import('./app/page_sql_formatter').then(module => ({ default: module.SQLPage })));
const KeycodePage = React.lazy(() => import('./app/page_keycode').then(module => ({ default: module.KeycodePage })));
const MyIpPage = React.lazy(() => import('./app/page_my_ip').then(module => ({ default: module.MyIpPage })));
const JsonCsvPage = React.lazy(() => import('./app/page_json_csv').then(module => ({ default: module.JsonCsvPage })));
const SubnetPage = React.lazy(() => import('./app/page_subnet').then(module => ({ default: module.SubnetPage })));
const ShoeSizePage = React.lazy(() => import('./app/page_shoe_size').then(module => ({ default: module.ShoeSizePage })));
const CulinaryPage = React.lazy(() => import('./app/page_culinary').then(module => ({ default: module.CulinaryPage })));
const NamePickerPage = React.lazy(() => import('./app/page_name_picker').then(module => ({ default: module.NamePickerPage })));
const ListRandomizerPage = React.lazy(() => import('./app/page_list_randomizer').then(module => ({ default: module.ListRandomizerPage })));
const ListSorterPage = React.lazy(() => import('./app/page_list_sorter').then(module => ({ default: module.ListSorterPage })));
const PrefixSuffixPage = React.lazy(() => import('./app/page_prefix_suffix').then(module => ({ default: module.PrefixSuffixPage })));
const RandomCsvPage = React.lazy(() => import('./app/page_random_csv').then(module => ({ default: module.RandomCsvPage })));
const WeekNumberPage = React.lazy(() => import('./app/page_week_number').then(module => ({ default: module.WeekNumberPage })));
const WebEncodersPage = React.lazy(() => import('./app/page_web_encoders').then(module => ({ default: module.WebEncodersPage })));
const ReactionTimePage = React.lazy(() => import('./app/page_reaction_time').then(module => ({ default: module.ReactionTimePage })));
const MorsePage = React.lazy(() => import('./app/page_morse').then(module => ({ default: module.MorsePage })));
const BMIPage = React.lazy(() => import('./app/page_bmi').then(module => ({ default: module.BMIPage })));
const LoanPage = React.lazy(() => import('./app/page_loan').then(module => ({ default: module.LoanPage })));
const AspectRatioPage = React.lazy(() => import('./app/page_aspect_ratio').then(module => ({ default: module.AspectRatioPage })));
const BoxShadowPage = React.lazy(() => import('./app/page_box_shadow').then(module => ({ default: module.BoxShadowPage })));
const TextToSpeechPage = React.lazy(() => import('./app/page_text_to_speech').then(module => ({ default: module.TextToSpeechPage })));
const PasswordStrengthPage = React.lazy(() => import('./app/page_password_strength').then(module => ({ default: module.PasswordStrengthPage })));
const GradePage = React.lazy(() => import('./app/page_grade_calculator').then(module => ({ default: module.GradePage })));
const YouTubeThumbnailPage = React.lazy(() => import('./app/page_youtube_thumbnail').then(module => ({ default: module.YouTubeThumbnailPage })));
const PPIPage = React.lazy(() => import('./app/page_ppi').then(module => ({ default: module.PPIPage })));
const CompoundInterestPage = React.lazy(() => import('./app/page_compound_interest').then(module => ({ default: module.CompoundInterestPage })));
const CoinFlipPage = React.lazy(() => import('./app/page_coin_flip').then(module => ({ default: module.CoinFlipPage })));
const ChmodPage = React.lazy(() => import('./app/page_chmod').then(module => ({ default: module.ChmodPage })));
const CpfPage = React.lazy(() => import('./app/page_cpf').then(module => ({ default: module.CpfPage })));
const ABNTPage = React.lazy(() => import('./app/page_abnt').then(module => ({ default: module.ABNTPage })));
const ROIPage = React.lazy(() => import('./app/page_roi').then(module => ({ default: module.ROIPage })));
const ScoreboardPage = React.lazy(() => import('./app/page_scoreboard').then(module => ({ default: module.ScoreboardPage })));
const DeadPixelPage = React.lazy(() => import('./app/page_dead_pixel').then(module => ({ default: module.DeadPixelPage })));
const ReadingPage = React.lazy(() => import('./app/page_reading').then(module => ({ default: module.ReadingPage })));
const BitratePage = React.lazy(() => import('./app/page_bitrate').then(module => ({ default: module.BitratePage })));
const SummarizerPage = React.lazy(() => import('./app/page_summarizer').then(module => ({ default: module.SummarizerPage })));
const YouTubeTagsPage = React.lazy(() => import('./app/page_youtube_tags').then(module => ({ default: module.YouTubeTagsPage })));
const TipPage = React.lazy(() => import('./app/page_tip').then(module => ({ default: module.TipPage })));
const FantasyNamePage = React.lazy(() => import('./app/page_fantasy_name').then(module => ({ default: module.FantasyNamePage })));
const RaidPage = React.lazy(() => import('./app/page_raid').then(module => ({ default: module.RaidPage })));
const YamlPage = React.lazy(() => import('./app/page_yaml_json').then(module => ({ default: module.YamlPage })));
const JwtPage = React.lazy(() => import('./app/page_jwt').then(module => ({ default: module.JwtPage })));
const LuhnPage = React.lazy(() => import('./app/page_luhn').then(module => ({ default: module.LuhnPage })));
const MetronomePage = React.lazy(() => import('./app/page_metronome').then(module => ({ default: module.MetronomePage })));
const PalettePage = React.lazy(() => import('./app/page_palette').then(module => ({ default: module.PalettePage })));
const TimePage = React.lazy(() => import('./app/page_time_converter').then(module => ({ default: module.TimePage })));
const RegexPage = React.lazy(() => import('./app/page_regex').then(module => ({ default: module.RegexPage })));
const RomanPage = React.lazy(() => import('./app/page_roman').then(module => ({ default: module.RomanPage })));
const MemoPage = React.lazy(() => import('./app/page_memo').then(module => ({ default: module.MemoPage })));
const GlassPage = React.lazy(() => import('./app/page_glass').then(module => ({ default: module.GlassPage })));
const DensityPage = React.lazy(() => import('./app/page_density').then(module => ({ default: module.DensityPage })));
const FiltersPage = React.lazy(() => import('./app/page_filters').then(module => ({ default: module.FiltersPage })));
const WheelPage = React.lazy(() => import('./app/page_decision_wheel').then(module => ({ default: module.WheelPage })));
const SpinBottlePage = React.lazy(() => import('./app/page_spin_bottle').then(module => ({ default: module.SpinBottlePage })));
const PetNamePage = React.lazy(() => import('./app/page_pet_name').then(module => ({ default: module.PetNamePage })));
const BabyNamePage = React.lazy(() => import('./app/page_baby_name').then(module => ({ default: module.BabyNamePage })));
const BusinessNamePage = React.lazy(() => import('./app/page_business_name').then(module => ({ default: module.BusinessNamePage })));
const TermsPage = React.lazy(() => import('./app/page_terms').then(module => ({ default: module.TermsPage })));
const PrivacyPage = React.lazy(() => import('./app/page_privacy').then(module => ({ default: module.PrivacyPage })));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

// Middleware-like component to handle Language logic
const LangLayout = () => {
  const { lang } = useParams<{ lang: string }>();

  // Validate Language
  const isValidLang = lang === 'en' || lang === 'pt' || lang === 'es';

  // If invalid language, redirect to English
  if (!isValidLang) {
    return <Navigate to="/en" replace />;
  }

  const currentLang = lang as Lang;
  const dict = currentLang === 'en' ? en : (currentLang === 'pt' ? pt : es);

  return (
    <>
      <SEO 
        title={dict.common.title}
        description={dict.home.hero_subtitle}
        lang={currentLang}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar lang={currentLang} dict={dict} />
        <div className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet context={{ lang: currentLang, dict }} />
          </Suspense>
        </div>
        <Footer dict={dict} lang={currentLang} />
      </div>
    </>
  );
};

// Component to detect browser language and redirect
const RootRedirect = () => {
  const userLang = navigator.language || navigator.languages[0];
  const targetLang = (userLang.startsWith('pt')) ? 'pt' : (userLang.startsWith('es') ? 'es' : 'en');
  return <Navigate to={`/${targetLang}`} replace />;
};

// Wrapper components to pass context props down to pages
const HomeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <HomePage lang={lang as Lang} dict={d} />;
};

const PasswordWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PasswordPage lang={lang as Lang} dict={d} />;
};

const JsonWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <JsonPage dict={d} />;
};

const WordWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <WordCounterPage dict={d} />;
};

const PercentWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PercentagePage dict={d} />;
};

const AgeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <AgePage dict={d} />;
};

const Base64Wrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <Base64Page dict={d} />;
};

const UUIDWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <UUIDPage dict={d} />;
};

const LoremWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <LoremPage dict={d} />;
};

const Rule3Wrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <RuleOfThreePage dict={d} />;
};

const QrWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <QrPage dict={d} />;
};

const MinifyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MinifyPage dict={d} />;
};

const ColorWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ColorPage dict={d} />;
};

const MetaWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MetaPage dict={d} />;
};

const CaseWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <CaseConverterPage dict={d} />;
};

const DupeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <DuplicateRemoverPage dict={d} />;
};

const ReverserWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <TextReverserPage dict={d} />;
};

const ImgConvWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ImageConverterPage dict={d} />;
};

const ImgResizeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ImageResizerPage dict={d} />;
};

const FaviconWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <FaviconPage dict={d} />;
};

const UnixWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <UnixPage dict={d} />;
};

const MarkdownWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MarkdownPage dict={d} />;
};

const SlugWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <SlugPage dict={d} />;
};

const BinaryWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <BinaryPage dict={d} />;
};

const PomodoroWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PomodoroPage dict={d} />;
};

const StopwatchWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <StopwatchPage dict={d} />;
};

const UnitWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <UnitConverterPage dict={d} />;
};

const HashWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <HashPage dict={d} />;
};

const DiffWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <DiffPage dict={d} />;
};

const DeviceWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <DevicePage dict={d} />;
};

const DiscountWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <DiscountPage dict={d} />;
};

const SalaryWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <SalaryPage dict={d} />;
};

const RandomWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <RandomPage dict={d} />;
};

const WhatsAppWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <WhatsAppPage dict={d} />;
};

const UtmWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <UtmPage dict={d} />;
};

const CronWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <CronPage dict={d} />;
};

const PregnancyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PregnancyPage dict={d} />;
};

const InstagramWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <InstagramPage dict={d} />;
};

const TDEEWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <TDEEPage dict={d} />;
};

const WaterWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <WaterPage dict={d} />;
};

const SQLWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <SQLPage dict={d} />;
};

const KeycodeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <KeycodePage dict={d} />;
};

const MyIpWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MyIpPage dict={d} />;
};

const JsonCsvWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <JsonCsvPage dict={d} />;
};

const SubnetWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <SubnetPage dict={d} />;
};

const ShoeSizeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ShoeSizePage dict={d} />;
};

const CulinaryWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <CulinaryPage dict={d} />;
};

const NamePickerWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <NamePickerPage dict={d} />;
};

const ListRandomizerWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ListRandomizerPage dict={d} />;
};

const ListSorterWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ListSorterPage dict={d} />;
};

const PrefixSuffixWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PrefixSuffixPage dict={d} />;
};

const RandomCsvWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <RandomCsvPage dict={d} />;
};

const WeekNumberWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <WeekNumberPage dict={d} />;
};

const WebEncodersWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <WebEncodersPage dict={d} />;
};

const ReactionTimeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ReactionTimePage dict={d} />;
};

const MorseWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MorsePage dict={d} />;
};

const BMIWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <BMIPage dict={d} />;
};

const LoanWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <LoanPage dict={d} />;
};

const RatioWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <AspectRatioPage dict={d} />;
};

const ShadowWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <BoxShadowPage dict={d} />;
};

const TTSWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <TextToSpeechPage dict={d} />;
};

const StrengthWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PasswordStrengthPage dict={d} />;
};

const GradeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <GradePage dict={d} />;
};

const YTWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <YouTubeThumbnailPage dict={d} />;
};

const PPIWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PPIPage dict={d} />;
};

const CompoundWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <CompoundInterestPage dict={d} />;
};

const CoinWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <CoinFlipPage dict={d} />;
};

const ChmodWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ChmodPage dict={d} />;
};

const CpfWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <CpfPage dict={d} />;
};

const ABNTWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ABNTPage dict={d} />;
};

const ROIWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ROIPage dict={d} />;
};

const ScoreboardWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ScoreboardPage dict={d} />;
};

const DeadPixelWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <DeadPixelPage dict={d} />;
};

const ReadingWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <ReadingPage dict={d} />;
};

const BitrateWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <BitratePage dict={d} />;
};

const SummarizerWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <SummarizerPage dict={d} />;
};

const TagsWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <YouTubeTagsPage dict={d} />;
};

const TipWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <TipPage dict={d} />;
};

const FantasyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <FantasyNamePage dict={d} />;
};

const RaidWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <RaidPage dict={d} />;
};

const YamlWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <YamlPage dict={d} />;
};

const JwtWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <JwtPage dict={d} />;
};

const LuhnWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <LuhnPage dict={d} />;
};

const MetronomeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MetronomePage dict={d} />;
};

const PaletteWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PalettePage dict={d} />;
};

const TimeWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <TimePage dict={d} />;
};

const RegexWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <RegexPage dict={d} />;
};

const RomanWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <RomanPage dict={d} />;
};

const MemoWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <MemoPage dict={d} />;
};

const GlassWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <GlassPage dict={d} />;
};

const DensityWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <DensityPage dict={d} />;
};

const FiltersWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <FiltersPage dict={d} />;
};

const WheelWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <WheelPage dict={d} />;
};

const BottleWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <SpinBottlePage dict={d} />;
};

const PetNameWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PetNamePage dict={d} />;
};

const BabyNameWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <BabyNamePage dict={d} />;
};

const BusinessNameWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <BusinessNamePage dict={d} />;
};

const TermsWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <TermsPage dict={d} />;
};

const PrivacyWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const d = lang === 'pt' ? pt : (lang === 'es' ? es : en);
  return <PrivacyPage dict={d} />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
          <Route path="business-name-generator" element={<BusinessNameWrapper />} />
          
          <Route path="terms-of-service" element={<TermsWrapper />} />
          <Route path="privacy-policy" element={<PrivacyWrapper />} />
        </Route>

        {/* Catch all - redirect to root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;