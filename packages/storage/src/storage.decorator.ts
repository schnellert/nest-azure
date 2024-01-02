import { makeInjectableDecorator } from "@golevelup/nestjs-common";
import { AZURE_STORAGE_CLIENT } from "./storage.constants";

export const InjectAzureStorageClient =
  makeInjectableDecorator(AZURE_STORAGE_CLIENT);
