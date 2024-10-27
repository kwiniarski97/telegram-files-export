import { Service } from "typedi";

@Service()
export class FilesService {
  async exists(path: string): Promise<boolean> {
    const file = Bun.file(path);
    return file.exists();
  }

  async readFile(path: string): Promise<string> {
    const file = Bun.file(path);
    return file.text();
  }

  async writeFile(path: string, content: string): Promise<void> {
    await Bun.write(path, content);
  }
}
