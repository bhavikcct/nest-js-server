import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.email,
      createUserDto.password,
      createUserDto.username,
    );
  }

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response,
  ) {
    const { access_token } = await this.authService.login(
      loginUserDto.email,
      loginUserDto.password,
    );

    response.cookie('jwt', access_token, {
      httpOnly: true,
       domain:".localhost",
       
      secure: true, 
      sameSite: 'strict', 
      maxAge: 60 * 60 * 1000, 
    });
    //   res.cookie("accessToken", accessToken, {
    //     domain: CONFIG.ORIGIN,
    //     maxAge: 10 * 60 * 1000,
    //     httpOnly: true,
    //     secure: CONFIG.NODE_ENV === "prod",
    //     sameSite: "lax",
    // })

    return { message: 'Login successful', access_token };
  }
}
