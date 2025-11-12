import { Injectable } from '@nestjs/common';
import { PrismaV1Service } from './prisma.service';

@Injectable()
export class UserV1Service {
  constructor(private prisma: PrismaV1Service) {}

  getAll() {
    return this.prisma.user.findMany();
  }

  create(data: { name: string; email: string }) {
    return this.prisma.user.create({ data });
  }
}
