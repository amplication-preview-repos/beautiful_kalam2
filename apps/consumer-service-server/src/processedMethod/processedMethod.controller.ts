import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedMethodService } from "./processedMethod.service";
import { ProcessedMethodControllerBase } from "./base/processedMethod.controller.base";

@swagger.ApiTags("processedMethods")
@common.Controller("processedMethods")
export class ProcessedMethodController extends ProcessedMethodControllerBase {
  constructor(protected readonly service: ProcessedMethodService) {
    super(service);
  }
}
