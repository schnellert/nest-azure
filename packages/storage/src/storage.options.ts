import {
  AnonymousCredential,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

export interface AzureStorageOptions {
  url: string;
  credential?: StorageSharedKeyCredential | AnonymousCredential;
}
