import { FileHelper } from "@cloud-helper/file-helper";
export declare class S3Helper implements FileHelper {
    checkExisted(path: string, isPublic: boolean): Promise<boolean>;
    version(): string;
}
