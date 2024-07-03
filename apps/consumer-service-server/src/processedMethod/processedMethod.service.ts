import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedMethodServiceBase } from "./base/processedMethod.service.base";

@Injectable()
export class ProcessedMethodService extends ProcessedMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
