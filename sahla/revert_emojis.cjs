const fs = require('fs');
const path = require('path');

const rootDirRelative = process.argv[2];
const rootDir = path.resolve(process.cwd(), rootDirRelative);

const emojiMap = {
  '🔹': '<i class="fa-solid fa-chevron-right text-accent-500 mr-2 text-[0.8em]"></i>',
  '📘': '<i class="fa-solid fa-book text-accent-500 mr-2"></i>',
  '🎓': '<i class="fa-solid fa-graduation-cap text-accent-500 mr-2"></i>',
  '💡': '<i class="fa-solid fa-lightbulb text-amber-500 mr-2"></i>',
  '🔍': '<i class="fa-solid fa-magnifying-glass text-accent-500 mr-2"></i>',
  '🧮': '<i class="fa-solid fa-calculator text-accent-400 mr-2"></i>',
  '⭐': '<i class="fa-solid fa-star text-amber-400 mr-1"></i>',
  'ℹ️': '<i class="fa-solid fa-circle-info text-blue-500 mr-2"></i>',
  '⚠️': '<i class="fa-solid fa-triangle-exclamation text-amber-500 mr-2"></i>',
  '📗': '<i class="fa-solid fa-book text-emerald-500 mr-2"></i>',
  '📙': '<i class="fa-solid fa-book text-orange-500 mr-2"></i>',
  '📕': '<i class="fa-solid fa-book text-rose-500 mr-2"></i>',
  '📓': '<i class="fa-solid fa-note-sticky text-accent-500 mr-2"></i>',
  '🧪': '<i class="fa-solid fa-vial text-accent-500 mr-2"></i>',
  '🔬': '<i class="fa-solid fa-microscope text-accent-500 mr-2"></i>',
  '🏠': '<i class="fa-solid fa-house text-accent-500 mr-2"></i>',
  '📝': '<i class="fa-solid fa-pen-to-square text-accent-500 mr-2"></i>',
  '🗣️': '<i class="fa-solid fa-comment text-accent-300 mr-2"></i>',
  '🧠': '<i class="fa-solid fa-brain text-rose-400 mr-2"></i>',
  '📐': '<i class="fa-solid fa-ruler-combined text-accent-500 mr-2"></i>',
};

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(rootDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [emoji, replacement] of Object.entries(emojiMap)) {
    if (content.includes(replacement)) {
      content = content.split(replacement).join(emoji);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Reverted: ${file}`);
  }
});
