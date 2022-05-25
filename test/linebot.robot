*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem

*** Variable ***
${USRID}           "U98e1440f1947bb4e81cdf9fa66b90bcc"
${URL_PUSH}          https://api.line.me/v2/bot/message
${URL_POST}          http://localhost:8080
${AUT}              Bearer YaeQhCzNLf9UjpO4UiiX3HRlZ8iixRqaumnJataQALX/bjQY3Lvz/yrY6Ce/1NTZGjP9+CDb3TLWrYjj2CaPirkVQwjJCs4oZbtOJrqKjPlSG1xuK4TixwaL0zXRsqtfm+YFGm8A/RmKK7dASoJ11gdB04t89/1O/w1cDnyilFU=

# POST LS
${POST_LS_BRAND}                {"msg" :"ls brand","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${POST_LS_BRAND_FAILED}         {"msg" :"ls brandd","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${POST_LS_APPLE}                {"msg" :"ls brand apple","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${POST_LS_APPLE_FAILED}         {"msg" :"ls brand app","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}

# REPLY LS
${MOCK_LS_BRAND}                    {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919979457685651577/applelogo2.jpeg","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"apple","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"applee","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose apple","text":"ls brand apple"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919980227457847296/7650202e956e24e2b92449ca3e888e51.png","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"samsung","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"samsungg","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose samsung","text":"ls brand samsung"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://cdn.discordapp.com/attachments/914926041657671721/919298668312559637/Bg6tlA_TJaD3HwpCX1qHA_16o-hEr3Qa_90c8dgmyfbON_0uzXJPyf_xg-kV8VZM2fIyy152XlENzzTOvUftFvJMwQptG3TpQ30xOsOPeIdG3lHsTzp5U9Zs.png","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"xiaomi","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"xiaomii","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose xiaomi","text":"ls brand xiaomi"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919298965055344711/OnePlus_Logo.png?width=1012&height=1012","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"oneplus","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"ounpluss","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose oneplus","text":"ls brand oneplus"},"style":"primary"}]}}]}}
${MOCK_LS_BRAND_APPLE}              {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926459368390746/914930958883508274/se_white.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone SE","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone SE","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone SE","text":"ls product Iphone SE"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930108166175/11_purple.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 11","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 11","text":"ls product Iphone 11"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914932983864107078/914933031586889778/12_purple.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 12","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 12","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 12","text":"ls product Iphone 12"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914932983864107078/914933030798364744/12_black.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 12 mini","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 12 mini","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 12 mini","text":"ls product Iphone 12 mini"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914933705074700358/914933742664040488/13_pink.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 13","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 13","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 13","text":"ls product Iphone 13"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914933705074700358/914933742416560228/13_midnight.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 13 mini","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 13 mini","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 13 mini","text":"ls product Iphone 13 mini"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914934249465974835/914934294487654440/13_sierrablue.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 13 Pro","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 13 Pro","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 13 Pro","text":"ls product Iphone 13 Pro"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914934249465974835/914934294894485554/13_silver.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 13 Pro Max","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Iphone 13 Pro Max","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Iphone 13 Pro Max","text":"ls product Iphone 13 Pro Max"},"style":"primary"}]}}]}}
${MOCK_LS_BRAND_SAMSUNG}            {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920333765241372712/Screen_Shot_2564-12-14_at_22.17.33.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Galaxy Z Fold3 5G","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Galaxy Z Fold3 5G","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Galaxy Z Fold3 5G","text":"ls product Galaxy Z Fold3 5G"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920360718895829053/Samsung-Galaxy-S21-5G-Phantom-Gray-2-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Galaxy S21","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Galaxy S21","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Galaxy S21","text":"ls product Galaxy S21"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920356412234809365/th-galaxy-z-flip3-f711-5g-396917-sm-f711bzwbthl-thumb-523295947.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Galaxy Z Flip3","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Galaxy Z Flip3","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Galaxy Z Flip3","text":"ls product Galaxy Z Flip3"},"style":"primary"}]}}]}}
${MOCK_LS_BRAND_XIAOMI}             {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920360198378491914/Xiaomi-Smartphone-Mi-11T-Pro-Meteorite-Gray-5G-5-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Xiaomi 11T Pro","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Xiaomi 11T Pro","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Xiaomi 11T Pro","text":"ls product Xiaomi 11T Pro"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920360346424844338/Xiaomi-Smartphone-Mi-11T-Meteorite-Gray-5G-5-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Xiaomi 11T","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Xiaomi 11T","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Xiaomi 11T","text":"ls product Xiaomi 11T"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920360507305754705/Xiaomi-Redmi-9C-Twight-Blue-2-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Xiaomi redmi 9c","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Xiaomi redmi 9c","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Xiaomi redmi 9c","text":"ls product Xiaomi redmi 9c"},"style":"primary"}]}}]}}
${MOCK_LS_BRAND_ONEPLUS}            {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920338504624525422/OnePlus-8T-Aquamarine-Green-2-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"OnePlus 8T","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"OnePlus 8T","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose OnePlus 8T","text":"ls product OnePlus 8T"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920339167936909352/OnePlus-Smartphone-Nord-8-128GB-Gray-Onyx-1-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"OnePlus Nord","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"OnePlus Nord","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose OnePlus Nord","text":"ls product OnePlus Nord"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920360010683412550/OnePlus-Smartphone-Nord-2-Blue-Haze-5G-2-square_medium.png","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Oneplus Nord 2","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"Oneplus Nord 2","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose Oneplus Nord 2","text":"ls product Oneplus Nord 2"},"style":"primary"}]}}]}}
${MOCK_LS_BRAND_FAILED}             {"type":"text","text":"List Format error. Please try again"}
${MOCK_LS_BRAND_ONEPLUS_FAILED}     {"type":"text","text":"List State 2 wrong command. Please try again"}
${MOCK_LS_PRODUCT_IPHONE}           {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930108166175/11_purple.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Purple","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 7"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931929881665566/11_green.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Green","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 8"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930909249556/11_yello.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Yellow","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 9"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930645020712/11_white.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"White","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 10"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931929629990992/11_black.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Black","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 11"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930343014471/11_red.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Red","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 12"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930108166175/11_purple.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Purple","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"128","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"21500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 13"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931929881665566/11_green.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Green","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"128","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"21500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 14"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930909249556/11_yello.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Yellow","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"128","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"21500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 15"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930645020712/11_white.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"White","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"128","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"21500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 16"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931929629990992/11_black.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Black","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"128","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"21500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 17"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930343014471/11_red.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Red","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"128","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"21500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" Baht","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Add to Carts ","text":"add product 18"},"style":"primary"}]}}]}}

# ADD PRODUCT
${POST_ADD_PRODUCT}             {"msg" :"add product 9","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${POST_ADD_PRODUCT_FAILED}      {"msg" :"add product 999","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${MOCK_REPLY_ADD_PRODUCT}       {"type":"text","text":"Insert Item Complete "}

# CART
${POST_CART}                {"msg" :"cart","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${CART}                     {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","direction":"rtl","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/920039651299958794/Screen_Shot_2564-12-14_at_02.48.44.png","size":"full","aspectRatio":"17:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Item Total","weight":"bold","size":"xl","gravity":"bottom","wrap":true,"contents":[]},{"type":"box","layout":"baseline","spacing":"sm","margin":"md","contents":[{"type":"text","text":"BAHT","weight":"bold","size":"md","flex":0,"align":"end","gravity":"bottom","wrap":true,"contents":[]},{"type":"text","text":"19500","weight":"regular","size":"lg","flex":0,"gravity":"bottom","margin":"xxl","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Clear Cart","text":"clear cart 37"},"color":"#DC7575FF","style":"primary"},{"type":"button","action":{"type":"message","label":"Check Out","text":"buy"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914931864576327741/914931930909249556/11_yello.png?width=856&height=1013","size":"xxl","aspectRatio":"10:19","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"Iphone 11","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Yellow","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"64","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":"GB","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"19500","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":"BAHT","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Remove","text":"remove 37 85"},"color":"#DC7575FF","style":"primary"}]}}]}}
${CART_REMOVE}              {"type":"text","text":"Clear Cart Complete"}
${POST_CART_REMOVE}         {"type":"text","text":"clear cart 30"}
${POST_BUY}                 {"msg" :"buy","userId" :"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${BUY_pic}                  {"type":"image","originalContentUrl":"https://media.discordapp.net/attachments/914926041657671721/920815269893521408/IMG_2808.jpg","previewImageUrl":"https://media.discordapp.net/attachments/914926041657671721/920815269893521408/IMG_2808.jpg"}
${BUY_message}              {"type": "text","text": "Please Transfer to my Prompay and Upload Pay-in Slip. "}

# DEFAULT
${POST_MESSAGE_ERROR}       {"msg":"poramet","userId":"U98e1440f1947bb4e81cdf9fa66b90bcc"}
${DEFAUT_MESSAGE}           {"type":"text","text":"This is default message"}

*** Keywords ***
# ---------LS PRODUCT---------
POST Request PostLsBrand-Positive
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_LS_BRAND}
    ${resp} =       POST    ${URL_POST}/lsbrand    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      ls brand Success

