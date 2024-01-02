import { createConfigurableDynamicRootModule } from "@golevelup/nestjs-modules";
import { Module } from "@nestjs/common";
import { AZURE_STORAGE_CLIENT } from "./storage.constants";
import { BlobServiceClient } from "@azure/storage-blob";
import { AzureStorageOptions } from "./storage.options";

@Module({})
export class AzureStorageModule extends createConfigurableDynamicRootModule<
  AzureStorageModule,
  AzureStorageOptions
>(AZURE_STORAGE_CLIENT, {
  providers: [
    {
      provide: AZURE_STORAGE_CLIENT,
      useFactory: (options: AzureStorageOptions): BlobServiceClient =>
        new BlobServiceClient(options.url, options.credential),
    },
  ],
  exports: [AZURE_STORAGE_CLIENT],
}) {}
