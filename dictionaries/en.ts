import { Dictionary } from '../types';

export const en: Dictionary = {
  "common": {
    "title": "SmartWebKit",
    "footer_text": "© 2024 SmartWebKit. All rights reserved.",
    "nav": {
      "home": "Home"
    },
    "categories": {
      "dev": "Developer Tools",
      "text": "Text Tools",
      "design": "Design Tools",
      "math": "Math & Finance",
      "date": "Date & Time",
      "security": "Security",
      "seo": "SEO Tools",
      "marketing": "Marketing & Social",
      "health": "Health & Fitness",
      "network": "Network Tools"
    }
  },
  "home": {
    "hero_title": "Free Online Web Tools",
    "hero_subtitle": "A collection of useful developer, design, and productivity tools. Free, fast, and secure.",
    "tools_section_title": "All Tools"
  },
  "tools": {
    "json_formatter": {
      "name": "JSON Formatter",
      "description": "Format and validate JSON data.",
      "title": "JSON Formatter & Validator",
      "seo_title": "Online JSON Formatter",
      "seo_content": [
        "Format, validate, and minify your JSON data with our free online tool. JSON (JavaScript Object Notation) is the standard file format for data interchange, but raw JSON is often messy and hard to read. Our tool instantly beautifies your code, making it human-readable with proper indentation and syntax highlighting.",
        "Whether you are a developer debugging an API response, a data analyst working with datasets, or a student learning data structures, this tool helps you visualize and correct your JSON structures. It automatically detects syntax errors, pointing out missing commas or unclosed brackets, saving you hours of frustration.",
        "Beyond formatting, we offer a minification feature that removes unnecessary whitespace to reduce file size for production use. You can also copy the result to your clipboard with a single click.",
        "Your data is processed locally within your browser, ensuring that sensitive information remains private and is never sent to a server. Experience the easiest way to manage your JSON files today."
      ],
      "input_label": "JSON Input",
      "output_label": "Result",
      "btn_format": "Format",
      "btn_minify": "Minify",
      "btn_copy": "Copy",
      "btn_copied": "Copied!",
      "error_invalid": "Invalid JSON"
    },
    "base64_converter": {
      "name": "Base64 Converter",
      "description": "Encode and decode Base64 strings.",
      "title": "Base64 Encoder / Decoder",
      "seo_title": "Base64 Converter Online",
      "seo_content": [
        "Easily encode and decode data with our Base64 Converter. Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It is commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data.",
        "This tool allows you to encode any text string or code snippet into a Base64 string, making it safe for transport via email, XML, or JSON. Conversely, you can paste a Base64 string to decode it back to its original readable format. Our tool handles standard UTF-8 text correctly to ensure emojis and special characters are preserved.",
        "Developers often use Base64 to embed images directly into HTML/CSS files (Data URIs) or to transmit complex data structures as simple strings. It is also useful for simple data obfuscation which hides the data from human eyes, though it should not be confused with encryption as it offers no security against anyone who knows how to decode it.",
        "Simply type or paste your content into the input box and click Encode or Decode. The result appears instantly and can be copied to your clipboard with a single click. No data is sent to our servers; everything is processed locally in your browser for speed and privacy."
      ],
      "input_label": "Input Text",
      "output_label": "Result",
      "btn_encode": "Encode",
      "btn_decode": "Decode",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "uuid_generator": {
      "name": "UUID/GUID Generator",
      "description": "Generate UUIDs v1 (time-based) & v4 (random).",
      "title": "UUID / GUID Generator",
      "seo_title": "UUID v1 & v4 Generator",
      "seo_content": [
        "Generate RFC-compliant UUIDs (Universally Unique Identifiers) or GUIDs instantly with our free online generator. Whether you need a unique key for a database entry, a session ID for a web user, or a random token for an API, our tool provides reliable, collision-free identifiers in standard format.",
        "We support both Version 4 (Random) and Version 1 (Time-based) UUIDs. Version 4 is the most common, generated using secure random numbers to ensure uniqueness capabilities so vast that the probability of duplication is virtually zero. Version 1 is based on the current timestamp and your computer's MAC address, making it useful for scenarios where sorting by creation time is important.",
        "You can generate a single UUID or bulk create up to 100 at a time, perfect for populating test databases or assigning batch IDs. The clean interface allows you to copy individual keys or the entire list to your clipboard effortlessly.",
        "No installation is required, and all generation happens client-side in your browser for maximum speed and security. Simplify your development workflow with our professional UUID generator."
      ],
      "label_quantity": "Quantity",
      "label_version": "Version",
      "opt_v4": "Version 4 (Random)",
      "opt_v1": "Version 1 (Time-based)",
      "btn_generate": "Generate",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "css_js_minifier": {
      "name": "CSS/JS Minifier",
      "description": "Minify CSS and JavaScript code.",
      "title": "Code Minifier",
      "seo_title": "Free CSS & JS Minifier",
      "seo_content": [
        "Compress your CSS and JavaScript files to reduce file size and improve website loading speed with our free Code Minifier. Minification is the process of removing unnecessary characters like whitespace, comments, and newlines from source code without changing its functionality. This is a critical step for web performance optimization (SEO).",
        "Our tool supports both CSS (Cascading Style Sheets) and JS (JavaScript) code. Simply paste your source code into the input area, select the corresponding tab, and click Minify. The tool instantly outputs a compact, optimized version ready for production deployment.",
        "Smaller file sizes mean faster download times for your users, lower bandwidth consumption, and better Core Web Vitals scores from search engines. Whether you are optimizing a small personal blog or a large-scale web application, minifying your assets is a best practice.",
        "There is no need for complex build tools or command-line interfaces. Our browser-based minifier is fast, secure, and easy to use. Copy your minified code with a single click and boost your site's performance today."
      ],
      "tab_css": "CSS",
      "tab_js": "JS",
      "input_label": "Input Code",
      "output_label": "Minified Code",
      "btn_minify": "Minify",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "qr_code_generator": {
      "name": "QR Code Generator",
      "description": "Create QR codes for URLs, text, and WiFi.",
      "title": "Free QR Code Generator",
      "seo_title": "QR Code Maker",
      "seo_content": [
        "Generate custom QR codes instantly with our free online QR Code Maker. Whether you need a code for your website URL, a WiFi network access point, plain text, or email, our tool handles it all. QR (Quick Response) codes are two-dimensional barcodes that can store significant amounts of data and are easily readable by smartphones and digital devices.",
        "QR codes are essential for modern marketing and connectivity. You can print them on business cards to link to your portfolio, display them in restaurants for digital menus, or use them on flyers to direct traffic to your social media pages. Our generator produces high-resolution images that scan properly even when printed at small sizes.",
        "We support multiple data types: URL (for weblinks), Text (for messages or codes), WiFi (to let guests join your network without typing passwords), and Email (to pre-fill a message). Just select the type, enter your data, and download your PNG image instantly.",
        "No signup or registration is required. Your data is processed locally in your browser for maximum privacy. Enhance your user experience and bridge the physical and digital worlds with a custom QR code today."
      ],
      "type_url": "URL",
      "type_wifi": "WiFi",
      "type_text": "Text",
      "type_email": "Email",
      "label_email": "Email",
      "label_subject": "Subject",
      "label_body": "Body",
      "label_ssid": "Network Name",
      "label_password": "Password",
      "label_encryption": "Encryption",
      "btn_download": "Download PNG"
    },
    "markdown_html": {
      "name": "Markdown to HTML",
      "description": "Convert Markdown syntax to HTML.",
      "title": "Markdown Editor & Converter",
      "seo_title": "Markdown to HTML Online",
      "seo_content": [
        "Convert Markdown syntax to HTML instantly with our real-time Markdown Editor & Converter. Markdown is a lightweight markup language used by writers, developers, and bloggers to format text without the complexity of HTML tags. Our tool allows you to write in Markdown and see the HTML output immediately.",
        "This tool is perfect for creating README files for GitHub, writing blog posts for CMS platforms like Jekyll or Hugo, or drafting content for forums that support Markdown. As you type on the left, the preview updates on the right, giving you a live visual confirmation of your headers, lists, links, and code blocks.",
        "We generally support standard GitHub Flavored Markdown (GFM), ensuring compatibility with most popular platforms. You can easily copy the raw HTML code to your clipboard for use in your web projects.",
        "Enjoy a distraction-free writing experience with our clean interface. No signup or download is required—everything works directly in your browser, keeping your drafts private and secure. Start writing in Markdown and converting to clean HTML today."
      ],
      "label_markdown": "Markdown",
      "label_preview": "Preview",
      "btn_copy_html": "Copy HTML"
    },
    "binary_converter": {
      "name": "Binary Converter",
      "description": "Translate text to binary and vice-versa.",
      "title": "Text to Binary Converter",
      "seo_title": "Binary Translator",
      "seo_content": [
        "Translate text to binary and binary to text instantly with our Binary Converter. Binary is the fundamental language of computers, representing every piece of data as a series of 0s and 1s. This tool bridges the gap between human-readable text and machine code.",
        "Our converter supports full text-to-binary and binary-to-text translation. Simply type your message to see how a computer stores it, or paste a binary string to decode a hidden message. It helps in understanding character encoding and digital logic concepts.",
        "Whether you are a computer science student learning about data representation, a curious user wanting to send encoded messages to friends, or a developer debugging low-level data, this tool provides a clear and accurate conversion. We use standard ASCII/UTF-8 encoding to ensure compatibility.",
        "The tool is fast, free, and runs entirely in your browser. There is no need to install software or worry about data privacy, as nothing is uploaded to a remote server. Start experimenting with the language of 1s and 0s today."
      ],
      "input_label": "Input",
      "btn_to_binary": "Text to Binary",
      "btn_to_text": "Binary to Text",
      "output_label": "Result",
      "btn_copied": "Copied"
    },
    "device_info": {
      "name": "Device Information",
      "description": "Check your screen resolution and browser info.",
      "title": "My Device Info",
      "seo_title": "Check Screen Resolution & Browser",
      "seo_content": [
        "Get detailed information about your current device, screen resolution, and browser configuration instantly. This tool extracts technical details from your browser's user agent and viewport settings to give you a comprehensive overview of your digital environment. It is particularly useful for web developers, designers, and QA testers who need to verify how a specific device reports itself to web servers.",
        "Key metrics displayed include your screen's width and height (both physical and logical viewport size), pixel ratio, color depth, and orientation. We also identify your operating system (Windows, macOS, Linux, iOS, Android), browser engine (Chrome, Firefox, Safari, Edge), and full User Agent string. This information is crucial for debugging responsive design issues and ensuring cross-browser compatibility.",
        "Knowing your exact screen resolution is vital when designing layouts or troubleshooting display errors. This tool provides real-time updates if you resize your browser window or rotate your device, giving you instant feedback on viewport changes. It also checks your online/offline status and preferred language settings.",
        "No data is stored or transmitted. All detection happens locally via client-side JavaScript APIs, ensuring your privacy. Use this tool to quickly retrieve your system specs without wading through complex settings menus."
      ],
      "label_screen": "Screen Resolution",
      "label_browser": "Browser",
      "label_lang": "Language",
      "label_online": "Status",
      "val_online": "Online",
      "val_offline": "Offline",
      "label_ua": "User Agent"
    },
    "word_counter": {
      "name": "Word Counter",
      "description": "Count words, characters, and lines.",
      "title": "Word & Character Counter",
      "seo_title": "Online Word Counter",
      "seo_content": [
        "Analyze your text with our powerful real-time Word & Character Counter. Whether you are writing a tweet, a blog post, an academic essay, or a novel, knowing your word count is essential. Our tool instantly calculates the total words, characters (with and without spaces), sentences, paragraphs, and lines as you type or paste content.",
        "Beyond simple counting, this tool helps you meet specific requirements for social media platforms (like Twitter/X limits) or assignment word limits. It helps writers maintain optimal sentence length for readability and ensures you don't exceed or fall short of your targets. Content creators and SEO specialists use it to optimize meta descriptions and article lengths for search engines.",
        "The interface is clean and distraction-free, allowing you to focus on writing. We prioritize privacy; your text is processed entirely in your browser and is never sent to our servers. You can write freely, knowing your drafts are secure.",
        "Additional features include reading time estimation, which helps you understand how long it will take an average reader to consume your content. Start typing now to get instant metrics on your writing."
      ],
      "stat_words": "Words",
      "stat_chars": "Chars",
      "stat_paragraphs": "Paragraphs",
      "stat_lines": "Lines",
      "input_placeholder": "Type or paste your text here..."
    },
    "lorem_ipsum": {
      "name": "Lorem Ipsum Generator",
      "description": "Generate placeholder text.",
      "title": "Lorem Ipsum Generator",
      "seo_title": "Dummy Text Generator",
      "seo_content": [
        "Generate custom Lorem Ipsum placeholder text for your design and development projects. Lorem Ipsum is the standard dummy text used by the printing and typesetting industry. It allows designers to focus on visual elements like layout, typography, and color schemes without being distracted by readable content. Our tool generates standard Latin text that looks like natural sentences.",
        "You can customize the output to generate specific numbers of paragraphs, sentences, or words, making it adaptable to any space in your layout. Whether you are mocking up a website hero section, a brochure, or a mobile app interface, you can get exactly the amount of text you need in seconds.",
        "Using placeholder text is a best practice in UI/UX design. It simulates the look and feel of real text, allowing stakeholders to review the design structure before the copy is finalized. Our generator ensures you don't have to copy-paste the same sentence repeatedly.",
        "The generated text is clean and free of formatting, ready to be copied into your HTML editor or design software like Figma or Adobe XD. Streamline your design workflow with our fast and reliable Lorem Ipsum Generator."
      ],
      "label_type": "Type",
      "opt_paragraphs": "Paragraphs",
      "opt_sentences": "Sentences",
      "label_quantity": "Count",
      "btn_generate": "Generate",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "case_converter": {
      "name": "Case Converter",
      "description": "Convert text case (upper, lower, etc).",
      "title": "Text Case Converter",
      "seo_title": "Online Case Converter",
      "seo_content": [
        "Instantly convert your text between different letter cases with our Online Case Converter. Whether you accidentally left Caps Lock on, need to capitalize headlines, or want to format text for coding, this tool handles it all. We support Uppercase (ALL CAPS), Lowercase (all small), Capitalized Case (Title Case), and Inverse Case.",
        "Formatting text manually can be tedious and prone to errors. Our tool automates the process, saving you time and ensuring consistency across your document. It is especially useful for writers, editors, and programmers who strictly follow style guides or naming conventions.",
        "For developers, the tool can help normalize user input or prepare strings for database storage. For social media managers, it allows creative formatting to grab attention. The Inverse Case function is a fun way to flip the capitalization of every letter, often used for stylistic effect or irony.",
        "Simply type or paste your text, and click the button for your desired format. The converted text replaces the input instantly. You can then copy it to your clipboard with a single click. Like all our tools, it works client-side for maximum privacy and speed."
      ],
      "input_label": "Input Text",
      "btn_upper": "UPPERCASE",
      "btn_lower": "lowercase",
      "btn_capital": "Capitalized Case",
      "btn_inverse": "iNvErSe cAsE",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "duplicate_remover": {
      "name": "Duplicate Remover",
      "description": "Remove duplicate lines from text.",
      "title": "Remove Duplicate Lines",
      "seo_title": "Duplicate Line Remover",
      "seo_content": [
        "Clean up your data lists by removing duplicate entries instantly with our Duplicate Line Remover. Whether you are managing email lists, inventory items, keywords for SEO, or database records, duplicates can cause errors and inefficiencies. This tool scans your text and automatically eliminates repeated lines, checking for exact matches.",
        "The process is simple: paste your list into the input field, and the tool will filter out every duplicate instance, leaving you with a clean, unique set of data. It also provides a summary of how many detection duplicates were removed and how many unique lines remain, giving you insight into your data quality.",
        "This tool is invaluable for email marketers cleaning subscriber lists (deduplicating emails to annoy users or get flagged as spam), developers sanitizing datasets before import, and students organizing research notes. It supports large text blocks and processes them in milliseconds.",
        "Your data stays private. The deduplication happens entirely in your browser using JavaScript, so your sensitive lists are never uploaded to any server. Get a cleaner, more organized list in just one click."
      ],
      "input_label": "Input Text List",
      "btn_remove": "Remove Duplicates",
      "btn_copy": "Copy Result",
      "btn_copied": "Copied!",
      "result_stats": "Removed {0} duplicates. {1} unique lines remaining."
    },
    "text_reverser": {
      "name": "Text Reverser",
      "description": "Reverse text or words.",
      "title": "Reverse Text Generator",
      "seo_title": "Reverse Text Online",
      "seo_content": [
        "Reverse your text instantly with our free Text Reverser tool. Flip character order, reverse words, or turn sentences backward for fun or utility. This simple tool takes your input and generates a mirrored version, which can be used for encoding messages, creating palindromes, or just for amusement.",
        "Reversing text is a common task in programming challenges and data processing. It can also be a creative way to obscure spoilers on social media or create unique usernames. Our tool handles standard text, emojis, and special characters correctly, ensuring the reversed output preserves the original content's integrity.",
        "Whether you want to verify if a phrase is a palindrome (reads the same forwards and backwards) or simply want to annoy your friends with backward messages, this tool provides an immediate solution. It's also useful for detailed proofreading, as reading backward forces you to focus on individual letters.",
        "No complex software is needed. Just type, click Reverse, and Copy. The process is instantaneous and runs entirely on your device, ensuring privacy and speed. Experience the world backwards today."
      ],
      "input_label": "Input Text",
      "btn_reverse": "Reverse",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "diff_checker": {
      "name": "Diff Checker",
      "description": "Compare two text files.",
      "title": "Text Difference Checker",
      "seo_title": "Online Diff Tool",
      "seo_content": [
        "Compare two text blocks and find the differences."
      ],
      "label_original": "Original Text",
      "label_modified": "Modified Text",
      "btn_compare": "Compare",
      "legend_removed": "Removed",
      "legend_added": "Added"
    },
    "percentage_calculator": {
      "name": "Percentage Calculator",
      "description": "Calculate percentages easily.",
      "title": "Percentage Calculator",
      "seo_title": "Free Percentage Calculator",
      "seo_content": [
        "Calculating percentages is a fundamental math skill used in daily life, from figuring out sales tax to determining a tip. Our free Online Percentage Calculator makes these calculations instant and error-free. Whether you need to find a percentage of a number, see what percent one number is of another, or calculate the percentage change between two values, this tool handles it all.",
        "The tool offers three distinct modes: 'What is X% of Y?' for finding parts of a whole, 'X is what percent of Y?' for determining ratios, and 'Percentage change' for tracking growth or decline. This versatility makes it perfect for students checking homework, shoppers calculating discounts, or business owners analyzing profit margins.",
        "Understanding percentage change is particularly useful for finance and statistics. You can easily determine if your investment grew or shrank and by how much. The interface is simple: just select your mode, enter the numbers, and click Calculate. The result appears instantly.",
        "Percentages are ubiquitous in finance, science, and everyday shopping. For example, calculating a 20% discount on a $50 item or adding a 15% tip to a restaurant bill. Our calculator simplifies these tasks. It is also helpful for calculating test scores or analyzing data trends. The clear, user-friendly design ensures you don't get lost in the numbers. We prioritize accuracy and ease of use.",
        "No more struggling with manual formulas or complex calculator keystrokes. Our tool works directly in your browser, ensuring privacy and speed. Use it for quick, accurate percentage calculations anytime, anywhere."
      ],
      "mode_1": "What is X% of Y?",
      "mode_2": "X is what percent of Y?",
      "mode_3": "Percentage change from X to Y",
      "btn_calculate": "Calculate"
    },
    "rule_of_three": {
      "name": "Rule of Three",
      "description": "Solve proportions.",
      "title": "Rule of Three Calculator",
      "seo_title": "Direct Proportion Calculator",
      "seo_content": [
        "The Rule of Three (Direct Proportion) is a powerful mathematical concept used to solve problems involving proportional relationships. If you know three values and need to find the fourth, this calculator is your solution. It's widely used in chemistry for mixing solutions, in cooking for scaling recipes, and in travel for currency conversion.",
        "For example, if 5 apples cost $2, how much do 10 apples cost? This tool solves for X instantly. It assumes a direct variation where one variable increases as the other increases. To use it, simply enter values for A, B, and C to solve for X in the equation A/B = C/X (or variations depending on structure).",
        "This educational tool is fantastic for students learning algebra and ratios. It visualizes the relationship between numbers, helping to solidify the concept of proportionality. Professionals also use it for quick estimates and conversions without setting up complex spreadsheets.",
        "Proportional reasoning is key to many real-world tasks. Engineers use it for scaling models, nurses for dosage calculations, and artists for resizing images. By automating the cross-multiplication process, we reduce the risk of calculation errors. The tool instantly updates as you type or click calculate, providing immediate feedback. Whether you are dealing with recipes, exchange rates, or map scales, this tool is your reliable companion.",
        "Our Rule of Three Calculator is fast, free, and runs entirely in your browser. It supports decimal numbers for precise calculations. Simplify your math problems today with this essential utility."
      ],
      "label_a": "Value A",
      "label_b": "Value B",
      "label_c": "Value C",
      "label_x": "Result X",
      "btn_calculate": "Calculate",
      "error_invalid": "Please enter valid numbers."
    },
    "unit_converter": {
      "name": "Unit Converter",
      "description": "Convert length, weight, etc.",
      "title": "Universal Unit Converter",
      "seo_title": "Measurement Converter",
      "seo_content": [
        "Easily convert between Metric and Imperial units with our comprehensive Unit Converter. Whether you're working on a science project, cooking a recipe from another country, or traveling abroad, this tool provides quick and accurate conversions for a wide range of measurement categories.",
        "Our converter supports Length (meters, feet, inches, miles), Weight (kilograms, pounds, ounces), Volume (liters, gallons, cups), Area (square meters, acres, hectares), Temperature (Celsius, Fahrenheit, Kelvin), Time, Speed, and Digital Storage. The intuitive interface allows you to select your category, input the value, and instantly see the equivalent in various other units.",
        "We understand the confusion that often arises from different measurement systems used globally. For instance, converting between Celsius and Fahrenheit or understanding kilometers versus miles can be tricky without a reliable tool. Our calculator eliminates the need for manual formulas and ensures precision in your calculations.",
        "Designed for students, professionals, and everyday users, this tool is completely free and works directly in your browser. No installation is required. Simplify your unit conversions and ensure accuracy in all your measurements with our Universal Unit Converter."
      ],
      "cat_length": "Length",
      "cat_weight": "Weight",
      "cat_volume": "Volume",
      "cat_area": "Area",
      "cat_temp": "Temperature",
      "cat_time": "Time",
      "cat_speed": "Speed",
      "cat_digital": "Digital",
      "label_from": "From",
      "label_to": "To"
    },
    "discount_calculator": {
      "name": "Discount Calculator",
      "description": "Calculate final price after discount.",
      "title": "Discount & Sale Calculator",
      "seo_title": "Online Discount Calculator",
      "seo_content": [
        "Everyone loves a good deal, but calculating the final price after a discount can sometimes be tricky. Our Sale & Discount Calculator helps you verify savings instantly. Whether it's 20% off for a seasonal sale or a 15% student discount, simply enter the original price and the discount percentage to see exactly how much you pay and how much you save.",
        "This tool is essential for smart shopping. Retailers often use confusing pricing strategies, like stacking discounts or 'up to' percentages. With our calculator, you can determine the real cost before you get to the checkout. It's also useful for business owners setting prices for promotions to ensure they maintain healthy margins.",
        "Beyond simple retail, this tool helps in salary negotiations (calculating net pay after tax deductions) or freelancing (determining fees). The interface is streamlined for mobile use, so you can use it right in the store aisle.",
        "Financial literacy starts with understanding where your money goes. By knowing the exact final price, you can budget better and avoid overspending. This tool handles decimal inputs for precise pricing. It is a handy utility for Black Friday shopping, clearance sales, and holiday budgeting. Don't let mental math errors cost you money; let our tool do the math for you.",
        "Stop guessing and start saving. Our calculator provides the final price and the total savings amount in clear, readable text. It's free, private, and works on any device."
      ],
      "label_price": "Original Price",
      "label_discount": "Discount (%)",
      "btn_calculate": "Calculate",
      "res_final": "Final Price",
      "res_saved": "You Save"
    },
    "salary_converter": {
      "name": "Salary Converter",
      "description": "Convert annual/monthly salary to hourly.",
      "title": "Salary to Hourly Converter",
      "seo_title": "Salary Paycheck Converter",
      "seo_content": [
        "Easily convert your salary between hourly, daily, weekly, monthly, and annual rates with our Salary Converter. Whether you're negotiating a new job offer, planning your budget, or curious about how much your time is worth per hour, this tool provides instant and accurate calculations based on your input.",
        "Understanding your compensation in different timeframes is crucial for financial planning. For example, an annual salary might sound impressive, but knowing the hourly breakdown can help you compare it with contract work or freelance rates. Similarly, seeing your daily earnings can put your spending habits into perspective. Our tool handles standard 40-hour workweeks as the default but allows for customization if needed in manual calculations.",
        "This calculator is particularly useful for freelancers and contractors who need to set their hourly rates to match a desired annual income. It's also helpful for employees comparing a salaried position with an hourly wage job. The conversion assumes a standard working year but gives you a solid baseline for comparison.",
        "We support all major periods: Hourly, Daily, Weekly, Bi-Weekly (implied), Monthly, and Annually. Simply enter your amount, select the current period, and convert to see the breakdown across all other timeframes. Use this free tool to take control of your financial understanding today."
      ],
      "label_amount": "Salary Amount",
      "label_period": "Period",
      "label_hours": "Hours per Week",
      "opt_annual": "Yearly",
      "opt_monthly": "Monthly",
      "opt_hourly": "Hourly",
      "btn_calculate": "Convert",
      "res_hourly": "Hourly",
      "res_daily": "Daily",
      "res_weekly": "Weekly",
      "res_monthly": "Monthly",
      "res_annual": "Annual"
    },
    "random_number_generator": {
      "name": "Random Number Generator",
      "description": "Pick random numbers for lottery or contests.",
      "title": "Random Number Generator",
      "seo_title": "RNG Tool",
      "seo_content": [
        "Generate random numbers within a specific range."
      ],
      "label_min": "Min",
      "label_max": "Max",
      "label_quantity": "Quantity",
      "label_unique": "No duplicates",
      "btn_generate": "Generate",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "age_calculator": {
      "name": "Age Calculator",
      "description": "Calculate exact age from date of birth.",
      "title": "Age Calculator",
      "seo_title": "Calculate Your Age",
      "seo_content": [
        "Calculating your exact age in years, months, and days can be surprisingly complex due to leap years and varying month lengths. Our precise Age Calculator does the math for you instantly. Simply enter your date of birth, and we'll tell you exactly how long you've been alive down to the day.",
        "This tool is perfect for filling out forms, planning birthdays, or satisfying curiosity. It also calculates the age difference between two dates if you need to know the duration of an event or employment. Understanding your age in different units gives a new perspective on time. See how many total weeks or days you have lived. The tool handles all calendar quirks automatically.",
        "We also provide a 'Next Birthday' countdown, letting you know exactly how many days are left until your special day. This feature is great for party planning. You can also use it to calculate the age of pets, historical figures, or even buildings. The interface is clean and date-picker friendly. We adhere to standard Gregorain calendar rules for maximum accuracy.",
        "It's fast, private, and works on mobile. No more counting on your fingers or guessing. Get your precise age statistics in seconds."
      ],
      "label_dob": "Date of Birth",
      "btn_calculate": "Calculate Age",
      "result_years": "Years",
      "result_months": "Months",
      "result_days": "Days",
      "result_summary": "You are {0} years, {1} months, and {2} days old."
    },
    "unix_timestamp": {
      "name": "Unix Timestamp",
      "description": "Convert Unix time to date.",
      "title": "Unix Timestamp Converter",
      "seo_title": "Epoch Time Converter",
      "seo_content": [
        "The Unix Timestamp (or Epoch time) is a system for describing a point in time, defined as the number of seconds that have elapsed since January 1, 1970 (UTC). It is the standard time representation for Unix-based systems and many programming languages. Our Unix Timestamp Converter bridges the gap between these raw numbers and human-readable dates.",
        "Developers often need to debug databases or logs where time is stored as a long integer. This tool allows you to paste a timestamp and instantly see the formatted date and time in your local timezone and UTC. Conversely, you can pick a specific date and get the corresponding Unix timestamp.",
        "We support both standard seconds and milliseconds formats (often used in JavaScript). The tool updates in real-time as you type, making it the fastest way to verify timestamps. Why 1970? It was chosen as an arbitrary start date for the Unix operating system. Understanding epoch time is crucial for handling time zones correctly in software development.",
        "Our tool helps eliminate off-by-one errors and timezone confusion. We also provide the current Unix timestamp live, which is useful for synchronization testing. Bookmark this page for your daily development needs. It's a client-side tool, so your data never leaves your browser. Essential for backend engineers, database administrators, and anyone working with APIs."
      ],
      "label_current": "Current Unix Time",
      "btn_copy": "Copy",
      "label_timestamp": "Timestamp",
      "label_date": "Date & Time"
    },
    "pomodoro_timer": {
      "name": "Pomodoro Timer",
      "description": "Focus timer for productivity.",
      "title": "Pomodoro Focus Timer",
      "seo_title": "Online Pomodoro Timer",
      "seo_content": [
        "Boost productivity using the Pomodoro technique. The Pomodoro Technique is a proven time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. This method trains your brain to focus for short periods and helps you stay on top of deadlines or constantly-refilling inboxes.",
        "Our tool provides a customizable timer with standard presets: 25 minutes for focus, 5 minutes for short breaks, and 15 minutes for long breaks. Visual and audio notifications ensure you never miss a transition. Whether you are studying for exams, coding a sprint, or writing a report, this timer helps maintain mental freshness.",
        "Regular breaks are essential for mental health and sustained focus. By working in bursts, you avoid burnout and fatigue. Our timer allows you to pause and resume as needed, though the technique encourages strict adherence to the clock. Customize the intervals to match your personal workflow. Use it as a study timer, a work timer, or even for meditation sessions.",
        "The layout is simple and distraction-free, designed to keep you in the flow. It runs entirely in your browser, so no app installation is needed. Take control of your time and defeat procrastination today."
      ],
      "mode_focus": "Focus",
      "mode_short": "Short Break",
      "mode_long": "Long Break",
      "btn_start": "Start",
      "btn_pause": "Pause",
      "status_running": "Running",
      "status_paused": "Paused"
    },
    "stopwatch": {
      "name": "Stopwatch",
      "description": "Online stopwatch with laps.",
      "title": "Online Stopwatch",
      "seo_title": "Accurate Stopwatch",
      "seo_content": [
        "Measure time with precision using our Online Stopwatch. Whether you are timing a run, tracking billable hours, or cooking a perfect steak, this tool offers accuracy down to the millisecond. It features a large, easy-to-read display and simple Start, Stop, and Reset controls.",
        "The Lap function allows you to record multiple split times without stopping the main timer, making it ideal for sports training or multi-stage processes. You can view a history of all your laps in a clear list. Our stopwatch runs locally in your browser, ensuring zero latency.",
        "Time is money, and accurate tracking is key to efficiency. Freelancers use it to track work sessions, teachers for classroom activities, and athletes for interval training. The clean interface works well on mobile screens, making it a portable timing solution. We also offer a dark mode for comfortable viewing in low light.",
        "Free, reliable, and accessible on any device with a browser. Replace physical stopwatches with this convenient digital solution. Experience precise timekeeping without the clutter."
      ],
      "btn_start": "Start",
      "btn_stop": "Stop",
      "th_lap": "Lap",
      "th_total": "Total Time"
    },
    "password_generator": {
      "name": "Password Generator",
      "description": "Create secure passwords.",
      "title": "Strong Password Generator",
      "seo_title": "Random Password Generator",
      "seo_content": [
        "Generate strong, random passwords to keep your accounts safe."
      ],
      "length_label": "Length",
      "opt_uppercase": "A-Z",
      "opt_numbers": "0-9",
      "opt_symbols": "!@#",
      "btn_generate": "Generate",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "hash_generator": {
      "name": "Hash Generator",
      "description": "Calculate SHA and MD5 hashes.",
      "title": "Hash Calculator",
      "seo_title": "Online Hash Generator",
      "seo_content": [
        "Secure your data with our powerful Hash Generator. A cryptographic hash function converts any input (text specifically in this tool) into a fixed-size string of bytes, typically creating a 'digest' that is unique to each unique input. This tool supports the most widely used hashing algorithms including SHA-256 (Secure Hash Algorithm), SHA-512, MD5, and SHA-1.",
        "Hash functions are the backbone of modern data security. They are used to store passwords securely (never store plain text passwords!), verify file integrity, and generate digital signatures. For example, when you download a large file, you can compare its hash to the original to ensure it wasn't corrupted or tampered with during the transfer.",
        "While MD5 is no longer considered secure for cryptographic protection against collisions, it remains useful for non-cryptographic purposes like checksums for data integrity. SHA-256 is the industry standard for security, used in SSL certificates and blockchain technologies like Bitcoin. Our tool generates these hashes instantly in your browser using JavaScript libraries.",
        "This client-side processing means your sensitive input data never travels over the network to a server, ensuring maximum privacy. Whether you are a developer testing authentication flows, a security researcher analyzing digests, or a student learning about cryptography, this tool provides quick and reliable results.",
        "Simply type your text, select the algorithm, and copy the resulting hash. It's a simple yet essential utility for anyone working with data security."
      ],
      "input_label": "Input Text",
      "btn_hash": "Calculate Hash",
      "btn_copy": "Copy",
      "btn_copied": "Copied!"
    },
    "color_converter": {
      "name": "Color Converter",
      "description": "Convert Hex to RGB.",
      "title": "HEX to RGB Converter",
      "seo_title": "Color Code Converter",
      "seo_content": [
        "Bridge the gap between design and coding with our HEX to RGB Converter. In digital design, colors are often represented in different formats depending on the context. Web designers typically use Hexadecimal (HEX) codes (like #FF5733) in CSS, while screen displays and image manipulation software often work with RGB (Red, Green, Blue) values (like rgb(255, 87, 51)).",
        "This tool allows you to convert any valid HEX color code into its RGB counterpart instantly. It also calculates the individual Red, Green, and Blue component values (0-255), helping you understand the composition of the color. We also show a live preview of the generated color so you can verify it matches your expectation.",
        "Understanding color formats is crucial for frontend development. Sometimes you need an RGB value to apply an opacity filter (rgba) which isn't possible with a standard 6-digit hex code. This converter makes that transition seamless. It handles both full 6-digit hex codes and shorthand 3-digit codes (e.g., #F00 becomes #FF0000).",
        "Whether you are tweaking a website's theme, matching colors from a brand style guide, or configuring terminal colors, this tool saves you from mental math or guessing. It's simple, fast, and completely free."
      ],
      "label_hex": "HEX Color",
      "label_rgb": "Cor RGB"
    },
    "image_converter": {
      "name": "Image Converter",
      "description": "Convert images to PNG/JPG/WebP.",
      "title": "Image Format Converter",
      "seo_title": "Free Image Converter",
      "seo_content": [
        "Transform your images instantly with our versatile Image Converter. Different platforms and use cases require different image file formats. For instance, JPEGs are great for photographs due to high compression, PNGs are essential for graphics requiring transparency, and WebP provides superior compression for modern web performance.",
        "Our tool allows you to convert images between these popular formats (PNG, JPEG, WebP) directly in your browser. Unlike other services that require you to upload your personal photos to a remote server, our converter processes files locally using your device's processing power. This ensures your images remain private and secure.",
        "To use, simply click to upload or drag and drop your image file. Select your desired output format, and the tool will handle the conversion. You can then download the new file immediately. This is perfect for web developers needing to optimize assets, designers preparing portfolios, or casual users needing to convert a file for compatibility.",
        "We support high-quality conversions that preserve the visual fidelity of your original image. The tool is lightweight and works on desktop and mobile devices alike. Simplify your workflow with this fast, secure, and free image conversion solution."
      ],
      "upload_label": "Click to upload image",
      "format_label": "Target Format",
      "btn_download": "Download Converted Image"
    },
    "image_resizer": {
      "name": "Image Resizer",
      "description": "Resize images to specific dimensions.",
      "title": "Online Image Resizer",
      "seo_title": "Free Image Resizer",
      "seo_content": [
        "Resize your images quickly and correctly with our Online Image Resizer. Managing image dimensions is critical for web aesthetics and performance. Large images slow down page load times and consume user data, while small images can look pixelated on high-resolution screens. This tool gives you control over your image's width and height.",
        "You can specify exact pixel dimensions to fit a specific layout requirement, such as a social media banner, a profile picture, or a website hero section. The tool maintains the aspect ratio by default to prevent distortion (stretching or squashing), but you can unlock this if you need custom proportions.",
        "Additionally, we offer a quality setting for output formats like JPEG and WebP, allowing you to balance file size against visual clarity. All resizing happens locally in your browser via the HTML5 Canvas API, meaning your photos are never uploaded to the cloud. This guarantees 100% privacy and blazing-fast speeds.",
        "Whether you are optimizing photos for an e-commerce store, resizing screenshots for a tutorial, or preparing headers for a blog, this tool puts professional resizing capabilities at your fingertips without the need for heavy software like Photoshop."
      ],
      "upload_label": "Click to upload image",
      "width_label": "Width (px)",
      "height_label": "Height (px)",
      "quality_label": "Quality",
      "btn_download": "Download Resized Image"
    },
    "favicon_generator": {
      "name": "Favicon Generator",
      "description": "Create .ico favicons from images.",
      "title": "Favicon Generator",
      "seo_title": "Website Favicon Maker",
      "seo_content": [
        "Create professional favicons for your website instantly with our Favicon Generator. A favicon (short for 'favorite icon') is the small image that appears in the browser tab next to your page title, in bookmarks, and in history logs. Despite its small size, it plays a huge role in brand recognition and user experience, helping users identify your site among multiple open tabs.",
        "Our tool takes any standard image file (PNG, JPG, or GIF) and converts it into the industry-standard .ico format. It automatically resizes your image to 32x32 pixels, which is the optimal size for all major browsers including Chrome, Firefox, Safari, and Edge. We handle transparency correctly, ensuring your icon looks great on both light and dark browser themes.",
        "You don't need any graphic design software to create a favicon. Simply upload your logo or a representative image, and our generator handles the technical formatting. We also ensure valid file headers so the resulting file is compatible with older browsers.",
        "Having a custom favicon adds a level of polish and professionalism to your web project. It's one of the first things a user notices. The process is entirely client-side, so your logo assets are never uploaded to a server, guaranteeing your intellectual property remains safe. Download your .ico file and drop it into your website's root directory today."
      ],
      "upload_label": "Click to upload image",
      "btn_download": "Download Favicon"
    },
    "meta_tag_generator": {
      "name": "Meta Tag Generator",
      "description": "Generate SEO meta tags.",
      "title": "SEO Meta Tag Generator",
      "seo_title": "Meta Tag Builder",
      "seo_content": [
        "Boost your website's search engine visibility with our comprehensive Meta Tag Generator. Meta tags are snippets of text that describe a page's content to search engines like Google and Bing. They don't appear on the page itself but only in the page's source code. Correctly configured meta tags are essential for SEO (Search Engine Optimization) and for controlling how your content appears when shared on social media.",
        "This tool helps you generate the most critical tags: the Title Tag (which appears in search results and browser tabs), the Meta Description (the summary snippet under the title), and Keywords (useful for some directories). We also support the Author tag.",
        "Writing these tags manually can be prone to syntax errors. Our generator ensures valid HTML output every time. It also provides a character count to help you stay within optimal limits (e.g., keeping descriptions under 160 characters to prevent truncation in search results).",
        "Simply fill in the form fields with your page details, and copy the generated code block. Paste it directly into the <head> section of your HTML document. Whether you are launching a new blog, a portfolio, or a business site, proper meta tags are the first step to getting found online. Improve your click-through rates (CTR) with optimized metadata today."
      ],
      "label_title": "Page Title",
      "label_description": "Meta Description",
      "label_keywords": "Keywords",
      "label_author": "Author",
      "btn_generate": "Generate Tags",
      "btn_copy": "Copy Code",
      "btn_copied": "Copied!"
    },
    "url_slug": {
      "name": "URL Slug Generator",
      "description": "Convert text to URL-friendly slugs.",
      "title": "URL Slug Generator",
      "seo_title": "Clean URL Slug Maker",
      "seo_content": [
        "Create clean, SEO-friendly URLs with our URL Slug Generator. A 'slug' is the part of a URL that identifies a specific page in a human-readable format, usually containing keywords separated by hyphens. For example, in the URL 'example.com/blog/my-first-post', 'my-first-post' is the slug.",
        "Search engines and users alike prefer clean URLs over messy parameters like '?id=123'. Our tool takes any text string—such as a blog post title or product name—and converts it into a valid URL slug. It automatically removes special characters, converts uppercase letters to lowercase, replaces spaces with hyphens, and eliminates accents/diacritics (e.g., 'café' becomes 'cafe').",
        "This tool is invaluable for web developers, content management system (CMS) admins, and bloggers who need to manually create permalinks. It ensures consistency and prevents broken links caused by invalid characters.",
        "Simply type or paste your title into the input box, and the clean slug appears instantly. Copy it with one click. Like all our tools, this runs entirely in your browser for speed and privacy. Optimize your URL structure for better ranking and user experience."
      ],
      "input_label": "String to convert",
      "output_label": "Clean Slug",
      "btn_copy": "Copy"
    },
    "whatsapp_link": {
      "name": "WhatsApp Link Generator",
      "description": "Create direct links to WhatsApp chats.",
      "title": "WhatsApp Link Generator",
      "seo_title": "Create WhatsApp Links",
      "seo_content": [
        "Streamline communication with your customers using our WhatsApp Link Generator. WhatsApp Click-to-Chat allows users to begin a conversation with you without having your phone number saved in their address book. This is extensively used by businesses for support, sales, and lead generation.",
        "Our tool generates a direct 'wa.me' link. You can simply enter your phone number (with country code) and an optional pre-filled message. When a user clicks the link, their WhatsApp app opens automatically with your contact selected and the message typed out in the input field, ready to send.",
        "This removes friction for the user, significantly increasing conversion rates. You can use these links in Instagram bios, email signatures, website buttons, or QR codes. The tool formats the phone number correctly by stripping non-numeric characters like dashes or parenthesis, which can break the official API link.",
        "Create links for customer support ('I need help with...'), sales inquiries ('I am interested in...'), or feedback. It works for both personal and business WhatsApp accounts. Generated links are instant, privacy-focused, and standard-compliant. Connect with your audience faster."
      ],
      "label_phone": "Phone Number",
      "label_message": "Message (Optional)",
      "btn_generate": "Generate Link",
      "btn_copy": "Copy Link",
      "btn_open": "Open Chat",
      "btn_copied": "Copied!"
    },
    "utm_builder": {
      "name": "UTM Builder",
      "description": "Build campaign URLs for tracking.",
      "title": "UTM Link Builder",
      "seo_title": "Google Analytics UTM Builder",
      "seo_content": [
        "Track the effectiveness of your marketing campaigns with our UTM Link Builder. UTM (Urchin Tracking Module) parameters are tags added to the end of a URL that allow analytics platforms like Google Analytics to track where your traffic is coming from. If you are running ads, newsletters, or social media campaigns, UTMs are essential for measuring ROI.",
        "Our builder simplifies the process of creating these complex URLs. Simply enter your website URL and fill in the campaign parameters: Source (e.g., 'google', 'newsletter'), Medium (e.g., 'cpc', 'email'), and Name (e.g., 'spring_sale'). We also support optional parameters like Term (for keywords) and Content (for A/B testing ads).",
        "The tool automatically constructs the query string with proper encoding, ensuring no syntax errors break your tracking. For example, it handles spaces and special characters correctly. You can see the result update in real-time.",
        "By using consistent UTM tags, you can segment your traffic data accurately. Understand which tweet brought the most visitors or which email button had the highest click-through rate. Copy the final URL with a single click and start tracking your success immediately. Essential for digital marketers and growth hackers."
      ],
      "label_url": "Website URL",
      "label_source": "Campaign Source",
      "label_medium": "Campaign Medium",
      "label_name": "Campaign Name",
      "label_term": "Campaign Term (Optional)",
      "label_content": "Campaign Content (Optional)",
      "btn_generate": "Build URL",
      "btn_copy": "Copy URL"
    },
    "cron_generator": {
      "name": "Cron Job Generator",
      "description": "Create cron schedule expressions.",
      "title": "Cron Job Generator",
      "seo_title": "Online Crontab Generator",
      "seo_content": [
        "Generate cron schedule expressions visually for Unix/Linux."
      ],
      "label_minute": "Minute",
      "label_hour": "Hour",
      "label_day": "Day of Month",
      "label_month": "Month",
      "label_week": "Day of Week",
      "res_expression": "Cron Expression",
      "desc_every": "Every",
      "desc_at": "At"
    },
    "pregnancy_calculator": {
      "name": "Pregnancy Calculator",
      "description": "Calculate due date based on LMP.",
      "title": "Pregnancy Due Date Calculator",
      "seo_title": "Pregnancy Calculator",
      "seo_content": [
        "Calculate your estimated due date based on your last menstrual period (LMP)."
      ],
      "label_lmp": "Last Menstrual Period (LMP)",
      "label_cycle": "Cycle Length (Days)",
      "btn_calculate": "Calculate Date",
      "res_due": "Estimated Due Date",
      "res_progress": "Current Progress"
    },
    "instagram_caption": {
      "name": "Instagram Caption Maker",
      "description": "Add invisible spaces.",
      "title": "Instagram Caption Formatter",
      "seo_title": "Instagram Caption Spacer",
      "seo_content": [
        "Format your Instagram captions with clean line breaks and invisible spaces."
      ],
      "input_label": "Write your caption",
      "btn_format": "Format and Copy",
      "btn_copied": "Copied!"
    },
    "tdee_calculator": {
      "name": "TDEE & Macro Calculator",
      "description": "Calculate calories and macros.",
      "title": "TDEE Calculator",
      "seo_title": "Total Daily Energy Expenditure",
      "seo_content": [
        "Calculate your TDEE and daily macronutrient needs based on activity level."
      ],
      "label_gender": "Gender",
      "label_age": "Age",
      "label_weight": "Weight (kg)",
      "label_height": "Height (cm)",
      "label_activity": "Activity Level",
      "opt_male": "Male",
      "opt_female": "Female",
      "opt_sedentary": "Sedentary",
      "opt_light": "Light Exercise",
      "opt_moderate": "Moderate Exercise",
      "opt_active": "Active",
      "opt_very_active": "Very Active",
      "btn_calculate": "Calculate",
      "res_tdee": "Daily Calories (Maintenance)",
      "res_bmr": "Basal Metabolic Rate (BMR)",
      "res_cutting": "Lose Weight (Cutting)",
      "res_bulking": "Gain Weight (Bulking)"
    },
    "water_intake": {
      "name": "Water Intake Calculator",
      "description": "Calculate daily water needs.",
      "title": "Water Intake Calculator",
      "seo_title": "Hydration Calculator",
      "seo_content": [
        "Calculate how much water you should drink daily based on your weight."
      ],
      "label_weight": "Weight (kg)",
      "btn_calculate": "Calculate",
      "res_amount": "Recommended Daily Intake"
    },
    "sql_formatter": {
      "name": "SQL Formatter",
      "description": "Beautify SQL queries.",
      "title": "Online SQL Formatter",
      "seo_title": "Free SQL Beautifier",
      "seo_content": [
        "Format your SQL queries for better readability."
      ],
      "input_label": "SQL Input",
      "btn_format": "Format",
      "btn_copy": "Copy"
    },
    "keycode_info": {
      "name": "Keycode Visualizer",
      "description": "View JS keycodes.",
      "title": "JS Keycode Visualizer",
      "seo_title": "Keycode Checker",
      "seo_content": [
        "Press any key to see its JavaScript event key, code, and which."
      ],
      "msg_press": "Press any key..."
    },
    "my_ip": {
      "name": "My IP Address",
      "description": "View your public IP.",
      "title": "What is my IP?",
      "seo_title": "My Public IP Address",
      "seo_content": [
        "Check your public IPv4 address instantly."
      ],
      "label_ip": "Your IP Address",
      "btn_refresh": "Refresh"
    },
    "json_to_csv": {
      "name": "JSON to CSV",
      "description": "Convert JSON arrays to CSV.",
      "title": "JSON to CSV Converter",
      "seo_title": "Convert JSON to CSV Online",
      "seo_content": [
        "Easily convert your JSON data (array of objects) to CSV format for spreadsheets."
      ],
      "input_label": "JSON Input (Array of Objects)",
      "output_label": "CSV Output",
      "btn_convert": "Convert to CSV",
      "btn_copy": "Copy CSV",
      "error_invalid": "Invalid JSON. Must be an array of objects."
    },
    "subnet_calculator": {
      "name": "Subnet Calculator",
      "description": "Calculate IPv4 subnets.",
      "title": "IPv4 Subnet Calculator",
      "seo_title": "CIDR Subnet Mask Calculator",
      "seo_content": [
        "Calculate network range, broadcast address, and host range from IP and CIDR."
      ],
      "label_ip": "IP Address",
      "label_cidr": "CIDR / Mask",
      "btn_calculate": "Calculate",
      "res_network": "Network Address",
      "res_broadcast": "Broadcast Address",
      "res_mask": "Subnet Mask",
      "res_first": "First Host",
      "res_last": "Last Host",
      "res_hosts": "Usable Hosts"
    },
    "shoe_size": {
      "name": "Shoe Size Converter",
      "description": "Convert shoe sizes.",
      "title": "Shoe Size Converter",
      "seo_title": "International Shoe Size Chart",
      "seo_content": [
        "Convert shoe sizes between US, UK, EU, and Brazilian standards."
      ],
      "label_gender": "Category",
      "opt_men": "Men",
      "opt_women": "Women",
      "label_region": "Source Region",
      "label_size": "Size",
      "res_conversions": "Conversions"
    },
    "culinary_converter": {
      "name": "Culinary Converter",
      "description": "Convert kitchen measurements.",
      "title": "Culinary Measures Converter",
      "seo_title": "Kitchen Unit Converter",
      "seo_content": [
        "Convert cups to grams, ounces to milliliters and more for recipes."
      ],
      "label_ingredient": "Ingredient",
      "label_amount": "Amount",
      "label_unit": "Unit",
      "btn_convert": "Converter",
      "res_result": "Result",
      "opt_flour": "Wheat Flour",
      "opt_sugar": "White Sugar",
      "opt_butter": "Butter",
      "opt_water": "Water / Milk",
      "opt_rice": "Rice (Raw)"
    },
    "name_picker": {
      "name": "Name Picker",
      "description": "Pick a winner from a list.",
      "title": "Random Name Picker",
      "seo_title": "Raffle and Name Picker",
      "seo_content": [
        "Pick random winners for raffles, giveaways, and contests from a list of names."
      ],
      "input_label": "Enter names (one per line)",
      "label_count": "Number of winners",
      "btn_pick": "Pick Winners",
      "btn_clear": "Clear List",
      "res_winners": "Winners",
      "err_empty": "Please enter some names."
    },
    "list_randomizer": {
      "name": "List Randomizer",
      "description": "Shuffle list items randomly.",
      "title": "Random List Shuffler",
      "seo_title": "List Order Randomizer",
      "seo_content": [
        "Randomly shuffle the order of items in a list."
      ],
      "input_label": "Input List (one per line)",
      "btn_shuffle": "Shuffle List",
      "btn_copy": "Copy List"
    },
    "list_sorter": {
      "name": "List Sorter",
      "description": "Sort lists A-Z, Z-A or length.",
      "title": "List Sorter",
      "seo_title": "Sort List Online",
      "seo_content": [
        "Sort your lists alphabetically, by length, or numerically."
      ],
      "input_label": "Input List",
      "btn_az": "A - Z",
      "btn_za": "Z - A",
      "btn_09": "0 - 9",
      "btn_90": "9 - 0",
      "btn_len": "Length",
      "btn_rev": "Reverse"
    },
    "prefix_suffix": {
      "name": "Add Prefix/Suffix",
      "description": "Add text to start/end of lines.",
      "title": "Add Prefix and Suffix",
      "seo_title": "Bulk Add Prefix Suffix",
      "seo_content": [
        "Add specific text to the beginning or end of each line in a list."
      ],
      "input_label": "Input List",
      "label_prefix": "Prefix (Start)",
      "label_suffix": "Suffix (End)",
      "btn_apply": "Apply",
      "btn_copy": "Copy"
    },
    "random_csv": {
      "name": "Random CSV Generator",
      "description": "Generate fake user data.",
      "title": "Fake Data CSV Generator",
      "seo_title": "Random CSV Data Generator",
      "seo_content": [
        "Generate random CSV data with names, emails, and ages for testing."
      ],
      "label_rows": "Number of Rows",
      "btn_generate": "Generate CSV",
      "btn_download": "Download CSV"
    },
    "week_number": {
      "name": "Week Number",
      "description": "Current week number of year.",
      "title": "What Week Is It?",
      "seo_title": "Current Week Number",
      "seo_content": [
        "Find out the current week number of the year."
      ],
      "label_current": "Current Week",
      "label_check": "Check another date",
      "res_week": "Week"
    },
    "web_encoders": {
      "name": "URL & HTML Encoder",
      "description": "Encode/Decode URL and HTML.",
      "title": "Web Encoders",
      "seo_title": "URL and HTML Entity Encoder",
      "seo_content": [
        "Securely encode and decode URLs and HTML entities."
      ],
      "tab_url": "URL",
      "tab_html": "HTML",
      "btn_encode": "Encode",
      "btn_decode": "Decode"
    },
    "reaction_time": {
      "name": "Reaction Time Test",
      "description": "Test your visual reflexes.",
      "title": "Reaction Time Test",
      "seo_title": "Human Reflex Test",
      "seo_content": [
        "Test how fast you can react to a visual stimulus."
      ],
      "state_idle": "Click to Start",
      "state_wait": "Wait for Green...",
      "state_click": "CLICK!",
      "state_result": "ms",
      "msg_too_early": "Too early! Click to try again."
    },
    "morse_code": {
      "name": "Morse Code Translator",
      "description": "Text to Morse and vice-versa.",
      "title": "Morse Code Translator",
      "seo_title": "Morse Code Converter",
      "seo_content": [
        "Translate text to Morse code and Morse code to text."
      ],
      "label_text": "Text",
      "label_morse": "Morse Code",
      "btn_play": "Play Sound"
    },
    "bmi_calculator": {
      "name": "BMI Calculator",
      "description": "Calculate Body Mass Index.",
      "title": "BMI Calculator",
      "seo_title": "Body Mass Index Calculator",
      "seo_content": [
        "Calculate your Body Mass Index (BMI) instantly with our free online calculator. BMI is a screening tool used by health professionals worldwide to identify weight categories that may lead to health problems. It is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in meters squared.",
        "Knowing your BMI is important for understanding your general health. While it does not measure body fat directly, it correlates with direct measures of body fat. Categories include Underweight (BMI < 18.5), Normal weight (18.5–24.9), Overweight (25–29.9), and Obesity (BMI of 30 or greater). Maintaining a healthy weight reduces the risk of chronic conditions such as heart disease, type 2 diabetes, and hypertension.",
        "Using our calculator is easy. Just enter your gender, weight, and height, and we will calculate your score instantly. We support both metric (kilograms/centimeters) and imperial (pounds/feet/inches) units for your convenience.",
        "Please note that BMI is a general indicator and may not be accurate for athletes with high muscle mass, elderly people, or pregnant women. Muscle weighs more than fat, so a muscular person may have a high BMI but low body fat. Always consult with a healthcare provider for a comprehensive health assessment."
      ],
      "label_weight": "Weight",
      "label_height": "Height",
      "btn_calculate": "Calculate BMI",
      "res_bmi": "Your BMI",
      "res_cat": "Category"
    },
    "loan_calculator": {
      "name": "Loan Calculator",
      "description": "Estimate monthly loan payments.",
      "title": "Loan & Mortgage Calculator",
      "seo_title": "Loan Payment Calculator",
      "seo_content": [
        "Calculate monthly payments and total interest for loans and mortgages."
      ],
      "label_amount": "Loan Amount",
      "label_rate": "Interest Rate (%)",
      "label_term": "Loan Term (Years)",
      "btn_calculate": "Calculate",
      "res_monthly": "Monthly Payment",
      "res_total": "Total Payment",
      "res_interest": "Total Interest"
    },
    "aspect_ratio": {
      "name": "Aspect Ratio Calculator",
      "description": "Calculate dimensions and ratios.",
      "title": "Aspect Ratio Calculator",
      "seo_title": "Screen Aspect Ratio Calculator",
      "seo_content": [
        "Calculate aspect ratios and image dimensions easily."
      ],
      "label_width": "Width",
      "label_height": "Height",
      "res_ratio": "Aspect Ratio",
      "mode_calc_ratio": "Find Ratio",
      "mode_calc_dim": "Find Dimension"
    },
    "box_shadow": {
      "name": "CSS Box Shadow",
      "description": "Generate CSS box-shadow code.",
      "title": "CSS Box Shadow Generator",
      "seo_title": "CSS Shadow Generator",
      "seo_content": [
        "Visually create CSS box shadows and copy the code."
      ],
      "label_x": "Horizontal Length",
      "label_y": "Vertical Length",
      "label_blur": "Blur Radius",
      "label_spread": "Spread Radius",
      "label_color": "Shadow Color",
      "label_opacity": "Opacity"
    },
    "text_to_speech": {
      "name": "Text to Speech",
      "description": "Convert text to spoken audio.",
      "title": "Text to Speech Reader",
      "seo_title": "Online TTS Reader",
      "seo_content": [
        "Convert text to speech online instantly with our free TTS reader. Simply type or paste your text into the box, select a voice, and click Play to listen. Our tool leverages the advanced speech synthesis capabilities built into your modern web browser to provide high-quality, natural-sounding voices without the need for expensive software or heavy downloads.",
        "This tool is perfect for a variety of use cases. Writers and students can use it to proofread their work by listening to it, which often helps catch errors that eager eyes might miss. Language learners can use it to practice pronunciation by listening to native-sounding voices in different languages (depending on your device's installed voices). It is also a vital accessibility tool for those with visual impairments or reading difficulties.",
        "We support all voices installed on your operating system and browser, giving you a wide range of options including different accents and genders. You can easily switch between voices to find the one that best suits your needs. The interface is clean, distraction-free, and designed for ease of use.",
        "Your privacy is respected; the text process happens locally within your browser in most modern implementations, ensuring your data isn't sent to a server for processing. Experience the convenience of converting written text to spoken audio today."
      ],
      "label_text": "Enter Text",
      "label_voice": "Select Voice",
      "btn_play": "Play",
      "btn_stop": "Stop"
    },
    "password_strength": {
      "name": "Password Strength",
      "description": "Check password complexity.",
      "title": "Password Strength Checker",
      "seo_title": "Test Password Strength",
      "seo_content": [
        "Evaluate the strength and entropy of your password."
      ],
      "label_pass": "Enter Password",
      "res_score": "Score",
      "res_feedback": "Feedback"
    },
    "grade_calculator": {
      "name": "Grade Calculator",
      "description": "Calculate weighted average grade.",
      "title": "Grade & GPA Calculator",
      "seo_title": "Weighted Average Grade Calculator",
      "seo_content": [
        "Calculate your weighted average grade or GPA easily."
      ],
      "col_grade": "Grade",
      "col_weight": "Weight",
      "btn_add": "Add Row",
      "btn_calculate": "Calculate",
      "res_avg": "Average"
    },
    "youtube_thumbnail": {
      "name": "YouTube Thumbnails",
      "description": "Download video thumbnails.",
      "title": "YouTube Thumbnail Downloader",
      "seo_title": "Download YouTube Thumbnails HD",
      "seo_content": [
        "View and download high-quality thumbnails from any YouTube video."
      ],
      "label_url": "YouTube Video URL",
      "btn_get": "Get Thumbnails",
      "btn_download": "Download"
    },
    "ppi_calculator": {
      "name": "PPI Calculator",
      "description": "Calculate pixel density.",
      "title": "PPI Calculator (Pixels Per Inch)",
      "seo_title": "Screen Density Calculator",
      "seo_content": [
        "Calculate the PPI (Pixels Per Inch) of screens based on resolution and size."
      ],
      "label_width": "Width (px)",
      "label_height": "Altura (px)",
      "label_diagonal": "Diagonal (inch)",
      "btn_calculate": "Calculate",
      "res_ppi": "PPI",
      "res_total": "Total Pixels"
    },
    "compound_interest": {
      "name": "Compound Interest",
      "description": "Calculate investment growth.",
      "title": "Compound Interest Calculator",
      "seo_title": "Investment & Interest Calculator",
      "seo_content": [
        "Calculate how your investments grow over time with compound interest."
      ],
      "label_principal": "Initial Investment",
      "label_monthly": "Monthly Contribution",
      "label_rate": "Annual Interest Rate (%)",
      "label_years": "Time (Years)",
      "btn_calculate": "Calculate",
      "res_total": "Total Value",
      "res_interest": "Total Interest"
    },
    "coin_flip": {
      "name": "Coin Flip",
      "description": "Flip a virtual coin.",
      "title": "Flip a Coin Online",
      "seo_title": "Heads or Tails Generator",
      "seo_content": [
        "Flip a virtual coin to make a quick decision. Heads or tails?"
      ],
      "btn_flip": "Flip Coin",
      "val_heads": "Heads",
      "val_tails": "Tails",
      "stats_heads": "Heads",
      "stats_tails": "Tails"
    },
    "chmod_calculator": {
      "name": "Chmod Calculator",
      "description": "Generate Linux file permissions.",
      "title": "Chmod Calculator",
      "seo_title": "Linux Permissions Generator",
      "seo_content": [
        "Generate symbolic and octal chmod permissions visually."
      ],
      "label_owner": "Owner",
      "label_group": "Group",
      "label_public": "Public",
      "opt_read": "Read (4)",
      "opt_write": "Write (2)",
      "opt_exec": "Execute (1)",
      "res_octal": "Octal",
      "res_symbolic": "Symbolic"
    },
    "cpf_generator": {
      "name": "CPF Generator",
      "description": "Generate and Validate CPF (Brazil).",
      "title": "CPF Generator & Validator",
      "seo_title": "CPF Generator Online",
      "seo_content": [
        "Generate valid CPFs for software testing purposes (Dev Tools)."
      ],
      "btn_generate": "Generate CPF",
      "btn_format": "Format",
      "label_cpf": "CPF"
    },
    "abnt_generator": {
      "name": "ABNT Generator",
      "description": "Format citations (ABNT standard).",
      "title": "ABNT Reference Generator",
      "seo_title": "Online ABNT Reference Maker",
      "seo_content": [
        "Create bibliographic references for books in ABNT format."
      ],
      "label_author_first": "Author First Name",
      "label_author_last": "Author Last Name",
      "label_title": "Title",
      "label_city": "City",
      "label_publisher": "Publisher",
      "label_year": "Year",
      "btn_generate": "Generate Reference",
      "res_reference": "Reference"
    },
    "roi_calculator": {
      "name": "ROI Calculator",
      "description": "Return on Investment calculator.",
      "title": "ROI Calculator",
      "seo_title": "Return on Investment Calculator",
      "seo_content": [
        "Calculate the ROI percentage of an investment."
      ],
      "label_invested": "Amount Invested",
      "label_returned": "Amount Returned",
      "btn_calculate": "Calculate ROI",
      "res_roi": "ROI"
    },
    "scoreboard": {
      "name": "Online Scoreboard",
      "description": "Keep track of scores.",
      "title": "Simple Online Scoreboard",
      "seo_title": "Scoreboard Counter",
      "seo_content": [
        "Track scores for games and sports with this simple online scoreboard."
      ],
      "team_a": "Team A",
      "team_b": "Team B",
      "btn_reset": "Reset"
    },
    "dead_pixel": {
      "name": "Dead Pixel Test",
      "description": "Check screen for dead pixels.",
      "title": "Dead Pixel Check",
      "seo_title": "Screen Dead Pixel Test",
      "seo_content": [
        "Flash solid colors on your screen to find dead or stuck pixels."
      ],
      "msg_start": "Click to Start Test",
      "msg_instruct": "Click to change color. Press ESC to exit."
    },
    "reading_planner": {
      "name": "Reading Planner",
      "description": "Plan your reading schedule.",
      "title": "Book Reading Planner",
      "seo_title": "Reading Time Calculator",
      "seo_content": [
        "Calculate how many pages you need to read per day to finish a book."
      ],
      "label_pages": "Total Pages",
      "label_days": "Days to Finish",
      "btn_calculate": "Calculate",
      "res_daily": "Pages per Day"
    },
    "bitrate_calculator": {
      "name": "Bitrate Calculator",
      "description": "Estimate video bitrate and size.",
      "title": "Video Bitrate Calculator",
      "seo_title": "Video Bitrate & File Size Calculator",
      "seo_content": [
        "Calculate the bitrate required for a target video file size or duration."
      ],
      "label_hours": "Hours",
      "label_minutes": "Minutes",
      "label_seconds": "Seconds",
      "label_size": "Target Size (GB)",
      "label_bitrate": "Result Bitrate (Mbps)",
      "btn_calculate": "Calculate"
    },
    "text_summarizer": {
      "name": "Text Summarizer",
      "description": "Summarize text automatically.",
      "title": "Auto Text Summarizer",
      "seo_title": "Free Text Summarizer",
      "seo_content": [
        "Automatically summarize long articles or text blocks into key sentences."
      ],
      "input_label": "Paste Text",
      "range_label": "Summary Length",
      "btn_summarize": "Summarize",
      "res_summary": "Summary"
    },
    "youtube_tags": {
      "name": "YouTube Tags",
      "description": "Generate video tags.",
      "title": "YouTube Tag Generator",
      "seo_title": "SEO Tags for YouTube",
      "seo_content": [
        "Generate SEO-optimized tags for your YouTube videos from a keyword."
      ],
      "input_label": "Main Keyword",
      "btn_generate": "Generate Tags",
      "res_tags": "Tags"
    },
    "tip_calculator": {
      "name": "Tip Calculator",
      "description": "Calculate tip per person.",
      "title": "Tip Calculator",
      "seo_title": "Gratuity & Tip Calculator",
      "seo_content": [
        "Calculate tips and split the bill among friends easily."
      ],
      "label_bill": "Bill Amount",
      "label_tip": "Tip %",
      "label_people": "Number of People",
      "btn_calculate": "Calculate",
      "res_tip": "Tip Amount",
      "res_total": "Total Bill",
      "res_per_person": "Per Person"
    },
    "fantasy_name": {
      "name": "Fantasy Name Gen",
      "description": "Generate RPG names.",
      "title": "Fantasy Name Generator",
      "seo_title": "Random RPG Name Generator",
      "seo_content": [
        "Generate epic fantasy names for your games and stories."
      ],
      "label_race": "Race / Type",
      "label_qty": "Quantity",
      "label_gender": "Gender",
      "opt_human": "Human",
      "opt_elf": "Elf",
      "opt_dwarf": "Dwarf",
      "opt_orc": "Orc",
      "opt_place": "Place / Kingdom",
      "opt_classic": "Classic (Adj + Noun)",
      "opt_scifi": "Sci-Fi / Cyberpunk",
      "opt_villain": "Villain / Evil",
      "opt_tavern": "Tavern / Inn",
      "opt_any": "Any",
      "opt_male": "Male",
      "opt_female": "Female",
      "btn_generate": "Generate Names",
      "btn_copy_all": "Copy All",
      "res_name": "Generated Names"
    },
    "raid_calculator": {
      "name": "RAID Calculator",
      "description": "Calculate RAID capacity.",
      "title": "RAID Calculator",
      "seo_title": "RAID Capacity Calculator",
      "seo_content": [
        "Calculate usable capacity and fault tolerance for RAID 0, 1, 5, 6, 10."
      ],
      "label_disk_size": "Disk Size (TB)",
      "label_disk_count": "Number of Disks",
      "label_raid_type": "RAID Type",
      "res_capacity": "Usable Capacity",
      "res_fault": "Fault Tolerance"
    },
    "yaml_json": {
      "name": "YAML <-> JSON",
      "description": "Convert between YAML and JSON.",
      "title": "YAML / JSON Converter",
      "seo_title": "YAML to JSON Online",
      "seo_content": [
        "Convert YAML data to JSON and vice-versa instantly."
      ],
      "btn_to_json": "To JSON",
      "btn_to_yaml": "To YAML",
      "error_invalid": "Invalid Input"
    },
    "jwt_decoder": {
      "name": "JWT Decoder",
      "description": "Decode JSON Web Tokens.",
      "title": "JWT Debugger",
      "seo_title": "JWT Decoder Online",
      "seo_content": [
        "Decode JWT tokens to view the header and payload claims."
      ],
      "label_token": "Encoded Token",
      "label_header": "Header",
      "label_payload": "Payload",
      "error_invalid": "Invalid Token"
    },
    "luhn_validator": {
      "name": "Luhn Validator",
      "description": "Validate numbers (IMEI, CC).",
      "title": "Luhn Algorithm Checker",
      "seo_title": "Credit Card Validator (Luhn)",
      "seo_content": [
        "Validate credit card numbers, IMEIs, and other identifiers using the Luhn algorithm."
      ],
      "label_input": "Number to Check",
      "btn_validate": "Validate",
      "res_valid": "Valid (Pass)",
      "res_invalid": "Invalid (Fail)"
    },
    "metronome": {
      "name": "Metronome",
      "description": "Keep the beat.",
      "title": "Online Metronome",
      "seo_title": "Free Online Metronome",
      "seo_content": [
        "A precise metronome for musicians. Set BPM and play."
      ],
      "label_bpm": "BPM",
      "btn_start": "Start",
      "btn_stop": "Stop"
    },
    "color_palette": {
      "name": "Color Palette",
      "description": "Generate color harmonies.",
      "title": "Color Palette Generator",
      "seo_title": "Color Scheme Generator",
      "seo_content": [
        "Create complementary, analogous, and triadic color schemes."
      ],
      "label_base": "Base Color",
      "sec_complementary": "Complementary",
      "sec_analogous": "Analogous",
      "sec_triadic": "Triádicas"
    },
    "time_converter": {
      "name": "Time Converter",
      "description": "Compare time zones.",
      "title": "World Time Converter",
      "seo_title": "Time Zone Converter",
      "seo_content": [
        "Convert time across major world time zones."
      ],
      "label_local": "Your Local Time",
      "col_zone": "Zone",
      "col_time": "Time",
      "col_date": "Date"
    },
    "regex_tester": {
      "name": "Regex Tester",
      "description": "Test regular expressions.",
      "title": "Online Regex Tester",
      "seo_title": "Javascript Regex Tester",
      "seo_content": [
        "Test your Regular Expressions (Regex) against text in real-time."
      ],
      "label_pattern": "Pattern",
      "label_text": "Test String",
      "label_flags": "Flags",
      "res_match": "Match Found",
      "res_no_match": "No Match"
    },
    "roman_numeral": {
      "name": "Roman Converter",
      "description": "Convert Roman numerals.",
      "title": "Roman Numeral Converter",
      "seo_title": "Roman to Decimal Converter",
      "seo_content": [
        "Convert Roman numerals to numbers and numbers to Roman numerals."
      ],
      "label_input": "Enter Number or Roman",
      "res_result": "Result"
    },
    "memo_pad": {
      "name": "Memo Pad",
      "description": "Auto-saving notepad.",
      "title": "Online Memo Pad",
      "seo_title": "Simple Online Notepad",
      "seo_content": [
        "A simple scratchpad that automatically saves your notes to your browser."
      ],
      "placeholder": "Type here... content is saved automatically.",
      "btn_clear": "Clear"
    },
    "glassmorphism": {
      "name": "Glassmorphism",
      "description": "Generate CSS glass effect.",
      "title": "Glassmorphism Generator",
      "seo_title": "CSS Glass Effect Generator",
      "seo_content": [
        "Create modern CSS glassmorphism effects for your UI."
      ],
      "label_blur": "Blur",
      "label_transparency": "Transparency",
      "label_color": "Color"
    },
    "keyword_density": {
      "name": "Keyword Density",
      "description": "Analyze word frequency.",
      "title": "Keyword Density Checker",
      "seo_title": "SEO Keyword Density Tool",
      "seo_content": [
        "Check the frequency and density of keywords in your text."
      ],
      "input_label": "Paste Text",
      "col_word": "Word",
      "col_count": "Count",
      "col_density": "Density"
    },
    "image_filters": {
      "name": "Image Filters",
      "description": "Apply CSS filters to images.",
      "title": "Online Image Filters",
      "seo_title": "CSS Image Filter Generator",
      "seo_content": [
        "Apply CSS filters like grayscale, sepia, blur, and brightness to images."
      ],
      "upload_label": "Upload Image",
      "label_grayscale": "Grayscale",
      "label_sepia": "Sepia",
      "label_blur": "Blur",
      "label_brightness": "Brightness",
      "label_contrast": "Contraste"
    },
    "decision_wheel": {
      "name": "Decision Wheel",
      "description": "Spin the wheel to decide.",
      "title": "Decision Wheel (Wheel of Fortune)",
      "seo_title": "Random Decision Wheel Online",
      "seo_content": [
        "Can't decide? Enter your options and spin the wheel to pick a random winner."
      ],
      "label_input": "Options (one per line)",
      "btn_spin": "Spin!",
      "res_winner": "Winner:"
    },
    "spin_bottle": {
      "name": "Spin the Bottle",
      "description": "Virtual bottle spin game.",
      "title": "Spin the Bottle Online",
      "seo_title": "Online Spin the Bottle Game",
      "seo_content": [
        "A virtual version of the classic party game Spin the Bottle. Play with friends online."
      ],
      "btn_spin": "Spin!",
      "label_players": "Players (Optional)",
      "placeholder_players": "Enter names (one per line)...",
      "res_winner": "It points to:",
      "mode_classic": "Classic (Bottle Only)",
      "mode_players": "With Players",
      "btn_truth": "Truth",
      "btn_dare": "Dare",
      "title_truth": "Truth",
      "title_dare": "Dare",
      "tab_game": "Game",
      "tab_settings": "Settings",
      "label_custom": "Custom Questions (One per line)",
      "placeholder_truth": "Custom Truth 1\nCustom Truth 2",
      "placeholder_dare": "Custom Dare 1\nCustom Dare 2",
      "btn_share": "Share",
      "msg_copied": "Link Copied!"
    },
    "pet_name": {
      "name": "Pet Name Generator",
      "description": "Find the perfect name for your pet.",
      "title": "Pet Name Generator",
      "seo_title": "Cute & Cool Pet Name Generator",
      "seo_content": [
        "Generate hundreds of name ideas for dogs, cats, birds, and more. Filter by gender, theme, and species."
      ],
      "label_species": "Species",
      "label_gender": "Gender",
      "label_theme": "Theme",
      "label_letter": "Starts With (Optional)",
      "btn_generate": "Generate Names",
      "btn_favorites": "Copy Favorites",
      "species_dog": "Dog",
      "species_cat": "Cat",
      "species_bird": "Bird",
      "species_reptile": "Reptile",
      "species_small": "Small Pet",
      "species_any": "Any",
      "gender_male": "Male",
      "gender_female": "Female",
      "gender_any": "Any / Unisex",
      "theme_classic": "Classic",
      "theme_food": "Food & Drink",
      "theme_geek": "Geek / Nerd",
      "theme_nature": "Nature",
      "theme_myth": "Mythical",
      "theme_funny": "Funny",
      "theme_tough": "Tough",
      "theme_cute": "Cute",
      "msg_select": "Select names to save them below",
      "sec_results": "Results",
      "sec_favorites": "Favorites"
    },
    "baby_name": {
      "name": "Baby Name Generator",
      "description": "Find meaningful names for your baby.",
      "title": "Baby Name Generator",
      "seo_title": "Unique & Popular Baby Name Generator",
      "seo_content": [
        "Choosing a name for your baby is one of the most exciting and significant parts of expecting a child. Our Baby Name Generator helps you discover the perfect name by exploring thousands of options from diverse origins and styles. Whether you are looking for a traditional biblical name, a modern trendy moniker, or a unique gem from nature, this tool provides endless inspiration.",
        "Our database is curated with care, tagging names by gender (Boy, Girl, Neutral), origin (English, Latin, Greek, Hebrew, etc.), and style (Classic, Modern, Rare, Short). You can filter specifically for what you want or use the 'Surprise Me' button to let fate decide. Finding a name that sounds good and has a meaningful background is important.",
        "We provide the origin of each name to help you make an informed choice. You can create a shortlist of your favorites by clicking the heart icon, and then copy them all to discuss with your partner. The interface is designed to be joyful and easy to use. No signup is required, and your favorites valid for the session.",
        "Names carry identity and heritage. Some parents prefer names that honor their ancestry, while others look for something fresh and distinct. Our tool accommodates all preferences. We also include a 'Starts With' filter if you have a specific letter in mind, perhaps to match a sibling's name or a family tradition. The generator produces random sets based on your criteria, ensuring you see a wide variety of options you might not have considered otherwise. Enjoy the process of discovery!",
        "Start your naming journey today with our comprehensive Baby Name Generator. It is the perfect companion for parents-to-be who want to explore a world of names without turning pages in a massive book."
      ],
      "label_origin": "Origin",
      "label_gender": "Gender",
      "label_style": "Style",
      "label_letter": "Starts With (Optional)",
      "btn_generate": "Find Names",
      "btn_surprise": "Surprise Me!",
      "btn_favorites": "Copy Favorites",
      "gender_boy": "Boy",
      "gender_girl": "Girl",
      "gender_neutral": "Neutral / Unisex",
      "origin_any": "Any Origin",
      "origin_biblical": "Biblical / Hebrew",
      "origin_english": "English / US",
      "origin_latin": "Latin / Romance",
      "origin_germanic": "Germanic",
      "origin_greek": "Greek",
      "origin_nature": "Nature / Earth",
      "style_any": "Any Style",
      "style_modern": "Modern / Trendy",
      "style_classic": "Classic / Timeless",
      "style_rare": "Rare / Unique",
      "style_short": "Short & Sweet",
      "sec_results": "Suggestions",
      "sec_favorites": "Your Shortlist",
      "msg_select": "Click the heart to save names to your list."
    },
    "business_name": {
      "name": "Business Name Generator",
      "description": "Create catchy business names.",
      "title": "Business Name Generator",
      "seo_title": "Free Business & Startup Name Generator",
      "seo_content": [
        "Generate creative, modern, and catchy names for your startup or company. Check domain availability instantly."
      ],
      "label_keywords": "Enter Keywords (e.g. Tech, Food)",
      "label_industry": "Industry",
      "label_style": "Name Style",
      "btn_generate": "Generate Names",
      "btn_favorites": "Copy Favorites",
      "ind_tech": "Technology / Startup",
      "ind_creative": "Creative / Design",
      "ind_services": "Services / Consulting",
      "ind_food": "Food / Restaurant",
      "ind_fashion": "Fashion / Beauty",
      "ind_finance": "Finance / Legal",
      "ind_health": "Health / Wellness",
      "ind_any": "General / Any",
      "style_modern": "Modern & Trendy",
      "style_classic": "Classic & Corporate",
      "style_short": "Short & Punchy",
      "style_compound": "Compound Words",
      "sec_results": "Ideas",
      "sec_favorites": "Shortlist",
      "msg_hint": "Tip: Click names to favorite them.",
      "domain_avail": "Available?",
      "check_domain": "Check Domain"
    }
  }
};
