{\rtf1\ansi\ansicpg936\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function sendMessage() \{\
    const userInput = document.getElementById('user-input');\
    const message = userInput.value.trim();\
    if (message === '') return;\
\
    displayMessage(message, 'user');\
    userInput.value = '';\
\
    getBotResponse(message);\
\}\
\
function displayMessage(message, sender) \{\
    const chatBox = document.getElementById('chat-box');\
    const messageElement = document.createElement('div');\
    messageElement.classList.add('message', sender);\
\
    const textElement = document.createElement('div');\
    textElement.classList.add('text');\
    textElement.textContent = message;\
\
    if (sender === 'bot') \{\
        const avatar = document.createElement('img');\
        avatar.src = 'sarah-avatar.png'; // \uc0\u30830 \u20445 \u36825 \u20010 \u36335 \u24452 \u25351 \u21521 \u20320 \u30340 \u22836 \u20687 \u22270 \u29255 \
        messageElement.appendChild(avatar);\
        messageElement.appendChild(textElement);\
    \} else \{\
        messageElement.appendChild(textElement);\
    \}\
\
    chatBox.appendChild(messageElement);\
    chatBox.scrollTop = chatBox.scrollHeight;\
\}\
\
function getBotResponse(userMessage) \{\
    // \uc0\u36825 \u37324 \u21487 \u20197 \u28155 \u21152 \u26356 \u22810 \u22797 \u26434 \u30340 \u36923 \u36753 \u65292 \u20363 \u22914 \u35843 \u29992 API\u33719 \u21462 \u23454 \u38469 \u21709 \u24212 \
    const botResponse = 'You said: ' + userMessage;\
    setTimeout(() => \{\
        displayMessage(botResponse, 'bot');\
    \}, 500);\
\}}