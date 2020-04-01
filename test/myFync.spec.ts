import * as fs from 'fs';
import * as path from 'path';
import { myFunction } from '../src/myFunction';

describe('MyFunc', () => {
  it("tests something involving input/output", () => {
    spyOn(fs, 'copyFileSync');
    spyOn(fs, 'unlinkSync');
    spyOn(fs, 'readFileSync').and.returnValue(`1,Test,Yes`);

    myFunction();

    expect(fs.copyFileSync).toHaveBeenCalledWith(path.resolve('data/file1.csv'), path.resolve('data/otherDir/file2.csv'));
    expect(fs.unlinkSync).toHaveBeenCalled();
    expect(fs.readFileSync).toHaveBeenCalled();

  });
});