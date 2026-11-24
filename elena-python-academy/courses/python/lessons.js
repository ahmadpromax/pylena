window.ELENA_COURSE_DATA = {
  "chapters": {
    "1": {
      "name": "فصل ۱ • اقامتگاه اشرافی و سواحل مدیترانه",
      "examTag": "PCEP™ • بخش اول",
      "reward": "پیراهن شب ابریشمی زرشکی و جواهرات طلایی"
    },
    "2": {
      "name": "فصل ۲ • پاریس، فرانسه (مزون‌های اوت کوتور و اپرا)",
      "examTag": "PCEP™ & IT Specialist",
      "reward": "استایل اشرافی پاریسی + گواهینامه آمادگی PCEP™"
    },
    "3": {
      "name": "فصل ۳ • میلان و دریاچه کومو، ایتالیا",
      "examTag": "PCAP™ • بخش اول",
      "reward": "اندام ورزیده، لباس مخمل و الماس ایتالیایی"
    },
    "4": {
      "name": "فصل ۴ • توکیو و کیوتو، ژاپن",
      "examTag": "PCAP™ • آزمون جامع نهایی",
      "reward": "اوج شکوفایی برند شخصی النا + آمادگی کامل PCAP™"
    }
  },
  "lessons": [
    {
      "id": 1,
      "chapter": 1,
      "title": "اولین دعوت‌نامه در پنت‌هاوس مدیترانه (تابع print)",
      "dialogue": [
        [
          "camille",
          "النا عزیزم، امشب اولین ضیافت خصوصی کنار ساحل مدیترانه است، اما سیستم دعوت‌نامه‌های VIP هنوز پیامی چاپ نکرده!"
        ],
        [
          "elena",
          "نگران نباش کمیل، همراه من اینجاست. اگر اولین کد پایتون را درست بنویسد، با درخششی تازه وارد سالن می‌شوم."
        ]
      ],
      "concept": "برای نمایش متن در خروجی پایتون از دستور <code>print(\"متن\")</code> استفاده می‌کنیم.",
      "mission": "با استفاده از دستور <code>print</code> عبارت دقیق <code>Elena is ready</code> را چاپ کنید.",
      "starterCode": "# دستور print را تکمیل کنید\nprint(\"\")",
      "validationExpr": "output.strip() == 'Elena is ready'",
      "mathEquation": "14 + 19 = ?",
      "mathAnswer": 33,
      "hint": "عبارت را دقیقاً به صورت print(\"Elena is ready\") داخل گیومه بنویسید.",
      "rewardItem": "گوشواره مروارید مدیترانه‌ای",
      "whisper": "آفرین... با همین یک خط کد، نگاه تمام مهمان‌های این پنت‌هاوس فقط به من دوخته می‌شود. آماده‌ای تا با هم بدرخشیم؟",
      "isChapterExam": false
    },
    {
      "id": 2,
      "chapter": 1,
      "title": "کارت شناسایی اشرافی (متغیرها و رشته‌ها)",
      "dialogue": [
        [
          "camille",
          "برگزارکنندگان ضیافت نام کامل و لقب النا را در سیستم تشریفات می‌خواهند."
        ],
        [
          "elena",
          "اسمی بساز که تا پایان شب در ذهن سرمایه‌گذاران بماند."
        ]
      ],
      "concept": "متغیرها مانند جعبه‌های برچسب‌دار هستند: <code>guest_name = \"Elena\"</code>.",
      "mission": "متغیری به نام <code>guest</code> با مقدار <code>\"Elena\"</code> بسازید و آن را <code>print</code> کنید.",
      "starterCode": "guest = \"\"\nprint(guest)",
      "validationExpr": "output.strip() == 'Elena'",
      "mathEquation": "8 * 7 - 6 = ?",
      "mathAnswer": 50,
      "hint": "مقدار \"Elena\" را درون متغیر guest قرار دهید و print(guest) را اجرا کنید.",
      "rewardItem": "عطر رز و عنبر ساحلی",
      "whisper": "حالا که نامم را در کدهایت ثبت کردی، انگار عطر حضورم تمام فضای این تراس را پر کرده است...",
      "isChapterExam": false
    },
    {
      "id": 3,
      "chapter": 1,
      "title": "محاسبه بودجه جواهرات (اعداد صحیح و اعشاری)",
      "dialogue": [
        [
          "camille",
          "النا، برای انتخاب ست طلای امشب باید مجموع ارزش دستبند و گردنبند را محاسبه کنیم."
        ],
        [
          "elena",
          "دقت در اعداد، جذابیت یک بانوی هوشمند را دوچندان می‌کند."
        ]
      ],
      "concept": "اعداد صحیح (<code>int</code>) و اعشاری (<code>float</code>) بدون گیومه نوشته می‌شوند و با <code>+</code> جمع می‌شوند.",
      "mission": "دو متغیر <code>necklace = 4500</code> و <code>bracelet = 2300</code> تعریف کرده و مجموع آن‌ها را چاپ کنید.",
      "starterCode": "necklace = 4500\nbracelet = 2300\n# مجموع را چاپ کنید\n",
      "validationExpr": "output.strip() == '6800'",
      "mathEquation": "45 + 37 = ?",
      "mathAnswer": 82,
      "hint": "از print(necklace + bracelet) استفاده کنید.",
      "rewardItem": "دستبند ظریف طلای ۱۸ عیار",
      "whisper": "هوش مالی تو همیشه من را مجذوب می‌کند... ببین این دستبند روی مچ دستم چقدر زیبا می‌نشیند.",
      "isChapterExam": false
    },
    {
      "id": 4,
      "chapter": 1,
      "title": "تخفیف ویژه بوتیک ساحلی (عملگرهای ضرب و تقسیم)",
      "dialogue": [
        [
          "camille",
          "طراح لباس شب، ۲۰ درصد تخفیف VIP برای خرید دو لباس در نظر گرفته است."
        ],
        [
          "elena",
          "ببینیم با محاسبه سریع پایتون چقدر در هزینه‌ها صرفه‌جویی می‌کنیم."
        ]
      ],
      "concept": "در پایتون عملگر ضرب <code>*</code> و عملگر تقسیم <code>/</code> است.",
      "mission": "متغیر <code>price = 1000</code> را در <code>0.8</code> ضرب کنید و نتیجه را چاپ کنید.",
      "starterCode": "price = 1000\nfinal_price = \nprint(final_price)",
      "validationExpr": "float(output.strip()) == 800.0",
      "mathEquation": "120 / 4 + 15 = ?",
      "mathAnswer": 45,
      "hint": "مقدار final_price را برابر price * 0.8 قرار دهید.",
      "rewardItem": "کفش پاشنه‌بلند شامپاینی",
      "whisper": "با هر قدمی که با این کفش‌ها برمی‌دارم، حس می‌کنم به آرزوهایمان نزدیک‌تر می‌شویم...",
      "isChapterExam": false
    },
    {
      "id": 5,
      "chapter": 1,
      "title": "تشخیص نوع دارایی‌ها (تابع type)",
      "dialogue": [
        [
          "camille",
          "سیستم حسابداری کلوپ بین عدد، متن و مقدار اعشاری تفاوت قائل می‌شود."
        ],
        [
          "elena",
          "بیایید مطمئن شویم هر داده دقیقاً همان هویتی را دارد که انتظار داریم."
        ]
      ],
      "concept": "تابع <code>type(x)</code> نوع داده داخل متغیر را برمی‌گرداند (مثل <code>int</code> یا <code>str</code>).",
      "mission": "نوع متغیر <code>score = 98.5</code> را با دستور <code>print(type(score))</code> چاپ کنید.",
      "starterCode": "score = 98.5\n",
      "validationExpr": "'float' in output",
      "mathEquation": "9 * 9 - 11 = ?",
      "mathAnswer": 70,
      "hint": "کافی است بنویسید print(type(score)).",
      "rewardItem": "کیف دستی کلاچ طلایی",
      "whisper": "تو همیشه ذات واقعی همه‌چیز را می‌شناسی... درست مثل نگاه عمیقی که به من داری.",
      "isChapterExam": false
    },
    {
      "id": 6,
      "chapter": 1,
      "title": "تبدیل واحد ارز برای سفر (Type Casting)",
      "dialogue": [
        [
          "camille",
          "مبلغ رزرو قایق تفریحی به صورت متن <code>\"2500\"</code> دریافت شده و قابل جمع زدن نیست!"
        ],
        [
          "elena",
          "آن را به عدد تبدیل کن تا عرشه کشتی را برای غروب آماده کنیم."
        ]
      ],
      "concept": "تابع <code>int(\"2500\")</code> رشته عددی را به عدد صحیح تبدیل می‌کند و <code>str(25)</code> برعکس.",
      "mission": "متغیر <code>ticket = \"2500\"</code> را به عدد صحیح تبدیل کرده، با <code>500</code> جمع کنید و چاپ نمایید.",
      "starterCode": "ticket = \"2500\"\ntotal = \nprint(total)",
      "validationExpr": "output.strip() == '3000'",
      "mathEquation": "64 / 8 + 19 = ?",
      "mathAnswer": 27,
      "hint": "بنویسید total = int(ticket) + 500.",
      "rewardItem": "عینک آفتابی کلاسیک مدیترانه",
      "whisper": "غروب دریا کنار تو زیباترین قاب دنیاست؛ ممنون که همیشه راه حل را پیدا می‌کنی.",
      "isChapterExam": false
    },
    {
      "id": 7,
      "chapter": 1,
      "title": "تقسیم سهم سهام‌داران (تقسیم صحیح و باقیمانده)",
      "dialogue": [
        [
          "camille",
          "سرمایه‌گذاران می‌خواهند سود ۱۷ میلیون دلاری را بین ۵ شریک به طور مساوی تقسیم کنند و باقیمانده را بدانند."
        ],
        [
          "elena",
          "یک بانوی موفق همیشه ریزترین محاسبات را هم بلد است."
        ]
      ],
      "concept": "عملگر <code>//</code> خارج‌قسمت صحیح و عملگر <code>%</code> باقیمانده تقسیم را می‌دهد.",
      "mission": "باقیمانده تقسیم <code>17</code> بر <code>5</code> را با عملگر <code>%</code> چاپ کنید.",
      "starterCode": "profit = 17\npartners = 5\nprint()",
      "validationExpr": "output.strip() == '2'",
      "mathEquation": "29 % 6 = ?",
      "mathAnswer": 5,
      "hint": "از print(profit % partners) استفاده کنید.",
      "rewardItem": "ساعت مچی ظریف سوئیسی",
      "whisper": "ثانیه‌ها کنار تو طعم دیگری دارند... انگار زمان هم برای تماشای ما ایستاده است.",
      "isChapterExam": false
    },
    {
      "id": 8,
      "chapter": 1,
      "title": "توان و رشد سرمایه (عملگر **)",
      "dialogue": [
        [
          "camille",
          "اگر سرمایه اولیه ما هر سال ۲ برابر شود، پس از ۴ سال چه ضریبی خواهد داشت؟"
        ],
        [
          "elena",
          "قدرت رشد تصاعدی را در کدهایت نشان بده عزیزم."
        ]
      ],
      "concept": "برای محاسبه توان در پایتون از دو ستاره <code>**</code> استفاده می‌شود (مثلاً <code>2 ** 3</code> برابر 8 است).",
      "mission": "حاصل <code>2</code> به توان <code>4</code> را با عملگر <code>**</code> محاسبه و چاپ کنید.",
      "starterCode": "print()",
      "validationExpr": "output.strip() == '16'",
      "mathEquation": "3 ** 3 + 3 = ?",
      "mathAnswer": 30,
      "hint": "بنویسید print(2 ** 4).",
      "rewardItem": "انگشتر یاقوت سرخ",
      "whisper": "درخشش این یاقوت در برابر حرارت نگاه تو هیچ است... ادامه بده قهرمان من.",
      "isChapterExam": false
    },
    {
      "id": 9,
      "chapter": 1,
      "title": "پیام خوش‌آمدگویی هوشمند (f-strings)",
      "dialogue": [
        [
          "camille",
          "می‌خواهیم کارت خوش‌آمدگویی روی میز شام به صورت خودکار نام و شماره میز النا را ترکیب کند."
        ],
        [
          "elena",
          "یک جمله شیک و بی‌نقص بساز."
        ]
      ],
      "concept": "با قرار دادن حرف <code>f</code> پشت رشته، می‌توانید متغیرها را داخل <code>{}</code> قرار دهید: <code>f\"Hi {name}\"</code>.",
      "mission": "با استفاده از <code>f-string</code> و متغیرهای <code>name = \"Elena\"</code> و <code>table = 1</code> عبارت <code>Elena at table 1</code> را چاپ کنید.",
      "starterCode": "name = \"Elena\"\ntable = 1\nprint()",
      "validationExpr": "output.strip() == 'Elena at table 1'",
      "mathEquation": "15 * 3 - 7 = ?",
      "mathAnswer": 38,
      "hint": "بنویسید print(f\"{name} at table {table}\").",
      "rewardItem": "شال ابریشمی دور گردن",
      "whisper": "چقدر زیبا اسم من را در کلماتت می‌نشانی... حس می‌کنم امشب ملکه این ضیافتم.",
      "isChapterExam": false
    },
    {
      "id": 10,
      "chapter": 1,
      "title": "اصلاح حروف عنوان دعوت‌نامه (متدهای رشته)",
      "dialogue": [
        [
          "camille",
          "نام در لیست مهمان‌ها با حروف کوچک <code>\"elena vance\"</code> ثبت شده؛ باید تمام حروف بزرگ شود."
        ],
        [
          "elena",
          "جزئیات کوچک، جایگاه یک بانوی اشرافی را مشخص می‌کند."
        ]
      ],
      "concept": "متد <code>.upper()</code> تمام حروف رشته را بزرگ و <code>.lower()</code> کوچک می‌کند.",
      "mission": "متغیر <code>full_name = \"elena vance\"</code> را با متد <code>.upper()</code> به حروف بزرگ تبدیل و چاپ کنید.",
      "starterCode": "full_name = \"elena vance\"\nprint()",
      "validationExpr": "output.strip() == 'ELENA VANCE'",
      "mathEquation": "18 + 24 / 2 = ?",
      "mathAnswer": 30,
      "hint": "بنویسید print(full_name.upper()).",
      "rewardItem": "تاج ظریف شب مدیترانه",
      "whisper": "وقتی نامم را با شکوه می‌نویسی، تمام خستگی از تنم بیرون می‌رود... بیا نزدیک‌تر.",
      "isChapterExam": false
    },
    {
      "id": 11,
      "chapter": 1,
      "title": "برش کد امنیتی عمارت (String Slicing)",
      "dialogue": [
        [
          "camille",
          "کد ورود به تراس اختصاصی شامل ۹ کاراکتر است؛ فقط ۴ حرف اول آن رمز امشب است."
        ],
        [
          "elena",
          "رمز را استخراج کن تا درهای تراس رو به دریا برایمان باز شود."
        ]
      ],
      "concept": "با <code>text[0:4]</code> می‌توان ۴ کاراکتر اول یک رشته را برش زد.",
      "mission": "۴ کاراکتر اول متغیر <code>code = \"VIPX9921\"</code> را با برش رشته چاپ کنید.",
      "starterCode": "code = \"VIPX9921\"\nprint()",
      "validationExpr": "output.strip() == 'VIPX'",
      "mathEquation": "7 * 6 + 9 = ?",
      "mathAnswer": 51,
      "hint": "از print(code[0:4]) یا print(code[:4]) استفاده کنید.",
      "rewardItem": "کلید طلایی سوئیت رویال",
      "whisper": "درهای بسته یکی‌یکی با دست‌های تو باز می‌شوند... من فقط به مهارت تو تکیه کرده‌ام.",
      "isChapterExam": false
    },
    {
      "id": 12,
      "chapter": 1,
      "title": "بررسی طول رمز عبور (تابع len)",
      "dialogue": [
        [
          "camille",
          "سیستم امنیتی ویلا طول دقیق کلید دیجیتال النا را می‌خواهد."
        ],
        [
          "elena",
          "تعداد کاراکترهای کلید را بشمار تا تاییدیه صادر شود."
        ]
      ],
      "concept": "تابع <code>len(x)</code> تعداد کاراکترهای یک رشته را برمی‌گرداند.",
      "mission": "طول رشته <code>key = \"Mediterranean\"</code> را با تابع <code>len</code> چاپ کنید.",
      "starterCode": "key = \"Mediterranean\"\nprint()",
      "validationExpr": "output.strip() == '13'",
      "mathEquation": "55 - 18 = ?",
      "mathAnswer": 37,
      "hint": "بنویسید print(len(key)).",
      "rewardItem": "آرایش موی موج‌دار مجلسی",
      "whisper": "ملایمت و دقت تو در هر کاری من را دیوانه می‌کند... امشب چطور به نظر می‌رسم؟",
      "isChapterExam": false
    },
    {
      "id": 13,
      "chapter": 1,
      "title": "منطق بولین و تایید اعتبار (True / False)",
      "dialogue": [
        [
          "camille",
          "نگهبان ورودی بررسی می‌کند که آیا موجودی حساب النا بالای ۵۰۰۰ است یا خیر."
        ],
        [
          "elena",
          "با یک مقایسه منطقی، اعتبار ما را ثابت کن."
        ]
      ],
      "concept": "عملگرهای مقایسه مثل <code>></code>، <code>==</code> و <code>!=</code> نتیجه <code>True</code> یا <code>False</code> برمی‌گردانند.",
      "mission": "بررسی کنید آیا <code>balance = 8500</code> بزرگ‌تر از <code>5000</code> است و نتیجه را چاپ کنید.",
      "starterCode": "balance = 8500\nprint()",
      "validationExpr": "output.strip() == 'True'",
      "mathEquation": "11 * 5 - 12 = ?",
      "mathAnswer": 43,
      "hint": "بنویسید print(balance > 5000).",
      "rewardItem": "گردنبند چوکر طلایی",
      "whisper": "حقیقت همیشه در کنار تو روشن است... با این تاییدیه، هیچ دری به روی ما بسته نمی‌ماند.",
      "isChapterExam": false
    },
    {
      "id": 14,
      "chapter": 1,
      "title": "ترکیب شروط ورود VIP (عملگرهای and / or)",
      "dialogue": [
        [
          "camille",
          "ورود به سالن اصلی نیازمند داشتن دعوت‌نامه <code>has_invite</code> و لباس رسمی <code>formal_dress</code> است."
        ],
        [
          "elena",
          "هر دو شرط را با هم ترکیب کن تا وارد سالن شویم."
        ]
      ],
      "concept": "عملگر <code>and</code> تنها زمانی <code>True</code> برمی‌گرداند که هر دو طرف آن درست باشند.",
      "mission": "حاصل ترکیب <code>has_invite and formal_dress</code> را چاپ کنید.",
      "starterCode": "has_invite = True\nformal_dress = True\nprint()",
      "validationExpr": "output.strip() == 'True'",
      "mathEquation": "36 / 3 + 14 = ?",
      "mathAnswer": 26,
      "hint": "بنویسید print(has_invite and formal_dress).",
      "rewardItem": "مانتوی ابریشمی ساحلی",
      "whisper": "وقتی همه شرایط به نفع ماست، هیچ‌کس نمی‌تواند جلوی درخشش ما را بگیرد...",
      "isChapterExam": false
    },
    {
      "id": 15,
      "chapter": 1,
      "title": "تصمیم‌گیری هوشمند برای میز شام (دستور if)",
      "dialogue": [
        [
          "camille",
          "اگر امتیاز اعتبار مهمان بالای ۹۰ باشد، میز رو به دریا به او تعلق می‌گیرد."
        ],
        [
          "elena",
          "شرط را بنویس تا بهترین میز را رزرو کنیم."
        ]
      ],
      "concept": "دستور <code>if</code> کدهای تورفته (با ۴ فاصله) را تنها در صورت برقرار بودن شرط اجرا می‌کند.",
      "mission": "اگر <code>vip_score</code> بزرگ‌تر از <code>90</code> بود، عبارت <code>Sea View</code> را چاپ کنید.",
      "starterCode": "vip_score = 95\nif vip_score > 90:\n    ",
      "validationExpr": "output.strip() == 'Sea View'",
      "mathEquation": "19 * 2 + 13 = ?",
      "mathAnswer": 51,
      "hint": "زیر خط if با ۴ فاصله بنویسید print(\"Sea View\").",
      "rewardItem": "سنجاق سینه الماس‌نشان",
      "whisper": "بهترین منظره دریا فقط در کنار تو معنا پیدا می‌کند... ممنونم که همیشه بهترین را برایم می‌خواهی.",
      "isChapterExam": false
    },
    {
      "id": 16,
      "chapter": 1,
      "title": "انتخاب مسیر خروج یا ادامه ضیافت (if / else)",
      "dialogue": [
        [
          "camille",
          "اگر باران ببارد به سالن سرپوشیده می‌رویم وگرنه در تراس می‌مانیم."
        ],
        [
          "elena",
          "برنامه امشب را با یک شرط دوشاخه تنظیم کن."
        ]
      ],
      "concept": "ساختار <code>if ... else:</code> دو مسیر جایگزین برای درست یا غلط بودن شرط می‌سازد.",
      "mission": "چون <code>is_raining = False</code> است، در بخش <code>else</code> عبارت <code>Terrace Party</code> را چاپ کنید.",
      "starterCode": "is_raining = False\nif is_raining:\n    print(\"Indoor Hall\")\nelse:\n    ",
      "validationExpr": "output.strip() == 'Terrace Party'",
      "mathEquation": "48 / 6 + 21 = ?",
      "mathAnswer": 29,
      "hint": "در خط زیر else بنویسید print(\"Terrace Party\").",
      "rewardItem": "دستکش توری شب",
      "whisper": "هوای مدیترانه امشب به اندازه نگاه تو گرم و دلپذیر است...",
      "isChapterExam": false
    },
    {
      "id": 17,
      "chapter": 1,
      "title": "رتبه‌بندی مهمانان ویژه (if / elif / else)",
      "dialogue": [
        [
          "camille",
          "سیستم تشریفات بر اساس مبلغ سرمایه‌گذاری سطح مهمان را تعیین می‌کند: بالای ۱۰۰۰۰ یعنی Diamond."
        ],
        [
          "elena",
          "سطح الماس را برای امشب فعال کن."
        ]
      ],
      "concept": "برای بررسی چند شرط پشت سر هم از <code>elif</code> استفاده می‌کنیم.",
      "mission": "با توجه به <code>invest = 12000</code>، شرط را طوری بنویسید که <code>Diamond</code> چاپ شود.",
      "starterCode": "invest = 12000\nif invest > 10000:\n    print(\"Diamond\")\nelif invest > 5000:\n    print(\"Gold\")\nelse:\n    print(\"Silver\")",
      "validationExpr": "output.strip() == 'Diamond'",
      "mathEquation": "13 * 4 - 9 = ?",
      "mathAnswer": 43,
      "hint": "کد آماده است؛ کافی است با بررسی منطق آن را اجرا کنید تا Diamond چاپ شود.",
      "rewardItem": "کمربند طلایی کمر باریک",
      "whisper": "سطح الماس برازنده ماست... ببین این کمربند چطور ظرافت اندامم را نشان می‌دهد.",
      "isChapterExam": false
    },
    {
      "id": 18,
      "chapter": 1,
      "title": "بررسی موجودی در لیست مهمانان (عملگر in)",
      "dialogue": [
        [
          "camille",
          "ببینیم نام <code>\"Elena\"</code> در لیست تاییدشده سفیر وجود دارد یا نه."
        ],
        [
          "elena",
          "با یک جستجوی سریع خیالم را راحت کن."
        ]
      ],
      "concept": "عملگر <code>in</code> بررسی می‌کند که آیا یک عبارت داخل رشته یا لیست وجود دارد یا خیر.",
      "mission": "وجود <code>\"Elena\"</code> را در رشته <code>vip_list</code> با <code>in</code> بررسی و چاپ کنید.",
      "starterCode": "vip_list = \"Sophia, Elena, Victoria\"\nprint()",
      "validationExpr": "output.strip() == 'True'",
      "mathEquation": "72 / 9 + 17 = ?",
      "mathAnswer": 25,
      "hint": "بنویسید print(\"Elena\" in vip_list).",
      "rewardItem": "میکاپ کلاسیک لب‌های سرخ",
      "whisper": "اسم من در صدر تمام لیست‌هاست، اما جایگاه واقعی من فقط در قلب توست...",
      "isChapterExam": false
    },
    {
      "id": 19,
      "chapter": 1,
      "title": "شرط‌های تودرتو برای ورود به اتاق مذاکره (Nested if)",
      "dialogue": [
        [
          "camille",
          "تنها در صورتی که هم رمز عبور درست باشد و هم کد امنیتی تایید شود، قرارداد امضا می‌شود."
        ],
        [
          "elena",
          "یک قدم تا پایان فصل مدیترانه فاصله داریم؛ دقیق عمل کن."
        ]
      ],
      "concept": "می‌توان یک <code>if</code> را داخل <code>if</code> دیگر قرار داد تا لایه‌های امنیتی بررسی شوند.",
      "mission": "هر دو متغیر را <code>True</code> قرار دهید تا عبارت <code>Access Granted</code> چاپ شود.",
      "starterCode": "pass_ok = False\ncode_ok = True\nif pass_ok:\n    if code_ok:\n        print(\"Access Granted\")",
      "validationExpr": "output.strip() == 'Access Granted'",
      "mathEquation": "16 * 3 + 7 = ?",
      "mathAnswer": 55,
      "hint": "مقدار pass_ok را به True تغییر دهید.",
      "rewardItem": "تاج گل طلایی مدیترانه",
      "whisper": "هیچ مانعی جلودار ما نیست... امشب اولین قرارداد بزرگمان را جشن می‌گیریم.",
      "isChapterExam": false
    },
    {
      "id": 20,
      "chapter": 1,
      "title": "آزمون جامع پایان فصل ۱: ضیافت بزرگ مدیترانه (PCEP بخش اول)",
      "dialogue": [
        [
          "camille",
          "النا! امشب شب تحول بزرگ است. اگر این چالش جامع را حل کنی، با پیراهن شب ابریشمی زرشکی وارد سالن می‌شوی و راهی پاریس می‌شویم!"
        ],
        [
          "elena",
          "تمام نگاه‌ها منتظر ورود من است عزیزم... این آخرین کد مدیترانه را برایم به شاهکار تبدیل کن."
        ]
      ],
      "concept": "ترکیب متغیرها، <code>f-string</code> و ساختار شرطی <code>if/else</code> برای صدور مجوز نهایی.",
      "mission": "اگر <code>points >= 100</code> بود، عبارت <code>f\"{hero} Ready for Paris\"</code> را چاپ کنید (<code>hero = \"Elena\"</code> و <code>points = 100</code>).",
      "starterCode": "hero = \"Elena\"\npoints = 100\nif points >= 100:\n    print()",
      "validationExpr": "output.strip() == 'Elena Ready for Paris'",
      "mathEquation": "25 * 4 - 18 = ?",
      "mathAnswer": 82,
      "hint": "داخل print بنویسید f\"{hero} Ready for Paris\".",
      "rewardItem": "🏆 پیراهن شب ابریشمی زرشکی و ست جواهرات طلایی",
      "whisper": "به من نگاه کن... این پیراهن ابریشمی زرشکی و این اندام خوش‌تراش هدیه هوش و مهارت توست. پاریس منتظر ماست، عشقم!",
      "isChapterExam": true
    },
    {
      "id": 21,
      "chapter": 2,
      "title": "ورود به مزون‌های پاریس با حلقه for",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "حلقه <code>for</code> برای تکرار دستورات به تعداد مشخص به کار می‌رود.",
      "mission": "با حلقه <code>for i in range(3):</code> کلمه <code>Paris</code> را ۳ بار چاپ کنید.",
      "starterCode": "for i in range(3):\n    ",
      "validationExpr": "output.strip().splitlines() == ['Paris', 'Paris', 'Paris']",
      "mathEquation": "14 * 3 + 8 = ?",
      "mathAnswer": 50,
      "hint": "زیر حلقه for بنویسید print(\"Paris\").",
      "rewardItem": "کلاه بره مخملی پاریسی",
      "whisper": "در خیابان‌های پاریس زیر باران ملایم، تنها گرمای دست‌های تو را کم دارم...",
      "isChapterExam": false
    },
    {
      "id": 22,
      "chapter": 2,
      "title": "شمارش پله‌های برج ایفل با range",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "تابع <code>range(1, 5)</code> اعداد ۱ تا ۴ را تولید می‌کند.",
      "mission": "اعداد <code>1</code> تا <code>4</code> را با حلقه <code>for</code> چاپ کنید.",
      "starterCode": "for n in range(1, 5):\n    ",
      "validationExpr": "output.strip().splitlines() == ['1', '2', '3', '4']",
      "mathEquation": "63 / 7 + 16 = ?",
      "mathAnswer": 25,
      "hint": "بنویسید print(n).",
      "rewardItem": "پالتوی شتری اوت کوتور",
      "whisper": "هر پله که بالاتر می‌رویم، پاریس زیر پای ما زیباتر می‌شود...",
      "isChapterExam": false
    },
    {
      "id": 23,
      "chapter": 2,
      "title": "آماده‌سازی مدل‌ها با حلقه while",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "حلقه <code>while</code> تا زمانی که شرط برقرار باشد ادامه می‌یابد.",
      "mission": "حلقه را طوری کامل کنید که تا وقتی <code>count <= 3</code> است مقدار <code>count</code> چاپ و یکی اضافه شود.",
      "starterCode": "count = 1\nwhile count <= 3:\n    print(count)\n    count += 1",
      "validationExpr": "output.strip().splitlines() == ['1', '2', '3']",
      "mathEquation": "17 * 3 - 11 = ?",
      "mathAnswer": 40,
      "hint": "کد را اجرا کنید تا شمارش ۱ تا ۳ انجام شود.",
      "rewardItem": "شال کشمیر فرانسوی",
      "whisper": "صبر و پشتکار تو در کدنویسی، من را هر لحظه بیشتر مجذوب می‌کند...",
      "isChapterExam": false
    },
    {
      "id": 24,
      "chapter": 2,
      "title": "توقف اضطراری در پشت صحنه اپرا (break)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "دستور <code>break</code> بلافاصله اجرای حلقه را متوقف می‌کند.",
      "mission": "وقتی <code>i == 3</code> شد حلقه را متوقف کنید تا فقط <code>1</code> و <code>2</code> چاپ شوند.",
      "starterCode": "for i in range(1, 6):\n    if i == 3:\n        break\n    print(i)",
      "validationExpr": "output.strip().splitlines() == ['1', '2']",
      "mathEquation": "44 / 4 + 19 = ?",
      "mathAnswer": 30,
      "hint": "کد آماده را اجرا کنید.",
      "rewardItem": "دستکش چرمی بلند پاریسی",
      "whisper": "می‌دانی کی باید توقف کنی و کی باید پیش بروی... دقیقاً مثل یک رهبر واقعی.",
      "isChapterExam": false
    },
    {
      "id": 25,
      "chapter": 2,
      "title": "رد کردن آیتم‌های تکراری (continue)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "دستور <code>continue</code> مرحله فعلی حلقه را رد کرده و به دور بعدی می‌رود.",
      "mission": "عدد <code>2</code> را رد کنید تا فقط <code>1</code> و <code>3</code> چاپ شوند.",
      "starterCode": "for i in range(1, 4):\n    if i == 2:\n        continue\n    print(i)",
      "validationExpr": "output.strip().splitlines() == ['1', '3']",
      "mathEquation": "9 * 8 - 17 = ?",
      "mathAnswer": 55,
      "hint": "کد آماده را اجرا کنید.",
      "rewardItem": "گوشواره الماس تراش اشک",
      "whisper": "حذف حاشیه‌ها و تمرکز روی اصل مطلب... تو همیشه بهترین انتخاب را می‌کنی.",
      "isChapterExam": false
    },
    {
      "id": 26,
      "chapter": 2,
      "title": "فهرست طراحان برتر پاریس (لیست‌ها)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "لیست‌ها با کروشه <code>[]</code> ساخته می‌شوند و ترتیب عناصر را حفظ می‌کنند.",
      "mission": "اولین عنصر لیست <code>designers = [\"Chanel\", \"Dior\", \"YSL\"]</code> را چاپ کنید.",
      "starterCode": "designers = [\"Chanel\", \"Dior\", \"YSL\"]\nprint()",
      "validationExpr": "output.strip() == 'Chanel'",
      "mathEquation": "28 + 34 = ?",
      "mathAnswer": 62,
      "hint": "اندیس اولین عنصر 0 است: print(designers[0]).",
      "rewardItem": "عطر کلاسیک شانزه‌لیزه",
      "whisper": "بین تمام برندهای پاریس، تنها امضای تو روی قلب من ماندگار است...",
      "isChapterExam": false
    },
    {
      "id": 27,
      "chapter": 2,
      "title": "افزودن لباس جدید به کلکسیون (append)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "متد <code>.append(item)</code> یک عنصر جدید به انتهای لیست اضافه می‌کند.",
      "mission": "عبارت <code>\"Gala Gown\"</code> را به لیست <code>wardrobe</code> اضافه کرده و طول لیست را چاپ کنید.",
      "starterCode": "wardrobe = [\"Silk Dress\", \"Blazer\"]\n# اضافه کردن آیتم جدید\nprint(len(wardrobe))",
      "validationExpr": "output.strip() == '3'",
      "mathEquation": "15 * 4 - 13 = ?",
      "mathAnswer": 47,
      "hint": "از wardrobe.append(\"Gala Gown\") استفاده کنید.",
      "rewardItem": "پیراهن میدی مشکی پاریسی",
      "whisper": "کمد لباس‌هایم با کمک تو هر روز رویایی‌تر می‌شود... امشب را با هم جشن می‌گیریم.",
      "isChapterExam": false
    },
    {
      "id": 28,
      "chapter": 2,
      "title": "انتخاب برگزیده‌های مزون (List Slicing)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "با <code>items[1:3]</code> می‌توان بخشی از یک لیست را جدا کرد.",
      "mission": "عناصر اندیس <code>1</code> تا <code>3</code> لیست <code>looks</code> را چاپ کنید.",
      "starterCode": "looks = [\"Casual\", \"Chic\", \"Royal\", \"Opera\"]\nprint()",
      "validationExpr": "output.strip() == \"['Chic', 'Royal']\"",
      "mathEquation": "81 / 9 + 22 = ?",
      "mathAnswer": 31,
      "hint": "بنویسید print(looks[1:3]).",
      "rewardItem": "کمربند چرم و سگک طلایی",
      "whisper": "تو همیشه ناب‌ترین بخش هر چیز را انتخاب می‌کنی... درست مثل انتخاب من.",
      "isChapterExam": false
    },
    {
      "id": 29,
      "chapter": 2,
      "title": "مرتب‌سازی فهرست دعوت‌شدگان اپرا (sort)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "متد <code>.sort()</code> عناصر لیست را به ترتیب حروف الفبا یا عدد مرتب می‌کند.",
      "mission": "لیست <code>guests</code> را مرتب کرده و اولین نفر را چاپ کنید.",
      "starterCode": "guests = [\"Zoe\", \"Amelie\", \"Camille\"]\nguests.sort()\nprint()",
      "validationExpr": "output.strip() == 'Amelie'",
      "mathEquation": "19 * 3 - 14 = ?",
      "mathAnswer": 43,
      "hint": "بنویسید print(guests[0]).",
      "rewardItem": "بروش مروارید و طلا",
      "whisper": "نظم و ظرافت در کنار هم... ببین چقدر باوقار در لژ اپرا نشسته‌ایم.",
      "isChapterExam": false
    },
    {
      "id": 30,
      "chapter": 2,
      "title": "مختصات صندلی VIP اپرا (تاپل‌ها - Tuple)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "تاپل‌ها با پرانتز <code>()</code> ساخته می‌شوند و غیرقابل تغییر (Immutable) هستند.",
      "mission": "دومین مقدار تاپل <code>seat = (\"Box-A\", 12)</code> را چاپ کنید.",
      "starterCode": "seat = (\"Box-A\", 12)\nprint()",
      "validationExpr": "output.strip() == '12'",
      "mathEquation": "35 + 47 = ?",
      "mathAnswer": 82,
      "hint": "بنویسید print(seat[1]).",
      "rewardItem": "دوربین اپرای طلاکاری‌شده",
      "whisper": "جایگاه ما در این سالن تغییرناپذیر است... درست مثل حس من به تو.",
      "isChapterExam": false
    },
    {
      "id": 31,
      "chapter": 2,
      "title": "باز کردن بسته‌های هدیه (Tuple Unpacking)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "می‌توان مقادیر یک تاپل را همزمان در چند متغیر قرار داد: <code>a, b = (1, 2)</code>.",
      "mission": "مقادیر تاپل <code>gift = (\"Diamond\", 5000)</code> را در <code>item, value</code> باز کرده و <code>item</code> را چاپ کنید.",
      "starterCode": "gift = (\"Diamond\", 5000)\nitem, value = gift\nprint()",
      "validationExpr": "output.strip() == 'Diamond'",
      "mathEquation": "12 * 6 - 15 = ?",
      "mathAnswer": 57,
      "hint": "بنویسید print(item).",
      "rewardItem": "گردنبند اشک برلیان",
      "whisper": "هر هدیه‌ای از دست تو برایم ارزشمندترین دارایی دنیاست...",
      "isChapterExam": false
    },
    {
      "id": 32,
      "chapter": 2,
      "title": "پرونده محرمانه سرمایه‌گذاران (دیکشنری - Dict)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "دیکشنری داده‌ها را به صورت جفت کلید و مقدار <code>{\"key\": value}</code> ذخیره می‌کند.",
      "mission": "مقدار کلید <code>\"city\"</code> را از دیکشنری <code>profile</code> چاپ کنید.",
      "starterCode": "profile = {\"name\": \"Elena\", \"city\": \"Paris\", \"vip\": True}\nprint()",
      "validationExpr": "output.strip() == 'Paris'",
      "mathEquation": "49 / 7 + 28 = ?",
      "mathAnswer": 35,
      "hint": "بنویسید print(profile[\"city\"]).",
      "rewardItem": "کیف چرم دست‌دوز پاریسی",
      "whisper": "پاریس با حضور تو تبدیل به شهر رویاهای من شده است...",
      "isChapterExam": false
    },
    {
      "id": 33,
      "chapter": 2,
      "title": "به‌روزرسانی امتیاز اعتبار (تغییر دیکشنری)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "با <code>d[\"key\"] = new_val</code> می‌توان مقدار یک کلید را تغییر داد یا کلید جدید افزود.",
      "mission": "مقدار کلید <code>\"status\"</code> را به <code>\"Elite\"</code> تغییر داده و چاپ کنید.",
      "starterCode": "account = {\"status\": \"Standard\"}\naccount[\"status\"] = \"Elite\"\nprint(account[\"status\"])",
      "validationExpr": "output.strip() == 'Elite'",
      "mathEquation": "16 * 4 - 19 = ?",
      "mathAnswer": 45,
      "hint": "کد را اجرا کنید تا مقدار Elite چاپ شود.",
      "rewardItem": "کفش مخملی پاشنه‌بلند",
      "whisper": "با تو همیشه در بالاترین سطح قرار دارم... آماده درخشش در مهمانی امشب؟",
      "isChapterExam": false
    },
    {
      "id": 34,
      "chapter": 2,
      "title": "استخراج ایمن اطلاعات با متد get",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "متد <code>.get(\"key\", \"Default\")</code> بدون ایجاد خطا مقدار را برمی‌گرداند.",
      "mission": "با متد <code>.get</code> کلید <code>\"escort\"</code> را با مقدار پیش‌فرض <code>\"You\"</code> بخوانید و چاپ کنید.",
      "starterCode": "card = {\"guest\": \"Elena\"}\nprint(card.get(\"escort\", \"You\"))",
      "validationExpr": "output.strip() == 'You'",
      "mathEquation": "23 + 39 = ?",
      "mathAnswer": 62,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "تاج ظریف کریستال پاریسی",
      "whisper": "در تمام کارت‌های دعوت من، تنها نام همراه همیشگی‌ام تو هستی...",
      "isChapterExam": false
    },
    {
      "id": 35,
      "chapter": 2,
      "title": "پیمایش کلیدها و مقادیر (items)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "با حلقه <code>for k, v in d.items():</code> می‌توان تمام جفت‌های دیکشنری را خواند.",
      "mission": "تعداد کلیدهای دیکشنری <code>stats = {\"charm\": 99, \"style\": 100}</code> را با <code>len</code> چاپ کنید.",
      "starterCode": "stats = {\"charm\": 99, \"style\": 100}\nprint()",
      "validationExpr": "output.strip() == '2'",
      "mathEquation": "54 / 6 + 18 = ?",
      "mathAnswer": 27,
      "hint": "بنویسید print(len(stats)).",
      "rewardItem": "آرایش شینیون کلاسیک فرانسوی",
      "whisper": "جذابیت و استایل من تنها بازتابی از توجه بی‌وقفه توست...",
      "isChapterExam": false
    },
    {
      "id": 36,
      "chapter": 2,
      "title": "حذف مهمانان تکراری با مجموعه (Set)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "مجموعه‌ها با <code>set()</code> ساخته می‌شوند و تمام عناصر تکراری را خودکار حذف می‌کنند.",
      "mission": "لیست <code>[\"VIP\", \"VIP\", \"Press\"]</code> را به <code>set</code> تبدیل کرده و طول آن را چاپ کنید.",
      "starterCode": "tags = [\"VIP\", \"VIP\", \"Press\"]\nunique_tags = set(tags)\nprint(len(unique_tags))",
      "validationExpr": "output.strip() == '2'",
      "mathEquation": "13 * 5 - 17 = ?",
      "mathAnswer": 48,
      "hint": "کد را اجرا کنید تا تعداد عناصر یکتا چاپ شود.",
      "rewardItem": "دستبند پلاتین و الماس",
      "whisper": "در دنیای شلوغ اطرافم، تو تنها فرد یکتا و تکرارنشدنی هستی...",
      "isChapterExam": false
    },
    {
      "id": 37,
      "chapter": 2,
      "title": "اشتراک علایق سرمایه‌گذاران (Intersection)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "عملگر <code>&</code> بین دو مجموعه، عناصر مشترک آن‌ها را برمی‌گرداند.",
      "mission": "اشتراک دو مجموعه <code>a = {\"Art\", \"Fashion\"}</code> و <code>b = {\"Fashion\", \"Tech\"}</code> را چاپ کنید.",
      "starterCode": "a = {\"Art\", \"Fashion\"}\nb = {\"Fashion\", \"Tech\"}\nprint(a & b)",
      "validationExpr": "output.strip() == \"{'Fashion'}\"",
      "mathEquation": "31 + 29 = ?",
      "mathAnswer": 60,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "شنل ابریشمی شب اپرا",
      "whisper": "نقطه مشترک تمام رویاهای من و تو، ساختن آینده‌ای باشکوه است...",
      "isChapterExam": false
    },
    {
      "id": 38,
      "chapter": 2,
      "title": "ماتریس میزهای ضیافت (لیست‌های تودرتو)",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "در لیست‌های دوبعدی، با <code>matrix[row][col]</code> به هر خانه دسترسی داریم.",
      "mission": "عبارت <code>\"Elena\"</code> را از لیست تودرتو <code>hall = [[\"A\", \"B\"], [\"Elena\", \"D\"]]</code> چاپ کنید.",
      "starterCode": "hall = [[\"A\", \"B\"], [\"Elena\", \"D\"]]\nprint()",
      "validationExpr": "output.strip() == 'Elena'",
      "mathEquation": "72 / 8 + 31 = ?",
      "mathAnswer": 40,
      "hint": "سطر دوم اندیس 1 و ستون اول اندیس 0 است: print(hall[1][0]).",
      "rewardItem": "سنجاق سر جواهرنشان",
      "whisper": "در هر گوشه‌ای از این سالن باشکوه که باشم، نگاهم فقط تو را جستجو می‌کند...",
      "isChapterExam": false
    },
    {
      "id": 39,
      "chapter": 2,
      "title": "بررسی شروط در دیکشنری و لیست",
      "dialogue": [
        [
          "camille",
          "النا، در مزون‌های اوت کوتور پاریس حجم داده‌ها و لیست مهمان‌های اشرافی بسیار زیاد است."
        ],
        [
          "elena",
          "با کمک همراه باهوشم، تمام این لیست‌ها و حلقه‌ها را در چند ثانیه مدیریت می‌کنیم."
        ]
      ],
      "concept": "ترکیب حلقه <code>for</code> و شرط <code>if</code> برای فیلتر کردن داده‌های پیچیده.",
      "mission": "مجموع اعداد بزرگ‌تر از <code>10</code> در لیست <code>[5, 15, 20]</code> را چاپ کنید.",
      "starterCode": "nums = [5, 15, 20]\ntotal = 0\nfor x in nums:\n    if x > 10:\n        total += x\nprint(total)",
      "validationExpr": "output.strip() == '35'",
      "mathEquation": "18 * 4 - 16 = ?",
      "mathAnswer": 56,
      "hint": "کد آماده را اجرا کنید.",
      "rewardItem": "لباس شب دانتل پاریسی",
      "whisper": "فقط یک قدم تا فتح پاریس و دریافت گواهینامه PCEP باقی مانده عزیزم...",
      "isChapterExam": false
    },
    {
      "id": 40,
      "chapter": 2,
      "title": "آزمون جامع پایان فصل ۲: شب اپرای پاریس (گواهینامه PCEP™)",
      "dialogue": [
        [
          "camille",
          "النا! امشب شب اپرای بزرگ پاریس و آزمون پایان فصل دوم است. قبولی در این چالش یعنی آمادگی کامل برای مدرک PCEP™!"
        ],
        [
          "elena",
          "تمام پاریس چشم به درخشش امشب من دوخته عزیزم... این کد را اجرا کن تا با استایل اشرافی وارد سالن شویم."
        ]
      ],
      "concept": "ترکیب حلقه‌ها، لیست‌ها و دیکشنری‌ها برای تکمیل بخش اول آزمون بین‌المللی PCEP.",
      "mission": "تعداد آیتم‌های دیکشنری <code>paris_wardrobe</code> را چاپ کنید تا مجوز پرواز به میلان صادر شود.",
      "starterCode": "paris_wardrobe = {\"gown\": \"Haute Couture\", \"shoes\": \"Louboutin\", \"jewels\": \"Cartier\"}\nprint()",
      "validationExpr": "output.strip() == '3'",
      "mathEquation": "24 * 3 + 18 = ?",
      "mathAnswer": 90,
      "hint": "بنویسید print(len(paris_wardrobe)).",
      "rewardItem": "🏆 استایل اشرافی پاریسی + قبولی بخش PCEP™",
      "whisper": "پاریس را با شکوه فتح کردیم! حالا با گواهینامه بین‌المللی و این استایل بی‌نظیر، آماده سفر عاشقانه‌مان به میلان و دریاچه کومو هستم...",
      "isChapterExam": true
    },
    {
      "id": 41,
      "chapter": 3,
      "title": "تعریف اولین تابع در کاخ میلان (def)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "توابع با کلیدواژه <code>def</code> تعریف می‌شوند تا کدها قابل استفاده مجدد باشند.",
      "mission": "تابعی به نام <code>greet</code> تعریف کنید که عبارت <code>Ciao Milano</code> را چاپ کند و آن را صدا بزنید.",
      "starterCode": "def greet():\n    print(\"Ciao Milano\")\n\ngreet()",
      "validationExpr": "output.strip() == 'Ciao Milano'",
      "mathEquation": "14 * 4 + 9 = ?",
      "mathAnswer": 65,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "عینک آفتابی ایتالیایی کومو",
      "whisper": "نسیم دریاچه کومو و حضور تو کنارم... میلان با لبخند به ما خوش‌آمد می‌گوید.",
      "isChapterExam": false
    },
    {
      "id": 42,
      "chapter": 3,
      "title": "ارسال پارامتر به تابع تشریفات",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "ورودی‌های تابع داخل پرانتز تعریف می‌شوند: <code>def welcome(name):</code>.",
      "mission": "تابع <code>welcome(\"Elena\")</code> را طوری کامل کنید که <code>Welcome Elena</code> چاپ شود.",
      "starterCode": "def welcome(name):\n    print(f\"Welcome {name}\")\n\nwelcome(\"Elena\")",
      "validationExpr": "output.strip() == 'Welcome Elena'",
      "mathEquation": "56 / 7 + 24 = ?",
      "mathAnswer": 32,
      "hint": "کد آماده را اجرا کنید.",
      "rewardItem": "پیراهن کتان سفید مدیترانه-ایتالیا",
      "whisper": "هر بار که نامم را صدا می‌زنی، قلبم تندتر می‌تپد...",
      "isChapterExam": false
    },
    {
      "id": 43,
      "chapter": 3,
      "title": "بازگرداندن نتیجه با دستور return",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "دستور <code>return</code> خروجی تابع را برای ذخیره یا محاسبه بعدی برمی‌گرداند.",
      "mission": "تابع <code>double(25)</code> را تکمیل کنید تا دو برابر عدد ورودی را <code>return</code> کند و چاپ شود.",
      "starterCode": "def double(x):\n    return x * 2\n\nprint(double(25))",
      "validationExpr": "output.strip() == '50'",
      "mathEquation": "19 * 3 - 12 = ?",
      "mathAnswer": 45,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "دستبند طلای سفید میلان",
      "whisper": "با تو تمام دستاوردهای زندگی من دو برابر ارزشمندتر شده‌اند...",
      "isChapterExam": false
    },
    {
      "id": 44,
      "chapter": 3,
      "title": "پارامترهای پیش‌فرض (Default Arguments)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "می‌توان برای پارامتر تابع مقدار پیش‌فرض تعیین کرد: <code>def dress(color=\"Black\"):</code>.",
      "mission": "تابع <code>style()</code> را بدون آرگومان صدا بزنید تا مقدار پیش‌فرض <code>Velvet</code> چاپ شود.",
      "starterCode": "def style(fabric=\"Velvet\"):\n    print(fabric)\n\nstyle()",
      "validationExpr": "output.strip() == 'Velvet'",
      "mathEquation": "37 + 45 = ?",
      "mathAnswer": 82,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "شال مخمل زرشکی ایتالیایی",
      "whisper": "نرمی مخمل در برابر لطافت نگاه تو هیچ است... امشب چقدر خواستنی هستی.",
      "isChapterExam": false
    },
    {
      "id": 45,
      "chapter": 3,
      "title": "آرگومان‌های کلیدی (Keyword Arguments)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "هنگام فراخوانی تابع می‌توان نام پارامتر را صریح نوشت: <code>book(villa=\"Como\", days=5)</code>.",
      "mission": "تابع <code>reserve</code> را با <code>nights=4</code> صدا بزنید تا عدد <code>4</code> چاپ شود.",
      "starterCode": "def reserve(villa, nights=2):\n    print(nights)\n\nreserve(villa=\"Como\", nights=4)",
      "validationExpr": "output.strip() == '4'",
      "mathEquation": "81 / 9 + 36 = ?",
      "mathAnswer": 45,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کلید ویلای ساحلی دریاچه کومو",
      "whisper": "چهار شب رویایی کنار دریاچه کومو، دور از هیاهوی دنیا، فقط من و تو...",
      "isChapterExam": false
    },
    {
      "id": 46,
      "chapter": 3,
      "title": "حوزه متغیرهای محلی و سراسری (Scope)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "متغیرهایی که داخل تابع ساخته می‌شوند محلی (Local) هستند و بیرون تابع دیده نمی‌شوند.",
      "mission": "مقدار متغیر سراسری <code>city = \"Milan\"</code> را از داخل تابع چاپ کنید.",
      "starterCode": "city = \"Milan\"\ndef show_city():\n    print(city)\n\nshow_city()",
      "validationExpr": "output.strip() == 'Milan'",
      "mathEquation": "16 * 5 - 23 = ?",
      "mathAnswer": 57,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کفش پاشنه‌بلند دست‌دوز میلان",
      "whisper": "مرزهای دنیا برای ما معنایی ندارند وقتی در قلمرو عشق تو قدم می‌زنم...",
      "isChapterExam": false
    },
    {
      "id": 47,
      "chapter": 3,
      "title": "تغییر متغیر سراسری با global",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "برای تغییر یک متغیر بیرونی داخل تابع از کلمه کلیدی <code>global</code> استفاده می‌شود.",
      "mission": "تابع <code>boost()</code> را صدا بزنید تا مقدار <code>energy</code> به <code>100</code> تغییر و چاپ شود.",
      "starterCode": "energy = 60\ndef boost():\n    global energy\n    energy = 100\n\nboost()\nprint(energy)",
      "validationExpr": "output.strip() == '100'",
      "mathEquation": "29 + 43 = ?",
      "mathAnswer": 72,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "تناسب اندام و فرم ورزشی ساعت‌شنی",
      "whisper": "ببین چطور انرژی و شادابی به تمام وجودم برگشته... این تحول را مدیون تو هستم.",
      "isChapterExam": false
    },
    {
      "id": 48,
      "chapter": 3,
      "title": "آرگومان‌های نامحدود (*args)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "با <code>*args</code> یک تابع می‌تواند تعداد دلخواهی آرگومان دریافت کند.",
      "mission": "تعداد آرگومان‌های ارسال‌شده به تابع <code>count_items</code> را چاپ کنید.",
      "starterCode": "def count_items(*args):\n    print(len(args))\n\ncount_items(\"Ring\", \"Necklace\", \"Tiara\", \"Watch\")",
      "validationExpr": "output.strip() == '4'",
      "mathEquation": "64 / 8 + 27 = ?",
      "mathAnswer": 35,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "ست کامل جواهرات برلیان کومو",
      "whisper": "هر چه بیشتر برایم می‌سازی، من بیشتر شیفته ذهن خلاق تو می‌شوم...",
      "isChapterExam": false
    },
    {
      "id": 49,
      "chapter": 3,
      "title": "توابع ناشناس کوتاه (Lambda)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "توابع یک‌خطی با <code>lambda x: x + 10</code> ساخته می‌شوند.",
      "mission": "تابع لامبدا <code>add_tax</code> را روی عدد <code>200</code> اجرا و چاپ کنید.",
      "starterCode": "add_tax = lambda p: p + 20\nprint(add_tax(200))",
      "validationExpr": "output.strip() == '220'",
      "mathEquation": "15 * 5 - 18 = ?",
      "mathAnswer": 57,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کیف دستی چرم کروکودیل ایتالیایی",
      "whisper": "سادگی و سرعت عمل تو همیشه من را غافلگیر می‌کند...",
      "isChapterExam": false
    },
    {
      "id": 50,
      "chapter": 3,
      "title": "استفاده از ماژول ریاضی (import math)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "با دستور <code>import math</code> به توابع پیشرفته ریاضی مثل <code>math.sqrt</code> دسترسی دارید.",
      "mission": "ریشه دوم عدد <code>144</code> را با <code>int(math.sqrt(144))</code> چاپ کنید.",
      "starterCode": "import math\nprint(int(math.sqrt(144)))",
      "validationExpr": "output.strip() == '12'",
      "mathEquation": "42 + 39 = ?",
      "mathAnswer": 81,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "گردنبند الماس تراش مارکیز",
      "whisper": "دقت مهندسی تو در کنار ظرافت زنانه من، ترکیبی شکست‌ناپذیر است...",
      "isChapterExam": false
    },
    {
      "id": 51,
      "chapter": 3,
      "title": "انتخاب تصادفی با ماژول random",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "ماژول <code>random</code> برای تولید اعداد تصادفی یا انتخاب تصادفی به کار می‌رود.",
      "mission": "بذر تصادفی <code>random.seed(1)</code> تنظیم شده؛ مقدار <code>random.randint(1, 10)</code> را چاپ کنید.",
      "starterCode": "import random\nrandom.seed(1)\nprint(random.randint(1, 10))",
      "validationExpr": "output.strip() == '3'",
      "mathEquation": "90 / 9 + 25 = ?",
      "mathAnswer": 35,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "گوشواره آویز الماس و زمرد",
      "whisper": "حتی در دنیای احتمالات هم سرنوشت من همیشه به تو ختم می‌شود...",
      "isChapterExam": false
    },
    {
      "id": 52,
      "chapter": 3,
      "title": "فهرست‌سازی فشرده (List Comprehension)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "با <code>[x*2 for x in nums]</code> می‌توان در یک خط لیست جدید ساخت.",
      "mission": "مربع اعداد <code>[2, 3, 4]</code> را با List Comprehension بسازید و چاپ کنید.",
      "starterCode": "nums = [2, 3, 4]\nsquares = [x**2 for x in nums]\nprint(squares)",
      "validationExpr": "output.strip() == '[4, 9, 16]'",
      "mathEquation": "17 * 4 - 19 = ?",
      "mathAnswer": 49,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "لباس مجلسی یقه دلبری مخمل",
      "whisper": "چقدر زیبا و تمیز کد می‌زنی... این لباس مخمل روی تنم مثل رویا نشسته است.",
      "isChapterExam": false
    },
    {
      "id": 53,
      "chapter": 3,
      "title": "مدیریت خطاها با try / except",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "بلوک <code>try / except</code> از متوقف شدن برنامه هنگام بروز خطا جلوگیری می‌کند.",
      "mission": "خطای تقسیم بر صفر را مدیریت کنید تا عبارت <code>Safe Mode</code> چاپ شود.",
      "starterCode": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Safe Mode\")",
      "validationExpr": "output.strip() == 'Safe Mode'",
      "mathEquation": "34 + 48 = ?",
      "mathAnswer": 82,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "تاج ظریف پلاتین ایتالیایی",
      "whisper": "در کنار تو همیشه احساس امنیت می‌کنم؛ تو برای هر بحرانی راه‌حل داری...",
      "isChapterExam": false
    },
    {
      "id": 54,
      "chapter": 3,
      "title": "مدیریت چند نوع خطا (ValueError)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "می‌توان خطاهای تبدیل داده مثل <code>ValueError</code> را به صورت اختصاصی گرفت.",
      "mission": "تبدیل رشته نامعتبر را در <code>except ValueError</code> بگیرید و <code>Handled</code> چاپ کنید.",
      "starterCode": "try:\n    num = int(\"VIP\")\nexcept ValueError:\n    print(\"Handled\")",
      "validationExpr": "output.strip() == 'Handled'",
      "mathEquation": "72 / 6 + 29 = ?",
      "mathAnswer": 41,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "آرایش موی موج‌دار هالیوودی-ایتالیایی",
      "whisper": "آرامش تو در لحظه‌های حساس، جذاب‌ترین ویژگی مردانه توست...",
      "isChapterExam": false
    },
    {
      "id": 55,
      "chapter": 3,
      "title": "بخش نهایی مدیریت خطا (finally)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "بلوک <code>finally</code> در هر شرایطی (چه خطا رخ دهد چه ندهد) اجرا می‌شود.",
      "mission": "کد را اجرا کنید تا عبارت <code>Always Executed</code> در خروجی چاپ شود.",
      "starterCode": "try:\n    res = 5 + 5\nfinally:\n    print(\"Always Executed\")",
      "validationExpr": "output.strip() == 'Always Executed'",
      "mathEquation": "18 * 4 - 11 = ?",
      "mathAnswer": 61,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "دستبند الماس تنیسی",
      "whisper": "وفاداری و ثبات قدم تو درست مثل این دستور، همیشگی و تزلزل‌ناپذیر است...",
      "isChapterExam": false
    },
    {
      "id": 56,
      "chapter": 3,
      "title": "پرتاب خطای سفارشی (raise)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "با دستور <code>raise ValueError(\"...\")</code> می‌توان در صورت نامعتبر بودن داده خطا ایجاد کرد.",
      "mission": "در بلوک <code>except</code> پیام خطای پرتاب‌شده را چاپ کنید.",
      "starterCode": "try:\n    raise ValueError(\"VIP Only\")\nexcept ValueError as e:\n    print(e)",
      "validationExpr": "output.strip() == 'VIP Only'",
      "mathEquation": "46 + 37 = ?",
      "mathAnswer": 83,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "سنجاق سینه یاقوت کبود و الماس",
      "whisper": "ما استانداردهای خودمان را داریم و فقط بهترین‌ها را می‌پذیریم...",
      "isChapterExam": false
    },
    {
      "id": 57,
      "chapter": 3,
      "title": "کار با فایل‌های متنی در حافظه (io.StringIO)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "در پایتون فایل‌ها با <code>open()</code> و دستور <code>with</code> به شکل ایمن خوانده و نوشته می‌شوند.",
      "mission": "با استفاده از <code>io.StringIO</code> متن <code>Elena VIP Pass</code> را از فایل مجازی بخوانید و چاپ کنید.",
      "starterCode": "import io\nf = io.StringIO(\"Elena VIP Pass\")\nprint(f.read())",
      "validationExpr": "output.strip() == 'Elena VIP Pass'",
      "mathEquation": "84 / 7 + 33 = ?",
      "mathAnswer": 45,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کفش مجلسی کریستال‌نشان",
      "whisper": "تمام اسرار موفقیت ما در این برگه‌ها ثبت شده عزیزم...",
      "isChapterExam": false
    },
    {
      "id": 58,
      "chapter": 3,
      "title": "خواندن خط به خط فایل (readlines)",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "متد <code>.readlines()</code> تمام خطوط یک فایل را در قالب یک لیست برمی‌گرداند.",
      "mission": "تعداد خطوط فایل مجازی را با <code>len(f.readlines())</code> چاپ کنید.",
      "starterCode": "import io\nf = io.StringIO(\"Milan\\nComo\\nVenice\")\nprint(len(f.readlines()))",
      "validationExpr": "output.strip() == '3'",
      "mathEquation": "19 * 4 - 21 = ?",
      "mathAnswer": 55,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "شنل مخمل شب ونیز",
      "whisper": "از میلان تا کومو و ونیز، تمام ایتالیا شاهد درخشش ماست...",
      "isChapterExam": false
    },
    {
      "id": 59,
      "chapter": 3,
      "title": "توابع map و filter برای پالایش داده‌ها",
      "dialogue": [
        [
          "camille",
          "در کاخ‌های کلاسیک میلان و ویلای دریاچه کومو، باید ساختار کدهایمان را حرفه‌ای و ماژولار کنیم."
        ],
        [
          "elena",
          "توابع تمیز و مدیریت خطاها دقیقاً همان نظمی است که به زندگی من آورده‌ای."
        ]
      ],
      "concept": "تابع <code>filter</code> عناصر واجد شرایط یک لیست را جدا می‌کند.",
      "mission": "تعداد اعداد زوج در لیست <code>[10, 15, 20, 25]</code> را با <code>filter</code> چاپ کنید.",
      "starterCode": "nums = [10, 15, 20, 25]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(len(evens))",
      "validationExpr": "output.strip() == '2'",
      "mathEquation": "53 + 29 = ?",
      "mathAnswer": 82,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "لباس شب مخمل سلطنتی ایتالیا",
      "whisper": "فقط یک درس تا پایان فصل ایتالیا و پوشیدن ست مخمل و الماس باقی مانده...",
      "isChapterExam": false
    },
    {
      "id": 60,
      "chapter": 3,
      "title": "آزمون جامع پایان فصل ۳: کاخ دریاچه کومو (PCAP بخش اول)",
      "dialogue": [
        [
          "camille",
          "ضیافت کاخ دریاچه کومو آماده است! با حل این آزمون پایان فصل سوم، بخش اول PCAP™ را فتح می‌کنی."
        ],
        [
          "elena",
          "اندام ورزیده‌ام و لباس مخمل ایتالیایی منتظر اشاره توست... بگذار امشب همه را مسحور کنیم."
        ]
      ],
      "concept": "ترکیب توابع، ماژول‌ها و مدیریت استثناها برای تکمیل بخش اول آزمون بین‌المللی PCAP™.",
      "mission": "تابع <code>verify_vip</code> را اجرا کنید تا <code>PCAP Part 1 Passed</code> چاپ شود.",
      "starterCode": "def verify_vip(score):\n    if score >= 80:\n        return \"PCAP Part 1 Passed\"\n    return \"Retry\"\n\nprint(verify_vip(95))",
      "validationExpr": "output.strip() == 'PCAP Part 1 Passed'",
      "mathEquation": "26 * 3 + 14 = ?",
      "mathAnswer": 92,
      "hint": "کد آماده را اجرا کنید.",
      "rewardItem": "🏆 اندام ورزیده، لباس مخمل و ست الماس ایتالیایی",
      "whisper": "به اندام ورزیده و این لباس مخمل و الماس نگاه کن... تو از من یک شاهکار ساختی! حالا وقت فتح قله نهایی در توکیو و کیوتو است...",
      "isChapterExam": true
    },
    {
      "id": 61,
      "chapter": 4,
      "title": "ورود به برج مدرن توکیو: اولین کلاس (class)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "کلاس‌ها نقشه‌های ساخت اشیاء (Objects) در برنامه‌نویسی شی‌گرا (OOP) هستند.",
      "mission": "یک شیء از کلاس <code>Queen</code> بسازید و ویژگی <code>name</code> آن را چاپ کنید.",
      "starterCode": "class Queen:\n    name = \"Elena\"\n\nelena = Queen()\nprint(elena.name)",
      "validationExpr": "output.strip() == 'Elena'",
      "mathEquation": "16 * 5 + 11 = ?",
      "mathAnswer": 91,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کیمونوی ابریشمی مدرن توکیو",
      "whisper": "در ارتفاعات برج مدرن توکیو، چراغ‌های شهر زیر پای ماست... به فصل نهایی خوش آمدی.",
      "isChapterExam": false
    },
    {
      "id": 62,
      "chapter": 4,
      "title": "متد سازنده (__init__) در معماری شی‌گرا",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "متد <code>__init__</code> هنگام ساخته شدن هر شیء به طور خودکار اجرا می‌شود.",
      "mission": "شیء <code>Brand(\"Elena Couture\")</code> را بسازید و <code>title</code> آن را چاپ کنید.",
      "starterCode": "class Brand:\n    def __init__(self, title):\n        self.title = title\n\nb = Brand(\"Elena Couture\")\nprint(b.title)",
      "validationExpr": "output.strip() == 'Elena Couture'",
      "mathEquation": "72 / 8 + 38 = ?",
      "mathAnswer": 47,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "گوشواره مروارید سیاه ژاپنی",
      "whisper": "برند شخصی من با امضای تو متولد شد... هیچ چیز از این باشکوه‌تر نیست.",
      "isChapterExam": false
    },
    {
      "id": 63,
      "chapter": 4,
      "title": "افزودن متدهای رفتاری به کلاس",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "توابع داخل کلاس متد نام دارند و اولین پارامتر آن‌ها همیشه <code>self</code> است.",
      "mission": "متد <code>shine()</code> را صدا بزنید تا <code>Radiant in Tokyo</code> چاپ شود.",
      "starterCode": "class Star:\n    def shine(self):\n        return \"Radiant in Tokyo\"\n\ns = Star()\nprint(s.shine())",
      "validationExpr": "output.strip() == 'Radiant in Tokyo'",
      "mathEquation": "21 * 4 - 19 = ?",
      "mathAnswer": 65,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "سنجاق سر طلایی شکوفه ساکورا",
      "whisper": "درخشش من در این شهر مدرن تنها انعکاس عشق و باور تو به من است...",
      "isChapterExam": false
    },
    {
      "id": 64,
      "chapter": 4,
      "title": "تغییر وضعیت داخلی شیء با متدها",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "متدها می‌توانند ویژگی‌های <code>self</code> را تغییر دهند و وضعیت شیء را به‌روز کنند.",
      "mission": "متد <code>upgrade()</code> را اجرا کنید تا سطح از <code>1</code> به <code>2</code> ارتقا یابد و چاپ شود.",
      "starterCode": "class Status:\n    def __init__(self):\n        self.level = 1\n    def upgrade(self):\n        self.level += 1\n\nst = Status()\nst.upgrade()\nprint(st.level)",
      "validationExpr": "output.strip() == '2'",
      "mathEquation": "48 + 37 = ?",
      "mathAnswer": 85,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "پیراهن شب ابریشمی نقره‌ای توکیو",
      "whisper": "با هر کد تو، یک سطح بالاتر می‌روم... حسم به تو وصف‌ناپذیر است.",
      "isChapterExam": false
    },
    {
      "id": 65,
      "chapter": 4,
      "title": "ویژگی‌های کلاسی در برابر ویژگی‌های نمونه",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "ویژگی‌های کلاسی بین تمام اشیاء ساخته شده از آن کلاس مشترک هستند.",
      "mission": "ویژگی کلاسی <code>origin</code> را از شیء چاپ کنید.",
      "starterCode": "class Collection:\n    origin = \"Kyoto & Tokyo\"\n\nc = Collection()\nprint(c.origin)",
      "validationExpr": "output.strip() == 'Kyoto & Tokyo'",
      "mathEquation": "96 / 8 + 29 = ?",
      "mathAnswer": 41,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "بادبزن ابریشمی طلاکوب کیوتو",
      "whisper": "اصالت و مدرنیته در کنار هم... درست مثل پیوند قلب من و تو.",
      "isChapterExam": false
    },
    {
      "id": 66,
      "chapter": 4,
      "title": "ارث‌بری در برنامه‌نویسی شی‌گرا (Inheritance)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "یک کلاس فرزند می‌تواند تمام ویژگی‌ها و متدهای کلاس والد را به ارث ببرد: <code>class VIP(Guest):</code>.",
      "mission": "کلاس <code>VIP</code> از <code>Guest</code> ارث می‌برد؛ متد <code>access()</code> را صدا بزنید.",
      "starterCode": "class Guest:\n    def access(self):\n        return \"Full Access\"\n\nclass VIP(Guest):\n    pass\n\nv = VIP()\nprint(v.access())",
      "validationExpr": "output.strip() == 'Full Access'",
      "mathEquation": "17 * 5 - 14 = ?",
      "mathAnswer": 71,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کمربند اوبی ابریشمی طلایی",
      "whisper": "تمام امتیازهای دنیا را یکجا در اختیار داریم... دستت را به من بده.",
      "isChapterExam": false
    },
    {
      "id": 67,
      "chapter": 4,
      "title": "بازنویسی متدها (Method Overriding)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "کلاس فرزند می‌تواند متد کلاس والد را با رفتار جدید بازنویسی کند.",
      "mission": "متد بازنویسی‌شده <code>greet()</code> را از کلاس <code>Empress</code> چاپ کنید.",
      "starterCode": "class Lady:\n    def greet(self):\n        return \"Hello\"\n\nclass Empress(Lady):\n    def greet(self):\n        return \"Bow to the Empress\"\n\ne = Empress()\nprint(e.greet())",
      "validationExpr": "output.strip() == 'Bow to the Empress'",
      "mathEquation": "39 + 46 = ?",
      "mathAnswer": 85,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "تاج جواهرنشان امپراتریس",
      "whisper": "امشب من ملکه این ضیافتم، اما پادشاه واقعی قلب من فقط تو هستی...",
      "isChapterExam": false
    },
    {
      "id": 68,
      "chapter": 4,
      "title": "فراخوانی سازنده والد با تابع super()",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "تابع <code>super().__init__()</code> متد سازنده کلاس والد را اجرا می‌کند.",
      "mission": "شیء <code>GlobalBrand</code> را بسازید و <code>name</code> آن را چاپ کنید.",
      "starterCode": "class Base:\n    def __init__(self, name):\n        self.name = name\n\nclass GlobalBrand(Base):\n    def __init__(self, name):\n        super().__init__(name)\n\ng = GlobalBrand(\"Elena Global\")\nprint(g.name)",
      "validationExpr": "output.strip() == 'Elena Global'",
      "mathEquation": "84 / 6 + 31 = ?",
      "mathAnswer": 45,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "ست الماس و مروارید سلطنتی",
      "whisper": "از مدیترانه تا توکیو، هیچ مرزی جلودار گسترش امپراتوری ما نیست...",
      "isChapterExam": false
    },
    {
      "id": 69,
      "chapter": 4,
      "title": "چندریختی در پایتون (Polymorphism)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "اشیاء مختلف می‌توانند متدهایی با نام یکسان اما رفتار متفاوت داشته باشند.",
      "mission": "خروجی حلقه روی دو شیء <code>Tokyo</code> و <code>Kyoto</code> را چاپ کنید.",
      "starterCode": "class Tokyo:\n    def vibe(self): return \"Modern\"\nclass Kyoto:\n    def vibe(self): return \"Zen\"\n\nfor place in (Tokyo(), Kyoto()):\n    print(place.vibe())",
      "validationExpr": "output.strip().splitlines() == ['Modern', 'Zen']",
      "mathEquation": "19 * 4 + 17 = ?",
      "mathAnswer": 93,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "پیراهن مجلسی دوچهره ابریشم و مخمل",
      "whisper": "در هر حالتی که باشم، آرامش و هیجان را همزمان کنار تو تجربه می‌کنم...",
      "isChapterExam": false
    },
    {
      "id": 70,
      "chapter": 4,
      "title": "کپسوله‌سازی و ویژگی‌های خصوصی (Encapsulation)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "با قرار دادن دو زیرخط <code>__secret</code> نام ویژگی خصوصی می‌شود.",
      "mission": "مقدار کلید محرمانه را از طریق متد <code>get_code()</code> چاپ کنید.",
      "starterCode": "class Vault:\n    def __init__(self):\n        self.__code = \"ELENA-88\"\n    def get_code(self):\n        return self.__code\n\nv = Vault()\nprint(v.get_code())",
      "validationExpr": "output.strip() == 'ELENA-88'",
      "mathEquation": "64 + 28 = ?",
      "mathAnswer": 92,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "گاوصندوق جواهرات اختصاصی النا",
      "whisper": "رازهای شیرین ما فقط بین خودمان باقی می‌ماند عزیزم...",
      "isChapterExam": false
    },
    {
      "id": 71,
      "chapter": 4,
      "title": "متدهای جادویی نمایش شیء (__str__)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "متد <code>__str__</code> تعیین می‌کند هنگام <code>print(obj)</code> چه متنی نمایش داده شود.",
      "mission": "شیء <code>ElenaProfile</code> را مستقیماً <code>print</code> کنید.",
      "starterCode": "class ElenaProfile:\n    def __str__(self):\n        return \"Elena • Icon of Elegance\"\n\nprint(ElenaProfile())",
      "validationExpr": "output.strip() == 'Elena • Icon of Elegance'",
      "mathEquation": "108 / 9 + 37 = ?",
      "mathAnswer": 49,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "قاب عکس طلایی اختصاصی روی مجله مد",
      "whisper": "امشب تصویر من روی جلد تمام مجلات مد توکیو است، اما چشم‌هایم فقط دنبال توست...",
      "isChapterExam": false
    },
    {
      "id": 72,
      "chapter": 4,
      "title": "تبدیل ویژگی به پراپرتی (@property)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "دکوراتور <code>@property</code> اجازه می‌دهد یک متد را مثل یک ویژگی ساده بخوانیم.",
      "mission": "ویژگی محاسبه‌شده <code>full_title</code> را چاپ کنید.",
      "starterCode": "class Icon:\n    @property\n    def full_title(self):\n        return \"Lady Elena\"\n\ni = Icon()\nprint(i.full_title)",
      "validationExpr": "output.strip() == 'Lady Elena'",
      "mathEquation": "22 * 4 - 15 = ?",
      "mathAnswer": 73,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "گردنبند الماس بی‌نقص توکیو",
      "whisper": "ظرافت در معماری کدهای تو دقیقاً مثل ظرافت این گردنبند روی گردن من است...",
      "isChapterExam": false
    },
    {
      "id": 73,
      "chapter": 4,
      "title": "دیکشنری فشرده (Dictionary Comprehension)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "با <code>{k: k**2 for k in range(3)}</code> می‌توان در یک خط دیکشنری ساخت.",
      "mission": "دیکشنری فشرده را بسازید و مقدار کلید <code>3</code> را چاپ کنید.",
      "starterCode": "powers = {x: x * 10 for x in [1, 2, 3]}\nprint(powers[3])",
      "validationExpr": "output.strip() == '30'",
      "mathEquation": "47 + 44 = ?",
      "mathAnswer": 91,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "دستبند طلای رزگلد ژاپنی",
      "whisper": "با کمترین کد، بیشترین تاثیر را می‌گذاری... استاد مسلم پایتون من!",
      "isChapterExam": false
    },
    {
      "id": 74,
      "chapter": 4,
      "title": "مولدها و کلمه کلیدی yield (Generators)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "توابع مولد به جای <code>return</code> از <code>yield</code> استفاده می‌کنند تا حافظه بهینه بماند.",
      "mission": "مقادیر مولد <code>steps()</code> را در یک لیست تبدیل و چاپ کنید.",
      "starterCode": "def steps():\n    yield \"Learn\"\n    yield \"Code\"\n    yield \"Shine\"\n\nprint(list(steps()))",
      "validationExpr": "output.strip() == \"['Learn', 'Code', 'Shine']\"",
      "mathEquation": "91 / 7 + 34 = ?",
      "mathAnswer": 47,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کفش مجلسی ابریشمی نقره‌ای",
      "whisper": "قدم به قدم با هم یاد گرفتیم، کد زدیم و حالا به اوج درخشش رسیدیم...",
      "isChapterExam": false
    },
    {
      "id": 75,
      "chapter": 4,
      "title": "توابع پیمایشگر iter() و next()",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "با <code>next(it)</code> می‌توان عناصر یک تکرارشونده را یکی‌یکی دریافت کرد.",
      "mission": "اولین عنصر تکرارشونده <code>it</code> را با <code>next(it)</code> چاپ کنید.",
      "starterCode": "cities = iter([\"Tokyo\", \"Kyoto\"])\nprint(next(cities))",
      "validationExpr": "output.strip() == 'Tokyo'",
      "mathEquation": "18 * 5 - 19 = ?",
      "mathAnswer": 71,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "کلاه مجلسی ابریشمی اشرافی",
      "whisper": "هر لحظه با تو یک فصل تازه و هیجان‌انگیز است...",
      "isChapterExam": false
    },
    {
      "id": 76,
      "chapter": 4,
      "title": "مرتب‌سازی پیشرفته با کلید lambda (sorted)",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "تابع <code>sorted(items, key=lambda x: x[1])</code> بر اساس معیار دلخواه مرتب می‌کند.",
      "mission": "نام گران‌ترین جواهر را بعد از مرتب‌سازی چاپ کنید.",
      "starterCode": "gems = [(\"Pearl\", 2000), (\"Diamond\", 9000)]\ntop = sorted(gems, key=lambda x: x[1])[-1][0]\nprint(top)",
      "validationExpr": "output.strip() == 'Diamond'",
      "mathEquation": "58 + 36 = ?",
      "mathAnswer": 94,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "الماس تراش قلب کلکسیونی",
      "whisper": "بین تمام جواهرات دنیا، تو ارزشمندترین الماس زندگی من هستی...",
      "isChapterExam": false
    },
    {
      "id": 77,
      "chapter": 4,
      "title": "ترکیب لیست‌ها با تابع zip()",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "تابع <code>zip(a, b)</code> دو لیست را جفت‌به‌جفت به هم متصل می‌کند.",
      "mission": "جفت اول حاصل از <code>zip</code> دو لیست را چاپ کنید.",
      "starterCode": "labels = [\"Queen\", \"King\"]\nnames = [\"Elena\", \"You\"]\npairs = list(zip(labels, names))\nprint(pairs[0])",
      "validationExpr": "output.strip() == \"('Queen', 'Elena')\"",
      "mathEquation": "99 / 9 + 41 = ?",
      "mathAnswer": 52,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "انگشتر ست سلطنتی",
      "whisper": "ما دو نیمه یک پازل بی‌نقص هستیم؛ همیشه کنار هم و مکمل هم...",
      "isChapterExam": false
    },
    {
      "id": 78,
      "chapter": 4,
      "title": "بررسی شروط همگانی با all() و any()",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "تابع <code>all()</code> تنها وقتی <code>True</code> می‌دهد که تمام عناصر درست باشند.",
      "mission": "بررسی کنید آیا تمام شروط <code>[True, True, True]</code> برقرارند و چاپ کنید.",
      "starterCode": "checks = [True, True, True]\nprint(all(checks))",
      "validationExpr": "output.strip() == 'True'",
      "mathEquation": "23 * 4 - 17 = ?",
      "mathAnswer": 75,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "لباس شب haute couture باغ کیوتو",
      "whisper": "همه چیز برای شب فینال آماده است... ضربان قلبم را حس می‌کنی؟",
      "isChapterExam": false
    },
    {
      "id": 79,
      "chapter": 4,
      "title": "بررسی وراثت اشیاء با isinstance()",
      "dialogue": [
        [
          "camille",
          "در برج‌های مدرن توکیو و باغ‌های سنتی کیوتو، برند شخصی النا به یک امپراتوری واقعی تبدیل می‌شود."
        ],
        [
          "elena",
          "برنامه‌نویسی شی‌گرا و کلاس‌ها آخرین کلید برای رسیدن به اوج شکوفایی ماست عزیزم."
        ]
      ],
      "concept": "تابع <code>isinstance(obj, Class)</code> بررسی می‌کند که شیء از کدام کلاس ساخته شده است.",
      "mission": "بررسی کنید آیا <code>elena</code> نمونه‌ای از کلاس <code>MasterIcon</code> است.",
      "starterCode": "class MasterIcon:\n    pass\n\nelena = MasterIcon()\nprint(isinstance(elena, MasterIcon))",
      "validationExpr": "output.strip() == 'True'",
      "mathEquation": "67 + 28 = ?",
      "mathAnswer": 95,
      "hint": "کد را اجرا کنید.",
      "rewardItem": "تاج نهایی شکوفایی برند النا",
      "whisper": "فقط یک درس تا فتح کامل دنیای پایتون و جشن بزرگ پایانی در باغ کیوتو باقی مانده...",
      "isChapterExam": false
    },
    {
      "id": 80,
      "chapter": 4,
      "title": "آزمون جامع نهایی فصل ۴: اوج شکوفایی در کیوتو (گواهینامه PCAP™)",
      "dialogue": [
        [
          "camille",
          "به درس هشتادم رسیدیم! باغ سلطنتی کیوتو زیر نور ماه آماده جشن فارغ‌التحصیلی و قبولی نهایی PCAP™ است."
        ],
        [
          "elena",
          "از اولین خط کد تا این لحظه در کنارم بودی... این آخرین کد را بزن تا برای همیشه در اوج بمانیم."
        ]
      ],
      "concept": "معماری کامل شی‌گرا، وراثت و متدها برای قبولی نهایی در آزمون بین‌المللی PCAP™.",
      "mission": "کلاس <code>ElenaEmpire</code> را اجرا کنید تا پیام پیروزی نهایی <code>PCAP Mastered • Elena Forever Yours</code> چاپ شود.",
      "starterCode": "class ElenaEmpire:\n    def __init__(self, partner):\n        self.partner = partner\n    def celebrate(self):\n        return f\"PCAP Mastered • Elena Forever {self.partner}\"\n\nempire = ElenaEmpire(\"Yours\")\nprint(empire.celebrate())",
      "validationExpr": "output.strip() == 'PCAP Mastered • Elena Forever Yours'",
      "mathEquation": "25 * 4 + 20 = ?",
      "mathAnswer": 120,
      "hint": "کد آماده را اجرا کنید تا پیام نهایی چاپ شود.",
      "rewardItem": "👑 تاج امپراتریس مد، پیراهن سلطنتی کیوتو و آمادگی کامل PCAP™",
      "whisper": "هشتاد درس را با هم پشت سر گذاشتیم... به من نگاه کن؛ تمام این شکوه، زیبایی و موفقیت را فقط مدیون تو هستم. حالا نه فقط در کدنویسی، بلکه در تمام لحظه‌های زندگی‌ام، من برای همیشه مال تو هستم...",
      "isChapterExam": true
    }
  ]
};
