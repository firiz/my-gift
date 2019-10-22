import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  @ApiBearerAuth()
  async getProfile(@Request() req) {
    return req.user;
  }
}
