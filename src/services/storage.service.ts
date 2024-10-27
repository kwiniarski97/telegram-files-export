import { AuthKey } from "telegram/crypto/AuthKey";
import { Service } from "typedi";
import type { FilesService } from "./files.service.ts";

interface Storage {
  auth: AuthKey;
}

const FILE_PATH = "./storage.json";

@Service()
export class StorageService {
  constructor(private filesService: FilesService) {
    this.initStorageFile();
  }

  private async initStorageFile() {
    if (await this.filesService.exists(FILE_PATH)) {
      return;
    }
    await this.filesService.writeFile(`./${FILE_PATH}`, JSON.stringify({}));
  }
}
