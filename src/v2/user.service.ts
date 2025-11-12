import { Injectable } from '@nestjs/common';
import { PrismaV2Service } from './prisma.service';

@Injectable()
export class UserV2Service {
  constructor(private prisma: PrismaV2Service) {}

  getAll() {
    return this.prisma.user.findMany({ include: { profile: true } });
  }

  create(data: { name: string; email: string; bio?: string }) {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        profile: data.bio ? { create: { bio: data.bio } } : undefined,
      },
      include: { profile: true },
    });
  }
}
