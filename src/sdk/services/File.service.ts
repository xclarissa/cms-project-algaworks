import { File } from "../@types";
import Service from "../Service";

class FileService extends Service {
  // recupera url assinada 
  static getSignedUrl(fileInfo: File.UploadRequestInput) {
    return this.Http.post<File.UploadRequest>("/upload-requests", fileInfo)
      .then(this.getData)
      .then((res) => res.uploadSignedUrl);
  }

  // envia arq para url assinada
  static uploadFileToSignedUrl(signedUrl: string, file: File) {
    return this.Http.put<{}>(signedUrl, file, {
      headers: { "Content-Type": file.type }
    })
      .then(this.getData)
  }
}

export default FileService;