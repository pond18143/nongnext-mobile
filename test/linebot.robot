*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem
# Library    RESTinstance

*** Variable ***
${USRID}           "U98e1440f1947bb4e81cdf9fa66b90bcc"
${URL_GET}          https://api.line.me/v2/bot/message
${AUT}              Bearer YaeQhCzNLf9UjpO4UiiX3HRlZ8iixRqaumnJataQALX/bjQY3Lvz/yrY6Ce/1NTZGjP9+CDb3TLWrYjj2CaPirkVQwjJCs4oZbtOJrqKjPlSG1xuK4TixwaL0zXRsqtfm+YFGm8A/RmKK7dASoJ11gdB04t89/1O/w1cDnyilFU=
${mock1}            {"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919979457685651577/applelogo2.jpeg","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"apple","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"applee","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose apple","text":"ls brand apple"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919980227457847296/7650202e956e24e2b92449ca3e888e51.png","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"samsung","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"samsungg","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose samsung","text":"ls brand samsung"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919298668312559637/Bg6tlA_TJaD3HwpCX1qHA_16o-hEr3Qa_90c8dgmyfbON_0uzXJPyf_xg-kV8VZM2fIyy152XlENzzTOvUftFvJMwQptG3TpQ30xOsOPeIdG3lHsTzp5U9Zs.","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"xiaomi","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"xiaomii","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose xiaomi","text":"ls brand xiaomi"},"style":"primary"}]}},{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919298965055344711/OnePlus_Logo.png?width=1012&height=1012","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"oneplus","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start","contents":[]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":"ounpluss","weight":"regular","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose oneplus","text":"ls brand oneplus"},"style":"primary"}]}}]}}

*** Keywords ***
POST Welcome
    create session    url    ${URL_GET}
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ {"type":"text", "text":"Hello, user"}]}
    ${response} =  postRequest   url    /push   headers=${headers}     data=${data} 
    ${json} =  SetVariable  ${response.json()}
    Log   ${json}
    Log   ${response}
    Log   ${data}
    Should Be Equal As Strings  ${response.status_code}  200

POST Reqest Testest
    [Tags]      post
    # ${accept_type}=    Set Variable    application/json
    # ${headers}=    Create Dictionary    Content-Type    ${accept_type}      Authorization=${AUT}      
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ ${mock1}]}
    ${resp}=    POST    ${URL_GET}/push    headers=${headers}       data=${data}
    Status Should Be    OK    ${resp}

POST Reqest hope
    [Tags]      post
    # ${accept_type}=    Set Variable    application/json
    # ${headers}=    Create Dictionary    Content-Type    ${accept_type}      Authorization=${AUT}      
    ${headers}  create dictionary     Content-Type=application/json         Authorization=${AUT}
    ${data}    SetVariable    {"to": ${USRID},"messages": [ {"type":"text", "text":"Hello, user"}]}
    ${resp}=    POST    ${URL_GET}/push    headers=${headers}       data=${data}
    Status Should Be    OK    ${resp}


*** Test Cases ***
Test POST Doc Welcome_Positive
    POST Reqest hope





