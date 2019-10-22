import { Controller, Request, Body, Post, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginDTO: LoginDTO, @Request() req) {
    return this.authService.login(req.user);
  }
}
