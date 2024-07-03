import * as graphql from "@nestjs/graphql";
import { ProcessedMethodResolverBase } from "./base/processedMethod.resolver.base";
import { ProcessedMethod } from "./base/ProcessedMethod";
import { ProcessedMethodService } from "./processedMethod.service";

@graphql.Resolver(() => ProcessedMethod)
export class ProcessedMethodResolver extends ProcessedMethodResolverBase {
  constructor(protected readonly service: ProcessedMethodService) {
    super(service);
  }
}
