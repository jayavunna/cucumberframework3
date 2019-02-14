$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("examples.feature");
formatter.feature({
  "line": 2,
  "name": "Multi Bank",
  "description": "",
  "id": "multi-bank",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Two"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"\u003cBankWebsite\u003e\" Website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"\u003cBankName\u003e\" homePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "multi-bank;open-multi-windows;",
  "rows": [
    {
      "cells": [
        "BankWebsite",
        "BankName"
      ],
      "line": 8,
      "id": "multi-bank;open-multi-windows;;1"
    },
    {
      "cells": [
        "https://www.santander.com/",
        "Santander"
      ],
      "line": 9,
      "id": "multi-bank;open-multi-windows;;2"
    },
    {
      "cells": [
        "https://www.barclays.co.uk/",
        "Barclays"
      ],
      "line": 10,
      "id": "multi-bank;open-multi-windows;;3"
    },
    {
      "cells": [
        "https://www.lloydsbank.com/",
        "Lloyds"
      ],
      "line": 11,
      "id": "multi-bank;open-multi-windows;;4"
    },
    {
      "cells": [
        "https://www.sbiuk.com/",
        "State Bank of India"
      ],
      "line": 12,
      "id": "multi-bank;open-multi-windows;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5083096559,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.santander.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Santander\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step()"
});
formatter.result({
  "duration": 4309121946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.santander.com/",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 7839603510,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 776746058,
  "status": "passed"
});
formatter.before({
  "duration": 3343846956,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.barclays.co.uk/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Barclays\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step()"
});
formatter.result({
  "duration": 2985528823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.barclays.co.uk/",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 6100691465,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 702655566,
  "status": "passed"
});
formatter.before({
  "duration": 2220116997,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.lloydsbank.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Lloyds\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step()"
});
formatter.result({
  "duration": 3422351372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.lloydsbank.com/",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 4174170653,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 690569192,
  "status": "passed"
});
formatter.before({
  "duration": 2174831420,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.sbiuk.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"State Bank of India\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step()"
});
formatter.result({
  "duration": 5105664209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.sbiuk.com/",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 5348179322,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 702638953,
  "status": "passed"
});
});