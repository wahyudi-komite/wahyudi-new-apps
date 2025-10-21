import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  @Get()
  @Roles('admin') // hanya admin yang bisa akses
  findAll() {
    return 'List of users';
  }

  @Get('profile')
  @Roles('admin', 'staff') // keduanya boleh
  getProfile() {
    return 'Profile info';
  }
}
