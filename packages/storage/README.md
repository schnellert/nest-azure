# @schnellert/nest-azure-storage

Simple nest azure storage client

## Getting started

### Installation

#### PNPM

- Install the package along with the aws azure storage peer dependency
  `pnpm install @schnellert/nest-azure-storage @azure/storage-blob`

#### NPM

- Install the package along with the azure storage client peer dependency
  `npm install @schnellert/nest-azure-storage@azure/storage-blob`

#### YARN

- Install the package along with the azure storage client peer dependency
  `yarn add @schnellert/nest-azure-storage @azure/storage-blob`

### Example 'forRoot'

```typescript
import { AzureStorageModule } from "@schnellert/nest-azure-storage";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AzureStorageModule.forRoot(AzureStorageModule, {
      url: "<url>",
    }),
  ],
})
export class AppModule {}
```

### Example 'forRootAsync' with nest.js config service:

```typescript
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AzureStorageModule } from "@schnellert/nest-azure-storage";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AzureStorageModule.forRootAsync(AzureStorageModule, {
      useFactory: (configService: ConfigService) => {
        return {
          url: configService.getOrThrow("AZURE_CONNECTION_STRING"),
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

### Inject azure storage client:

```typescript
import { BlobServiceClient } from "@azure/storage-blob";
import { InjectAzureStorageClient } from "@schnellert/nest-azure-storage";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(
    @InjectAzureStorageClient() private readonly client: BlobServiceClient
  ) {
    // ...
  }
}
```
