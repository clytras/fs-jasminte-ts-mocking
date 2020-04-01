import { copyFileSync, unlinkSync, readFileSync } from 'fs';
import * as path from 'path';

function myOtherFunction(path: string) {
  const data:string = readFileSync(path, { encoding: "utf8" });

  console.log(`myOtherFunction(path = "${path}"); read file length = ${data.length}`);
}

function myIOFunction(somePath: string) {
  var copyPath = path.resolve('data/otherDir/file2.csv');

  console.log(`myIOFunction(somePath = "${somePath}", copyPath = "${copyPath}")`);

  copyFileSync(somePath, copyPath);

  try {
    myOtherFunction(copyPath);
  } catch(err) {
    console.log(`ERR:myIOFunction`, err);
  } finally {
    console.log(`unlinkSync(copyPath = "${copyPath}")`);
    unlinkSync(copyPath);
  }
}

export function myFunction() {

  myIOFunction(path.resolve('data/file1.csv'));
}
