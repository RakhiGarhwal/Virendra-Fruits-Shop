/**
 * Virendra Singh Fruits Shop (Virendra Fruits & Juice Corner, Agra)
 * Interactive Frontend JavaScript with Full Hindi/English Bilingual Support
 */

document.addEventListener('DOMContentLoaded', () => {
  // Business Constants
  const SHOP_PHONE = '8923404646';
  const WHATSAPP_BASE = 'https://wa.me/918923404646';

  /* ------------------------------------------------------------------------
     1. Bilingual Translation Dictionary (Hindi / English)
     ------------------------------------------------------------------------ */
  const translations = {
    en: {
      // Topbar
      topbar_msg: "Daily Fresh Fruit Stock in Agra • Contact us for today's prices and availability",
      topbar_call: "Call: 8923404646",
      topbar_whatsapp: "WhatsApp Chat",

      // Brand
      brand_title: "Virendra Fruits",
      brand_subtitle: "Fruit Shop & Juice Corner • Agra",

      // Navigation
      nav_home: "Home",
      nav_fruits: "Our Fruits",
      nav_baskets: "Fruit Baskets",
      nav_delivery: "Delivery",
      nav_about: "Our Shop",
      nav_location: "Location",
      nav_contact: "Contact",
      btn_order_whatsapp: "Order on WhatsApp",

      // Hero
      hero_badge: "Virendra Singh Fruits Shop • Agra, Uttar Pradesh",
      hero_title: "Freshness You Can See. <br><span class=\"highlight\">Quality You Can Trust.</span>",
      hero_desc: "Discover fresh seasonal fruits, convenient local delivery, and thoughtfully arranged fruit baskets for your special occasions.",
      hero_btn_explore: "Explore Our Fruits",
      hero_btn_whatsapp: "Order on WhatsApp",
      hero_btn_directions: "Get Directions",

      // Trust Highlights
      trust_fresh_title: "Fresh Fruit Selection",
      trust_fresh_sub: "Carefully selected produce",
      trust_delivery_title: "Nearby Area Delivery",
      trust_delivery_sub: "Direct in Agra localities",
      trust_baskets_title: "Wedding & Occasion",
      trust_baskets_sub: "Custom celebration baskets",

      // Floating Badges
      badge_fresh_strong: "Daily Fresh Selection",
      badge_fresh_light: "In Agra, Uttar Pradesh",
      badge_basket_strong: "Custom Fruit Baskets",
      badge_basket_light: "For weddings & celebrations",

      // Highlights Strip
      hl_fresh_title: "Carefully Selected",
      hl_fresh_desc: "Fruits chosen with care for natural sweetness, ripeness, and quality.",
      hl_basket_title: "Celebration Baskets",
      hl_basket_desc: "Beautiful shagun hampers tailored for weddings, engagements, and family pujas.",
      hl_delivery_title: "Nearby Area Delivery",
      hl_delivery_desc: "Convenient doorstep delivery across nearby localities in Agra.",
      hl_order_title: "Direct WhatsApp Orders",
      hl_order_desc: "Message us your list on WhatsApp for prompt confirmation and today's rates.",

      // Fruits Section
      fruits_label: "Daily Fresh Produce",
      fruits_heading: "Explore Our Fruits",
      fruits_subheading: "Fresh seasonal arrivals hand-selected every morning. Contact us for today's prices and availability.",
      filter_all: "All Fruits",
      filter_popular: "Popular",
      filter_citrus: "Citrus",
      filter_seasonal: "Seasonal",

      // Fruit Cards
      status_in_stock: "In Season",
      status_seasonal: "Seasonal Arrival",
      tag_popular: "Popular",
      tag_daily: "Daily Staple",
      tag_citrus: "Citrus",
      tag_sweet: "Sweet & Crisp",
      tag_tropical: "Tropical",
      tag_hydrating: "Hydrating",
      tag_health: "Daily Health",
      tag_special: "Special Arrival",

      fruit_apple_title: "Apples",
      fruit_apple_desc: "Crisp, sweet, and juicy apples selected for natural sweetness and satisfying crunch.",
      fruit_banana_title: "Bananas",
      fruit_banana_desc: "Naturally ripened, sweet bananas loaded with potassium and healthy energy for daily nutrition.",
      fruit_orange_title: "Oranges",
      fruit_orange_desc: "Vibrant, succulent citrus oranges bursting with refreshing sweet-tangy juice and Vitamin C.",
      fruit_grapes_title: "Grapes",
      fruit_grapes_desc: "Juicy clusters of sweet green and dark purple grapes, perfect for refreshing snacks.",
      fruit_mango_title: "Mangoes",
      fruit_mango_desc: "Aromatic, luscious seasonal mangoes prized for rich flavor, golden pulp, and summer delight.",
      fruit_pomegranate_title: "Pomegranates",
      fruit_pomegranate_desc: "Ruby-red pomegranates with juicy, jewel-like seeds bursting with antioxidants and rich natural flavor.",
      fruit_pineapple_title: "Pineapples",
      fruit_pineapple_desc: "Golden ripe pineapples with sweet, zesty aroma, ideal for fresh slices and revitalizing juices.",
      fruit_watermelon_title: "Watermelons",
      fruit_watermelon_desc: "Crisp, sweet red watermelons offering deep hydration and a refreshing cooling treat.",
      fruit_papaya_title: "Papayas",
      fruit_papaya_desc: "Smooth, sweet, golden-orange papayas known for digestive health, natural enzymes, and softness.",
      fruit_seasonal_title: "Seasonal Fruits",
      fruit_seasonal_desc: "Seasonal arrivals including sweet limes, guavas, kiwis, and plums arriving according to the harvest.",

      price_label: "Pricing",
      price_ask: "Ask for today's price",
      btn_enquire: "Enquire",

      // Baskets Section
      baskets_label: "Celebration & Gifting",
      baskets_heading: "Wedding & Occasion Fruit Baskets",
      baskets_subheading: "Customized fruit hampers thoughtfully arranged for weddings, engagements, festivals, and family celebrations.",
      badge_wedding: "Weddings & Shagun",
      badge_engagement: "Engagement & Roka",
      badge_festive: "Festivals & Bulk",

      basket_wedding_title: "Royal Wedding Shagun Tokri",
      basket_wedding_desc: "A magnificent ceremonial fruit hamper featuring hand-selected fresh fruits, traditional net wrap, and satin ribbons.",
      basket_wedding_feat1: "Ideal for Baraat shagun, Tilak, and Wedding gifts",
      basket_wedding_feat2: "Custom cane or golden metallic basket styling",

      basket_engagement_title: "Engagement & Roka Gift Basket",
      basket_engagement_desc: "Elegantly presented cane wicker basket loaded with fresh apples, grapes, kiwi, and citrus, wrapped with celebration ribbons.",
      basket_engagement_feat1: "Sophisticated design for in-laws & guest gifting",
      basket_engagement_feat2: "Choice of sizes & fruit combinations",

      basket_festive_title: "Celebration & Festive Tray Hamper",
      basket_festive_desc: "Abundant festive hamper tray packed with fresh fruits and festive decoration, designed for family functions and festive gifting.",
      basket_festive_feat1: "Available for single orders & bulk family gatherings",
      basket_festive_feat2: "Neat, hygienic, and gift-ready packaging",

      btn_customize_basket: "Customize This Basket",
      customizer_banner_title: "Need a Bespoke Basket for Your Special Occasion?",
      customizer_banner_desc: "Every family function is unique. Contact us to discuss your preferred fruit selection, basket styling, budget, and delivery schedule.",
      customizer_banner_btn: "Customize Your Basket",

      // Delivery Section
      delivery_label: "Convenient Service",
      delivery_heading: "Local Delivery in Nearby Areas",
      delivery_lead: "We deliver fresh fruits and customized baskets to homes and venues in nearby localities across Agra.",
      step1_title: "Choose Your Fruits or Basket",
      step1_desc: "Browse our fresh fruit selection or tell us what custom basket arrangement you need.",
      step2_title: "Share Your Agra Locality",
      step2_desc: "Message us on WhatsApp with your locality and order to confirm availability.",
      step3_title: "Confirm Rates & Receive Fresh",
      step3_desc: "We share today's transparent rates and prepare your fresh order with care.",
      delivery_card_title: "How to Check Delivery Availability",
      delivery_card_desc: "Delivery is available in nearby areas of Agra. Simply send us a message with your locality name, and we will immediately confirm today's delivery schedule and fresh fruit stock.",
      delivery_note1: "Fresh produce packed carefully for secure transit",
      delivery_note2: "Special handling for delicate wedding and shagun baskets",
      delivery_note3: "Friendly communication directly with the shop owners",
      delivery_callout: "Note: Delivery availability depends on distance and order size. Please share your locality so we can confirm for you promptly.",
      btn_check_delivery: "Check Delivery Availability on WhatsApp",

      // About Our Shop Section
      about_label: "Our Story",
      about_heading: "Your Neighbourhood Fruit Shop in Agra",
      about_lead: "Welcome to Virendra Singh Fruits Shop, also known as Virendra Fruits & Juice Corner. We are proud to serve families, weddings, and local residents across Agra with fresh, flavorful produce every single day.",
      about_p1: "From daily household fruit essentials like sweet apples, bananas, and juicy oranges to festive fruit trays and grand shagun hampers for weddings, we take personal pride in every basket we assemble.",
      about_p2: "We believe in honest quality, warm customer service, and reliable guidance on what's in season and at peak sweetness.",
      stat_daily_title: "Daily",
      stat_daily_sub: "Fresh Produce",
      stat_inspect_title: "Carefully",
      stat_inspect_sub: "Selected Fruits",
      stat_basket_title: "Custom",
      stat_basket_sub: "Gift Baskets",
      about_panel_title: "Virendra Singh Fruits Shop",
      about_panel_sub: "Brand: Virendra Fruits & Juice Corner • Agra",
      about_feat1: "Daily Fresh Fruits & Produce",
      about_feat2: "Weddings & Festive Shagun Baskets",
      about_feat3: "Doorstep Delivery in Nearby Agra Localities",
      btn_view_real_photos: "View Real Shop Photos on Google Maps",

      // Location Section
      loc_label: "Visit Our Store",
      loc_heading: "Shop Location in Agra",
      loc_subheading: "Located in Agra, Uttar Pradesh. Come by to pick your favorite fruits or use Google Maps for directions.",
      loc_store_title: "Virendra Singh Fruits Shop",
      loc_store_sub: "Brand Name: Virendra Fruits & Juice Corner",
      loc_address_title: "Store Address",
      loc_address_text: "Agra, Uttar Pradesh, India",
      loc_contact_note: "Contact us for today's prices and availability.",
      btn_get_directions: "Get Directions",
      btn_open_maps: "Open in Google Maps",

      // Contact Section
      contact_label: "Get in Touch",
      contact_heading: "Contact & Enquiry",
      contact_desc: "Reach out directly to Virendra Singh Fruits Shop for fruit orders, shagun baskets, or delivery confirmation in Agra.",
      contact_direct_title: "Direct Shop Contact",
      contact_direct_sub: "We are always happy to answer your questions regarding daily fruit rates, seasonal arrivals, and customized celebration baskets.",
      contact_lbl_phone: "Phone Number",
      contact_lbl_whatsapp: "WhatsApp Number",
      contact_lbl_location: "Location",
      btn_call_now: "Call Now: 8923404646",
      btn_chat_whatsapp: "Chat on WhatsApp",
      btn_view_maps: "View on Google Maps",

      // Form
      form_title: "Send an Enquiry",
      form_subtitle: "Fill in your details below. Your enquiry will be cleanly formatted and opened directly in WhatsApp so our team can reply immediately!",
      form_lbl_name: "Your Name",
      form_lbl_phone: "Phone Number",
      form_lbl_type: "Enquiry Type",
      form_lbl_locality: "Your Locality in Agra",
      form_lbl_msg: "Items Needed or Specific Requests",
      form_btn_submit: "Send Enquiry via WhatsApp",
      form_notice: "Instant handoff: opens WhatsApp on your device with your enquiry ready to send.",
      form_err_name: "Please enter your name (at least 2 characters).",
      form_err_phone: "Please enter a valid 10-digit mobile number.",
      form_err_locality: "Please specify your locality in Agra.",

      // Modal
      modal_tag: "Tailored For You",
      modal_title: "Customize Your Fruit Basket",
      modal_desc: "Tell us your occasion, preferred basket size, and date so we can curate the perfect arrangement for you.",
      modal_lbl_occasion: "Occasion / Celebration Type",
      modal_lbl_tier: "Select Basket Style / Tier",
      modal_lbl_locality: "Your Locality in Agra",
      modal_lbl_date: "Date Needed",
      modal_lbl_pref: "Specific Fruit Preferences / Requests",
      modal_btn_submit: "Send Basket Order on WhatsApp",

      // Footer
      footer_legal: "Virendra Singh Fruits Shop • Agra",
      footer_desc: "Your trusted local fruit shop in Agra, offering fresh daily fruits, customized celebration fruit baskets, and local delivery in nearby areas.",
      footer_quote: "“Fresh Fruits. Beautiful Baskets. Friendly Service.”",
      footer_col_links: "Quick Links",
      footer_col_fruits: "Fresh Selections",
      footer_col_connect: "Connect with Shop",
      footer_copy: "Virendra Singh Fruits Shop • All Rights Reserved.",
      footer_serving: "Proudly serving Agra with fresh produce and custom celebration hampers."
    },

    hi: {
      // Topbar
      topbar_msg: "आगरा में रोज़ाना ताज़ा फल • आज के भाव और उपलब्धता के लिए संपर्क करें",
      topbar_call: "कॉल करें: 8923404646",
      topbar_whatsapp: "व्हाट्सएप चैट",

      // Brand
      brand_title: "वीरेंद्र फ्रूट्स",
      brand_subtitle: "फ्रूट शॉप एवं जूस कॉर्नर • आगरा",

      // Navigation
      nav_home: "होम",
      nav_fruits: "ताज़ा फल",
      nav_baskets: "फल टोकरी",
      nav_delivery: "डिलीवरी",
      nav_about: "हमारी दुकान",
      nav_location: "लोकेशन",
      nav_contact: "संपर्क",
      btn_order_whatsapp: "व्हाट्सएप पर ऑर्डर करें",

      // Hero
      hero_badge: "वीरेंद्र सिंह फ्रूट्स शॉप • आगरा, उत्तर प्रदेश",
      hero_title: "ताज़गी जो दिखे। <br><span class=\"highlight\">क्वालिटी जिस पर भरोसा हो।</span>",
      hero_desc: "पाएं रोज़ाना ताज़ा मौसमी फल, आगरा में सुलभ लोकल डिलीवरी, और शादी व शुभ अवसरों के लिए विशेष सजावटी फल टोकरियाँ।",
      hero_btn_explore: "हमारे फल देखें",
      hero_btn_whatsapp: "व्हाट्सएप पर ऑर्डर करें",
      hero_btn_directions: "रास्ता देखें (मैप)",

      // Trust Highlights
      trust_fresh_title: "ताज़ा फलों का चयन",
      trust_fresh_sub: "सावधानी से चुने गए फल",
      trust_delivery_title: "आस-पास के क्षेत्रों में डिलीवरी",
      trust_delivery_sub: "आगरा के नजदीकी इलाकों में",
      trust_baskets_title: "शादी व शगुन टोकरी",
      trust_baskets_sub: "सुंदर शगुन टोकनियाँ",

      // Floating Badges
      badge_fresh_strong: "रोज़ाना ताज़ा फल",
      badge_fresh_light: "आगरा, उत्तर प्रदेश में",
      badge_basket_strong: "कस्टम फ्रूट बास्केट",
      badge_basket_light: "शादी और आयोजनों के लिए",

      // Highlights Strip
      hl_fresh_title: "सावधानी से चुने फल",
      hl_fresh_desc: "स्वाभाविक मिठास, ताज़गी और सही गुणवत्ता की जांच के बाद ही फल पैक किए जाते हैं।",
      hl_basket_title: "उत्सव एवं शगुन टोकरी",
      hl_basket_desc: "शादी, सगाई, पूजा और पारिवारिक आयोजनों के लिए खास तौर पर तैयार फ्रूट हैंपर्स।",
      hl_delivery_title: "लोकल एरिया डिलीवरी",
      hl_delivery_desc: "आगरा के नजदीकी क्षेत्रों में घर तक आसान और सुरक्षित डिलीवरी।",
      hl_order_title: "सीधे व्हाट्सएप ऑर्डर",
      hl_order_desc: "व्हाट्सएप पर फलों की लिस्ट भेजें और आज का ताज़ा भाव व उपलब्धता तुरंत जानें।",

      // Fruits Section
      fruits_label: "रोज़ाना ताज़ा फल",
      fruits_heading: "हमारी ताज़ा फल वेराइटी",
      fruits_subheading: "हर सुबह चुनिंदा ताज़े मौसमी फल। आज के ताज़ा भाव और उपलब्धता के लिए हमसे संपर्क करें।",
      filter_all: "सभी फल",
      filter_popular: "लोकप्रिय",
      filter_citrus: "खट्टे-मीठे (सिट्रस)",
      filter_seasonal: "मौसमी फल",

      // Fruit Cards
      status_in_stock: "उपलब्ध",
      status_seasonal: "मौसमी आगमन",
      tag_popular: "लोकप्रिय",
      tag_daily: "रोज़ाना पसंद",
      tag_citrus: "सिट्रस",
      tag_sweet: "मीठे व कुरकुरे",
      tag_tropical: "ट्रॉपिकल",
      tag_hydrating: "ठंडा व ताज़ा",
      tag_health: "सेहतमंद",
      tag_special: "खास आगमन",

      fruit_apple_title: "सेब (Apples)",
      fruit_apple_desc: "मीठे, कुरकुरे और रसीले लाल सेब, जो प्राकृतिक मिठास और सेहत से भरपूर हैं।",
      fruit_banana_title: "केले (Bananas)",
      fruit_banana_desc: "स्वाभाविक रूप से पके, मीठे और पौष्टिक केले, रोज़ाना ऊर्जा और पोषण के लिए।",
      fruit_orange_title: "संतरे (Oranges)",
      fruit_orange_desc: "रसीले संतरे, विटामिन-सी से भरपूर और खट्टे-मीठे ताज़गी भरे स्वाद वाले।",
      fruit_grapes_title: "अंगूर (Grapes)",
      fruit_grapes_desc: "हरे और काले मीठे अंगूरों के गुच्छे, ताज़ा नाश्ते और फ्रूट चाट के लिए बेहतरीन।",
      fruit_mango_title: "आम (Mangoes)",
      fruit_mango_desc: "फलों का राजा आम - मीठा, सुगंधित और रसीला मौसमी फल, हर किसी की पहली पसंद।",
      fruit_pomegranate_title: "अनार (Pomegranates)",
      fruit_pomegranate_desc: "लाल दानेदार ताज़ा अनार, प्राकृतिक रस और एंटीऑक्सीडेंट से भरपूर उत्तम फल।",
      fruit_pineapple_title: "अनानास (Pineapples)",
      fruit_pineapple_desc: "पके हुए मीठे अनानास, ताज़ा स्लाइस, फ्रूट सलाद और जूस के लिए स्वादिष्ट।",
      fruit_watermelon_title: "तरबूज (Watermelons)",
      fruit_watermelon_desc: "ठंडा और मीठा लाल तरबूज, शरीर में पानी की पूर्ति और ताज़गी देने वाला।",
      fruit_papaya_title: "पपीता (Papayas)",
      fruit_papaya_desc: "मीठा व पका हुआ पपीता, पाचन और दैनिक स्वास्थ्य के लिए अत्यंत गुणकारी।",
      fruit_seasonal_title: "अन्य मौसमी फल",
      fruit_seasonal_desc: "मौसम के अनुसार मौसमी, अमरूद, कीवी, आड़ू आदि ताज़े फलों का नया स्टॉक।",

      price_label: "भाव",
      price_ask: "आज का भाव पूछें",
      btn_enquire: "पूछें",

      // Baskets Section
      baskets_label: "उपहार एवं उत्सव",
      baskets_heading: "शादी व उत्सव फल टोकरियाँ",
      baskets_subheading: "शादी, सगाई, पूजा और त्योहारों के लिए खूबसूरती से सजाए गए कस्टमाइज्ड फ्रूट हैंपर्स।",
      badge_wedding: "शादी व शगुन",
      badge_engagement: "सगाई व रोका",
      badge_festive: "त्योहार व थोक",

      basket_wedding_title: "शाही शादी शगुन टोकनी",
      basket_wedding_desc: "शादी-सगाई व बारात शगुन के लिए चुनिंदा ताज़े फलों और सुंदर नेट-रिबन से सजी भव्य टोकनी।",
      basket_wedding_feat1: "बारात शगुन, तिलक और विवाह उपहार के लिए आदर्श",
      basket_wedding_feat2: "केन व गोल्डन बास्केट डिजाइन में उपलब्ध",

      basket_engagement_title: "सगाई व रोका गिफ्ट बास्केट",
      basket_engagement_desc: "सगाई और शुभ अवसरों के लिए सेब, अंगूर, कीवी और मौसमी फलों से सजी आकर्षक बास्केट।",
      basket_engagement_feat1: "ससुराल व खास मेहमानों को भेंट देने हेतु उपयुक्त",
      basket_engagement_feat2: "विभिन्न साइज़ और फलों के चयन की सुविधा",

      basket_festive_title: "उत्सव व पारिवारिक हैंपर ट्रे",
      basket_festive_desc: "पारिवारिक आयोजनों, दिवाली और गृह प्रवेश पूजा के लिए ताज़े फलों से भरी ट्रे।",
      basket_festive_feat1: "सिंगल ऑर्डर और पारिवारिक थोक आयोजनों हेतु उपलब्ध",
      basket_festive_feat2: "साफ-सुथरी, सुरक्षित और उपहार-तैयार पैकेजिंग",

      btn_customize_basket: "यह बास्केट कस्टमाइज़ करें",
      customizer_banner_title: "किसी विशेष अवसर के लिए खास टोकरी चाहिए?",
      customizer_banner_desc: "हर आयोजन खास होता है। अपनी पसंद के फल, टोकरी का स्टाइल, बजट और डिलीवरी समय तय करने के लिए हमसे संपर्क करें।",
      customizer_banner_btn: "अपनी टोकरी कस्टमाइज़ करें",

      // Delivery Section
      delivery_label: "सुविधाजनक सेवा",
      delivery_heading: "आस-पास के क्षेत्रों में लोकल डिलीवरी",
      delivery_lead: "हम आगरा में नजदीकी कॉलोनियों और वेन्यू तक ताज़ा फल और सजावटी बास्केट पहुँचाते हैं।",
      step1_title: "फल या टोकरी चुनें",
      step1_desc: "हमारी फलों की वेराइटी देखें या अपनी जरूरत की कस्टम टोकरी बताएं।",
      step2_title: "अपनी आगरा की कॉलोनी बताएं",
      step2_desc: "व्हाट्सएप पर अपनी कॉलोनी का नाम भेजें ताकि हम उपलब्धता बता सकें।",
      step3_title: "भाव कन्फर्म करें और ताज़ा फल पाएं",
      step3_desc: "हम आज के सही भाव साझा करते हैं और ऑर्डर ताज़ा तैयार करते हैं।",
      delivery_card_title: "डिलीवरी उपलब्धता कैसे जांचें",
      delivery_card_desc: "आगरा के नजदीकी क्षेत्रों में डिलीवरी उपलब्ध है। बस अपनी कॉलोनी का नाम व्हाट्सएप पर भेजें, हम तुरंत समय व उपलब्धता कन्फर्म करेंगे।",
      delivery_note1: "सुरक्षित पहुंचाने के लिए फलों की सावधानीपूर्वक पैकिंग",
      delivery_note2: "नाजुक शादी और शगुन टोकरियों के लिए विशेष ध्यान",
      delivery_note3: "दुकानदार से सीधे बात और आसान संवाद",
      delivery_callout: "नोट: डिलीवरी की उपलब्धता दूरी और ऑर्डर के आकार पर निर्भर करती है। कृपया अपनी कॉलोनी बताएं ताकि हम पुष्टि कर सकें।",
      btn_check_delivery: "व्हाट्सएप पर डिलीवरी उपलब्धता जांचें",

      // About Our Shop Section
      about_label: "हमारे बारे में",
      about_heading: "आगरा में आपकी अपनी फलों की दुकान",
      about_lead: "वीरेंद्र सिंह फ्रूट्स शॉप (वीरेंद्र फ्रूट्स एंड जूस कॉर्नर) में आपका स्वागत है। हम आगरा के परिवारों, शादियों और स्थानीय निवासियों को रोज़ाना ताज़ा व स्वादिष्ट फल उपलब्ध कराते हैं।",
      about_p1: "रोज़मर्रा के ताज़ा फलों से लेकर शादी-सगाई की भव्य शगुन टोकरियों तक, हम हर ऑर्डर को पूरे ध्यान और जिम्मेदारी से तैयार करते हैं।",
      about_p2: "हम सही गुणवत्ता, ईमानदारी और ग्राहक संतुष्टि पर विश्वास रखते हैं ताकि आपको हर बार उत्तम फल मिलें।",
      stat_daily_title: "रोज़ाना",
      stat_daily_sub: "ताज़ा स्टॉक",
      stat_inspect_title: "सावधानी",
      stat_inspect_sub: "से चुने फल",
      stat_basket_title: "कस्टम",
      stat_basket_sub: "गिफ्ट बास्केट",
      about_panel_title: "वीरेंद्र सिंह फ्रूट्स शॉप",
      about_panel_sub: "ब्रांड: वीरेंद्र फ्रूट्स एंड जूस कॉर्नर • आगरा",
      about_feat1: "रोज़ाना ताज़ा मौसमी फल व उपज",
      about_feat2: "शादी व आयोजनों की सुंदर शगुन टोकरियाँ",
      about_feat3: "आगरा के नजदीकी क्षेत्रों में सुलभ डिलीवरी",
      btn_view_real_photos: "गूगल मैप्स पर दुकान की असली तस्वीरें देखें",

      // Location Section
      loc_label: "दुकान पर पधारें",
      loc_heading: "आगरा में दुकान का पता",
      loc_subheading: "आगरा, उत्तर प्रदेश में स्थित। खुद आकर ताज़ा फल चुनें या मैप से रास्ता देखें।",
      loc_store_title: "वीरेंद्र सिंह फ्रूट्स शॉप",
      loc_store_sub: "ब्रांड नाम: वीरेंद्र फ्रूट्स एंड जूस कॉर्नर",
      loc_address_title: "दुकान का पता",
      loc_address_text: "आगरा, उत्तर प्रदेश, भारत",
      loc_contact_note: "आज के भाव और उपलब्धता के लिए संपर्क करें।",
      btn_get_directions: "रास्ता देखें (Directions)",
      btn_open_maps: "गूगल मैप्स पर खोलें",

      // Contact Section
      contact_label: "संपर्क करें",
      contact_heading: "संपर्क एवं पूछताछ",
      contact_desc: "फलों के ऑर्डर, शादी की शगुन टोकरी या डिलीवरी की जानकारी के लिए सीधे संपर्क करें।",
      contact_direct_title: "दुकान से सीधा संपर्क",
      contact_direct_sub: "हम रोज़ाना फलों के भाव, मौसमी वेराइटी और कस्टमाइज्ड टोकरियों की जानकारी के लिए सदैव उपलब्ध हैं।",
      contact_lbl_phone: "फोन नंबर",
      contact_lbl_whatsapp: "व्हाट्सएप नंबर",
      contact_lbl_location: "स्थान",
      btn_call_now: "कॉल करें: 8923404646",
      btn_chat_whatsapp: "व्हाट्सएप पर चैट करें",
      btn_view_maps: "गूगल मैप्स पर देखें",

      // Form
      form_title: "पूछताछ भेजें",
      form_subtitle: "नीचे अपनी जानकारी भरें। आपकी पूछताछ सीधे व्हाट्सएप पर तैयार होकर खुलेगी ताकि तुरंत जवाब मिल सके!",
      form_lbl_name: "आपका नाम",
      form_lbl_phone: "फोन नंबर",
      form_lbl_type: "पूछताछ का प्रकार",
      form_lbl_locality: "आगरा में आपकी कॉलोनी / इलाका",
      form_lbl_msg: "फलों की सूची या विशेष आवश्यकता",
      form_btn_submit: "व्हाट्सएप पर पूछताछ भेजें",
      form_notice: "सीधा व्हाट्सएप संवाद: बटन दबाते ही आपके फोन में व्हाट्सएप पर मैसेज तैयार खुलेगा।",
      form_err_name: "कृपया अपना नाम लिखें (कम से कम 2 अक्षर)।",
      form_err_phone: "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
      form_err_locality: "कृपया आगरा में अपनी कॉलोनी या इलाका बताएं।",

      // Modal
      modal_tag: "आपकी पसंद अनुसार",
      modal_title: "अपनी फल टोकरी कस्टमाइज़ करें",
      modal_desc: "अपना आयोजन, बास्केट साइज़ और तारीख बताएं ताकि हम आपके लिए सबसे सुंदर व्यवस्था कर सकें।",
      modal_lbl_occasion: "आयोजन / समारोह का प्रकार",
      modal_lbl_tier: "बास्केट स्टाइल / टियर चुनें",
      modal_lbl_locality: "आगरा में आपकी कॉलोनी / इलाका",
      modal_lbl_date: "आवश्यक तारीख",
      modal_lbl_pref: "फलों की पसंद या विशेष निर्देश",
      modal_btn_submit: "व्हाट्सएप पर बास्केट ऑर्डर भेजें",

      // Footer
      footer_legal: "वीरेंद्र सिंह फ्रूट्स शॉप • आगरा",
      footer_desc: "आगरा में आपकी अपनी विश्वसनीय दुकान - ताज़ा मौसमी फल, शादी की शगुन टोकरियाँ और नजदीकी क्षेत्रों में डिलीवरी।",
      footer_quote: "“ताज़े फल। सुंदर टोकरियाँ। सच्चा विश्वास।”",
      footer_col_links: "त्वरित लिंक",
      footer_col_fruits: "ताज़ा वेराइटी",
      footer_col_connect: "दुकान से जुड़ें",
      footer_copy: "वीरेंद्र सिंह फ्रूट्स शॉप • सर्वाधिकार सुरक्षित।",
      footer_serving: "आगरा में ताज़ा फल और पारिवारिक उत्सवों की सेवा में गर्व से समर्पित।"
    }
  };

  /* ------------------------------------------------------------------------
     2. Language State & Switching Controller
     ------------------------------------------------------------------------ */
  let currentLang = localStorage.getItem('virendra_lang') || 'en';

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('virendra_lang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.en;

    // Translate textContent elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate HTML content (titles with breaks/spans)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Translate Aria Labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Update active state on all language toggles (both desktop and mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive.toString());
    });
  };

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      applyLanguage(selectedLang);
    });
  });

  // Apply initial language
  applyLanguage(currentLang);

  /* ------------------------------------------------------------------------
     3. Sticky Header & Active Nav on Scroll
     ------------------------------------------------------------------------ */
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollY = window.pageYOffset;

    // Header shadow on scroll
    if (scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active navigation link highlighting
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     4. Accessible Mobile Navigation Toggle
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
      menuToggle.classList.toggle('active', isOpen);
      navMenu.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close mobile menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. Fruit Category Filtering
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const fruitCards = document.querySelectorAll('.fruit-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      fruitCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     6. Dynamic Fruit Enquiry via WhatsApp
     ------------------------------------------------------------------------ */
  document.querySelectorAll('.fruit-enquire-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const fruitName = btn.getAttribute('data-fruit') || 'fresh fruits';
      
      let message;
      if (currentLang === 'hi') {
        message = `नमस्ते वीरेंद्र फ्रूट्स, मैं ${fruitName} के आज के भाव और उपलब्धता के बारे में जानना चाहता/चाहती हूँ।`;
      } else {
        message = `Hello Virendra Fruits, I would like to check today's price and availability for ${fruitName}.`;
      }

      const encodedUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
      window.open(encodedUrl, '_blank');
    });
  });

  /* ------------------------------------------------------------------------
     7. Fruit Basket Customizer Modal & WhatsApp Flow
     ------------------------------------------------------------------------ */
  const basketModal = document.getElementById('basketModal');
  const openCustomizerBtns = document.querySelectorAll('.open-customizer-btn');
  const closeCustomizerBtn = document.getElementById('closeModalBtn');
  const basketCustomizerForm = document.getElementById('basketCustomizerForm');
  const basketTierCards = document.querySelectorAll('.option-radio-card');
  const basketTierInput = document.getElementById('basketTierInput');

  const openModal = (defaultOccasion) => {
    if (basketModal) {
      if (defaultOccasion) {
        const occasionSelect = document.getElementById('basketOccasion');
        if (occasionSelect) {
          occasionSelect.value = defaultOccasion;
        }
      }
      basketModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (basketModal) {
      basketModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openCustomizerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const occasion = btn.getAttribute('data-occasion') || '';
      openModal(occasion);
    });
  });

  if (closeCustomizerBtn) {
    closeCustomizerBtn.addEventListener('click', closeModal);
  }

  if (basketModal) {
    basketModal.addEventListener('click', (e) => {
      if (e.target === basketModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && basketModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Radio selection in basket customizer
  basketTierCards.forEach(card => {
    card.addEventListener('click', () => {
      basketTierCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const val = card.getAttribute('data-value');
      if (basketTierInput) {
        basketTierInput.value = val;
      }
    });
  });

  // Handle basket customizer submission
  if (basketCustomizerForm) {
    basketCustomizerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const occasion = document.getElementById('basketOccasion').value;
      const tier = basketTierInput ? basketTierInput.value : 'Gold Grand Celebration';
      const locality = document.getElementById('basketLocality').value.trim();
      const date = document.getElementById('basketDate').value.trim();
      const notes = document.getElementById('basketNotes').value.trim();

      if (!locality) {
        const promptMsg = currentLang === 'hi' 
          ? 'कृपया आगरा में अपनी कॉलोनी या इलाका बताएं।' 
          : 'Please specify your locality in Agra so we can check availability.';
        alert(promptMsg);
        document.getElementById('basketLocality').focus();
        return;
      }

      let message;
      if (currentLang === 'hi') {
        message = `नमस्ते वीरेंद्र फ्रूट्स, मुझे एक कस्टमाइज्ड फल टोकरी (Fruit Basket) के बारे में जानकारी चाहिए:\n\n`;
        message += `• आयोजन: ${occasion}\n`;
        message += `• बास्केट टियर / साइज़: ${tier}\n`;
        message += `• आगरा में इलाका: ${locality}\n`;
        if (date) message += `• आवश्यक तारीख: ${date}\n`;
        if (notes) message += `• फलों की पसंद / निर्देश: ${notes}\n`;
        message += `\nकृपया आज के भाव, डिज़ाइन और उपलब्धता साझा करें।`;
      } else {
        message = `Hello Virendra Fruits, I would like to inquire about a customized fruit basket:\n\n`;
        message += `• Occasion: ${occasion}\n`;
        message += `• Basket Size / Tier: ${tier}\n`;
        message += `• Locality in Agra: ${locality}\n`;
        if (date) message += `• Needed Date: ${date}\n`;
        if (notes) message += `• Fruit Preferences / Requests: ${notes}\n`;
        message += `\nPlease let me know today's pricing, designs, and availability.`;
      }

      const encodedUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
      const toastMsg = currentLang === 'hi'
        ? 'कस्टमाइज्ड टोकरी की जानकारी व्हाट्सएप पर खोली जा रही है...'
        : 'Opening WhatsApp with your customized basket details...';
      
      showToast(toastMsg);
      closeModal();
      window.open(encodedUrl, '_blank');
    });
  }

  /* ------------------------------------------------------------------------
     8. Contact / Enquiry Form Validation & Direct WhatsApp Submission
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactEnquiryForm');

  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    const typeSelect = document.getElementById('contactType');
    const localityInput = document.getElementById('contactLocality');
    const messageInput = document.getElementById('contactMessage');

    const showError = (input, msgId, show) => {
      const errorEl = document.getElementById(msgId);
      if (show) {
        input.classList.add('is-invalid');
        if (errorEl) errorEl.classList.add('visible');
      } else {
        input.classList.remove('is-invalid');
        if (errorEl) errorEl.classList.remove('visible');
      }
    };

    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        showError(nameInput, 'nameError', false);
      }
    });

    phoneInput.addEventListener('input', () => {
      const cleaned = phoneInput.value.replace(/\D/g, '');
      if (cleaned.length === 10) {
        showError(phoneInput, 'phoneError', false);
      }
    });

    localityInput.addEventListener('input', () => {
      if (localityInput.value.trim().length >= 2) {
        showError(localityInput, 'localityError', false);
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = nameInput.value.trim();
      const phone = phoneInput.value.replace(/\D/g, '');
      const type = typeSelect.value;
      const locality = localityInput.value.trim();
      const message = messageInput.value.trim();

      // Validate Name
      if (name.length < 2) {
        showError(nameInput, 'nameError', true);
        isValid = false;
      } else {
        showError(nameInput, 'nameError', false);
      }

      // Validate Phone (10 digits)
      if (phone.length !== 10) {
        showError(phoneInput, 'phoneError', true);
        isValid = false;
      } else {
        showError(phoneInput, 'phoneError', false);
      }

      // Validate Locality
      if (locality.length < 2) {
        showError(localityInput, 'localityError', true);
        isValid = false;
      } else {
        showError(localityInput, 'localityError', false);
      }

      if (!isValid) {
        const fixMsg = currentLang === 'hi' 
          ? 'कृपया लाल रंग से चिह्नित कॉलम सही भरें।' 
          : 'Please correct the highlighted fields.';
        showToast(fixMsg);
        return;
      }

      // Build WhatsApp message
      let whatsappMsg;
      if (currentLang === 'hi') {
        whatsappMsg = `*नया ग्राहक संदेश - वीरेंद्र फ्रूट्स आगरा*\n\n`;
        whatsappMsg += `• *नाम:* ${name}\n`;
        whatsappMsg += `• *मोबाइल नंबर:* ${phone}\n`;
        whatsappMsg += `• *पूछताछ का विषय:* ${type}\n`;
        whatsappMsg += `• *आगरा में इलाका / कॉलोनी:* ${locality}\n`;
        if (message) {
          whatsappMsg += `• *फलों की सूची / निर्देश:* ${message}\n`;
        }
        whatsappMsg += `\n_कृपया आज के भाव और उपलब्धता की जानकारी दें।_`;
      } else {
        whatsappMsg = `*New Customer Enquiry - Virendra Fruits*\n\n`;
        whatsappMsg += `• *Name:* ${name}\n`;
        whatsappMsg += `• *Contact Number:* ${phone}\n`;
        whatsappMsg += `• *Enquiry Type:* ${type}\n`;
        whatsappMsg += `• *Locality in Agra:* ${locality}\n`;
        if (message) {
          whatsappMsg += `• *Details / Order Items:* ${message}\n`;
        }
        whatsappMsg += `\n_Submitted via Virendra Fruits website. Please contact me regarding today's prices and availability._`;
      }

      const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappMsg)}`;
      const toastText = currentLang === 'hi'
        ? 'व्हाट्सएप पर आपकी पूछताछ भेजी जा रही है...'
        : 'Sending enquiry via WhatsApp...';

      showToast(toastText);
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        contactForm.reset();
      }, 400);
    });
  }

  /* ------------------------------------------------------------------------
     9. Toast Notification Utility
     ------------------------------------------------------------------------ */
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  window.showToast = showToast;
});
