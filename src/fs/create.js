
import { join } from 'path';
import { writeFile } from 'fs/promises';
const create = async () => {
    const filePath = join( 'files', 'fresh.txt');
    const content = 'My new string';

    try {
// Флаг 'w' — перезаписывает файл, если он существует
        await writeFile(filePath, content, { flag: 'w' });
        console.log('Content successfully written to fresh.txt!');
    } catch (error) {
        throw new Error('FS operation failed: ' + error.message);
    }
};

await create();