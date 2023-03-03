import { uuid } from "uuidv4";
import { File } from "../@types";
import Service from "../Service";

class FileService extends Service {
  private static getSignedUrl (fileInfo: File.UploadRequestInput) {
    return this.Http
      .post<File.UploadRequest>('/upload-requests', fileInfo)
      .then(this.getData)
      .then(res => res.uploadSignedUrl)
  }

  private static uploadFileToSignedUrl (signedUrl: string, file: File) {
    return this.Http
      .put<{}>(signedUrl, file, {
        headers: { 'Content-Type': file.type }
      })
      .then(this.getData)
  }

  private static getFileExtension (fileName: string) {
    const [extension] = fileName.split('.').slice(-1)
    return extension
  }

  private static generateFileName (extension: string) {
    return `${uuid()}.${extension}`
  }

  static async upload (file: File) {
    const extension = this.getFileExtension(file.name);
    const fileName = this.generateFileName(extension)
    
    const signedUrl = await FileService
      .getSignedUrl({ fileName, contentLength: file.size })

    await FileService
      .uploadFileToSignedUrl(signedUrl, file)
    
    return signedUrl.split('?')[0]
  }
}

export default FileService