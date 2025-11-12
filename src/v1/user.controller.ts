import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserV1Service } from './user.service';

@Controller('api/v1/users')
export class UserV1Controller {
  constructor(private readonly userService: UserV1Service) {}

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.userService.create(body);
  }
}
