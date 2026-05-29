export const LECTURE = {
  subjectId: 'computer-networks',
  number: 3,
  title: 'Network Physical Layer',
  titleAr: 'الطبقة المادية للشبكة',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>The Physical Layer — Role & Main Concerns</h2>
<p>The Physical layer is the lowest layer in the TCP/IP and OSI models. Its roles are:</p>
<ul>
  <li>Provide services for the Data Link layer above it.</li>
  <li>Coordinate the functions required to carry a <strong>bit stream</strong> over a physical medium.</li>
  <li>Deal with the mechanical and electrical specifications of the interface and transmission medium.</li>
</ul>
<p>The Physical layer's main concerns are:</p>
<ul>
  <li><strong>Physical characteristics of interfaces and medium:</strong> the hardware specifications of connectors, cables, and wireless links.</li>
  <li><strong>Representation of bits:</strong> to transmit data, bits must be encoded into signals (electrical or optical).</li>
  <li><strong>Data rate:</strong> the duration of each bit (how many bits per second can be sent).</li>
  <li><strong>Synchronization of bits:</strong> the sender and receiver clocks must be synchronized.</li>
  <li><strong>Line configuration:</strong> the connection of devices to the medium — point-to-point or multipoint.</li>
  <li><strong>Physical topology:</strong> how devices are physically connected to form a network.</li>
  <li><strong>Transmission mode:</strong> defines the direction of data flow between two devices.</li>
</ul>

<h2>Encapsulation & De-encapsulation (TCP/IP Recall)</h2>
<p>As data travels down the protocol stack at the sender, each layer adds its own header (and sometimes trailer), a process called <strong>encapsulation</strong>. The reverse process at the receiver — stripping headers layer by layer — is called <strong>de-encapsulation</strong>:</p>
<ul>
  <li><strong>Application layer</strong> produces: Data</li>
  <li><strong>Transport layer</strong> adds header → Segment</li>
  <li><strong>Network layer</strong> adds header → Packet</li>
  <li><strong>Data Link layer</strong> adds header + trailer → Frame</li>
  <li><strong>Physical layer</strong> transmits: Bits (raw bit stream)</li>
</ul>

<h2>Data Communications — Five Components</h2>
<p>A data communications system has five essential components:</p>
<ol>
  <li><strong>Message:</strong> The information (data) to be communicated.</li>
  <li><strong>Sender:</strong> The device that sends the message.</li>
  <li><strong>Receiver:</strong> The device that receives the message.</li>
  <li><strong>Transmission Medium:</strong> The physical path over which the message travels.</li>
  <li><strong>Protocol:</strong> The set of rules that govern data communication.</li>
</ol>

<h2>Data Representation</h2>
<p>All types of data must be converted into bit patterns before transmission:</p>
<ul>
  <li><strong>Text:</strong> Represented as bit patterns using encoding schemes like ASCII or Unicode.</li>
  <li><strong>Numbers:</strong> Also represented by bit patterns.</li>
  <li><strong>Images:</strong> Composed of a matrix of pixels; each pixel is assigned a bit pattern.</li>
  <li><strong>Audio:</strong> Sent as a digital or analog signal.</li>
  <li><strong>Video:</strong> Sent as a digital or analog signal.</li>
</ul>

<h2>Data Flow — Transmission Modes</h2>
<p>Communication between two devices can occur in three modes:</p>
<ul>
  <li><strong>Simplex:</strong> Data flows in one direction only (e.g., a keyboard to a computer, or a TV broadcast). Like a one-way street.</li>
  <li><strong>Half-Duplex:</strong> Data can flow in both directions, but not simultaneously. Only one device transmits at a time (e.g., walkie-talkies).</li>
  <li><strong>Full-Duplex:</strong> Data flows in both directions simultaneously (e.g., telephone calls). Both devices can send and receive at the same time.</li>
</ul>

<h2>Physical Network Topologies</h2>
<p>Physical topology describes how devices are physically connected. The two fundamental connection types are <strong>point-to-point</strong> (dedicated link between two devices) and <strong>multipoint</strong> (shared link among more than two devices).</p>

<h3>Mesh Topology</h3>
<ul>
  <li>Fully connected: every device has a dedicated point-to-point link to every other device.</li>
  <li>For <em>n</em> devices: requires <strong>n(n−1)/2 links</strong> → O(n²) complexity.</li>
  <li>Example: 10 devices → 10×9/2 = <strong>45 links</strong>.</li>
  <li><strong>Advantages:</strong> dedicated links with low traffic overhead; robust topology; high privacy/security; easy fault identification and isolation.</li>
  <li><strong>Disadvantages:</strong> high cost (large number of links/wires); installation is complex O(n²).</li>
</ul>

<h3>Star Topology</h3>
<ul>
  <li>Each device has a dedicated point-to-point duplex link to a <strong>central controller (hub or switch)</strong>.</li>
  <li>Mainly used in high-speed LANs.</li>
  <li>For <em>n</em> devices: requires <strong>O(n) links</strong>.</li>
  <li><strong>Advantages:</strong> less expensive than mesh; easy installation and configuration; robust (one failed node doesn't affect others).</li>
  <li><strong>Disadvantages:</strong> single point of failure at the central hub/switch.</li>
</ul>

<h3>Bus Topology</h3>
<ul>
  <li>One long cable (backbone) acts as a shared medium; all devices connect to it via <strong>multipoint connections</strong>.</li>
  <li>Used in Ethernet LANs.</li>
  <li>For <em>n</em> devices: requires <strong>O(1) links</strong> (only one backbone cable).</li>
  <li><strong>Advantages:</strong> ease of installation; less cabling than mesh or star (lower cost).</li>
  <li><strong>Disadvantages:</strong> difficult reconnection and fault isolation; signal reflection at taps can degrade quality; a fault or break in the bus cable stops <em>all</em> transmission (low robustness).</li>
</ul>

<h3>Ring Topology</h3>
<ul>
  <li>Each device has a dedicated point-to-point connection to its two immediate neighbors only, forming a closed loop.</li>
  <li>A signal travels in <strong>one direction only</strong>; each device incorporates a repeater.</li>
  <li>For <em>n</em> devices: requires <strong>O(n) links</strong>.</li>
  <li><strong>Advantages:</strong> easy to install and reconfigure; low space complexity; simplified fault isolation.</li>
  <li><strong>Disadvantages:</strong> unidirectional traffic; less robust (a single device failure can break the entire ring).</li>
</ul>

<h3>Hybrid Topology</h3>
<p>A combination of two or more basic topologies. A common example is a <strong>star backbone with several bus networks</strong> attached to it. This allows flexible, scalable designs tailored to real-world needs.</p>

<h2>dB (Decibel) in Communications</h2>
<p>The <strong>decibel (dB)</strong> is a relative unit of measurement used in communications to express power gain or loss:</p>
<ul>
  <li><strong>Formula:</strong> P<sub>dB</sub> = 10 × log<sub>10</sub>(P₂/P₁)</li>
  <li><strong>dBW:</strong> P<sub>dB</sub> = 10 × log<sub>10</sub>(P(W) / 1W) — reference is 1 watt (absolute).</li>
  <li><strong>dBm:</strong> P<sub>dB</sub> = 10 × log<sub>10</sub>(P(mW) / 1mW) — reference is 1 milliwatt (absolute).</li>
  <li><strong>dBμ:</strong> Reference is 1 microwatt (absolute).</li>
</ul>
<p>Key rules for working with dB:</p>
<ul>
  <li><strong>Amplifier gain:</strong> Output (dBW) = Input (dBW) + Gain (dB) — add in dB, multiply in absolute values.</li>
  <li><strong>Component loss:</strong> Output (dBW) = Input (dBW) − Loss (dB) — subtract in dB. Loss is a value less than 1.0 in linear scale.</li>
</ul>
<div class="callout callout-info">
  <strong>Example:</strong> A coaxial cable with 7 dB loss: Input = −73 dBm → Output = −73 − 7 = <strong>−80 dBm</strong>.
</div>

<h2>Signal-to-Noise Ratio (SNR)</h2>
<p>The <strong>SNR</strong> measures the strength of a signal relative to background noise:</p>
<ul>
  <li>SNR = Average signal power / Average noise power</li>
  <li>SNR (dB) = 10 × log<sub>10</sub>(SNR)</li>
  <li>A high SNR means a cleaner channel with fewer errors; a low SNR means noise dominates and errors are likely.</li>
</ul>

<h2>Network Performance</h2>

<h3>(1) Bandwidth</h3>
<p>Bandwidth has two meanings:</p>
<ul>
  <li><strong>Bandwidth in Hertz (Hz):</strong> the range of frequencies a channel can pass. Example: a telephone line has a bandwidth of 4 kHz.</li>
  <li><strong>Bandwidth in bps:</strong> the number of bits per second a channel can transmit. Example: Ethernet = up to 100 Mbps.</li>
</ul>
<p>An increase in bandwidth (Hz) leads to an increase in bandwidth (bps).</p>
<p><strong>Bit Rate:</strong> R = 1/T bits per second, where T is the duration of one bit.</p>
<div class="callout callout-info">
  <strong>Example:</strong> Downloading 100 pages/second, each page = 24 lines × 80 characters × 8 bits = 1,536,000 bps ≈ <strong>1.536 Mbps</strong>.
</div>

<h3>Shannon Capacity</h3>
<p>In 1944, Claude Shannon introduced the formula for the theoretical maximum data rate of a <em>noisy</em> channel:</p>
<p><strong>Capacity = Bandwidth × log₂(1 + SNR)</strong></p>
<div class="callout callout-info">
  <strong>Example:</strong> Voice telephone line: Bandwidth = 3100 Hz (300–3400 Hz), SNR = 30 dB → linear SNR = 1000.<br>
  Capacity = 3100 × log₂(1001) ≈ 3100 × 10 ≈ <strong>~31 kbps</strong>.<br>
  Higher speeds (e.g., 56 kbps) require a cleaner channel with a higher SNR.
</div>

<h3>(2) Throughput</h3>
<p>Throughput is a measure of how fast data can <em>actually</em> be sent through a network (always ≤ bandwidth):</p>
<ul>
  <li>Bandwidth is the <em>potential</em> (maximum possible) rate of a link.</li>
  <li>Throughput is the <em>actual</em> measured rate achieved in practice.</li>
</ul>
<div class="callout callout-info">
  <strong>Example:</strong> A 10 Mbps network passes 12,000 frames/minute, each 10,000 bits.<br>
  Throughput = (12,000 × 10,000) / 60 = <strong>2 Mbps</strong> (one-fifth of the bandwidth).
</div>

<h3>(3) Latency (Delay)</h3>
<p>Latency defines how long it takes for an entire message to arrive at the destination from when the first bit is sent:</p>
<p><strong>Latency = Propagation time + Transmission time + Queuing time + Processing delay</strong></p>
<ul>
  <li><strong>Propagation time</strong> = Traveling distance / Propagation speed. Measures time for a bit to physically travel from source to destination.</li>
  <li><strong>Transmission time</strong> = Message size / Channel bandwidth. Time to push all bits of the message into the link.</li>
  <li><strong>Queuing time:</strong> Time each intermediate router or end device holds the message before processing. Increases with network traffic load.</li>
  <li><strong>Processing delay:</strong> Time to inspect the packet and decide on the output link.</li>
</ul>
<div class="callout callout-info">
  <strong>Example A (short email, high bandwidth):</strong> 2.5 KB message, 1 Gbps link, distance = 12,000 km, speed = 2.4×10⁸ m/s.<br>
  Propagation = 12,000,000 / 2.4×10⁸ = <strong>50 ms</strong>. Transmission = (2500×8) / 10⁹ = <strong>0.020 ms</strong>. → Propagation dominates.<br><br>
  <strong>Example B (large image, low bandwidth):</strong> 5 MB message, 1 Mbps link, same distance.<br>
  Propagation = <strong>50 ms</strong>. Transmission = (5,000,000×8) / 10⁶ = <strong>40 s</strong>. → Transmission dominates.
</div>

<h3>(4) Bandwidth-Delay Product</h3>
<p>The bandwidth-delay product defines the <strong>number of bits that can "fill" the link</strong> at any one time. Think of the link as a pipe: the cross-section is the bandwidth, the length is the delay, and the <em>volume</em> is the bandwidth-delay product.</p>
<p><strong>Bandwidth-Delay Product = Bandwidth (bps) × Delay (s)</strong></p>

<h3>(5) Jitter</h3>
<p>Jitter is the <strong>variation in delay</strong> for packets traveling through the same channel. It is a problem for time-sensitive applications like audio and video streaming, where packets must arrive at a consistent rate.</p>`,

        bodyAr: `<h2>الطبقة المادية — الدور والاهتمامات الرئيسية</h2>
<p>الطبقة المادية هي أدنى طبقة في نموذجي TCP/IP وOSI. أدوارها:</p>
<ul>
  <li>توفير الخدمات لطبقة ارتباط البيانات فوقها.</li>
  <li>تنسيق الوظائف اللازمة لحمل <strong>تيار البتات</strong> عبر الوسيط المادي.</li>
  <li>التعامل مع المواصفات الميكانيكية والكهربائية للواجهة ووسيط الإرسال.</li>
</ul>
<p>الاهتمامات الرئيسية للطبقة المادية:</p>
<ul>
  <li><strong>الخصائص المادية للواجهات والوسيط:</strong> مواصفات الأجهزة للموصلات والكابلات والروابط اللاسلكية.</li>
  <li><strong>تمثيل البتات:</strong> لإرسال البيانات، يجب ترميز البتات إلى إشارات (كهربائية أو ضوئية).</li>
  <li><strong>معدل البيانات:</strong> مدة كل بت (كم بت في الثانية يمكن إرساله).</li>
  <li><strong>مزامنة البتات:</strong> يجب مزامنة ساعتَي المرسل والمستقبل.</li>
  <li><strong>تهيئة الخط:</strong> توصيل الأجهزة بالوسيط — نقطة إلى نقطة أو متعدد النقاط.</li>
  <li><strong>الطوبولوجيا المادية:</strong> كيفية توصيل الأجهزة فيزيائيًا لتكوين الشبكة.</li>
  <li><strong>وضع الإرسال:</strong> يحدد اتجاه تدفق البيانات بين جهازين.</li>
</ul>

<h2>التغليف وفك التغليف (مراجعة TCP/IP)</h2>
<p>عند انتقال البيانات لأسفل عبر طبقات البروتوكول لدى المرسل، تضيف كل طبقة رأسها الخاص، وهذا يُسمى <strong>التغليف (Encapsulation)</strong>. والعكس لدى المستقبل — نزع الرؤوس طبقةً بطبقة — يُسمى <strong>فك التغليف (De-encapsulation)</strong>:</p>
<ul>
  <li><strong>طبقة التطبيقات</strong> تنتج: بيانات (Data)</li>
  <li><strong>طبقة النقل</strong> تضيف رأسًا → شريحة (Segment)</li>
  <li><strong>طبقة الشبكة</strong> تضيف رأسًا → حزمة (Packet)</li>
  <li><strong>طبقة ارتباط البيانات</strong> تضيف رأسًا وذيلًا → إطار (Frame)</li>
  <li><strong>الطبقة المادية</strong> ترسل: بتات (Bits)</li>
</ul>

<h2>اتصالات البيانات — خمسة مكونات</h2>
<ol>
  <li><strong>الرسالة:</strong> المعلومات (البيانات) المراد إيصالها.</li>
  <li><strong>المرسِل:</strong> الجهاز الذي يرسل الرسالة.</li>
  <li><strong>المستقبِل:</strong> الجهاز الذي يستقبل الرسالة.</li>
  <li><strong>وسيط الإرسال:</strong> المسار المادي الذي تسلكه الرسالة.</li>
  <li><strong>البروتوكول:</strong> مجموعة القواعد التي تحكم اتصالات البيانات.</li>
</ol>

<h2>تمثيل البيانات</h2>
<p>يجب تحويل جميع أنواع البيانات إلى أنماط بتات قبل الإرسال:</p>
<ul>
  <li><strong>النص:</strong> يُمثَّل كأنماط بتات باستخدام ترميزات مثل ASCII أو Unicode.</li>
  <li><strong>الأرقام:</strong> تُمثَّل أيضًا بأنماط بتات.</li>
  <li><strong>الصور:</strong> مكونة من مصفوفة من وحدات البكسل؛ كل بكسل يُسنَد له نمط بتات.</li>
  <li><strong>الصوت:</strong> يُرسَل كإشارة رقمية أو تناظرية.</li>
  <li><strong>الفيديو:</strong> يُرسَل كإشارة رقمية أو تناظرية.</li>
</ul>

<h2>تدفق البيانات — أوضاع الإرسال</h2>
<ul>
  <li><strong>أحادي الاتجاه (Simplex):</strong> البيانات تتدفق في اتجاه واحد فقط (مثل لوحة المفاتيح للكمبيوتر، أو بث التلفزيون).</li>
  <li><strong>نصف مزدوج (Half-Duplex):</strong> البيانات يمكن أن تتدفق في كلا الاتجاهين، لكن ليس في وقت واحد (مثل أجهزة اللاسلكي).</li>
  <li><strong>مزدوج كامل (Full-Duplex):</strong> البيانات تتدفق في كلا الاتجاهين في آنٍ واحد (مثل المكالمات الهاتفية).</li>
</ul>

<h2>الطوبولوجيا المادية للشبكة</h2>

<h3>طوبولوجيا المشبك (Mesh)</h3>
<ul>
  <li>لـ <em>n</em> جهازًا: تحتاج إلى <strong>n(n−1)/2 رابطًا</strong> → تعقيد O(n²).</li>
  <li>مثال: 10 أجهزة → 10×9/2 = <strong>45 رابطًا</strong>.</li>
  <li><strong>المزايا:</strong> روابط مخصصة، عبء مرور منخفض، قوية، خصوصية عالية، عزل الأعطال سهل.</li>
  <li><strong>العيوب:</strong> تكلفة عالية وتركيب معقد O(n²).</li>
</ul>

<h3>طوبولوجيا النجمة (Star)</h3>
<ul>
  <li>كل جهاز له رابط مزدوج مخصص بينه وبين <strong>متحكم مركزي (موزع أو مبدل)</strong>.</li>
  <li>لـ <em>n</em> جهازًا: تحتاج إلى <strong>O(n) رابطًا</strong>.</li>
  <li><strong>المزايا:</strong> أقل تكلفةً من المشبك، سهلة التركيب، قوية (فشل جهاز واحد لا يؤثر على الباقين).</li>
  <li><strong>العيوب:</strong> نقطة فشل واحدة في المتحكم المركزي.</li>
</ul>

<h3>طوبولوجيا الحافلة (Bus)</h3>
<ul>
  <li>كابل واحد طويل (العمود الفقري) يربط جميع الأجهزة عبر <strong>اتصالات متعددة النقاط</strong>.</li>
  <li>لـ <em>n</em> جهازًا: تحتاج إلى <strong>O(1) رابط</strong> فقط.</li>
  <li><strong>المزايا:</strong> سهل التركيب وأقل تكلفةً.</li>
  <li><strong>العيوب:</strong> صعوبة إعادة الاتصال وعزل الأعطال؛ انعكاس الإشارة يُدهور الجودة؛ عطل في كابل العمود الفقري يوقف <em>كل</em> الإرسال (موثوقية منخفضة).</li>
</ul>

<h3>طوبولوجيا الحلقة (Ring)</h3>
<ul>
  <li>كل جهاز متصل بجهازَيه المجاورَين فقط مباشرةً، مُشكِّلًا حلقة مغلقة.</li>
  <li>الإشارة تنتقل في <strong>اتجاه واحد فقط</strong>؛ كل جهاز يحتوي على مُكرِّر (Repeater).</li>
  <li>لـ <em>n</em> جهازًا: تحتاج إلى <strong>O(n) رابطًا</strong>.</li>
  <li><strong>المزايا:</strong> سهل التركيب وإعادة التهيئة؛ عزل الأعطال مبسَّط.</li>
  <li><strong>العيوب:</strong> حركة مرور أحادية الاتجاه؛ موثوقية منخفضة (فشل جهاز واحد يمكن أن يكسر الحلقة بأكملها).</li>
</ul>

<h3>الطوبولوجيا الهجينة (Hybrid)</h3>
<p>مزيج من نوعين أو أكثر من الطوبولوجيا الأساسية. مثال شائع: <strong>عمود فقري نجمي مع عدة شبكات حافلة</strong> متصلة به.</p>

<h2>الديسيبل (dB) في الاتصالات</h2>
<p>الديسيبل وحدة قياس نسبية تُستخدم في الاتصالات للتعبير عن الكسب أو الخسارة في الطاقة:</p>
<ul>
  <li><strong>الصيغة:</strong> P<sub>dB</sub> = 10 × log<sub>10</sub>(P₂/P₁)</li>
  <li><strong>قاعدة الكسب:</strong> الخرج (dBW) = الدخل (dBW) + الكسب (dB) — جمع بالديسيبل = ضرب بالقيم المطلقة.</li>
  <li><strong>قاعدة الخسارة:</strong> الخرج (dBW) = الدخل (dBW) − الخسارة (dB) — الخسارة قيمة أقل من 1 في المقياس الخطي.</li>
</ul>

<h2>نسبة الإشارة إلى الضوضاء (SNR)</h2>
<ul>
  <li>SNR = متوسط طاقة الإشارة / متوسط طاقة الضوضاء</li>
  <li>SNR (dB) = 10 × log<sub>10</sub>(SNR)</li>
  <li>SNR مرتفع = قناة نظيفة وأخطاء أقل؛ SNR منخفض = ضوضاء تهيمن وأخطاء أكثر.</li>
</ul>

<h2>أداء الشبكة</h2>

<h3>(1) عرض النطاق الترددي (Bandwidth)</h3>
<ul>
  <li><strong>بالهرتز (Hz):</strong> نطاق الترددات التي يمكن للقناة تمريرها. مثال: خط الهاتف = 4 كيلوهرتز.</li>
  <li><strong>بالبت/ث (bps):</strong> عدد البتات في الثانية التي يمكن للقناة إرسالها. مثال: Ethernet = 100 ميغابت/ث.</li>
</ul>
<p><strong>معدل البت:</strong> R = 1/T بت/ثانية، حيث T هو مدة بت واحد.</p>
<p><strong>سعة شانون:</strong> Capacity = Bandwidth × log₂(1 + SNR)</p>

<h3>(2) الإنتاجية (Throughput)</h3>
<p>مقياس لسرعة إرسال البيانات الفعلية عبر الشبكة. دائمًا ≤ عرض النطاق الترددي. عرض النطاق هو السرعة المحتملة؛ الإنتاجية هي السرعة الفعلية المحققة.</p>

<h3>(3) الكمون (Latency / Delay)</h3>
<p><strong>الكمون = وقت الانتشار + وقت الإرسال + وقت الاصطفاف + تأخير المعالجة</strong></p>
<ul>
  <li><strong>وقت الانتشار</strong> = المسافة / سرعة الانتشار.</li>
  <li><strong>وقت الإرسال</strong> = حجم الرسالة / عرض النطاق الترددي.</li>
  <li><strong>وقت الاصطفاف:</strong> يزداد مع ازدحام الشبكة.</li>
  <li><strong>تأخير المعالجة:</strong> وقت فحص الحزمة وتحديد رابط الخرج.</li>
</ul>

<h3>(4) حاصل ضرب عرض النطاق × التأخير (Bandwidth-Delay Product)</h3>
<p>يحدد عدد البتات التي يمكن أن "تملأ" الرابط في أي لحظة. فكر في الرابط كأنبوب: المقطع العرضي هو عرض النطاق، والطول هو التأخير، والحجم هو حاصل الضرب.</p>
<p><strong>Bandwidth-Delay Product = Bandwidth (bps) × Delay (s)</strong></p>

<h3>(5) الاهتزاز (Jitter)</h3>
<p>هو <strong>التفاوت في التأخير</strong> للحزم التي تسلك نفس القناة. يُشكّل مشكلةً للتطبيقات الحساسة للوقت كبث الصوت والفيديو.</p>`,
      },
    },
  ],

  summary: {
    points: [
      'The Physical layer carries raw bit streams over physical media and deals with mechanical/electrical specifications, bit encoding, data rate, synchronization, line configuration, topology, and transmission mode.',
      'Encapsulation adds headers at each layer (Data → Segment → Packet → Frame → Bits); de-encapsulation reverses this at the receiver.',
      'Data types (text, numbers, images, audio, video) are all represented as bit patterns before transmission.',
      'Three transmission modes: Simplex (one direction), Half-Duplex (both directions, not simultaneous), Full-Duplex (both directions simultaneously).',
      'Mesh topology: n(n−1)/2 links, O(n²); most reliable but most expensive.',
      'Star topology: O(n) links; easy to manage; single point of failure at the central hub.',
      'Bus topology: O(1) links; cheapest but a backbone break stops all transmission.',
      'Ring topology: O(n) links; unidirectional; one device failure can break the ring.',
      'Shannon Capacity formula: C = B × log₂(1 + SNR) — sets the theoretical max data rate of a noisy channel.',
      'Latency = Propagation time + Transmission time + Queuing time + Processing delay; Jitter is variation in delay and harms real-time applications.',
    ],
    pointsAr: [
      'الطبقة المادية تحمل تيارات البتات الخام وتتعامل مع المواصفات الميكانيكية/الكهربائية، ترميز البتات، معدل البيانات، المزامنة، تهيئة الخط، الطوبولوجيا، ووضع الإرسال.',
      'التغليف يضيف رؤوسًا في كل طبقة (بيانات → شريحة → حزمة → إطار → بتات)؛ فك التغليف يعكس ذلك لدى المستقبل.',
      'جميع أنواع البيانات (نص، أرقام، صور، صوت، فيديو) تُمثَّل كأنماط بتات قبل الإرسال.',
      'ثلاثة أوضاع إرسال: أحادي الاتجاه (Simplex)، نصف مزدوج (Half-Duplex)، مزدوج كامل (Full-Duplex).',
      'طوبولوجيا المشبك: n(n−1)/2 رابطًا، O(n²)؛ الأكثر موثوقيةً والأغلى ثمنًا.',
      'طوبولوجيا النجمة: O(n) رابطًا؛ سهلة الإدارة؛ نقطة فشل واحدة في المتحكم المركزي.',
      'طوبولوجيا الحافلة: O(1) رابط؛ الأرخص لكن عطل العمود الفقري يوقف كل الإرسال.',
      'طوبولوجيا الحلقة: O(n) رابطًا؛ أحادية الاتجاه؛ فشل جهاز واحد يمكن أن يكسر الحلقة.',
      'صيغة سعة شانون: C = B × log₂(1 + SNR) — تحدد الحد النظري الأقصى لمعدل البيانات في قناة مشوشة.',
      'الكمون = وقت الانتشار + وقت الإرسال + وقت الاصطفاف + تأخير المعالجة؛ الاهتزاز هو تفاوت التأخير ويضر بالتطبيقات الفورية.',
    ],
  },

  mcq: [
    // ── Easy ──────────────────────────────────────────────────────────────────
    {
      id: 'cn-l3-q1',
      question: 'Which layer of the TCP/IP model is responsible for carrying raw bit streams over a physical medium?',
      questionAr: 'أي طبقة في نموذج TCP/IP مسؤولة عن حمل تيارات البتات الخام عبر الوسيط المادي؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Data Link Layer', isCorrect: false },
        { id: 'b', text: 'Network Layer', isCorrect: false },
        { id: 'c', text: 'Physical Layer', isCorrect: true },
        { id: 'd', text: 'Transport Layer', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q2',
      question: 'Which topology requires a central controller (hub or switch) to which all devices connect?',
      questionAr: 'أي طوبولوجيا تتطلب متحكمًا مركزيًا (موزعًا أو مبدلًا) تتصل به جميع الأجهزة؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Mesh', isCorrect: false },
        { id: 'b', text: 'Bus', isCorrect: false },
        { id: 'c', text: 'Ring', isCorrect: false },
        { id: 'd', text: 'Star', isCorrect: true },
      ],
    },
    {
      id: 'cn-l3-q3',
      question: 'In which transmission mode can data flow in both directions but not at the same time?',
      questionAr: 'في أي وضع إرسال يمكن أن تتدفق البيانات في كلا الاتجاهين لكن ليس في وقت واحد؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Simplex', isCorrect: false },
        { id: 'b', text: 'Half-Duplex', isCorrect: true },
        { id: 'c', text: 'Full-Duplex', isCorrect: false },
        { id: 'd', text: 'Multipoint', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q4',
      question: 'What is the correct order of encapsulation from the Application layer down to the Physical layer?',
      questionAr: 'ما هو الترتيب الصحيح للتغليف من طبقة التطبيقات وصولًا إلى الطبقة المادية؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Bits → Frame → Packet → Segment → Data', isCorrect: false },
        { id: 'b', text: 'Data → Segment → Packet → Frame → Bits', isCorrect: true },
        { id: 'c', text: 'Data → Packet → Segment → Frame → Bits', isCorrect: false },
        { id: 'd', text: 'Frame → Packet → Segment → Data → Bits', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q5',
      question: 'Which data type is represented as a matrix of pixels, with each pixel assigned a bit pattern?',
      questionAr: 'أي نوع من البيانات يُمثَّل كمصفوفة من وحدات البكسل، ويُسنَد لكل بكسل نمط بتات؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Text', isCorrect: false },
        { id: 'b', text: 'Audio', isCorrect: false },
        { id: 'c', text: 'Image', isCorrect: true },
        { id: 'd', text: 'Numbers', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q6',
      question: 'In a Bus topology, what happens when the backbone cable breaks?',
      questionAr: 'في طوبولوجيا الحافلة، ماذا يحدث عندما ينكسر كابل العمود الفقري؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Only the nearest device is affected', isCorrect: false },
        { id: 'b', text: 'All transmission on the network stops', isCorrect: true },
        { id: 'c', text: 'Data automatically reroutes through another path', isCorrect: false },
        { id: 'd', text: 'The network speed decreases but continues operating', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q7',
      question: 'What does throughput represent compared to bandwidth?',
      questionAr: 'ماذا تمثل الإنتاجية (Throughput) مقارنةً بعرض النطاق الترددي؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Throughput is always greater than bandwidth', isCorrect: false },
        { id: 'b', text: 'Throughput is the actual measured data rate; bandwidth is the theoretical maximum', isCorrect: true },
        { id: 'c', text: 'They are identical terms', isCorrect: false },
        { id: 'd', text: 'Bandwidth is the actual rate; throughput is the theoretical maximum', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q8',
      question: 'In a Ring topology, in which direction does a signal travel?',
      questionAr: 'في طوبولوجيا الحلقة، في أي اتجاه تنتقل الإشارة؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'In both directions simultaneously', isCorrect: false },
        { id: 'b', text: 'In one direction only', isCorrect: true },
        { id: 'c', text: 'It broadcasts to all devices at once', isCorrect: false },
        { id: 'd', text: 'In the direction of the highest priority device', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q9',
      question: 'Jitter is a problem mainly for which type of application?',
      questionAr: 'الاهتزاز (Jitter) يُشكّل مشكلةً بشكل رئيسي لأي نوع من التطبيقات؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'File transfer (FTP)', isCorrect: false },
        { id: 'b', text: 'Email (SMTP)', isCorrect: false },
        { id: 'c', text: 'Time-sensitive applications like audio and video streaming', isCorrect: true },
        { id: 'd', text: 'Web browsing (HTTP)', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q10',
      question: 'What does the dB formula P_dB = 10 × log₁₀(P₂/P₁) measure?',
      questionAr: 'ما الذي تقيسه صيغة الديسيبل P_dB = 10 × log₁₀(P₂/P₁)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The frequency of a signal', isCorrect: false },
        { id: 'b', text: 'The relative power gain or loss between two power levels', isCorrect: true },
        { id: 'c', text: 'The propagation speed of a signal', isCorrect: false },
        { id: 'd', text: 'The bandwidth of a channel in Hz', isCorrect: false },
      ],
    },

    // ── Medium ─────────────────────────────────────────────────────────────────
    {
      id: 'cn-l3-q11',
      question: '[MID] For a full Mesh topology with n=6 devices, how many links are required?',
      questionAr: '[MID] لطوبولوجيا مشبك كاملة مع n=6 أجهزة، كم عدد الروابط المطلوبة؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '12', isCorrect: false },
        { id: 'b', text: '15', isCorrect: true },
        { id: 'c', text: '18', isCorrect: false },
        { id: 'd', text: '36', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q12',
      question: 'Which of the following correctly ranks the four topologies by number of required links from fewest to most (for large n)?',
      questionAr: 'أي مما يلي يُصنّف الطوبولوجيا الأربعة بشكل صحيح حسب عدد الروابط المطلوبة من الأقل إلى الأكثر (لقيم n كبيرة)؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Bus O(1) < Ring O(n) ≈ Star O(n) < Mesh O(n²)', isCorrect: true },
        { id: 'b', text: 'Ring < Bus < Star < Mesh', isCorrect: false },
        { id: 'c', text: 'Star < Bus < Ring < Mesh', isCorrect: false },
        { id: 'd', text: 'Mesh < Star < Ring < Bus', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q13',
      question: '[MID] A 5 MB image is sent over a 1 Mbps link. What is the transmission time?',
      questionAr: '[MID] تُرسَل صورة حجمها 5 ميغابايت عبر رابط سرعته 1 ميغابت/ث. ما هو وقت الإرسال؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '5 ms', isCorrect: false },
        { id: 'b', text: '5 s', isCorrect: false },
        { id: 'c', text: '40 s', isCorrect: true },
        { id: 'd', text: '0.04 s', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q14',
      question: 'Which physical layer concern ensures the sender and receiver are aligned on the timing of each bit?',
      questionAr: 'أي اهتمام في الطبقة المادية يضمن توافق المرسل والمستقبل على توقيت كل بت؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Line configuration', isCorrect: false },
        { id: 'b', text: 'Physical topology', isCorrect: false },
        { id: 'c', text: 'Synchronization of bits', isCorrect: true },
        { id: 'd', text: 'Representation of bits', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q15',
      question: '[MID] Using Shannon\'s formula, what is the capacity of a channel with bandwidth 3100 Hz and SNR = 1000 (30 dB)?',
      questionAr: '[MID] باستخدام صيغة شانون، ما هي سعة قناة بعرض نطاق 3100 هرتز ونسبة SNR = 1000 (30 ديسيبل)؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'About 3.1 kbps', isCorrect: false },
        { id: 'b', text: 'About 31 kbps', isCorrect: true },
        { id: 'c', text: 'About 310 kbps', isCorrect: false },
        { id: 'd', text: 'About 3.1 Mbps', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q16',
      question: 'What is the bandwidth-delay product used to represent in networking?',
      questionAr: 'ما الذي يمثله حاصل ضرب عرض النطاق × التأخير في الشبكات؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The maximum file size that can be transmitted', isCorrect: false },
        { id: 'b', text: 'The number of bits that can fill the link at any one time', isCorrect: true },
        { id: 'c', text: 'The ratio of useful data to overhead', isCorrect: false },
        { id: 'd', text: 'The total number of hops in a path', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q17',
      question: 'In the context of dB calculations, if an amplifier has a gain of 10 dB and the input is −50 dBW, what is the output?',
      questionAr: 'في سياق حسابات الديسيبل، إذا كان كسب مكبر 10 ديسيبل والدخل −50 dBW، فما هو الخرج؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '−60 dBW', isCorrect: false },
        { id: 'b', text: '−40 dBW', isCorrect: true },
        { id: 'c', text: '−500 dBW', isCorrect: false },
        { id: 'd', text: '10 dBW', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q18',
      question: '[MID] What is the key difference between propagation time and transmission time?',
      questionAr: '[MID] ما الفرق الجوهري بين وقت الانتشار ووقت الإرسال؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'They are the same thing measured in different units', isCorrect: false },
        { id: 'b', text: 'Propagation time depends on distance and signal speed; transmission time depends on message size and bandwidth', isCorrect: true },
        { id: 'c', text: 'Propagation time depends on bandwidth; transmission time depends on distance', isCorrect: false },
        { id: 'd', text: 'Transmission time is always greater than propagation time', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q19',
      question: 'Which of the following describes a Hybrid topology?',
      questionAr: 'أي مما يلي يصف الطوبولوجيا الهجينة؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A single ring connecting all devices', isCorrect: false },
        { id: 'b', text: 'A combination of two or more basic topologies, e.g., a star backbone with bus networks attached', isCorrect: true },
        { id: 'c', text: 'Every device connected to every other device', isCorrect: false },
        { id: 'd', text: 'A wireless mesh with no physical cables', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q20',
      question: 'Queuing time in the latency formula is NOT a fixed factor. What determines how it changes?',
      questionAr: 'وقت الاصطفاف في صيغة الكمون ليس عاملًا ثابتًا. ما الذي يحدد كيفية تغيره؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The physical distance between sender and receiver', isCorrect: false },
        { id: 'b', text: 'The size of the message being sent', isCorrect: false },
        { id: 'c', text: 'The traffic load imposed on the network', isCorrect: true },
        { id: 'd', text: 'The type of encoding used for bits', isCorrect: false },
      ],
    },

    // ── Hard ───────────────────────────────────────────────────────────────────
    {
      id: 'cn-l3-q21',
      question: '[MID] A network with 10 Mbps bandwidth passes 12,000 frames per minute, each frame carrying 10,000 bits. What is the throughput, and what fraction of the bandwidth is it?',
      questionAr: '[MID] شبكة بعرض نطاق 10 ميغابت/ث تمرر 12,000 إطار في الدقيقة، كل إطار يحمل 10,000 بت. ما هي الإنتاجية وما كسرها من عرض النطاق؟',
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: '1 Mbps — one-tenth of bandwidth', isCorrect: false },
        { id: 'b', text: '2 Mbps — one-fifth of bandwidth', isCorrect: true },
        { id: 'c', text: '4 Mbps — two-fifths of bandwidth', isCorrect: false },
        { id: 'd', text: '5 Mbps — half of bandwidth', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q22',
      question: 'For a 2.5 KB email over a 1 Gbps link, distance = 12,000 km, propagation speed = 2.4×10⁸ m/s: which delay component dominates and why?',
      questionAr: 'لبريد إلكتروني حجمه 2.5 كيلوبايت عبر رابط 1 جيغابت/ث، مسافة 12,000 كم، سرعة الانتشار 2.4×10⁸ م/ث: أي مكون تأخير يهيمن ولماذا؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Transmission time dominates because the message is large', isCorrect: false },
        { id: 'b', text: 'Propagation time dominates because the message is tiny (0.020 ms to transmit) but the distance is large (50 ms to propagate)', isCorrect: true },
        { id: 'c', text: 'Queuing time always dominates over physical factors', isCorrect: false },
        { id: 'd', text: 'They are equal and neither dominates', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q23',
      question: '[MID] Why does the Ring topology include a repeater at each device?',
      questionAr: '[MID] لماذا تتضمن طوبولوجيا الحلقة مُكرِّرًا (Repeater) في كل جهاز؟',
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'To encrypt data passing through each node', isCorrect: false },
        { id: 'b', text: 'To regenerate (amplify) the signal as it passes through each device, preventing signal degradation over the ring', isCorrect: true },
        { id: 'c', text: 'To convert the signal from digital to analog', isCorrect: false },
        { id: 'd', text: 'To assign IP addresses to each device on the ring', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q24',
      question: 'Shannon\'s capacity formula was introduced in 1944. What is its fundamental significance?',
      questionAr: 'صيغة سعة شانون قُدِّمت عام 1944. ما أهميتها الجوهرية؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It gives the actual throughput achievable in practice', isCorrect: false },
        { id: 'b', text: 'It defines the theoretical maximum data rate of a noisy channel regardless of the encoding scheme used', isCorrect: true },
        { id: 'c', text: 'It calculates the minimum number of cables needed for a mesh network', isCorrect: false },
        { id: 'd', text: 'It measures the power loss in a transmission medium', isCorrect: false },
      ],
    },
    {
      id: 'cn-l3-q25',
      question: 'In Bus topology, signal reflection at taps is listed as a disadvantage. What does this mean and why is it a problem?',
      questionAr: 'في طوبولوجيا الحافلة، يُذكر انعكاس الإشارة عند نقاط الاتصال (Taps) كعيب. ماذا يعني ذلك ولماذا هو مشكلة؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Signals are reflected back toward the sender, causing duplicate data delivery', isCorrect: false },
        { id: 'b', text: 'When signals reach a tap, some energy is reflected back down the cable, causing interference with forward-traveling signals and degrading signal quality', isCorrect: true },
        { id: 'c', text: 'Reflection means the signal changes direction and travels in reverse, reaching unintended devices', isCorrect: false },
        { id: 'd', text: 'Reflection is only a problem in fiber optic cables, not copper Bus networks', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'cn-l3-w1',
      question: 'List and explain the main concerns of the Physical layer.',
      questionAr: 'اذكر واشرح الاهتمامات الرئيسية للطبقة المادية.',
      modelAnswer:
        '1. Physical characteristics of interfaces and medium: hardware specs of connectors and cables. 2. Representation of bits: bits must be encoded into electrical or optical signals. 3. Data rate: how many bits per second can be sent. 4. Synchronization of bits: sender and receiver clocks must be synchronized. 5. Line configuration: point-to-point or multipoint connection. 6. Physical topology: how devices are physically arranged. 7. Transmission mode: direction of data flow (Simplex, Half-Duplex, Full-Duplex).',
      modelAnswerAr:
        '1. الخصائص المادية للواجهات والوسيط: مواصفات الأجهزة للموصلات والكابلات. 2. تمثيل البتات: يجب ترميز البتات إلى إشارات كهربائية أو ضوئية. 3. معدل البيانات: كم بت في الثانية يمكن إرساله. 4. مزامنة البتات: يجب مزامنة ساعتَي المرسل والمستقبل. 5. تهيئة الخط: اتصال نقطة إلى نقطة أو متعدد النقاط. 6. الطوبولوجيا المادية: كيفية ترتيب الأجهزة فيزيائيًا. 7. وضع الإرسال: اتجاه تدفق البيانات (Simplex، Half-Duplex، Full-Duplex).',
    },
    {
      id: 'cn-l3-w2',
      question: 'Compare the four physical topologies (Mesh, Star, Bus, Ring) in terms of number of required links, advantages, and disadvantages.',
      questionAr: 'قارن بين الطوبولوجيا المادية الأربعة (المشبك، النجمة، الحافلة، الحلقة) من حيث عدد الروابط المطلوبة والمزايا والعيوب.',
      modelAnswer:
        'Mesh: n(n-1)/2 links O(n²); Advantages: dedicated links, highly robust, high security, easy fault isolation; Disadvantages: expensive, complex installation. Star: O(n) links; Advantages: easy to manage, adding/removing a node doesn\'t affect others; Disadvantages: single point of failure at the hub/switch. Bus: O(1) links; Advantages: cheapest, easiest to install; Disadvantages: backbone failure kills the network, difficult fault isolation, signal reflection. Ring: O(n) links; Advantages: easy installation, simplified fault isolation; Disadvantages: unidirectional, one device failure can break the entire ring.',
      modelAnswerAr:
        'المشبك: n(n-1)/2 رابطًا O(n²)؛ المزايا: روابط مخصصة، قوية جدًا، أمان عالٍ، عزل أعطال سهل؛ العيوب: مكلف وتركيب معقد. النجمة: O(n) رابطًا؛ المزايا: سهلة الإدارة، إضافة/إزالة جهاز لا تؤثر على الآخرين؛ العيوب: نقطة فشل واحدة في الموزع/المبدل. الحافلة: O(1) رابط؛ المزايا: الأرخص والأسهل تركيبًا؛ العيوب: فشل العمود الفقري يوقف الشبكة، صعوبة عزل الأعطال، انعكاس الإشارة. الحلقة: O(n) رابطًا؛ المزايا: سهلة التركيب وعزل الأعطال مبسَّط؛ العيوب: أحادية الاتجاه، فشل جهاز واحد يمكن أن يكسر الحلقة.',
    },
    {
      id: 'cn-l3-w3',
      question: 'Explain the three transmission modes (Simplex, Half-Duplex, Full-Duplex) and give a real-world example of each.',
      questionAr: 'اشرح أوضاع الإرسال الثلاثة (Simplex، Half-Duplex، Full-Duplex) وأعطِ مثالًا واقعيًا لكل منها.',
      modelAnswer:
        'Simplex: data flows in one direction only; neither side can reverse the role. Example: a keyboard sending data to a computer, or a TV broadcast. Half-Duplex: data can flow in both directions but not simultaneously; only one device transmits at a time. Example: walkie-talkies ("over and out"). Full-Duplex: data flows in both directions simultaneously; both devices can send and receive at the same time. Example: a telephone call.',
      modelAnswerAr:
        'أحادي الاتجاه (Simplex): البيانات تتدفق في اتجاه واحد فقط؛ لا يمكن لأي طرف عكس الدور. مثال: لوحة المفاتيح ترسل البيانات إلى الكمبيوتر، أو بث التلفزيون. نصف مزدوج (Half-Duplex): البيانات يمكن أن تتدفق في كلا الاتجاهين لكن ليس في وقت واحد؛ جهاز واحد يرسل في كل مرة. مثال: أجهزة اللاسلكي (واكي-توكي). مزدوج كامل (Full-Duplex): البيانات تتدفق في كلا الاتجاهين في آنٍ واحد؛ كلا الجهازين يمكنهما الإرسال والاستقبال في نفس الوقت. مثال: المكالمة الهاتفية.',
    },
    {
      id: 'cn-l3-w4',
      question: 'Define latency and write its formula. Explain each of the four components.',
      questionAr: 'عرّف الكمون (Latency) واكتب صيغته. اشرح كل واحد من مكوناته الأربعة.',
      modelAnswer:
        'Latency = Propagation time + Transmission time + Queuing time + Processing delay. 1. Propagation time = traveling distance / propagation speed — time for a bit to physically travel from source to destination. 2. Transmission time = message size / channel bandwidth — time to push all bits into the link. 3. Queuing time — time the message waits at a router before processing; increases with network load (not fixed). 4. Processing delay — time to check the packet header and determine the output link.',
      modelAnswerAr:
        'الكمون = وقت الانتشار + وقت الإرسال + وقت الاصطفاف + تأخير المعالجة. 1. وقت الانتشار = المسافة / سرعة الانتشار — الوقت الذي يستغرقه البت للسفر فيزيائيًا من المصدر إلى الوجهة. 2. وقت الإرسال = حجم الرسالة / عرض النطاق — الوقت اللازم لدفع جميع البتات إلى الرابط. 3. وقت الاصطفاف — الوقت الذي تنتظر فيه الرسالة في الموجه قبل المعالجة؛ يزداد مع حمل الشبكة (ليس ثابتًا). 4. تأخير المعالجة — وقت فحص رأس الحزمة وتحديد رابط الخرج.',
    },
    {
      id: 'cn-l3-w5',
      question: 'What is Shannon\'s capacity formula? Apply it to find the maximum data rate of a voice telephone channel with SNR = 30 dB and bandwidth 3100 Hz.',
      questionAr: 'ما هي صيغة سعة شانون؟ طبّقها لإيجاد أقصى معدل بيانات لقناة صوتية هاتفية مع SNR = 30 ديسيبل وعرض نطاق 3100 هرتز.',
      modelAnswer:
        'Shannon\'s Capacity: C = B × log₂(1 + SNR), where B is bandwidth in Hz and SNR is the linear signal-to-noise ratio. SNR = 30 dB → linear SNR = 10^(30/10) = 10³ = 1000. C = 3100 × log₂(1001) ≈ 3100 × 9.97 ≈ 31 kbps. This means no encoding scheme can exceed ~31 kbps on this channel. Higher speeds (e.g., 56 kbps) require cleaner channels with higher SNR.',
      modelAnswerAr:
        'صيغة شانون: C = B × log₂(1 + SNR)، حيث B هو عرض النطاق بالهرتز وSNR هو النسبة الخطية للإشارة إلى الضوضاء. SNR = 30 ديسيبل → SNR الخطي = 10^(30/10) = 10³ = 1000. C = 3100 × log₂(1001) ≈ 3100 × 9.97 ≈ 31 كيلوبت/ث. هذا يعني أن أي طريقة ترميز لا يمكنها تجاوز ~31 كيلوبت/ث على هذه القناة. السرعات الأعلى (مثل 56 كيلوبت/ث) تتطلب قنوات أنظف ذات SNR أعلى.',
    },
    {
      id: 'cn-l3-w6',
      question: 'Explain the concept of the Bandwidth-Delay Product and why it matters using the pipe analogy.',
      questionAr: 'اشرح مفهوم حاصل ضرب عرض النطاق × التأخير (Bandwidth-Delay Product) وأهميته باستخدام تشبيه الأنبوب.',
      modelAnswer:
        'The Bandwidth-Delay Product = Bandwidth (bps) × Delay (seconds). It represents the number of bits that can be "in flight" (filling the link) at any one time. Using the pipe analogy: the cross-section of the pipe represents bandwidth (how wide), the length represents delay (how long), and the volume represents the bandwidth-delay product — the total number of bits the pipe can hold. A high-bandwidth, long-delay link (like a satellite link) can hold a very large number of bits simultaneously. This matters because a sender must keep sending data continuously to fully utilize the link.',
      modelAnswerAr:
        'حاصل ضرب عرض النطاق × التأخير = عرض النطاق (بت/ث) × التأخير (ثانية). يمثل عدد البتات التي يمكن أن تكون "في الطريق" (تملأ الرابط) في أي لحظة. باستخدام تشبيه الأنبوب: المقطع العرضي يمثل عرض النطاق (عرض الأنبوب)، والطول يمثل التأخير (طول الأنبوب)، والحجم يمثل حاصل الضرب — إجمالي عدد البتات التي يمكن للأنبوب استيعابها. رابط ذو عرض نطاق عالٍ وتأخير طويل (مثل الأقمار الصناعية) يمكنه استيعاب عدد كبير جدًا من البتات في وقت واحد. هذا يهم لأن المرسل يجب أن يستمر في الإرسال لاستغلال الرابط بالكامل.',
    },
  ],
};