export const CHEATSHEET = [
  {
    title: 'ER Notation Symbols',
    titleAr: 'رموز تدوين ER',
    items: [
      { label: 'Strong Entity', value: 'Single Rectangle [ ]', labelAr: 'كيان قوي', valueAr: 'مستطيل مفرد' },
      { label: 'Weak Entity', value: 'Double Rectangle [[ ]]', labelAr: 'كيان ضعيف', valueAr: 'مستطيل مزدوج' },
      { label: 'Relationship', value: 'Diamond ⋄', labelAr: 'علاقة', valueAr: 'معين' },
      { label: 'Primary Key', value: 'Underlined Attribute Name <u>ID</u>', labelAr: 'مفتاح أساسي', valueAr: 'اسم صفة تحته خط' },
      { label: 'Multi-valued', value: 'Double Ellipse (( ))', labelAr: 'متعدد القيم', valueAr: 'شكل بيضاوي مزدوج' },
      { label: 'Derived', value: 'Dashed Ellipse - - -', labelAr: 'صفة مشتقة', valueAr: 'شكل بيضاوي منقط' },
    ],
  },
  {
    title: 'Cardinality (Crow\'s Foot)',
    titleAr: 'الكارديليتي (Crow\'s Foot)',
    items: [
      { label: 'Mandatory One', value: '||', labelAr: 'واحد إلزامي' },
      { label: 'Mandatory Many', value: '|>', labelAr: 'كثير إلزامي' },
      { label: 'Optional One', value: 'O|', labelAr: 'واحد اختياري' },
      { label: 'Optional Many', value: 'O>', labelAr: 'كثير اختياري' },
    ],
  },
  {
    title: 'SQL DDL Syntax',
    titleAr: 'بناء جمل SQL DDL',
    items: [
      { label: 'CREATE', value: 'CREATE TABLE name (col type...);', labelAr: 'إنشاء' },
      { label: 'ALTER', value: 'ALTER TABLE name ADD col type;', labelAr: 'تعديل' },
      { label: 'DROP', value: 'DROP TABLE name;', labelAr: 'حذف جدول' },
      { label: 'TRUNCATE', value: 'Empty table but keep structure.', labelAr: 'تفريغ الجدول' },
    ],
  },
  {
    title: 'SQL DML Syntax',
    titleAr: 'بناء جمل SQL DML',
    items: [
      { label: 'SELECT', value: 'SELECT * FROM table WHERE condition;', labelAr: 'استعلام' },
      { label: 'INSERT', value: 'INSERT INTO table VALUES (...);', labelAr: 'إضافة' },
      { label: 'UPDATE', value: 'UPDATE table SET col = val WHERE id = x;', labelAr: 'تحديث' },
      { label: 'DELETE', value: 'DELETE FROM table WHERE id = x;', labelAr: 'حذف سجل' },
    ],
  },
  {
    title: 'Situations Analysis',
    titleAr: 'تحليل المواقف',
    items: [
      { label: 'Nouns', value: 'Entities', labelAr: 'الأسماء', valueAr: 'كيانات' },
      { label: 'Verbs', value: 'Relationships', labelAr: 'الأفعال', valueAr: 'علاقات' },
      { label: 'Adjectives', value: 'Attributes', labelAr: 'الصفات', valueAr: 'صفات/خصائص' },
      { label: 'Adverbs', value: 'Attributes of Associative Entities', labelAr: 'الظروف', valueAr: 'صفات الكيانات الوسيطة' },
    ],
  },
  {
    title: 'JOINS',
    titleAr: 'الربط (JOINS)',
    items: [
      { label: 'Explicit', value: 'FROM A JOIN B ON A.id = B.a_id', labelAr: 'صريح' },
      { label: 'Implicit', value: 'FROM A, B WHERE A.id = B.a_id', labelAr: 'ضمني' },
      { label: 'Inner Join', value: 'Returns rows with matching values in both tables.', labelAr: 'ربط داخلي' },
    ],
  },
];