POST Request LsBrand-Positive
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request PostLsBrand-Negative
    [Tags]      LS PRODUCT
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_LS_BRAND_FAILED}
    ${resp} =       POST    ${URL_POST}/lsbrand    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      ls brand Failed

POST Request LsBrand-Negative
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND_FAILED}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request PostLsApple-Positive
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_LS_APPLE}
    ${resp} =       POST    ${URL_POST}/lsapple    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      ls brand apple success

POST Request PostLsApple-Negative
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_LS_APPLE_FAILED}
    ${resp} =       POST    ${URL_POST}/lsapple    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      ls brand apple Failed

POST Request LsBrandApple
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND_APPLE}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request LsBrandSamsung
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND_SAMSUNG}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request LsBrandXiaomi
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND_XIAOMI}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request LsBrandOneplus
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND_ONEPLUS}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request LsBrandOneplus-Negative
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_BRAND_ONEPLUS_FAILED}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request LsProductIphone
    [Tags]      LS
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_LS_PRODUCT_IPHONE}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

# ---------ADD PRODUCT---------
POST Request AddProduct-Positive
    [Tags]      ADD
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_ADD_PRODUCT}
    ${resp} =       POST    ${URL_POST}/addproduct    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      add product success

POST Request AddProduct-Negative
    [Tags]      ADD
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_ADD_PRODUCT_FAILED}
    ${resp} =       POST    ${URL_POST}/addproduct    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      add product failed

