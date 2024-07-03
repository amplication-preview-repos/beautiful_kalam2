import { Module } from "@nestjs/common";
import { ProcessedMethodModuleBase } from "./base/processedMethod.module.base";
import { ProcessedMethodService } from "./processedMethod.service";
import { ProcessedMethodController } from "./processedMethod.controller";
import { ProcessedMethodResolver } from "./processedMethod.resolver";

@Module({
  imports: [ProcessedMethodModuleBase],
  controllers: [ProcessedMethodController],
  providers: [ProcessedMethodService, ProcessedMethodResolver],
  exports: [ProcessedMethodService],
})
export class ProcessedMethodModule {}
