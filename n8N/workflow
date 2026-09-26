{
  "name": "JharSetu",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "civic/complaint",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        -416,
        -96
      ],
      "id": "e8efd8d0-0731-405c-bd94-ea49d6c91214",
      "name": "Webhook"
    },
    {
      "parameters": {
        "table": {
          "__rl": true,
          "value": "complaints",
          "mode": "list",
          "cachedResultName": "complaints"
        },
        "dataMode": "defineBelow",
        "valuesToSend": {
          "values": [
            {
              "column": "name",
              "value": "={{$json.body.name}}"
            },
            {
              "column": "email",
              "value": "={{$json.body.email}}"
            },
            {
              "column": "title",
              "value": "={{$json.body.title}}"
            },
            {
              "column": "description",
              "value": "={{$json.body.description}}"
            },
            {
              "column": "district",
              "value": "={{$json.body.district}}"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.mySql",
      "typeVersion": 2.5,
      "position": [
        48,
        -96
      ],
      "id": "03fa7214-ca9b-4b76-8d83-7a2ae8355710",
      "name": "Insert Complaints",
      "credentials": {
        "mySql": {
          "name": "YOUR_MYSQL_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT id, name, description\nFROM categories\nORDER BY id;",
        "options": {}
      },
      "type": "n8n-nodes-base.mySql",
      "typeVersion": 2.5,
      "position": [
        240,
        -96
      ],
      "id": "87bfdd92-b840-4c6f-bb9e-583b83ece439",
      "name": "Get Allowed Categories",
      "credentials": {
        "mySql": {
          "name": "YOUR_MYSQL_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=Your job is to analyze the citizen's complaint and produce structured information that will be stored in our MySQL database and used later for complaint routing and prioritization.\n\nIMPORTANT RULES:\n\n1. You MUST select exactly ONE category from the categories provided by the MySQL database.\n\n2. You MUST NOT invent, create, rename, or modify a category.\n\n3. Use the exact category ID and category name provided by the database.\n\n4. Determine the severity of the complaint using ONLY one of:\nLOW, MEDIUM, HIGH, CRITICAL\n\n5. Determine the urgency using ONLY one of:\nLOW, MEDIUM, HIGH, CRITICAL\n\n6. Write a short, clear summary of the complaint.\n\n7. Base your classification primarily on the complaint description and available information. Do not make assumptions that are unrelated to the complaint.\n\n8. The affected population is optional.\n\n9. If the complaint explicitly provides a numerical number of affected people, use that number.\n\n10. If the complaint does not explicitly provide a numerical affected population, return null.\n\n11. NEVER estimate, guess, infer, calculate, or invent the affected population.\n\nAVAILABLE CATEGORIES FROM MYSQL DATABASE:\n\n{{ $('Code in JavaScript').first().json.categories.map(c => 'ID: ' + c.id + ' | Category: ' + c.name + ' | Description: ' + c.description).join('\\n') }}\n\nCITIZEN COMPLAINT:\n\nName:\n{{ $('Webhook').first().json.body.name }}\n\nEmail:\n{{ $('Webhook').first().json.body.email }}\n\nTitle:\n{{ $('Webhook').first().json.body.title }}\n\nDescription:\n{{ $('Webhook').first().json.body.description }}\n\nDistrict:\n{{ $('Webhook').first().json.body.district }}\n\nBlock:\n{{ $('Webhook').first().json.body.block }}\n\nVillage:\n{{ $('Webhook').first().json.body.village }}\n\nAffected Population Provided by Citizen:\n{{ $('Webhook').first().json.body.affected_population }}\n\nTASK:\n\nAnalyze the complaint and select the most appropriate category from the AVAILABLE CATEGORIES.\n\nDetermine:\n- category_id\n- category_name\n- summary\n- severity\n- urgency\n- affected_population",
        "hasOutputParser": true,
        "batching": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.9,
      "position": [
        688,
        -96
      ],
      "id": "98ede2fe-8ba8-4570-a3f5-fe55337e2c06",
      "name": "Basic LLM Chain"
    },
    {
      "parameters": {
        "modelName": "models/gemini-3.1-flash-lite",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1.1,
      "position": [
        688,
        144
      ],
      "id": "5de79611-9eaf-40a6-9019-f3ca7fcaece7",
      "name": "Google Gemini Chat Model",
      "credentials": {
        "googlePalmApi": {
          "name": "YOUR_GEMINI_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "schemaType": "manual",
        "inputSchema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"category_id\": {\n      \"type\": \"integer\"\n    },\n    \"category_name\": {\n      \"type\": \"string\"\n    },\n    \"summary\": {\n      \"type\": \"string\"\n    },\n    \"severity\": {\n      \"type\": \"string\",\n      \"enum\": [\"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"]\n    },\n    \"urgency\": {\n      \"type\": \"string\",\n      \"enum\": [\"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"]\n    },\n    \"affected_population\": {\n      \"anyOf\": [\n        {\n          \"type\": \"number\",\n          \"minimum\": 1\n        },\n        {\n          \"type\": \"null\"\n        }\n      ]\n    }\n  },\n  \"required\": [\n    \"category_id\",\n    \"category_name\",\n    \"summary\",\n    \"severity\",\n    \"urgency\",\n    \"affected_population\"\n  ]\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.outputParserStructured",
      "typeVersion": 1.3,
      "position": [
        848,
        144
      ],
      "id": "d77a3faf-5e7c-429c-ba33-7ad4cae47fd2",
      "name": "Structured Output Parser"
    },
    {
      "parameters": {
        "jsCode": "return [\n  {\n    json: {\n      categories: $input.all().map(item => ({\n        id: item.json.id,\n        name: item.json.name,\n        description: item.json.description\n      }))\n    }\n  }\n];"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        464,
        -96
      ],
      "id": "029c4638-40ff-46f2-a178-c5e808186909",
      "name": "Code in JavaScript"
    },
    {
      "parameters": {
        "operation": "update",
        "table": {
          "__rl": true,
          "value": "complaints",
          "mode": "list",
          "cachedResultName": "complaints"
        },
        "dataMode": "defineBelow",
        "columnToMatchOn": "email",
        "valueToMatchOn": "={{ $('Webhook').first().json.body.email }}",
        "valuesToSend": {
          "values": [
            {
              "column": "category_id",
              "value": "={{ $('Basic LLM Chain').first().json.output.category_id }}"
            },
            {
              "column": "severity",
              "value": "={{ $('Basic LLM Chain').first().json.output.severity }}"
            },
            {
              "column": "urgency",
              "value": "={{ $('Basic LLM Chain').first().json.output.urgency }}"
            },
            {
              "column": "affected_population",
              "value": "={{ $('Basic LLM Chain').first().json.output.affected_population }}"
            },
            {
              "column": "title",
              "value": "={{ $('Webhook').first().json.body.title }}"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.mySql",
      "typeVersion": 2.5,
      "position": [
        1040,
        -96
      ],
      "id": "6bf1c1bf-da70-4ad3-8844-200471bcec8a",
      "name": "Update rows in a table",
      "credentials": {
        "mySql": {
          "name": "YOUR_MYSQL_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "const category = $('Basic LLM Chain').first().json.output.category_name;\nconst routingRules = {\n  \"Healthcare\": [\"hospital\", \"healthcare\", \"medical\", \"health\"],\n  \"Education\": [\"school\", \"education\", \"teaching\", \"college\"],\n  \"Water & Sanitation\": [\"water\", \"sanitation\", \"drainage\", \"water quality\"],\n  \"Agriculture\": [\"agriculture\", \"farming\", \"irrigation\", \"crop\"],\n  \"Environment\": [\"environment\", \"pollution\", \"waste\", \"environmental\"],\n  \"Infrastructure\": [\"infrastructure\", \"road\", \"bridge\", \"building\"],\n  \"Energy\": [\"electricity\", \"energy\", \"power\", \"renewable\"],\n  \"Public Administration\": [\"government\", \"public service\", \"administration\"]\n};\n\nreturn [\n  {\n    json: {\n      category_name: category,\n      routing_keywords: routingRules[category] || []\n    }\n  }\n];"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1264,
        -96
      ],
      "id": "a684b9b4-8efe-4823-abb6-f3314c8e370a",
      "name": "Set Routing Keywords"
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT\n    id,\n    university,\n    department,\n    faculty_name,\n    expertise,\n    email\nFROM institutions\nWHERE\n    LOWER(expertise) LIKE LOWER(CONCAT('%', '{{ $json.routing_keywords[0] }}', '%'))\n    OR LOWER(expertise) LIKE LOWER(CONCAT('%', '{{ $json.routing_keywords[1] }}', '%'))\n    OR LOWER(expertise) LIKE LOWER(CONCAT('%', '{{ $json.routing_keywords[2] }}', '%'))\n    OR LOWER(expertise) LIKE LOWER(CONCAT('%', '{{ $json.routing_keywords[3] }}', '%'));",
        "options": {}
      },
      "type": "n8n-nodes-base.mySql",
      "typeVersion": 2.5,
      "position": [
        1488,
        -96
      ],
      "id": "d84b9a1b-305f-4c82-b7e3-bbe9a213b1a1",
      "name": "Find Matching Institutions",
      "credentials": {
        "mySql": {
          "name": "YOUR_MYSQL_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "const institutions = $input.all();\n\nconst complaint = $('Webhook').first().json.body;\nconst analysis = $('Basic LLM Chain').first().json.output;\n\nreturn institutions.map(item => {\n  return {\n    json: {\n      faculty_name: item.json.faculty_name,\n      university: item.json.university,\n      department: item.json.department,\n      email: item.json.email,\n\n      complaint_name: complaint.name,\n      complaint_email: complaint.email,\n      title: complaint.title,\n      description: complaint.description,\n      district: complaint.district,\n      block: complaint.block,\n      village: complaint.village,\n\n      category: analysis.category_name,\n      severity: analysis.severity,\n      urgency: analysis.urgency,\n      affected_population: analysis.affected_population\n    }\n  };\n});"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1712,
        -96
      ],
      "id": "3e88daf1-ac46-43f6-8a42-76276723e268",
      "name": "Prepare Notification"
    },
    {
      "parameters": {
        "fromEmail": "demo@example.com",
        "toEmail": "demo@example.com",
        "subject": "=Complaint Requiring Attention: {{ $json.title }}",
        "html": "=<h2>New Civic Challenge</h2>\n\n<p>Hello <strong>{{ $json.faculty_name }}</strong>,</p>\n\n<p>A new citizen complaint has been identified as relevant to your area of expertise.</p>\n\n<hr>\n\n<p><strong>Complaint:</strong> {{ $json.title }}</p>\n\n<p><strong>Description:</strong><br>\n{{ $json.description }}</p>\n\n<p><strong>Location:</strong>\n{{ $json.village }}, {{ $json.block }}, {{ $json.district }}</p>\n\n<p><strong>Category:</strong> {{ $json.category }}</p>\n\n<p><strong>Severity:</strong> {{ $json.severity }}</p>\n\n<p><strong>Urgency:</strong> {{ $json.urgency }}</p>\n\n<p><strong>Estimated affected population:</strong>\nAffected Population:\n{{ $json.affected_population || 'Not specified by reporter' }}</p>\n\n<hr>\n\n<p>\n<strong>Institution:</strong> {{ $json.university }}<br>\n<strong>Department:</strong> {{ $json.department }}\n</p>\n\n<p>Please review this challenge and consider whether your institution can contribute a solution.</p>\n\n<p>Regards,<br>\nCivic Challenge Management System</p>",
        "options": {}
      },
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 2.1,
      "position": [
        1936,
        -96
      ],
      "id": "03d85678-4526-4424-848e-d262989f3e9e",
      "name": "Send an Email",
      "credentials": {
        "smtp": {
          "name": "YOUR_SMTP_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "updates": [
          "message"
        ],
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegramTrigger",
      "typeVersion": 1.3,
      "position": [
        -416,
        384
      ],
      "id": "94d912df-ea62-4937-99ff-6e083fee4bec",
      "name": "Telegram Trigger",
      "credentials": {
        "telegramApi": {
          "name": "YOUR_TELEGRAM_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 3
          },
          "conditions": [
            {
              "id": "e321b059-0c67-4c6e-bfc8-1d75ba2dac85",
              "leftValue": "={{ $json.message.text }}",
              "rightValue": "/start",
              "operator": {
                "type": "string",
                "operation": "equals",
                "name": "filter.operator.equals"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        -192,
        384
      ],
      "id": "ee3bee17-228d-467f-a808-728cac373dda",
      "name": "If"
    },
    {
      "parameters": {
        "chatId": "={{ $json.message.chat.id }}",
        "text": "📋 Welcome to JharSetu! 👋     \nTo report a community problem, send ONE message containing:  \n\n🔹 Name 🔹 Valid Email 🔹 Problem description 🔹 District 🔹 Block 🔹 Village / Area  \n\n📌 Affected population is optional.  \n\nExample: \"My name is Rahul Kumar, email rahul@gmail.com. Drinking water in our village is contaminated and residents are facing health problems. Around 500 people are affected. Ormanjhi village, Kanke block, Ranchi district.\" \n\n ✅ JharSetu will register, analyze, categorize and route your complaint to a relevant institution.  🚀 Send your complete complaint in one message.",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        96,
        240
      ],
      "id": "3b3a8867-07be-4e35-8b1a-78aae5d69d8e",
      "name": "Welcome",
      "credentials": {
        "telegramApi": {
          "name": "YOUR_TELEGRAM_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=You are the complaint extraction assistant for JharSetu.  The citizen has described a local problem in natural language.  Extract the following information from their message:  - name - email - title - description - district - block - village - affected_population  Rules: 1. Do not invent information. 2. If information is missing, return null. 3. Create a short and meaningful title. 4. Keep the description faithful to the citizen's actual problem. 5. Extract district, block and village when they are mentioned. 6. Extract affected population as a number when mentioned. 7. The citizen does not need to follow any format. 8. Return only the structured output.  Citizen's message: {{ $json.message.text }}    IMPORTANT RULE FOR AFFECTED POPULATION:\n\nExtract affected_population only when the user explicitly provides a number\nof people, students, residents, households, farmers, etc. who are affected.\n\nIf the user does not mention an affected population, return null.\n\nIf the user uses vague words such as \"many people\", \"several villagers\",\n\"everyone\", etc., return null.\n\nNEVER guess, estimate, calculate, or invent an affected population.",
        "hasOutputParser": true,
        "messages": {
          "messageValues": []
        },
        "batching": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.9,
      "position": [
        32,
        528
      ],
      "id": "c7e49d90-f454-4ba1-aad5-08c461d79e67",
      "name": "Basic LLM Chain1"
    },
    {
      "parameters": {
        "modelName": "models/gemini-3.1-flash-lite",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1.1,
      "position": [
        48,
        752
      ],
      "id": "76ff376e-6055-4219-a8a9-70adefffffb0",
      "name": "Google Gemini Chat Model1",
      "credentials": {
        "googlePalmApi": {
          "name": "YOUR_GEMINI_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "schemaType": "manual",
        "inputSchema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"name\": {\n      \"type\": [\"string\", \"null\"]\n    },\n    \"email\": {\n      \"type\": [\"string\", \"null\"]\n    },\n    \"title\": {\n      \"type\": \"string\"\n    },\n    \"description\": {\n      \"type\": \"string\"\n    },\n    \"district\": {\n      \"type\": [\"string\", \"null\"]\n    },\n    \"block\": {\n      \"type\": [\"string\", \"null\"]\n    },\n    \"village\": {\n      \"type\": [\"string\", \"null\"]\n    },\n    \"affected_population\": {\n      \"type\": [\"integer\", \"null\"]\n    }\n  },\n  \"required\": [\n    \"name\",\n    \"email\",\n    \"title\",\n    \"description\",\n    \"district\",\n    \"block\",\n    \"village\",\n    \"affected_population\"\n  ]\n}"
      },
      "type": "@n8n/n8n-nodes-langchain.outputParserStructured",
      "typeVersion": 1.3,
      "position": [
        176,
        752
      ],
      "id": "a77cbe55-d329-4aee-ae78-5539478b52e8",
      "name": "Structured Output Parser1"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://YOUR-N8N-DOMAIN/webhook/civic/complaint",
        "sendBody": true,
        "bodyParameters": {
          "parameters": [
            {
              "name": "name",
              "value": "={{ $json.name }}"
            },
            {
              "name": "email",
              "value": "={{ $json.email }}"
            },
            {
              "name": "title",
              "value": "={{ $json.title }}"
            },
            {
              "name": "description",
              "value": "={{ $json.description }}"
            },
            {
              "name": "district",
              "value": "={{ $json.district }}"
            },
            {
              "name": "block",
              "value": "={{ $json.block }}"
            },
            {
              "name": "village",
              "value": "={{ $json.village }}"
            },
            {
              "name": "affected_population",
              "value": "={{ $json.affected_population }}"
            },
            {
              "name": "telegram_chat_id",
              "value": "={{ $('Telegram Trigger').first().json.message.chat.id }}"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.4,
      "position": [
        832,
        432
      ],
      "id": "11839b50-922c-47f3-9dbf-a2e5348187e3",
      "name": "HTTP Request"
    },
    {
      "parameters": {
        "jsCode": "const data = $json.output;\n\nconst missing = [];\n\n// Required text fields\nif (!data.name || !String(data.name).trim()) {\n  missing.push(\"name\");\n}\n\nif (!data.email || !String(data.email).trim()) {\n  missing.push(\"email\");\n}\n\nif (!data.title || !String(data.title).trim()) {\n  missing.push(\"problem title\");\n}\n\nif (!data.description || !String(data.description).trim()) {\n  missing.push(\"problem description\");\n}\n\nif (!data.district || !String(data.district).trim()) {\n  missing.push(\"district\");\n}\n\nif (!data.block || !String(data.block).trim()) {\n  missing.push(\"block\");\n}\n\nif (!data.village || !String(data.village).trim()) {\n  missing.push(\"village\");\n}\n\n// Validate email\nconst emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n\nif (data.email && !emailRegex.test(String(data.email).trim())) {\n  missing.push(\"valid email address\");\n}\n\n// Validate affected population\n\n\nreturn [\n  {\n    json: {\n      ...data,\n      valid: missing.length === 0,\n      missing: missing\n    }\n  }\n];"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        384,
        528
      ],
      "id": "c6906b07-dba4-4450-97da-c989ac523cb0",
      "name": "Validate Complaint"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 3
          },
          "conditions": [
            {
              "id": "c33688b5-6d81-4567-a61e-c69bd6806eb2",
              "leftValue": "={{ $json.valid }}",
              "rightValue": "true",
              "operator": {
                "type": "boolean",
                "operation": "true",
                "singleValue": true
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        608,
        528
      ],
      "id": "26acf6fa-aba2-487b-b225-424b548b3896",
      "name": "If1"
    },
    {
      "parameters": {
        "chatId": "={{ $('Telegram Trigger').first().json.message.chat.id }}",
        "text": "=❌ Complaint could not be submitted.\n\nThe following required details are missing:\n\n{{ $json.missing.map(item => '🔹 ' + item.charAt(0).toUpperCase() + item.slice(1)).join('\\n') }}\n\n📌 Please include these details and send your complaint again.",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        832,
        624
      ],
      "id": "a6c8b7ee-f3b2-4ba2-9d07-a0bed82613cb",
      "name": "Send a text message",
      "credentials": {
        "telegramApi": {
          "name": "YOUR_TELEGRAM_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT id\nFROM complaints\nWHERE email = '{{ $('Webhook').first().json.body.email }}'\n  AND title = '{{ $('Webhook').first().json.body.title }}'\nORDER BY id DESC\nLIMIT 1;",
        "options": {}
      },
      "type": "n8n-nodes-base.mySql",
      "typeVersion": 2.5,
      "position": [
        2160,
        -96
      ],
      "id": "b5f6c6cb-f4bd-4ced-a07e-331c97ca5603",
      "name": "Execute a SQL query",
      "executeOnce": true,
      "credentials": {
        "mySql": {
          "name": "YOUR_MYSQL_CREDENTIAL"
        }
      }
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 3
          },
          "conditions": [
            {
              "id": "654dcd28-4d7d-4cfc-bbf7-53989a4338c0",
              "leftValue": "={{ $('Webhook').first().json.body.telegram_chat_id }}",
              "rightValue": "",
              "operator": {
                "type": "number",
                "operation": "notEmpty",
                "singleValue": true
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        2384,
        -96
      ],
      "id": "902438c8-8b93-421d-813c-e58d69eb4bf4",
      "name": "Telegram Request?"
    },
    {
      "parameters": {
        "chatId": "={{ $('Webhook').first().json.body.telegram_chat_id }}",
        "text": "=✅ Complaint Registered Successfully! \n\n🆔 Complaint ID: JS-{{ String($json.id).padStart(6, '0') }}  \nYour complaint has been successfully registered with JharSetu. \n📋 Your complaint has been: \n• Recorded in our system \n• Analyzed and categorized • Assessed for severity and urgency • Forwarded to the relevant institution \n📌 Save your Complaint ID to track your complaint later.  \nThank you for helping us identify community problems. 🙏",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        2608,
        -96
      ],
      "id": "daec1050-e851-4a39-9ae7-d15326cceac1",
      "name": "Send a text message2",
      "credentials": {
        "telegramApi": {
          "name": "YOUR_TELEGRAM_CREDENTIAL"
        }
      }
    }
  ],
  "pinData": {},
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Insert Complaints",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Insert Complaints": {
      "main": [
        [
          {
            "node": "Get Allowed Categories",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Google Gemini Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "Basic LLM Chain",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Get Allowed Categories": {
      "main": [
        [
          {
            "node": "Code in JavaScript",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Structured Output Parser": {
      "ai_outputParser": [
        [
          {
            "node": "Basic LLM Chain",
            "type": "ai_outputParser",
            "index": 0
          }
        ]
      ]
    },
    "Code in JavaScript": {
      "main": [
        [
          {
            "node": "Basic LLM Chain",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Basic LLM Chain": {
      "main": [
        [
          {
            "node": "Update rows in a table",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update rows in a table": {
      "main": [
        [
          {
            "node": "Set Routing Keywords",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set Routing Keywords": {
      "main": [
        [
          {
            "node": "Find Matching Institutions",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Find Matching Institutions": {
      "main": [
        [
          {
            "node": "Prepare Notification",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Prepare Notification": {
      "main": [
        [
          {
            "node": "Send an Email",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram Trigger": {
      "main": [
        [
          {
            "node": "If",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If": {
      "main": [
        [
          {
            "node": "Welcome",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Basic LLM Chain1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Welcome": {
      "main": [
        []
      ]
    },
    "Google Gemini Chat Model1": {
      "ai_languageModel": [
        [
          {
            "node": "Basic LLM Chain1",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Structured Output Parser1": {
      "ai_outputParser": [
        [
          {
            "node": "Basic LLM Chain1",
            "type": "ai_outputParser",
            "index": 0
          }
        ]
      ]
    },
    "Basic LLM Chain1": {
      "main": [
        [
          {
            "node": "Validate Complaint",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Validate Complaint": {
      "main": [
        [
          {
            "node": "If1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If1": {
      "main": [
        [
          {
            "node": "HTTP Request",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Send a text message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request": {
      "main": [
        []
      ]
    },
    "Send an Email": {
      "main": [
        [
          {
            "node": "Execute a SQL query",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Execute a SQL query": {
      "main": [
        [
          {
            "node": "Telegram Request?",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram Request?": {
      "main": [
        [
          {
            "node": "Send a text message2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "nodeGroups": [],
  "tags": [
    {
      "updatedAt": "2026-09-01T14:10:21.734Z",
      "createdAt": "2026-09-01T14:10:21.734Z",
      "id": "HIdiutgtp1lTsg6n",
      "name": "SIH"
    }
  ]
}
