export const LECTURE = {
  subjectId: 'computer-networks',
  number: 9,
  title: 'Network Layer 3',
  titleAr: 'طبقة الشبكة 3',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Routing Tables and Algorithms</h2>
<p>Routers use routing algorithms to find the least-cost path between source and destination networks. A routing table stores these paths. To be scalable, modern routers use <strong>Next-Hop Routing</strong> (storing only the next router in the path instead of the full route) and <strong>Network-Specific Routing</strong> (one entry per destination subnet rather than per individual host).</p>

<h2>Routing Algorithm Classification</h2>
<ul>
  <li><strong>Global (Link-State):</strong> Every router knows the complete network topology and all link costs. It uses algorithms like Dijkstra's to compute shortest paths. Example: <strong>OSPF</strong>.</li>
  <li><strong>Decentralized (Distance Vector):</strong> Routers only know the cost to their directly connected neighbors and the distance vectors they receive from those neighbors. They iteratively exchange updates using the Bellman-Ford equation. Example: <strong>RIP</strong>.</li>
</ul>

<h2>Intradomain vs Interdomain Routing</h2>
<p>An Autonomous System (AS) is a network under a single administrative control.</p>
<ul>
  <li><strong>Intradomain (IGP):</strong> Routing within a single AS. The goal is finding the optimal/fastest path. Protocols include <strong>RIP</strong> (Routing Information Protocol, uses hop count, max 15 hops, updates every 30s) and <strong>OSPF</strong> (Open Shortest Path First, uses link costs, highly scalable).</li>
  <li><strong>Interdomain (EGP):</strong> Routing between different ASs. The primary protocol is <strong>BGP (Border Gateway Protocol)</strong>. It exchanges subnet reachability information between ASs using policies rather than strict distance metrics.</li>
</ul>

<h2>Broadcast Routing</h2>
<p>Broadcast routing delivers packets from a source to all other nodes in the network. Simple <strong>Source Duplication</strong> is inefficient as it wastes bandwidth. In-network duplication methods include:</p>
<div class="callout callout-warning">
  <strong>Flooding:</strong> A node sends a copy of the packet to all its neighbors. Without controls, this causes infinite loops and congestion.
</div>
<div class="callout callout-info">
  <strong>Controlled Flooding & Spanning Tree:</strong> Controlled flooding tracks packet IDs so a router only forwards a packet once. A <strong>Spanning Tree</strong> builds a loop-free path across all nodes, guaranteeing that no redundant packets are received by any node, providing maximum efficiency.
</div>`,
        bodyAr: `<h2>جداول التوجيه وخوارزمياته</h2>
<p>تستخدم الموجهات خوارزميات التوجيه للعثور على المسار الأقل تكلفة بين شبكات المصدر والوجهة. يخزن جدول التوجيه هذه المسارات. لكي تكون قابلة للتوسع، تستخدم الموجهات الحديثة <strong>التوجيه بالقفزة التالية (Next-Hop)</strong> (تخزين الموجه التالي فقط في المسار بدلاً من المسار الكامل) و <strong>التوجيه الخاص بالشبكة (Network-Specific)</strong> (إدخال واحد لكل شبكة فرعية للوجهة بدلاً من كل مضيف فردي).</p>

<h2>تصنيف خوارزميات التوجيه</h2>
<ul>
  <li><strong>عالمية (Link-State):</strong> يعرف كل موجه طوبولوجيا الشبكة بالكامل وجميع تكاليف الارتباط. يستخدم خوارزميات مثل Dijkstra لحساب أقصر المسارات. مثال: <strong>OSPF</strong>.</li>
  <li><strong>لامركزية (Distance Vector):</strong> تعرف الموجهات فقط التكلفة لجيرانها المتصلين مباشرة ومتجهات المسافة التي تتلقاها من هؤلاء الجيران. يتبادلون التحديثات بشكل تكراري باستخدام معادلة Bellman-Ford. مثال: <strong>RIP</strong>.</li>
</ul>

<h2>التوجيه داخل المجال مقابل التوجيه بين المجالات</h2>
<p>النظام المستقل (AS) هو شبكة تحت تحكم إداري واحد.</p>
<ul>
  <li><strong>التوجيه داخل المجال (IGP):</strong> التوجيه داخل AS واحد. الهدف هو إيجاد المسار الأمثل/الأسرع. تشمل البروتوكولات <strong>RIP</strong> (يستخدم عدد القفزات، بحد أقصى 15 قفزة، تحديثات كل 30 ثانية) و <strong>OSPF</strong> (يستخدم تكاليف الارتباط، قابل للتوسع بشكل كبير).</li>
  <li><strong>التوجيه بين المجالات (EGP):</strong> التوجيه بين ASs مختلفة. البروتوكول الأساسي هو <strong>BGP</strong>. يتبادل معلومات قابلية الوصول إلى الشبكة الفرعية بين ASs باستخدام السياسات بدلاً من مقاييس المسافة الصارمة.</li>
</ul>

<h2>توجيه البث (Broadcast Routing)</h2>
<p>يسلم توجيه البث الحزم من مصدر إلى جميع العقد الأخرى في الشبكة. <strong>النسخ في المصدر (Source Duplication)</strong> البسيط غير فعال لأنه يهدر النطاق الترددي. تشمل طرق النسخ داخل الشبكة ما يلي:</p>
<div class="callout callout-warning">
  <strong>الفيضان (Flooding):</strong> ترسل العقدة نسخة من الحزمة إلى جميع جيرانها. بدون ضوابط، يسبب هذا حلقات لا نهائية وازدحامًا.
</div>
<div class="callout callout-info">
  <strong>الفيضان المتحكم به وشجرة الامتداد (Spanning Tree):</strong> يتتبع الفيضان المتحكم به معرفات الحزم بحيث يقوم الموجه بإعادة توجيه الحزمة مرة واحدة فقط. تبني <strong>شجرة الامتداد</strong> مسارًا خاليًا من الحلقات عبر جميع العقد، مما يضمن عدم تلقي أي عقدة لحزم زائدة، مما يوفر أقصى قدر من الكفاءة.
</div>`
      }
    }
  ],

  summary: {
    points: [
      "Next-Hop and Network-Specific routing tables improve router memory and scalability.",
      "Link-State algorithms (like OSPF) require global network knowledge and use Dijkstra's shortest path.",
      "Distance-Vector algorithms (like RIP) are decentralized and iteratively share routing tables with neighbors.",
      "RIP uses hop count as a metric with a maximum of 15 hops.",
      "OSPF is an intradomain protocol used in large enterprise networks.",
      "BGP is the interdomain routing protocol that connects different Autonomous Systems globally.",
      "Spanning Tree routing builds a loop-free path to safely deliver broadcast packets without duplicates."
    ],
    pointsAr: [
      "تعمل جداول توجيه القفزة التالية (Next-Hop) والخاصة بالشبكة (Network-Specific) على تحسين ذاكرة الموجه وقابلية التوسع.",
      "تتطلب خوارزميات حالة الارتباط (مثل OSPF) معرفة شاملة بالشبكة وتستخدم أقصر مسار لـ Dijkstra.",
      "خوارزميات متجه المسافة (مثل RIP) لامركزية وتشارك جداول التوجيه بشكل تكراري مع الجيران.",
      "يستخدم RIP عدد القفزات كمقياس بحد أقصى 15 قفزة.",
      "OSPF هو بروتوكول داخل المجال يستخدم في شبكات المؤسسات الكبيرة.",
      "BGP هو بروتوكول التوجيه بين المجالات الذي يربط الأنظمة المستقلة المختلفة عالميًا.",
      "يبني توجيه شجرة الامتداد مسارًا خاليًا من الحلقات لتسليم حزم البث بأمان دون تكرار."
    ]
  },

  mcq: [
    {
      id: 'cn-l9-q1',
      question: "Which of the following routing table methods is the most scalable for large networks?",
      questionAr: "أي من طرق جداول التوجيه التالية هي الأكثر قابلية للتوسع في الشبكات الكبيرة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Route Method (Full Path)', isCorrect: false },
        { id: 'b', text: 'Next-Hop and Network-Specific Method', isCorrect: true },
        { id: 'c', text: 'Host-Specific Method', isCorrect: false },
        { id: 'd', text: 'Source Duplication Method', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q2',
      question: "In a Link-State routing algorithm, what information does each router initially have?",
      questionAr: "في خوارزمية توجيه Link-State (حالة الارتباط)، ما هي المعلومات التي يمتلكها كل موجه في البداية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Only the cost to its immediate neighbors', isCorrect: false },
        { id: 'b', text: 'The routing policies of external Autonomous Systems', isCorrect: false },
        { id: 'c', text: 'The complete topology and link costs of the entire network', isCorrect: true },
        { id: 'd', text: 'Only the hop count to the destination', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q3',
      question: "[MID] Which protocol uses the Distance Vector algorithm and relies on hop count as its metric?",
      questionAr: "[MID] أي بروتوكول يستخدم خوارزمية متجه المسافة (Distance Vector) ويعتمد على عدد القفزات كمقياس له؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'OSPF', isCorrect: false },
        { id: 'b', text: 'RIP', isCorrect: true },
        { id: 'c', text: 'BGP', isCorrect: false },
        { id: 'd', text: 'DHCP', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q4',
      question: "What algorithm does OSPF use to calculate the shortest path?",
      questionAr: "ما هي الخوارزمية التي يستخدمها OSPF لحساب أقصر مسار؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Bellman-Ford Algorithm', isCorrect: false },
        { id: 'b', text: 'Dijkstra’s Algorithm', isCorrect: true },
        { id: 'c', text: 'Distance Vector Algorithm', isCorrect: false },
        { id: 'd', text: 'Spanning Tree Algorithm', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q5',
      question: "What is the maximum number of hops allowed in the RIP protocol?",
      questionAr: "ما هو الحد الأقصى لعدد القفزات المسموح به في بروتوكول RIP؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '10', isCorrect: false },
        { id: 'b', text: '15', isCorrect: true },
        { id: 'c', text: '32', isCorrect: false },
        { id: 'd', text: 'Unlimited', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q6',
      question: "[MID] Which protocol is responsible for Inter-AS (Interdomain) routing across the global Internet?",
      questionAr: "[MID] ما هو البروتوكول المسؤول عن التوجيه بين الأنظمة المستقلة (Inter-AS) عبر الإنترنت العالمي؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'RIP', isCorrect: false },
        { id: 'b', text: 'OSPF', isCorrect: false },
        { id: 'c', text: 'BGP', isCorrect: true },
        { id: 'd', text: 'IGMP', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q7',
      question: "Why is 'Flooding' considered an inefficient method for broadcast routing without controls?",
      questionAr: "لماذا يُعتبر 'الفيضان' (Flooding) طريقة غير فعالة لتوجيه البث بدون ضوابط؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It creates infinite loops and generates redundant traffic', isCorrect: true },
        { id: 'b', text: 'It only sends packets to a single destination', isCorrect: false },
        { id: 'c', text: 'It requires a global routing table', isCorrect: false },
        { id: 'd', text: 'It encrypts every broadcast packet', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q8',
      question: "Which broadcast routing technique guarantees that no redundant packets are received by any node?",
      questionAr: "أي تقنية لتوجيه البث تضمن عدم تلقي أي عقدة لحزم زائدة (مكررة)؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Uncontrolled Flooding', isCorrect: false },
        { id: 'b', text: 'Controlled Flooding', isCorrect: false },
        { id: 'c', text: 'Spanning Tree', isCorrect: true },
        { id: 'd', text: 'Source Duplication', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q9',
      question: "In Distance Vector routing, when does a router update its routing table?",
      questionAr: "في توجيه متجه المسافة (Distance Vector)، متى يقوم الموجه بتحديث جدول التوجيه الخاص به؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'When it receives a routing update from a neighbor that offers a lower cost path', isCorrect: true },
        { id: 'b', text: 'Only when manually configured by an administrator', isCorrect: false },
        { id: 'c', text: 'When a BGP session is established', isCorrect: false },
        { id: 'd', text: 'When it receives a Spanning Tree join message', isCorrect: false }
      ]
    },
    {
      id: 'cn-l9-q10',
      question: "Which of the following routing algorithms uses a decentralized, asynchronous, and iterative process?",
      questionAr: "أي من خوارزميات التوجيه التالية تستخدم عملية لامركزية وغير متزامنة وتكرارية؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Link-State (Dijkstra)', isCorrect: false },
        { id: 'b', text: 'Distance Vector (Bellman-Ford)', isCorrect: true },
        { id: 'c', text: 'Spanning Tree Broadcast', isCorrect: false },
        { id: 'd', text: 'Static Route Assignment', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l9-w1',
      question: "Compare Link-State (LS) and Distance Vector (DV) routing algorithms.",
      questionAr: "قارن بين خوارزميات توجيه Link-State (حالة الارتباط) و Distance Vector (متجه المسافة).",
      modelAnswer: "Link-State algorithms require every router to know the entire network topology and compute shortest paths globally using Dijkstra's algorithm (e.g., OSPF). Distance Vector algorithms are decentralized; routers only know the cost to their direct neighbors and iteratively exchange routing tables to find the best paths using the Bellman-Ford equation (e.g., RIP).",
      modelAnswerAr: "تتطلب خوارزميات Link-State من كل موجه معرفة طوبولوجيا الشبكة بأكملها وحساب أقصر المسارات عالميًا باستخدام خوارزمية Dijkstra (مثل OSPF). خوارزميات Distance Vector لامركزية؛ حيث تعرف الموجهات فقط التكلفة لجيرانها المباشرين وتتبادل جداول التوجيه بشكل تكراري للعثور على أفضل المسارات باستخدام معادلة Bellman-Ford (مثل RIP)."
    },
    {
      id: 'cn-l9-w2',
      question: "What is the role of the Border Gateway Protocol (BGP)?",
      questionAr: "ما هو دور بروتوكول بوابة الحدود (BGP)؟",
      modelAnswer: "BGP is the primary Interdomain routing protocol used to connect different Autonomous Systems (ASs) across the Internet. It allows ASs to exchange subnet reachability information and select 'good' routes based on administrative and business policies, rather than just the shortest physical path.",
      modelAnswerAr: "BGP هو بروتوكول التوجيه الأساسي بين المجالات (Interdomain) المستخدم لربط الأنظمة المستقلة (ASs) المختلفة عبر الإنترنت. يسمح للأنظمة المستقلة بتبادل معلومات قابلية الوصول للشبكات الفرعية واختيار المسارات 'الجيدة' بناءً على السياسات الإدارية والتجارية، وليس فقط أقصر مسار مادي."
    },
    {
      id: 'cn-l9-w3',
      question: "Explain why 'Spanning Tree' is the most efficient method for Broadcast Routing.",
      questionAr: "اشرح لماذا تعتبر 'شجرة الامتداد' (Spanning Tree) هي الطريقة الأكثر كفاءة لتوجيه البث.",
      modelAnswer: "Spanning Tree routing is highly efficient because it creates a loop-free logical tree structure that covers all nodes in the network. Broadcast packets are only forwarded along the branches of this tree, ensuring that every node receives exactly one copy of the packet, eliminating redundant traffic and network congestion.",
      modelAnswerAr: "يعتبر توجيه شجرة الامتداد فعالًا للغاية لأنه ينشئ بنية شجرة منطقية خالية من الحلقات تغطي جميع العقد في الشبكة. يتم إعادة توجيه حزم البث فقط على طول فروع هذه الشجرة، مما يضمن تلقي كل عقدة لنسخة واحدة بالضبط من الحزمة، مما يلغي حركة المرور الزائدة وازدحام الشبكة."
    }
  ]
};
