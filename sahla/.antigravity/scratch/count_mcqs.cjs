
const fs = require('fs');
const path = require('path');

const subjectsDir = 'd:/college/sem 4/ip/sahla/src/data/subjects';

function countMCQs(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Basic regex to count questions. Looking for 'question:' followed by a string.
    const mcqMatch = content.match(/question:\s*['"`]/g);
    return mcqMatch ? mcqMatch.length : 0;
}

function getTitle(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
    return titleMatch ? titleMatch[1] : path.basename(filePath);
}

function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkDir(filePath, fileList);
        } else if (file.endsWith('.js') && !file.includes('template')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const allFiles = walkDir(subjectsDir);
const report = [];

allFiles.forEach(file => {
    const count = countMCQs(file);
    if (count > 0) {
        const relativePath = path.relative(subjectsDir, file);
        const parts = relativePath.split(path.sep);
        const subject = parts[0];
        const topic = parts.length > 2 ? parts[1] : 'Core';
        const title = getTitle(file);
        
        report.push({
            subject,
            topic,
            file: path.basename(file),
            title,
            count
        });
    }
});

// Sort by subject, then topic
report.sort((a, b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    if (a.topic !== b.topic) return a.topic.localeCompare(b.topic);
    return a.file.localeCompare(b.file);
});

console.log('| Subject | Topic | Component | Title | MCQs |');
console.log('|---------|-------|-----------|-------|------|');
report.forEach(r => {
    console.log(`| ${r.subject} | ${r.topic} | ${r.file} | ${r.title} | ${r.count} |`);
});

const total = report.reduce((sum, r) => sum + r.count, 0);
console.log(`\n**Total MCQs found: ${total}**`);
