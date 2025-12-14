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
        "Compare text files and find differences instantly with our online Diff Checker. Whether you're a developer reviewing code changes, a writer editing drafts, or a student comparing notes, this tool highlights additions, deletions, and modifications side-by-side. It visualizes changes with clear color coding—red for removals and green for additions—making it easy to spot even the smallest alterations.",
        "Paste your original text in the left panel and the modified text in the right panel. The tool automatically computes the differences and displays them in a unified or split view. It is particularly useful for debugging code, checking for plagiarism, or tracking version history in documents.",
        "This tool runs entirely in your browser using efficient algorithms to process large blocks of text quickly. No data is sent to any server, ensuring the privacy of your sensitive documents or proprietary code. Spot the difference in seconds and save hours of manual review.",
        "Perfect for quick comparisons without needing to install complex IDE plugins or command-line tools. Streamline your review process today."
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
        "Generate true random numbers instantly with our flexible Random Number Generator. Whether you need to pick a lottery winner, determine the order of speakers in a meeting, or generate test data for software development, this tool provides unbiased and unpredictable results.",
        "You can specify a custom range by setting the Minimum and Maximum values (e.g., between 1 and 100). You also have control over the quantity of numbers to generate at once. Need 5 unique numbers for a raffle? Simply toggle the 'No duplicates' option to ensure every number in the set is distinct.",
        "Our tool uses cryptographically strong randomness ensuring fairness for contests and scientific sampling. The results are displayed clearly and can be copied to your clipboard with a single click.",
        "This utility works offline and is completely free. From simple games of chance to complex statistical sampling, reliable randomness is just a click away."
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
        "Create complex Cron schedule expressions easily with our visual Cron Job Generator. Cron is a time-based job scheduler in Unix-like computer operating systems, used to schedule commands or scripts to run periodically at fixed times, dates, or intervals. Writing the correct syntax (e.g., '0 5 * * 1') can be confusing and error-prone.",
        "Our intuitive interface allows you to select minutes, hours, days, months, and weekdays through simple dropdowns and checklists. You can configure jobs to run every minute, every hour, daily at a specific time, or on specific days of the week. The tool instantly generates the corresponding Cron expression string.",
        "We also explain what your expression means in plain English (e.g., 'At 04:05 on Monday'). This helps verify that your schedule matches your intent before you deploy it to your server's crontab.",
        "Perfect for system administrators, developers, and DevOps engineers. Eliminate syntax errors and ensure your backups, updates, and maintenance scripts run exactly when they are supposed to."
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
        "Calculate your estimated due date (EDD) quickly and accurately with our Pregnancy Calculator. Knowing your due date is the first step in planning for your baby's arrival. This tool uses the standard medical method (Naegele's rule) based on your Last Menstrual Period (LMP) and the average cycle length to estimate when your baby will be born.",
        "Simply enter the first day of your last period and your usual cycle length (defaults to 28 days). The calculator will not only provide your estimated due date but also show your current progress in weeks and days, effectively acting as a pregnancy week-by-week tracker. It highlights which trimester you are currently in.",
        "While only about 5% of babies are born on their exact due date, this estimate helps you schedule prenatal appointments, plan your maternity leave, and prepare your home. The gestation period is typically 40 weeks or 280 days. Our tool makes the math simple and instant.",
        "This tool provides a timeline for your pregnancy journey. Whether you are just hoping to conceive or are already expecting, having a clear date in mind makes the experience more real. Track your semesters and watch the weeks go by as you prepare for your new family member."
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
        "Create clean, readable Instagram captions with our Instagram Caption Spacer. Have you ever typed a long, thoughtful caption on Instagram only to have all your formatting disappear when you post? Instagram often collapses line breaks, determining them as unnecessary whitespace, which results in a wall of text that is hard to read.",
        "Our tool solves this problem by inserting invisible characters (Braille Pattern Blank U+2800) into your empty lines. These characters act as placeholders, forcing Instagram to respect your formatting and keep your paragraphs separated. This is essential for influencers, brands, and anyone who wants their posts to look professional.",
        "To use it, simply type or paste your caption into the text box, adding new lines where you want them. Click 'Format and Copy', and the tool will process your text and copy it to your clipboard. Then, just paste it directly into Instagram. No more using dots or dashes to separate paragraphs.",
        "Readable captions increase engagement. Use this tool to tell better stories, structure your hashtags properly, and keep your audience reading to the end."
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
        "Optimize your nutrition plan with our comprehensive TDEE Calculator. TDEE stands for Total Daily Energy Expenditure, which is the total number of calories your body burns in a day. It combines your Basal Metabolic Rate (BMR) — the calories you burn at rest — with the calories burned through physical activity and the thermic effect of food.",
        "Whether your goal is weight loss, muscle gain, or maintenance, knowing your TDEE is crucial. This calculator estimates your daily caloric needs based on your gender, age, weight, height, and activity level. It then provides specific calorie targets for 'Cutting' (losing weight), 'Bulking' (gaining muscle), and 'Maintenance'.",
        "Understanding your energy balance allows you to make informed decisions about your diet. We use the Mifflin-St Jeor equation, widely considered the most accurate standard formula. The results include a breakdown of macronutrients (protein, fats, and carbohydrates) to help you structure your meals effectively.",
        "Stop guessing and start tracking. Achieving your fitness goals requires consistency and accuracy. Use this free tool as a starting point for your health journey."
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
        "Stay hydrated and healthy with our Water Intake Calculator. Water is essential for every cell in your body. It regulates body temperature, keeps joints lubricated, prevents infections, and delivers nutrients to cells. But how much should you actually drink? The old '8 glasses a day' rule is a good start, but individual needs vary based on body weight.",
        "This tool calculates a personalized daily water intake recommendation based on your weight. It uses the general guideline that a person should drink roughly 30-35ml of water per kg of body weight (or about 0.5 ounces per pound). Staying properly hydrated improves energy levels, brain function, and skin health.",
        "Dehydration can lead to fatigue, headaches, and confusion. Use this calculator to set a daily goal for yourself. Remember to increase your intake if you are exercising heavily, living in a hot climate, or are pregnant/breastfeeding.",
        "Enter your weight in kilograms to get your recommended liters per day. Ideally, spread this intake throughout the day rather than drinking it all at once. Make hydration a habit with this simple utility."
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
        "Format your SQL queries for better readability with our free Online SQL Formatter. Structured Query Language (SQL) is the standard for managing relational databases, but complex queries can quickly become unreadable blocks of text. Our tool automatically indents, spaces, and capitalizes your code to make it clean and understandable.",
        "Whether you are debugging a stored procedure, optimizing a join, or reviewing code from a colleague, proper formatting is essential. This tool supports various SQL dialects including MySQL, PostgreSQL, SQL Server, and Oracle. It highlights keywords and structures nested logic visually.",
        "Readable code prevents errors. By clearly seeing the structure of your WHERE clauses and JOIN conditions, you can spot mistakes faster. The formatter runs instantly in your browser, so you don't need to install heavy database management software just to beautify a script.",
        "Simply paste your raw SQL into the editor and click Format. You can then copy the optimized code back to your IDE or database client. Improve your database workflow today."
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
        "Discover the JavaScript key codes for any key on your keyboard with our JS Keycode Visualizer. When developing web applications that handle keyboard events (like games or accessibility features), developers need to know the specific 'event.key', 'event.code', and deprecated 'event.which' values.",
        "Simply press any key on your physical keyboard, and the tool will instantly display all relevant event data. It captures modifiers (Shift, Ctrl, Alt) and works with special keys like Enter, Escape, and Arrow keys. This interactive tool eliminates the need to console.log events manually.",
        "Understanding the difference between 'code' (physical key position) and 'key' (actual character value) is crucial for cross-layout compatibility. For example, the 'Q' key on a QWERTY keyboard might returning a different value on AZERTY layouts depending on which property you check.",
        "This tool is a quick reference for frontend developers. It requires no setup and provides instant feedback. Bookmark it for your next keyboard-driven project."
      ],
      "msg_press": "Press any key..."
    },
    "my_ip": {
      "name": "My IP Address",
      "description": "View your public IP.",
      "title": "What is my IP?",
      "seo_title": "My Public IP Address",
      "seo_content": [
        "Check your public IPv4 address instantly with our 'What is my IP' tool. Your IP (Internet Protocol) address is a unique numerical label assigned to each device connected to the internet. It works like a digital return address, allowing servers to send data back to you.",
        "This tool is essential for network troubleshooting. If you are setting up a home server, whitelisting your connection in a firewall, or configuring remote access, you need to know your public-facing IP. We also display basic location estimates based on the IP address provider.",
        "We prioritize speed and privacy. The lookup is performed immediately when you load the page. Unlike complex network diagnostic suites, this tool answers the simple question 'What is my IP?' without clutter.",
        "Note that this shows your public IP assigned by your ISP, not your local network IP (like 192.168.x.x). If you are behind a VPN or proxy, the tool will show that secure address instead."
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
        "Convert your JSON data into CSV format instantly with our JSON to CSV Converter. JSON (JavaScript Object Notation) is the language of APIs, while CSV (Comma Separated Values) is the standard for spreadsheets like Excel and Google Sheets. Bridging these two worlds is often necessary for data analysis and reporting.",
        "Simply paste an array of JSON objects (e.g., [{'name': 'John'}, {'name': 'Jane'}]) into the input box. Our tool automatically detects the keys (headers) and formats the values into rows and columns. It handles nested structures by flattening them or skipping complex objects depending on depth.",
        "This tool is perfect for developers needing to export database dumps to Excel for business teams, or for data scientists cleaning up datasets. It saves hours of manual copy-pasting and formatting.",
        "The conversion happens entirely in your browser using JavaScript. Your sensitive data is never uploaded to an external server, ensuring complete privacy. Download the resulting CSV file or copy it directly to your clipboard."
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
        "Calculate network parameters accurately with our IPv4 Subnet Calculator. Whether you are a network engineer planning a new infrastructure or a student learning about CIDR (Classless Inter-Domain Routing), this tool simplifies the complex math of IP subnetting.",
        "Enter an IP address and select the subnet mask (CIDR suffix, e.g., /24). The calculator instantly provides the Network Address, Broadcast Address, Subnet Mask, First Usable Host, Last Usable Host, and the Total Number of Usable Hosts. It clarifies the range of your network segment.",
        "Understanding subnets is critical for security and network performance. Segmenting a network reduces broadcast traffic and allows for better access control policies. This tool prevents common calculation errors that could lead to IP conflicts or routing issues.",
        "Visualizing the binary representation of the mask can also help in understanding how bits are borrowed for subnets vs. hosts. This utility is fast, client-side, and an essential companion for anyone working with TCP/IP networks."
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
        "Easily convert shoe sizes between United States, United Kingdom, European, and Brazilian standards. Shopping for shoes online can be frustrating when brands use different sizing conventions. A US size 10 is not the same as a UK size 10, and European sizes are a completely different number system. Our converter attempts to bridge this gap.",
        "Select your gender category (Men or Women) to get the most accurate conversion, as men's and women's scales often differ, particularly in US sizes. Simply select your known region and size, and we will automatically display the equivalent size for other regions. It is a quick reference tool for anyone buying footwear globally.",
        "Please note that shoe sizing can vary slightly between manufacturers (e.g., Nike vs. Adidas). This tool uses the most common international conversion charts. If you are between sizes, it is generally recommended to size up for comfort.",
        "Whether you are traveling, buying a gift, or shopping from an international retailer, ensure you get the right fit with our Universal Shoe Size Converter."
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
        "Convert kitchen measurements with ease using our Culinary Converter. Recipes from different parts of the world often use different units—cups versus grams, ounces versus milliliters. Baking, in particular, requires precise measurements. Converting '1 cup of flour' to grams isn't straightforward because different ingredients have different densities.",
        "Our tool handles specific ingredient conversions. A cup of sugar weighs differently than a cup of flour or a cup of butter. Select your ingredient type to get accurate weight-to-volume conversions. We support common units like cups, tablespoons, teaspoons, grams, kilograms, ounces, and milliliters.",
        "This tool is indispensable for home cooks trying out international recipes. Stop guessing if your cake will rise properly. Convert your measurements instantly and cook with confidence.",
        "Works offline and is mobile-friendly, so you can keep it open on your phone right next to your cutting board. Simplify your cooking process today."
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
      "seo_title": "Raffle and Random Name Picker",
      "seo_content": [
        "Pick random winners for raffles, giveaways, or contests instantly with our Random Name Picker. Whether you are a teacher selecting a student to answer a question, a manager assigning tasks, or an influencer hosting a social media giveaway, this tool ensures a fair and unbiased result.",
        "Simply paste your list of names (or items) into the text area, one per line. You can enter hundreds or even thousands of names. Choose how many winners you want to pick—whether it's a single grand prize winner or top 3 for a contest. When you click 'Pick Winners', the tool runs a cryptographically strong random selection algorithm to draw the names.",
        "The winning names are displayed clearly, separating them from the rest of the entrants. You can also use the 'Clear List' button to start over for a new draw. There is no need for paper slips or drawing from a hat.",
        "This tool runs entirely in your browser. No data is sent to our servers, so your list of names remains private. Ensure fairness and transparency in your selection process with a single click."
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
        "Randomly shuffle the order of items in any list with our List Randomizer. This tool uses the Fisher-Yates shuffle algorithm to ensure every permutation of the list is equally likely. It is perfect for determining speaking order, assigning random teams, or just mixing up a playlist.",
        "Paste your list of items (names, tasks, numbers) into the input field, with each item on a new line. Click 'Shuffle List' to instantly randomize their order. The result appears in the output box, ready to be copied to your clipboard.",
        "This is useful for teachers organizing student presentations, event organizers setting lineups, or developers testing data sorting. It eliminates human bias from the ordering process.",
        "Since it is a client-side tool, your data never leaves your device. Shuffle lists of any size instantly and get a truly random sequence every time."
      ],
      "input_label": "Input List (one per line)",
      "btn_shuffle": "Shuffle List",
      "btn_copy": "Copy List"
    },
    "list_sorter": {
      "name": "List Sorter",
      "description": "Sort lists A-Z, Z-A or length.",
      "title": "List Sorter",
      "seo_title": "Alphabetical List Sorter",
      "seo_content": [
        "Organize your data instantly with our List Sorter tool. Sorting a long list of names, products, or keywords manually is tedious and prone to error. Our tool automates this process, supporting multiple sorting criteria to suit your needs.",
        "Paste your messy list into the input box. You can then choose to sort it Alphabetically (A-Z) for standard organization, or Reverse Alphabetically (Z-A). We also offer numerical sorting (0-9 and 9-0), which is essential because standard text sorting often orders '10' before '2'. Additionally, you can sort by Length (shortest to longest), which is great for SEO keywords or domain names.",
        "The 'Reverse' button flips the current order of the list. This is a powerful utility for developers, writers, and data analysts who need to clean up and structure raw text data quickly.",
        "Works offline and respects your privacy. Get your lists in perfect order in seconds."
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
      "seo_title": "Bulk Text Adder Tool",
      "seo_content": [
        "Batch edit your text lists by adding prefixes and suffixes to every line. Manually adding quotes, commas, or tags to hundreds of lines is a waste of time. Our Add Prefix/Suffix tool automates string manipulation for developers, marketers, and data handlers.",
        "Paste your list into the main text area. Enter the text you want to appear at the beginning of each line in the 'Prefix' field (e.g., '<li>'). Enter text for the end in the 'Suffix' field (e.g., '</li>'). Click 'Apply' to transform the entire list instantly.",
        "This is incredibly useful for converting a list of words into HTML list items, SQL query values (adding quotes and commas), or formatting CSV data. It's also great for SEOs building bulk URL lists by adding domains to slugs.",
        "Save hours of repetitive typing. Copy the formatted result to your clipboard with one click and move on to more important tasks."
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
        "Generate realistic fake data for testing and development with our Random CSV Generator. When building applications, dashboards, or databases, you often need placeholder data to verify layouts and performance. Creating 'John Doe 1', 'John Doe 2' manually is slow and unrealistic.",
        "Our tool creates structured CSV files containing random First Names, Last Names, Email Addresses, and Ages. Simply specify the 'Number of Rows' you need (e.g., 100 or 1000) and click Generate. You can view the raw CSV data on the screen or download it as a .csv file ready to import into Excel, SQL, or your application.",
        "The generated emails are syntactically valid (though fake), and names are drawn from a diverse list. This helps simulate real-world data variance.",
        "Essential for QA testers, data scientists, and developers who need quick datasets without privacy concerns. Generate unlimited rows of test data instantly."
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
        "Find out the current week number of the year instantly with our Week Number tool. The ISO-8601 standard week system is widely used in business and government across Europe and parts of Asia, while the US often uses a slightly different calendar system. Our tool automatically detects your date and displays the correct ISO week number.",
        "Knowing the week number is crucial for project management sprints, manufacturing schedules, and corporate planning. Instead of counting weeks manually on a calendar, get the precise answer in seconds. You can check the current week or select any past or future date to determine its corresponding week number.",
        "The interface is simple: today's week number is front and center. Use the date picker to 'Check another date'. For example, if you need to know what week Christmas falls on this year or when a specific deadline in 'Week 42' lands.",
        "Stay organized and in sync with international business partners. Bookmark this page for your weekly planning sessions."
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
        "Securely encode and decode special characters with our Web Encoders tool. In web development, transmitting data via URLs or displaying user input in HTML requires careful character handling to prevent errors and security vulnerabilities (like XSS). This tool provides both URL Encoding and HTML Entity Encoding.",
        "URL Encoding (Percent-encoding) converts characters into a format that can be transmitted over the Internet. For example, a space becomes '%20'. This is essential when sending query parameters. HTML Encoding converts characters like '<' and '&' into their corresponding entities ('&lt;' and '&amp;'), ensuring they display correctly on a webpage without being interpreted as code.",
        "Our tool works in real-time. Simply select the tab (URL or HTML), type your text, and see the encoded result immediately. You can also paste an encoded string to Decode it back to plain text. It fully supports UTF-8 characters.",
        "This is a must-have utility for debugging API requests, sanitizing database inputs, or fixing broken links. It runs locally in your browser for speed and security."
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
        "Test your reflexes with our Reaction Time Test. How fast does your brain process visual information and signal your finger to click? This simple yet addictive tool measures your reaction speed in milliseconds.",
        "To play, wait for the red box to turn green. As soon as it changes color, click as fast as you can. We'll show you your exact reaction time. Repeat the test 5 times to get an average score, which is a more accurate representation of your reflexes.",
        "The average human visual reaction time is around 250 milliseconds. Professional gamers and F1 drivers often clock in below 200ms. Factors like age, fatigue, and distraction can affect your score. Challenge your friends to see who has the sharpest reflexes.",
        "This tool is also useful for cognitive training. Improving your reaction time can help in sports and daily activities like driving. Give it a try—are you faster than average?"
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
        "Translate text to Morse code and Morse code back to text with our online Morse Code Translator. Invented by Samuel Morse via telegraph in the 1830s, this system of dots and dashes revolutionized long-distance communication. Today, it remains a popular skill for amateur radio enthusiasts, scouts, and solving puzzles/CTFs.",
        "Type your message in the 'Text' box to see it instantly converted into the classic .-.. syntax. Alternatively, paste Morse code into the bottom box to decode it into readable text. We support the International Morse Code standard (ITU), including letters, numbers, and common punctuation.",
        "Want to hear how it sounds? Click the 'Play Sound' button to listen to your message as a series of audio beeps. The timing follows the standard rule where a dash is three times the duration of a dot. This is excellent for learning to receive Morse code by ear.",
        "Whether you are sending a secret message, learning a historical skill, or just curious, our translator makes it easy. It works entirely in your browser."
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
        "Plan your financial future with our Loan & Mortgage Calculator. Borrowing money is a significant commitment, and understanding exactly what your monthly payments will look like is crucial for budgeting. Whether you are looking at a mortgage, an auto loan, or a personal loan, this tool breaks down the costs.",
        "Enter the 'Loan Amount' (principal), the 'Annual Interest Rate', and the 'Loan Term' in years. We assume a standard fixed-rate amortization schedule. The tool calculates your monthly payment, the total amount you will pay over the life of the loan, and the total interest cost.",
        "Seeing the total interest figure can be eye-opening. It helps you decide if you should hunt for a lower rate or choose a shorter term to save money. Use it to compare different loan offers side-by-side.",
        "No complex banking jargon, just simple numbers to help you make smart financial choices. It runs instantly in your browser with privacy guaranteed."
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
        "Calculate aspect ratios and image dimensions instantly with our Aspect Ratio Calculator. Aspect ratio describes the proportional relationship between the width and height of an image or screen. Common ratios include 16:9 for modern widescreen TVs, 4:3 for older monitors, and 1:1 for social media posts (square).",
        "Our tool has two modes: 'Find Ratio' and 'Find Dimension'. In Ratio mode, enter a width and height (e.g., 1920 x 1080) to discover the simplified aspect ratio (16:9). In Dimension mode, you can calculate a missing value. For example, if you want to resize an image to 800 pixels wide while maintaining a 16:9 ratio, this tool will tell you the exact height required (450 pixels).",
        "This is a daily driver for graphic designers, videographers, and web developers. Resizing images without preserving the aspect ratio leads to stretching or squishing, which looks unprofessional. Use this calculator to ensure your media fits perfectly in any container.",
        "It supports both integer and decimal inputs. The interface is clean and immediately reactive."
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
        "Visually create CSS box shadows with our Box Shadow Generator. The CSS 'box-shadow' property adds shadow effects around an element's frame. While powerful, the syntax (e.g., '10px 10px 5px 0px rgba(0,0,0,0.75)') can be hard to visualize and write manually.",
        "Use sliders to adjust the Horizontal Length, Vertical Length, Blur Radius, and Spread Radius. You can also pick a custom Shadow Color and control its Opacity directly. As you tweak the controls, a live preview box updates instantly, showing you exactly how the shadow looks.",
        "Add depth to your cards, buttons, or containers. This tool helps you create subtle material design elevation or dramatic neomorphic effects. Once you are happy with the look, simply copy the generated CSS snippet and paste it into your stylesheet.",
        "No knowledge of CSS syntax is required. Experiment with different light sources and softness levels in a visual playground."
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
        "Evaluate the strength and security of your password with our Password Strength Checker. In an age of data breaches, using weak passwords like '123456' or 'password' puts your personal information involved. This tool analyzes your password's entropy and estimates how long it would take for a hacker to crack it using brute-force attacks.",
        "As you type, the tool provides real-time feedback. It checks for length, use of uppercase and lowercase letters, numbers, and special symbols. It assigns a score and offers specific advice on how to improve it, such as 'Add more characters' or 'Avoid common patterns'.",
        "Crucially, this check happens entirely client-side. Your password is NEVER sent to our servers or stored anywhere. You can test your actual passwords safely, or use it to practice creating strong, memorable passphrases.",
        "Don't wait until you get hacked. Verify your password hygiene now and ensure your digital accounts are protected by a strong defense."
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
        "Calculate your weighted average grade or GPA with ease. In many courses, not all assignments are worth the same. A final exam might be worth 40% of your grade, while homework is only 10%. A simple average won't give you the correct picture.",
        "Our Weighted Grade Calculator allows you to add multiple rows of assignments. Enter the grade you received and its corresponding weight (as a percentage or points). The tool automatically computes your overall average based on the weights provided.",
        "This is perfect for students managing their academic goals. Use it to perform 'what-if' scenarios—for example, calculate what grade you need on the final exam to keep your A. If your weights don't add up to 100, the tool will still calculate the correct weighted average of the entered items.",
        "Stay on top of your studies and eliminate the stress of manual grade math. It's fast, free, and easy to use."
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
        "Download high-quality thumbnails from any YouTube video instantly with our YouTube Thumbnail Downloader. A great thumbnail is key to a high click-through rate (CTR). Sometimes you need to retrieve the thumbnail of your own video for a blog post, social media promotion, or archive, but you lost the original file. This tool helps you recover it in seconds.",
        "We extract all available resolutions provided by YouTube's servers: Default (120x90), Medium (320x180), High (480x360), Standard (640x480), and Max Resolution (1280x720). The 'Max Resolution' is the HD version and is perfect for reuse in other designs.",
        "Simply paste the YouTube video link (URL) into the input box. The tool automatically parses the video ID and displays all available image sizes. You can then download them directly to your device.",
        "This is a free utility for creators, marketers, and designers. No installation is required, and it works on mobile phones as well as desktops. Enhance your content workflow by having easy access to your visual assets."
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
        "Calculate the pixel density of any display with our PPI (Pixels Per Inch) Calculator. PPI is a measure of display pixel density (resolution quality). Understanding PPI is crucial for designers and developers to ensure their content looks sharp on various devices, from smartphones and tablets to 4K monitors.",
        "To use the calculator, simply enter the horizontal and vertical resolution of the screen (e.g., 1920 x 1080) and the diagonal screen size in inches (e.g., 24). The tool uses the Pythagorean theorem to calculate the diagonal resolution and then divides it by the screen size to determine the exact PPI.",
        "A higher PPI means a sharper image where individual pixels are harder to distinguish. For example, 'Retina' displays typically have a PPI over 300. This tool also calculates the total number of pixels on the screen, giving you a sense of the display's total information capacity.",
        "Whether you are buying a new monitor and want to check its sharpness or designing a responsive interface, this tool provides the technical specs you need instantly."
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
        "Visualize the power of long-term investing with our Compound Interest Calculator. Albert Einstein reputedly called compound interest the 'eighth wonder of the world' because it allows your money to earn money on itself. This tool helps you project how much your savings or investments will grow over time.",
        "Enter your 'Initial Investment' (Principal), the 'Monthly Contribution' you plan to add, the estimated 'Annual Interest Rate' (return), and the 'Time Period' in years. The calculator computes the future value of your investment, breaking it down into the total amount contributed and the total interest earned.",
        "You will be amazed to see how small, regular contributions can grow into significant wealth over 20 or 30 years due to compounding. This tool is essential for retirement planning, saving for a house, or building an education fund.",
        "Compare different scenarios instantly. What happens if you save $50 more per month? What if you get a 7% return instead of 5%? Make informed financial decisions and start your journey to financial freedom today."
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
        "Let fate decide with our random Coin Flip tool. Life is full of tough decisions, from 'Who pays for dinner?' to 'Which movie should we watch?'. Sometimes, the fairest way to settle a dispute or make a choice is a simple game of chance. Our virtual coin flip simulates a real 50/50 probability, giving you an unbiased Heads or Tails result.",
        "Why search for a real coin in your pocket when you can flip one digitally? This tool features a realistic 3D flipping animation and sound effects to build suspense. We also keep track of your stats (Heads vs. Tails count) for the current session, so you can see if luck is trending in one direction.",
        "It uses a cryptographically, secure random number generator to ensure the result is truly random and cannot be rigged. It works instantly on any device, making it the perfect pocket referee.",
        "Whether you are deciding kickoff in a sports game, settling a bet, or just bored, flip a coin online and let the universe choose for you."
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
        "Manage file permissions on Unix-like systems (Linux, macOS) with our visual Chmod Calculator. 'Chmod' (change mode) is the command used to change access permissions of file system objects. Understanding the octal numbers (like 755 or 644) and symbolic notation (rwxr-xr-x) can be confusing for beginners and pros alike.",
        "Our calculator provides a grid where you can toggle Read (r), Write (w), and Execute (x) permissions for the Owner, Group, and Public/Others. As you click the checkboxes, the tool strictly calculates the equivalent Octal value (e.g., 777) and the Symbolic string (e.g., -rwxrwxrwx) in real-time.",
        "It breaks down the math effectively: Read=4, Write=2, Execute=1. The tool sums these values for each user class to generate the correct code. This is essential for server administrators setting up web servers, deployment scripts, or securing sensitive files.",
        "Stop guessing the numbers. Use this tool to generate the exact command you need to run in your terminal. We also provide common presets for files and directories."
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
        "Generate valid CPF numbers for software testing and development purposes (Dev Tools). The CPF (Cadastro de Pessoas Físicas) is the individual taxpayer registry identification in Brazil. Developers building e-commerce sites or registration forms for the Brazilian market often need valid CPF numbers to test their validation logic.",
        "Our tool can Generate a random, mathematically valid CPF number instantly. It calculates the correct check digits (the last two numbers) based on the standard algorithm. You can choose to format it with punctuation (XXX.XXX.XXX-XX) or keep it as raw digits.",
        "You can also use the Validate function to check if an existing CPF is structurally valid. Note: This tool only checks mathematical validity (checksum); it does not check if the CPF belongs to a real person or its status with the Receita Federal.",
        "This is a strictly utilitarian tool for programmers and QA testers. No data is logged."
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
        "Create perfect bibliographic references for your academic papers in ABNT format (Associação Brasileira de Normas Técnicas). Formatting references manually is tedious and easy to mess up. Incorrect formatting can cost you points on your thesis, dissertation, or article.",
        "Simply fill in the fields: First Name, Last Name, Title, City, Publisher, and Year. Click 'Generate Reference' to get a string formatted according to the NBR 6023 standard (e.g., LASTNAME, Firstname. Title. City: Publisher, Year.).",
        "This tool focuses on the 'Book' format, which is the most common requirement. It applies the necessary bolding (usually to the title) and punctuation rules automatically.",
        "Copy the result directly into your bibliography in Word or Google Docs. Focus on your research content and let us handle the formatting rules."
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
        "Calculate the Return on Investment (ROI) of any business venture or purchase. ROI is a key performance indicator (KPI) used to evaluate the efficiency or profitability of an investment. It answers the fundamental question: 'Is this worth it?'",
        "The formula is simple: ROI = (Net Profit / Cost of Investment) x 100. Enter the 'Amount Invested' (your cost) and 'Amount Returned' (total revenue or current value). The calculator will output the ROI percentage. A positive ROI means you are making money; a negative ROI means you are losing money.",
        "This tool works for marketing campaigns, stock market investments, real estate, or even small personal decisions. Comparing the ROI of different options helps you allocate your resources more effectively.",
        "Get instant results without needing a spreadsheet. Use this clear metric to make data-driven financial decisions."
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
        "Keep track of the game with our Simple Online Scoreboard. Whether you are playing a board game, a card game, ping pong, or a friendly sports match, keeping score in your head can be confusing. Paper and pen aren't always available. This digital scoreboard solves that problem instantly.",
        "The interface is clean and large, visible from a distance on a tablet or laptop screen. It supports two teams (Team A and Team B) by default, but you can rename them to match your players. Tap to increase the score, or use the minus button to correct mistakes.",
        "Perfect for referees, teachers, or casual gamers. It features high-contrast numbers for visibility in bright sunlight or dim rooms. The state is preserved in your browser, so if you refresh the page by accident, you won't lose the score.",
        "No installation, no ads, just a reliable counter for your competitive needs. Make every game official with this easy-to-use tool."
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
        "Check your monitor or phone screen for dead pixels with our full-screen Dead Pixel Test. A dead pixel is a picture element that fails to light up (appearing black), while a stuck pixel might remain permanently red, green, or blue. Buying a new display often comes with a warranty policy regarding these defects, so it's important to spot them early.",
        "Click 'Start Test' to enter full-screen mode. The tool cycles through solid primary colors: Black, White, Red, Green, and Blue. By flooding the screen with a single color, anomalies become obvious to the naked eye. Look closely at every part of your screen for any tiny dots that don't match the background.",
        "This test works on all devices, from 4K desktop monitors to smartphone OLED screens. 'Black' is best for finding stuck pixels (which will shine bright), while 'White' helps find dead pixels (which will look like black dots).",
        "No software installation needed. Run a quick health check on your hardware in seconds."
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
        "Achieve your reading goals with our smart Reading Planner. We all have a stack of books we mean to read, but finding the time can be a challenge. This tool breaks down a large book into manageable daily chunks, making it easier to stay on track and finish your reading list.",
        "Simply enter the 'Total Number of Pages' in the book and your desired 'Days to Finish'. The calculator determines exactly how many pages you need to read each day to meet your deadline. Alternatively, you can calculate how long it will take to finish a book based on your daily reading speed.",
        "This is perfect for students with assigned reading, book club members, or anyone trying to build a consistent reading habit. Seeing a target like '15 pages/day' feels much more achievable than staring at a 500-page novel.",
        "Plan your reading schedule effectively. Whether you are reading for education or pleasure, breaking the task down is the key to success. Start your literary journey with a clear plan."
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
        "Estimate video file sizes and required bitrates with our Bitrate Calculator. Whether you are a video editor to ensure your export fits on a flash drive, or a streamer configuring OBS for Twitch or YouTube, understanding bitrate is key to balancing quality and size.",
        "Bitrate (measured in Mbps or kbps) determines how much data is processed per second. A higher bitrate means better quality but larger files. This tool lets you calculate the resulting bitrate given a target file size and duration, or calculate the estimated file size given a specific bitrate and duration.",
        "Enter the duration of your video (hours, minutes, seconds). Then, either input your target file size (e.g., 4GB for a FAT32 limit) to see what bitrate you should set in your encoder, or input your bitrate setting to see how much disk space the recording will take.",
        "This utility helps prevent failed uploads due to size limits and ensures efficient use of storage. It is compatible with all video codecs like H.264, HEVC (H.265), and ProRes, as bitrate math is universal."
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
        "Automatically summarize long articles, essays, or documents into key sentences with our AI-powered Text Summarizer. In today's information-heavy world, reading everything word-for-word is impossible. This tool extracts the most important sentences from your text to give you a concise overview.",
        "Paste your text into the input box. Use the 'Summary Length' slider to decide how short or detailed you want the result to be (e.g., 20% of original length vs 50%). Click 'Summarize' to process. Our algorithm analyzes sentence frequency and keyword importance to identify the core message.",
        "Perfect for students needing to skim reading assignments, researchers reviewing papers, or professionals catching up on industry news. It helps you grasp the main points without reading the fluff.",
        "This extraction-based summarization runs locally in your browser for privacy. No content is sent to the cloud. Save time and boost your productivity."
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
        "Boost your video discoverability with our YouTube Tags Generator. Tags are descriptive keywords you can add to your video to help viewers find your content. YouTube's algorithm uses these tags to understand the topic and category of your video, and to associate it with similar content, which is crucial for appearing in the 'Suggested Videos' sidebar.",
        "Our tool generates SEO-optimized tags based on your main keyword. It analyzes popular search terms and related concepts to provide a comprehensive list of tags that can increase your ranking potential. For example, if your video is about 'Vegan Cooking', it might suggest tags like 'vegan recipes', 'plant based diet', 'easy cooking', and 'healthy eating'.",
        "Using the right mix of broad and specific tags can significantly impact your views. Simply enter your main topic, click 'Generate', and you will get a list of comma-separated tags ready to copy and paste directly into your YouTube Studio upload page.",
        "Stop guessing which keywords to use. Leverage data-driven suggestions to grow your channel and reach a wider audience."
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
        "Calculate the perfect tip and split the bill seamlessly with our Tip Calculator. Dining out with friends or grabbing drinks with colleagues should be fun, but the math at the end of the meal can be a buzzkill. Figuring out how much 18% is, or dividing a $150 check among 7 people, is easier with a tool.",
        "Enter the 'Bill Amount' and select your desired 'Tip %' using the slider or input field. Standard tipping rates vary by country and service quality (e.g., 15-20% in the US). Our calculator immediately displays the 'Tip Amount' and the 'Total Bill'.",
        "The real magic happens with the 'Number of People' field. As you adjust the count, the tool breaks down the cost 'Per Person'. This ensures everyone pays their fair share, including the gratuity.",
        "Avoid awkward mental math moments. Use this mobile-friendly tool at the restaurant table to settle the check quickly and accurately."
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
        "Create epic names for your D&D characters, novels, or video games with our Fantasy Name Generator. Struggling to name your new Elf Ranger or Orc Barbarian? Writer's block can stall your creativity. Our generator provides instant inspiration with names that fit specific fantasy archetypes and linguistic styles.",
        "Select a 'Race / Type' from options like Human, Elf, Dwarf, Orc, or even Places/Kingdoms. You can also choose 'Sci-Fi' for futuristic names or 'Villain' for darker sounding titles. Filter by Gender (Male, Female) to refine the results.",
        "Click 'Generate Names' to get a list of unique suggestions. We use advanced syllabic combinations to ensure names sound pronounceable and lore-friendly. You can select your favorites to save them to a shortlist below, or click 'Copy All' to save the entire batch.",
        "Whether you are a Dungeon Master populating a town with NPCs or a writer building a new world, this tool creates names with the right 'feel' for your setting."
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
        "Plan your server storage with our RAID Calculator. RAID (Redundant Array of Independent Disks) is a data storage virtualization technology that combines multiple physical disk drive components into one or more logical units. Choosing the right RAID level is critical for balancing performance, storage capacity, and data redundancy (safety).",
        "Select your disk size and the number of disks. Then choose the RAID Type (RAID 0, 1, 5, 6, 10). The tool instantly calculates the 'Usable Capacity' (how much space you actually get) and the 'Fault Tolerance' (how many disks can fail before you lose data).",
        "For example, RAID 0 offers maximum speed and capacity but zero safety. RAID 1 mirrors data for safety but cuts capacity in half. RAID 5 is a popular balance, offering N-1 capacity with 1-disk redundancy. Understanding these trade-offs is essential for IT professionals and home lab enthusiasts setting up NAS systems.",
        "Visualize your configuration before buying hardware. Ensure your data strategy meets your backup needs."
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
        "Convert data between YAML and JSON formats instantly with our YAML / JSON Converter. YAML (YAML Ain't Markup Language) is popular for configuration files due to its readability, while JSON (JavaScript Object Notation) is the standard for APIs. Developers often need to switch between them.",
        "Simply paste your YAML code to convert it to JSON, or paste JSON to get YAML. Our tool validates the input syntax before conversion, preventing errors. It handles complex nested structures, arrays, and different data types correctly.",
        "This tool is perfect for DevOps engineers working with Kubernetes or Docker Compose files (often YAML), or frontend developers needing to mock API responses. It runs entirely client-side, ensuring your configuration secrets never leave your browser.",
        "Copy the result with a single click. Simplify your configuration management workflow today."
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
        "Inspect and debug JSON Web Tokens with our Client-Side JWT Decoder. JWTs are an open standard (RFC 7519) used significantly for secure information exchange between parties, often for authentication (logging in). A JWT consists of three parts: Header, Payload, and Signature.",
        "Our tool decodes the Base64Url encoded string to reveal the human-readable JSON Payload and Header. You can see standard claims like 'sub' (subject), 'iat' (issued at), and 'exp' (expiration time), as well as any custom data app has stored. Note that we do NOT verify the signature, as that requires your private secret key, but we decode the structure for inspection.",
        "This is invaluable for frontend developers debugging login issues. You can check if a token has expired or if the user has the correct roles/permissions without backend logs. Since it runs in your browser, your sensitive tokens are never sent to our server.",
        "Simply paste your token string. The tool automatically separates and formats the components. Use it to understand how modern authentication works."
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
        "Validate identification numbers with our Luhn Algorithm Checker. The Luhn algorithm (also known as the modulus 10 or 'mod 10' algorithm) is a simple checksum formula used to validate a variety of identification numbers, most notoriously credit card numbers, IMEI numbers, and Canadian Social Insurance Numbers.",
        "This tool allows you to input any number sequence to check if it satisfies the checksum. It detects accidental errors such as a single digit error or a transposition of adjacent digits. This is not a fraud check (it doesn't check if the card is active or has funds), but a structural validity check.",
        "Developers use this to validate form inputs before sending data to a payment gateway API, saving unnecessary server requests. QA testers use it to generate valid test numbers.",
        "Enter your number to get an instant Pass or Fail result. No data is stored or transmitted; the math happens locally on your device for security."
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
        "Keep the beat with our precise Online Metronome. Essential for musicians of all levels, from beginners learning rhythm to professionals practicing complex pieces. A metronome produces a steady pulse (beat) to help you play at a consistent speed.",
        "Set your desired BPM (Beats Per Minute) using the slider or input field. Our tool is accurate and responsive, using the Web Audio API to ensure perfect timing without drift. You can use it for practicing guitar, piano, drums, or any other instrument.",
        "Practicing with a metronome improves your internal timing and sense of rhythm. It's also useful for physical exercise, dance practice, or even meditation. The visual indicator flashes with the beat, allowing you to follow along silently if needed.",
        "No heavy apps to install. Access a professional-grade metronome directly in your browser anytime, anywhere."
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
        "Generate beautiful and harmonious color schemes instantly with our Color Palette Generator. Choosing the right colors is one of the hardest parts of design. A great color palette can elevate a website, brand, or artwork, while a poor one can make it look chaotic. Our tool uses color theory equations to generate schemes that are mathematically proven to look good together.",
        "Start by selecting a 'Base Color' using the color picker. The tool then automatically generates three distinct palettes: Complementary (colors opposite on the wheel for high contrast), Analogous (colors next to each other for harmony), and Triadic (three colors evenly spaced for balance and vibrancy)."
        "Each color is displayed with its HEX code, ready to be copied into your CSS, Photoshop, or design tool. This is an essential utility for web designers, graphic artists, and decorators looking for inspiration.",
        "Stop guessing which colors match. Use science and art together to create professional-grade color themes in seconds. Explore different moods and styles effortlessly."
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
        "Convert time across major world time zones with our World Time Converter. In our interconnected world, scheduling meetings with colleagues or calling friends abroad requires navigating complex time differences. GMT, PST, EST, CET, JST—keeping track of the offsets can be a headache.",
        "Simply select your local time (or any base time) and add multiple cities or time zones to the list. The tool displays the corresponding time and date for each selected location side-by-side. It accounts for Daylight Saving Time (DST) rules automatically, so you don't have to worry about 'springing forward' or 'falling back'.",
        "This tool is invaluable for remote teams, digital nomads, and travelers. You can visually compare business hours across New York, London, Tokyo, and Sydney to find that perfect meeting slot where everyone is awake.",
        "The interface is intuitive. Drag the slider or use the time picker to see how changing the hour affects all other zones instantly."
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
        "Test and debug Regular Expressions (Regex) with our Online Regex Tester. Regular expressions are powerful patterns used to match character combinations in strings, used frequently in form validation, search and replace operations, and data parsing.",
        "Our tool allows you to enter a regex pattern and a test string. It highlights all matches in real-time, showing you exactly what your pattern is capturing. We support standard JavaScript RegEx syntax and flags (global, case-insensitive, multiline).",
        "Regex can be notoriously difficult to master. This visual playground helps you experiment. Try patterns for email validation, phone number extraction, or removing special characters. The interface provides immediate feedback, listing match indices and captured groups.",
        "Perfect for developers, data analysts, and students. Refine your patterns here before deploying them to your production code. It's fast, free, and runs securely in your browser."
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
        "Convert Roman numerals to decimal numbers and vice-versa with our Roman Numeral Converter. Roman numerals, a numeral system that originated in ancient Rome, are still used today in clock faces, book chapters, movie release years, and sporting events (like the Super Bowl).",
        "Type any standard integer (e.g., 2024) to see it as a Roman numeral (MMXXIV). Conversely, type a valid Roman string (e.g., MCMXC) to translate it into a number (1990). The tool validates your input and handles standard subtractive notation (IV instead of IIII) correctly.",
        "This is a great educational tool for students learning history or math. It's also useful for deciphering dates on old buildings or understanding the numbering of monarchs (e.g., Henry VIII).",
        "Our converter supports numbers up to 3,999 (standard Roman usage). It runs instantly and provides error messages for invalid formats."
      ],
      "label_input": "Enter Number or Roman",
      "res_result": "Result"
    },
    "memo_pad": {
      "name": "Memo Pad",
      "description": "Auto-saving notepad.",
      "title": "Online Memo Pad",
      "seo_title": "Simple Online Notepad with Auto-Save",
      "seo_content": [
        "Capture your thoughts instantly with our Online Memo Pad, a simple yet powerful scratchpad that lives in your browser. In a world of complex note-taking apps with endless features and logins, sometimes you just need a blank sheet of paper to jot down a phone number, a quick idea, or a to-do list item. Our tool provides exactly that distraction-free environment.",
        "The core feature of this memo pad is its automatic local storage. As you type, every character is instantly saved to your browser's local storage. This means you can close the tab, restart your browser, or even turn off your computer, and when you come back, your notes will be waiting for you exactly as you left them. No 'Save' button required, and no fear of losing data due to a crash.",
        "We prioritize privacy and speed. Your notes are never sent to a cloud server or seen by us. They reside strictly on your specific device. This makes it perfect for drafting sensitive emails, storing temporary code snippets, or keeping private reminders.",
        "The interface is clean and minimal, maximizing the writing area. A 'Clear' button is available when you want to wipe the slate clean and start fresh. Experience the convenience of a sticky note that never falls off your monitor."
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
        "Create modern, frosted-glass effects for your UI with our Glassmorphism CSS Generator. Glassmorphism is a popular design trend characterized by translucency (a background blur effect), vivid colors floating in the background, and a light border to represent the edge of the glass.",
        "Adjust the 'Blur' intensity to control how frosted the glass looks. Tweak the 'Transparency' to decide how much of the background shows through. You can also pick a tint color for the glass itself. The tool generates the necessary CSS properties, primarily 'backdrop-filter: blur()' and 'background: rgba()'.",
        "It also provides a subtle white border and box-shadow to enhance the 3D feel, essential for making the glass element separate from the background. We provide a colorful background in the preview so you can see the effect in action.",
        "Copy the CSS code with one click and paste it into your project. Elevate your web design with premium, apple-style aesthetics."
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
        "Analyze the frequency and density of words in your text with our Keyword Density Checker. In SEO (Search Engine Optimization), keyword density refers to the percentage of times a keyword or phrase appears on a webpage compared to the total number of words. While keyword stuffing is bad, maintaining a healthy balance is important for relevance.",
        "Paste your article, blog post, or essay into the text box. The tool instantly breaks down the content into individual words, removes common 'stop words' (like 'the', 'is', 'and') if desired, and calculates the count and percentage density for each unique word. It presents the top keywords in a clear table.",
        "Writers use this to avoid repetition and ensure their main topic is clear. SEO specialists use it to audit content before publishing. It can also help students analyze their own writing style.",
        "This analysis happens client-side in your browser. We do not store or read your content. Get insights into your text structure in seconds."
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
        "Transform your photos instantly with our online CSS Image Filters tool. You don't need heavy software like Photoshop to apply basic effects to your images. Modern browsers support powerful CSS filter functions that can change the look and feel of an image in real time.",
        "Upload an image from your device. Use the sliders to adjust Grayscale (black and white), Sepia (vintage look), Blur (soften details), Brightness, Contrast, and Hue Rotate. You can combine multiple filters to create unique styles.",
        "This tool is perfect for web designers wanting to preview how an image will look with CSS effects before coding correctly. It helps visualizing hover states or thematic styles. Once you are satisfied, you can copy the CSS code string (e.g., 'filter: grayscale(100%) contrast(120%);').",
        "Your images are processed locally in your browser and are never uploaded to a server, ensuring 100% privacy."
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
        "Indecisive? Let our Decision Wheel choose for you. Also known as the Wheel of Fortune or Random Picker Wheel, this tool is perfect for when you are stuck between multiple options. Whether you are choosing where to eat for lunch, which game to play, or picking a raffle winner, the wheel adds an element of fun and fairness to the process.",
        "Simply enter your options in the text box (one per line). You can add as many choices as you like. When you click 'Spin', the wheel animates with a satisfying spinning effect and slows down to point to a random winner. The physics-based animation builds suspense.",
        "This tool is unbiased and runs locally on your device. It's great for teachers engaging students, friends settling arguments, or even just for fun. You can customize the list every time.",
        "Stop analyzing and start spinning. Leave your choices to chance and enjoy the result."
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
        "Relive the classic party nostalgia with our online Spin the Bottle game. Perfect for gatherings, sleepovers, or breaking the ice at parties, this virtual version brings the fun without needing a physical empty bottle. It is clean, fair, and accessible anywhere.",
        "The tool offers two exciting modes. 'Classic Mode' simply spins the bottle, and you decide who it points to. 'Player Mode' allows you to enter the names of all participants. The bottle will then randomly select a person, eliminating arguments about who it is pointing at. You can add as many friends as you want.",
        "Essential for games like Truth or Dare, this tool adds a layer of excitement and randomization to your social events. The physics-based animation makes the spin feel authentic. It works perfectly on mobile phones, so you can place the device in the center of the circle and play.",
        "No ads interrupting your game, just pure fun. Customize your party experience and create memorable moments with this modern twist on a timeless classic."
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
        "Find the purr-fect name for your new furry friend with our Pet Name Generator. Welcoming a new dog, cat, or bird into the family is a happy occasion, but agreeing on a name can be tough. Do you go with something classic like 'Max', or something unique like 'Luna'?",
        "Select your pet's Species (Dog, Cat, Bird, Reptile, etc.) and Gender. You can also filter by Theme, such as 'Food & Drink' (e.g., Muffin, Oreo), 'Geek/Nerd' (e.g., Yoda, Pixel), or 'Mythical' (e.g., Zeus, Thor). If you have a specific letter in mind, use the 'Starts With' filter.",
        "Click 'Generate Names' to see a fresh batch of ideas. You can favorite the ones you like to build a shortlist and copy them to discuss with your family. We generate names that are easy to call out in the park and suit various personalities.",
        "From cute and cuddly to tough and majestic, discover a name that your pet will love responding to."
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
        "Brainstorm the perfect brand name with our Business Name Generator. Naming a startup is one of the first and most important steps in entrepreneurship. A good name should be memorable, easy to spell, and relevant to your industry. Our tool combines your keywords with industry-specific themes to generate catchy ideas.",
        "Enter a few keywords related to your business (e.g., 'Tech', 'Fast', 'Cloud'). Select your Industry (Technology, Food, Fashion, etc.) and preferred Style (Modern, Classic, Short). Click 'Generate Names' to produce a list of potential brand names.",
        "We also offer a preliminary 'Check Domain' link (external) to help you see if the .com is available. Finding a unique name with an available domain is a challenge, and this tool generates hundreds of combinations to help you find that hidden gem.",
        "Whether you are launching a SaaS platform, a coffee shop, or a consulting firm, start your branding journey here."
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
    },
  }
};
