import { Module } from '@nestjs/common';
import { UserV1Controller } from './v1/user.controller';
import { UserV1Service } from './v1/user.service';
import { PrismaV1Service } from './v1/prisma.service';
import { UserV2Controller } from './v2/user.controller';
import { UserV2Service } from './v2/user.service';
import { PrismaV2Service } from './v2/prisma.service';

@Module({
  controllers: [UserV1Controller, UserV2Controller],
  providers: [UserV1Service, PrismaV1Service, UserV2Service, PrismaV2Service],
})
export class AppModule {}
