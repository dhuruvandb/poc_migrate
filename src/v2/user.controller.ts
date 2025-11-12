import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserV2Service } from './user.service';

@Controller('api/v2/users')
export class UserV2Controller {
  constructor(private readonly userService: UserV2Service) {}

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() body: { name: string; email: string; bio?: string }) {
    return this.userService.create(body);
  }
}