POST Request Reply-Addproduct
    [Tags]      ADD
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${MOCK_REPLY_ADD_PRODUCT}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

# ---------CART---------
POST Request Post-Cart
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_CART}
    ${resp} =       POST    ${URL_POST}/cart    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      cart success

POST Request Reply-Cart
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${CART}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request Post-CartClear
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_CART}
    ${resp} =       POST    ${URL_POST}/cartclear    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      cart clear success

POST Request Reply-RemoveCart
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${CART_REMOVE}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request Post-Buy
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_BUY}
    ${resp} =       POST    ${URL_POST}/buy    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      buy success

POST Request Reply-Buy1
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [${BUY_pic}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request Reply-Buy2
    [Tags]      CART
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [${BUY_message}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

# ---------DEAFAULT MESSAGE---------
POST Request DefaultMessage
    [Tags]      DEAFAULT
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${DEFAUT_MESSAGE}]}
    ${resp} =       POST    ${URL_PUSH}/push    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}

POST Request PostDefault
    [Tags]      DEAFAULT
    ${headers}  create dictionary     Content-Type=application/json
    ${data}    SetVariable    ${POST_MESSAGE_ERROR}
    ${resp} =       POST    ${URL_POST}/default    headers=${headers}       data=${data}
    ${json} =       SetVariable   ${resp.json()}
    Log     ${json}
    Log     ${resp}
    Log     ${data}
    Status Should Be    OK    ${resp}
    Should Be Equal As Strings      ${resp.json()}      This is default message



*** Test Cases ***
Test POST LS PRODUCT
    POST Request PostLsBrand-Positive
    POST Request LsBrand-Positive
    POST Request PostLsBrand-Negative
    POST Request LsBrand-Negative
    POST Request PostLsApple-Positive
    POST Request LsBrandApple
    POST Request PostLsApple-Negative
    POST Request LsBrandSamsung
    POST Request LsBrandXiaomi
    POST Request LsBrandOneplus
    POST Request LsBrandOneplus-Negative
    POST Request LsProductIphone

Test POST ADD PRODUCT
    POST Request AddProduct-Positive
    POST Request AddProduct-Negative
    POST Request Reply-Addproduct

TEST POST CART
    POST Request Post-Cart
    POST Request Reply-Cart
    POST Request Post-Buy
    POST Request Reply-Buy1
    POST Request Reply-Buy2

TEST POST DEAFAULT MESSAGE
    POST Request PostDefault
    POST Request DefaultMessage



    




